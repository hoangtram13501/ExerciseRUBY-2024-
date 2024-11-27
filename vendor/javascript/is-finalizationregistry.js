// is-finalizationregistry@1.0.2 downloaded from https://ga.jspm.io/npm:is-finalizationregistry@1.0.2/index.js

import*as t from"call-bind/callBound";var r="default"in t?t.default:t;var a={};var e=r;var i=e("FinalizationRegistry.prototype.register",true);a=i?function isFinalizationRegistry(t){if(!t||"object"!==typeof t)return false;try{i(t,{});return true}catch(t){return false}}:function isFinalizationRegistry(t){return false};var n=a;export{n as default};

