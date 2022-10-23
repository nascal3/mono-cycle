(function(){"use strict";var e={3307:function(e,t,n){var o=n(144),r=n(998),i=n(2928),a=function(){var e=this,t=e._self._c;return t(r.Z,[t("div",{attrs:{id:"app"}},[t(i.Z,{attrs:{"ma-0":"","pa-0":"",fluid:""}},[t("router-view")],1)],1)])},s=[],c=n(1001),u={},l=(0,c.Z)(u,a,s,!1,null,null,null),f=l.exports,d=n(8864);o.ZP.use(d.Z);var m=new d.Z({theme:{themes:{light:{primary:"#D94F00",secondary:"#FFFFFF",accent:"#e67e22"},dark:{primary:"#FFFFFF",secondary:"#4DB6AC",accent:"#e67e22"}}}}),p=n(8345);const h=(e,t,n)=>{const o=localStorage.getItem("session-id");o?n():n({name:"banks"})},g=(e,t,n)=>{const o=localStorage.getItem("accounts"),r=localStorage.getItem("session-id");r&&o?n():n({name:"banks"})};o.ZP.use(p.ZP);const v=[{path:"/",name:"banks",component:()=>Promise.all([n.e(474),n.e(294),n.e(315)]).then(n.bind(n,7315))},{path:"/connect",name:"connect",component:()=>Promise.all([n.e(474),n.e(294),n.e(989)]).then(n.bind(n,8989)),beforeEnter:h},{path:"/success",name:"success",component:()=>Promise.all([n.e(474),n.e(238)]).then(n.bind(n,238)),beforeEnter:g}],b=new p.ZP({mode:"history",base:"",routes:v});var y=b,w=n(629),k=n(196);const P=e=>e.interceptors.request.use((e=>{const t=localStorage.getItem("session-id");return t&&(e.headers={"x-session-id":t}),e}),(e=>Promise.reject(e))),S=e=>{const t=localStorage.getItem("session-id");return e.interceptors.response.use((e=>e),(e=>(t&&e.response&&(401===e.response.status||400===e.response.status)&&window.location.reload(),Promise.reject(e))))},F={Accept:"application/json","Content-Type":"application/json","mono-sec-key":"test_sk_nH6wu8IPQdwzjQJM50bi"},j=k.ZP.create({baseURL:"https://api.withmono.com/v1",headers:F});P(j),S(j),o.ZP.use(w.ZP);var I=new w.ZP.Store({state:{financialInstitutions:null,selectedBank:null},getters:{getFinancialInstitutions:e=>e.financialInstitutions,getSelectedBank:e=>e.selectedBank},mutations:{setFinancialInstitutions(e,t){e.financialInstitutions=t},setSelectedBank(e,t){e.selectedBank=t}},actions:{fetchFinancialInstitutions:async({commit:e})=>{const t="/institutions";try{const n=await j.get(t);e("setFinancialInstitutions",n.data)}catch(n){throw console.log(n),n}},storeSelectedBank:({commit:e},t)=>{e("setSelectedBank",t)},createSession:async({commit:e},t)=>{const n="/connect/session";try{const e=await j.post(n,t);localStorage.setItem("session-id",e.data.id)}catch(o){throw console.error(o),o}},login:async({commit:e},t)=>{const n="/connect/login";try{const e=await j.post(n,t);localStorage.setItem("accounts",e.data)}catch(o){throw console.log(o),o}}}}),Z=n(4009),C=n.n(Z);o.ZP.use(C(),{position:"bottom"}),o.ZP.config.productionTip=!1,new o.ZP({vuetify:m,router:y,store:I,render:e=>e(f)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{238:"9fdc009e",294:"08c632e4",315:"3f0dcda3",474:"787645a7",989:"3744f7fc"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{238:"16335703",294:"70776977",315:"6d18a7c1",474:"42ebba8d",989:"54fbe066"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mono:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+i){s=f;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={238:1,294:1,315:1,474:1,989:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkmono"]=self["webpackChunkmono"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3307)}));o=n.O(o)})();
//# sourceMappingURL=app.f959cac9.js.map