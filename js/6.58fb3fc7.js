(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"669b":function(t,e,o){"use strict";var n=o("8220"),i=o.n(n);i.a},"713b":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"hHh lpR fFf"}},[o("offline",{on:{"detected-condition":t.handleConnectivityChange}},[o("div",{attrs:{slot:"online"},slot:"online"},[o("MobileHeader"),o("Footer",{}),o("Drawer",{}),o("q-page-container",{staticClass:"page-wrapper-container"},[o("router-view")],1)],1),o("div",{attrs:{slot:"offline"},slot:"offline"},[o("p",[t._v("You appear to be offline.")])])])],1)},i=[],a=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("9523")),r=o.n(a),s=o("05fb"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-drawer",{attrs:{breakpoint:t.breakpoint,behavior:"mobile",bordered:"","content-class":"bg-dark-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[null!=t.userprofileDetail?o("q-list",{attrs:{padding:""}},[o("div",{staticClass:"row items-center no-wrap float-right"},[o("div",{staticClass:"col-auto"},[o("q-btn",{attrs:{flat:"",icon:"clear"},on:{click:function(e){return t.closeLeftDrawer()}}})],1)]),o("div",{staticClass:"row items-center no-wrap"},[o("div",{staticClass:"col"},[o("q-item",{staticStyle:{"padding-top":"10px"}},[o("q-item-section",{attrs:{avatar:""}},[null!=t.userprofileDetail&&null!=t.userprofileDetail.avatar?o("q-avatar",[o("q-img",{staticClass:"rounded-borders",staticStyle:{"padding-bottom":"50% !important"},attrs:{src:""+t.userprofileDetail.avatar.url,"spinner-color":"white"}})],1):t._e(),null!=t.userprofileDetail&&null===t.userprofileDetail.avatar?o("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n                "+t._s(t.userprofileDetail.firstname?t.userprofileDetail.firstname.charAt(0):"")+"\n              ")]):t._e()],1),o("q-item-section",[o("q-item-label",[t._v(t._s(t.userprofileDetail.firstname)+"\n                "+t._s(t.userprofileDetail.lastname))]),o("q-item-label",{attrs:{caption:""}},[t._v("United Kingdom")])],1)],1)],1)]),o("q-separator",{staticClass:"q-mb-lg",staticStyle:{"background-color":"#9e9e9e"}}),o("q-btn",{staticClass:"signIn-button dashboardbtn",attrs:{color:"primary",type:"button",label:"Dashboard",rounded:"","no-caps":""},on:{click:t.goToDashboard}}),o("q-separator",{staticClass:"q-mb-lg",staticStyle:{"background-color":"#9e9e9e"}}),t._l(t.links1,(function(e){return o("LeftNavItem",t._b({key:e.title,on:{"hide-drawer":function(e){return t.closeLeftDrawer()}}},"LeftNavItem",e,!1))})),o("q-separator",{staticClass:"q-mb-lg"}),t._l(t.links2,(function(e){return o("LeftNavItem",t._b({key:e.title,on:{"hide-drawer":function(e){return t.closeLeftDrawer()}}},"LeftNavItem",e,!1))})),o("q-separator",{staticClass:"q-mb-lg"}),t._l(t.links3,(function(e){return o("LeftNavItem",t._b({key:e.title,on:{"hide-drawer":function(e){return t.closeLeftDrawer()}}},"LeftNavItem",e,!1))})),o("div",{staticClass:"row items-center no-wrap"},[o("div",{staticClass:"col"},[o("q-item",{staticStyle:{"padding-top":"10px"}},[o("q-item-section",[o("q-btn",{attrs:{flat:"",label:"Logout"},on:{click:function(e){return t.logOut()}}})],1)],1)],1)])],2):t._e()],1)},l=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-item",{attrs:{clickable:""},on:{click:function(e){0===t.childLink.length&&t.goToPage(t.link)}}},["app:home-fill"==t.icon?o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{staticClass:"newsfeed",attrs:{name:"app:home-fill"}})],1):t._e(),"app:home-fill"==t.icon?o("q-item-section",[o("q-item-label",{staticClass:"parentLabel"},[t._v(t._s(t.title))])],1):t._e(),"app:home-fill"!=t.icon&&0==t.childLink.length?o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:t.icon}})],1):t._e(),"app:home-fill"!=t.icon&&0==t.childLink.length?o("q-item-section",[o("q-item-label",{staticClass:"parentLabel"},[t._v(t._s(t.title))])],1):t._e(),t.childLink.length>0?o("q-expansion-item",{staticClass:"parentLabel expender",attrs:{"default-opened":"","expand-separator":"",icon:t.icon,label:t.title,to:t.link}},t._l(t.childLink,(function(e){return o("div",{key:e.title},[e.show?o("q-item",{staticStyle:{"margin-left":"55px"},attrs:{clickable:""},on:{click:function(o){return t.goToPage(e.link)}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:e.icon}})],1),o("q-item-section",[o("q-item-label",{staticClass:"childLabel"},[t._v(t._s(e.title))])],1)],1):t._e()],1)})),0):t._e(),o("q-dialog",{model:{value:t.comingSoonModel,callback:function(e){t.comingSoonModel=e},expression:"comingSoonModel"}},[o("AppComingSoon",{on:{"hide-modal":function(e){t.comingSoonModel=!1}}})],1)],1)},f=[],p=o("48a3"),h={name:"LeftNavItem",data:function(){return{none:null,comingSoonModel:!1}},props:{title:{type:String,required:!0},link:{type:String,default:"#"},icon:{type:String,default:""},childLink:{type:Array,default:function(){return[]}}},methods:{goToPage:function(t){"/comingSoon"===t?this.comingSoonModel=!0:this.$route.path!==t?this.$router.push(t):this.$route.path===t&&this.$emit("hide-drawer")}},components:{AppComingSoon:p["a"]}},m=h,d=(o("b405"),o("2877")),b=o("66e5"),g=o("4074"),v=o("0016"),k=o("0170"),O=o("3b73"),w=o("24e8"),y=o("eebe"),D=o.n(y),C=Object(d["a"])(m,u,f,!1,null,"4b2ad04c",null),q=C.exports;D()(C,"components",{QItem:b["a"],QItemSection:g["a"],QIcon:v["a"],QItemLabel:k["a"],QExpansionItem:O["a"],QDialog:w["a"]});var j=o("2f62");function _(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function x(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?_(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):_(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var I={name:"Drawer",components:{LeftNavItem:q},created:function(){this.$root.$on("menuButtonClick",this.opentLeftDrawer)},beforeDestroy:function(){this.$root.$off("menuButtonClick",this.opentLeftDrawer)},computed:x({},Object(j["c"])("userprofile",["userprofileDetail","userRoles"])),methods:x(x({},Object(j["b"])("userprofile",["logout"])),{},{opentLeftDrawer:function(){this.leftDrawerOpen=!0},closeLeftDrawer:function(){this.leftDrawerOpen=!1},logOut:function(){this.logout()},goToDashboard:function(){this.$router.push("/dashboard")}}),data:function(){return{leftDrawerOpen:!1,breakpoint:1023,links1:[{title:"News Feed",icon:"app:home-fill",link:"/newsfeed",show:!0},{title:"Applications",icon:"app:app-store",link:"/applications",childLink:[{title:"Blogs",icon:"app:blog",link:"/blogs/Home",show:!0},{title:"Vlogs",icon:"app:vlog",link:"/vlogs/Home",show:!0},{title:"BMI Calculator",icon:"app:bmi-calculator",link:"/comingSoon",show:!0},{title:"Fixtures & results",icon:"app:fixture",link:"/comingSoon",show:!0}]},{title:"Message",icon:"app:message",link:"/inbox",show:!0},{title:"My Profile",icon:"app:my-profile",link:"/profile",show:!0}],links2:[{title:"Create my business profile",icon:"app:business-profile",link:"",childLink:[{title:"Webalactic",icon:"app:business",link:"/comingSoon",show:!0}]}],links3:[{title:"Settings",icon:"app:setting",link:"",childLink:[{title:"Account settings",icon:"app:business-profile",link:"/account-setting",show:!0},{title:"Privacy settings",icon:"app:privacy-setting",link:"/privacy-setting",show:!0},{title:"Manage Roles",icon:"app:my-profile",link:"/manage-roles",show:!1},{title:"Manage Blogs",icon:"app:blog",link:"/manage-blogs",show:!1},{title:"Manage Vlogs",icon:"app:vlog",link:"/manage-blogs?isForVlog=true",show:!1}]}]}}},P=I,S=(o("9fe6"),o("9404")),$=o("1c1c"),L=o("9c40"),Q=o("cb32"),T=o("068f"),B=o("eb85"),M=Object(d["a"])(P,c,l,!1,null,"3bbde177",null),N=M.exports;D()(M,"components",{QDrawer:S["a"],QList:$["a"],QBtn:L["a"],QItem:b["a"],QItemSection:g["a"],QAvatar:Q["a"],QImg:T["a"],QItemLabel:k["a"],QSeparator:B["a"]});var A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return 1!==t.$route.meta.hideheader?o("q-header",{staticClass:"text-white-18 q-pl-none q-pt-none mobile-header"},[o("q-toolbar",{staticClass:"full-height"},[t.headerData.hamburgerIcon?o("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){return t.openLeftDrawer()}}},[o("q-icon",{attrs:{name:"app:hamburger"}})],1):t._e(),t.headerData.backIcon?o("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:t.backButtonClick}},[o("q-icon",{attrs:{name:"app:back"}})],1):t._e(),t.headerData.title?o("label",{staticClass:"home q-ml-md"},[t._v(t._s(t.headerData.title))]):t._e(),o("q-space"),o("q-space"),t.headerData.rightLinkText?o("q-btn",{attrs:{flat:"",label:t.headerData.rightLinkText,size:"20px","no-caps":""},on:{click:t.rightButtonClick}}):t._e(),"send-avatar"==t.headerData.rightIcon2||"right-tick-avatar"==t.headerData.rightIcon2?o("span",[t.headerData.rightIcon2?o("q-avatar",{staticClass:"q-mr-10",attrs:{size:"26px"},on:{click:t.rightIcon2Click}},[o("img",{attrs:{src:"statics/avatars/"+t.headerData.rightIcon2+".svg"}})]):t._e()],1):o("span",[t.headerData.rightIcon2?o("q-avatar",{staticClass:"q-mr-10",attrs:{size:"36px"},on:{click:t.rightIcon2Click}},[o("img",{attrs:{src:"statics/avatars/"+t.headerData.rightIcon2+".svg"}})]):t._e()],1),"three-dots-icon"==t.headerData.rightIcon1||"share-avatar"==t.headerData.rightIcon1?o("span",[t.headerData.rightIcon1?o("q-avatar",{staticClass:"q-mr-10",attrs:{size:"26px"},on:{click:t.rightIcon1Click}},[o("img",{attrs:{src:"statics/avatars/"+t.headerData.rightIcon1+".svg"}})]):t._e()],1):o("span",[t.headerData.rightIcon1?o("q-avatar",{staticClass:"q-mr-10",attrs:{size:"36px"},on:{click:t.rightIcon1Click}},[o("img",{attrs:{src:"statics/avatars/"+t.headerData.rightIcon1+".svg"}})]):t._e()],1),t.headerData.searchIcon?o("span",[o("q-avatar",{staticClass:"q-mr-10",attrs:{size:"36px"},on:{click:function(e){return t.gotoSearch()}}},[o("img",{attrs:{src:"statics/avatars/search-avatar.svg"}})])],1):t._e(),t.headerData.notificationIcon?o("q-btn",{staticClass:"q-ml-md btn-notification",staticStyle:{background:"#A1C6F2"},attrs:{flat:"",dense:"",round:"",icon:"app:bell"},on:{click:function(e){return t.goToNotification()}}},[o("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.getUnreadNotificationsCount()))])],1):t._e()],1)],1):t._e()},F=[],R=(o("7514"),o("2007"));function E(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function H(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?E(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):E(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var U={name:"MobileHeader",computed:H(H(H(H(H({},Object(j["c"])("header",["headerData"])),Object(j["c"])("userprofile",["userDetails","isAuthenticated"])),Object(j["c"])("notifications",["usernotications"])),Object(j["c"])("chat",["inboxes"])),{},{unreadNotificationsCount:function(){if(0===this.usernotications.length||void 0===this.usernotications)return 0;if(this.usernotications.length>0){var t=[];return t=this.usernotications.filter((function(t){return!1===t.IsViewed})),t.length}return 0}}),created:function(){var t=this;R["b"].on("connect",(function(){})),R["b"].on("notification",(function(e){t.fetchNotifications(t.userDetails.id)})),R["b"].on("receiveMessage",(function(e){if(t.$route.path==="/chat/"+e.msgObj.inbox.id)t.addMessage(e.msgObj),t.seeMessage(e.msgObj.id);else if("/inbox"===t.$route.path){var o=t.inboxes.find((function(t){return parseInt(t.id)===parseInt(e.msgObj.inbox.id)}));void 0!==o?t.updateInbox(e.msgObj):t.fetchInboxes(t.userDetails.id)}}))},mounted:function(){!0===this.$auth.isAuthenticated()&&null!=this.userDetails&&null!=this.userDetails.id&&this.fetchNotifications(this.userDetails.id)},methods:H(H(H(H({},Object(j["b"])("userprofile",["fetchProfileDetail"])),Object(j["b"])("notifications",["fetchNotifications"])),Object(j["b"])("chat",["addMessage","updateInbox","seeMessage"])),{},{getUnreadNotificationsCount:function(){if(0===this.usernotications.length||void 0===this.usernotications)return 0;if(this.usernotications.length>0){var t=[];return t=this.usernotications.filter((function(t){return!1===t.IsViewed})),t.length}},openLeftDrawer:function(){this.$root.$emit("menuButtonClick")},backButtonClick:function(){this.$router.go(-1)},rightButtonClick:function(){this.$root.$emit("headerRightButtonClick")},rightIcon1Click:function(){this.$root.$emit("headerRightIcon1Click")},rightIcon2Click:function(){this.$root.$emit("headerRightIcon2Click")},goToNotification:function(){this.$router.push("/notification")},gotoSearch:function(){this.$router.push("/search-result")}})},z=U,V=(o("669b"),o("e359")),J=o("65c6"),W=o("2c91"),G=o("58a8"),K=Object(d["a"])(z,A,F,!1,null,"4816e1bc",null),Y=K.exports;D()(K,"components",{QHeader:V["a"],QToolbar:J["a"],QBtn:L["a"],QIcon:v["a"],QSpace:W["a"],QAvatar:Q["a"],QBadge:G["a"]});var X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return 1!==t.$route.meta.hidefooter?o("q-footer",{staticClass:"bg-white text-primary footer",class:{commentSectionHeight:t.footerData.commentSection}},[t.footerData.commentSection?o("q-card",{staticClass:"newsfeed-card",attrs:{flat:"",bordered:""}},[o("q-separator",{attrs:{inset:""}}),o("q-card-section",{staticClass:"Comment-input"},[o("q-item-section",[o("q-input",{ref:"commentT",attrs:{borderless:"",id:"commentText",placeholder:"Write a comment..."},scopedSlots:t._u([{key:"before",fn:function(){return[null!=t.userprofileDetail.avatar?o("q-avatar",[o("img",{attrs:{src:""+t.userprofileDetail.avatar.url}})]):o("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n              "+t._s(t.userprofileDetail.firstname.charAt(0))+"\n            ")])]},proxy:!0},{key:"after",fn:function(){return[o("q-btn",{staticStyle:{color:"#6B7BC7"},attrs:{round:"",flat:"",icon:"send",disable:0==t.commentText.length},on:{click:t.postComment}})]},proxy:!0}],null,!1,2837320063),model:{value:t.commentText,callback:function(e){t.commentText=e},expression:"commentText"}})],1)],1)],1):t._e(),o("q-tabs",{staticClass:"text-grey",attrs:{"no-caps":"","active-color":"primary","indicator-color":"primary","switch-indicator":"","narrow-indicator":""}},[o("q-route-tab",{attrs:{name:"home",icon:"app:home",to:"/index",exact:""}}),o("q-route-tab",{attrs:{name:"window",icon:"app:window",to:"/applications",exact:""}}),o("q-tab",{attrs:{name:"post",icon:"app:plus"},on:{click:t.addPostButtonClick}}),o("q-route-tab",{attrs:{name:"history",icon:"app:message",to:"/inbox",exact:""}}),o("q-route-tab",{attrs:{name:"person",icon:"app:person",to:"/profile",exact:""}})],1)],1):t._e()},Z=[];function tt(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function et(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):tt(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var ot={name:"Footer",created:function(){this.$root.$on("setReplyButtonClick",this.setInputFocus),this.$root.$on("setReplyCommentClick",this.setReplyComment)},beforeDestroy:function(){this.$root.$off("setReplyButtonClick",this.setInputFocus),this.$root.$off("setReplyCommentClick",this.setReplyComment)},data:function(){return{commentText:""}},computed:et(et(et(et({},Object(j["c"])("footer",["footerData"])),Object(j["c"])("config",["baseUrl"])),Object(j["c"])("userprofile",["userDetails","userprofileDetail"])),Object(j["c"])("newsfeeds",["newsfeeds"])),methods:et(et(et({},Object(j["b"])("footer",["addComment"])),Object(j["b"])("blog",["storeContent"])),{},{postComment:function(){this.addComment(this.commentText),this.commentText="",this.newsfeeds.isNewsFeedComment?this.$root.$emit("savePostReplyButtonClick"):this.$root.$emit("saveCommentButtonClick")},setInputFocus:function(){this.commentText="",this.$refs.commentT.focus()},setReplyComment:function(){this.commentText="@"+this.newsfeeds.selectedReplyComment.userprofile.firstname+" "+this.newsfeeds.selectedReplyComment.userprofile.lastname+",",this.$refs.commentT.focus()},addPostButtonClick:function(){this.$root.$emit("footerAddIconClick")}})},nt=ot,it=(o("7ff3"),o("7ff0")),at=o("f09f"),rt=o("a370"),st=o("27f9"),ct=o("429b"),lt=o("7867"),ut=o("7460"),ft=Object(d["a"])(nt,X,Z,!1,null,"48b12872",null),pt=ft.exports;function ht(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function mt(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?ht(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ht(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}D()(ft,"components",{QFooter:it["a"],QCard:at["a"],QSeparator:B["a"],QCardSection:rt["a"],QItemSection:g["a"],QInput:st["a"],QAvatar:Q["a"],QBtn:L["a"],QTabs:ct["a"],QRouteTab:lt["a"],QTab:ut["a"]});var dt=["Google","Facebook","Twitter","Apple","Oracle"],bt={name:"MainLayout",components:{MobileHeader:Y,Footer:pt,Drawer:N,offline:s["a"]},mounted:function(){var t=this;this.$auth.isAuthenticated()&&(this.fetchProfileDetail().then((function(e){t.getUserDetail(t.userDetails.id)})),this.fetchUserProfiles())},computed:mt({},Object(j["c"])("userprofile",["isAuthenticated","userDetails"])),methods:mt(mt({},Object(j["b"])("userprofile",["fetchUserProfiles","fetchProfileDetail","getMyProfileDetail","getUserDetail"])),{},{filterSearchFn:function(t,e,o){var n=this;""===t&&(this.searchOptions=[],o()),setTimeout((function(){e((function(){if(""!==t){var e=t.toLowerCase();n.searchOptions=dt.filter((function(t){return t.toLowerCase().indexOf(e)>-1}))}}))}),1500)},abortFilterSearchFn:function(){},handleConnectivityChange:function(){}})},gt=bt,vt=o("4d5a"),kt=o("09e3"),Ot=Object(d["a"])(gt,n,i,!1,null,null,null);e["default"]=Ot.exports;D()(Ot,"components",{QLayout:vt["a"],QPageContainer:kt["a"]})},"7ff3":function(t,e,o){"use strict";var n=o("8c59"),i=o.n(n);i.a},8220:function(t,e,o){},"8c59":function(t,e,o){},"9fe6":function(t,e,o){"use strict";var n=o("f4d2"),i=o.n(n);i.a},b405:function(t,e,o){"use strict";var n=o("cd4e"),i=o.n(n);i.a},cd4e:function(t,e,o){},f4d2:function(t,e,o){}}]);