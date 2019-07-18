define(["lodash","app/plugins/sdk"],function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=127)}({0:function(e,n){e.exports=t},127:function(t,e,n){"use strict";n.r(e);var r,i=n(0),a=n.n(i),s=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function s(t){try{u(r.next(t))}catch(t){a(t)}}function o(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,o)}u((r=r.apply(t,e||[])).next())})},o=function(t,e){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},u=function(){function t(t,e){void 0===e&&(e=null),this.url=t,this.container=e,this.contextPromise=null,this.metricMetadataCache={},this.indomCache={},this.d="",t.includes(":44322")||(this.d="_")}return t.prototype._createContext=function(){return s(this,void 0,void 0,function(){var e,n;return o(this,function(r){switch(r.label){case 0:return e=this.url+"/pmapi/context?hostspec=127.0.0.1&polltimeout=30",[4,t.datasourceRequest({url:e})];case 1:return n=r.sent(),this.context=n.data.context,this.container?[4,t.datasourceRequest({url:this.url+"/pmapi/"+this.context+"/"+this.d+"store",params:{name:"pmcd.client.container",value:this.container}})]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}})})},t.prototype.createContext=function(){return s(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return this.contextPromise?[2,this.contextPromise]:(this.contextPromise=this._createContext(),[4,this.contextPromise]);case 1:return t.sent(),this.contextPromise=null,[2]}})})},t.prototype.ensureContext=function(t){return s(this,void 0,void 0,function(){var e;return o(this,function(n){switch(n.label){case 0:return this.context?[3,2]:[4,this.createContext()];case 1:n.sent(),n.label=2;case 2:return n.trys.push([2,4,,9]),[4,t()];case 3:return[2,n.sent()];case 4:return(e=n.sent()).data&&e.data.includes("unknown context identifier")?(console.debug("context expired, creating new context..."),[4,this.createContext()]):[3,7];case 5:return n.sent(),[4,t()];case 6:return[2,n.sent()];case 7:throw e;case 8:return[3,9];case 9:return[2]}})})},t.prototype.fetchMetricMetadata=function(e){return s(this,void 0,void 0,function(){var n,r,i,a,u,c=this;return o(this,function(l){switch(l.label){case 0:return n={},e&&(n.prefix=e),[4,this.ensureContext(function(){return s(c,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return[4,t.datasourceRequest({url:"http://localhost:44322/pmapi/metric",params:n})];case 1:return[2,e.sent().data.metrics]}})})})];case 1:for(r=l.sent(),this.metricMetadataCache={},i=0,a=r;i<a.length;i++)u=a[i],this.metricMetadataCache[u.name]=u;return[2]}})})},t.prototype.findMetricMetadata=function(t){return this.metricMetadataCache[t]},t.prototype.refreshIndoms=function(e){return s(this,void 0,void 0,function(){var n,r,i,a,u=this;return o(this,function(c){switch(c.label){case 0:return[4,this.ensureContext(function(){return s(u,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,t.datasourceRequest({url:this.url+"/pmapi/"+this.context+"/"+this.d+"indom",params:{name:e}})];case 1:return[2,n.sent().data.instances]}})})})];case 1:for(n=c.sent(),this.indomCache[e]={},r=0,i=n;r<i.length;r++)a=i[r],this.indomCache[e][a.instance]=a.name;return[2,this.indomCache[e]]}})})},t.prototype.fetch=function(e,n){return void 0===n&&(n=!1),s(this,void 0,void 0,function(){var r,i,a,u,c,l,f,p,h,d=this;return o(this,function(v){switch(v.label){case 0:return[4,this.ensureContext(function(){return s(d,void 0,void 0,function(){return o(this,function(n){switch(n.label){case 0:return[4,t.datasourceRequest({url:this.url+"/pmapi/"+this.context+"/"+this.d+"fetch",params:{names:e.join(",")}})];case 1:return[2,n.sent().data]}})})})];case 1:if(r=v.sent(),!n)return[3,9];i=0,a=r.values,v.label=2;case 2:return i<a.length?0==(u=a[i]).instances.length?[3,8]:-1===u.instances[0].instance?(u.instances[0].instanceName=null,[3,8]):(c=this.indomCache[u.name])?[3,4]:[4,this.refreshIndoms(u.name)]:[3,9];case 3:c=v.sent(),v.label=4;case 4:l=!1,f=0,p=u.instances,v.label=5;case 5:return f<p.length?((h=p[f]).instanceName=c[h.instance],h.instanceName||l?[3,7]:[4,this.refreshIndoms(u.name)]):[3,8];case 6:c=v.sent(),h.instanceName=c[h.instance],l=!0,v.label=7;case 7:return f++,[3,5];case 8:return i++,[3,2];case 9:return[2,r]}})})},t.prototype.store=function(e,n){return s(this,void 0,void 0,function(){var r=this;return o(this,function(i){switch(i.label){case 0:return[4,this.ensureContext(function(){return t.datasourceRequest({url:r.url+"/pmapi/"+r.context+"/"+r.d+"store",params:{name:e,value:n}})})];case 1:return[2,i.sent()]}})})},t}(),c=function(){function t(t,e){this.context=t,this.oldestDataMs=e,this.store={}}return t.prototype.ingestCounterMetric=function(t,e,n){if(t.length>0){var r=t[t.length-1],i=r[1],a=r[2],s=(n-i)/1e3;t.push([(e.value-a)/s,n,e.value])}else t.push([void 0,n,e.value])},t.prototype.ingestMetric=function(t,e,n){var r=this.context.findMetricMetadata(e.name);if(r)for(var i=0,a=e.instances;i<a.length;i++){var s=a[i],o=t[s.instanceName];(!o||r.labels&&"output"===r.labels.metrictype)&&(o=t[s.instanceName]=[]),"counter"===r.sem?this.ingestCounterMetric(o,s,n):o.push([s.value,n])}else console.info("skipping ingestion of "+e.name+": metadata not available")},t.prototype.ingest=function(t){if(!a.a.isEmpty(t))for(var e=1e3*t.timestamp.s+t.timestamp.us/1e3,n=0,r=t.values;n<r.length;n++){var i=r[n];this.store[i.name]||(this.store[i.name]={}),this.ingestMetric(this.store[i.name],i,e)}},t.prototype.queryTimeSeries=function(t,e,n){for(var r=[],i=0,a=t;i<a.length;i++){var s=a[i];if(s in this.store)for(var o in this.store[s]){var u={target:"null"===o?s:o,datapoints:this.store[s][o].filter(function(t){return e<=t[1]&&t[1]<=n&&null!=t[0]})};r.push(u)}}return r},t.prototype.cleanExpiredMetrics=function(){var t=(new Date).getTime()-this.oldestDataMs;for(var e in this.store)for(var n in this.store[e])this.store[e][n]=this.store[e][n].filter(function(e){return e[1]>t})},t}(),l=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function s(t){try{u(r.next(t))}catch(t){a(t)}}function o(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,o)}u((r=r.apply(t,e||[])).next())})},f=function(t,e){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},p=function(){function t(t,e,n){this.context=t,this.poller=e,this.keepPollingMs=n,this.scripts={},this.failedScripts={}}return t.prototype.ensureActive=function(t){return l(this,void 0,void 0,function(){var e;return f(this,function(n){switch(n.label){case 0:return t in this.failedScripts?[2,this.failedScripts[t]]:!(e=a.a.find(Object.values(this.scripts),function(e){return e.code===t}))||"stopped"===e.status&&0==e.exit_code?[4,this.register(t)]:[3,2];case 1:return[2,n.sent()];case 2:return e.lastRequested=(new Date).getTime(),[2,e]}})})},t.prototype.register=function(t){return l(this,void 0,void 0,function(){var e,n,r,i;return f(this,function(a){switch(a.label){case 0:console.debug("registering script",t),e=new u(this.context.url),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,e.store("bpftrace.control.register",t)];case 2:return a.sent(),[3,4];case 3:if(!(n=a.sent()).data||!n.data.includes("-12400"))throw n;return[3,4];case 4:return[4,e.fetch(["bpftrace.control.register"])];case 5:return r=a.sent(),(i=JSON.parse(r.values[0].instances[0].value)).code=t,i.lastRequested=(new Date).getTime(),console.debug("bpftrace.control.register response",i),"stopped"!==i.status?[3,6]:(this.failedScripts[t]=i,[3,8]);case 6:return this.scripts[i.name]=i,[4,this.context.fetchMetricMetadata("bpftrace")];case 7:a.sent(),a.label=8;case 8:return[2,i]}})})},t.prototype.cleanupExpiredScripts=function(){var t=(new Date).getTime()-this.keepPollingMs;this.scripts=a.a.pickBy(this.scripts,function(e){return e.lastRequested>t})},t.prototype.syncState=function(){return l(this,void 0,void 0,function(){var t,e,n,r,i,s,o,u,c,l,p,h,d;return f(this,function(f){switch(f.label){case 0:return a.a.isEmpty(this.scripts)?[2]:[4,this.context.fetchMetricMetadata("bpftrace")];case 1:for(f.sent(),t=[],e=function(e){for(var r=!0,i=0,a=["bpftrace.scripts."+e.name+".status","bpftrace.scripts."+e.name+".exit_code","bpftrace.scripts."+e.name+".output"];i<a.length;i++){var s=a[i];n.context.findMetricMetadata(s)?t.push(s):r=!1}if(!r&&"starting"!==e.status){console.info("script "+e.name+" is missing on the PMDA "+e.status);var o=e.vars.map(function(t){return"bpftrace.scripts."+e.name+".data."+t});delete n.scripts[e.name],n.poller.removeMetricsFromPolling(o)}},n=this,r=0,i=Object.values(this.scripts);r<i.length;r++)d=i[r],e(d);return 0===t.length?[2]:[4,this.context.fetch(t)];case 2:for(s=f.sent(),o=0,u=s.values;o<u.length;o++)c=u[o],l=c.name.split("."),p=l[2],h=l[3],(d=this.scripts[p])&&["status","exit_code","output"].includes(h)&&(d[h]=c.instances[0].value);return[2]}})})},t}(),h=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function s(t){try{u(r.next(t))}catch(t){a(t)}}function o(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,o)}u((r=r.apply(t,e||[])).next())})},d=function(t,e){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},v=function(){function t(t,e,n){this.context=t,this.datastore=e,this.keepPollingMs=n,this.requestedMetrics={}}return t.prototype.poll=function(){return h(this,void 0,void 0,function(){var t,e;return d(this,function(n){switch(n.label){case 0:return 0==(t=Object.keys(this.requestedMetrics)).length?[2]:[4,this.context.fetch(t,!0)];case 1:return e=n.sent(),this.datastore.ingest(e),[2]}})})},t.prototype.ensurePolling=function(t){for(var e=(new Date).getTime(),n=0,r=t;n<r.length;n++){var i=r[n];this.requestedMetrics[i]=e}},t.prototype.removeMetricsFromPolling=function(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];delete this.requestedMetrics[r]}},t.prototype.cleanupExpiredMetrics=function(){var t=(new Date).getTime()-this.keepPollingMs;this.requestedMetrics=a.a.pickBy(this.requestedMetrics,function(e){return e>t})},t}(),m=function(){function t(){this.endpoints={}}return t.prototype.generateId=function(t,e){return void 0===e&&(e=null),t+"::"+e},t.prototype.find=function(t,e){void 0===e&&(e=null);var n=this.generateId(t,e);return this.endpoints[n]},t.prototype.create=function(t,e,n,r){var i=this.generateId(t,e),a=new u(t,e),s=new c(a,r),o=new v(a,s,n),l=new p(a,o,n);return this.endpoints[i]={context:a,datastore:s,poller:o,scriptRegistry:l},this.endpoints[i]},t.prototype.list=function(){return Object.values(this.endpoints)},t}(),y=function(){function t(t){this.templateSrv=t}return t.prototype.getLabel=function(t,e){if(a.a.isEmpty(e))return t;var n={instance:{value:t}};return this.templateSrv.replace(e,n)},t.prototype.updateLabels=function(t,e){var n=this;return t.map(function(t){return{target:n.getLabel(t.target,e.legendFormat),datapoints:t.datapoints}})},t.prototype.transformToHistogram=function(t){for(var e=0,n=t;e<n.length;e++){var r=n[e];r.target=r.target.split("-")[1],r.datapoints=r.datapoints.map(function(t){return[t[0],1e3*Math.ceil(t[1]/1e3),t[2]]})}return t},t.prototype.transformToTable=function(t){var e="";t.length>0&&(e=t[0].datapoints[0][0]);for(var n={columns:[],rows:[],type:"table"},r=e.split("\n"),i=[],s=function(t){if(0===(t=t.trim()).length||t.includes("Ctrl-C"))return"continue";if(a.a.isEmpty(n.columns))for(var e=t.split(/\s\s+/),r=0;r<e.length;r++){var s=t.indexOf(e[r]),o=r+1<e.length?t.indexOf(e[r+1])-1:void 0;n.columns.push({text:e[r]}),i.push([s,o])}else{var u=i.map(function(e){return t.substring(e[0],e[1]).trim()});n.rows.push(u)}},o=0,u=r;o<u.length;o++){s(u[o])}return[n]},t.prototype.transform=function(t,e){if(e.format===r.TimeSeries)return this.updateLabels(t,e);if(e.format===r.Heatmap)return this.transformToHistogram(t);if(e.format==r.Table)return this.transformToTable(t);throw{message:"Invalid target format"}},t}(),b=function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function s(t){try{u(r.next(t))}catch(t){a(t)}}function o(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,o)}u((r=r.apply(t,e||[])).next())})},g=function(t,e){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},w=1e3,x=2e3;!function(t){t.TimeSeries="time_series",t.Table="table",t.Heatmap="heatmap"}(r||(r={}));var M,S=function(){function t(t,e,n,r,i){this.name=t.name,this.url=t.url,this.q=e,this.backendSrv=n,this.templateSrv=r,this.variableSrv=i,this.withCredentials=t.withCredentials,this.headers={"Content-Type":"application/json"},"string"==typeof t.basicAuth&&t.basicAuth.length>0&&(this.headers.Authorization=t.basicAuth),u.datasourceRequest=this.doRequest.bind(this),this.endpointRegistry=new m,this.transformations=new y(this.templateSrv),setInterval(this.doPollAll.bind(this),w),setInterval(this.syncScriptStates.bind(this),x)}return t.$inject=["instanceSettings","$q","backendSrv","templateSrv","variableSrv"],t.prototype.doPollAll=function(){for(var t=0,e=this.endpointRegistry.list();t<e.length;t++){var n=e[t];n.datastore.cleanExpiredMetrics(),n.poller.cleanupExpiredMetrics(),n.poller.poll()}},t.prototype.syncScriptStates=function(){for(var t=0,e=this.endpointRegistry.list();t<e.length;t++){var n=e[t];n.scriptRegistry.cleanupExpiredScripts(),n.scriptRegistry.syncState()}},t.prototype.getMetricNameForMetricType=function(t,e,n){for(var r=0,i=e.vars;r<i.length;r++){var a=i[r],s="bpftrace.scripts."+e.name+".data."+a,o=t.findMetricMetadata(s);if(o&&o.labels&&o.labels.metrictype===n)return s}return null},t.prototype.getMetricNamesForTarget=function(t,e,n){if(e.format===r.TimeSeries)return n.vars.map(function(t){return"bpftrace.scripts."+n.name+".data."+t});if(e.format===r.Heatmap){if(i=this.getMetricNameForMetricType(t,n,"histogram"))return[i];throw{message:"Cannot find any histogram in this BPFtrace script."}}if(e.format===r.Table){var i;if(i=this.getMetricNameForMetricType(t,n,"output"))return[i];throw{message:"Table format is only supported with printf() BPFtrace scripts."}}return[]},t.prototype.query=function(t){return b(this,void 0,void 0,function(){var e,n,r,i,a,s,o,u,c,l,f,p,h;return g(this,function(d){switch(d.label){case 0:if(0==(e=t).targets.length)return[2,{data:[]}];n=this.getVariables(),r=[],i=0,a=e.targets,d.label=1;case 1:if(!(i<a.length))return[3,6];if((s=a[i]).hide||!s.code)return[3,5];if(0===(o=s.code.trim()).length)return[3,5];u=void 0,u=n.url&&n.url.value.length>0?n.url.value:this.url,(c=this.endpointRegistry.find(u))||(c=this.endpointRegistry.create(u,null,2e4,3e5)),l=void 0,d.label=2;case 2:return d.trys.push([2,4,,5]),[4,c.scriptRegistry.ensureActive(o)];case 3:if("started"!==(l=d.sent()).status&&"starting"!==l.status)throw{message:"BPFtrace error:\n\n"+l.output};return f=this.getMetricNamesForTarget(c.context,s,l),c.poller.ensurePolling(f),p=c.datastore.queryTimeSeries(f,t.range.from.valueOf(),t.range.to.valueOf()),r.push.apply(r,this.transformations.transform(p,s)),[3,5];case 4:return h=d.sent(),this.handleError(h,s),[3,5];case 5:return i++,[3,1];case 6:return[2,{data:r}]}})})},t.prototype.handleError=function(t,e){throw t.refId=e.refId,t},t.prototype.testDatasource=function(){return b(this,void 0,void 0,function(){var t;return g(this,function(e){switch(e.label){case 0:t=new u(this.url,null),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,t.createContext()];case 2:return e.sent(),[2,{status:"success",message:"Data source is working",title:"Success"}];case 3:return e.sent(),[2,{status:"error",message:"Cannot connect to "+t.url,title:"Error"}];case 4:return[2]}})})},t.prototype.metricFindQuery=function(t){return b(this,void 0,void 0,function(){return g(this,function(t){return[2,[]]})})},t.prototype.doRequest=function(t){return b(this,void 0,void 0,function(){return g(this,function(e){switch(e.label){case 0:return t.withCredentials=this.withCredentials,t.headers=this.headers,[4,this.backendSrv.datasourceRequest(t)];case 1:return[2,e.sent()]}})})},t.prototype.getVariables=function(){var t={};if(!this.variableSrv.variables)return{};for(var e=0,n=this.variableSrv.variables;e<n.length;e++){var r=n[e],i=r.current.value;("$__all"===i||a.a.isEqual(i,["$__all"]))&&(i=null===r.allValue?r.options.slice(1).map(function(t){return t.value}):r.allValue),t[r.name]={text:r.current.text,value:i}}return t},t}(),C=n(3),T=(M=function(t,e){return(M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}M(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),P=function(t){function e(e,n){var i=t.call(this,e,n)||this;return i.formats=[],i.target.code=i.target.code||"",i.target.format=i.target.format||i.getDefaultFormat(),i.formats=[{text:"Time series",value:r.TimeSeries},{text:"Table",value:r.Table},{text:"Heatmap",value:r.Heatmap}],i}return T(e,t),e.$inject=["$scope","$injector"],e.prototype.getDefaultFormat=function(){return"table"===this.panelCtrl.panel.type?r.Table:"heatmap"===this.panelCtrl.panel.type?r.Heatmap:r.TimeSeries},e.prototype.refreshMetricData=function(){this.panelCtrl.refresh()},e.templateUrl="datasources/bpftrace/partials/query.editor.html",e}(C.QueryCtrl);n.d(e,"ConfigCtrl",function(){return k}),n.d(e,"QueryOptionsCtrl",function(){return q}),n.d(e,"AnnotationsQueryCtrl",function(){return _}),n.d(e,"Datasource",function(){return S}),n.d(e,"QueryCtrl",function(){return P});var k=function(){function t(){}return t.templateUrl="datasources/bpftrace/partials/config.html",t}(),q=function(){function t(){}return t.templateUrl="datasources/bpftrace/partials/query.options.html",t}(),_=function(){function t(){}return t.templateUrl="datasources/bpftrace/partials/annotations.editor.html",t}()},3:function(t,n){t.exports=e}})});
//# sourceMappingURL=module.js.map