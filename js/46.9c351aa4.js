(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{"5d68":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex-center"},[s("div",{staticClass:"main-container"},[s("div",{staticClass:"profile-edit-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-form",{staticClass:"q-gutter-md",on:{submit:t.saveUser}},[s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  New Email\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{borderless:"","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.newemail,callback:function(e){t.$set(t.form,"newemail",e)},expression:"form.newemail"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col msginfo"},[s("span",{staticClass:"user-name"},[t._v("\n                  you will need to click the link inside your inbox to verify "),s("br"),t._v("your new email account.\n                ")])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Password\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{borderless:"",type:t.isPwd?"password":"text","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"5px"},attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col msginfo",staticStyle:{"margin-top":"20px",width:"100%"}},[s("span",{staticClass:"user-name"},[t._v("\n                  To save these settings please enter your sonuto password\n                ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"40px",width:"100%"}},[s("q-btn",{staticClass:"signIn-button",attrs:{color:"primary",type:"submit",label:"Save & Continue",rounded:"","no-caps":""}})],1)])])],1)])])])])},a=[],r=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("f751"),s("9523")),n=s.n(r),o=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("headerRightIcon2Click",this.gotoSearch)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch)},computed:l({},Object(o["c"])("userprofile",["userprofileDetail","userDetails"])),data:function(){return{loading:!1,form:{newemail:"",password:""},isPwd:!1}},mounted:function(){this.setHeaderData(!1,!0,"Edit Email","","","",!0,!0),this.form=Object.assign({},this.userprofileDetail)},methods:l(l(l(l({},Object(o["b"])("header",["setHeader"])),Object(o["b"])("userprofile",["saveUserDetails"])),Object(o["b"])("privacysettings",["setPrivacySettings"])),{},{setHeaderData:function(t,e,s,i,a,r,n,o){this.setHeader({hamburgerIcon:t,backIcon:e,title:s,rightIcon1:i,rightIcon2:a,rightLinkText:r,notificationIcon:n,searchIcon:o})},gotoSearch:function(){this.$router.push("search-result")},saveUser:function(){},backButtonClick:function(){this.$router.push("account-setting")}})},d=u,p=(s("7353"),s("2877")),f=s("9989"),h=s("0378"),b=s("27f9"),m=s("0016"),v=s("9c40"),w=s("8572"),g=s("eebe"),C=s.n(g),y=Object(p["a"])(d,i,a,!1,null,"d1fba3ca",null);e["default"]=y.exports;C()(y,"components",{QPage:f["a"],QForm:h["a"],QInput:b["a"],QIcon:m["a"],QBtn:v["a"],QField:w["a"]})},7353:function(t,e,s){"use strict";var i=s("d822"),a=s.n(i);a.a},d822:function(t,e,s){}}]);