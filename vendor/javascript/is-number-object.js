// is-number-object@1.0.7 downloaded from https://ga.jspm.io/npm:is-number-object@1.0.7/index.js

import*as t from"has-tostringtag/shams";var r="default"in t?t.default:t;var e={};var a=Number.prototype.toString;var o=function tryNumberObject(t){try{a.call(t);return true}catch(t){return false}};var u=Object.prototype.toString;var n="[object Number]";var c=r();e=function isNumberObject(t){return"number"===typeof t||"object"===typeof t&&(c?o(t):u.call(t)===n)};var b=e;export{b as default};

