(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"163c":function(t,e,o){"use strict";var i=o("34a8"),s=o.n(i);s.a},"34a8":function(t,e,o){},"46d3":function(t,e,o){},a422:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex page"},[o("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[o("q-card",{staticClass:"maincard"},[o("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","inline-label":"","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab",{attrs:{name:"Published",label:"Published","no-caps":""}}),o("q-tab",{attrs:{name:"Requests",label:"Requests","no-caps":""}}),o("q-tab",{attrs:{name:"Rejected",label:"Rejected","no-caps":""}}),o("q-tab",{attrs:{name:"Unpublished",label:"Unpublished","no-caps":""}})],1),o("q-separator"),o("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Published"}},[0===t.publishedBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("No Published found ")])],1)]):o("div",t._l(t.publishedBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:""},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h6 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)]),o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Requests"}},[0===t.submittedBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("No Requests found.")])],1)]):o("div",t._l(t.submittedBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:""},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)]),o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Rejected"}},[0===t.rejectedBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("No Rejected found. ")])],1)]):o("div",t._l(t.rejectedBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:""},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)]),o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Unpublished"}},[0===t.unpublishedBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("No Unpublished found. ")])],1)]):o("div",t._l(t.unpublishedBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:""},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h6 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)])],1)],1)],1),o("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[o("FullScreen",{attrs:{details:t.fullscreendata}})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.blogOptionModel,callback:function(e){t.blogOptionModel=e},expression:"blogOptionModel"}},[o("ManageBlogOption",{attrs:{selectedBlog:t.selectedBlog},on:{"clicked-selected-Option":t.selectedManageOption}})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.confirmModal,callback:function(e){t.confirmModal=e},expression:"confirmModal"}},[o("q-card",{staticClass:"roundedNewsFeed"},[o("div",{staticClass:"row items-center no-wrap",staticStyle:{"margin-bottom":"30px"}},[o("div",{staticClass:"col"},[o("q-card-section",{staticClass:"row items-center q-pb-none"},[o("div",{staticClass:"text-h6"},[t._v(t._s(t.selectedOption)+" Blog")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),o("q-card-section",{staticClass:"row items-center q-pb-none"},[o("p",{staticClass:"col-12"},[t._v("\n              Are you sure you want to "+t._s(t.selectedOption)+" this blog?\n            ")])]),o("div",{staticClass:"col-12 text-center"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6 text-center"},[o("q-btn",{staticClass:"button default-button",staticStyle:{color:"#000000",width:"90%"},attrs:{label:"Cancel","no-caps":"",outline:"",color:"primary"},on:{click:function(e){return t.confirmChoice("cancel")}}})],1),o("div",{staticClass:"col-6 text-center"},[o("q-btn",{staticClass:"button default-button",staticStyle:{width:"90%"},attrs:{color:"primary",label:"Confirm","no-caps":""},on:{click:function(e){return t.confirmChoice("confirm")}}})],1)])])],1)])])],1)],1)},s=[],a=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("28a5"),o("9523")),n=o.n(a),c=o("2f62"),l=o("d41a"),r=o("2a19"),d=o("bd4c"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-card",{staticClass:"roundedNewsFeed"},[o("div",[o("hr",{staticClass:"hr",on:{click:t.closeActionDialog}})]),o("div",{staticClass:"row items-center no-wrap"},[o("div",{staticClass:"col"},[o("q-list",{staticClass:"rounded-borders",staticStyle:{width:"100%","padding-bottom":"45px"},attrs:{bordered:"",padding:""}},["Submitted"===t.selectedBlog.Status||"Rejected"===t.selectedBlog.Status?o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Approve")}}},[o("div",{staticClass:"icon-div"},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{staticClass:"icon-img",attrs:{name:"app:approve"}})],1)],1),o("q-item-section",{staticClass:"option"},[t._v("Approve")])],1):t._e(),"Published"===t.selectedBlog.Status?o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Unpublish")}}},[o("div",{staticClass:"icon-div"},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{staticClass:"icon-img",attrs:{name:"app:eye-slash"}})],1)],1),o("q-item-section",{staticClass:"option"},[t._v("Unpublish")])],1):t._e(),"Submitted"===t.selectedBlog.Status||"Published"===t.selectedBlog.Status?o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Reject")}}},[o("div",{staticClass:"icon-div"},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{staticClass:"icon-img",attrs:{name:"app:reject"}})],1)],1),o("q-item-section",{staticClass:"option"},[t._v("Reject")])],1):t._e(),"Unpublished"===t.selectedBlog.Status?o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("Publish")}}},[o("div",{staticClass:"icon-div"},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{staticClass:"icon-img",attrs:{name:"app:eye"}})],1)],1),o("q-item-section",{staticClass:"option"},[t._v("Publish")])],1):t._e()],1)],1)])])},p=[],g={name:"ManageBlogOption",props:{selectedBlog:{type:Object,required:!1}},methods:{action:function(t){this.$emit("clicked-selected-Option",t)},closeActionDialog:function(){}}},m=g,f=(o("dfaf"),o("2877")),b=o("f09f"),v=o("1c1c"),h=o("66e5"),C=o("4074"),y=o("0016"),q=o("714f"),B=o("eebe"),x=o.n(B),P=Object(f["a"])(m,u,p,!1,null,"3be24e3f",null),k=P.exports;function O(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function _(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?O(Object(o),!0).forEach((function(e){n()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}x()(P,"components",{QCard:b["a"],QList:v["a"],QItem:h["a"],QItemSection:C["a"],QIcon:y["a"]}),x()(P,"directives",{Ripple:q["a"]});var w={name:"BlogArticle",created:function(){this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("onformatDateClick",this.formatDate),this.$root.$on("onExitFullscreen",this.closeFullScreen)},beforeDestroy:function(){this.$root.$off("headerRightIcon2Click",this.gotoSearch),this.$root.$off("onformatDateClick",this.formatDate),this.$root.$off("onExitFullscreen",this.closeFullScreen)},computed:_(_(_({},Object(c["c"])("blog",["blogs","publishedBlogs","submittedBlogs","draftBlogs","rejectedBlogs","unpublishedBlogs"])),Object(c["c"])("config",["blobBaseUrl"])),Object(c["c"])("userprofile",["userDetails"])),components:{FullScreen:l["a"],ManageBlogOption:k},filters:{truncate:function(t,e,o){return null===t?"":(null===t||void 0===t?void 0:t.length)>e?t.substring(0,e)+o:t}},mounted:function(){var t,e;this.setHeaderData(!1,!0,"Manage Blogs","","","",!0,!0);var o="true"===(null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.isForVlog)||!1;this.fetchBlogs(o)},data:function(){return{tab:"Published",fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:""},selectedBlog:null,blogOptionModel:!1,confirmModal:!1,selectedOption:""}},methods:_(_(_({},Object(c["b"])("header",["setHeader"])),Object(c["b"])("blog",["fetchBlogs","storeContent","fetchBlogs","updateBlogStatus"])),{},{setHeaderData:function(t,e,o,i,s,a,n,c){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:i,rightIcon2:s,rightLinkText:a,notificationIcon:n,searchIcon:c})},formatDate:function(t){return d["a"].formatDate(t,"DD MMM")+" at "+d["a"].formatDate(t,"hh.mm A")},gotoSearch:function(){this.$router.push("/blog-search")},backButtonClick:function(){this.$router.push("dashboard")},goToCreateBlog:function(){this.$router.push("/create-blog")},goToReview:function(t){},goToBlogArticle:function(t){this.$router.push("/blog-article/"+t)},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen(),this.selectedBlog={};var t=document.getElementById("image-box");t.setAttribute("style","display:none;")}},getImageurl:function(t){var e=t.substring(t.lastIndexOf("/")+1);e="small_"+e;var o=this.blobBaseUrl;return t=o+e,t},openBlogOptionModel:function(t){this.selectedBlog=t,this.blogOptionModel=!0},selectedManageOption:function(t){this.selectedOption=t,this.blogOptionModel=!1,this.confirmModal=!0},confirmChoice:function(t){var e=this;if("confirm"===t){var o="Approve"===this.selectedOption||"Publish"===this.selectedOption?"Published":"Reject"===this.selectedOption?"Rejected":"Unpublish"===this.selectedOption?"Unpublished":"";this.updateBlogStatus({id:this.selectedBlog.id,status:o}).then((function(t){r["a"].create({progress:!0,message:"Blog Status Updated Successfully",type:"positive"}),e.selectedOption="",e.selectedBlog=null,e.confirmModal=!1}))}else this.selectedBlog=null,this.confirmModal=!1,this.selectedOption=""},isImagePost:function(t){return"image"===t.split("/")[0]}})},S=w,j=(o("163c"),o("9989")),I=o("429b"),D=o("7460"),M=o("eb85"),T=o("adad"),A=o("823b"),$=o("068f"),Q=o("ad56"),R=o("a370"),F=o("9c40"),U=o("24e8"),N=o("2c91"),E=o("7f67"),H=Object(f["a"])(S,i,s,!1,null,"4854266d",null);e["default"]=H.exports;x()(H,"components",{QPage:j["a"],QCard:b["a"],QTabs:I["a"],QTab:D["a"],QSeparator:M["a"],QTabPanels:T["a"],QTabPanel:A["a"],QImg:$["a"],QIntersection:Q["a"],QCardSection:R["a"],QBtn:F["a"],QDialog:U["a"],QSpace:N["a"]}),x()(H,"directives",{ClosePopup:E["a"]})},dfaf:function(t,e,o){"use strict";var i=o("46d3"),s=o.n(i);s.a}}]);