(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{"1d22":function(t,e,o){},5260:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex-center"},[o("div",{staticClass:"main-container"},[o("div",{staticClass:"profile-edit-section"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("q-form",{staticClass:"q-gutter-md"},[o("div",{staticClass:"row user-section"},[o("div",{staticClass:"col"},[o("q-editor",{attrs:{"min-height":"38rem",placeholder:"Start creating your post...",definitions:t.definitions,toolbar:[["left","center","right","justify","insert_img","bold","italic","underline","link","unordered","ordered"]]},nativeOn:{paste:function(e){return function(e){return t.pasteCapture(e)}(e)},drop:function(e){return function(e){return t.dropCapture(e)}(e)}},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)])])],1)])])])])},i=[],n=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("5df3"),o("1c4c"),o("9523")),s=o.n(n),c=o("2f62");function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){s()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var u={name:"CreatePost",data:function(){return{form:{id:0,title:"",content:"",label:null,coverPhoto:null,coverVideo:null,isForVlog:!1,categories:[]},blogCoverPhoto:null,definitions:{insert_img:{tip:"Insertar Imagen",icon:"photo",handler:this.insertImg}}}},created:function(){this.$root.$on("headerRightIcon2Click",this.gotoCreatePost),this.$root.$on("headerBackButtonClick",this.backButtonClick)},computed:l(l({},Object(c["c"])("userprofile",["userDetails"])),Object(c["c"])("blog",["blog","blogs","CreateBlog"])),beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoCreatePost)},mounted:function(){this.setHeaderData(!1,!0,"Create Post","","right-tick-avatar","",!1,!1),this.form.id=this.CreateBlog.id,this.form.title=this.CreateBlog.title,this.form.label=this.CreateBlog.label,this.form.coverPhoto=this.CreateBlog.coverPhoto,this.form.coverVideo=this.CreateBlog.coverVideo,this.blogCoverPhoto=this.CreateBlog.blogCoverPhoto,this.form.isForVlog=this.CreateBlog.isForVlog,this.form.categories=this.CreateBlog.categories,this.form.content=this.CreateBlog.content},methods:l(l(l({},Object(c["b"])("header",["setHeader"])),Object(c["b"])("blog",["storeContent"])),{},{setHeaderData:function(t,e,o,r,i,n,s,c){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:r,rightIcon2:i,rightLinkText:n,notificationIcon:s,searchIcon:c})},backButtonClick:function(){this.$router.push("create-post")},gotoCreatePost:function(){var t=this;this.storeContent({form:this.form,file:this.blogCoverPhoto}).then((function(){t.form.isForVlog?t.$router.push({path:"/create-post",query:{isForVlog:!0}}):t.$router.push("create-post")}))},pasteCapture:function(t){},insertImg:function(){var t,e=this.form,o=document.createElement("input");o.type="file",o.accept=".png, .jpg, .jpeg",o.onchange=function(r){var i=Array.from(o.files);t=i[0];var n=new FileReader,s="";n.onloadend=function(){s=n.result,e.content+='<div><img style="width:100%" src="'+s+'" /></div>'},n.readAsDataURL(t)},o.click()}})},f=u,h=(o("7bf3"),o("2877")),d=o("9989"),g=o("0378"),p=o("d66b"),b=o("eebe"),m=o.n(b),C=Object(h["a"])(f,r,i,!1,null,"2815b9b6",null);e["default"]=C.exports;m()(C,"components",{QPage:d["a"],QForm:g["a"],QEditor:p["a"]})},"7bf3":function(t,e,o){"use strict";var r=o("1d22"),i=o.n(r);i.a}}]);