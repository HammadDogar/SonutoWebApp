(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{1036:function(t,e,o){},"10bb":function(t,e,o){},ab1b:function(t,e,o){"use strict";var a=o("10bb"),r=o.n(a);r.a},df78:function(t,e,o){"use strict";var a=o("1036"),r=o.n(a);r.a},e85b:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex"},[o("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[o("q-card",[o("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.blogCategory,(function(t){return o("q-tab",{key:t.id,attrs:{"no-caps":"",name:t.Name,label:t.Name}})})),1),o("q-separator"),o("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.blogCategory,(function(e){return o("q-tab-panel",{key:e.id,staticStyle:{padding:"0px !important"},attrs:{name:e.Name}},t._l(t.publishedBlogs,(function(a,r){return o("q-intersection",{key:a.id,attrs:{transition:"scale",once:""}},[t.filterCategory(a,e.Name)?o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[o("div",[null!==a.CoverPhoto&&t.isImagePost(a.CoverPhoto.mime)?o("q-img",{attrs:{src:t.getImageurl(a.CoverPhoto.url)},on:{click:function(e){return t.goToBlog(a.id)}}}):null!==a.CoverPhoto&&!1===t.isImagePost(a.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:a.CoverPhoto.url+"#t=1.5"},on:{click:function(e){return t.goToBlog(a.id)}}}):o("h2",{on:{click:function(e){return t.goToBlog(a.id)}}},[t._v("No Cover Photo ")])],1),o("q-card-section",[o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title",on:{click:function(e){return t.goToBlog(a.id)}}},[t._v(t._s(a.Title))]),o("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                  "+t._s(t._f("truncate")(a.ShortDescription,50,"..."))+"\n                ")])])],1):t._e(),r===Math.floor(t.publishedBlogs.length/2)-1&&t.getPopularBlogs(e.Name).length>0?o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:"",bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v("Most Read")])]),o("div",{staticClass:"q-pa-md mostReadSection",staticStyle:{"padding-top":"0px !important"}},[o("div",{staticClass:"favorite-pic-section"},[o("q-scroll-area",{staticClass:"scroll",attrs:{horizontal:""}},[o("div",{staticClass:"row no-wrap item-section"},t._l(t.getPopularBlogs(e.Name),(function(e){return o("q-intersection",{key:e.id,staticClass:"item",attrs:{transition:"scale"}},[o("q-img",{staticClass:"blog-image",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlog(e.id)}}}),o("div",{staticClass:"BMiCal",on:{click:function(o){return t.goToBlog(e.id)}}},[t._v(t._s(e.Title))])],1)})),1)])],1)])],1):t._e()],1)})),1)})),1)],1)],1),o("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[o("FullScreen",{attrs:{details:t.fullscreendata}})],1)])},r=[],i=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("28a5"),o("7514"),o("9523")),n=o.n(i),s=o("2f62"),c=o("d41a"),l=o("bd4c");function u(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function d(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?u(Object(o),!0).forEach((function(e){n()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var g={name:"Home",computed:d(d({},Object(s["c"])("blog",["blogCategory","blogs","publishedBlogs","popularBlogs"])),Object(s["c"])("config",["blobBaseUrl"])),created:function(){this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("onformatDateClick",this.formatDate),this.$root.$on("onExitFullscreen",this.closeFullScreen)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch),this.$root.$off("onformatDateClick",this.formatDate),this.$root.$off("onExitFullscreen",this.closeFullScreen),this.setFooterData(!1,!0)},components:{FullScreen:c["a"]},mounted:function(){this.setHeaderData(!1,!0,"Blogs","","","",!0,!0),this.setFooterData(!1,!1),this.fetchBlogCategory(),this.fetchBlogs(!1),this.$route.params.category&&(this.tab=this.$route.params.category)},data:function(){return{tab:"Home",fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:""}}},filters:{truncate:function(t,e,o){return null==t&&(t=""),t.length>e?t.substring(0,e)+o:t}},methods:d(d(d(d({},Object(s["b"])("header",["setHeader"])),Object(s["b"])("blog",["fetchBlogCategory","fetchBlogs","fetchPopularBlogs"])),Object(s["b"])("footer",["setFooter"])),{},{setHeaderData:function(t,e,o,a,r,i,n,s){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:a,rightIcon2:r,rightLinkText:i,notificationIcon:n,searchIcon:s})},backButtonClick:function(){this.$router.push("/")},goToBlog:function(t){this.$router.push({path:"/blog",query:{id:t}})},getPopularBlogs:function(t){return this.fetchPopularBlogs(t)},formatDate:function(t){return l["a"].formatDate(t,"DD MMM")+" at "+l["a"].formatDate(t,"hh.mm A")},gotoSearch:function(){this.$router.push("blog-search")},filterCategory:function(t,e){var o=t.blog_categories.find((function(t){return t.Name===e}));return void 0!==o},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var t=document.getElementById("image-box");t.setAttribute("style","display:none;")}},getImageurl:function(t){var e=t.substring(t.lastIndexOf("/")+1),o=this.blobBaseUrl;return t=o+e,t},isImagePost:function(t){return"image"===t.split("/")[0]},setFooterData:function(t,e){this.setFooter({commentSection:t,addButton:e})}})},f=g,b=(o("df78"),o("ab1b"),o("2877")),h=o("9989"),m=o("f09f"),p=o("429b"),y=o("7460"),C=o("eb85"),v=o("adad"),k=o("823b"),B=o("ad56"),P=o("068f"),O=o("6ac0"),q=o("a370"),x=o("4983"),$=o("8572"),S=o("eebe"),D=o.n(S),I=Object(b["a"])(f,a,r,!1,null,"9e7c7c48",null);e["default"]=I.exports;D()(I,"components",{QPage:h["a"],QCard:m["a"],QTabs:p["a"],QTab:y["a"],QSeparator:C["a"],QTabPanels:v["a"],QTabPanel:k["a"],QIntersection:B["a"],QImg:P["a"],QVideo:O["a"],QCardSection:q["a"],QScrollArea:x["a"],QField:$["a"]})}}]);