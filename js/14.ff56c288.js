(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"0113":function(t,e,o){"use strict";var i=o("af11"),s=o.n(i);s.a},"6fc2":function(t,e,o){},a0ab:function(t,e,o){"use strict";var i=o("6fc2"),s=o.n(i);s.a},ad51:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex page"},[o("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[o("q-card",{staticClass:"maincard"},[o("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","inline-label":"","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab",{attrs:{name:"Published",label:"Published","no-caps":""}}),o("q-tab",{attrs:{name:"Submitted",label:"Submitted","no-caps":""}}),o("q-tab",{attrs:{name:"Drafts",label:"Drafts","no-caps":""}})],1),o("q-separator"),o("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Published"}},[0===t.publishedBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("Your Published is empty. tap the button below to start writing ")])],1)]):o("div",t._l(t.publishedBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:"",poster:!!e.PosterImage&&e.PosterImage.url,preload:"none",controlsList:"nodownload"},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h6 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogArticleOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)]),o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Submitted"}},[0===t.submittedBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("Your Submitted is empty. tap the button below to start writing ")])],1)]):o("div",t._l(t.submittedBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:"",poster:!!e.PosterImage&&e.PosterImage.url,preload:"none",controlsList:"nodownload"},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h6 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogArticleOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)]),o("q-tab-panel",{staticStyle:{padding:"0px !important"},attrs:{name:"Drafts"}},[0===t.draftBlogs.length?o("div",[o("div",{staticClass:"flex flex-center"},[o("q-img",{staticClass:"emptyDraft",attrs:{src:"statics/avatars/empty-draft-avatar.svg"}}),o("p",{staticClass:"emptymsg"},[t._v("Your draft is empty. tap the button below to start writing ")])],1)]):o("div",t._l(t.draftBlogs,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[e.CoverPhoto&&t.isImagePost(e.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),null!==e.CoverPhoto&&!1===t.isImagePost(e.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:e.CoverPhoto.url,id:e.id,controls:"",poster:!!e.PosterImage&&e.PosterImage.url,preload:"none",controlsList:"nodownload"},on:{click:function(o){return t.goToBlogArticle(e.id)}}}):t._e(),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h6 q-mt-sm q-mb-xs blog-title",on:{click:function(o){return t.goToBlogArticle(e.id)}}},[t._v(t._s(e.Title)+"\n                    ")]),o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(o){return t.openBlogArticleOptionModel(e)}}})],1),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                    "+t._s(t._f("truncate")(e.Description,50,"..."))+"\n                  ")])])],1)],1)})),1)])],1)],1)],1),o("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[o("FullScreen",{attrs:{details:t.fullscreendata}})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.blogArticleOptionModel,callback:function(e){t.blogArticleOptionModel=e},expression:"blogArticleOptionModel"}},[o("BlogArticleOption",{attrs:{selectedBlog:t.selectedBlog},on:{"clicked-selected-Option":t.selectedBlogArticleOption}})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.blogArticleDeleteModel,callback:function(e){t.blogArticleDeleteModel=e},expression:"blogArticleDeleteModel"}},[o("q-card",{staticClass:"roundedNewsFeed"},[o("div",{staticClass:"row items-center no-wrap",staticStyle:{"margin-bottom":"30px"}},[o("div",{staticClass:"col"},[o("q-card-section",{staticClass:"row items-center q-pb-none"},[o("div",{staticClass:"text-h6"},[t._v("Delete Blog")]),o("q-space"),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),o("q-card-section",{staticClass:"row items-center q-pb-none"},[o("p",{staticClass:"col-12"},[t._v("\n              Are you sure you want to delete this blog?\n            ")])]),o("div",{staticClass:"col-12 text-center"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-6 text-center"},[o("q-btn",{staticClass:"button default-button",staticStyle:{color:"#000000",width:"90%"},attrs:{label:"Cancel","no-caps":"",outline:"",color:"primary"},on:{click:function(e){return t.confirmationChoice("cancel")}}})],1),o("div",{staticClass:"col-6 text-center"},[o("q-btn",{staticClass:"button default-button",staticStyle:{width:"90%"},attrs:{color:"primary",label:"Confirm","no-caps":""},on:{click:function(e){return t.confirmationChoice("confirm")}}})],1)])])],1)])])],1)],1)},s=[],r=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("28a5"),o("9523")),a=o.n(r),l=o("2f62"),n=o("d41a"),c=o("b07d"),d=o("bd4c"),u=o("2a19");function g(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?g(Object(o),!0).forEach((function(e){a()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var f={name:"BlogArticle",created:function(){this.$root.$on("footerAddIconClick",this.showAddBlogPage),this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("onformatDateClick",this.formatDate),this.$root.$on("onExitFullscreen",this.closeFullScreen),window.addEventListener("scroll",this.playVideoOnScroll),this.$route.params.tab&&(this.tab=this.$route.params.tab)},beforeDestroy:function(){this.$root.$off("footerAddIconClick",this.showAddBlogPage),this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch),this.$root.$off("onformatDateClick",this.formatDate),this.$root.$off("onExitFullscreen",this.closeFullScreen),window.removeEventListener("scroll",this.playVideoOnScroll)},computed:p(p(p({},Object(l["c"])("blog",["blogs","publishedBlogs","submittedBlogs","draftBlogs"])),Object(l["c"])("config",["blobBaseUrl"])),Object(l["c"])("userprofile",["userDetails"])),components:{FullScreen:n["a"],BlogArticleOption:c["a"]},filters:{truncate:function(t,e,o){return null===t?"":(null===t||void 0===t?void 0:t.length)>e?t.substring(0,e)+o:t}},mounted:function(){var t,e;this.setHeaderData(!0,!1,"Sonuto","","","",!0,!0);var o="true"===(null===(t=this.$route)||void 0===t||null===(e=t.query)||void 0===e?void 0:e.isForVlog)||!1;this.fetchUserBlogs({id:this.userDetails.userprofile.id,isVlog:o})},data:function(){return{tab:"Published",fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:""},selectedBlog:null,blogArticleOptionModel:!1,blogArticleDeleteModel:!1}},methods:p(p(p({},Object(l["b"])("header",["setHeader"])),Object(l["b"])("blog",["fetchBlogs","storeContent","fetchUserBlogs","updateBlogStatus","deleteBlog","editBlog"])),{},{setHeaderData:function(t,e,o,i,s,r,a,l){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:i,rightIcon2:s,rightLinkText:r,notificationIcon:a,searchIcon:l})},formatDate:function(t){return d["a"].formatDate(t,"DD MMM")+" at "+d["a"].formatDate(t,"hh.mm A")},gotoSearch:function(){this.$router.push("/blog-search")},backButtonClick:function(){this.$router.push("dashboard")},goToCreateBlog:function(){this.$router.push("/create-blog")},goToReview:function(t){},goToBlogArticle:function(t){this.$router.push("/blog-article/"+t)},showAddBlogPage:function(){var t=this;this.storeContent({form:null}).then((function(){var e,o,i="true"===(null===(e=t.$route)||void 0===e||null===(o=e.query)||void 0===o?void 0:o.isForVlog)||!1;i?t.$router.push({path:"/create-post",query:{isForVlog:!0}}):t.$router.push("/create-post")}))},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen(),this.selectedBlog={};var t=document.getElementById("image-box");t.setAttribute("style","display:none;")}},getImageurl:function(t){var e=t.substring(t.lastIndexOf("/")+1),o=this.blobBaseUrl;return t=o+e,t},openBlogArticleOptionModel:function(t){this.selectedBlog=t,this.blogArticleOptionModel=!0},selectedBlogArticleOption:function(t){var e=this;switch(t){case"Edit":this.editBlog(this.selectedBlog.id).then((function(t){t.isForVlog?e.$router.push({path:"/create-post",query:{isForVlog:!0}}):e.$router.push("create-post")}));break;case"Submit":this.updateBlogStatus({id:this.selectedBlog.id,status:"Submitted"}).then((function(){u["a"].create({progress:!0,message:"Blog Submitted Successfully",type:"positive"}),e.selectedBlog=null,e.blogArticleOptionModel=!1}));break;case"Delete":this.blogArticleOptionModel=!1,this.blogArticleDeleteModel=!0;break}},confirmationChoice:function(t){var e=this;"confirm"===t?this.deleteBlog(parseInt(this.selectedBlog.id)).then((function(){e.blogArticleDeleteModel=!1,e.selectedBlog=null,u["a"].create({progress:!0,message:"Blog Deleted Successfully",type:"positive"})})):(this.blogArticleDeleteModel=!1,this.selectedBlog=null)},isImagePost:function(t){return"image"===t.split("/")[0]},playVideoOnScroll:function(){var t=!1,e=document.querySelectorAll(".video-player");e.forEach((function(e){var o=400,i=e.getBoundingClientRect().top;i>0&&i<o&&!t?(e.muted=!0,e.play(),t=!0):e.pause()}))}})},b=f,h=(o("0113"),o("a0ab"),o("2877")),m=o("9989"),v=o("f09f"),C=o("429b"),y=o("7460"),B=o("eb85"),q=o("adad"),P=o("823b"),k=o("068f"),w=o("ad56"),x=o("a370"),O=o("9c40"),A=o("24e8"),S=o("2c91"),D=o("7f67"),I=o("eebe"),$=o.n(I),_=Object(h["a"])(b,i,s,!1,null,"725a3df2",null);e["default"]=_.exports;$()(_,"components",{QPage:m["a"],QCard:v["a"],QTabs:C["a"],QTab:y["a"],QSeparator:B["a"],QTabPanels:q["a"],QTabPanel:P["a"],QImg:k["a"],QIntersection:w["a"],QCardSection:x["a"],QBtn:O["a"],QDialog:A["a"],QSpace:S["a"]}),$()(_,"directives",{ClosePopup:D["a"]})},af11:function(t,e,o){}}]);