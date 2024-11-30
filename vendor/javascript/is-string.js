// is-string@1.0.6 downloaded from https://ga.jspm.io/npm:is-string@1.0.6/index.js

var t={};var r=String.prototype.valueOf;var e=function tryStringObject(t){try{r.call(t);return true}catch(t){return false}};var o=Object.prototype.toString;var n="[object String]";var a="function"===typeof Symbol&&!!Symbol.toStringTag;t=function isString(t){return"string"===typeof t||"object"===typeof t&&(a?e(t):o.call(t)===n)};var c=t;export default c;

