"use strict";(self["webpackChunkcsa_auth"]=self["webpackChunkcsa_auth"]||[]).push([[29],{5029:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var n=i(3396),o=i(7139);const r={class:"profile mb-4"},a=(0,n.uE)('<div style="text-align:center;margin-top:110px;height:300px;background-color:#7EA3F1;"><h1>Profile page</h1><div style="display:inline-block;vertical-align:bottom;margin-right:25px;"><img src="img/icon-user.png" alt="user-icon" width="100" height="100" style="float:left;margin-left:15%;"></div><div style="display:inline-block;margin-bottom:30px;margin-right:25px;"><h2 id="txtName"></h2></div></div>',1),s={class:"border border-primary p-5",style:{"margin-top":"20px","background-color":"#a9c2f7","margin-left":"10%","margin-right":"10%","border-radius":"15px"}},l=["id"],d=(0,n._)("br",null,null,-1);function c(t,e,i,c,u,m){return(0,n.wg)(),(0,n.iD)("div",r,[a,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.posts,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{key:e},[(0,n._)("div",s,[(0,n._)("h2",null,(0,o.zw)(t.post_name)+" by: "+(0,o.zw)(t.username),1),(0,n._)("h3",null,(0,o.zw)(t.description),1),(0,n._)("h3",null,(0,o.zw)(t.location),1),(0,n._)("img",{id:"pictureFromStorage3"+t.id,class:"img-fluid",src:"----"},null,8,l),d])])))),128))])}var u=i(6056),m=(i(3329),{name:"CommentsView",data:()=>({description:"",location:"",uid:"",username:"",posts:[]}),methods:{fetchComments(){u.db.collection("posts").get().then((t=>{t.forEach((t=>{if(t.data().uid==u.I8.currentUser.uid){const e={id:t.id,post_name:t.data().post_name,username:t.data().username,description:t.data().description,location:t.data().location,uid:t.data().uid};this.posts.push(e);const i=e.username,n=e.post_name,o=e.description,r=i+"-"+n+"-"+o,a=e.id;console.log(r,a);const s=(0,u.iH)(u.tO,"cars/"+r+".jpg");(0,u.Jt)(s).then((t=>{const e=new XMLHttpRequest;e.responseType="data_url",e.onload=t=>{e.response},e.open("GET",t),e.send();document.getElementById("pictureFromStorage3"+a).src=t}))}}))}))}},mounted(){var t,e,i,n=u.I8.currentUser;e=document.getElementById("txtName"),null!=n&&(t=n.email,i=t.substring(0,t.indexOf("@")),e.innerHTML=i),this.fetchComments()}}),p=i(89);const g=(0,p.Z)(m,[["render",c]]);var h=g}}]);
//# sourceMappingURL=29.2335e6c1.js.map