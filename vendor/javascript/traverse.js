// traverse@0.6.10 downloaded from https://ga.jspm.io/npm:traverse@0.6.10/index.js

import*as e from"which-typed-array";import*as t from"typedarray.prototype.slice";import*as r from"gopd";var o=e;try{"default"in e&&(o=e.default)}catch(e){}var n=t;try{"default"in t&&(n=t.default)}catch(e){}var a=r;try{"default"in r&&(a=r.default)}catch(e){}var i={};var l=o;var u=n;var s=a;function toS(e){return Object.prototype.toString.call(e)}function isDate(e){return toS(e)==="[object Date]"}function isRegExp(e){return toS(e)==="[object RegExp]"}function isError(e){return toS(e)==="[object Error]"}function isBoolean(e){return toS(e)==="[object Boolean]"}function isNumber(e){return toS(e)==="[object Number]"}function isString(e){return toS(e)==="[object String]"}var c=Array.isArray||function isArray(e){return Object.prototype.toString.call(e)==="[object Array]"};function forEach(e,t){if(e.forEach)return e.forEach(t);for(var r=0;r<e.length;r++)t(e[r],r,e)}var f=Object.keys||function keys(e){var t=[];for(var r in e)t[t.length]=r;return t};var p=Object.prototype.propertyIsEnumerable;var v=Object.getOwnPropertySymbols;function ownEnumerableKeys(e){var t=f(e);if(v){var r=v(e);for(var o=0;o<r.length;o++)p.call(e,r[o])&&(t[t.length]=r[o])}return t}var y=Object.prototype.hasOwnProperty||function(e,t){return t in e};function isWritable(e,t){if(typeof s!=="function")return true;var r=s(e,t);return!r||!r.writable}function copy(e,t){if(typeof e==="object"&&e!==null){var r;if(c(e))r=[];else if(isDate(e))r=new Date(e.getTime?e.getTime():e);else if(isRegExp(e))r=new RegExp(e);else if(isError(e))r={message:e.message};else if(isBoolean(e)||isNumber(e)||isString(e))r=Object(e);else{var o=l(e);if(o)return u(e);if(Object.create&&Object.getPrototypeOf)r=Object.create(Object.getPrototypeOf(e));else if(e.constructor===Object)r={};else{var n=e.constructor&&e.constructor.prototype||e.__proto__||{};var a=function T(){};a.prototype=n;r=new a}}var i=t.includeSymbols?ownEnumerableKeys:f;forEach(i(e),(function(t){r[t]=e[t]}));return r}return e}
/** @type {TraverseOptions} */var h={__proto__:null};function walk(e,t){var r=[];var o=[];var n=true;var a=arguments.length>2?arguments[2]:h;var i=a.includeSymbols?ownEnumerableKeys:f;var l=!!a.immutable;return function walker(e){var u=l?copy(e,a):e;var s={__proto__:null};var f=true;var p={node:u,node_:e,path:[].concat(r),parent:o[o.length-1],parents:o,key:r[r.length-1],removedKeys:{__proto__:null},isRoot:r.length===0,level:r.length,circular:null,update:function(e,t){p.isRoot||(p.parent.node[p.key]=e);p.node=e;t&&(f=false)},delete:function(e){delete p.parent.node[p.key];p.parent.removedKeys[p.key]=true;e&&(f=false)},remove:function(e){if(c(p.parent.node)){p.parent.node.splice(p.key,1);p.parent.removedKeys[p.key]=true;e&&(f=false)}else p.delete(e)},keys:null,before:function(e){s.before=e},after:function(e){s.after=e},pre:function(e){s.pre=e},post:function(e){s.post=e},stop:function(){n=false},block:function(){f=false}};if(!n)return p;function updateState(){if(typeof p.node==="object"&&p.node!==null){p.keys&&p.node_===p.node||(p.keys=i(p.node));p.isLeaf=p.keys.length===0;for(var t=0;t<o.length;t++)if(o[t].node_===e){p.circular=o[t];break}}else{p.isLeaf=true;p.keys=null}p.notLeaf=!p.isLeaf;p.notRoot=!p.isRoot}updateState();var v=t.call(p,p.node);v!==void 0&&p.update&&p.update(v);s.before&&s.before.call(p,p.node);if(!f)return p;if(typeof p.node==="object"&&p.node!==null&&!p.circular){o[o.length]=p;updateState();forEach(p.keys,(function(e,t){var o=t-1 in p.removedKeys;o&&(e=p.keys[t-1]);r[r.length]=e;s.pre&&s.pre.call(p,p.node[e],e);var n=walker(p.node[e]);l&&y.call(p.node,e)&&!isWritable(p.node,e)&&!o&&(p.node[e]=n.node);n.isLast=t===p.keys.length-1;n.isFirst=t===0;s.post&&s.post.call(p,n);r.pop()}));o.pop()}s.after&&s.after.call(p,p.node);return p}(e).node}
/** @typedef {{ immutable?: boolean, includeSymbols?: boolean }} TraverseOptions */
/**
 * A traverse constructor
 * @param {object} obj - the object to traverse
 * @param {TraverseOptions | undefined} [options] - options for the traverse
 * @constructor
 */function Traverse(e){
/** @type {TraverseOptions} */
this.options=arguments.length>1?arguments[1]:h;this.value=e}
/** @type {(ps: PropertyKey[]) => Traverse['value']} */Traverse.prototype.get=function(e){var t=this.value;for(var r=0;t&&r<e.length;r++){var o=e[r];if(!y.call(t,o)||!this.options.includeSymbols&&typeof o==="symbol")return;t=t[o]}return t};
/** @type {(ps: PropertyKey[]) => boolean} */Traverse.prototype.has=function(e){var t=this.value;for(var r=0;t&&r<e.length;r++){var o=e[r];if(!y.call(t,o)||!this.options.includeSymbols&&typeof o==="symbol")return false;t=t[o]}return true};Traverse.prototype.set=function(e,t){var r=this.value;for(var o=0;o<e.length-1;o++){var n=e[o];y.call(r,n)||(r[n]={});r=r[n]}r[e[o]]=t;return t};Traverse.prototype.map=function(e){return walk(this.value,e,{__proto__:null,immutable:true,includeSymbols:!!this.options.includeSymbols})};Traverse.prototype.forEach=function(e){this.value=walk(this.value,e,this.options);return this.value};Traverse.prototype.reduce=function(e,t){var r=arguments.length===1;var o=r?this.value:t;this.forEach((function(t){this.isRoot&&r||(o=e.call(this,o,t))}));return o};Traverse.prototype.paths=function(){var e=[];this.forEach((function(){e[e.length]=this.path}));return e};Traverse.prototype.nodes=function(){var e=[];this.forEach((function(){e[e.length]=this.node}));return e};Traverse.prototype.clone=function(){var e=[];var t=[];var r=this.options;return l(this.value)?u(this.value):function clone(o){for(var n=0;n<e.length;n++)if(e[n]===o)return t[n];if(typeof o==="object"&&o!==null){var a=copy(o,r);e[e.length]=o;t[t.length]=a;var i=r.includeSymbols?ownEnumerableKeys:f;forEach(i(o),(function(e){a[e]=clone(o[e])}));e.pop();t.pop();return a}return o}(this.value)};
/** @type {(obj: object, options?: TraverseOptions) => Traverse} */function traverse(e){var t=arguments.length>1?arguments[1]:h;return new Traverse(e,t)}forEach(ownEnumerableKeys(Traverse.prototype),(function(e){traverse[e]=function(t){var r=[].slice.call(arguments,1);var o=new Traverse(t);return o[e].apply(o,r)}}));i=traverse;var d=i;export{d as default};

