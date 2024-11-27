// which-boxed-primitive@1.0.2 downloaded from https://ga.jspm.io/npm:which-boxed-primitive@1.0.2/index.js

import o from"is-string";import r from"is-number-object";import i from"is-boolean-object";import t from"is-symbol";import m from"is-bigint";var e={};var n=o;var a=r;var f=i;var b=t;var l=m;e=function whichBoxedPrimitive(o){return null==o||"object"!==typeof o&&"function"!==typeof o?null:n(o)?"String":a(o)?"Number":f(o)?"Boolean":b(o)?"Symbol":l(o)?"BigInt":void 0};var v=e;export default v;

