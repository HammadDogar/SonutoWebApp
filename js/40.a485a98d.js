(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[40],{"30c1":function(t,e,s){},"624e":function(t,e,s){"use strict";var i=s("30c1"),o=s.n(i);o.a},caa5:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex-center"},[s("div",{staticClass:"main-container"},[s("div",{staticClass:"profile-edit-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-form",{staticClass:"q-gutter-md",on:{submit:t.saveBlog}},[s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Cover photo\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-file",{staticClass:"fileupload",attrs:{outlined:"","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},for:"fileUpload"},on:{input:t.uploadPhoto},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticStyle:{height:"20px"},attrs:{name:"app:upload-img"},on:{click:function(t){t.stopPropagation()}}}),s("span",{staticClass:"upImage"},[t._v(" Upload Image")])]},proxy:!0}]),model:{value:t.form.file,callback:function(e){t.$set(t.form,"file",e)},expression:"form.file"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Title\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{borderless:"","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"}},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Descreption\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{borderless:"","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"}},model:{value:t.form.descreption,callback:function(e){t.$set(t.form,"descreption",e)},expression:"form.descreption"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("Content")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-editor",{attrs:{definitions:{insert_img:{tip:"Insert Image",icon:"photo",handler:this.insertImg}},toolbar:[["left","center","right","justify","insert_img","bold","italic","strike"]]},model:{value:t.editor,callback:function(e){t.editor=e},expression:"editor"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Keyword\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{borderless:"","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"}},model:{value:t.form.keyword,callback:function(e){t.$set(t.form,"keyword",e)},expression:"form.keyword"}})],1)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"40px",width:"100%"}},[s("q-btn",{staticClass:"signIn-button",attrs:{color:"primary",type:"submit",label:"Save & Continue",rounded:"","no-caps":""}})],1)])])],1)])])])])},o=[],a=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("5df3"),s("1c4c"),s("9523")),n=s.n(a),r=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={name:"CreateNews",created:function(){this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("headerBackButtonClick",this.backButtonClick)},data:function(){return{form:{file:null,title:"",description:"",content:"",keyword:""}}},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch)},mounted:function(){this.setHeaderData(!1,!0,"Create a News","","","",!0,!0)},computed:l(l({},Object(r["c"])("userprofile",["userDetails"])),Object(r["c"])("blog",["blogCategory","blogs"])),methods:l(l({},Object(r["b"])("header",["setHeader"])),{},{setHeaderData:function(t,e,s,i,o,a,n,r){this.setHeader({hamburgerIcon:t,backIcon:e,title:s,rightIcon1:i,rightIcon2:o,rightLinkText:a,notificationIcon:n,searchIcon:r})},gotoSearch:function(){this.$router.push("blog-search")},backButtonClick:function(){this.$router.push("news")},insertImg:function(){var t,e=this.post,s=document.createElement("input");s.type="file",s.accept=".png, .jpg",s.onchange=function(i){var o=Array.from(s.files);t=o[0];var a=new FileReader,n="";a.onloadend=function(){n=a.result,e.body+='<div><img src="'+n+'" /></div>'},a.readAsDataURL(t)},s.click()}})},p=d,u=(s("624e"),s("2877")),f=s("9989"),h=s("0378"),m=s("7d53"),v=s("0016"),C=s("27f9"),b=s("d66b"),g=s("9c40"),w=s("eebe"),x=s.n(w),y=Object(u["a"])(p,i,o,!1,null,"7624528c",null);e["default"]=y.exports;x()(y,"components",{QPage:f["a"],QForm:h["a"],QFile:m["a"],QIcon:v["a"],QInput:C["a"],QEditor:b["a"],QBtn:g["a"]})}}]);