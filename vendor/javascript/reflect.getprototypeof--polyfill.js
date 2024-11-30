// reflect.getprototypeof/polyfill@1.0.6 downloaded from https://ga.jspm.io/npm:reflect.getprototypeof@1.0.6/polyfill.js

import*as t from"es-abstract/2024/Type";import*as e from"es-errors/type";import r from"./implementation.js";import"get-intrinsic";import"es-abstract/2024/IsCallable";import"which-builtin-type";var o=t;try{"default"in t&&(o=t.default)}catch(t){}var a=e;try{"default"in e&&(a=e.default)}catch(t){}var f={};var i=o;var l=a;var p=r;var c=[].__proto__===Array.prototype;var n=function getPrototypeOf(t){if(i(t)!=="Object")throw new l("Reflect.getPrototypeOf called on non-object");return t.__proto__};f=function getPolyfill(){return typeof Reflect==="object"&&Reflect&&Reflect.getPrototypeOf?Reflect.getPrototypeOf:c?n:p};var y=f;export{y as default};

