(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{"2bf3":function(t,e,s){"use strict";var o=s("5c59"),i=s.n(o);i.a},"5c59":function(t,e,s){},ca01:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex flex-center page"},[s("div",{staticClass:"main-container"},[s("div",{staticClass:"profile-edit-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-form",{staticClass:"q-gutter-md",on:{submit:t.save}},[s("div",{staticClass:"col-12 input-label"},[t._v("\n              About Me\n            ")]),s("div",{staticClass:"col-12"},[s("q-input",{staticClass:"aboutme",attrs:{borderless:"",type:"textarea",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.longdescription,callback:function(e){t.$set(t.form,"longdescription",e)},expression:"form.longdescription"}})],1),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  School/College/University\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{borderless:"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.school,callback:function(e){t.$set(t.form,"school",e)},expression:"form.school"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Employer\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{borderless:"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.employer,callback:function(e){t.$set(t.form,"employer",e)},expression:"form.employer"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                  Occupation\n                ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{borderless:"",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.occupation,callback:function(e){t.$set(t.form,"occupation",e)},expression:"form.occupation"}})],1)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"60px",width:"100%"}},[s("q-btn",{staticClass:"signIn-button",attrs:{color:"primary",type:"submit",label:"Save & Continue",rounded:"","no-caps":""}})],1)])])],1)])])])])},i=[],r=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("f751"),s("9523")),n=s.n(r),a=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,o)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){n()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick)},computed:l({},Object(a["c"])("userprofile",["userprofileDetail"])),data:function(){return{loading:!1,form:{School:"",Employer:"",Occupation:"",ShortDescription:"",LongDescription:""}}},mounted:function(){this.setHeaderData(!1,!0,"Personal Info","","","",!1,!1),this.form=Object.assign({},this.userprofileDetail)},methods:l(l(l({},Object(a["b"])("header",["setHeader"])),Object(a["b"])("userprofile",["updateUserDetails"])),{},{setHeaderData:function(t,e,s,o,i,r,n,a){this.setHeader({hamburgerIcon:t,backIcon:e,title:s,rightIcon1:o,rightIcon2:i,rightLinkText:r,notificationIcon:n,searchIcon:a})},save:function(){var t=this;this.updateUserDetails({userDetail:this.form}).then((function(){t.$router.push("contact-info")}))},backButtonClick:function(){this.$router.push("basic-info")}})},f=u,p=(s("2bf3"),s("2877")),d=s("9989"),b=s("0378"),m=s("27f9"),v=s("9c40"),h=s("8572"),C=s("eebe"),g=s.n(C),O=Object(p["a"])(f,o,i,!1,null,"754b8e2d",null);e["default"]=O.exports;g()(O,"components",{QPage:d["a"],QForm:b["a"],QInput:m["a"],QBtn:v["a"],QField:h["a"]})}}]);