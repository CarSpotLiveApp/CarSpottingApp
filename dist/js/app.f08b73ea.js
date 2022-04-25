(function(){"use strict";var e={6056:function(e,t,n){n.d(t,{I:function(){return s},db:function(){return c}});var o=n(7301),r=n(6780);n(4406);const i={apiKey:"AIzaSyADW6q4mjoZth-ettADh9FhAELIRap4q5w",authDomain:"carspottingapp.firebaseapp.com",projectId:"carspottingapp",storageBucket:"carspottingapp.appspot.com",messagingSenderId:"679138561462",appId:"1:679138561462:web:e4e6e0ae6fda58cc6e8517"},a=r.Z.initializeApp(i),s=(0,o.v0)(a),c=r.Z.firestore()},9827:function(e,t,n){var o=n(9242),r=n(3396);const i={key:0,id:"nav"},a=(0,r.Uk)("Home"),s=(0,r.Uk)(" | "),c=(0,r.Uk)("Liked Posts"),u=(0,r.Uk)(" | "),l=(0,r.Uk)("Comments");function d(e,t,n,o,d,m){const p=(0,r.up)("router-link"),h=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[e.$store.state.user?((0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(p,{to:"/"},{default:(0,r.w5)((()=>[a])),_:1}),s,(0,r.Wm)(p,{to:"/liked"},{default:(0,r.w5)((()=>[c])),_:1}),u,(0,r.Wm)(p,{to:"/comments"},{default:(0,r.w5)((()=>[l])),_:1}),(0,r._)("button",{style:{"margin-left":"10px"},onClick:t[0]||(t[0]=t=>e.$store.dispatch("logout"))},"Logout")])):(0,r.kq)("",!0),(0,r.Wm)(h)],64)}var m=n(65),p={setup(){const e=(0,m.oR)();(0,r.wF)((()=>{e.dispatch("fetchUser")}))}},h=n(89);const f=(0,h.Z)(p,[["render",d]]);var g=f,b=n(5431);(0,b.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var v=n(31),w=n(6056),k=n(7301),y=(0,m.MT)({state:{user:null},mutations:{SET_USER(e,t){e.user=t},CLEAR_USER(e){e.user=null}},actions:{async login({commit:e},t){const{email:n,password:o}=t;try{await(0,k.e5)(w.I,n,o)}catch(r){switch(r.code){case"auth/user-not-found":alert("User not found");break;case"auth/wrong-password":alert("Wrong password");break;default:alert("Something went wrong")}return}e("SET_USER",w.I.currentUser),v.Z.push("/")},async register({commit:e},t){const{email:n,password:o}=t;try{await(0,k.Xb)(w.I,n,o)}catch(r){switch(r.code){case"auth/email-already-in-use":alert("Email already in use");break;case"auth/invalid-email":alert("Invalid email");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/weak-password":alert("Weak password");break;default:alert("Something went wrong")}return}e("SET_USER",w.I.currentUser),v.Z.push("/")},async logout({commit:e}){await(0,k.w7)(w.I),e("CLEAR_USER"),v.Z.push("/welcome")},fetchUser({commit:e}){w.I.onAuthStateChanged((async t=>{null===t?e("CLEAR_USER"):(e("SET_USER",t),v.Z.isReady()&&"/login"===v.Z.currentRoute.value.path&&v.Z.push("/"))}))}}});(0,o.ri)(g).use(y).use(v.Z).mount("#app")},31:function(e,t,n){n.d(t,{Z:function(){return A}});var o=n(678),r=n(3396),i=n(7139);const a={class:"home"},s=(0,r._)("h1",{id:"test-home"},"Home Page",-1),c=(0,r._)("h2",{id:"txtName"},null,-1),u=(0,r._)("h1",null,"---------------",-1),l=["onClick"],d=["onClick"],m=["id"],p=["onClick"],h=(0,r._)("br",null,null,-1),f=["onClick"],g=["id"],b=["onClick"],v=(0,r._)("h1",null,"---------------",-1),w=(0,r._)("div",{id:"map",style:{display:"none",witdth:"100%",height:"30vh","margin-left":"30%","margin-right":"30%","margin-top":"20px","margin-bottom":"20px"}},null,-1);function k(e,t,n,o,k,y){return(0,r.wg)(),(0,r.iD)("div",a,[s,c,(0,r._)("button",{onClick:t[0]||(t[0]=t=>e.$router.push("post"))},"Post"),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.posts,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{key:n},[u,(0,r._)("h2",null,(0,i.zw)(t.post_name)+" by: "+(0,i.zw)(t.username),1),(0,r._)("h3",null,(0,i.zw)(t.description),1),(0,r._)("h3",{onClick:e=>y.initMap(t.location)},(0,i.zw)(t.location),9,l),(0,r._)("button",{onClick:e=>y.likePost(t.id),"post.type":"button"},"Like",8,d),(0,r._)("input",{type:"text",id:"comment"+t.id,placeholder:"Write a comment..."},null,8,m),(0,r._)("button",{onClick:e=>y.commentPost(t.id,t.uid,t.post_name),"post.type":"button"},"Comment",8,p),h,(0,r._)("a",{onClick:e=>y.fetchComments(t.id)},"Show comments",8,f),(0,r._)("div",{id:"comments"+t.id,style:{display:"none"}},[(0,r._)("button",{type:"button",onClick:e=>y.closeComments(t.id)},"x",8,b),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.comments,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t},[v,(0,r._)("h3",null,(0,i.zw)(e.username)+": "+(0,i.zw)(e.comment),1)])))),128))],8,g)])))),128)),w])}var y=n(6056),_={name:"HomeView",data:()=>({description:"",location:"",uid:"",username:"",posts:[],comments:[]}),methods:{fetchData(){y.db.collection("posts").get().then((e=>{e.forEach((e=>{const t={id:e.id,post_name:e.data().post_name,username:e.data().username,description:e.data().description,location:e.data().location,uid:e.data().uid};this.posts.push(t)}))}))},likePost(e){const t=y.I.currentUser.uid,n={uid:t,post_id:e};y.db.collection("liked").add(n).then((()=>{console.log("Post liked!")})),A.push("/liked")},commentPost(e,t,n){const o=y.I.currentUser.uid,r=y.I.currentUser,i=r.email,a=i.substring(0,i.indexOf("@")),s=document.getElementById("comment"+e).value,c={uid:o,posters_uid:t,comment:s,post_id:e,username:a,post_name:n};y.db.collection("comments").add(c).then((()=>{console.log("Post commetned!")})),document.getElementById("comment"+e).value="",A.push("/")},fetchComments(e){this.comments=[],y.db.collection("comments").get().then((t=>{t.forEach((t=>{if(t.data().post_id==e){const e={id:t.id,username:t.data().username,comment:t.data().comment};this.comments.push(e)}})),console.log(e),document.getElementById("comments"+e).style.display="block"}))},closeComments(e){document.getElementById("comments"+e).style.display="none"},initMap(e){let t=null;const n={lat:parseFloat(e.substring(0,e.indexOf(","))),lng:parseFloat(e.substring(e.indexOf(" ")+1))};console.log(n),t=new google.maps.Map(document.getElementById("map"),{zoom:15,center:n}),new google.maps.Marker({position:n,map:t}),document.getElementById("map").style.display="block",document.getElementById("map").scrollIntoView({behavior:"smooth"})}},mounted(){var e,t,n,o=y.I.currentUser;t=document.getElementById("txtName"),null!=o&&(e=o.email,n=e.substring(0,e.indexOf("@")),t.innerHTML="Welcome "+n),this.fetchData()}},E=n(89);const C=(0,E.Z)(_,[["render",k]]);var I=C;const S=[{path:"/",name:"Home",component:I,meta:{requiresAuth:!0}},{path:"/liked",name:"Liked",component:()=>n.e(933).then(n.bind(n,1933)),meta:{requiresAuth:!0}},{path:"/comments",name:"Comments",component:()=>n.e(735).then(n.bind(n,3735)),meta:{requiresAuth:!0}},{path:"/welcome",name:"Welcome",component:()=>n.e(878).then(n.bind(n,3878))},{path:"/register",name:"Register",component:()=>n.e(529).then(n.bind(n,8529))},{path:"/login",name:"Login",component:()=>n.e(270).then(n.bind(n,9270))},{path:"/post",name:"Post",component:()=>n.e(985).then(n.bind(n,4985)),meta:{requiresAuth:!0}}],U=(0,o.p7)({history:(0,o.PO)("/"),routes:S});U.beforeEach(((e,t,n)=>{"/welcome"===e.path&&y.I.currentUser?n("/"):!e.matched.some((e=>e.meta.requiresAuth))||y.I.currentUser?n():n("/welcome")}));var A=U}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{270:"b9672d29",529:"16b4f23e",735:"66cb5b14",878:"826874a4",933:"8dd49aa9",985:"e807c63a"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="csa-auth:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkcsa_auth"]=self["webpackChunkcsa_auth"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9827)}));o=n.O(o)})();
//# sourceMappingURL=app.f08b73ea.js.map