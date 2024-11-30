// get-intrinsic@1.2.4 downloaded from https://ga.jspm.io/npm:get-intrinsic@1.2.4/index.js

import*as r from"es-errors";import*as t from"es-errors/eval";import*as e from"es-errors/range";import*as o from"es-errors/ref";import*as a from"es-errors/syntax";import*as n from"es-errors/type";import*as y from"es-errors/uri";import*as i from"has-symbols";import*as p from"has-proto";import*as f from"function-bind";import*as c from"hasown";var l=r;try{"default"in r&&(l=r.default)}catch(r){}var u=t;try{"default"in t&&(u=t.default)}catch(r){}var s=e;try{"default"in e&&(s=e.default)}catch(r){}var d=o;try{"default"in o&&(d=o.default)}catch(r){}var A=a;try{"default"in a&&(A=a.default)}catch(r){}var v=n;try{"default"in n&&(v=n.default)}catch(r){}var m=y;try{"default"in y&&(m=y.default)}catch(r){}var P=i;try{"default"in i&&(P=i.default)}catch(r){}var g=p;try{"default"in p&&(g=p.default)}catch(r){}var h=f;try{"default"in f&&(h=f.default)}catch(r){}var S=c;try{"default"in c&&(S=c.default)}catch(r){}var I={};var F;var E=l;var b=u;var U=s;var w=d;var R=A;var B=v;var _=m;var x=Function;var getEvalledConstructor=function(r){try{return x('"use strict"; return ('+r+").constructor;")()}catch(r){}};var O=Object.getOwnPropertyDescriptor;if(O)try{O({},"")}catch(r){O=null}var throwTypeError=function(){throw new B};var G=O?function(){try{arguments.callee;return throwTypeError}catch(r){try{return O(arguments,"callee").get}catch(r){return throwTypeError}}}():throwTypeError;var M=P();var k=g();var N=Object.getPrototypeOf||(k?function(r){return r.__proto__}:null);var j={};var W=typeof Uint8Array!=="undefined"&&N?N(Uint8Array):F;var D={__proto__:null,"%AggregateError%":typeof AggregateError==="undefined"?F:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer==="undefined"?F:ArrayBuffer,"%ArrayIteratorPrototype%":M&&N?N([][Symbol.iterator]()):F,"%AsyncFromSyncIteratorPrototype%":F,"%AsyncFunction%":j,"%AsyncGenerator%":j,"%AsyncGeneratorFunction%":j,"%AsyncIteratorPrototype%":j,"%Atomics%":typeof Atomics==="undefined"?F:Atomics,"%BigInt%":typeof BigInt==="undefined"?F:BigInt,"%BigInt64Array%":typeof BigInt64Array==="undefined"?F:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array==="undefined"?F:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView==="undefined"?F:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":E,"%eval%":eval,"%EvalError%":b,"%Float32Array%":typeof Float32Array==="undefined"?F:Float32Array,"%Float64Array%":typeof Float64Array==="undefined"?F:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry==="undefined"?F:FinalizationRegistry,"%Function%":x,"%GeneratorFunction%":j,"%Int8Array%":typeof Int8Array==="undefined"?F:Int8Array,"%Int16Array%":typeof Int16Array==="undefined"?F:Int16Array,"%Int32Array%":typeof Int32Array==="undefined"?F:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":M&&N?N(N([][Symbol.iterator]())):F,"%JSON%":typeof JSON==="object"?JSON:F,"%Map%":typeof Map==="undefined"?F:Map,"%MapIteratorPrototype%":typeof Map!=="undefined"&&M&&N?N((new Map)[Symbol.iterator]()):F,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise==="undefined"?F:Promise,"%Proxy%":typeof Proxy==="undefined"?F:Proxy,"%RangeError%":U,"%ReferenceError%":w,"%Reflect%":typeof Reflect==="undefined"?F:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set==="undefined"?F:Set,"%SetIteratorPrototype%":typeof Set!=="undefined"&&M&&N?N((new Set)[Symbol.iterator]()):F,"%SharedArrayBuffer%":typeof SharedArrayBuffer==="undefined"?F:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":M&&N?N(""[Symbol.iterator]()):F,"%Symbol%":M?Symbol:F,"%SyntaxError%":R,"%ThrowTypeError%":G,"%TypedArray%":W,"%TypeError%":B,"%Uint8Array%":typeof Uint8Array==="undefined"?F:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray==="undefined"?F:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array==="undefined"?F:Uint16Array,"%Uint32Array%":typeof Uint32Array==="undefined"?F:Uint32Array,"%URIError%":_,"%WeakMap%":typeof WeakMap==="undefined"?F:WeakMap,"%WeakRef%":typeof WeakRef==="undefined"?F:WeakRef,"%WeakSet%":typeof WeakSet==="undefined"?F:WeakSet};if(N)try{null.error}catch(r){var C=N(N(r));D["%Error.prototype%"]=C}var T=function doEval(r){var t;if(r==="%AsyncFunction%")t=getEvalledConstructor("async function () {}");else if(r==="%GeneratorFunction%")t=getEvalledConstructor("function* () {}");else if(r==="%AsyncGeneratorFunction%")t=getEvalledConstructor("async function* () {}");else if(r==="%AsyncGenerator%"){var e=doEval("%AsyncGeneratorFunction%");e&&(t=e.prototype)}else if(r==="%AsyncIteratorPrototype%"){var o=doEval("%AsyncGenerator%");o&&N&&(t=N(o.prototype))}D[r]=t;return t};var J={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]};var V=h;var z=S;var $=V.call(Function.call,Array.prototype.concat);var q=V.call(Function.apply,Array.prototype.splice);var H=V.call(Function.call,String.prototype.replace);var K=V.call(Function.call,String.prototype.slice);var L=V.call(Function.call,RegExp.prototype.exec);var Q=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;var X=/\\(\\)?/g;var Y=function stringToPath(r){var t=K(r,0,1);var e=K(r,-1);if(t==="%"&&e!=="%")throw new R("invalid intrinsic syntax, expected closing `%`");if(e==="%"&&t!=="%")throw new R("invalid intrinsic syntax, expected opening `%`");var o=[];H(r,Q,(function(r,t,e,a){o[o.length]=e?H(a,X,"$1"):t||r}));return o};var Z=function getBaseIntrinsic(r,t){var e=r;var o;if(z(J,e)){o=J[e];e="%"+o[0]+"%"}if(z(D,e)){var a=D[e];a===j&&(a=T(e));if(typeof a==="undefined"&&!t)throw new B("intrinsic "+r+" exists, but is not available. Please file an issue!");return{alias:o,name:e,value:a}}throw new R("intrinsic "+r+" does not exist!")};I=function GetIntrinsic(r,t){if(typeof r!=="string"||r.length===0)throw new B("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!=="boolean")throw new B('"allowMissing" argument must be a boolean');if(L(/^%?[^%]*%?$/,r)===null)throw new R("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var e=Y(r);var o=e.length>0?e[0]:"";var a=Z("%"+o+"%",t);var n=a.name;var y=a.value;var i=false;var p=a.alias;if(p){o=p[0];q(e,$([0,1],p))}for(var f=1,c=true;f<e.length;f+=1){var l=e[f];var u=K(l,0,1);var s=K(l,-1);if((u==='"'||u==="'"||u==="`"||s==='"'||s==="'"||s==="`")&&u!==s)throw new R("property names with quotes must have matching quotes");l!=="constructor"&&c||(i=true);o+="."+l;n="%"+o+"%";if(z(D,n))y=D[n];else if(y!=null){if(!(l in y)){if(!t)throw new B("base intrinsic for "+r+" exists, but the property is not available.");return}if(O&&f+1>=e.length){var d=O(y,l);c=!!d;y=c&&"get"in d&&!("originalValue"in d.get)?d.get:y[l]}else{c=z(y,l);y=y[l]}c&&!i&&(D[n]=y)}}return y};var rr=I;export{rr as default};

