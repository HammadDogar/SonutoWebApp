(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"277c":function(t,s,e){},"8bc0":function(t,s,e){},ac51:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"flex-center"},[e("div",{staticClass:"main-container"},[e("div",{staticClass:"profile-edit-section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-form",{staticClass:"q-gutter-md",on:{submit:t.saveUser}},[e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  Current Password\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:"",type:t.isPwd?"password":"text","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"5px"},attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(s){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.form.currentpassword,callback:function(s){t.$set(t.form,"currentpassword",s)},expression:"form.currentpassword"}})],1)])])]),e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  New Password\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:"",type:t.isnewPwd?"password":"text","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"},t.isValidPassword]},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"5px"},attrs:{name:t.isnewPwd?"visibility_off":"visibility"},on:{click:function(s){t.isnewPwd=!t.isnewPwd}}})]},proxy:!0}]),model:{value:t.form.newpassword,callback:function(s){t.$set(t.form,"newpassword",s)},expression:"form.newpassword"}})],1)])])]),e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  Confirm Password\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:"",type:t.isconPwd?"password":"text","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"},t.isValidPassword]},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"5px"},attrs:{name:t.isconPwd?"visibility_off":"visibility"},on:{click:function(s){t.isconPwd=!t.iisconPwd}}})]},proxy:!0}]),model:{value:t.form.confirmpassword,callback:function(s){t.$set(t.form,"confirmpassword",s)},expression:"form.confirmpassword"}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"40px",width:"100%"}},[e("q-btn",{staticClass:"signIn-button",attrs:{disabled:t.sendingRequest,color:"primary",type:"submit",label:"Save & Continue",rounded:"","no-caps":""}})],1)])])],1)])])])])},r=[],n=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("f751"),e("9523")),a=e.n(n),o=e("2f62"),c=e("2a19");function d(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?d(Object(e),!0).forEach((function(s){a()(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var u={created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("headerRightIcon2Click",this.gotoSearch)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch)},computed:l({},Object(o["c"])("userprofile",["userprofileDetail","userDetails"])),data:function(){return{loading:!1,form:{currentpassword:"",newpassword:"",confirmpassword:""},isPwd:!1,isconPwd:!1,isnewPwd:!1,sendingRequest:!1}},mounted:function(){this.setHeaderData(!1,!0,"Change Password","","","",!0,!0),this.form=Object.assign({},this.userprofileDetail)},methods:l(l(l(l({},Object(o["b"])("header",["setHeader"])),Object(o["b"])("userprofile",["saveUserDetails","sendForgetPasswordOtp","veirfyPassword","updatePassword","logout"])),Object(o["b"])("privacysettings",["setPrivacySettings"])),{},{setHeaderData:function(t,s,e,i,r,n,a,o){this.setHeader({hamburgerIcon:t,backIcon:s,title:e,rightIcon1:i,rightIcon2:r,rightLinkText:n,notificationIcon:a,searchIcon:o})},isValidPassword:function(t){var s=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;return s.test(t)||"Your password must be 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"},saveUser:function(){var t=this;this.sendingRequest=!0;var s=this.isValidPassword(this.form.newpassword);if(!s)return this.sendingRequest=!1,!1;this.form.currentpassword!==this.form.newpassword?this.form.newpassword===this.form.confirmpassword?this.updatePassword({email:this.userDetails.email,currentPassword:this.form.currentpassword,newPassword:this.form.newpassword}).then((function(s){s.data?t.logout("/#/login"):c["a"].create({progress:!0,message:s.message,type:"negative"}),t.sendingRequest=!1})):(c["a"].create({progress:!0,message:"Confirmation password must match",type:"negative"}),this.sendingRequest=!1):(c["a"].create({progress:!0,message:"Current and New password should not be same",type:"negative"}),this.sendingRequest=!1)},backButtonClick:function(){this.$router.push("account-setting")},gotoSearch:function(){this.$router.push("search-result")}})},p=u,f=(e("bde2"),e("d440"),e("2877")),w=e("9989"),h=e("0378"),m=e("27f9"),g=e("0016"),b=e("9c40"),v=e("8572"),C=e("eebe"),y=e.n(C),P=Object(f["a"])(p,i,r,!1,null,"6b747604",null);s["default"]=P.exports;y()(P,"components",{QPage:w["a"],QForm:h["a"],QInput:m["a"],QIcon:g["a"],QBtn:b["a"],QField:v["a"]})},bde2:function(t,s,e){"use strict";var i=e("8bc0"),r=e.n(i);r.a},d440:function(t,s,e){"use strict";var i=e("277c"),r=e.n(i);r.a}}]);