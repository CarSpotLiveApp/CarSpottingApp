"use strict";(self["webpackChunkcsa_auth"]=self["webpackChunkcsa_auth"]||[]).push([[509],{6509:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var d=i(3396),n=i(7139);const l={class:"liked mb-4"},a=(0,d._)("h1",{style:{"margin-top":"120px"}},"Liked posts page",-1),o=(0,d._)("h2",{id:"txtName"},null,-1),r={class:"border border-primary p-5",style:{"margin-top":"20px","background-color":"#a9c2f7","margin-left":"10%","margin-right":"10%","border-radius":"15px"}},s=["id","onClick"];function c(e,t,i,c,u,h){return(0,d.wg)(),(0,d.iD)("div",l,[a,o,((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(e.liked,((e,t)=>((0,d.wg)(),(0,d.iD)("div",{key:t},[(0,d._)("div",r,[(0,d._)("h2",null,(0,n.zw)(e.username),1),(0,d._)("h3",null,(0,n.zw)(e.description),1),(0,d._)("img",{id:"dislikeBtn"+e.id,src:"img/heart-filled.png",alt:"Heart button",width:"50",height:"50",onClick:t=>h.deleteData(e.id)},null,8,s)])])))),128))])}var u=i(6056),h=i(944),k={name:"LikedView",data:()=>({uid:"",post_id:"",liked:[],likes:[]}),methods:{fetchData(){u.db.collection("liked").get().then((e=>{e.forEach((e=>{e.data().uid==u.I8.currentUser.uid&&u.db.collection("posts").doc(e.data().post_id).get().then((e=>{const t={id:e.id,username:e.data().username,description:e.data().description,location:e.data().location};this.liked.push(t)}))}))}))},deleteData(e){u.db.collection("liked").get().then((t=>{t.forEach((t=>{if(t.data().post_id==e){const e=t.id;u.db.collection("liked").doc(e).delete().then((()=>{window.console.log("Post Disliked!"),h.Z.push("/liked")}))}}))})),document.getElementById("dislikeBtn"+e).src="img/broken-heart.png"}},mounted(){var e,t,i,d=u.I8.currentUser;t=document.getElementById("txtName"),null!=d&&(e=d.email,i=e.substring(0,e.indexOf("@")),t.innerHTML="Welcome "+i+", here you'll find post liked by you!"),this.fetchData()}},p=i(89);const g=(0,p.Z)(k,[["render",c]]);var m=g}}]);
//# sourceMappingURL=509.c35ac803.js.map