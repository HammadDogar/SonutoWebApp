(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0294":function(t,e,a){"use strict";var r=a("307c"),i=a.n(r);i.a},"307c":function(t,e,a){},"358e":function(t,e,a){"use strict";var r=a("fe66"),i=a.n(r);i.a},"4a72":function(t,e,a){},"713b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh lpR fFf"}},[a("offline",{on:{"detected-condition":t.handleConnectivityChange}},[a("div",{attrs:{slot:"online"},slot:"online"},[a("DesktopHeader",{staticClass:"gt-sm"}),a("MobileHeader",{staticClass:"lt-md"}),a("Footer",{staticClass:"mobile-only"}),a("Drawer",{staticClass:"mobile-only"}),a("q-page-container",[a("router-view")],1)],1),a("div",{attrs:{slot:"offline"},slot:"offline"},[a("p",[t._v("You appear to be offline.")])])])],1)},i=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("9523")),o=a.n(n),s=a("05fb"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-drawer",{attrs:{breakpoint:t.breakpoint,behavior:"mobile",bordered:"","content-class":"bg-dark-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[null!=t.userprofileDetail?a("q-list",{attrs:{padding:""}},[a("div",{staticClass:"row items-center no-wrap float-right"},[a("div",{staticClass:"col-auto"},[a("q-btn",{attrs:{flat:"",icon:"clear"},on:{click:function(e){return t.closeLeftDrawer()}}})],1)]),a("div",{staticClass:"row items-center no-wrap"},[a("div",{staticClass:"col"},[a("q-item",{staticStyle:{"padding-top":"10px"}},[a("q-item-section",{attrs:{avatar:""}},[null!=t.userprofileDetail&&null!=t.userprofileDetail.avatar?a("q-avatar",[a("q-img",{staticClass:"rounded-borders",staticStyle:{"padding-bottom":"50% !important"},attrs:{src:""+t.userprofileDetail.avatar.url,"spinner-color":"white"}})],1):t._e(),null!=t.userprofileDetail&&null===t.userprofileDetail.avatar?a("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n              "+t._s(t.userprofileDetail.firstname?t.userprofileDetail.firstname.charAt(0):"")+"\n            ")]):t._e()],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.userprofileDetail.firstname)+"\n              "+t._s(t.userprofileDetail.lastname))]),a("q-item-label",{attrs:{caption:""}},[t._v("United Kingdom")])],1)],1)],1)]),a("q-separator",{staticClass:"q-mb-lg",staticStyle:{"background-color":"#9e9e9e"}}),a("q-btn",{staticClass:"signIn-button dashboardbtn",attrs:{color:"primary",type:"button",label:"Dashboard",rounded:"","no-caps":""},on:{click:t.goToDashboard}}),a("q-separator",{staticClass:"q-mb-lg",staticStyle:{"background-color":"#9e9e9e"}}),t._l(t.links1,(function(e){return a("LeftNavItem",t._b({key:e.title},"LeftNavItem",e,!1))})),a("q-separator",{staticClass:"q-mb-lg"}),t._l(t.links2,(function(e){return a("LeftNavItem",t._b({key:e.title},"LeftNavItem",e,!1))})),a("q-separator",{staticClass:"q-mb-lg"}),t._l(t.links3,(function(e){return a("LeftNavItem",t._b({key:e.title},"LeftNavItem",e,!1))})),a("div",{staticClass:"row items-center no-wrap"},[a("div",{staticClass:"col"},[a("q-item",{staticStyle:{"padding-top":"10px"}},[a("q-item-section",[a("q-btn",{attrs:{flat:"",label:"Logout"},on:{click:function(e){return t.logOut()}}})],1)],1)],1)])],2):t._e()],1)},l=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:""},on:{click:function(e){0===t.childLink.length&&t.goToPage(t.link)}}},["app:home-fill"==t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{staticClass:"newsfeed",attrs:{name:"app:home-fill"}})],1):t._e(),"app:home-fill"==t.icon?a("q-item-section",[a("q-item-label",{staticClass:"parentLabel"},[t._v(t._s(t.title))])],1):t._e(),"app:home-fill"!=t.icon&&0==t.childLink.length?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),"app:home-fill"!=t.icon&&0==t.childLink.length?a("q-item-section",[a("q-item-label",{staticClass:"parentLabel"},[t._v(t._s(t.title))])],1):t._e(),t.childLink.length>0?a("q-expansion-item",{staticClass:"parentLabel expender",attrs:{"default-opened":"","expand-separator":"",icon:t.icon,label:t.title,to:t.link}},t._l(t.childLink,(function(e){return a("q-item",{key:e.title,staticStyle:{"margin-left":"55px"},attrs:{clickable:""},on:{click:function(a){return t.goToPage(e.link)}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[a("q-item-label",{staticClass:"childLabel"},[t._v(t._s(e.title))])],1)],1)})),1):t._e()],1)},p=[],f={name:"LeftNavItem",data:function(){return{none:null}},props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""},childLink:{type:Array,default:function(){return[]}}},methods:{goToPage:function(t){this.$route.path!==t&&this.$router.push(t)}}},m=f,h=(a("cd34"),a("2877")),d=a("66e5"),b=a("4074"),g=a("0016"),v=a("0170"),k=a("3b73"),O=a("eebe"),y=a.n(O),q=Object(h["a"])(m,u,p,!1,null,"8e9f15d2",null),C=q.exports;y()(q,"components",{QItem:d["a"],QItemSection:b["a"],QIcon:g["a"],QItemLabel:v["a"],QExpansionItem:k["a"]});var D=a("2f62");function w(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?w(Object(a),!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var x={name:"Drawer",components:{LeftNavItem:C},created:function(){this.$root.$on("menuButtonClick",this.opentLeftDrawer)},beforeDestroy:function(){this.$root.$off("menuButtonClick",this.opentLeftDrawer)},computed:j({},Object(D["c"])("userprofile",["userprofileDetail"])),methods:j(j({},Object(D["b"])("userprofile",["logout"])),{},{opentLeftDrawer:function(){this.leftDrawerOpen=!0},closeLeftDrawer:function(){this.leftDrawerOpen=!1},logOut:function(){this.logout()},goToDashboard:function(){this.$router.push("/dashboard")}}),data:function(){return{leftDrawerOpen:!1,breakpoint:1023,links1:[{title:"News Feed",icon:"app:home-fill",link:"/newsfeed"},{title:"App Store",icon:"app:app-store",link:"/applications",childLink:[{title:"BMI Calculator",icon:"app:bmi-calculator",link:"/message"},{title:"Blogs",icon:"app:blog",link:"/blogs/Home"},{title:"Fixtures & results",icon:"app:fixture",link:"/profile"}]},{title:"Message",icon:"app:message",link:"/message"},{title:"My Profile",icon:"app:my-profile",link:"/profile"}],links2:[{title:"Create my business profile",icon:"app:business-profile",link:"",childLink:[{title:"Webalactic",icon:"app:business",link:"/message"}]}],links3:[{title:"Settings",icon:"app:setting",link:"",childLink:[{title:"Account settings",icon:"app:business-profile",link:"/account-setting"},{title:"Privacy settings",icon:"app:privacy-setting",link:"/privacy-setting"}]}]}}},_=x,I=(a("0294"),a("9404")),P=a("1c1c"),$=a("9c40"),Q=a("cb32"),S=a("068f"),L=a("eb85"),T=Object(h["a"])(_,c,l,!1,null,"9fb36c9c",null),B=T.exports;y()(T,"components",{QDrawer:I["a"],QList:P["a"],QBtn:$["a"],QItem:d["a"],QItemSection:b["a"],QAvatar:Q["a"],QImg:S["a"],QItemLabel:v["a"],QSeparator:L["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 1!==t.$route.meta.hideheader?a("q-header",{staticClass:"text-white-18 q-pl-none q-pt-none desktop-header"},[a("q-toolbar",[a("img",{staticClass:"logo",attrs:{src:"statics/logos/sonuto-logo.svg"}}),a("q-space"),a("q-input",{staticClass:"search",attrs:{"bg-color":"white",rounded:"",outlined:"",placeholder:"Search..."},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",[a("img",{attrs:{src:"statics/avatars/search-box-avatar.svg"}})])]},proxy:!0}],null,!1,688777860)}),a("q-space"),a("q-avatar",{staticClass:"q-mr-24",attrs:{color:"white",size:"48px"}},[a("img",{attrs:{src:"statics/avatars/comment-avatar.svg"}})]),a("q-avatar",{staticClass:"q-mr-24",attrs:{color:"white",size:"48px"}},[a("img",{attrs:{src:"statics/avatars/bell-avatar.svg"}})]),a("q-avatar",{staticClass:"q-mr-12",attrs:{size:"48px"}},[a("img",{attrs:{src:"statics/avatars/profile-avatar.svg"}})]),a("q-btn",{staticClass:"me",attrs:{"icon-right":"app:down-arrow",flat:"",size:"18px","no-caps":"",label:"Me"}})],1)],1):t._e()},A=[],F={name:"DesktopHeader"},E=F,M=a("e359"),R=a("65c6"),H=a("2c91"),z=a("27f9"),U=Object(h["a"])(E,N,A,!1,null,null,null),J=U.exports;y()(U,"components",{QHeader:M["a"],QToolbar:R["a"],QSpace:H["a"],QInput:z["a"],QIcon:g["a"],QAvatar:Q["a"],QBtn:$["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 1!==t.$route.meta.hideheader?a("q-header",{staticClass:"text-white-18 q-pl-none q-pt-none mobile-header"},[a("q-toolbar",[t.headerData.hamburgerIcon?a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){return t.openLeftDrawer()}}},[a("q-icon",{attrs:{name:"app:hamburger"}})],1):t._e(),t.headerData.backIcon?a("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:t.backButtonClick}},[a("q-icon",{attrs:{name:"app:back"}})],1):t._e(),t.headerData.title?a("label",{staticClass:"home q-ml-md"},[t._v(t._s(t.headerData.title))]):t._e(),a("q-space"),a("q-space"),t.headerData.rightLinkText?a("q-btn",{attrs:{flat:"",label:t.headerData.rightLinkText,size:"20px","no-caps":""},on:{click:t.rightButtonClick}}):t._e(),"send-avatar"==t.headerData.rightIcon2||"right-tick-avatar"==t.headerData.rightIcon2?a("span",[t.headerData.rightIcon2?a("q-avatar",{staticClass:"q-mr-10",attrs:{size:"26px"},on:{click:t.rightIcon2Click}},[a("img",{attrs:{src:"statics/avatars/"+t.headerData.rightIcon2+".svg"}})]):t._e()],1):a("span",[t.headerData.rightIcon2?a("q-avatar",{staticClass:"q-mr-10",attrs:{size:"36px"},on:{click:t.rightIcon2Click}},[a("img",{attrs:{src:"statics/avatars/"+t.headerData.rightIcon2+".svg"}})]):t._e()],1),"three-dots-icon"==t.headerData.rightIcon1||"share-avatar"==t.headerData.rightIcon1?a("span",[t.headerData.rightIcon1?a("q-avatar",{staticClass:"q-mr-10",attrs:{size:"26px"},on:{click:t.rightIcon1Click}},[a("img",{attrs:{src:"statics/avatars/"+t.headerData.rightIcon1+".svg"}})]):t._e()],1):a("span",[t.headerData.rightIcon1?a("q-avatar",{staticClass:"q-mr-10",attrs:{size:"36px"},on:{click:t.rightIcon1Click}},[a("img",{attrs:{src:"statics/avatars/"+t.headerData.rightIcon1+".svg"}})]):t._e()],1),t.headerData.searchIcon?a("span",[a("q-avatar",{staticClass:"q-mr-10",attrs:{size:"36px"},on:{click:function(e){return t.gotoSearch()}}},[a("img",{attrs:{src:"statics/avatars/search-avatar.svg"}})])],1):t._e(),t.headerData.notificationIcon?a("q-btn",{staticClass:"q-ml-md btn-notification",staticStyle:{background:"#A1C6F2"},attrs:{flat:"",dense:"",round:"",icon:"app:bell"},on:{click:function(e){return t.goToNotification()}}},[a("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.getUnreadNotificationsCount()))])],1):t._e()],1)],1):t._e()},W=[],G=(a("7514"),a("2007"));function K(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function Y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?K(Object(a),!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var X={name:"MobileHeader",computed:Y(Y(Y(Y(Y({},Object(D["c"])("header",["headerData"])),Object(D["c"])("userprofile",["userDetails","isAuthenticated"])),Object(D["c"])("notifications",["usernotications"])),Object(D["c"])("chat",["inboxes"])),{},{unreadNotificationsCount:function(){if(0===this.usernotications.length||void 0===this.usernotications)return 0;if(this.usernotications.length>0){var t=[];return t=this.usernotications.filter((function(t){return!1===t.IsViewed})),t.length}return 0}}),created:function(){var t=this;G["b"].on("connect",(function(){})),G["b"].on("notification",(function(e){t.fetchNotifications(t.userDetails.id)})),G["b"].on("receiveMessage",(function(e){if(t.$route.path==="/chat/"+e.msgObj.inbox.id)t.addMessage(e.msgObj),t.seeMessage(e.msgObj.id);else if("/inbox"===t.$route.path){var a=t.inboxes.find((function(t){return parseInt(t.id)===parseInt(e.msgObj.inbox.id)}));void 0!==a?t.updateInbox(e.msgObj):t.fetchInboxes(t.userDetails.id)}}))},mounted:function(){!0===this.$auth.isAuthenticated()&&null!=this.userDetails&&null!=this.userDetails.id&&this.fetchNotifications(this.userDetails.id)},methods:Y(Y(Y(Y({},Object(D["b"])("userprofile",["fetchProfileDetail"])),Object(D["b"])("notifications",["fetchNotifications"])),Object(D["b"])("chat",["addMessage","updateInbox","seeMessage"])),{},{getUnreadNotificationsCount:function(){if(0===this.usernotications.length||void 0===this.usernotications)return 0;if(this.usernotications.length>0){var t=[];return t=this.usernotications.filter((function(t){return!1===t.IsViewed})),t.length}},openLeftDrawer:function(){this.$root.$emit("menuButtonClick")},backButtonClick:function(){this.$router.go(-1)},rightButtonClick:function(){this.$root.$emit("headerRightButtonClick")},rightIcon1Click:function(){this.$root.$emit("headerRightIcon1Click")},rightIcon2Click:function(){this.$root.$emit("headerRightIcon2Click")},goToNotification:function(){this.$router.push("/notification")},gotoSearch:function(){this.$router.push("/search-result")}})},Z=X,tt=(a("358e"),a("58a8")),et=Object(h["a"])(Z,V,W,!1,null,"107cb748",null),at=et.exports;y()(et,"components",{QHeader:M["a"],QToolbar:R["a"],QBtn:$["a"],QIcon:g["a"],QSpace:H["a"],QAvatar:Q["a"],QBadge:tt["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 1!==t.$route.meta.hidefooter?a("q-footer",{staticClass:"bg-white text-primary footer",class:{commentSectionHeight:t.footerData.commentSection}},[t.footerData.commentSection?a("q-card",{staticClass:"newsfeed-card",attrs:{flat:"",bordered:""}},[a("q-separator",{attrs:{inset:""}}),a("q-card-section",{staticClass:"Comment-input"},[a("q-item-section",[a("q-input",{ref:"commentT",attrs:{borderless:"",id:"commentText",placeholder:"Write a comment..."},scopedSlots:t._u([{key:"before",fn:function(){return[null!=t.userprofileDetail.avatar?a("q-avatar",[a("img",{attrs:{src:""+t.userprofileDetail.avatar.url}})]):a("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n              "+t._s(t.userprofileDetail.firstname.charAt(0))+"\n            ")])]},proxy:!0},{key:"after",fn:function(){return[a("q-btn",{staticStyle:{color:"#6B7BC7"},attrs:{round:"",flat:"",icon:"send",disable:0==t.commentText.length},on:{click:t.postComment}})]},proxy:!0}],null,!1,2837320063),model:{value:t.commentText,callback:function(e){t.commentText=e},expression:"commentText"}})],1)],1)],1):t._e(),a("q-tabs",{staticClass:"text-grey",attrs:{"no-caps":"","active-color":"primary","indicator-color":"primary","switch-indicator":"","narrow-indicator":""}},[a("q-route-tab",{attrs:{name:"home",icon:"app:home",to:"/index",exact:""}}),a("q-route-tab",{attrs:{name:"window",icon:"app:window",to:"/applications",exact:""}}),a("q-tab",{attrs:{name:"post",icon:"app:plus"},on:{click:t.addPostButtonClick}}),a("q-route-tab",{attrs:{name:"history",icon:"app:message",to:"/inbox",exact:""}}),a("q-route-tab",{attrs:{name:"person",icon:"app:person",to:"/profile",exact:""}})],1)],1):t._e()},it=[];function nt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function ot(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(a),!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):nt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var st={name:"Footer",created:function(){this.$root.$on("setReplyButtonClick",this.setInputFocus),this.$root.$on("setReplyCommentClick",this.setReplyComment)},beforeDestroy:function(){this.$root.$off("setReplyButtonClick",this.setInputFocus),this.$root.$off("setReplyCommentClick",this.setReplyComment)},data:function(){return{commentText:""}},computed:ot(ot(ot(ot({},Object(D["c"])("footer",["footerData"])),Object(D["c"])("config",["baseUrl"])),Object(D["c"])("userprofile",["userDetails","userprofileDetail"])),Object(D["c"])("newsfeeds",["newsfeeds"])),methods:ot(ot(ot({},Object(D["b"])("footer",["addComment"])),Object(D["b"])("blog",["storeContent"])),{},{postComment:function(){this.addComment(this.commentText),this.commentText="",this.newsfeeds.isNewsFeedComment?this.$root.$emit("savePostReplyButtonClick"):this.$root.$emit("saveCommentButtonClick")},setInputFocus:function(){this.commentText="",this.$refs.commentT.focus()},setReplyComment:function(){this.commentText="@"+this.newsfeeds.selectedReplyComment.userprofile.firstname+" "+this.newsfeeds.selectedReplyComment.userprofile.lastname+",",this.$refs.commentT.focus()},addPostButtonClick:function(){this.$root.$emit("footerAddIconClick")}})},ct=st,lt=(a("7ff3"),a("7ff0")),ut=a("f09f"),pt=a("a370"),ft=a("429b"),mt=a("7867"),ht=a("7460"),dt=Object(h["a"])(ct,rt,it,!1,null,"48b12872",null),bt=dt.exports;function gt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function vt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?gt(Object(a),!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):gt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}y()(dt,"components",{QFooter:lt["a"],QCard:ut["a"],QSeparator:L["a"],QCardSection:pt["a"],QItemSection:b["a"],QInput:z["a"],QAvatar:Q["a"],QBtn:$["a"],QTabs:ft["a"],QRouteTab:mt["a"],QTab:ht["a"]});var kt=["Google","Facebook","Twitter","Apple","Oracle"],Ot={name:"MainLayout",components:{DesktopHeader:J,MobileHeader:at,Footer:bt,Drawer:B,offline:s["a"]},mounted:function(){var t=this;this.$auth.isAuthenticated()&&(this.fetchProfileDetail().then((function(e){t.getUserDetail(t.userDetails.id)})),this.fetchUserProfiles())},computed:vt({},Object(D["c"])("userprofile",["isAuthenticated","userDetails"])),methods:vt(vt({},Object(D["b"])("userprofile",["fetchUserProfiles","fetchProfileDetail","getMyProfileDetail","getUserDetail"])),{},{filterSearchFn:function(t,e,a){var r=this;""===t&&(this.searchOptions=[],a()),setTimeout((function(){e((function(){if(""!==t){var e=t.toLowerCase();r.searchOptions=kt.filter((function(t){return t.toLowerCase().indexOf(e)>-1}))}}))}),1500)},abortFilterSearchFn:function(){},handleConnectivityChange:function(){}})},yt=Ot,qt=a("4d5a"),Ct=a("09e3"),Dt=Object(h["a"])(yt,r,i,!1,null,null,null);e["default"]=Dt.exports;y()(Dt,"components",{QLayout:qt["a"],QPageContainer:Ct["a"]})},"7ff3":function(t,e,a){"use strict";var r=a("8c59"),i=a.n(r);i.a},"8c59":function(t,e,a){},cd34:function(t,e,a){"use strict";var r=a("4a72"),i=a.n(r);i.a},fe66:function(t,e,a){}}]);