(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"00e8":function(e,t,i){},"2ff9":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex flex-center page"},[e.hasFavoritePhotos?i("div",{staticClass:"favorite-pic-section"},[i("q-scroll-area",{staticClass:"scroll",attrs:{horizontal:""}},[i("div",{staticClass:"row no-wrap item-section"},e._l(e.getFevImages(e.userDetails.userphotos),(function(t){return i("div",{key:t.id,staticClass:"item"},[i("q-img",{staticClass:"rounded-borders fev-image",attrs:{src:""+e.baseUrl+t.photo.url,"spinner-color":"white"}})],1)})),0)])],1):e._e(),i("div",{staticClass:"avatar-section"},[i("q-btn",{staticClass:"float-right pencil",attrs:{flat:"",icon:"app:pencil"},on:{click:e.profileEdit}}),i("div",{staticClass:"flex flex-center avatar-item"},[null!=e.userprofileDetail&&null!=e.userprofileDetail.avatar?i("q-img",{staticClass:"rounded-borders",staticStyle:{height:"126px",width:"126px","border-radius":"126px"},attrs:{src:""+e.userprofileDetail.avatar.url,"spinner-color":"white"},on:{click:function(t){return e.getfullScreen(e.userprofileDetail,e.enlargesec="profile")}}}):null!=e.userprofileDetail&&null!=e.userprofileDetail.firstname&&null!=e.userprofileDetail.lastname?i("q-avatar",{staticStyle:{height:"126px",width:"126px"},attrs:{color:"primary","text-color":"white"}},[e._v("\n        "+e._s(e.userprofileDetail.firstname.charAt(0))+" "+e._s(e.userprofileDetail.lastname.charAt(0))+"\n      ")]):e._e()],1),i("div",{staticClass:"flex flex-center title-item"},[e._v("\n      "+e._s(e.userprofileDetail.firstname)+" "+e._s(e.userprofileDetail.lastname)+"\n    ")]),i("div",{staticClass:"flex flex-center sub-title-item"},[e._v("\n      "+e._s(e.userprofileDetail.employer)+" "),e.userprofileDetail.employer&&e.userprofileDetail.school?i("span",[e._v(" / \n      ")]):e._e(),e._v(" "+e._s(e.userprofileDetail.School)+"\n    ")]),i("div",{staticClass:"flex flex-center country-item"},[i("span",[e._v("\n        "+e._s(e.getCountryName(e.userprofileDetail.country))+"\n      ")]),null!=e.userDetails.userfollowers?i("div",{staticClass:"sub-font-blue",on:{click:function(t){return e.gotofollow()}}},[e._v("\n        "+e._s(e.userDetails.userfollowers.length)+" followers\n      ")]):e._e()]),i("div",{staticClass:"flex flex-center more-info-item"},[i("q-btn",{staticClass:"button",attrs:{color:"primary",label:"More Info",rounded:"","no-caps":""},on:{click:e.moreInfo}})],1)],1),i("div",{staticClass:"about-section"},[i("q-btn",{staticClass:"float-right pencil",attrs:{flat:"",icon:"app:pencil"},on:{click:e.aboutEdit}}),i("span",{staticClass:"section-header"},[e._v("\n      About\n    ")]),i("div",{staticStyle:{"margin-top":"1rem"}},[i("span",{staticClass:"section-content"},[e._v("\n        "+e._s(e.userprofileDetail.shortdescription)),i("span",{staticClass:"float-right",staticStyle:{color:"#5364B5"}},[e._v("See More")])])])],1),i("div",{staticClass:"my-photos-section"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("span",{staticClass:"section-header"},[e._v("\n          My Photos\n        ")]),e.userDetails.userphotos&&e.userDetails.userphotos.length>0?i("q-btn",{staticClass:"float-right",staticStyle:{color:"#5364B5"},attrs:{flat:""},on:{click:e.viewAllPhoto}},[e._v("View All")]):e._e()],1)]),null!=e.userDetails.userphotos&&e.userDetails.userphotos.length>0?i("div",{staticClass:"row q-col-gutter-none q-ma-none q-pa-none",staticStyle:{"margin-top":"9px"}},e._l(e.userDetails.userphotos.slice(0,6),(function(t){return i("div",{key:"none-"+t.id,staticClass:"col-4"},[t.photo.url.indexOf("http")?i("q-img",{staticClass:"rounded-borders photo",attrs:{src:""+e.baseUrl+t.photo.url,"spinner-color":"white"},on:{click:function(i){return e.getfullScreen(t,e.enlargesec="myphoto")}}}):i("q-img",{staticClass:"rounded-borders photo",attrs:{src:t.photo.url,"spinner-color":"white"},on:{click:function(i){return e.getfullScreen(t,e.enlargesec="myphoto")}}})],1)})),0):i("div",[e._v("No photos uploaded yet")])]),i("div",{staticClass:"newsfeed-section",staticStyle:{width:"100%"}},[i("NewsFeedCard",{attrs:{isProfile:!0}})],1),i("div",{ref:"fullscreenElement",attrs:{id:"image-box-profile"}},[i("FullScreen",{attrs:{details:e.fullscreendata}})],1),i("q-dialog",{model:{value:e.addNewsFeedModel,callback:function(t){e.addNewsFeedModel=t},expression:"addNewsFeedModel"}},[i("AddNewsFeed")],1),i("q-dialog",{attrs:{position:"bottom"},model:{value:e.settingModel,callback:function(t){e.settingModel=t},expression:"settingModel"}},[i("Settings")],1)],1)},s=[],o=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("7f7f"),i("9523")),a=i.n(o),n=i("0cb2"),l=i("9d56"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-card",{staticClass:"roundedNewsFeed"},[i("div",{staticClass:"row items-center no-wrap"},[i("div",{staticClass:"col"},[i("q-card-section",{staticClass:"row items-center q-pb-none"},[i("div",{staticClass:"text-h6"},[e._v("Settings")]),i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),i("q-list",{staticClass:"rounded-borders",staticStyle:{width:"100%","padding-bottom":"45px"},attrs:{bordered:"",padding:""}},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(t){return e.followAction("report")}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"app:create-business-profile"}})],1),i("q-item-section",[e._v("Create my business profile")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(t){return e.followAction("report")}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"app:application-setting"}})],1),i("q-item-section",[e._v("Account settings")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(t){return e.goToPrivacySetting()}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"app:privacy-settings2"}})],1),i("q-item-section",[e._v("Privacy settings")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(t){return e.goToPrivacySetting()}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"app:application-setting"}})],1),i("q-item-section",[e._v("Application settings")])],1),i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(t){return e.followAction("report")}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"app:support"}})],1),i("q-item-section",[e._v("Support")])],1)],1)],1)])])},u=[],f=i("2f62");function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var h={name:"Settings",methods:p(p(p({},Object(f["b"])("header",["setHeader"])),Object(f["b"])("followers",["fetchFollowers","fetchFollowings","updateFollowers"])),{},{setHeaderData:function(e,t,i,r,s,o){this.setHeader({hamburgerIcon:e,backIcon:t,title:i,rightIcon1:r,rightIcon2:s,rightLinkText:o})},goToPrivacySetting:function(){this.$router.push("privacy-setting")}})},m=h,g=(i("4e26"),i("2877")),v=i("f09f"),b=i("a370"),w=i("2c91"),y=i("9c40"),C=i("1c1c"),k=i("66e5"),D=i("4074"),O=i("0016"),q=i("7f67"),_=i("714f"),S=i("eebe"),x=i.n(S),j=Object(g["a"])(m,c,u,!1,null,"425a7770",null),I=j.exports;x()(j,"components",{QCard:v["a"],QCardSection:b["a"],QSpace:w["a"],QBtn:y["a"],QList:C["a"],QItem:k["a"],QItemSection:D["a"],QIcon:O["a"]}),x()(j,"directives",{ClosePopup:q["a"],Ripple:_["a"]});var P=i("d41a"),$=i("bd4c");function F(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function N(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?F(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):F(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var A={name:"Profile",created:function(){this.$root.$on("footerAddIconClick",this.showAddNewsFeedModel),this.$root.$on("headerRightIcon1Click",this.openSetting),this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("onExitFullscreen",this.closeFullScreen),this.$root.$on("onformatDateClick",this.formatDate)},beforeDestroy:function(){this.$root.$off("footerAddIconClick",this.showAddNewsFeedModel),this.$root.$off("headerRightIcon1Click",this.openSetting),this.$root.$off("headerRightIcon2Click",this.gotoSearch),this.$root.$off("onExitFullscreen",this.closeFullScreen),this.$root.$off("onformatDateClick",this.formatDate)},data:function(){return{file:null,addNewsFeedModel:!1,settingModel:!1,albums:{info:[{src:"https://cdn.quasar.dev/img/boy-avatar.png",name:"Meeting",count:"16 photos"},{src:"https://cdn.quasar.dev/img/boy-avatar.png",name:"Me",count:"10 photos"}]},fullscreendata:{url:null,userprofile:null,feedtext:null,created_at:null,likeLength:null,commentLength:null,id:null,likeIcon:null,hideBack:!1},enlargesec:"",start:0,limit:10}},computed:N(N(N(N({},Object(f["c"])("config",["baseUrl"])),Object(f["c"])("country",["countries"])),Object(f["c"])("userprofile",["userprofileDetail","userDetails"])),{},{hasFavoritePhotos:function(){return this.getFevImages(this.userDetails.userphotos).length}}),mounted:function(){this.setHeaderData(!0,!1,"Profile","","","",!0,!0),this.fetchMyNewsfeeds({id:this.userDetails.id,start:this.start,limit:this.limit}),0===this.countries.length&&this.fetchCountries()},methods:N(N(N(N({},Object(f["b"])("header",["setHeader"])),Object(f["b"])("country",["fetchCountries"])),Object(f["b"])("newsfeeds",["fetchMyNewsfeeds"])),{},{setHeaderData:function(e,t,i,r,s,o,a,n){this.setHeader({hamburgerIcon:e,backIcon:t,title:i,rightIcon1:r,rightIcon2:s,rightLinkText:o,notificationIcon:a,searchIcon:n})},moreInfo:function(){this.$router.push("profile-more-info")},profileEdit:function(){this.$router.push("edit-profile")},aboutEdit:function(){this.$router.push("about")},viewAllPhoto:function(){this.$router.push("my-photos")},gotofollow:function(){this.$router.push("followers")},getFevImages:function(e){return null==e?[]:e.filter((function(e){return!0===e.favourite}))},getCountryName:function(e){if(null==e)return"";var t=this.countries.filter((function(t){return t.value===e}));return 0!==t.length?t[0].label:void 0},openSetting:function(){this.settingModel=!0},gotoSearch:function(){this.$router.push("search-result")},showAddNewsFeedModel:function(){this.addNewsFeedModel=!0},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var e=document.getElementById("image-box-profile");e.setAttribute("style","display:none;"),this.fullscreendata.hideBack=!0}},getfullScreen:function(e,t){"myphoto"===t?(e.photo.url.indexOf("http")?this.fullscreendata.url=this.baseUrl+e.photo.url:this.fullscreendata.url=e.photo.url,this.fullscreendata.name=null,this.fullscreendata.created_at=null):(this.fullscreendata.url=e.avatar.url,this.fullscreendata.name=e.firstname+" "+e.lastname,this.fullscreendata.created_at=e.created_at),this.fullscreendata.hideBack=!1,this.fullscreendata.likeLength=null,this.fullscreendata.commentLength=null,this.fullscreendata.id=null,this.fullscreendata.likeIcon=null;var i=document.getElementById("image-box-profile");i.setAttribute("style","display:flex;");var r=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(r).then((function(){var e=document.getElementById("image-box");e.style.display="flex"})).catch((function(e){alert(e)}))},formatDate:function(e){return $["a"].formatDate(e,"DD MMM")+" at "+$["a"].formatDate(e,"hh.mm A")}}),components:{NewsFeedCard:n["a"],AddNewsFeed:l["a"],Settings:I,FullScreen:P["a"]}},M=A,E=(i("98c8"),i("9989")),Q=i("4983"),B=i("068f"),H=i("cb32"),L=i("24e8"),R=i("de5e"),T=Object(g["a"])(M,r,s,!1,null,"d0609472",null);t["default"]=T.exports;x()(T,"components",{QPage:E["a"],QScrollArea:Q["a"],QImg:B["a"],QBtn:y["a"],QAvatar:H["a"],QDialog:L["a"],QPageSticky:R["a"]})},"4e26":function(e,t,i){"use strict";var r=i("00e8"),s=i.n(r);s.a},"98c8":function(e,t,i){"use strict";var r=i("a293"),s=i.n(r);s.a},a293:function(e,t,i){}}]);