"use strict";(self["webpackChunkKonoku"]=self["webpackChunkKonoku"]||[]).push([[2269],{12269:function(t,e,o){o.r(e),o.d(e,{default:function(){return I}});var r=o(59835),i={class:"main-container"},n={class:"profile-edit-section"},s={class:"row"},a={class:"col"},c={class:"row user-section"},l={class:"col"};function u(t,e,o,u,h,d){var f=(0,r.up)("q-editor"),g=(0,r.up)("q-form"),m=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(m,{class:"flex-center"},{default:(0,r.w5)((function(){return[(0,r._)("div",i,[(0,r._)("div",n,[(0,r._)("div",s,[(0,r._)("div",a,[(0,r.Wm)(g,{class:"q-gutter-md"},{default:(0,r.w5)((function(){return[(0,r._)("div",c,[(0,r._)("div",l,[(0,r.Wm)(f,{modelValue:h.form.content,"onUpdate:modelValue":e[0]||(e[0]=function(t){return h.form.content=t}),"min-height":"38rem",placeholder:"Start creating your post...",definitions:h.definitions,onPaste:e[1]||(e[1]=function(t){return d.pasteCapture(t)}),onDrop:e[2]||(e[2]=function(e){return t.dropCapture(e)}),toolbar:[["left","center","right","justify","insert_img","bold","italic","underline","link","unordered","ordered"]]},null,8,["modelValue","definitions"])])])]})),_:1})])])])])]})),_:1})}var h=o(46264),d=o.n(h),f=(o(69665),o(97605),o(77280),o(33100)),g={name:"CreatePost",data:function(){return{form:{id:0,title:"",content:"",label:null,coverPhoto:null,coverVideo:null,isForVlog:!1,categories:[]},blogCoverPhoto:null,posterImage:null,definitions:{insert_img:{tip:"Insertar Imagen",icon:"photo",handler:this.insertImg}}}},created:function(){this.$emitter.on("headerRightIcon2Click",this.gotoCreatePost),this.$emitter.on("headerBackButtonClick",this.backButtonClick)},computed:d()(d()({},(0,f.Se)("userprofile",["userDetails"])),(0,f.Se)("blog",["blog","blogs","CreateBlog"])),beforeUnmount:function(){this.$emitter.off("headerBackButtonClick",this.backButtonClick),this.$emitter.off("headerRightIcon2Click",this.gotoCreatePost)},mounted:function(){this.setHeaderData(!1,!0,"Create Post","","right-tick-avatar","",!1,!1),this.form.id=this.CreateBlog.id,this.form.title=this.CreateBlog.title,this.form.label=this.CreateBlog.label,this.form.coverPhoto=this.CreateBlog.coverPhoto,this.form.coverVideo=this.CreateBlog.coverVideo,this.blogCoverPhoto=this.CreateBlog.blogCoverPhoto,this.form.isForVlog=this.CreateBlog.isForVlog,this.form.categories=this.CreateBlog.categories,this.form.content=this.CreateBlog.content,this.posterImage=this.CreateBlog.posterImage},methods:d()(d()(d()({},(0,f.nv)("header",["setHeader"])),(0,f.nv)("blog",["storeContent"])),{},{setHeaderData:function(t,e,o,r,i,n,s,a){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:r,rightIcon2:i,rightLinkText:n,notificationIcon:s,searchIcon:a})},backButtonClick:function(){this.$router.push("create-post")},gotoCreatePost:function(){var t=this;this.storeContent({form:this.form,file:this.blogCoverPhoto,poster:this.posterImage}).then((function(){t.form.isForVlog?t.$router.push({path:"/create-post",query:{isForVlog:!0}}):t.$router.push("create-post")}))},pasteCapture:function(t){},insertImg:function(){var t,e=this.form,o=document.createElement("input");o.type="file",o.accept=".png, .jpg, .jpeg",o.onchange=function(r){var i=Array.from(o.files);t=i[0];var n=new FileReader,s="";n.onloadend=function(){s=n.result,e.content+='<div><img style="width:100%" src="'+s+'" /></div>'},n.readAsDataURL(t)},o.click()}})},m=o(11639),p=o(69885),C=o(8326),v=o(84695),b=o(69984),k=o.n(b);const B=(0,m.Z)(g,[["render",u],["__scopeId","data-v-63b38b35"]]);var I=B;k()(g,"components",{QPage:p.Z,QForm:C.Z,QEditor:v.Z})}}]);