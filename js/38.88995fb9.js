(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{c03c:function(t,e,s){"use strict";var o=s("fd8c"),i=s.n(o);i.a},e59f:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex-center"},[s("div",{staticClass:"main-container"},[s("div",{staticClass:"profile-edit-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-form",{staticClass:"q-gutter-md",on:{submit:t.saveBlog}},[s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Cover photo\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[null!=t.form.coverPhoto?s("q-img",{staticStyle:{height:"280px","max-width":"100%"},attrs:{src:""+t.form.coverPhoto,"spinner-color":"white"}}):t._e(),s("div",{staticClass:"fileupload",staticStyle:{"max-width":"100%",height:"46px",padding:"5px 5px",border:"1px #6B7BC7 dotted","text-align":"center"},on:{click:function(e){return t.$refs.file.click()}}},[s("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileChange}}),s("q-btn",{staticClass:"img-icon",attrs:{icon:"app:upload-img",flat:"",round:"",dense:""}}),s("span",{staticClass:"banner-image"},[t._v(" Upload Image")])],1)],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Title\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{borderless:"","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"}},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Descreption\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{borderless:"","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"}},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("Content")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-editor",{staticClass:"contentinput",attrs:{definitions:{insert_img:{tip:"Insert Image",icon:"photo",handler:this.insertImg}},toolbar:[["left","center","right","justify","insert_img","bold","italic","strike"]]},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Keyword\n                ")]),s("div",{staticClass:"row"},[t.allKeywords?s("div",{staticClass:"col"},[s("q-select",{attrs:{filled:"","use-input":"","use-chips":"",multiple:"","input-debounce":"0",options:t.allKeywords},model:{value:t.form.keyword,callback:function(e){t.$set(t.form,"keyword",e)},expression:"form.keyword"}})],1):t._e()])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"40px",width:"100%"}},[s("q-btn",{staticClass:"signIn-button",attrs:{color:"primary",type:"button",label:"Preview",rounded:"","no-caps":""},on:{click:t.goToPreview}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"20px"}},[s("q-btn",{staticClass:"signIn-button savBtn",attrs:{color:"primary",type:"submit",label:"Save",rounded:"","no-caps":""}})],1)])])],1)])])]),s("q-dialog",{model:{value:t.successfulModal,callback:function(e){t.successfulModal=e},expression:"successfulModal"}},[s("BlogSuccessMessage")],1)],1)},i=[],a=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("6762"),s("2fdb"),s("5df3"),s("1c4c"),s("9523")),n=s.n(a),r=s("2f62"),c=s("a2d8");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={name:"BlogArticle",created:function(){this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("headerBackButtonClick",this.backButtonClick)},data:function(){return{form:{coverPhoto:null,title:"",description:"",content:"",keyword:null},filterOptions:[],model:null,blogCoverPhoto:null,allKeywords:[],successfulModal:!1}},components:{BlogSuccessMessage:c["a"]},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch)},mounted:function(){var t=this;this.setHeaderData(!1,!0,"Blog Article","","","",!0,!0),this.fetchKeywords().then((function(){t.allKeywords=t.keywords,t.filterOptions=t.keywords}))},computed:d(d({},Object(r["c"])("userprofile",["userDetails"])),Object(r["c"])("blog",["blogs","keywords"])),methods:d(d(d({},Object(r["b"])("blog",["postBlog","fetchKeywords","previewBlog"])),Object(r["b"])("header",["setHeader"])),{},{setHeaderData:function(t,e,s,o,i,a,n,r){this.setHeader({hamburgerIcon:t,backIcon:e,title:s,rightIcon1:o,rightIcon2:i,rightLinkText:a,notificationIcon:n,searchIcon:r})},gotoSearch:function(){this.$router.push("blog-search")},backButtonClick:function(){this.$router.push("dashboard")},goToPreview:function(){var t=this;this.previewBlog({form:this.form,file:this.blogCoverPhoto}).then((function(){t.$router.push("blog-review")}))},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.blogCoverPhoto=e[0],this.createImage(e[0]))},createImage:function(t){var e=this,s=new FileReader;s.onload=function(t){e.form.coverPhoto=t.target.result},s.readAsDataURL(t)},saveBlog:function(){var t=this;this.postBlog({user:this.userDetails.userprofile.id,form:this.form,file:this.blogCoverPhoto}).then((function(){t.successfulModal=!0}))},insertImg:function(){var t,e=this.post,s=document.createElement("input");s.type="file",s.accept=".png, .jpg",s.onchange=function(o){var i=Array.from(s.files);t=i[0];var a=new FileReader,n="";a.onloadend=function(){n=a.result,e.body+='<div><img src="'+n+'" /></div>'},a.readAsDataURL(t)},s.click()},createValue:function(t,e){t.length>2&&(this.allKeywords.includes(t)||e(t,"add-unique"))},filterFn:function(t,e){var s=this;e((function(){if(""===t)s.filterOptions=s.allKeywords;else{var e=t.toLowerCase();s.filterOptions=s.allKeywords.filter((function(t){return t.toLowerCase().indexOf(e)>-1}))}}))}})},f=u,p=(s("c03c"),s("2877")),h=s("9989"),g=s("0378"),v=s("068f"),m=s("9c40"),b=s("27f9"),C=s("d66b"),w=s("ddd8"),y=s("24e8"),k=s("eebe"),x=s.n(k),O=Object(p["a"])(f,o,i,!1,null,"7a7a77f6",null);e["default"]=O.exports;x()(O,"components",{QPage:h["a"],QForm:g["a"],QImg:v["a"],QBtn:m["a"],QInput:b["a"],QEditor:C["a"],QSelect:w["a"],QDialog:y["a"]})},fd8c:function(t,e,s){}}]);