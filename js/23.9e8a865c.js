(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"45ac":function(t,e,a){},"5be4":function(t,e,a){},8734:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex"},[a("div",{staticClass:"background"},[a("div",{staticClass:"d-flex q-mb-none"},[a("q-icon",{staticClass:"backbutton",class:[1===t.steps&&"invisible"],attrs:{name:"app:back"},on:{click:function(e){return t.goToBack()}}})],1),a("q-stepper",{ref:"stepper",staticClass:"stepperDiv verification-stepper",attrs:{color:"white",contracted:""},model:{value:t.steps,callback:function(e){t.steps=e},expression:"steps"}},[a("q-step",{staticStyle:{width:"100%"},attrs:{name:0,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:0,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:0,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:0,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:0,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:0,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:0,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:1,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:t.steps>=1,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:2,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:t.steps>=2,title:""}})],1),a("div",{staticClass:"steps-description-section"},[1===t.steps?a("div",[a("span",{staticClass:"Heading"},[t._v("Prepare for your selfie")]),a("p",{staticClass:"sub-title"},[t._v("\n          Sonuto has adopted a zero-tolerance policy to prevent abuse by making it mandatory for all users of the\n          platform to verify their identity.\n        ")]),a("p",{staticClass:"sub-title"},[t._v("\n          *Remove anything that obstructs your face like hats, sunglasses or headphones.\n        ")]),a("p",{staticClass:"sub-title"},[t._v("\n          *Make sure your face is fully and evenly lit.\n        ")]),a("p",{staticClass:"sub-title"},[t._v("\n          *Position your face at the same height as your phone's camera.\n        ")])]):t._e(),2===t.steps?a("div",[a("span",{staticClass:"Heading"},[t._v("Prepare to scan your document")]),a("p",{staticClass:"sub-title"},[t._v("\n          Sonuto has adopted a zero-tolerance policy to prevent abuse by making it mandatory for all users of the\n          platform to verify their identity.\n        ")]),a("p",{staticClass:"sub-title"},[t._v("\n          Open the page showing your personal information and continue on the next screen.\n        ")])]):t._e()]),a("div",{staticClass:"steps"},[a("div",{staticClass:" step1"},[t.showDirection?a("div",{staticClass:"camera-direction",class:[1===t.directionState?"full-div-height":"half-div-height"]},[1===t.directionState?a("div",{staticClass:"content"},[a("h6",{staticClass:"q-mt-none Heading"},[t._v("Place your face inside the outline")]),a("div",{staticClass:"shape"})]):t._e(),2===t.directionState&&"License"===t.form.docType?a("div",{staticClass:"content"},[a("h6",{staticClass:"Heading"},[t._v("Place your front side of document")])]):t._e(),2===t.directionState&&"Passport"===t.form.docType?a("div",{staticClass:"content"},[a("h6",{staticClass:"Heading"},[t._v("Place your document")])]):t._e(),3===t.directionState?a("div",{staticClass:"content"},[a("h6",{staticClass:"Heading"},[t._v("Place your back side of document")])]):t._e()]):t._e()]),2===t.steps?a("div",{staticClass:"step2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("q-select",{staticClass:"input-control",staticStyle:{"padding-left":"5px"},attrs:{borderless:"",options:t.docTypes,"emit-value":"","map-options":"","label-color":"primary",label:"Document Type",rules:[function(t){return!!t||"Field is required"}],"input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"}},on:{input:t.resetPictures},model:{value:t.form.docType,callback:function(e){t.$set(t.form,"docType",e)},expression:"form.docType"}})],1)])]):t._e()]),a("div",{staticClass:"buttons-section"},[1===t.steps?a("q-btn",{staticClass:"next-btn",attrs:{label:"Next","icon-right":"app:right-arrow"},on:{click:function(e){return t.uploadImages("selfie")}}}):t._e(),2===t.steps?a("q-btn",{staticClass:"next-btn",attrs:{label:"Next",disabled:t.requestLoading,"icon-right":"app:right-arrow"},on:{click:function(e){return t.uploadImages("front")}}}):t._e()],1)],1)])},n=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("a34a")),r=a.n(i),o=(a("34ef"),a("96cf"),a("c973")),c=a.n(o),p=a("9523"),l=a.n(p),d=a("fecd"),u=a("2f62"),f=a("ce28");function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){l()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={name:"UserVerification",data:function(){return{steps:1,docTypes:["Passport","License"],form:{personImg:null,docType:"License",docImgFront:null,docImgBack:null},requestLoading:!1,showDirection:!1,directionState:0}},computed:m(m({},Object(u["c"])("config",["baseUrl","rocketChatUrl"])),Object(u["c"])("userprofile",["userDetails","userprofileDetail"])),methods:m(m(m(m({},Object(u["b"])("userprofile",["updateUser"])),Object(u["b"])("verification",["submitUserVerificationsDetail"])),Object(u["b"])("otp",["sendOTP"])),{},{goToBack:function(){1===this.steps?this.$router.push("welcome"):2===this.steps&&(this.steps=1)},uploadImages:function(t){var e=this;return c()(r.a.mark((function a(){var s,n,i;return r.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.showDirection=!0,"selfie"===t?e.directionState=1:"front"===t?e.directionState=2:"License"===e.form.docType&&"back"===t&&(e.directionState=3),a.next=4,e.takePicture();case 4:if(s=a.sent,s){a.next=7;break}return a.abrupt("return");case 7:n=new Blob([new Uint8Array(Object(f["a"])(s.base64String))],{type:"image/".concat(s.format)}),i=new File([n],"Name",{lastModified:new Date,type:n.type}),e.showDirection=!1,"selfie"===t?(e.form.personImg=i,e.showDirection=!1,e.steps=2):"front"===t?(e.form.docImgFront=i,"License"===e.form.docType?e.uploadImages("back"):e.submitDetails()):"back"===t&&(e.form.docImgBack=i,e.submitDetails());case 11:case"end":return a.stop()}}),a)})))()},takePicture:function(){var t=this;return c()(r.a.mark((function e(){var a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"].getPhoto({quality:90,allowEditing:!0,resultType:d["b"].Base64}).catch((function(e){t.showDirection=!1}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))()},next:function(t){this.steps=t},submitDetails:function(){var t=this;this.requestLoading=!0;var e=new FormData;e.append("data",JSON.stringify({documentType:this.form.docType,status:"Pending",users_permissions_user:this.userDetails.id})),e.append("files.personImg",this.form.personImg,"personImg"),"License"===this.form.docType?(e.append("files.docFrontImg",this.form.docImgFront,"docFrontImg"),e.append("files.docBackImg",this.form.docImgBack,"docBackImg")):e.append("files.docFrontImg",this.form.docImgFront,"docFrontImg"),this.submitUserVerificationsDetail({verRequest:e,userDetails:{name:this.userprofileDetail.firstfame+" "+this.userprofileDetail.lastname,id:this.userprofileDetail.user}}).then((function(e){t.requestLoading=!1,window.location.href="/"}))},resetPictures:function(){this.form.docImgBack=null,this.form.docImgFront=null}}),mounted:function(){}},b=g,v=(a("c0b6"),a("ff27"),a("2877")),y=a("9989"),w=a("0016"),C=a("f531"),k=a("87fe"),S=a("9c40"),O=a("ddd8"),D=a("eebe"),_=a.n(D),I=Object(v["a"])(b,s,n,!1,null,"2ea363f7",null);e["default"]=I.exports;_()(I,"components",{QPage:y["a"],QIcon:w["a"],QStepper:C["a"],QStep:k["a"],QBtn:S["a"],QSelect:O["a"]})},c0b6:function(t,e,a){"use strict";var s=a("45ac"),n=a.n(s);n.a},ff27:function(t,e,a){"use strict";var s=a("5be4"),n=a.n(s);n.a}}]);