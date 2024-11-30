// typed-array-byte-offset@1.0.3 downloaded from https://ga.jspm.io/npm:typed-array-byte-offset@1.0.3/index.js

import*as t from"for-each";import*as r from"call-bind";import*as a from"reflect.getprototypeof/polyfill";import*as e from"available-typed-arrays";import*as f from"gopd";import*as o from"is-typed-array";var l=t;try{"default"in t&&(l=t.default)}catch(t){}var i=r;try{"default"in r&&(i=r.default)}catch(t){}var n=a;try{"default"in a&&(n=a.default)}catch(t){}var y=e;try{"default"in e&&(y=e.default)}catch(t){}var u=f;try{"default"in f&&(u=f.default)}catch(t){}var v=o;try{"default"in o&&(v=o.default)}catch(t){}var c=typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:global;var d={};var p=l;var s=i;var b=n();var m=y();
/** @typedef {Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array} TypedArray */
/** @typedef {(x: TypedArray) => number} ByteOffsetGetter */
/** @type {Object.<typeof typedArrays, ByteOffsetGetter>} */var h={};var g=u;var O=Object.defineProperty;if(g){
/** @type {ByteOffsetGetter} */
var getByteOffset=function(t){return t.byteOffset};p(m,(function(t){if(typeof c[t]==="function"||typeof c[t]==="object"){var r=c[t].prototype;var a=g(r,"byteOffset");if(!a){var e=b(r);a=g(e,"byteOffset")}if(a&&a.get)h[t]=s(a.get);else if(O){var f=new c[t](2);a=g(f,"byteOffset");a&&a.configurable&&O(f,"length",{value:3});f.length===2&&(h[t]=getByteOffset)}}}))}
/** @type {ByteOffsetGetter} */var A=function tryAllTypedArrays(t){
/** @type {number} */var r;p(h,(/** @type {(getter: ByteOffsetGetter) => void} */function(a){if(typeof r!=="number")try{var e=a(t);typeof e==="number"&&(r=e)}catch(t){}}));return r};var T=v;
/** @type {import('.')} */d=function typedArrayByteOffset(t){return!!T(t)&&A(t)};var j=d;export{j as default};
