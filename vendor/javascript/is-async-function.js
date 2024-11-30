// is-async-function@2.0.0 downloaded from https://ga.jspm.io/npm:is-async-function@2.0.0/index.js

import*as t from"has-tostringtag/shams";var r="default"in t?t.default:t;var n={};var a=Object.prototype.toString;var e=Function.prototype.toString;var o=/^\s*async(?:\s+function(?:\s+|\()|\s*\()/;var f=r();var i=Object.getPrototypeOf;var getAsyncFunc=function(){if(!f)return false;try{return Function("return async function () {}")()}catch(t){}};var u;n=function isAsyncFunction(t){if("function"!==typeof t)return false;if(o.test(e.call(t)))return true;if(!f){var r=a.call(t);return"[object AsyncFunction]"===r}if(!i)return false;if("undefined"===typeof u){var n=getAsyncFunc();u=!!n&&i(n)}return i(t)===u};var c=n;export{c as default};

