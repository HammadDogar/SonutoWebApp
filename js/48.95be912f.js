(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"4b86":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex"},[a("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"Published",label:"Published"}}),a("q-tab",{attrs:{name:"Pending",label:"Pending"}}),a("q-tab",{attrs:{name:"InActive",label:"InActive"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"Published"}},t._l(t.blogs,(function(e){return a("div",{key:e.id},[a("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[a("q-img",{attrs:{src:e.CoverPhoto.url},on:{click:function(a){return t.goToBlog(e.id)}}}),a("q-card-section",[a("div",{staticClass:"text-h6 q-mt-sm q-mb-xs blog-title",on:{click:function(a){return t.goToBlog(e.id)}}},[t._v(t._s(t.index)+t._s(e.Title)+"\n                ")]),a("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                  "+t._s(t._f("truncate")(e.ShortDescription,50,"..."))+"\n                ")])])],1)],1)})),0),a("q-tab-panel",{attrs:{name:"Pending"}},t._l(t.blogs,(function(e){return a("div",{key:e.id},[a("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[a("q-img",{attrs:{src:e.CoverPhoto.url},on:{click:function(a){return t.goToBlog(e.id)}}}),a("q-btn",{staticClass:"button review-button",attrs:{color:"primary",label:"For Review",rounded:"","no-caps":""}}),a("q-card-section",[a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title",on:{click:function(a){return t.goToBlog(e.id)}}},[t._v(t._s(t.index)+t._s(e.Title)+"\n                ")]),a("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                  "+t._s(t._f("truncate")(e.ShortDescription,50,"..."))+"\n                ")])])],1)],1)})),0),a("q-tab-panel",{attrs:{name:"InActive"}},t._l(t.blogs,(function(e){return a("div",{key:e.id},[a("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:""}},[a("q-img",{attrs:{src:e.CoverPhoto.url},on:{click:function(a){return t.goToBlog(e.id)}}}),a("q-card-section",[a("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title",on:{click:function(a){return t.goToBlog(e.id)}}},[t._v(t._s(t.index)+t._s(e.Title)+"\n                ")]),a("div",{staticClass:"text-caption text-grey blog-description"},[t._v("\n                  "+t._s(t._f("truncate")(e.ShortDescription,50,"..."))+"\n                ")])])],1)],1)})),0)],1)],1)],1),a("q-page-sticky",{attrs:{position:"bottom",offset:[18,18]}},[a("q-btn",{staticClass:"button sticky-button",attrs:{color:"primary",label:"Create a News",rounded:"","no-caps":""},on:{click:t.goToCreateNews}})],1)],1)},o=[],r=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("9523")),i=a.n(r),s=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){i()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"News",created:function(){this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("headerBackButtonClick",this.backButtonClick)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch)},computed:l(l({},Object(s["c"])("userprofile",["userDetails"])),Object(s["c"])("blog",["blogs"])),filters:{truncate:function(t,e,a){return t.length>e?t.substring(0,e)+a:t}},mounted:function(){this.setHeaderData(!1,!0,"News","","","",!0,!0),this.fetchBlogs()},data:function(){return{tab:"Published"}},methods:l(l(l({},Object(s["b"])("header",["setHeader"])),Object(s["b"])("blog",["fetchBlogs"])),{},{setHeaderData:function(t,e,a,n,o,r,i,s){this.setHeader({hamburgerIcon:t,backIcon:e,title:a,rightIcon1:n,rightIcon2:o,rightLinkText:r,notificationIcon:i,searchIcon:s})},gotoSearch:function(){this.$router.push("blog-search")},backButtonClick:function(){this.$router.push("publish")},goToCreateNews:function(){this.$router.push("create-news")}})},b=u,d=(a("a6dd"),a("2877")),g=a("9989"),f=a("f09f"),h=a("429b"),p=a("7460"),m=a("eb85"),v=a("adad"),y=a("823b"),k=a("068f"),q=a("a370"),C=a("9c40"),w=a("de5e"),_=a("eebe"),O=a.n(_),P=Object(d["a"])(b,n,o,!1,null,"6a64a593",null);e["default"]=P.exports;O()(P,"components",{QPage:g["a"],QCard:f["a"],QTabs:h["a"],QTab:p["a"],QSeparator:m["a"],QTabPanels:v["a"],QTabPanel:y["a"],QImg:k["a"],QCardSection:q["a"],QBtn:C["a"],QPageSticky:w["a"]})},a6dd:function(t,e,a){"use strict";var n=a("e761"),o=a.n(n);o.a},e761:function(t,e,a){}}]);