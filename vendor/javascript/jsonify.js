// jsonify@0.0.1 downloaded from https://ga.jspm.io/npm:jsonify@0.0.1/index.js

var e={};var t;var r;var n={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"};var i;function error(e){throw{name:"SyntaxError",message:e,at:t,text:i}}function next(e){e&&e!==r&&error("Expected '"+e+"' instead of '"+r+"'");r=i.charAt(t);t+=1;return r}function number(){var e;var t="";if("-"===r){t="-";next("-")}while(r>="0"&&r<="9"){t+=r;next()}if("."===r){t+=".";while(next()&&r>="0"&&r<="9")t+=r}if("e"===r||"E"===r){t+=r;next();if("-"===r||"+"===r){t+=r;next()}while(r>="0"&&r<="9"){t+=r;next()}}e=Number(t);isFinite(e)||error("Bad number");return e}function string(){var e;var t;var i="";var a;if('"'===r)while(next()){if('"'===r){next();return i}if("\\"===r){next();if("u"===r){a=0;for(t=0;t<4;t+=1){e=parseInt(next(),16);if(!isFinite(e))break;a=16*a+e}i+=String.fromCharCode(a)}else{if("string"!==typeof n[r])break;i+=n[r]}}else i+=r}error("Bad string")}function white(){while(r&&r<=" ")next()}function word(){switch(r){case"t":next("t");next("r");next("u");next("e");return true;case"f":next("f");next("a");next("l");next("s");next("e");return false;case"n":next("n");next("u");next("l");next("l");return null;default:error("Unexpected '"+r+"'")}}function array(){var e=[];if("["===r){next("[");white();if("]"===r){next("]");return e}while(r){e.push(value());white();if("]"===r){next("]");return e}next(",");white()}}error("Bad array")}function object(){var e;var t={};if("{"===r){next("{");white();if("}"===r){next("}");return t}while(r){e=string();white();next(":");Object.prototype.hasOwnProperty.call(t,e)&&error('Duplicate key "'+e+'"');t[e]=value();white();if("}"===r){next("}");return t}next(",");white()}}error("Bad object")}function value(){white();switch(r){case"{":return object();case"[":return array();case'"':return string();case"-":return number();default:return r>="0"&&r<="9"?number():word()}}e=function(e,n){var a;i=e;t=0;r=" ";a=value();white();r&&error("Syntax error");return"function"===typeof n?function walk(e,t){var r;var i;var a=e[t];if(a&&"object"===typeof a)for(r in value)if(Object.prototype.hasOwnProperty.call(a,r)){i=walk(a,r);"undefined"===typeof i?delete a[r]:a[r]=i}return n.call(e,t,a)}({"":a},""):a};var a=e;var f={};var o=/[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;var u;var c;var l={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};var s;function quote(e){o.lastIndex=0;return o.test(e)?'"'+e.replace(o,(function(e){var t=l[e];return"string"===typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function str(e,t){var r;var n;var i;var a;var f=u;var o;var l=t[e];l&&"object"===typeof l&&"function"===typeof l.toJSON&&(l=l.toJSON(e));"function"===typeof s&&(l=s.call(t,e,l));switch(typeof l){case"string":return quote(l);case"number":return isFinite(l)?String(l):"null";case"boolean":case"null":return String(l);case"object":if(!l)return"null";u+=c;o=[];if("[object Array]"===Object.prototype.toString.apply(l)){a=l.length;for(r=0;r<a;r+=1)o[r]=str(r,l)||"null";i=0===o.length?"[]":u?"[\n"+u+o.join(",\n"+u)+"\n"+f+"]":"["+o.join(",")+"]";u=f;return i}if(s&&"object"===typeof s){a=s.length;for(r=0;r<a;r+=1){n=s[r];if("string"===typeof n){i=str(n,l);i&&o.push(quote(n)+(u?": ":":")+i)}}}else for(n in l)if(Object.prototype.hasOwnProperty.call(l,n)){i=str(n,l);i&&o.push(quote(n)+(u?": ":":")+i)}i=0===o.length?"{}":u?"{\n"+u+o.join(",\n"+u)+"\n"+f+"}":"{"+o.join(",")+"}";u=f;return i;default:}}f=function(e,t,r){var n;u="";c="";if("number"===typeof r)for(n=0;n<r;n+=1)c+=" ";else"string"===typeof r&&(c=r);s=t;if(t&&"function"!==typeof t&&("object"!==typeof t||"number"!==typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})};var x=f;var v={};v.parse=a;v.stringify=x;const p=v.parse,h=v.stringify;export{v as default,p as parse,h as stringify};

