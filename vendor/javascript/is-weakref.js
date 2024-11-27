// is-weakref@1.0.2 downloaded from https://ga.jspm.io/npm:is-weakref@1.0.2/index.js

import*as e from"call-bind/callBound";var r="default"in e?e.default:e;var a={};var t=r;var f=t("WeakRef.prototype.deref",true);a="undefined"===typeof WeakRef?function isWeakRef(e){return false}:function isWeakRef(e){if(!e||"object"!==typeof e)return false;try{f(e);return true}catch(e){return false}};var n=a;export{n as default};

