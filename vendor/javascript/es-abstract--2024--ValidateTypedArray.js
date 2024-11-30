// es-abstract/2024/ValidateTypedArray@1.23.5 downloaded from https://ga.jspm.io/npm:es-abstract@1.23.5/2024/ValidateTypedArray.js

import*as r from"es-errors/type";import{_ as e}from"../_/CRdRgftP.js";import{a as t}from"../_/BA-VpO7s.js";import a from"./Type.js";import*as i from"is-typed-array";import"./IsDetachedBuffer.js";import"array-buffer-byte-length";import"available-typed-arrays";import"call-bind/callBound";import"is-array-buffer";import"is-shared-array-buffer";import"./TypedArrayElementSize.js";import"es-errors/syntax";import"../helpers/isInteger.js";import"get-intrinsic";import"../helpers/isNaN.js";import"../helpers/isFinite.js";import"which-typed-array";import"../_/BpG7Aqfc.js";import"hasown";import"typed-array-buffer";import"typed-array-byte-offset";import"typed-array-length";import"../_/Dc97Qybu.js";var o=r;try{"default"in r&&(o=r.default)}catch(r){}var s=i;try{"default"in i&&(s=i.default)}catch(r){}var p={};var m=o;var f=e;var n=t;var y=a;var d=s;p=function ValidateTypedArray(r,e){if(e!=="SEQ-CST"&&e!=="UNORDERED")throw new m("Assertion failed: `order` must be ~SEQ-CST~ or ~UNORDERED~");if(y(r)!=="Object")throw new m("Assertion failed: `O` must be an Object");if(!d(r))throw new m("Assertion failed: `O` must be a Typed Array");var t=n(r,e);if(f(t))throw new m("`O` must be in-bounds and backed by a non-detached buffer");return t};var l=p;export{l as default};
