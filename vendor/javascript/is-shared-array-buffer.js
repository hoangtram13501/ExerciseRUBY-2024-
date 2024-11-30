// is-shared-array-buffer@1.0.3 downloaded from https://ga.jspm.io/npm:is-shared-array-buffer@1.0.3/index.js

import*as r from"call-bind/callBound";var e=r;try{"default"in r&&(e=r.default)}catch(r){}var a={};var t=e;var f=t("SharedArrayBuffer.prototype.byteLength",true);
/** @type {import('.')} */a=f?function isSharedArrayBuffer(r){if(!r||typeof r!=="object")return false;try{f(r);return true}catch(r){return false}}:function isSharedArrayBuffer(r){return false};var u=a;export{u as default};

