// is-boolean-object@1.1.2 downloaded from https://ga.jspm.io/npm:is-boolean-object@1.1.2/index.js

import*as t from"call-bind/callBound";import*as a from"has-tostringtag/shams";var o="default"in t?t.default:t;var r="default"in a?a.default:a;var e={};var n=o;var l=n("Boolean.prototype.toString");var i=n("Object.prototype.toString");var u=function booleanBrandCheck(t){try{l(t);return true}catch(t){return false}};var f="[object Boolean]";var c=r();e=function isBoolean(t){return"boolean"===typeof t||null!==t&&"object"===typeof t&&(c&&Symbol.toStringTag in t?u(t):i(t)===f)};var v=e;export default v;

