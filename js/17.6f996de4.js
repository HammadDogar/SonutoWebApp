(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"0131":function(t,e,o){},"764f":function(t,e,o){"use strict";var n=o("ccc9"),i=o.n(n);i.a},"77ab":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex"},[o("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[o("q-card",[o("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.blogCategory,(function(t){return o("q-tab",{key:t.id,attrs:{"no-caps":"",name:t.Name,label:t.Name}})})),1),o("q-separator"),o("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.blogCategory,(function(e){return o("q-tab-panel",{key:e.id,staticStyle:{padding:"0px !important"},attrs:{name:e.Name}},t._l(t.publishedBlogs,(function(n){return o("div",{directives:[{name:"intersection",rawName:"v-intersection",value:t.onIntersection,expression:"onIntersection"}],key:n.id,staticClass:"vlog-div",attrs:{transition:"scale"}},[t.filterCategory(n,e.Name)?o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[o("div",[null!==n.CoverPhoto&&!1===t.isImagePost(n.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:n.CoverPhoto.url,id:n.id,controls:""},on:{click:function(e){return t.goToBlog(n.id)}}}):o("h2",{on:{click:function(e){return t.goToBlog(n.id)}}},[t._v("No Video ")])]),o("q-card-section",[o("div",{staticClass:"flex flex-center justify-between"},[o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title",on:{click:function(e){return t.goToBlog(n.id)}}},[t._v(t._s(n.Title)+"\n                  ")]),n.userprofile&&parseInt(n.userprofile.id)===parseInt(t.userDetails.userprofile.id)?o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(e){return t.openBlogVlogOptionModel(n)}}}):t._e()],1),n.ShortDescription?o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                  "+t._s(t._f("truncate")(n.ShortDescription,50,"..."))+"\n                ")]):t._e(),o("div",{staticClass:"text-caption text-grey blog-description",staticStyle:{"padding-top":"8px"}},[t._v("\n                  "+t._s(n.blog_comments.length)+" Comments\n                ")])])],1):t._e()],1)})),0)})),1)],1)],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.postOptionModel,callback:function(e){t.postOptionModel=e},expression:"postOptionModel"}},[o("BlogVlogOption",{attrs:{isMyProfilePost:t.isMyPost},on:{"clicked-selected-Option":t.clickedSelectedOptionModal}})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.postWarningModal,callback:function(e){t.postWarningModal=e},expression:"postWarningModal"}},[o("DeletePostWarning",{attrs:{postType:"Vlog"},on:{"delete-selected-option":t.deleteSelectedOption}})],1)],1)},i=[],a=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("7514"),o("28a5"),o("9523")),r=o.n(a),s=o("2b0e"),l=o("bd4c"),c=o("2a19"),d=o("2f62"),u=o("ed09"),p=o("f2d8"),g=o("23cc");function f(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function b(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?f(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}s["a"].use(u["a"]);var h={name:"VlogList",created:function(){this.$root.$on("footerAddIconClick",this.showAddVlogPage),this.$root.$on("headerBackButtonClick",this.backButtonClick),window.addEventListener("scroll",this.playVideoOnScroll)},beforeDestroy:function(){this.$root.$off("footerAddIconClick",this.showAddVlogPage),this.$root.$off("headerBackButtonClick",this.backButtonClick)},computed:b(b(b({},Object(d["c"])("blog",["blogCategory","blogs","publishedBlogs","popularBlogs"])),Object(d["c"])("config",["blobBaseUrl"])),Object(d["c"])("userprofile",["userDetails","userprofileDetail"])),data:function(){return{inView:Object(u["b"])(Array.apply(null,Array(3)).map((function(t){return!0}))),selectedBlog:null,isMyPost:!1,postOptionModel:!1,postWarningModal:!1,tab:"Home"}},watch:{publishedBlogs:function(){this.inView=Object(u["b"])(Array.apply(null,Array(this.publishedBlogs.length)).map((function(t){return!1}))),this.playVideoOnScroll()}},mounted:function(){this.setHeaderData(!1,!0,"Vlogs","","","",!0,!0),this.fetchBlogs(!0),this.fetchBlogCategory(),this.$route.params.category&&(this.tab=this.$route.params.category)},methods:b(b(b({},Object(d["b"])("header",["setHeader"])),Object(d["b"])("blog",["fetchBlogs","storeContent","deleteBlog","fetchBlogCategory"])),{},{setHeaderData:function(t,e,o,n,i,a,r,s){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:n,rightIcon2:i,rightLinkText:a,notificationIcon:r,searchIcon:s})},backButtonClick:function(){this.$router.push("/")},goToBlog:function(t){this.$router.push({path:"/blog",query:{id:t}})},formatDate:function(t){return l["a"].formatDate(t,"DD MMM")+" at "+l["a"].formatDate(t,"hh.mm A")},gotoSearch:function(){this.$router.push("blog-search")},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var t=document.getElementById("image-box");t.setAttribute("style","display:none;")}},getImageurl:function(t){var e=t.substring(t.lastIndexOf("/")+1);e="small_"+e;var o=this.blobBaseUrl;return t=o+e,t},isImagePost:function(t){return"image"===t.split("/")[0]},onIntersection:function(t){},playPauseVideo:function(){var t=document.querySelectorAll(".video-player");t.forEach((function(t){t.muted=!0;var e=t.play();void 0!==e&&e.then((function(e){var o=new IntersectionObserver((function(e){e.forEach((function(e){console.log("intersectionRatio",e.intersectionRatio,t.id),e.intersectionRatio<1&&!t.paused?t.pause():1===e.intersectionRatio&&t.paused&&t.play()}))}),{threshold:1});o.observe(t)}))}))},playVideoOnScroll:function(){var t=!1,e=document.querySelectorAll(".video-player");e.forEach((function(e){var o=400,n=e.getBoundingClientRect().top;n>0&&n<o&&!t?(e.muted=!0,e.play(),t=!0):e.pause()}))},showAddVlogPage:function(){var t=this;this.storeContent({form:null}).then((function(){t.$router.push({path:"/create-post",query:{isForVlog:!0}})}))},openBlogVlogOptionModel:function(t){this.selectedBlog=t,parseInt(t.userprofile.id)===parseInt(this.userDetails.userprofile.id)?this.isMyPost=!0:this.isMyPost=!1,this.postOptionModel=!0},clickedSelectedOptionModal:function(t){switch(this.postOptionModel=!1,t){case"delete":this.postWarningModal=!0;break}},deleteSelectedOption:function(t){"cancel"===t?(this.isMyPost=!1,this.postWarningModal=!1):(this.deleteBlog(parseInt(this.selectedBlog.id)).then((function(){c["a"].create({progress:!0,message:"Vlog Deleted Successfully",type:"positive"})})),this.isMyPost=!1,this.postWarningModal=!1)},filterCategory:function(t,e){var o=t.blog_categories.find((function(t){return t.Name===e}));return void 0!==o}}),components:{BlogVlogOption:p["a"],DeletePostWarning:g["a"]}},y=h,m=(o("764f"),o("83c5"),o("2877")),v=o("9989"),O=o("f09f"),B=o("429b"),C=o("7460"),k=o("eb85"),P=o("adad"),w=o("823b"),M=o("068f"),I=o("a370"),x=o("9c40"),D=o("24e8"),S=o("8572"),j=o("9748"),q=o("eebe"),V=o.n(q),_=Object(m["a"])(y,n,i,!1,null,"6290fbfa",null);e["default"]=_.exports;V()(_,"components",{QPage:v["a"],QCard:O["a"],QTabs:B["a"],QTab:C["a"],QSeparator:k["a"],QTabPanels:P["a"],QTabPanel:w["a"],QImg:M["a"],QCardSection:I["a"],QBtn:x["a"],QDialog:D["a"],QField:S["a"]}),V()(_,"directives",{Intersection:j["a"]})},"83c5":function(t,e,o){"use strict";var n=o("0131"),i=o.n(n);i.a},ccc9:function(t,e,o){}}]);