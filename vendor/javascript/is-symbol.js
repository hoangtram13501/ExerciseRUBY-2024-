// is-symbol@1.0.4 downloaded from https://ga.jspm.io/npm:is-symbol@1.0.4/index.js

import*as t from"has-symbols";var r="default"in t?t.default:t;var e={};var o=Object.prototype.toString;var l=r();if(l){var a=Symbol.prototype.toString;var f=/^Symbol\(.*\)$/;var n=function isRealSymbolObject(t){return"symbol"===typeof t.valueOf()&&f.test(a.call(t))};e=function isSymbol(t){if("symbol"===typeof t)return true;if("[object Symbol]"!==o.call(t))return false;try{return n(t)}catch(t){return false}}}else e=function isSymbol(t){return false};var s=e;export default s;

