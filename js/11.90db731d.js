(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"285b":function(t,e,o){"use strict";var a=o("e7d6"),s=o.n(a);s.a},6391:function(t,e,o){"use strict";var a=o("7d0b"),s=o.n(a);s.a},"7d0b":function(t,e,o){},e7d6:function(t,e,o){},eb6c:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex-center",staticStyle:{"background-color":"white"}},[o("div",{staticClass:"main-container"},[o("div",{staticClass:"profile-edit-section"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("q-form",{staticClass:"q-gutter-md"},[o("div",{staticClass:"row user-section"},[o("div",{staticClass:"col"},[o("span",{staticClass:"user-name"},[o("q-input",{attrs:{label:"Title","stack-label":""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),o("div",{staticClass:"row user-section"},[o("div",{staticClass:"col"},[o("span",{staticClass:"user-name"},[t._v("\n                      Cover photo\n                    ")]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[null!=t.form.coverPhoto?o("q-img",{staticStyle:{"max-height":"280px","max-width":"100%"},attrs:{src:""+t.form.coverPhoto,"spinner-color":"white"}}):t._e(),o("div",{staticClass:"fileupload",staticStyle:{"max-width":"100%",height:"46px",padding:"5px 5px",border:"1px #6B7BC7 dotted","text-align":"center"},on:{click:function(e){return t.$refs.file.click()}}},[o("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileChange}}),o("q-btn",{staticClass:"img-icon",attrs:{icon:"app:upload-img",flat:"",round:"",dense:""}}),o("span",{staticClass:"banner-image"},[t._v(" Upload Image")])],1)],1)])])]),t.form.content?o("div",{staticClass:"content",domProps:{innerHTML:t._s(t.form.content)}}):o("div",[o("div",{staticStyle:{"margin-top":"1rem"}},[o("q-btn",{staticStyle:{height:"70px",width:"100% !important"},attrs:{outline:"",align:"left","no-caps":"",label:"Start creating your post..."},on:{click:t.startCreatePost}})],1)]),o("q-select",{staticStyle:{width:"100% !important"},attrs:{label:"Labels","use-input":"","use-chips":"",multiple:"",options:t.allKeywords},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{attrs:{name:"app:question-mark"}})]},proxy:!0}]),model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}})],1)])])],1)])]),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.saveDraftDialog,callback:function(e){t.saveDraftDialog=e},expression:"saveDraftDialog"}},[o("BlogAction",{on:{"clicked-selected-Option":t.clickedSelectedOptionModal}})],1)],1),o("q-dialog",{model:{value:t.successfulModal,callback:function(e){t.successfulModal=e},expression:"successfulModal"}},[o("BlogSuccessMessage",{attrs:{messageType:t.blogMessageType}})],1)],1)},s=[],i=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("f751"),o("9523")),n=o.n(i),r=o("2f62"),c=o("a2d8"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-card",{staticClass:"roundedNewsFeed"},[o("div",{staticClass:"row items-center no-wrap"},[o("div",{staticClass:"col"},[o("q-list",{staticClass:"rounded-borders",staticStyle:{width:"100%","padding-bottom":"45px"},attrs:{bordered:"",padding:""}},[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Save")}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"app:save-draft"}})],1),o("q-item-section",[t._v("Save as Draft")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Discard")}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"app:discard"}})],1),o("q-item-section",[t._v("Discard")])],1)],1)],1)])])},d=[],u={name:"BlogAction",methods:{action:function(t){this.$emit("clicked-selected-Option",t)}}},f=u,h=(o("6391"),o("2877")),p=o("f09f"),g=o("1c1c"),m=o("66e5"),b=o("4074"),v=o("0016"),C=o("714f"),k=o("eebe"),y=o.n(k),w=Object(h["a"])(f,l,d,!1,null,"301b26df",null),D=w.exports;function O(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function P(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?O(Object(o),!0).forEach((function(e){n()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}y()(w,"components",{QCard:p["a"],QList:g["a"],QItem:m["a"],QItemSection:b["a"],QIcon:v["a"]}),y()(w,"directives",{Ripple:C["a"]});var B={name:"CreatePost",data:function(){return{form:{title:"",content:"",label:null,coverPhoto:null},blogCoverPhoto:null,blogMessageType:"Published",successfulModal:!1,saveDraftDialog:!1,allKeywords:[]}},components:{BlogSuccessMessage:c["a"],BlogAction:D},created:function(){this.$root.$on("headerRightIcon2Click",this.saveBlog),this.$root.$on("headerRightIcon1Click",this.openSaveDialog),this.$root.$on("headerBackButtonClick",this.backButtonClick)},beforeDestroy:function(){this.$root.$off("headerRightIcon2Click",this.saveBlog),this.$root.$off("headerRightIcon1Click",this.openSaveDialog),this.$root.$off("headerBackButtonClick",this.backButtonClick)},computed:P(P({},Object(r["c"])("userprofile",["userDetails"])),Object(r["c"])("blog",["blog","blogs","CreateBlog","keywords"])),mounted:function(){var t=this;this.setHeaderData(!1,!0,"Create Post","three-dots-icon","send-avatar","",!1,!1),this.fetchKeywords().then((function(){t.allKeywords=t.keywords,t.filterOptions=t.keywords})),null!==this.CreateBlog&&(this.form=Object.assign({},this.CreateBlog),this.blogCoverPhoto=this.CreateBlog.blogCoverPhoto)},methods:P(P(P({},Object(r["b"])("blog",["postBlog","storeContent","fetchKeywords"])),Object(r["b"])("header",["setHeader"])),{},{setHeaderData:function(t,e,o,a,s,i,n,r){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:a,rightIcon2:s,rightLinkText:i,notificationIcon:n,searchIcon:r})},saveBlog:function(t){var e=this;t||(t="Submitted"),this.blogMessageType=t,this.postBlog({user:this.userDetails.userprofile.id,form:this.form,status:t,file:this.blogCoverPhoto}).then((function(){e.successfulModal=!0}))},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.blogCoverPhoto=e[0],this.createImage(e[0]))},createImage:function(t){var e=this,o=new FileReader;o.onload=function(t){e.form.coverPhoto=t.target.result},o.readAsDataURL(t)},openSaveDialog:function(){this.saveDraftDialog=!0},action:function(t){this.$emit("clicked-selected-Option",t)},clickedSelectedOptionModal:function(t){switch(t){case"Save":this.saveBlog("Drafts");break;case"Discard":this.saveDraftDialog=!1,this.form.title="",this.form.content="",this.form.label=null,this.form.coverPhoto=null,this.blogCoverPhoto=null;break}},backButtonClick:function(){this.$router.push("dashboard")},startCreatePost:function(){var t=this;this.storeContent({form:this.form,file:this.blogCoverPhoto}).then((function(){t.$router.push("create-post-detail")}))}})},S=B,q=(o("285b"),o("9989")),$=o("0378"),x=o("27f9"),I=o("068f"),j=o("9c40"),M=o("ddd8"),Q=o("24e8"),_=Object(h["a"])(S,a,s,!1,null,"28b50d32",null);e["default"]=_.exports;y()(_,"components",{QPage:q["a"],QForm:$["a"],QInput:x["a"],QImg:I["a"],QBtn:j["a"],QSelect:M["a"],QIcon:v["a"],QDialog:Q["a"]})}}]);