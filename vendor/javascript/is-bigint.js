// is-bigint@1.0.2 downloaded from https://ga.jspm.io/npm:is-bigint@1.0.2/index.js

var t={};if("function"===typeof BigInt){var e=BigInt.prototype.valueOf;var n=function tryBigIntObject(t){try{e.call(t);return true}catch(t){}return false};t=function isBigInt(t){return null!==t&&"undefined"!==typeof t&&"boolean"!==typeof t&&"string"!==typeof t&&"number"!==typeof t&&"symbol"!==typeof t&&"function"!==typeof t&&("bigint"===typeof t||n(t))}}else t=function isBigInt(t){return false};var f=t;export default f;

