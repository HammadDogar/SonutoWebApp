(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{"394f":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",[t.usernotications.length>=1?r("q-card",{attrs:{flat:"",bordered:""}},[r("q-item-label",{staticClass:"title",staticStyle:{margin:"15px","font-size":"20px"}},[t._v(t._s("Follower requests")+" ")]),t._l(t.usernotications,(function(e){return r("q-list",{key:e.id,staticStyle:{width:"100%"}},[""!==t.filterUserProfileData(e.userprofile)?r("q-card",{staticClass:"card-sec",class:[e.IsViewed?"":"unread"],attrs:{flat:"",bordered:""},on:{click:function(r){return t.updateNotification(e.id,e.userprofile,e.Message,e.user)}}},[r("q-item",{staticClass:"q-mb-sm"},[r("q-item-section",{staticStyle:{"padding-right":"10px"},attrs:{avatar:""}},[null!=t.filterUserProfileImage(e.userprofile)?r("q-avatar",{attrs:{size:"38px"}},[r("img",{attrs:{src:""+t.filterUserProfileImage(e.userprofile)}})]):r("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n              "+t._s(t.filterUserProfileData(e.userprofile).charAt(0))+"\n            ")])],1),r("q-item-section",[r("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[r("span",{staticClass:"title",staticStyle:{margin:"auto 0"}},[t._v("\n                "+t._s(t.filterUserProfileData(e.userprofile))+"\n              ")]),r("div",{staticClass:"q-gutter-sm",staticStyle:{display:"flex","justify-content":"space-around"}},[r("q-btn",{attrs:{label:"Accept",color:"primary","no-caps":""},on:{click:function(e){return t.acceptFollow(t.followersRequest)}}}),r("q-btn",{attrs:{label:"Reject",color:"primary","no-caps":""},on:{click:function(e){return t.removeFollow(t.followersRequest)}}})],1)])])],1)],1):t._e()],1)}))],2):t._e(),r("q-card",{attrs:{flat:"",bordered:""}},[r("q-item-label",{staticClass:"title",staticStyle:{margin:"15px","font-size":"20px"}},[t._v(t._s("Follower")+" ")]),t._l(t.usernotications,(function(e){return r("q-list",{key:e.id,staticStyle:{width:"100%"}},[""!==t.filterUserProfileData(e.userprofile)?r("q-card",{staticClass:"card-sec",class:[e.IsViewed?"":"unread"],attrs:{flat:"",bordered:""},on:{click:function(r){return t.updateNotification(e.id,e.userprofile,e.Message,e.user)}}},[r("q-item",{staticClass:"q-mb-sm"},[r("q-item-section",{attrs:{avatar:""}},[null!=t.filterUserProfileImage(e.userprofile)?r("q-avatar",{attrs:{size:"38px"}},[r("img",{attrs:{src:""+t.filterUserProfileImage(e.userprofile)}})]):r("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n              "+t._s(t.filterUserProfileData(e.userprofile).charAt(0))+"\n            ")])],1),r("q-item-section",[r("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[r("span",{staticClass:"title",staticStyle:{margin:"auto 0"}},[t._v("\n                "+t._s(t.filterUserProfileData(e.userprofile))+"\n              ")]),r("div",[r("q-icon",{attrs:{size:"2em",name:t.matMoreHoriz}})],1)])])],1)],1):t._e()],1)}))],2)],1)},a=[],s=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("7514"),r("9523")),o=r.n(s),n=r("2f62"),c=r("06ae");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={name:"notification",data:function(){return{matMoreHoriz:null}},created:function(){this.matMoreHoriz=c["a"]},computed:f(f({},Object(n["c"])("userprofile",["userprofiles","userDetails","userprofileDetail"])),Object(n["c"])("notifications",["usernotications"])),mounted:function(){this.setHeaderData(!0,!1,"Followers","","","",!0,!0),this.fetchNotifications(this.userDetails.id)},methods:f(f(f({},Object(n["b"])("header",["setHeader"])),Object(n["b"])("notifications",["fetchNotifications","putNotification"])),{},{setHeaderData:function(t,e,r,i,a,s,o,n){this.setHeader({hamburgerIcon:t,backIcon:e,title:r,rightIcon1:i,rightIcon2:a,rightLinkText:s,notificationIcon:o,searchIcon:n})},updateNotification:function(t,e,r,i){var a=this;this.putNotification({notificationId:t,userprofileId:e,message:r,userId:i}).then((function(){a.fetchNotifications(a.userDetails.id)}))},redirectToFollowRequests:function(){this.$router.push("my-photos")},viewcomments:function(t){this.$router.push(t.URL)},filterUserProfileData:function(t){var e=this.userprofiles.find((function(e){return e.id===t}));return null!=e?e.firstname+" "+e.lastname:""},filterUserProfileImage:function(t){var e=this.userprofiles.find((function(e){return e.id===t}));return null!=e&&null!=e.avatar?e.avatar.url:null},getNotificationReceiveTime:function(t){var e=new Date(t),r=new Date,i=(r.getTime()-e.getTime())/1e3;return i>60?(i/=60,i>60?(i/=60,i>60?Math.floor(i/=24)+" Days ago":Math.floor(i)+" Hours ago"):Math.floor(i)+" Min ago"):Math.floor(i)+" secound ago"}})},p=u,d=r("2877"),m=r("9989"),b=r("f09f"),h=r("0170"),g=r("1c1c"),y=r("66e5"),v=r("4074"),w=r("cb32"),q=r("9c40"),O=r("0016"),P=r("eebe"),j=r.n(P),D=Object(d["a"])(p,i,a,!1,null,"cc1dd3ca",null);e["default"]=D.exports;j()(D,"components",{QPage:m["a"],QCard:b["a"],QItemLabel:h["a"],QList:g["a"],QItem:y["a"],QItemSection:v["a"],QAvatar:w["a"],QBtn:q["a"],QIcon:O["a"]})}}]);