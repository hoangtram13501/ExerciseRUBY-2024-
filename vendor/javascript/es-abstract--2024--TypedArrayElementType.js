// es-abstract/2024/TypedArrayElementType@1.23.5 downloaded from https://ga.jspm.io/npm:es-abstract@1.23.5/2024/TypedArrayElementType.js

import*as r from"es-errors/syntax";import*as a from"es-errors/type";import*as e from"which-typed-array";import{_ as t}from"../_/BpG7Aqfc.js";var f=r;try{"default"in r&&(f=r.default)}catch(r){}var o=a;try{"default"in a&&(o=a.default)}catch(r){}var s=e;try{"default"in e&&(s=e.default)}catch(r){}var n={};var i=f;var y=o;var d=s;var p=t;n=function TypedArrayElementType(r){var a=d(r);if(a===false)throw new y("Assertion failed: `O` must be a TypedArray");var e=p.name["$"+a];if(typeof e!=="string")throw new i("Assertion failed: Unknown TypedArray type `"+a+"`");return e};var l=n;export{l as default};

