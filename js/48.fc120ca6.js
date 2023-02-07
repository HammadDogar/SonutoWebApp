(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{"013e":function(t,e,s){"use strict";var i=s("d3c1"),a=s.n(i);a.a},3815:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex"},[s("div",{staticClass:"background"},[4!==t.step?s("q-icon",{staticClass:"backbutton",attrs:{name:"app:back"},on:{click:function(e){return t.goToBack()}}}):t._e(),s("q-stepper",{ref:"stepper",staticClass:"background stepperDiv",attrs:{color:"white",contracted:""},scopedSlots:t._u([{key:"navigation",fn:function(){return[s("q-stepper-navigation",[s("div",{staticClass:"flex flex-center more-info-item row",staticStyle:{width:"100%"}},[s("q-btn",{staticClass:"nextBtn ",attrs:{label:4===t.step?"Go to login":"Next",rounded:"","no-caps":"",disabled:t.sendingRequest},on:{click:t.goToStep}})],1)])]},proxy:!0}]),model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[s("q-step",{staticStyle:{width:"100%"},attrs:{name:1,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:t.step>1,title:""}},[s("span",{staticClass:"Heading"},[t._v("What's your Email address?")]),s("q-input",{ref:"email",staticClass:"input-control",attrs:{borderless:"",placeholder:"Add your Email","input-style":{maxWidth:"335px",height:"46px",padding:"0px 5px"},rules:[function(t){return!!t||"Field is required"},t.isValidEmail]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goToStep(e)}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("q-step",{attrs:{name:2,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:t.step>2,title:""}},[s("span",{staticClass:"Heading"},[t._v("Enter OTP")]),s("p",{staticClass:"sub-title"},[t._v("Please enter the 4 digit code sent to "),s("br"),s("b",[t._v(t._s(t.email))])]),s("div",{staticClass:"row"},[s("q-input",{ref:"otpFirst",staticClass:"otp-control col-md-2",attrs:{borderless:"",type:"text",min:"1",max:"1",autocapitalize:"off",maxlength:"1"},on:{input:function(e){return t.goToNextOtp(e,"otpSecond")}},model:{value:t.otp.first,callback:function(e){t.$set(t.otp,"first",e)},expression:"otp.first"}}),s("q-input",{ref:"otpSecond",staticClass:"otp-control col-md-2 mg-left",attrs:{borderless:"",min:"1",max:"1",autocapitalize:"off",type:"text",maxlength:"1"},on:{input:function(e){return t.goToNextOtp(e,"otpThird")}},model:{value:t.otp.second,callback:function(e){t.$set(t.otp,"second",e)},expression:"otp.second"}}),s("q-input",{ref:"otpThird",staticClass:"otp-control col-md-2 mg-left",attrs:{borderless:"",min:"1",max:"1",autocapitalize:"off",type:"text",maxlength:"1"},on:{input:function(e){return t.goToNextOtp(e,"otpForth")}},model:{value:t.otp.third,callback:function(e){t.$set(t.otp,"third",e)},expression:"otp.third"}}),s("q-input",{ref:"otpForth",staticClass:"otp-control col-md-2 mg-left",attrs:{borderless:"",min:"1",max:"1",autocapitalize:"off",type:"text",maxlength:"1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goToStep(e)}},model:{value:t.otp.forth,callback:function(e){t.$set(t.otp,"forth",e)},expression:"otp.forth"}})],1),s("div",{staticStyle:{cursor:"pointer","margin-top":"10px"},attrs:{disabled:!t.allowResendOtp||t.sendingRequest},on:{click:t.resendOtp}},[t._v("\n          Resend Code "),t.allowResendOtp?t._e():s("span",[t._v("in 00:"),t.countDown<10?s("span",[t._v("0")]):t._e(),t._v(t._s(t.countDown))])])]),s("q-step",{attrs:{name:3,icon:"app:transparent-rectangle","active-icon":"app:rectangle-dash","done-icon":"app:rectangle-dash",done:t.step>3,title:""}},[s("span",{staticClass:"Heading"},[t._v("Reset Your Password?")]),s("q-input",{ref:"password",staticClass:"input-control",attrs:{borderless:"",type:t.isPwd?"password":"text","input-style":{maxWidth:"335px",height:"46px",padding:"0px 7px"},rules:[function(t){return!!t||"Field is required"},t.isValidPassword],placeHolder:"New password"},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"5px"},attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),s("q-input",{ref:"confirmationPassword",staticClass:"input-control confirmationPasswordField",attrs:{borderless:"",type:t.isPwd?"password":"text","input-style":{maxWidth:"335px",height:"46px",padding:"0px 7px"},rules:[function(t){return!!t||"Field is required"},t.isValidPassword],placeHolder:"Confirm new password"},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"5px"},attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),s("q-step",{attrs:{name:4,icon:"app:transparent-rectangle","done-icon":"app:rectangle-dash","active-icon":"app:rectangle-dash",done:t.step>4,title:""}},[s("div",{staticClass:"flex flex-center page"},[s("div",{staticClass:"msg"},[s("q-icon",{staticClass:"successfulTick",attrs:{name:"app:successful-white-tick"}}),s("p",{staticStyle:{"font-size":"xx-large"}},[t._v("Password Updated Successfully!")])],1)])])],1)],1)])},a=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("9523")),o=s.n(n),r=s("2a19"),c=s("2f62");function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={name:"forgetPassword",data:function(){return{isPwd:!0,step:1,email:"",otp:{first:"",second:"",third:"",forth:""},password:"",confirmPassword:"",countDown:20,allowResendOtp:!1,btnLabel:"Next",showpassword:!1,sendingRequest:!1}},mounted:function(){this.setHeaderData(!1,!1,"","","","",!1,!1)},methods:l(l(l({},Object(c["b"])("header",["setHeader"])),Object(c["b"])("userprofile",["sendForgetPasswordOtp","verifyForgetPasswordOtp","resetPassword"])),{},{setHeaderData:function(t,e,s,i,a,n,o,r){this.setHeader({hamburgerIcon:t,backIcon:e,title:s,rightIcon1:i,rightIcon2:a,rightLinkText:n,notificationIcon:o,searchIcon:r})},goToNextOtp:function(t,e){""!==t&&this.$refs[e].focus()},isValidEmail:function(t){var e=/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}.){1,8}[a-zA-Z]{2,5}$/;return e.test(t)||"Invalid email"},isValidPassword:function(t){var e=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/;return e.test(t)||"Your password must be 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"},checkEmailVerification:function(){var t=this,e=this.isValidEmail(this.email);if("Invalid email"===e)return!1;this.sendingRequest=!0,this.sendForgetPasswordOtp(this.email).then((function(e){e.data?(t.step=2,t.countDownTimer()):r["a"].create({progress:!0,message:e.message,type:"negative"}),t.sendingRequest=!1}))},checkPasswordVerification:function(){var t=this,e=this.isValidPassword(this.password);if(!0!==e)return!1;if(this.password===this.confirmPassword){var s=this.otp.first+this.otp.second+this.otp.third+this.otp.forth,i={code:s,password:this.password,passwordConfirmation:this.confirmPassword};this.sendingRequest=!0,this.resetPassword(i).then((function(e){e?(t.step=4,t.sendingRequest=!1):r["a"].create({progress:!0,message:"Password Not Updated",type:"negative"})}))}else r["a"].create({progress:!0,message:"Confirmation password must match",type:"negative"})},validate:function(t){var e=!0;switch(t){case 1:if(!this.email)return e=!1,e;break;case 2:if(!this.otp.first||!this.otp.second||!this.otp.third||!this.otp.forth)return e=!1,e;break;case 3:if(!this.password)return e=!1,e;break}return e},goToStep:function(){var t=!1;1===this.step?(t=this.validate(this.step),t?this.checkEmailVerification():this.$refs.otpFirst.focus()):2===this.step?(t=this.validate(),t?this.verifyOtp():this.$refs.otpFirst.focus()):3===this.step?(t=this.validate(this.step),t?this.checkPasswordVerification():this.$refs.password.focus()):4===this.step&&this.$router.push("welcome")},goToBack:function(){1===this.step?this.$router.push("welcome"):this.step=this.step-1},validateOtp:function(){var t=!0;return this.otp.first&&this.otp.second&&this.otp.third&&this.otp.forth||(t=!1),t},verifyOtp:function(){var t=this,e=this.otp.first+this.otp.second+this.otp.third+this.otp.forth,s={email:this.email,otp:e};this.sendingRequest=!0,this.verifyForgetPasswordOtp(s).then((function(e){e.data?t.step=3:r["a"].create({progress:!0,message:e.message,type:"negative"}),t.sendingRequest=!1}))},countDownTimer:function(){var t=this,e=null;this.countDown>0?e=setTimeout((function(){t.countDown-=1,t.allowResendOtp=!1,t.countDownTimer()}),1e3):(this.countDown=20,this.allowResendOtp=!0,clearTimeout(e))},resendOtp:function(){var t=this;this.allowResendOtp&&(this.sendingRequest=!0,this.sendForgetPasswordOtp(this.email).then((function(e){e.data&&(t.countDownTimer(),r["a"].create({progress:!0,message:e.message,type:"positive"})),t.sendingRequest=!1})))}})},u=d,f=(s("013e"),s("2877")),h=s("9989"),m=s("0016"),g=s("f531"),w=s("87fe"),v=s("27f9"),b=s("b19c"),x=s("9c40"),y=s("8572"),k=s("eebe"),P=s.n(k),O=Object(f["a"])(u,i,a,!1,null,"7bb0275a",null);e["default"]=O.exports;P()(O,"components",{QPage:h["a"],QIcon:m["a"],QStepper:g["a"],QStep:w["a"],QInput:v["a"],QStepperNavigation:b["a"],QBtn:x["a"],QField:y["a"]})},d3c1:function(t,e,s){}}]);