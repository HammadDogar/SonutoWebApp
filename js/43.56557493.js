(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{"323e":function(t,e,a){"use strict";var n=a("37a9"),i=a.n(n);i.a},"37a9":function(t,e,a){},d4a8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center page"},[a("div",{staticClass:"main-container"},[a("div",{staticClass:"flex flex-center"},[null!=t.form.avatar&&null!=t.form.avatar.url?a("q-img",{staticClass:"rounded-borders profile-img",attrs:{src:""+t.form.avatar.url,"spinner-color":"white"},on:{click:function(e){return t.getfullScreen(t.form)}}}):t.form.firstname?a("q-avatar",{staticStyle:{height:"126px",width:"126px"},attrs:{color:"primary","text-color":"white"}},[t._v("\n        "+t._s(t.form.firstname.charAt(0))+" "+t._s(t.form.lastname.charAt(0))+"\n      ")]):t._e()],1),a("input",{ref:"file",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/png, image/gif, image/jpeg"},on:{change:t.onFileChange}}),a("div",{staticClass:"flex flex-center edit-circle-icon"},[a("q-btn",{attrs:{flat:"",icon:"app:filled-circle",size:"14px","no-caps":""},on:{click:function(e){return t.$refs.file.click()}}})],1),a("div",{staticClass:"flex flex-center profile-photo-header"},[t._v("\n      Profile Photo\n    ")]),a("div",{staticClass:"profile-edit-section"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 input-label"},[t._v("\n          First Name\n        ")]),a("div",{staticClass:"col-12"},[a("q-input",{staticClass:"input",attrs:{standout:""},model:{value:t.form.firstname,callback:function(e){t.$set(t.form,"firstname",e)},expression:"form.firstname"}})],1),a("div",{staticClass:"col-12 input-label"},[t._v("\n          Last Name\n        ")]),a("div",{staticClass:"col-12"},[a("q-input",{staticClass:"input",attrs:{standout:""},model:{value:t.form.lastname,callback:function(e){t.$set(t.form,"lastname",e)},expression:"form.lastname"}})],1),a("div",{staticClass:"col-12 input-label"},[t._v("\n          Country\n        ")]),a("div",{staticClass:"col-12"},[a("q-select",{attrs:{standout:"",options:t.countries,"emit-value":"","map-options":""},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1),a("div",{staticClass:"col-12 input-label"},[t._v("\n          School/College/University\n        ")]),a("div",{staticClass:"col-12"},[a("q-input",{staticClass:"input",attrs:{standout:""},model:{value:t.form.school,callback:function(e){t.$set(t.form,"school",e)},expression:"form.school"}})],1),a("div",{staticClass:"col-12 input-label"},[t._v("\n          Employer\n        ")]),a("div",{staticClass:"col-12"},[a("q-input",{staticClass:"input",attrs:{standout:""},model:{value:t.form.employer,callback:function(e){t.$set(t.form,"employer",e)},expression:"form.employer"}})],1),a("div",{staticClass:"col-12 input-label"},[t._v("\n          Occupation\n        ")]),a("div",{staticClass:"col-12"},[a("q-input",{staticClass:"input",attrs:{standout:""},model:{value:t.form.occupation,callback:function(e){t.$set(t.form,"occupation",e)},expression:"form.occupation"}})],1)])])]),a("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[a("FullScreen",{attrs:{details:t.fullscreendata}})],1)])},i=[],s=(a("8e6e"),a("8a81"),a("7f7f"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("f751"),a("9523")),r=a.n(s),l=a("2f62"),o=a("bd4c"),c=a("2a19"),u=a("d41a");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){r()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("headerRightButtonClick",this.save),this.$root.$on("onformatDateClick",this.formatDate),this.$root.$on("onExitFullscreen",this.closeFullScreen)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightButtonClick",this.save),this.$root.$off("onformatDateClick",this.formatDate),this.$root.$off("onExitFullscreen",this.closeFullScreen)},computed:d(d(d({},Object(l["c"])("config",["baseUrl"])),Object(l["c"])("userprofile",["userprofileDetail"])),Object(l["c"])("country",["countries"])),components:{FullScreen:u["a"]},data:function(){return{loading:!1,form:{id:"",FirstName:"",LastName:"",country:"",School:"",Employer:"",Occupation:"",Avatar:null},profileImage:null,fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:"",hideBack:!1}}},mounted:function(){this.setHeaderData(!1,!0,"Edit Profile","","","Save",!1,!1),0===this.countries.length&&this.getCountry(),this.form=Object.assign({},this.userprofileDetail,{avatar:Object.assign({},this.userprofileDetail.avatar)})},methods:d(d(d(d({},Object(l["b"])("country",["fetchCountries"])),Object(l["b"])("userprofile",["updateUserDetails"])),Object(l["b"])("header",["setHeader"])),{},{onFileChange:function(t){var e=t.target.files||t.dataTransfer.files,a=e[0].size;if(a>5e5)return c["a"].create({progress:!0,message:"please select profile photo less than 500 KB",type:"negative"}),!1;e.length&&(this.profileImage=e[0],this.createImage(e[0]))},createImage:function(t){var e=this,a=new FileReader;a.onload=function(t){0!==Object.keys(e.form.avatar).length||(e.form.avatar=Object.assign({})),e.form.avatar.url=t.target.result},a.readAsDataURL(t)},setHeaderData:function(t,e,a,n,i,s,r,l){this.setHeader({hamburgerIcon:t,backIcon:e,title:a,rightIcon1:n,rightIcon2:i,rightLinkText:s,notificationIcon:r,searchIcon:l})},getCountry:function(){this.fetchCountries()},save:function(){this.updateUserDetails({file:this.profileImage,userDetail:this.form,afterSuccess:this.backButtonClick})},backButtonClick:function(){this.$router.push("profile")},formatDate:function(t){return o["a"].formatDate(t,"DD MMM")+" at "+o["a"].formatDate(t,"hh.mm A")},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var t=document.getElementById("image-box");t.setAttribute("style","display:none;"),this.fullscreendata.hideBack=!0}},getfullScreen:function(t){this.fullscreendata.hideBack=!1,this.fullscreendata.url=t.avatar.url,this.fullscreendata.name=t.firstname+" "+t.lastname,this.fullscreendata.feedtext=null,this.fullscreendata.created_at=null,this.fullscreendata.likeLength=null,this.fullscreendata.commentLength=null,this.fullscreendata.id=null,this.fullscreendata.likeIcon=null;var e=document.getElementById("image-box");e.setAttribute("style","display:flex;");var a=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(a).then((function(){})).catch((function(t){alert(t)}))}})},h=m,p=(a("323e"),a("2877")),v=a("9989"),g=a("068f"),b=a("cb32"),C=a("9c40"),y=a("27f9"),k=a("ddd8"),x=a("8572"),O=a("eebe"),$=a.n(O),j=Object(p["a"])(h,n,i,!1,null,"4051cbe2",null);e["default"]=j.exports;$()(j,"components",{QPage:v["a"],QImg:g["a"],QAvatar:b["a"],QBtn:C["a"],QInput:y["a"],QSelect:k["a"],QField:x["a"]})}}]);