(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{"466d":function(t,e,s){},"4a82":function(t,e,s){"use strict";var i=s("466d"),a=s.n(i);a.a},"95cf":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex-center"},[s("div",{staticClass:"main-container"},[s("div",{staticClass:"profile-edit-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-form",{staticClass:"q-gutter-md",on:{submit:t.saveUser}},[s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Choose Language\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-select",{staticClass:"input-control",staticStyle:{"padding-left":"5px"},attrs:{borderless:"",options:t.language,"emit-value":"","map-options":"",rules:[function(t){return!!t||"Field is required"}],"input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"}},model:{value:t.form.language,callback:function(e){t.$set(t.form,"language",e)},expression:"form.language"}})],1)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"40px",width:"100%"}},[s("q-btn",{staticClass:"signIn-button",attrs:{color:"primary",type:"submit",label:"Save & Continue",rounded:"","no-caps":""}})],1)])])],1)])])])])},a=[],r=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("f751"),s("9523")),n=s.n(r),o=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("headerRightIcon2Click",this.gotoSearch)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch)},computed:l({},Object(o["c"])("userprofile",["userprofileDetail","userDetails"])),data:function(){return{loading:!1,language:["English","French"],form:{language:""}}},mounted:function(){this.setHeaderData(!1,!0,"Change Language","","","",!0,!0),this.form=Object.assign({},this.userprofileDetail)},methods:l(l(l(l({},Object(o["b"])("header",["setHeader"])),Object(o["b"])("userprofile",["saveUserDetails"])),Object(o["b"])("privacysettings",["setPrivacySettings"])),{},{setHeaderData:function(t,e,s,i,a,r,n,o){this.setHeader({hamburgerIcon:t,backIcon:e,title:s,rightIcon1:i,rightIcon2:a,rightLinkText:r,notificationIcon:n,searchIcon:o})},saveUser:function(){var t=this;this.form.user=this.userDetails.id,this.saveUserDetails(this.form).then((function(e){t.setPrivacySettings(e.id),t.$router.push("personal-info")}))},backButtonClick:function(){this.$router.push("account-setting")},gotoSearch:function(){this.$router.push("search-result")}})},f=u,d=(s("4a82"),s("2877")),h=s("9989"),p=s("0378"),g=s("ddd8"),b=s("9c40"),m=s("8572"),v=s("eebe"),C=s.n(v),O=Object(d["a"])(f,i,a,!1,null,"0d26b558",null);e["default"]=O.exports;C()(O,"components",{QPage:h["a"],QForm:p["a"],QSelect:g["a"],QBtn:b["a"],QField:m["a"]})}}]);