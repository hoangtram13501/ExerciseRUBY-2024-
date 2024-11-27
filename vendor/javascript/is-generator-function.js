// is-generator-function@1.0.10 downloaded from https://ga.jspm.io/npm:is-generator-function@1.0.10/index.js

import*as t from"has-tostringtag/shams";var r="default"in t?t.default:t;var n={};var e=Object.prototype.toString;var a=Function.prototype.toString;var o=/^\s*(?:function)?\*/;var f=r();var i=Object.getPrototypeOf;var getGeneratorFunc=function(){if(!f)return false;try{return Function("return function*() {}")()}catch(t){}};var u;n=function isGeneratorFunction(t){if("function"!==typeof t)return false;if(o.test(a.call(t)))return true;if(!f){var r=e.call(t);return"[object GeneratorFunction]"===r}if(!i)return false;if("undefined"===typeof u){var n=getGeneratorFunc();u=!!n&&i(n)}return i(t)===u};var c=n;export default c;

