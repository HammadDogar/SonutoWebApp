(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{"3b67":function(t,s,e){},ac8d:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("q-page",{staticClass:"flex-center"},[e("div",{staticClass:"main-container"},[e("div",{staticClass:"profile-edit-section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-form",{staticClass:"q-gutter-md",on:{submit:t.saveUser}},[e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  First\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:"","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"}]},on:{keyup:function(s){return t.validateSpace("firstname")}},model:{value:t.form.firstname,callback:function(s){t.$set(t.form,"firstname",s)},expression:"form.firstname"}})],1)])])]),e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  Last\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:"","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"}]},on:{keyup:function(s){return t.validateSpace("lastname")}},model:{value:t.form.lastname,callback:function(s){t.$set(t.form,"lastname",s)},expression:"form.lastname"}})],1)])])]),e("div",{staticClass:"row user-section"},[e("div",{staticClass:"col"},[e("span",{staticClass:"user-name"},[t._v("\n                  Password\n                ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"input-control",attrs:{borderless:"",type:t.isPwd?"password":"text","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"5px"},attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(s){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}})],1)])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col flex flex-center msginfo ",staticStyle:{"margin-top":"20px",width:"100%"}},[e("span",{staticClass:"user-name"},[t._v("\n                  To save these settings please enter your sonuto password\n                ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"40px",width:"100%"}},[e("q-btn",{staticClass:"signIn-button",attrs:{color:"primary",type:"submit",label:"Save & Continue",rounded:"","no-caps":""}})],1)])])],1)])])])])},a=[],r=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("f751"),e("9523")),n=e.n(r),o=e("2a19"),c=e("2f62");function l(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,i)}return e}function u(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?l(Object(e),!0).forEach((function(s){n()(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}var d={created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("headerRightIcon2Click",this.gotoSearch)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch)},computed:u({},Object(c["c"])("userprofile",["userprofileDetail","userDetails"])),data:function(){return{loading:!1,form:{firstname:"",lastname:"",password:""},isPwd:!0}},mounted:function(){this.setHeaderData(!1,!0,"Edit Name","","","",!0,!0),this.form=Object.assign({},this.userprofileDetail)},methods:u(u(u(u({},Object(c["b"])("header",["setHeader"])),Object(c["b"])("userprofile",["saveUserDetails","veirfyPassword","updateUserDetails"])),Object(c["b"])("privacysettings",["setPrivacySettings"])),{},{setHeaderData:function(t,s,e,i,a,r,n,o){this.setHeader({hamburgerIcon:t,backIcon:s,title:e,rightIcon1:i,rightIcon2:a,rightLinkText:r,notificationIcon:n,searchIcon:o})},backButtonClick:function(){this.$router.push("account-setting")},afterUpdateSuccess:function(){o["a"].create({progress:!0,message:"Account Settings Updated",type:"positive"}),this.backButtonClick()},saveUser:function(){var t=this;this.veirfyPassword({userName:this.userDetails.email,password:this.form.password}).then((function(s){s&&t.updateUserDetails({file:null,userDetail:t.form,afterSuccess:t.afterUpdateSuccess})}))},gotoSearch:function(){this.$router.push("search-result")},validateSpace:function(t){/^\s/.test(this.form[t])&&(this.form[t]="")}})},p=d,f=(e("f32d"),e("2877")),m=e("9989"),h=e("0378"),b=e("27f9"),v=e("0016"),g=e("9c40"),C=e("8572"),w=e("eebe"),y=e.n(w),x=Object(f["a"])(p,i,a,!1,null,"13b1c30b",null);s["default"]=x.exports;y()(x,"components",{QPage:m["a"],QForm:h["a"],QInput:b["a"],QIcon:v["a"],QBtn:g["a"],QField:C["a"]})},f32d:function(t,s,e){"use strict";var i=e("3b67"),a=e.n(i);a.a}}]);