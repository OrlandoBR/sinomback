(function(){"use strict";var e={84:function(e,n,t){var o=t(9963),r=t(6252);const a={class:"main-content"},i={class:"content"};function u(e,n,t,o,u,c){const l=(0,r.up)("Header"),s=(0,r.up)("Menu"),f=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r._)("section",a,[(0,r._)("aside",null,[(0,r.Wm)(s)]),(0,r._)("div",i,[(0,r.Wm)(f)])])],64)}const c=(0,r.RC)((()=>t.e(254).then(t.bind(t,1254)))),l=(0,r.RC)((()=>t.e(870).then(t.bind(t,1721))));var s={components:{Menu:c,Header:l}},f=t(3744);const d=(0,f.Z)(s,[["render",u]]);var m=d,p=t(2201),h=t.p+"img/logo.0635f52e.png";const v=e=>((0,r.dD)("data-v-4f13608c"),e=e(),(0,r.Cn)(),e),b={class:"home"},g=v((()=>(0,r._)("img",{alt:"Vue logo",src:h},null,-1)));function y(e,n,t,o,a,i){const u=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",b,[g,(0,r.Wm)(u,{msg:"Welcome to Your Vue.js App"})])}const w=e=>((0,r.dD)("data-v-043a8597"),e=e(),(0,r.Cn)(),e),C=w((()=>(0,r._)("h3",null,"Sistema de Nomina - SINOM",-1))),O=[C];function _(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("div",null,O)}var k={name:"HelloWorld",props:{msg:String}};const j=(0,f.Z)(k,[["render",_],["__scopeId","data-v-043a8597"]]);var P=j,S={name:"HomeView",components:{HelloWorld:P}};const E=(0,f.Z)(S,[["render",y],["__scopeId","data-v-4f13608c"]]);var A=E;const N=[{path:"/",name:"home",component:A},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,7381))},{path:"/alta",name:"alta maestro",component:()=>Promise.all([t.e(196),t.e(167)]).then(t.bind(t,1799))},{path:"/consulta",name:"consulta maestro",component:()=>Promise.all([t.e(196),t.e(76)]).then(t.bind(t,8057))},{path:"/altaplaza",name:"alta plaza",component:()=>Promise.all([t.e(196),t.e(428)]).then(t.bind(t,6075))},{path:"/consultaplaza",name:"consulta plaza",component:()=>Promise.all([t.e(196),t.e(317)]).then(t.bind(t,4144))},{path:"/cuentabanco",name:"cuenta banco",component:()=>Promise.all([t.e(196),t.e(641)]).then(t.bind(t,9724))},{path:"/consultanomina",name:"consulta nomina",component:()=>Promise.all([t.e(196),t.e(221)]).then(t.bind(t,9139))}],T=(0,p.p7)({history:(0,p.r5)(),routes:N});var z=T;(0,o.ri)(m).use(z).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+({76:"consulta maestro",167:"alta maestro",221:"consulta nomina",317:"consulta plaza",428:"alta plaza",443:"about",641:"cuenta banco"}[e]||e)+"."+{76:"4c2ebad9",167:"6f53ef21",196:"3ea3ca31",221:"8221c0d4",254:"4fa1e07d",286:"b595ce48",313:"f5daeb84",317:"6f809e40",428:"78dfe8bd",443:"a23cb969",641:"e29851c3",664:"026738dc",699:"c9712461",751:"995805eb",870:"542b5f31"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+({76:"consulta maestro",221:"consulta nomina",317:"consulta plaza",428:"alta plaza",641:"cuenta banco"}[e]||e)+"."+{76:"95882faa",221:"70432ebd",254:"e71e5acf",317:"fbbe3f18",428:"36fe9c87",641:"5aaf2c25",699:"c7f9c0fc",870:"de01c372"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="sinom-front:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+a){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={76:1,221:1,254:1,317:1,428:1,641:1,699:1,870:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],c=o[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var s=c(t)}for(n&&n(o);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},o=self["webpackChunksinom_front"]=self["webpackChunksinom_front"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(84)}));o=t.O(o)})();
//# sourceMappingURL=app.09ac047e.js.map