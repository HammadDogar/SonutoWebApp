(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{"6d51":function(t,s,e){},"8f6c":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"flex flex-center page"},[e("div",{staticClass:"main-container"},[e("div",{staticClass:"profile-edit-section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-form",{staticClass:"q-gutter-md",on:{submit:t.save}},[e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  Telephone\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:"",mask:"(###) ### - ####","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.phone,callback:function(s){t.$set(t.form,"phone",s)},expression:"form.phone"}})],1)])])]),e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  Email\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:"",disable:""},model:{value:t.form.Email,callback:function(s){t.$set(t.form,"Email",s)},expression:"form.Email"}})],1)])])]),e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  Skype Name\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:""},model:{value:t.form.SkypeName,callback:function(s){t.$set(t.form,"SkypeName",s)},expression:"form.SkypeName"}})],1)])])]),e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  Twitter\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:""},model:{value:t.form.Twitter,callback:function(s){t.$set(t.form,"Twitter",s)},expression:"form.Twitter"}})],1)])])]),e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  Facebook\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:""},model:{value:t.form.Facebook,callback:function(s){t.$set(t.form,"Facebook",s)},expression:"form.Facebook"}})],1)])])]),e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  LinkedIn\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:""},model:{value:t.form.LinkedIn,callback:function(s){t.$set(t.form,"LinkedIn",s)},expression:"form.LinkedIn"}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"40px",width:"100%"}},[e("q-btn",{staticClass:"signIn-button",attrs:{color:"primary",type:"submit",label:"Save & Continue",rounded:"","no-caps":""}})],1)])])],1)])])])])},i=[],o=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("f751"),e("9523")),n=e.n(o),r=e("2f62");function c(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function l(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?c(Object(e),!0).forEach((function(s){n()(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var u={created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick)},computed:l({},Object(r["c"])("userprofile",["userprofileDetail","userDetails"])),data:function(){return{loading:!1,form:{Phone:"",Email:"",Skype:"",Twitter:"",Facebook:"",LinkedIn:""}}},mounted:function(){this.setHeaderData(!1,!0,"Contact","","","",!1,!1),this.form=Object.assign({},this.userprofileDetail),this.form.Email=this.userDetails.email},methods:l(l(l({},Object(r["b"])("header",["setHeader"])),Object(r["b"])("userprofile",["updateUserDetails"])),{},{setHeaderData:function(t,s,e,a,i,o,n,r){this.setHeader({hamburgerIcon:t,backIcon:s,title:e,rightIcon1:a,rightIcon2:i,rightLinkText:o,notificationIconn:n,searchIcon:r})},save:function(){var t=this;this.updateUserDetails({userDetail:this.form}).then((function(){t.$router.push("/index")}))},backButtonClick:function(){this.$router.push("personal-info")}})},d=u,p=(e("9e9b"),e("2877")),f=e("9989"),m=e("0378"),b=e("27f9"),v=e("9c40"),C=e("8572"),h=e("eebe"),k=e.n(h),w=Object(p["a"])(d,a,i,!1,null,"3682ca52",null);s["default"]=w.exports;k()(w,"components",{QPage:f["a"],QForm:m["a"],QInput:b["a"],QBtn:v["a"],QField:C["a"]})},"9e9b":function(t,s,e){"use strict";var a=e("6d51"),i=e.n(a);i.a}}]);