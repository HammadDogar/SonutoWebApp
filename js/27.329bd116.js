(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{3924:function(t,e,a){},"3e52":function(t,e,a){"use strict";var s=a("3924"),n=a.n(s);n.a},"5be4":function(t,e,a){},8734:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex"},[a("div",{staticClass:"background"},[a("div",{staticClass:"d-flex q-mb-none"},[a("q-icon",{staticClass:"backbutton",class:[1===t.steps&&"invisible"],attrs:{name:"app:back"},on:{click:function(e){return t.goToBack()}}})],1),a("q-stepper",{ref:"stepper",staticClass:"stepperDiv verification-stepper",attrs:{color:"white",contracted:""},model:{value:t.steps,callback:function(e){t.steps=e},expression:"steps"}},[a("q-step",{staticStyle:{width:"100%"},attrs:{name:10,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:11,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:12,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:13,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:14,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:15,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:16,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:!0,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:1,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:t.steps>=1,title:""}}),a("q-step",{staticStyle:{width:"100%"},attrs:{name:2,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:t.steps>=2,title:""}})],1),a("div",{staticClass:"steps-description-section"},[1===t.steps?a("div",[a("span",{staticClass:"Heading"},[t._v("Prepare for your selfie")]),a("p",{staticClass:"sub-title"},[t._v("\n          Sonuto has adopted a zero-tolerance policy to prevent abuse by making it mandatory for all users of the\n          platform to verify their identity.\n        ")]),a("p",{staticClass:"sub-title"},[t._v("\n          *Remove anything that obstructs your face like hats, sunglasses or headphones.\n        ")]),a("p",{staticClass:"sub-title"},[t._v("\n          *Make sure your face is fully and evenly lit.\n        ")]),a("p",{staticClass:"sub-title"},[t._v("\n          *Position your face at the same height as your phone's camera.\n        ")])]):t._e(),2===t.steps?a("div",[a("span",{staticClass:"Heading"},[t._v("Prepare to scan your document")]),a("p",{staticClass:"sub-title"},[t._v("\n          Sonuto has adopted a zero-tolerance policy to prevent abuse by making it mandatory for all users of the\n          platform to verify their identity.\n        ")]),a("p",{staticClass:"sub-title"},[t._v("\n          Open the page showing your personal information and continue on the next screen.\n        ")])]):t._e()]),a("div",{staticClass:"steps"},[a("div",{staticClass:" step1"},[t.showDirection?a("div",{staticClass:"camera-direction",class:[1===t.directionState?"full-div-height":"half-div-height"]},[1===t.directionState?a("div",{staticClass:"content"},[a("h6",{staticClass:"q-mt-none Heading"},[t._v("Place your face inside the outline")]),a("div",{staticClass:"shape"})]):t._e(),2===t.directionState&&"License"===t.form.docType?a("div",{staticClass:"content"},[a("h6",{staticClass:"Heading"},[t._v("Place your front side of document")])]):t._e(),2===t.directionState&&"Passport"===t.form.docType?a("div",{staticClass:"content"},[a("h6",{staticClass:"Heading"},[t._v("Place your document")])]):t._e(),3===t.directionState?a("div",{staticClass:"content"},[a("h6",{staticClass:"Heading"},[t._v("Place your back side of document")])]):t._e()]):t._e()]),2===t.steps?a("div",{staticClass:"step2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("q-select",{staticClass:"input-control",staticStyle:{"padding-left":"5px"},attrs:{borderless:"",options:t.docTypes,"emit-value":"","map-options":"","label-color":"primary",label:"Document Type",rules:[function(t){return!!t||"Field is required"}],"input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"}},on:{input:t.resetPictures},model:{value:t.form.docType,callback:function(e){t.$set(t.form,"docType",e)},expression:"form.docType"}})],1)])]):t._e()]),a("div",{staticClass:"buttons-section"},[1===t.steps?a("q-btn",{staticClass:"next-btn",attrs:{label:"Next","icon-right":"app:right-arrow"},on:{click:function(e){return t.uploadImages("selfie")}}}):t._e(),2===t.steps?a("q-btn",{staticClass:"next-btn",attrs:{label:"Next",disabled:t.requestLoading,"icon-right":"app:right-arrow"},on:{click:function(e){return t.uploadImages("front")}}}):t._e()],1)],1)])},n=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("a34a")),r=a.n(i),o=(a("34ef"),a("96cf"),a("c973")),c=a.n(o),p=a("9523"),l=a.n(p),d=a("fecd"),u=a("2f62"),f=a("ce28"),h=a("2a19");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){l()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={name:"UserVerification",data:function(){return{steps:1,docTypes:["Passport","License"],form:{personImg:null,docType:"License",docImgFront:null,docImgBack:null},requestLoading:!1,showDirection:!1,directionState:0}},computed:g(g({},Object(u["c"])("config",["baseUrl","rocketChatUrl"])),Object(u["c"])("userprofile",["userDetails","userprofileDetail"])),methods:g(g(g(g({},Object(u["b"])("userprofile",["updateUser"])),Object(u["b"])("verification",["submitUserVerificationsDetail"])),Object(u["b"])("otp",["sendOTP"])),{},{goToBack:function(){1===this.steps?this.$router.push("welcome"):2===this.steps&&(this.steps=1)},uploadImages:function(t){var e=this;return c()(r.a.mark((function a(){var s,n,i,o;return r.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s=!0,!s){a.next=15;break}return e.showDirection=!0,"selfie"===t?e.directionState=1:"front"===t?e.directionState=2:"License"===e.form.docType&&"back"===t&&(e.directionState=3),a.next=6,e.takePicture();case 6:if(n=a.sent,n){a.next=9;break}return a.abrupt("return");case 9:i=new Blob([new Uint8Array(Object(f["a"])(n.base64String))],{type:"image/".concat(n.format)}),o=new File([i],"Name",{lastModified:new Date,type:i.type}),e.showDirection=!1,"selfie"===t?(e.form.personImg=o,e.showDirection=!1,e.steps=2):"front"===t?(e.form.docImgFront=o,"License"===e.form.docType?e.uploadImages("back"):e.submitDetails()):"back"===t&&(e.form.docImgBack=o,e.submitDetails()),a.next=17;break;case 15:return h["a"].create({progress:!0,message:"Can't Process Without Camera Permissions",type:"negative"}),a.abrupt("return",null);case 17:case"end":return a.stop()}}),a)})))()},takePicture:function(){var t=this;return c()(r.a.mark((function e(){var a;return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"].getPhoto({quality:90,allowEditing:!0,resultType:d["b"].Base64}).catch((function(e){t.showDirection=!1}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))()},next:function(t){this.steps=t},submitDetails:function(){var t=this;this.requestLoading=!0;var e=new FormData;e.append("data",JSON.stringify({documentType:this.form.docType,status:"Pending",users_permissions_user:this.userDetails.id})),e.append("files.personImg",this.form.personImg,"personImg"),"License"===this.form.docType?(e.append("files.docFrontImg",this.form.docImgFront,"docFrontImg"),e.append("files.docBackImg",this.form.docImgBack,"docBackImg")):e.append("files.docFrontImg",this.form.docImgFront,"docFrontImg"),this.submitUserVerificationsDetail({verRequest:e,userDetails:{name:this.userprofileDetail.firstfame+" "+this.userprofileDetail.lastname,id:this.userprofileDetail.user}}).then((function(e){t.requestLoading=!1,window.location.href="/"}))},resetPictures:function(){this.form.docImgBack=null,this.form.docImgFront=null}}),mounted:function(){}},v=b,y=(a("3e52"),a("ff27"),a("2877")),w=a("9989"),C=a("0016"),k=a("f531"),S=a("87fe"),O=a("9c40"),P=a("ddd8"),D=a("eebe"),_=a.n(D),I=Object(y["a"])(v,s,n,!1,null,"c93e961a",null);e["default"]=I.exports;_()(I,"components",{QPage:w["a"],QIcon:C["a"],QStepper:k["a"],QStep:S["a"],QBtn:O["a"],QSelect:P["a"]})},ff27:function(t,e,a){"use strict";var s=a("5be4"),n=a.n(s);n.a}}]);