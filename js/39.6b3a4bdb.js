(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"75cd":function(t,e,n){},"937f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex flex-center background"},[n("div",{staticClass:"main-div"},[n("p",{staticClass:"p-div"},[t._v("What's your country or region?")]),n("q-select",{staticClass:"input-control",attrs:{options:t.countries,"emit-value":"","map-options":""},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),n("div",{staticClass:"row",staticStyle:{width:"100%"}},[n("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"100px"}},[n("q-btn",{staticClass:"signIn-button",attrs:{label:"Complete Profile",rounded:"","no-caps":""},on:{click:function(e){return t.save()}}})],1)])])},o=[],c=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),i=n.n(c),s=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"Country",data:function(){return{country:""}},created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick)},computed:u(u({},Object(s["c"])("country",["countries"])),Object(s["c"])("userprofile",["userprofileDetail"])),mounted:function(){this.setHeaderData(!1,!0,"","","","",!1,!1),this.getCountry()},methods:u(u(u(u({},Object(s["b"])("country",["fetchCountries"])),Object(s["b"])("userprofile",["updateUserDetails"])),Object(s["b"])("header",["setHeader"])),{},{setHeaderData:function(t,e,n,r,o,c,i,s){this.setHeader({hamburgerIcon:t,backIcon:e,title:n,rightIcon1:r,rightIcon2:o,rightLinkText:c,notificationIconn:i,searchIcon:s})},getCountry:function(){this.fetchCountries()},backButtonClick:function(){this.$router.push("/index")},save:function(){var t=this,e=u({},this.userprofileDetail);e.country=this.country,this.updateUserDetails({file:null,userDetail:e}).then((function(e){t.$router.push("/index")}))}})},f=l,p=(n("9440"),n("2877")),b=n("9989"),d=n("ddd8"),h=n("9c40"),y=n("eebe"),O=n.n(y),g=Object(p["a"])(f,r,o,!1,null,"49b8e363",null);e["default"]=g.exports;O()(g,"components",{QPage:b["a"],QSelect:d["a"],QBtn:h["a"]})},9440:function(t,e,n){"use strict";var r=n("75cd"),o=n.n(r);o.a}}]);