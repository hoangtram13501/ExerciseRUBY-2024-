// querystring@2.1.0 downloaded from https://ga.jspm.io/npm:@jspm/core@2.1.0/nodelibs/browser/querystring.js

var e={},r=false;function dew$2(){if(r)return e;r=true;function hasOwnProperty(e,r){return Object.prototype.hasOwnProperty.call(e,r)}e=function(e,r,n,t){r=r||"&";n=n||"=";var o={};if(typeof e!=="string"||e.length===0)return o;var a=/\+/g;e=e.split(r);var u=1e3;t&&typeof t.maxKeys==="number"&&(u=t.maxKeys);var i=e.length;u>0&&i>u&&(i=u);for(var s=0;s<i;++s){var c,f,d,p,l=e[s].replace(a,"%20"),y=l.indexOf(n);if(y>=0){c=l.substr(0,y);f=l.substr(y+1)}else{c=l;f=""}d=decodeURIComponent(c);p=decodeURIComponent(f);hasOwnProperty(o,d)?Array.isArray(o[d])?o[d].push(p):o[d]=[o[d],p]:o[d]=p}return o};return e}var n={},t=false;function dew$1(){if(t)return n;t=true;var stringifyPrimitive=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};n=function(e,r,n,t){r=r||"&";n=n||"=";e===null&&(e=void 0);return typeof e==="object"?Object.keys(e).map((function(t){var o=encodeURIComponent(stringifyPrimitive(t))+n;return Array.isArray(e[t])?e[t].map((function(e){return o+encodeURIComponent(stringifyPrimitive(e))})).join(r):o+encodeURIComponent(stringifyPrimitive(e[t]))})).filter(Boolean).join(r):t?encodeURIComponent(stringifyPrimitive(t))+n+encodeURIComponent(stringifyPrimitive(e)):""};return n}var o={},a=false;function dew(){if(a)return o;a=true;o.decode=o.parse=dew$2();o.encode=o.stringify=dew$1();return o}const u=dew();u.decode;u.parse;u.encode;u.stringify;var i=u.decode;var s=u.encode;var c=u.parse;var f=u.stringify;export{i as decode,u as default,s as encode,c as parse,f as stringify};
