if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,p)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let s={};const o=e=>r(e,t),a={module:{uri:t},exports:s,require:o};i[t]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(p(...e),s)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"csa-auth"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/CarSpottingApp/css/938.175356a7.css",revision:null},{url:"/CarSpottingApp/css/app.47291c2f.css",revision:null},{url:"/CarSpottingApp/css/style.css",revision:"a4fb12dd09cb1af2cd4c0d1d5e15427f"},{url:"/CarSpottingApp/img/broken-heart.png",revision:"7226fde353240363d746eb22b47fa3fd"},{url:"/CarSpottingApp/img/delete.png",revision:"6c24adc6ab8193ad8c38139e674fd9f7"},{url:"/CarSpottingApp/img/header-transparent2-small.png",revision:"7a562054ad3fa9eeb6bd040820e7ff1c"},{url:"/CarSpottingApp/img/header1.png",revision:"dc21f50db3fff59e2e4793d4fa814d12"},{url:"/CarSpottingApp/img/heart-empty.png",revision:"24557560d54230dc3ed9f3f9e981595d"},{url:"/CarSpottingApp/img/heart-filled.png",revision:"dde5a35bd1652428aed64e183ef22755"},{url:"/CarSpottingApp/img/icon-user.png",revision:"1c75547f74d8aa7720a495f208c9b1c8"},{url:"/CarSpottingApp/img/icon1.png",revision:"9053f6bb0e177890822fba68697e8820"},{url:"/CarSpottingApp/index.html",revision:"6bcbafb8dd2160220e2eb971b12c20f5"},{url:"/CarSpottingApp/js/128.99a8600e.js",revision:null},{url:"/CarSpottingApp/js/241.5bad3fd8.js",revision:null},{url:"/CarSpottingApp/js/29.2335e6c1.js",revision:null},{url:"/CarSpottingApp/js/316.10bb39ca.js",revision:null},{url:"/CarSpottingApp/js/411.e5239338.js",revision:null},{url:"/CarSpottingApp/js/921.41478cc8.js",revision:null},{url:"/CarSpottingApp/js/938.299d5106.js",revision:null},{url:"/CarSpottingApp/js/app.a2777e57.js",revision:null},{url:"/CarSpottingApp/js/chunk-vendors.6766e5a4.js",revision:null},{url:"/CarSpottingApp/manifest.json",revision:"d670cbf9e1d284879e8da1fd48063c7e"},{url:"/CarSpottingApp/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
