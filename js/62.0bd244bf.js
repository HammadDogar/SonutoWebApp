(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[62],{4336:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return null!=e.profileDetail?i("q-page",{staticClass:"page"},[!0!==e.privacySetting.IsPrivate||e.verifyFollower(e.profileDetail.id)&&!0===e.privacySetting.IsPrivate?i("div",{staticClass:"favorite-pic-section"},[i("q-scroll-area",{staticClass:"scroll",attrs:{horizontal:""}},[i("div",{staticClass:"row no-wrap item-section"},e._l(e.getFevImages(e.profileDetail.userphotos),(function(t){return i("div",{key:t.id,staticClass:"item"},[i("q-img",{staticClass:"rounded-borders fev-image",attrs:{src:""+e.baseUrl+t.photo.url,"spinner-color":"white"}})],1)})),0)])],1):e._e(),i("div",{staticClass:"avatar-section row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"flex flex-center avatar-item"},[null!=e.profileDetail&&null!=e.profileDetail.avatar?i("q-img",{staticClass:"rounded-borders",staticStyle:{height:"126px",width:"126px","border-radius":"126px"},attrs:{src:""+e.profileDetail.avatar.url,"spinner-color":"white"},on:{click:function(t){return e.getfullScreen(e.profileDetail,e.enlargesec="profile")}}}):e.profileDetail.firstname?i("q-avatar",{staticStyle:{height:"126px",width:"126px"},attrs:{color:"primary","text-color":"white"}},[e._v("\n          "+e._s(e.profileDetail.firstname.charAt(0))+" "+e._s(e.profileDetail.lastname.charAt(0))+"\n        ")]):e._e()],1)]),i("div",{staticClass:"col-12"},[i("div",{staticClass:"text-center title-item"},[e._v("\n        "+e._s(e.profileDetail.firstname)+" "+e._s(e.profileDetail.lastname)+"\n      ")])]),i("div",{staticClass:"col-12"},[i("div",{staticClass:"text-center sub-title-item"},[e._v("\n        "+e._s(e.profileDetail.employer)+" "),e.profileDetail.employer&&e.profileDetail.school?i("span",[e._v(" /  ")]):e._e(),e._v("\n        "+e._s(e.profileDetail.school)+"\n      ")])]),i("div",{staticClass:"col-12"},[i("div",{staticClass:"text-center country-item"},[e.profileDetail.country?i("span",[e._v("\n          "+e._s(e.profileDetail.country.name)+"\n        ")]):e._e(),i("span",{staticClass:"sub-font-blue"},[e._v(" "+e._s(e.acceptedFollowers.length)+" followers ")])])]),!0!==e.privacySetting.IsPrivate||e.verifyFollower(e.profileDetail.id)&&!0===e.privacySetting.IsPrivate?i("div",{staticClass:"col-12"},[i("div",{staticClass:"more-info-item"},[i("q-btn",{staticClass:"button",attrs:{color:"primary",label:"More Info",rounded:"","no-caps":""},on:{click:e.moreInfo}})],1)]):e._e(),e.verifyFollower(e.profileDetail.id)?i("div",{staticClass:"col-12 text-center"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-6 text-center"},[i("q-btn",{staticClass:"button default-button",staticStyle:{background:"#E49635",color:"white","margin-left":"16px"},attrs:{label:"Following",rounded:"","no-caps":""},on:{click:e.unFollow}})],1),i("div",{staticClass:"col-6 text-center"},[i("q-btn",{staticClass:"button default-button",staticStyle:{color:"#000000"},attrs:{outline:"",color:"primary",label:"Message",rounded:"","no-caps":""},on:{click:e.messageUser}})],1)])]):i("div",{staticClass:"col-12"},[i("div",{staticClass:"more-info-item"},[e.verifyFollowerPending(e.profileDetail.id)?i("q-btn",{staticClass:"button",attrs:{outline:"",color:"primary",label:"Requested",disable:"",rounded:"","no-caps":""}}):i("q-btn",{staticClass:"button",staticStyle:{background:"#E49635",color:"white"},attrs:{label:"Follow",rounded:"","no-caps":""},on:{click:e.follow}})],1)])]),i("div",{staticClass:"about-section"},[i("span",{staticClass:"section-header"},[e._v("\n      About\n    ")]),i("div",{staticStyle:{"margin-top":"1rem"}},[i("span",{staticClass:"section-content"},[e._v("\n        "+e._s(e.profileDetail.shortdescription)+"\n      ")])])]),!0!==e.privacySetting.IsPrivate||e.verifyFollower(e.profileDetail.id)&&!0===e.privacySetting.IsPrivate?i("div",{staticClass:"my-photos-section"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("span",{staticClass:"section-header"},[e._v("\n          My Photos\n        ")])])]),i("div",{staticClass:"row q-col-gutter-none q-ma-none q-pa-none",staticStyle:{"margin-top":"9px"}},e._l(e.photos.slice(0,6),(function(t){return i("div",{key:"none-"+t.id,staticClass:"col-4"},[t.photo.url.indexOf("http")?i("q-img",{staticClass:"rounded-borders photo",attrs:{src:""+e.baseUrl+t.photo.url,"spinner-color":"white"},on:{click:function(i){return e.getfullScreen(t,e.enlargesec="myphoto")}}}):i("q-img",{staticClass:"rounded-borders photo",attrs:{src:t.photo.url,"spinner-color":"white"},on:{click:function(i){return e.getfullScreen(t,e.enlargesec="myphoto")}}})],1)})),0)]):e._e(),e.verifyFollower(e.profileDetail.id)?i("div",{staticClass:"newsfeed-section",staticStyle:{width:"100%"}},[i("NewsFeedCard",{attrs:{isProfile:!0}})],1):e._e(),i("div",{ref:"fullscreenElement",staticClass:"display-none",attrs:{id:"image-box-userprofile"}},[i("FullScreen",{attrs:{details:e.fullscreendata}})],1)]):e._e()},o=[],s=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("7f7f"),i("9523")),l=i.n(s),a=(i("c5f6"),i("0cb2")),n=i("2f62"),c=i("d41a"),u=i("bd4c"),f=i("2007");function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){l()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var p={name:"Profile",props:{id:Number},data:function(){return{file:null,privacySetting:{},albums:{info:[{src:"https://cdn.quasar.dev/img/boy-avatar.png",name:"Meeting",count:"16 photos"},{src:"https://cdn.quasar.dev/img/boy-avatar.png",name:"Me",count:"10 photos"}]},fullscreendata:{url:null,userprofile:null,feedtext:null,created_at:null,likeLength:null,commentLength:null,id:null,likeIcon:null,hideBack:!1},enlargesec:"",start:0,limit:10}},watch:{"$route.params.id":function(){this.loadProfile()}},created:function(){this.$root.$on("headerRightIcon1Click",this.gotoSearch),this.$root.$on("onExitFullscreen",this.closeFullScreen),this.$root.$on("onformatDateClick",this.formatDate)},beforeDestroy:function(){this.$root.$off("headerRightIcon1Click",this.gotoSearch),this.$root.$off("onExitFullscreen",this.closeFullScreen),this.$root.$off("onformatDateClick",this.formatDate)},computed:h(h(h(h(h({},Object(n["c"])("config",["baseUrl"])),Object(n["c"])("country",["countries"])),Object(n["c"])("userprofile",["profileDetail","userDetails"])),Object(n["c"])("userphoto",["photos"])),Object(n["c"])("followers",["acceptedFollowers","followings"])),mounted:function(){this.setHeaderData(!0,!1,"Profile","","","",!0,!0),this.loadProfile(),0===this.countries.length&&this.fetchCountries()},methods:h(h(h(h(h(h(h(h(h(h({},Object(n["b"])("header",["setHeader"])),Object(n["b"])("country",["fetchCountries"])),Object(n["b"])("privacysettings",["fetchUserPrivacySettings"])),Object(n["b"])("newsfeeds",["fetchMyNewsfeeds"])),Object(n["b"])("userprofile",["getProfileDetailById","getUserDetail"])),Object(n["b"])("userphoto",["getPhotos"])),Object(n["b"])("notifications",["postNotifications"])),Object(n["b"])("followers",["fetchFollowings","fetchFollowers","addFollowers","addFollowing","getFollower","removeFollowing","removeFollower"])),Object(n["b"])("chat",["createInbox"])),{},{setHeaderData:function(e,t,i,r,o,s,l,a){this.setHeader({hamburgerIcon:e,backIcon:t,title:i,rightIcon1:r,rightIcon2:o,rightLinkText:s,notificationIcon:l,searchIcon:a})},loadProfile:function(){var e=this;this.getProfileDetailById(this.$route.params.id).then((function(t){e.fetchMyNewsfeeds({id:e.profileDetail.user.id,start:e.start,limit:e.limit}),e.fetchFollowings(e.profileDetail.user.id),e.fetchFollowers(e.profileDetail.user.id),e.getPhotos(e.profileDetail.user.id),e.fetchUserPrivacySettings(e.profileDetail.id).then((function(t){e.privacySetting=t[0]}))}))},viewAllPhoto:function(){this.$router.push("my-photos")},getFevImages:function(e){return null==e?"":e.filter((function(e){return!0===e.Favourite}))},getCountryName:function(e){if(null==e)return"";var t=this.countries.filter((function(t){return t.value===e}));return 0!==t.length?t[0].label:void 0},moreInfo:function(){this.$router.push("/user-profile-more-info")},verifyFollower:function(e){if(void 0!==e){if(this.userDetails.userfollowings&&this.userDetails.userfollowings.length>0)var t=this.userDetails.userfollowings.filter((function(t){return t.following===e&&"Accepted"===t.status}));return!(!t||void 0===t)}},verifyFollowerPending:function(e){if(void 0!==e){if(this.userDetails.userfollowings.length>0)var t=this.userDetails.userfollowings.filter((function(t){return t.following===e&&"Pending"===t.status}));return!(!t||void 0===t)}},follow:function(){var e,t=this,i="Accepted";i=!0===(null===(e=this.privacySetting)||void 0===e?void 0:e.IsPrivate)?"Pending":"Accepted",this.addFollowers({user:this.profileDetail.user.id,status:i,follower:this.userDetails.userprofile.id}),this.addFollowing({user:this.userDetails.id,status:i,following:this.profileDetail.id}).then((function(){f["b"].emit("sendNotification",{text:"You received a follower request",to:t.profileDetail.id}),t.postNotifications({message:"You received a follower request",userprofileId:t.userDetails.userprofile.id,userId:t.profileDetail.user.id,url:"followers/"}),t.createInbox({userFirst:t.userDetails.id,userSecond:t.profileDetail.user.id}),t.getUserDetail(t.userDetails.id)}))},unFollow:function(){var e=this,t=this.userDetails.userfollowings.filter((function(t){return t.following===e.profileDetail.id&&"Accepted"===t.status}));this.removeFollowing(t[0].id).then((function(){e.getUserDetail(e.userDetails.id)})),this.getFollower({followerId:this.userDetails.userprofile.id,userId:this.profileDetail.user.id}).then((function(t){e.removeFollower(t[0].id)}))},gotoSearch:function(){this.$router.push("/search-result")},formatDate:function(e){return u["a"].formatDate(e,"DD MMM")+" at "+u["a"].formatDate(e,"hh.mm A")},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var e=document.getElementById("image-box-userprofile");e.setAttribute("style","display:none;"),this.fullscreendata.hideBack=!0}},getfullScreen:function(e,t){"myphoto"===t?(e.photo.url.indexOf("http")?this.fullscreendata.url=this.baseUrl+e.photo.url:this.fullscreendata.url=e.photo.url,this.fullscreendata.name=null,this.fullscreendata.created_at=null):(this.fullscreendata.url=e.avatar.url,this.fullscreendata.name=e.firstname+" "+e.lastname,this.fullscreendata.created_at=e.created_at),this.fullscreendata.hideBack=!1,this.fullscreendata.likeLength=null,this.fullscreendata.commentLength=null,this.fullscreendata.id=null,this.fullscreendata.likeIcon=null;var i=document.getElementById("image-box-userprofile");i.setAttribute("style","display:flex;");var r=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(r).then((function(){})).catch((function(e){alert(e)}))},messageUser:function(){var e=this;this.createInbox({userFirst:this.userDetails.id,userSecond:this.profileDetail.user.id}).then((function(t){e.$router.push("/chat/"+t.id)}))}}),components:{NewsFeedCard:a["a"],FullScreen:c["a"]}},g=p,v=(i("cbfc"),i("2877")),m=i("9989"),b=i("4983"),w=i("068f"),D=i("cb32"),y=i("9c40"),C=i("eebe"),F=i.n(C),S=Object(v["a"])(g,r,o,!1,null,"6043d734",null);t["default"]=S.exports;F()(S,"components",{QPage:m["a"],QScrollArea:b["a"],QImg:w["a"],QAvatar:D["a"],QBtn:y["a"]})},5951:function(e,t,i){},cbfc:function(e,t,i){"use strict";var r=i("5951"),o=i.n(r);o.a}}]);