"use strict";(self["webpackChunkcsa_auth"]=self["webpackChunkcsa_auth"]||[]).push([[316],{9316:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var n=i(3396),d=i(7139);const o={class:"liked mb-4"},l=(0,n._)("h1",{style:{"margin-top":"120px"}},"Liked posts page",-1),a=(0,n._)("h2",{id:"txtName"},null,-1),s={class:"border border-primary p-5",style:{"margin-top":"20px","background-color":"#a9c2f7","margin-left":"10%","margin-right":"10%","border-radius":"15px"}},r=["id"],c=(0,n._)("br",null,null,-1),u=["id","onClick"];function p(e,t,i,p,m,g){return(0,n.wg)(),(0,n.iD)("div",o,[l,a,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.liked,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t},[(0,n._)("div",s,[(0,n._)("h2",null,(0,d.zw)(e.username),1),(0,n._)("h3",null,(0,d.zw)(e.description),1),(0,n._)("img",{id:"pictureFromStorage4"+e.id,class:"img-fluid",src:"----"},null,8,r),c,(0,n._)("img",{id:"dislikeBtn"+e.id,src:"img/heart-filled.png",alt:"Heart button",width:"50",height:"50",onClick:t=>g.deleteData(e.id),style:{"margin-top":"25px"}},null,8,u)])])))),128))])}var m=i(6056),g=i(3329),h={name:"LikedView",data:()=>({uid:"",post_id:"",liked:[],likes:[]}),methods:{fetchData(){m.db.collection("liked").get().then((e=>{e.forEach((e=>{e.data().uid==m.I8.currentUser.uid&&m.db.collection("posts").doc(e.data().post_id).get().then((e=>{const t={id:e.id,post_name:e.data().post_name,username:e.data().username,description:e.data().description,location:e.data().location};this.liked.push(t);const i=t.username,n=t.post_name,d=t.description,o=i+"-"+n+"-"+d,l=t.id;console.log(o,l);const a=(0,m.iH)(m.tO,"cars/"+o+".jpg");(0,m.Jt)(a).then((e=>{const t=new XMLHttpRequest;t.responseType="data_url",t.onload=e=>{t.response},t.open("GET",e),t.send();document.getElementById("pictureFromStorage4"+l).src=e}))}))}))}))},deleteData(e){m.db.collection("liked").get().then((t=>{t.forEach((t=>{if(t.data().post_id==e){const e=t.id;m.db.collection("liked").doc(e).delete().then((()=>{window.console.log("Post Disliked!"),g.Z.push("/liked")}))}}))})),document.getElementById("dislikeBtn"+e).src="img/broken-heart.png"}},mounted(){var e,t,i,n=m.I8.currentUser;t=document.getElementById("txtName"),null!=n&&(e=n.email,i=e.substring(0,e.indexOf("@")),t.innerHTML="Welcome "+i+", here you'll find post liked by you!"),this.fetchData()}},k=i(89);const f=(0,k.Z)(h,[["render",p]]);var _=f}}]);
//# sourceMappingURL=316.10bb39ca.js.map