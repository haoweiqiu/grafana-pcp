import _ from 'lodash';
import Context from './context';
import { Datapoint, TimeSeriesResult } from './types';

export default class DataStore {
    private store: Record<string, Record<string, Datapoint[]>> = {}; // store[metric][instance] = [val,ts,origVal]

    constructor(private context: Context, private oldestDataMs: number) {
    }

    ingestCounterMetric(instanceStore: Datapoint[], instance: any, pollTimeEpochMs: number) {
        // first value: store it as undefined, to be filtered by queryTimeSeries()
        // subsequent values: perform rate conversation
        if (instanceStore.length > 0) {
            let [, prevTimeMs, prevOrigVal] = instanceStore[instanceStore.length - 1];
            const deltaSec = (pollTimeEpochMs - prevTimeMs) / 1000;
            instanceStore.push([(instance.value - prevOrigVal!) / deltaSec, pollTimeEpochMs, instance.value]);
        }
        else {
            instanceStore.push([undefined, pollTimeEpochMs, instance.value]);
        }
    }

    ingestMetric(metricStore: Record<string, Datapoint[]>, metric: any, pollTimeEpochMs: number) {
        const metadata = this.context.findMetricMetadata(metric.name);
        if (!metadata) {
            console.info(`skipping ingestion of ${metric.name}: metadata not available`);
            return;
        }

        for (const instance of metric.instances) {
            let instanceStore = metricStore[instance.instanceName];

            // for the bpftrace output variable, always recreate the metric store (do not store history)
            if (!instanceStore || (metadata.labels && metadata.labels.metrictype === "output")) {
                instanceStore = metricStore[instance.instanceName] = [];
            }

            if (metadata.sem === "counter") {
                this.ingestCounterMetric(instanceStore, instance, pollTimeEpochMs);
            }
            else {
                instanceStore.push([instance.value, pollTimeEpochMs]);
            }
        }
    }

    ingest(data: any) {
        if (_.isEmpty(data))
            return;

        const pollTimeEpochMs = data.timestamp.s * 1000 + data.timestamp.us / 1000;
        for (const metric of data.values) {
            if (!this.store[metric.name]) {
                this.store[metric.name] = {};
            }

            this.ingestMetric(this.store[metric.name], metric, pollTimeEpochMs);
        }
    }

    queryTimeSeries(metrics: string[], from: number, to: number) {
        let targetResults: TimeSeriesResult[] = [];
        for (const metric of metrics) {
            if (!(metric in this.store))
                continue;

            for (const instance in this.store[metric]) {
                let target = {
                    // for metrics without instance domains, show metric name
                    target: instance === "null" ? metric : instance,
                    datapoints: this.store[metric][instance].filter((dataPoint: Datapoint) => (
                        from <= dataPoint[1] && dataPoint[1] <= to && dataPoint[0] != undefined
                    ))
                };

                targetResults.push(target);
            }
        }
        return targetResults;
    }

    cleanExpiredMetrics() {
        const keepExpiry = new Date().getTime() - this.oldestDataMs
        for (const metric in this.store) {
            for (const instance in this.store[metric]) {
                this.store[metric][instance] = this.store[metric][instance].filter(
                    (dataPoint: Datapoint) => dataPoint[1] > keepExpiry
                );
            }
        }
    }
}