(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"1cc5":function(t,e,o){},6391:function(t,e,o){"use strict";var a=o("7d0b"),i=o.n(a);i.a},"7d0b":function(t,e,o){},e8a7:function(t,e,o){"use strict";var a=o("1cc5"),i=o.n(a);i.a},eb6c:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex-center",staticStyle:{"background-color":"white"}},[o("div",{staticClass:"main-container"},[o("div",{staticClass:"profile-edit-section"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("q-form",{staticClass:"q-gutter-md"},[o("div",{staticClass:"row user-section"},[o("div",{staticClass:"col"},[o("span",{staticClass:"user-name"},[o("q-input",{attrs:{label:"Title","stack-label":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("q-select",{staticClass:"q-my-md",attrs:{options:t.blogCategory,"emit-value":"","map-options":"",label:"Category",multiple:"","option-value":function(t){return t.id},"option-label":function(t){return t.Name}},model:{value:t.form.categories,callback:function(e){t.$set(t.form,"categories",e)},expression:"form.categories"}}),o("div",{staticClass:"row user-section"},[o("div",{staticClass:"col"},[t.form.isForVlog?o("span",{staticClass:"user-name"},[t._v("\n                      Video\n                    ")]):o("span",{staticClass:"user-name"},[t._v("\n                      Cover photo/video\n                    ")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[null!=t.form.coverPhoto?o("q-img",{staticStyle:{"max-height":"280px","max-width":"100%"},attrs:{src:""+t.form.coverPhoto,"spinner-color":"white"}}):t._e(),null!=t.form.coverVideo?o("q-video",{staticStyle:{height:"220px",width:"100%"},attrs:{src:""+t.form.coverVideo}}):t._e(),o("div",{staticClass:"fileupload",staticStyle:{"max-width":"100%",height:"46px",padding:"5px 5px",border:"1px #6B7BC7 dotted","text-align":"center"},on:{click:function(e){return t.$refs.file.click()}}},[o("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",accept:"video/*"},on:{change:t.onFileChange}}),o("q-btn",{staticClass:"img-icon",attrs:{icon:"app:upload-img",flat:"",round:"",dense:""}}),t.form.isForVlog?o("span",{staticClass:"banner-image"},[t._v(" Upload Video")]):o("span",{staticClass:"banner-image"},[t._v(" Upload Image ")])],1)],1)])])]),t.form.content?o("div",{staticClass:"content",domProps:{innerHTML:t._s(t.form.content)},on:{click:t.startCreatePost}}):o("div",[o("div",{staticStyle:{"margin-top":"1rem"}},[o("q-btn",{staticStyle:{height:"70px",width:"100% !important"},attrs:{outline:"",align:"left","no-caps":"",label:"Start creating your post..."},on:{click:t.startCreatePost}})],1)]),t.form.isForVlog?t._e():o("q-select",{staticStyle:{width:"100% !important"},attrs:{label:"Labels","use-input":"","use-chips":"",multiple:"",options:t.allKeywords},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"app:question-mark"}})]},proxy:!0}],null,!1,3822986967),model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}})],1)])])],1)])]),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.saveDraftDialog,callback:function(e){t.saveDraftDialog=e},expression:"saveDraftDialog"}},[o("BlogAction",{on:{"clicked-selected-Option":t.clickedSelectedOptionModal}})],1)],1),o("q-dialog",{model:{value:t.successfulModal,callback:function(e){t.successfulModal=e},expression:"successfulModal"}},[o("BlogSuccessMessage",{attrs:{messageType:t.blogMessageType,isVlog:t.form.isForVlog}})],1)],1)},i=[],s=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("456d"),o("6b54"),o("06db"),o("28a5"),o("6762"),o("2fdb"),o("f751"),o("9523")),r=o.n(s),l=o("2f62"),n=o("2a19"),c=o("a2d8"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-card",{staticClass:"roundedNewsFeed"},[o("div",{staticClass:"row items-center no-wrap"},[o("div",{staticClass:"col"},[o("q-list",{staticClass:"rounded-borders",staticStyle:{width:"100%","padding-bottom":"45px"},attrs:{bordered:"",padding:""}},[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Save")}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"app:save-draft"}})],1),o("q-item-section",[t._v("Save as Draft")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Discard")}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"app:discard"}})],1),o("q-item-section",[t._v("Discard")])],1)],1)],1)])])},u=[],f={name:"BlogAction",methods:{action:function(t){this.$emit("clicked-selected-Option",t)}}},h=f,g=(o("6391"),o("2877")),p=o("f09f"),m=o("1c1c"),v=o("66e5"),b=o("4074"),C=o("0016"),y=o("714f"),k=o("eebe"),w=o.n(k),P=Object(g["a"])(h,d,u,!1,null,"301b26df",null),O=P.exports;function D(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function V(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?D(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):D(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}w()(P,"components",{QCard:p["a"],QList:m["a"],QItem:v["a"],QItemSection:b["a"],QIcon:C["a"]}),w()(P,"directives",{Ripple:y["a"]});var B={name:"CreatePost",data:function(){return{form:{title:"",content:"",label:null,coverPhoto:null,coverVideo:null,isForVlog:!1,categories:[]},blogCoverPhoto:null,blogMessageType:"Published",successfulModal:!1,saveDraftDialog:!1,allKeywords:[]}},components:{BlogSuccessMessage:c["a"],BlogAction:O},created:function(){this.$root.$on("headerRightIcon2Click",this.saveBlog),this.$root.$on("headerRightIcon1Click",this.openSaveDialog),this.$root.$on("headerBackButtonClick",this.backButtonClick)},beforeDestroy:function(){this.$root.$off("headerRightIcon2Click",this.saveBlog),this.$root.$off("headerRightIcon1Click",this.openSaveDialog),this.$root.$off("headerBackButtonClick",this.backButtonClick)},computed:V(V({},Object(l["c"])("userprofile",["userDetails"])),Object(l["c"])("blog",["blog","blogs","CreateBlog","keywords","blogCategory"])),mounted:function(){var t,e,o,a,i=this;!0===(null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.isForVlog)&&(this.form.isForVlog=!0),this.setHeaderData(!1,!0,(null===(o=this.$route)||void 0===o||null===(a=o.query)||void 0===a?void 0:a.isForVlog)?"Create Vlog":"Create Blog","three-dots-icon","send-avatar","",!1,!1),this.fetchKeywords().then((function(){i.allKeywords=i.keywords,i.filterOptions=i.keywords})),null!==this.CreateBlog&&(this.form=Object.assign({},this.CreateBlog),this.blogCoverPhoto=this.CreateBlog.blogCoverPhoto),this.fetchBlogCategory()},methods:V(V(V({},Object(l["b"])("blog",["postBlog","storeContent","fetchKeywords","fetchBlogCategory"])),Object(l["b"])("header",["setHeader"])),{},{setHeaderData:function(t,e,o,a,i,s,r,l){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:a,rightIcon2:i,rightLinkText:s,notificationIcon:r,searchIcon:l})},saveBlog:function(t){var e=this;this.form.isForVlog&&null===this.form.coverVideo?n["a"].create({progress:!0,message:"Please Upload Video",type:"negative"}):this.form.isForVlog&&""===this.form.title?n["a"].create({progress:!0,message:"Please Add Title",type:"negative"}):this.form.isForVlog&&0===this.form.categories.length?n["a"].create({progress:!0,message:"Please select at least one category",type:"negative"}):(this.form.isForVlog?t="Published":t||(t="Submitted"),this.blogMessageType=t,this.form.isForVlog&&(this.form.categories.includes(1)||this.form.categories.push(1)),this.postBlog({user:this.userDetails.userprofile.id,form:this.form,status:t,file:this.blogCoverPhoto}).then((function(t){e.successfulModal=!0})))},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.blogCoverPhoto=e[0],"image"===e[0].type.split("/")[0]?(this.createImage(e[0]),this.form.coverVideo=null):(this.validateVideoFile(e[0]),this.form.coverPhoto=null))},createImage:function(t){var e=this,o=new FileReader;o.onload=function(t){e.form.coverPhoto=t.target.result},o.readAsDataURL(t)},createVideo:function(t){var e=URL.createObjectURL(t);this.form.coverVideo=e},openSaveDialog:function(){this.saveDraftDialog=!0},action:function(t){this.$emit("clicked-selected-Option",t)},clickedSelectedOptionModal:function(t){switch(t){case"Save":this.saveBlog("Drafts");break;case"Discard":this.saveDraftDialog=!1,this.form.title="",this.form.content="",this.form.label=null,this.form.coverPhoto=null,this.blogCoverPhoto=null;break}},backButtonClick:function(){this.$router.push("dashboard")},startCreatePost:function(){var t=this;this.storeContent({form:this.form,file:this.blogCoverPhoto}).then((function(){t.$router.push("create-post-detail")}))},validateVideoFile:function(t){var e=this,o=document.createElement("video");o.preload="metadata",o.onloadedmetadata=function(){parseInt(o.duration.toString().split(".")[0])<301?e.form.coverVideo=o.src:(e.blogCoverPhoto=null,n["a"].create({progress:!0,message:"Video Should be less than 5 mints",type:"negative"}))},o.src=URL.createObjectURL(t)}})},S=B,q=(o("e8a7"),o("9989")),$=o("0378"),x=o("27f9"),j=o("ddd8"),F=o("068f"),I=o("6ac0"),_=o("9c40"),Q=o("24e8"),M=Object(g["a"])(S,a,i,!1,null,"f04451b0",null);e["default"]=M.exports;w()(M,"components",{QPage:q["a"],QForm:$["a"],QInput:x["a"],QSelect:j["a"],QImg:F["a"],QVideo:I["a"],QBtn:_["a"],QIcon:C["a"],QDialog:Q["a"]})}}]);