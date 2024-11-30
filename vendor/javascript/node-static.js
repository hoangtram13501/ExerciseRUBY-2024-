// node-static@0.5.9 downloaded from https://ga.jspm.io/npm:node-static@0.5.9/lib/node-static.js

import e from"fs";import t from"sys";import r from"events";import i from"buffer";import o from"http";import n from"url";import s from"path";import a from"./node-static/mime.js";import f from"process";var c={};var h=e,u=s;c.mstat=function(e,t,r){(function mstat(t,i){var o=t.shift();o?h.stat(u.join(e,o),(function(e,o){e?r(e):mstat(t,i.concat([o]))})):r(null,{size:i.reduce((function(e,t){return e+t.size}),0),mtime:i.reduce((function(e,t){return e>t.mtime?e:t.mtime}),0),ino:i.reduce((function(e,t){return e+t.ino}),0)})})(t.slice(0),[])};var m="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var l={};var d=f;var p=e,v=t,S=r,y=i,E=o,g=n,D=s;l.version=[0,5,9];var T=a;var w=c;var H="node-static/"+l.version.join(".");l.store={};l.indexStore={};l.Server=function(e,t){e&&"object"===typeof e&&(t=e,e=null);(this||m).root=D.resolve(e||".");(this||m).options=t||{};(this||m).cache=3600;(this||m).defaultHeaders={};(this||m).options.headers=(this||m).options.headers||{};"cache"in(this||m).options&&("number"===typeof(this||m).options.cache?(this||m).cache=(this||m).options.cache:(this||m).options.cache||((this||m).cache=false));false!==(this||m).cache&&((this||m).defaultHeaders["Cache-Control"]="max-age="+(this||m).cache);(this||m).defaultHeaders["Server"]=H;for(var r in(this||m).defaultHeaders)(this||m).options.headers[r]=(this||m).options.headers[r]||(this||m).defaultHeaders[r]};l.Server.prototype.serveDir=function(e,t,r,i){var o=D.join(e,"index.html"),n=this||m;p.stat(o,(function(s,a){s?e in l.store?streamFiles(l.indexStore[e].files):p.readFile(D.join(e,"index.json"),(function(t,r){if(t)return i(404,{});var o=JSON.parse(r);l.indexStore[e]=o;streamFiles(o.files)})):n.respond(null,200,{},[o],a,t,r,i)}));function streamFiles(o){w.mstat(e,o,(function(s,a){n.respond(e,200,{},o,a,t,r,i)}))}};l.Server.prototype.serveFile=function(e,t,r,i,o){var n=this||m;var s=new S.EventEmitter;e=this.resolve(e);p.stat(e,(function(a,f){if(a)return s.emit("error",a);n.respond(null,t,r,[e],f,i,o,(function(e,t){n.finish(e,t,i,o,s)}))}));return s};l.Server.prototype.finish=function(e,t,r,i,o,n){var s={status:e,headers:t,message:E.STATUS_CODES[e]};t["Server"]=H;if(!e||e>=400)if(n)n(s);else{o.listeners("error").length>0&&o.emit("error",s);i.writeHead(e,t);i.end()}else{if(200!==e||"GET"!==r.method){i.writeHead(e,t);i.end()}n&&n(null,s);o.emit("success",s)}};l.Server.prototype.servePath=function(e,t,r,i,o,n){var s=this||m,a=new S.EventEmitter;e=this.resolve(e);if("GET"!==i.method&&"HEAD"!==i.method){n(405,{Allow:"GET, HEAD"});return a}0===e.indexOf(s.root)?p.stat(e,(function(a,f){a?n(404,{}):f.isFile()?s.respond(null,t,r,[e],f,i,o,n):f.isDirectory()?s.serveDir(e,i,o,n):n(400,{})})):n(403,{});return a};l.Server.prototype.resolve=function(e){return D.resolve(D.join((this||m).root,e))};l.Server.prototype.serve=function(e,t,r){var i=this||m,o=new S.EventEmitter;var n=decodeURI(g.parse(e.url).pathname);var finish=function(n,s){i.finish(n,s,e,t,o,r)};d.nextTick((function(){i.servePath(n,200,{},e,t,finish).on("success",(function(e){o.emit("success",e)})).on("error",(function(e){o.emit("error")}))}));if(!r)return o};l.Server.prototype.respond=function(e,t,r,i,o,n,s,a){var f=Date.parse(o.mtime),c=e||i[0],h={};for(var u in(this||m).options.headers)h[u]=(this||m).options.headers[u];h["Etag"]=JSON.stringify([o.ino,o.size,f].join("-"));h["Date"]=(new Date).toUTCString();h["Last-Modified"]=new Date(o.mtime).toUTCString();if(n.headers["if-none-match"]===h["Etag"]||Date.parse(n.headers["if-modified-since"])>=f)a(304,h);else if("HEAD"===n.method)a(200,h);else{h["Content-Length"]=o.size;h["Content-Type"]=T.contentTypes[D.extname(i[0]).slice(1)]||"application/octet-stream";for(var u in r)h[u]=r[u];s.writeHead(t,h);if((this||m).cache&&c in l.store&&l.store[c].stat.mtime>=o.mtime){s.end(l.store[c].buffer);a(t,h)}else this.stream(e,i,new y.Buffer(o.size),s,(function(e,r){if(e)return a(500,{});l.store[c]={stat:o,buffer:r,timestamp:Date.now()};a(t,h)}))}};l.Server.prototype.stream=function(e,t,r,i,o){(function streamFile(t,n){var s=t.shift();if(s){s="/"===s[0]?s:D.join(e||".",s);p.createReadStream(s,{flags:"r",mode:438}).on("data",(function(e){e.copy(r,n);n+=e.length})).on("close",(function(){streamFile(t,n)})).on("error",(function(e){o(e);console.error(e)})).pipe(i,{end:false})}else{i.end();o(null,r,n)}})(t.slice(0),0)};export default l;

