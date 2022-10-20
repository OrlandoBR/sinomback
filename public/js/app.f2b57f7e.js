(function(){"use strict";var n={84:function(n,e,t){var o=t(9242),r=t(3396);const a={class:"main-content"},u={class:"content"};function i(n,e,t,o,i,c){const l=(0,r.up)("Header"),s=(0,r.up)("Menu"),f=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r._)("section",a,[(0,r._)("aside",null,[(0,r.Wm)(s)]),(0,r._)("div",u,[(0,r.Wm)(f)])])],64)}const c=(0,r.RC)((()=>t.e(577).then(t.bind(t,2577)))),l=(0,r.RC)((()=>t.e(870).then(t.bind(t,1721))));var s={components:{Menu:c,Header:l}},f=t(89);const d=(0,f.Z)(s,[["render",i]]);var p=d,m=t(2483),h=t.p+"img/logo.0635f52e.png";const v=n=>((0,r.dD)("data-v-4f13608c"),n=n(),(0,r.Cn)(),n),b={class:"home"},g=v((()=>(0,r._)("img",{alt:"Vue logo",src:h},null,-1)));function y(n,e,t,o,a,u){const i=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",b,[g,(0,r.Wm)(i,{msg:"Welcome to Your Vue.js App"})])}const w=n=>((0,r.dD)("data-v-043a8597"),n=n(),(0,r.Cn)(),n),_=w((()=>(0,r._)("h3",null,"Sistema de Nomina - SINOM",-1))),C=[_];function O(n,e,t,o,a,u){return(0,r.wg)(),(0,r.iD)("div",null,C)}var k={name:"HelloWorld",props:{msg:String}};const j=(0,f.Z)(k,[["render",O],["__scopeId","data-v-043a8597"]]);var S=j,E={name:"HomeView",components:{HelloWorld:S}};const A=(0,f.Z)(E,[["render",y],["__scopeId","data-v-4f13608c"]]);var N=A;const T=[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))},{path:"/alta",name:"alta maestro",component:()=>t.e(167).then(t.bind(t,3859))},{path:"/consulta",name:"consulta maestro",component:()=>t.e(76).then(t.bind(t,1916))},{path:"/altaplaza",name:"alta plaza",component:()=>t.e(428).then(t.bind(t,7206))},{path:"/consultaplaza",name:"consulta plaza",component:()=>t.e(317).then(t.bind(t,7435))},{path:"/cuentabanco",name:"cuenta banco",component:()=>t.e(641).then(t.bind(t,6827))}],z=(0,m.p7)({history:(0,m.r5)(),routes:T});var H=z;(0,o.ri)(p).use(H).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,a){if(!o){var u=1/0;for(s=0;s<n.length;s++){o=n[s][0],r=n[s][1],a=n[s][2];for(var i=!0,c=0;c<o.length;c++)(!1&a||u>=a)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(i=!1,a<u&&(u=a));if(i){n.splice(s--,1);var l=r();void 0!==l&&(e=l)}}return e}a=a||0;for(var s=n.length;s>0&&n[s-1][2]>a;s--)n[s]=n[s-1];n[s]=[o,r,a]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+({76:"consulta maestro",167:"alta maestro",317:"consulta plaza",428:"alta plaza",443:"about",641:"cuenta banco"}[n]||n)+"."+{3:"552c748e",76:"6299f80a",167:"8113b361",313:"044b41e1",317:"6832ac91",428:"1c820e70",443:"a7a91a16",577:"747f28b7",624:"b9d4c63e",641:"75a29a77",664:"3574cc21",754:"b46adf47",870:"ad4d74c5"}[n]+".js"}}(),function(){t.miniCssF=function(n){return"css/"+({76:"consulta maestro",317:"consulta plaza",428:"alta plaza",641:"cuenta banco"}[n]||n)+"."+{76:"142e0ccb",317:"325fac20",428:"36fe9c87",577:"ff2dae30",641:"e0633071",754:"45a2face",870:"de01c372"}[n]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="sinom-front:";t.l=function(o,r,a,u){if(n[o])n[o].push(r);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+a){i=f;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",e+a),i.src=o),n[o]=[r];var d=function(e,t){i.onerror=i.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n=function(n,e,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var u=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+n+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=i,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=e,document.head.appendChild(r),r},e=function(n,e){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===n||a===e))return r}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],a=r.getAttribute("data-href");if(a===n||a===e)return r}},o=function(o){return new Promise((function(r,a){var u=t.miniCssF(o),i=t.p+u;if(e(u,i))return r();n(o,i,r,a)}))},r={143:0};t.f.miniCss=function(n,e){var t={76:1,317:1,428:1,577:1,641:1,754:1,870:1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=o(n).then((function(){r[n]=0}),(function(e){throw delete r[n],e})))}}(),function(){var n={143:0};t.f.j=function(e,o){var r=t.o(n,e)?n[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=n[e]=[t,o]}));o.push(r[2]=a);var u=t.p+t.u(e),i=new Error,c=function(o){if(t.o(n,e)&&(r=n[e],0!==r&&(n[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,r[1](i)}};t.l(u,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,a,u=o[0],i=o[1],c=o[2],l=0;if(u.some((function(e){return 0!==n[e]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var s=c(t)}for(e&&e(o);l<u.length;l++)a=u[l],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(s)},o=self["webpackChunksinom_front"]=self["webpackChunksinom_front"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(84)}));o=t.O(o)})();
//# sourceMappingURL=app.f2b57f7e.js.map