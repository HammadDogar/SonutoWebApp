(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{"1b2e":function(t,e,i){"use strict";var r=i("5afd"),a=i.n(r);a.a},"5afd":function(t,e,i){},c5fd:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",[i("q-card",{attrs:{flat:"",bordered:""}},[i("div",{staticClass:"col-6 ",staticStyle:{margin:"10px"}},[i("p",{staticClass:"button default-button",staticStyle:{border:"none",color:"#878787","margin-left":"16px","font-weight":"700","font-size":"16px"},attrs:{label:"Follow Requests","no-caps":""},on:{click:t.redirectToFollowRequests}},[t._v("\n        "+t._s("Follow Requests"))])])]),t.usernotications.length>=1?i("q-card",{attrs:{flat:"",bordered:""}},t._l(t.usernotications,(function(e){return i("q-list",{key:e.id,staticStyle:{width:"100%"}},[i("q-card",{staticClass:"card-sec",class:[e.IsViewed?"":"unread"],attrs:{flat:"",bordered:""},on:{click:function(i){return t.updateNotification(e.id,e.userprofile,e.Message,e.user)}}},[i("q-item",{staticClass:"q-mb-sm"},[i("q-item-section",{attrs:{avatar:""}},[null!=t.filterUserProfileImage(e.userprofile)?i("q-avatar",{attrs:{size:"38px"}},[i("img",{attrs:{src:""+t.filterUserProfileImage(e.userprofile)}})]):i("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n              "+t._s(t.filterUserProfileData(e.userprofile).charAt(0))+"\n            ")])],1),i("q-item-section",{on:{click:function(i){return t.viewcomments(e)}}},[i("q-item-label",{staticClass:"title"},[t._v("\n              "+t._s(t.filterUserProfileData(e.userprofile))+" "),i("span",[i("small",{staticClass:"small-title"},[t._v("("+t._s(t.getNotificationReceiveTime(e.created_at))+")")])])]),i("q-item-label",{staticClass:"sub-title"},[t._v(t._s(e.Message)+" ")])],1)],1)],1)],1)})),1):t._e(),t.usernotications.length<=0?i("q-card",{staticStyle:{height:"calc(100vh - 50px)"},attrs:{flat:"",bordered:""}},[i("q-card",{staticClass:"card-sec"},[i("p",{staticClass:"text-center title"},[t._v("\n        "+t._s("No Notification")+"\n      ")])])],1):t._e()],1)},a=[],o=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("7514"),i("9523")),s=i.n(o),n=i("2f62");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){s()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={name:"notification",data:function(){return{}},computed:l(l({},Object(n["c"])("userprofile",["userprofiles","userDetails","userprofileDetail"])),Object(n["c"])("notifications",["usernotications"])),mounted:function(){this.setHeaderData(!0,!1,"Notification","","","",!0,!0),this.fetchNotifications(this.userDetails.id)},methods:l(l(l({},Object(n["b"])("header",["setHeader"])),Object(n["b"])("notifications",["fetchNotifications","putNotification"])),{},{setHeaderData:function(t,e,i,r,a,o,s,n){this.setHeader({hamburgerIcon:t,backIcon:e,title:i,rightIcon1:r,rightIcon2:a,rightLinkText:o,notificationIcon:s,searchIcon:n})},updateNotification:function(t,e,i,r){var a=this;this.putNotification({notificationId:t,userprofileId:e,message:i,userId:r}).then((function(){a.fetchNotifications(a.userDetails.id)}))},redirectToFollowRequests:function(){this.$router.push("follow-request-notifications")},viewcomments:function(t){this.$router.push(t.URL)},filterUserProfileData:function(t){var e=this.userprofiles.find((function(e){return e.id===t}));return null!=e?e.firstname+" "+e.lastname:""},filterUserProfileImage:function(t){var e=this.userprofiles.find((function(e){return e.id===t}));return null!=e&&null!=e.avatar?e.avatar.url:null},getNotificationReceiveTime:function(t){var e=new Date(t),i=new Date,r=(i.getTime()-e.getTime())/1e3;return r>60?(r/=60,r>60?(r/=60,r>60?Math.floor(r/=24)+" Days ago":Math.floor(r)+" Hours ago"):Math.floor(r)+" Min ago"):Math.floor(r)+" secound ago"}})},u=f,d=(i("1b2e"),i("2877")),p=i("9989"),b=i("f09f"),h=i("1c1c"),m=i("66e5"),g=i("4074"),v=i("cb32"),w=i("0170"),O=i("eebe"),q=i.n(O),y=Object(d["a"])(u,r,a,!1,null,"108a0d2f",null);e["default"]=y.exports;q()(y,"components",{QPage:p["a"],QCard:b["a"],QList:h["a"],QItem:m["a"],QItemSection:g["a"],QAvatar:v["a"],QItemLabel:w["a"]})}}]);