(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"975ac":function(t,e,o){"use strict";var s=o("ea8b"),a=o.n(s);a.a},b859:function(t,e,o){},c924:function(t,e,o){"use strict";var s=o("b859"),a=o.n(s);a.a},ea8b:function(t,e,o){},eb6c:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex-center",staticStyle:{"background-color":"white"}},[o("div",{staticClass:"main-container"},[o("div",{staticClass:"profile-edit-section"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("q-form",{staticClass:"q-gutter-md"},[o("div",{staticClass:"row user-section"},[o("div",{staticClass:"col"},[o("span",{staticClass:"user-name"},[o("q-input",{attrs:{label:"Title","stack-label":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("q-select",{staticClass:"q-my-md",attrs:{options:t.blogCategory,"emit-value":"","map-options":"",label:"Category",multiple:"","option-value":function(t){return t.id},"option-label":function(t){return t.Name}},model:{value:t.form.categories,callback:function(e){t.$set(t.form,"categories",e)},expression:"form.categories"}}),o("div",{staticClass:"row user-section"},[o("div",{staticClass:"col"},[t.form.isForVlog?o("span",{staticClass:"user-name"},[t._v("\n                      Video\n                    ")]):o("span",{staticClass:"user-name"},[t._v("\n                      Cover photo/video\n                    ")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[null!=t.form.coverPhoto?o("q-img",{staticStyle:{"max-height":"280px","max-width":"100%"},attrs:{src:""+t.form.coverPhoto,"spinner-color":"white"}}):t._e(),null!=t.form.coverVideo?o("q-video",{staticStyle:{height:"220px",width:"100%"},attrs:{src:""+t.form.coverVideo}}):t._e(),o("div",{staticClass:"fileupload",staticStyle:{"max-width":"100%",height:"46px",padding:"5px 5px",border:"1px #6B7BC7 dotted","text-align":"center"},on:{click:function(e){return t.$refs.file.click()}}},[o("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",accept:[t.form.isForVlog?"video/*":"image/*"]},on:{change:t.onFileChange}}),o("q-btn",{staticClass:"img-icon",attrs:{icon:"app:upload-img",flat:"",round:"",dense:""}}),t.form.isForVlog?o("span",{staticClass:"banner-image"},[t._v(" Upload Video")]):o("span",{staticClass:"banner-image"},[t._v(" Upload Image ")])],1)],1)])])]),t.form.content?o("div",{staticClass:"content",domProps:{innerHTML:t._s(t.form.content)},on:{click:t.startCreatePost}}):o("div",[o("div",{staticStyle:{"margin-top":"1rem"}},[o("q-btn",{staticStyle:{height:"70px",width:"100% !important"},attrs:{outline:"",align:"left","no-caps":"",label:"Start creating your post..."},on:{click:t.startCreatePost}})],1)]),t.form.isForVlog?t._e():o("q-select",{staticStyle:{width:"100% !important"},attrs:{label:"Labels","use-input":"","use-chips":"",multiple:"",options:t.allKeywords},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"app:question-mark"}})]},proxy:!0}],null,!1,3822986967),model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}})],1)])])],1)])]),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.saveDraftDialog,callback:function(e){t.saveDraftDialog=e},expression:"saveDraftDialog"}},[o("BlogAction",{attrs:{isForVlog:t.form.isForVlog},on:{"clicked-selected-Option":t.clickedSelectedOptionModal}})],1)],1),o("q-dialog",{model:{value:t.successfulModal,callback:function(e){t.successfulModal=e},expression:"successfulModal"}},[o("BlogSuccessMessage",{attrs:{messageType:t.blogMessageType,isVlog:t.form.isForVlog}})],1),o("q-dialog",{model:{value:t.updateModal,callback:function(e){t.updateModal=e},expression:"updateModal"}},[o("q-card",{staticClass:"popup"},[o("q-card-section",{staticClass:"row items-center q-pb-none"},[o("div",{staticClass:"text-h6 col-md-6"},[o("b",[t._v("Updated")])]),o("q-space"),o("div",{staticClass:"text-h6 col-md-6 close"},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""},on:{click:t.gotoblgArticleList}})],1)],1),o("div",{staticClass:"row"},[o("div",{staticClass:"text-h6 col",staticStyle:{"text-align":"center"}},[o("q-icon",{staticClass:"success col-md-12",attrs:{name:"app:successful"}})],1)]),o("q-card-section",{staticClass:"success-msg"},[o("p",[t._v(" Your\n          "),t.form.isForVlog?o("span",[t._v("Vlog")]):o("span",[t._v("Blog")]),t._v("\n          has been updated successfully.\n        ")])]),o("div",{staticClass:"flex flex-center more-info-item"},[o("q-btn",{attrs:{color:"primary",label:"Done",rounded:"","no-caps":""},on:{click:t.gotoblgArticleList}})],1)],1)],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.blogDeleteModel,callback:function(e){t.blogDeleteModel=e},expression:"blogDeleteModel"}},[o("q-card",{staticClass:"roundedNewsFeed"},[o("div",{staticClass:"row items-center no-wrap",staticStyle:{"margin-bottom":"30px"}},[o("div",{staticClass:"col"},[o("q-card-section",{staticClass:"row items-center q-pb-none"},[o("div",{staticClass:"text-h6"},[t._v("Delete "),!0===t.form.isForVlog?o("span",[t._v("Vlog")]):o("span",[t._v("Blog")])]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),o("q-card-section",{staticClass:"row items-center q-pb-none"},[o("p",{staticClass:"col-12"},[t._v("\n              Are you sure you want to delete this "),!0===t.form.isForVlog?o("span",[t._v("vlog")]):o("span",[t._v("blog")]),t._v("?\n            ")])]),o("div",{staticClass:"col-12 text-center"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6 text-center"},[o("q-btn",{staticClass:"button default-button",staticStyle:{color:"#000000",width:"90%"},attrs:{label:"Cancel","no-caps":"",outline:"",color:"primary"},on:{click:function(e){return t.deleteConfirmationChoice("cancel")}}})],1),o("div",{staticClass:"col-6 text-center"},[o("q-btn",{staticClass:"button default-button",staticStyle:{width:"90%"},attrs:{color:"primary",label:"Confirm","no-caps":""},on:{click:function(e){return t.deleteConfirmationChoice("confirm")}}})],1)])])],1)])])],1)],1)},a=[],i=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("456d"),o("6b54"),o("06db"),o("28a5"),o("6762"),o("2fdb"),o("f751"),o("9523")),r=o.n(i),l=o("2f62"),c=o("2a19"),n=o("a2d8"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-card",{staticClass:"roundedNewsFeed"},[o("div",{staticClass:"row items-center no-wrap"},[o("div",{staticClass:"col"},[o("q-list",{staticClass:"rounded-borders",staticStyle:{width:"100%","padding-bottom":"45px"},attrs:{bordered:"",padding:""}},[t.CreateBlog&&0!==parseInt(t.CreateBlog.id)?o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Edit")}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"app:pencil"}})],1),o("q-item-section",[t._v("Edit")])],1):t._e(),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Submit")}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"app:approve"}})],1),o("q-item-section",[t._v("Submit")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Draft")}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"app:save-draft"}})],1),o("q-item-section",[t._v("Save as Draft")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Delete")}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"app:post-notification"}})],1),o("q-item-section",[t._v("Delete")])],1)],1)],1)])])},u=[];function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function f(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?p(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var m={name:"BlogAction",computed:f({},Object(l["c"])("blog",["CreateBlog"])),methods:{action:function(t){this.$emit("clicked-selected-Option",t)}}},g=m,h=(o("975ac"),o("2877")),b=o("f09f"),v=o("1c1c"),C=o("66e5"),y=o("4074"),k=o("0016"),w=o("714f"),q=o("eebe"),O=o.n(q),D=Object(h["a"])(g,d,u,!1,null,"30a8bfe3",null),P=D.exports;function S(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function V(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?S(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}O()(D,"components",{QCard:b["a"],QList:v["a"],QItem:C["a"],QItemSection:y["a"],QIcon:k["a"]}),O()(D,"directives",{Ripple:w["a"]});var B={name:"CreatePost",data:function(){return{form:{id:0,title:"",content:"",label:null,coverPhoto:null,coverVideo:null,isForVlog:!1,categories:[]},blogCoverPhoto:null,blogMessageType:"Published",successfulModal:!1,saveDraftDialog:!1,allKeywords:[],updateModal:!1,blogDeleteModel:!1}},components:{BlogSuccessMessage:n["a"],BlogAction:P},created:function(){this.$root.$on("headerRightIcon1Click",this.openSaveDialog),this.$root.$on("headerBackButtonClick",this.backButtonClick)},beforeDestroy:function(){this.$root.$off("headerRightIcon1Click",this.openSaveDialog),this.$root.$off("headerBackButtonClick",this.backButtonClick)},computed:V(V({},Object(l["c"])("userprofile",["userDetails"])),Object(l["c"])("blog",["blog","blogs","CreateBlog","keywords","blogCategory"])),mounted:function(){var t,e,o,s,a=this;!0===(null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.isForVlog)&&(this.form.isForVlog=!0),this.setHeaderData(!1,!0,(null===(o=this.$route)||void 0===o||null===(s=o.query)||void 0===s?void 0:s.isForVlog)?"Create Vlog":"Create Blog","three-dots-icon",!1,"",!1,!1),this.fetchKeywords().then((function(){a.allKeywords=a.keywords,a.filterOptions=a.keywords})),null!==this.CreateBlog&&(this.form=Object.assign({},this.CreateBlog),this.blogCoverPhoto=this.CreateBlog.blogCoverPhoto),this.fetchBlogCategory()},methods:V(V(V({},Object(l["b"])("blog",["postBlog","storeContent","fetchKeywords","fetchBlogCategory","PutBlog","deleteBlog"])),Object(l["b"])("header",["setHeader"])),{},{setHeaderData:function(t,e,o,s,a,i,r,l){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:s,rightIcon2:a,rightLinkText:i,notificationIcon:r,searchIcon:l})},saveBlog:function(t){var e=this;this.form.isForVlog&&null===this.form.coverVideo&&"Submitted"===t?c["a"].create({progress:!0,message:"Please Upload Video",type:"negative"}):""!==this.form.title||"Submitted"!==t?this.form.isForVlog||null!==this.form.coverPhoto||"Submitted"!==t?0!==this.form.categories.length||"Submitted"!==t?(t||(t="Submitted"),this.blogMessageType=t,this.form.categories.includes(1)||this.form.categories.push(1),0===parseInt(this.form.id)?this.postBlog({user:this.userDetails.userprofile.id,form:this.form,status:t,file:this.blogCoverPhoto}).then((function(t){e.successfulModal=!0})):this.PutBlog({user:this.userDetails.userprofile.id,form:this.form,file:this.blogCoverPhoto,status:t}).then((function(t){e.updateModal=!0}))):c["a"].create({progress:!0,message:"Please select at least one category",type:"negative"}):c["a"].create({progress:!0,message:"Please Add Cover Photo",type:"negative"}):c["a"].create({progress:!0,message:"Please Add Title",type:"negative"})},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.blogCoverPhoto=e[0],"image"===e[0].type.split("/")[0]?(this.createImage(e[0]),this.form.coverVideo=null):(this.validateVideoFile(e[0]),this.form.coverPhoto=null))},createImage:function(t){var e=this,o=new FileReader;o.onload=function(t){e.form.coverPhoto=t.target.result},o.readAsDataURL(t)},createVideo:function(t){var e=URL.createObjectURL(t);this.form.coverVideo=e},openSaveDialog:function(){this.saveDraftDialog=!0},action:function(t){this.$emit("clicked-selected-Option",t)},clickedSelectedOptionModal:function(t){switch(t){case"Edit":this.startCreatePost();break;case"Submit":this.saveBlog("Submitted");break;case"Draft":this.saveBlog("Drafts");break;case"Delete":this.blogDeleteModel=!0;break;case"Discard":this.saveDraftDialog=!1,this.form.id=0,this.form.title="",this.form.content="",this.form.label=null,this.form.coverPhoto=null,this.form.coverVideo=null,this.blogCoverPhoto=null;break}},backButtonClick:function(){this.$router.push("dashboard")},startCreatePost:function(){var t=this;this.storeContent({form:this.form,file:this.blogCoverPhoto}).then((function(){t.$router.push("create-post-detail")}))},validateVideoFile:function(t){var e=this,o=document.createElement("video");o.preload="metadata",o.onloadedmetadata=function(){parseInt(o.duration.toString().split(".")[0])<301?e.form.coverVideo=o.src:(e.blogCoverPhoto=null,c["a"].create({progress:!0,message:"Video Should be less than 5 mints",type:"negative"}))},o.src=URL.createObjectURL(t)},gotoblgArticleList:function(){this.form.isForVlog?this.$router.push({name:"blog-articles",params:{tab:this.blogMessageType},query:{isForVlog:"true"}}):this.$router.push({name:"blog-articles",params:{tab:this.blogMessageType}})},deleteConfirmationChoice:function(t){var e=this;"confirm"===t?this.deleteBlog(parseInt(this.form.id)).then((function(){e.blogDeleteModel=!1,c["a"].create({progress:!0,message:"Blog Deleted Successfully",type:"positive"}),e.gotoblgArticleList()})):this.blogDeleteModel=!1}})},x=B,j=(o("c924"),o("9989")),_=o("0378"),M=o("27f9"),F=o("ddd8"),$=o("068f"),I=o("6ac0"),Q=o("9c40"),L=o("24e8"),A=o("a370"),T=o("2c91"),E=o("7f67"),N=Object(h["a"])(x,s,a,!1,null,"0eeb0a0b",null);e["default"]=N.exports;O()(N,"components",{QPage:j["a"],QForm:_["a"],QInput:M["a"],QSelect:F["a"],QImg:$["a"],QVideo:I["a"],QBtn:Q["a"],QIcon:k["a"],QDialog:L["a"],QCard:b["a"],QCardSection:A["a"],QSpace:T["a"]}),O()(N,"directives",{ClosePopup:E["a"]})}}]);