(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[55],{"04ed":function(t,e,o){},"260b":function(t,e,o){"use strict";var s=o("04ed"),i=o.n(s);i.a},a422:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex page"},[o("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[o("q-card",{staticClass:"maincard"},[o("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","inline-label":"","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab",{attrs:{name:"Published",label:"Published","no-caps":""}}),o("q-tab",{attrs:{name:"Requests",label:"Requests","no-caps":""}}),o("q-tab",{attrs:{name:"Rejected",label:"Rejected","no-caps":""}}),o("q-tab",{attrs:{name:"Unpublished",label:"Unpublished","no-caps":""}})],1),o("q-separator"),o("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Published"}},[0===t.publishedBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("No Published found ")])],1)]):o("div",t._l(t.publishedBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:"",controlsList:"nodownload"},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h6 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)]),o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Requests"}},[0===t.submittedBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("No Requests found.")])],1)]):o("div",t._l(t.submittedBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:"",controlsList:"nodownload"},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)]),o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Rejected"}},[0===t.rejectedBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("No Rejected found. ")])],1)]):o("div",t._l(t.rejectedBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:"",controlsList:"nodownload"},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)]),o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Unpublished"}},[0===t.unpublishedBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("No Unpublished found. ")])],1)]):o("div",t._l(t.unpublishedBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:"",controlsList:"nodownload"},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h6 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)])],1)],1)],1),o("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[o("FullScreen",{attrs:{details:t.fullscreendata}})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.blogOptionModel,callback:function(e){t.blogOptionModel=e},expression:"blogOptionModel"}},[o("ManageBlogOption",{attrs:{selectedBlog:t.selectedBlog},on:{"clicked-selected-Option":t.selectedManageOption}})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.confirmModal,callback:function(e){t.confirmModal=e},expression:"confirmModal"}},[o("q-card",{staticClass:"roundedNewsFeed"},[o("div",{staticClass:"row items-center no-wrap",staticStyle:{"margin-bottom":"30px"}},[o("div",{staticClass:"col"},[o("q-card-section",{staticClass:"row items-center q-pb-none"},[o("div",{staticClass:"text-h6"},[t._v(t._s(t.selectedOption)+" Blog")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),o("q-card-section",{staticClass:"row items-center q-pb-none"},[o("p",{staticClass:"col-12"},[t._v("\n              Are you sure you want to "+t._s(t.selectedOption)+" this blog?\n            ")])]),o("div",{staticClass:"col-12 text-center"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6 text-center"},[o("q-btn",{staticClass:"button default-button",staticStyle:{color:"#000000",width:"90%"},attrs:{label:"Cancel","no-caps":"",outline:"",color:"primary"},on:{click:function(e){return t.confirmChoice("cancel")}}})],1),o("div",{staticClass:"col-6 text-center"},[o("q-btn",{staticClass:"button default-button",staticStyle:{width:"90%"},attrs:{color:"primary",label:"Confirm","no-caps":""},on:{click:function(e){return t.confirmChoice("confirm")}}})],1)])])],1)])])],1)],1)},i=[],a=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("28a5"),o("6762"),o("2fdb"),o("9523")),n=o.n(a),l=o("2f62"),r=o("d41a"),c=o("2a19"),d=o("bd4c"),u=o("dd45");function g(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,s)}return o}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?g(Object(o),!0).forEach((function(e){n()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var f={name:"BlogArticle",created:function(){this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("onformatDateClick",this.formatDate),this.$root.$on("onExitFullscreen",this.closeFullScreen)},beforeDestroy:function(){this.$root.$off("headerRightIcon2Click",this.gotoSearch),this.$root.$off("onformatDateClick",this.formatDate),this.$root.$off("onExitFullscreen",this.closeFullScreen)},computed:p(p(p(p({},Object(l["c"])("blog",["blogs","publishedBlogs","submittedBlogs","draftBlogs","rejectedBlogs","unpublishedBlogs"])),Object(l["c"])("config",["blobBaseUrl"])),Object(l["c"])("userprofile",["userDetails"])),Object(l["c"])("userprofile",["userRoles"])),components:{FullScreen:r["a"],ManageBlogOption:u["a"]},filters:{truncate:function(t,e,o){return null===t?"":(null===t||void 0===t?void 0:t.length)>e?t.substring(0,e)+o:t}},mounted:function(){var t,e;this.userRoles&&!this.userRoles.some((function(t){return[2].includes(t.id)}))&&this.$router.push("index"),this.setHeaderData(!1,!0,"Manage Blogs","","","",!0,!0);var o="true"===(null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.isForVlog)||!1;this.fetchBlogs(o)},data:function(){return{tab:"Published",fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:""},selectedBlog:null,blogOptionModel:!1,confirmModal:!1,selectedOption:""}},methods:p(p(p({},Object(l["b"])("header",["setHeader"])),Object(l["b"])("blog",["fetchBlogs","storeContent","fetchBlogs","updateBlogStatus"])),{},{setHeaderData:function(t,e,o,s,i,a,n,l){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:s,rightIcon2:i,rightLinkText:a,notificationIcon:n,searchIcon:l})},formatDate:function(t){return d["a"].formatDate(t,"DD MMM")+" at "+d["a"].formatDate(t,"hh.mm A")},gotoSearch:function(){this.$router.push("/blog-search")},backButtonClick:function(){this.$router.push("dashboard")},goToCreateBlog:function(){this.$router.push("/create-blog")},goToReview:function(t){},goToBlogArticle:function(t){this.$router.push("/blog-article/"+t)},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen(),this.selectedBlog={};var t=document.getElementById("image-box");t.setAttribute("style","display:none;")}},getImageurl:function(t){var e=t.substring(t.lastIndexOf("/")+1);e="small_"+e;var o=this.blobBaseUrl;return t=o+e,t},openBlogOptionModel:function(t){this.selectedBlog=t,this.blogOptionModel=!0},selectedManageOption:function(t){this.selectedOption=t,this.blogOptionModel=!1,this.confirmModal=!0},confirmChoice:function(t){var e=this;if("confirm"===t){var o="Approve"===this.selectedOption||"Publish"===this.selectedOption?"Published":"Reject"===this.selectedOption?"Rejected":"Unpublish"===this.selectedOption?"Unpublished":"";this.updateBlogStatus({id:this.selectedBlog.id,status:o}).then((function(t){c["a"].create({progress:!0,message:"Blog Status Updated Successfully",type:"positive"}),e.selectedOption="",e.selectedBlog=null,e.confirmModal=!1}))}else this.selectedBlog=null,this.confirmModal=!1,this.selectedOption=""},isImagePost:function(t){return"image"===t.split("/")[0]}})},m=f,b=(o("260b"),o("2877")),h=o("9989"),v=o("f09f"),C=o("429b"),y=o("7460"),q=o("eb85"),x=o("adad"),B=o("823b"),P=o("068f"),O=o("ad56"),_=o("a370"),k=o("9c40"),w=o("24e8"),j=o("2c91"),S=o("7f67"),I=o("eebe"),D=o.n(I),M=Object(b["a"])(m,s,i,!1,null,"634191c3",null);e["default"]=M.exports;D()(M,"components",{QPage:h["a"],QCard:v["a"],QTabs:C["a"],QTab:y["a"],QSeparator:q["a"],QTabPanels:x["a"],QTabPanel:B["a"],QImg:P["a"],QIntersection:O["a"],QCardSection:_["a"],QBtn:k["a"],QDialog:w["a"],QSpace:j["a"]}),D()(M,"directives",{ClosePopup:S["a"]})}}]);