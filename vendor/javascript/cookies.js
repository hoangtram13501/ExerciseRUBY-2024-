// cookies@0.3.8 downloaded from https://ga.jspm.io/npm:cookies@0.3.8/lib/cookies.js

import e from"http";var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var i={};var s=e;var o={};function Cookies(e,i,s){if(!((this||t)instanceof Cookies))return new Cookies(e,i,s);(this||t).request=e;(this||t).response=i;(this||t).keys=s}Cookies.prototype={get:function(e,i){var s=e+".sig",o,r,n,h,a,u,c=i&&void 0!==i.signed?i.signed:!!(this||t).keys;o=(this||t).request.headers["cookie"];if(o){r=o.match(getPattern(e));if(r){n=r[1];if(!i||!c)return n;h=this.get(s);if(h){a=e+"="+n;if(!(this||t).keys)throw new Error(".keys required for signed cookies");u=(this||t).keys.index(a,h);if(!(u<0)){u&&this.set(s,(this||t).keys.sign(a),{signed:false});return n}this.set(s,null,{path:"/",signed:false})}}}},set:function(e,i,o){var r=(this||t).response,n=(this||t).request,h=r.getHeader("Set-Cookie")||[],a=n.connection.encrypted,u=new Cookie(e,i,o),c=o&&void 0!==o.signed?o.signed:!!(this||t).keys;"string"==typeof h&&(h=[h]);if(!a&&o&&o.secure)throw new Error("Cannot send secure cookie over unencrypted socket");u.secure=a;o&&"secure"in o&&(u.secure=o.secure);o&&"secureProxy"in o&&(u.secure=o.secureProxy);h=pushCookie(h,u);if(o&&c){if(!(this||t).keys)throw new Error(".keys required for signed cookies");u.value=(this||t).keys.sign(u.toString());u.name+=".sig";h=pushCookie(h,u)}var f=r.set?s.OutgoingMessage.prototype.setHeader:r.setHeader;f.call(r,"Set-Cookie",h);return this||t}};function Cookie(e,i,s){i||((this||t).expires=new Date(0));(this||t).name=e;(this||t).value=i||"";for(var e in s)(this||t)[e]=s[e]}Cookie.prototype={path:"/",expires:void 0,domain:void 0,httpOnly:true,secure:false,overwrite:false,toString:function(){return(this||t).name+"="+(this||t).value},toHeader:function(){var e=this.toString();(this||t).maxage&&((this||t).expires=new Date(Date.now()+(this||t).maxage));(this||t).path&&(e+="; path="+(this||t).path);(this||t).expires&&(e+="; expires="+(this||t).expires.toUTCString());(this||t).domain&&(e+="; domain="+(this||t).domain);(this||t).secure&&(e+="; secure");(this||t).httpOnly&&(e+="; httponly");return e}};function getPattern(e){return o[e]?o[e]:o[e]=new RegExp("(?:^|;) *"+e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")+"=([^;]*)")}function pushCookie(e,t){t.overwrite&&(e=e.filter((function(e){return 0!==e.indexOf(t.name+"=")})));e.push(t.toHeader());return e}Cookies.connect=Cookies.express=function(e){return function(t,i,s){t.cookies=i.cookies=new Cookies(t,i,e);s()}};Cookies.Cookie=Cookie;i=Cookies;var r=i;export default r;
