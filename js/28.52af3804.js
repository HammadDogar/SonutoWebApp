(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"6aaa":function(t,e,s){},db45:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex-center"},[s("div",{staticClass:"main-container"},[s("q-card",{attrs:{flat:"",bordered:""}},[s("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab",{attrs:{name:"GeneralInfo",label:"General Info","no-caps":""}}),s("q-tab",{attrs:{name:"AccountInfo",label:"Account Info","no-caps":""}}),s("q-tab",{attrs:{name:"Interests",label:"Interests","no-caps":""}})],1)],1),s("q-separator"),s("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("q-tab-panel",{attrs:{name:"GeneralInfo"}},[s("div",{staticClass:"profile-edit-section"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-form",{staticClass:"q-gutter-md",on:{submit:t.save}},[s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                      Gender\n                    ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-select",{staticClass:"input-control",staticStyle:{"padding-left":"5px"},attrs:{options:t.genders,"emit-value":"","map-options":"",rules:[function(t){return!!t||"Field is required"}],"input-style":{height:"46px",padding:"0px 5px"}},model:{value:t.form.gender,callback:function(e){t.$set(t.form,"gender",e)},expression:"form.gender"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                      Date of Birth\n                    ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{type:"date","input-style":{height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.dob,callback:function(e){t.$set(t.form,"dob",e)},expression:"form.dob"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                      Country\n                    ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-select",{staticClass:"input-control",staticStyle:{"padding-left":"5px"},attrs:{options:t.countries,"emit-value":"","map-options":"","input-style":{height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                      Home Town\n                    ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{"input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.hometown,callback:function(e){t.$set(t.form,"hometown",e)},expression:"form.hometown"}})],1)])])]),s("div",{staticClass:"row user-section"},[s("div",{staticClass:"col"},[s("span",{staticClass:"user-name"},[t._v("\n                      Occupation\n                    ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("q-input",{staticClass:"input-control",attrs:{rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.occupation,callback:function(e){t.$set(t.form,"occupation",e)},expression:"form.occupation"}})],1)])])]),s("div",{staticClass:"col-12 input-label"},[t._v("\n                  About Me\n                ")]),s("div",{staticClass:"col-12"},[s("q-input",{staticClass:"aboutme",attrs:{type:"textarea",rules:[function(t){return!!t||"Field is required"}]},model:{value:t.form.longdescription,callback:function(e){t.$set(t.form,"longdescription",e)},expression:"form.longdescription"}})],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col flex flex-center more-info-item",staticStyle:{"margin-top":"40px",width:"100%"}},[s("q-btn",{staticClass:"signIn-button",attrs:{color:"primary",type:"submit",label:"Save & Continue",rounded:"","no-caps":""}})],1)])])],1)])])]),s("q-tab-panel",{attrs:{name:"AccountInfo"}},[s("q-card",{staticClass:"card-sec",attrs:{flat:"",bordered:""}},[s("div",[s("span",{staticClass:"input-label float-left basics-header"},[t._v("Name")]),s("q-btn",{staticClass:"float-right",attrs:{size:"sm",color:"primary",label:"Edit"},on:{click:t.editname}}),s("br"),s("span",{staticClass:"info-values"},[t._v("\n              "+t._s(t.userprofileDetail.firstname)+"\n              "+t._s(t.userprofileDetail.lastname)+"\n            ")])],1)]),s("q-card",{staticClass:"card-sec",attrs:{flat:"",bordered:""}},[s("div",[s("span",{staticClass:"input-label float-left basics-header"},[t._v("Email")]),s("br"),s("span",{staticClass:"info-values font-bold"},[t._v("\n              "+t._s(t.userDetails.email)+"\n            ")])])]),s("q-card",{staticClass:"card-sec",attrs:{flat:"",bordered:""}},[s("div",[s("span",{staticClass:"input-label float-left basics-header"},[t._v("Password")]),s("q-btn",{staticClass:"float-right",attrs:{size:"sm",color:"primary",label:"Edit"},on:{click:t.changepassword}}),s("br"),s("span",{staticClass:"info-values"},[t._v("\n              **************\n            ")])],1)])],1),s("q-tab-panel",{attrs:{name:"Interests"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("p",{staticClass:"notify-text"},[t._v("Health")])]),s("div",{staticClass:"col-6",attrs:{"float-left":""}},t._l(t.firstHalf(t.interests),(function(e){return s("div",{key:e.name},[s("q-checkbox",{attrs:{size:"xs",val:"xs",label:e.name},model:{value:e.selected,callback:function(s){t.$set(e,"selected",s)},expression:"interest.selected"}})],1)})),0),s("div",{staticClass:"col-6",attrs:{"float-right":""}},t._l(t.secondHalf(t.interests),(function(e){return s("div",{key:e.name},[s("q-checkbox",{attrs:{size:"xs",val:"xs",label:e.name},model:{value:e.selected,callback:function(s){t.$set(e,"selected",s)},expression:"interest.selected"}})],1)})),0)])])],1)],1)])},i=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("f751"),s("9523")),r=s.n(n),o=s("2f62");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){r()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("headerRightButtonClick",this.save),this.$root.$on("headerRightIcon2Click",this.gotoSearch)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightButtonClick",this.save),this.$root.$off("headerRightIcon2Click",this.gotoSearch)},computed:l(l(l({},Object(o["c"])("config",["baseUrl"])),Object(o["c"])("country",["countries"])),Object(o["c"])("userprofile",["profileDetail","userDetails","userprofileDetail"])),data:function(){return{genders:["Male","Female"],form:{gender:"",dob:"",country:"",hometown:"",occupation:"",longdescription:""},privacySettingOptionsModel:!1,accountSettingModel:!1,selectedButton:"",accountType:"",tab:"GeneralInfo",interests:[{name:"Diet",selected:!1},{name:"Disease and Disorder",selected:!1},{name:"Food and Drink",selected:!1},{name:"Leisure",selected:!1},{name:"Pregnancy",selected:!1},{name:"Receipes",selected:!1},{name:"Sleep",selected:!1},{name:"Social",selected:!1},{name:"Stress",selected:!1},{name:"Supplement",selected:!1},{name:"Treatments",selected:!1},{name:"weight Loss",selected:!1},{name:"WellBeing",selected:!1}]}},mounted:function(){this.setHeaderData(!0,!1,"Account Settings","","","",!0,!0),0===this.countries.length&&this.getCountry(),this.form=Object.assign({},this.userprofileDetail,{avatar:Object.assign({},this.userprofileDetail.avatar)})},methods:l(l(l(l({},Object(o["b"])("header",["setHeader"])),Object(o["b"])("country",["fetchCountries"])),Object(o["b"])("userprofile",["updateUserDetails"])),{},{setHeaderData:function(t,e,s,a,i,n,r,o){this.setHeader({hamburgerIcon:t,backIcon:e,title:s,rightIcon1:a,rightIcon2:i,rightLinkText:n,notificationIcon:r,searchIcon:o})},getCountry:function(){this.fetchCountries()},gotoSearch:function(){this.$router.push("search-result")},editname:function(){this.$router.push("edit-name")},editemail:function(){this.$router.push("edit-email")},changepassword:function(){this.$router.push("change-password")},changelanguage:function(){this.$router.push("change-language")},backButtonClick:function(){this.$router.push("profile")},save:function(){this.updateUserDetails({file:null,userDetail:this.form,afterSuccess:this.backButtonClick})},firstHalf:function(t){var e=0;return t.length%2!==0&&(e=1),t.slice(0,Math.floor(t.length/2)+e)},secondHalf:function(t){var e=0;return t.length%2!==0&&(e=1),t.slice(e+Math.floor(t.length/2))}})},d=u,f=(s("e7fe"),s("2877")),p=s("9989"),b=s("f09f"),m=s("429b"),h=s("7460"),v=s("eb85"),C=s("adad"),g=s("823b"),y=s("0378"),x=s("ddd8"),k=s("27f9"),w=s("9c40"),q=s("8f8e"),O=s("eebe"),$=s.n(O),D=Object(f["a"])(d,a,i,!1,null,"15cb2c22",null);e["default"]=D.exports;$()(D,"components",{QPage:p["a"],QCard:b["a"],QTabs:m["a"],QTab:h["a"],QSeparator:v["a"],QTabPanels:C["a"],QTabPanel:g["a"],QForm:y["a"],QSelect:x["a"],QInput:k["a"],QBtn:w["a"],QCheckbox:q["a"]})},e7fe:function(t,e,s){"use strict";var a=s("6aaa"),i=s.n(a);i.a}}]);