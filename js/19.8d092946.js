(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"2a30":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex"},[a("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.recipesCategory,(function(t){return a("q-tab",{key:t.id,attrs:{"no-caps":"",name:t.Name,label:t.Name}})})),1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.recipesCategory,(function(e){return a("q-tab-panel",{key:e.id,staticStyle:{padding:"0px !important"},attrs:{name:e.Name}},t._l(t.publishedRecipes,(function(r,i){return a("q-intersection",{key:r.id,attrs:{transition:"scale",once:""}},[t.filterCategory(r,e.Name)?a("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[a("div",[null!==r.CoverPhoto&&t.isImagePost(r.CoverPhoto.mime)?a("q-img",{attrs:{src:t.getImageurl(r.CoverPhoto.url)},on:{click:function(e){return t.goToRecipe(r.id)}}}):null!==r.CoverPhoto&&!1===t.isImagePost(r.CoverPhoto.mime)?a("video",{staticClass:"video-player",attrs:{src:r.CoverPhoto.url+"#t=1.5"},on:{click:function(e){return t.goToRecipe(r.id)}}}):a("h2",{on:{click:function(e){return t.goToRecipe(r.id)}}},[t._v("No Cover Photo ")])],1),a("q-card-section",[a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title",on:{click:function(e){return t.goToRecipe(r.id)}}},[t._v(t._s(r.Title)+"\n                ")]),a("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                  "+t._s(t._f("truncate")(r.ShortDescription,50,"..."))+"\n                ")])])],1):t._e(),i===Math.floor(t.publishedRecipes.length/2)-1&&t.getPopularRecipes(e.Name).length>0?a("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v("Most Read")])]),a("div",{staticClass:"q-pa-md mostReadSection",staticStyle:{"padding-top":"0px !important"}},[a("div",{staticClass:"favorite-pic-section"},[a("q-scroll-area",{staticClass:"scroll",attrs:{horizontal:""}},[a("div",{staticClass:"row no-wrap item-section"},t._l(t.getPopularRecipes(e.Name),(function(e){return a("q-intersection",{key:e.id,staticClass:"item",attrs:{transition:"scale"}},[a("q-img",{staticClass:"blog-image",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(a){return t.goToRecipe(e.id)}}}),a("div",{staticClass:"BMiCal",on:{click:function(a){return t.goToRecipe(e.id)}}},[t._v(t._s(e.Title))])],1)})),1)])],1)])],1):t._e()],1)})),1)})),1)],1)],1),a("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[a("FullScreen",{attrs:{details:t.fullscreendata}})],1)])},i=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("28a5"),a("7514"),a("9523")),c=a.n(o),n=a("2f62"),s=a("d41a"),l=a("bd4c");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){c()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={name:"RecipesList",computed:d(d({},Object(n["c"])("recipe",["recipesCategory","recipes","publishedRecipes","popularRecipes"])),Object(n["c"])("config",["blobBaseUrl"])),created:function(){this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("onformatDateClick",this.formatDate),this.$root.$on("onExitFullscreen",this.closeFullScreen)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch),this.$root.$off("onformatDateClick",this.formatDate),this.$root.$off("onExitFullscreen",this.closeFullScreen)},components:{FullScreen:s["a"]},mounted:function(){this.setHeaderData(!1,!0,"Recipes","","","",!0,!0),this.fetchRecipesCategory(),this.fetchRecipes(),this.$route.params.category&&(this.tab=this.$route.params.category)},data:function(){return{tab:"Home",fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:""}}},filters:{truncate:function(t,e,a){return null==t&&(t=""),t.length>e?t.substring(0,e)+a:t}},methods:d(d(d({},Object(n["b"])("header",["setHeader"])),Object(n["b"])("recipe",["fetchRecipesCategory","fetchRecipes","fetchPopularRecipes"])),{},{setHeaderData:function(t,e,a,r,i,o,c,n){this.setHeader({hamburgerIcon:t,backIcon:e,title:a,rightIcon1:r,rightIcon2:i,rightLinkText:o,notificationIcon:c,searchIcon:n})},backButtonClick:function(){this.$router.push("/")},goToRecipe:function(t){this.$router.push({path:"/recipe",query:{id:t}})},getPopularRecipes:function(t){return this.fetchPopularRecipes(t)},formatDate:function(t){return l["a"].formatDate(t,"DD MMM")+" at "+l["a"].formatDate(t,"hh.mm A")},gotoSearch:function(){this.$router.push("recipe-search")},filterCategory:function(t,e){var a=t.recipe_categories.find((function(t){return t.Name===e}));return void 0!==a},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var t=document.getElementById("image-box");t.setAttribute("style","display:none;")}},getImageurl:function(t){var e=t.substring(t.lastIndexOf("/")+1),a=this.blobBaseUrl;return t=a+e,t},isImagePost:function(t){return"image"===t.split("/")[0]}})},p=f,h=(a("653f"),a("a5db"),a("2877")),m=a("9989"),b=a("f09f"),g=a("429b"),y=a("7460"),C=a("eb85"),v=a("adad"),k=a("823b"),P=a("ad56"),R=a("068f"),q=a("6ac0"),O=a("a370"),x=a("4983"),$=a("8572"),S=a("eebe"),I=a.n(S),_=Object(h["a"])(p,r,i,!1,null,"6fe4112e",null);e["default"]=_.exports;I()(_,"components",{QPage:m["a"],QCard:b["a"],QTabs:g["a"],QTab:y["a"],QSeparator:C["a"],QTabPanels:v["a"],QTabPanel:k["a"],QIntersection:P["a"],QImg:R["a"],QVideo:q["a"],QCardSection:O["a"],QScrollArea:x["a"],QField:$["a"]})},"653f":function(t,e,a){"use strict";var r=a("df0e"),i=a.n(r);i.a},a504:function(t,e,a){},a5db:function(t,e,a){"use strict";var r=a("a504"),i=a.n(r);i.a},df0e:function(t,e,a){}}]);