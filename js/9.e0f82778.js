(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"3e82":function(t,e,s){"use strict";var a=s("60c2"),i=s.n(a);i.a},"60c2":function(t,e,s){},"6a6f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"inbox-card"},[t._l(this.inboxes,(function(e){return s("div",{key:e.id,staticClass:"page row items-center justify-end inbox-row"},[s("div",{staticClass:"col-2",on:{click:function(s){return t.goToChat(e)}}},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[(e.userFirst.id!=t.userDetails.id&&e.userFirst.userprofile.avatar&&e.userFirst.userprofile.avatar.url?e.userFirst.userprofile.avatar.url:e.userSecond.userprofile.avatar&&e.userSecond.userprofile.avatar.url)?s("q-avatar",{attrs:{size:"38px"}},[s("q-img",{attrs:{src:""+(e.userFirst.id!=t.userDetails.id&&e.userFirst.userprofile.avatar&&e.userFirst.userprofile.avatar.url?e.userFirst.userprofile.avatar.url:e.userSecond.userprofile.avatar&&e.userSecond.userprofile.avatar.url)}})],1):s("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n          "+t._s(e.userFirst.id!=t.userDetails.id?e.userFirst.userprofile.firstname:e.userSecond.userprofile.firstname.charAt(0))+"\n        ")])],1)],1),s("div",{staticClass:"col-10"},[s("q-card-section",{staticClass:"messagesection",attrs:{horizontal:""}},[s("q-item-section",[s("div",{staticClass:"row items-center inbox-row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row items-center"},[s("div",{staticClass:"col-9",on:{click:function(s){return t.goToChat(e)}}},[s("div",{staticClass:"title"},[t._v(t._s(e.userFirst.id!=t.userDetails.id?e.userFirst.userprofile.firstname+" "+e.userFirst.userprofile.lastname:e.userSecond.userprofile.firstname+" "+e.userSecond.userprofile.lastname)+"\n                  ")])]),s("div",{staticClass:"col-3",staticStyle:{"text-align":"right"}},[s("q-btn",{staticClass:"options-btn",attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(s){return t.openChatInboxOptionModel(e.id)}}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-9",on:{click:function(s){return t.goToChat(e)}}},[e.lastMessage.length>0?s("div",{staticClass:"message-column-width",class:[e.unreadMessages.length>0&&"bold"]},[s("div",{staticClass:"message"},[e.lastMessage[0].fromUser.id==t.userDetails.id?s("span",[t._v("\n                        You:\n                      ")]):t._e(),t._v(" "+t._s(e.lastMessage[0].text)+"\n                    ")])]):s("div",{staticClass:"message"},[t._v("\n                    No Messages, Start conversation\n                  ")])]),s("div",{staticClass:"col-3 flex items-center justify-end",staticStyle:{"text-align":"right"}},[e.unreadMessages.length>0?s("span",{staticClass:"unread-count"},[t._v(t._s(e.unreadMessages.length))]):t._e(),s("div",{staticClass:"msg-time"},[t._v(t._s(e.lastMessage.length>0?t.formatDate(e.lastMessage[0].created_at):"")+"\n                  ")])])])])])])],1)],1),s("div",{staticClass:"col-10"},[s("q-separator")],1)])})),s("q-dialog",{attrs:{position:"bottom"},model:{value:t.inboxOptionModal,callback:function(e){t.inboxOptionModal=e},expression:"inboxOptionModal"}},[s("ChatInboxOption",{on:{"clicked-selected-Option":t.clickedSelectedOptionModal}})],1),s("q-dialog",{attrs:{position:"bottom"},model:{value:t.inboxWarningModal,callback:function(e){t.inboxWarningModal=e},expression:"inboxWarningModal"}},[s("InboxWarning",{on:{"delete-selected-option":t.deleteSelectedOption}})],1)],2)},i=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("9523")),o=s.n(n),r=s("bd4c"),c=s("2f62"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"roundedNewsFeed"},[s("div",[s("hr",{staticClass:"hr",on:{click:t.closeActionDialog}})]),s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("q-list",{staticClass:"rounded-borders",staticStyle:{width:"100%","padding-bottom":"45px"},attrs:{bordered:"",padding:""}},[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"","active-class":"my-menu-link"},on:{click:function(e){return t.action("delete")}}},[s("div",{staticClass:"icon-div"},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{staticClass:"icon-img",attrs:{name:"app:post-notification"}})],1)],1),s("q-item-section",{staticClass:"option"},[t._v("Delete")])],1)],1)],1)])])},d=[],u={name:"ChatInboxOption",methods:{action:function(t){this.$emit("clicked-selected-Option",t)},closeActionDialog:function(){this.$root.$emit("closeInboxChatOption")}}},p=u,f=(s("f2977"),s("2877")),b=s("f09f"),h=s("1c1c"),m=s("66e5"),v=s("4074"),C=s("0016"),x=s("714f"),g=s("eebe"),O=s.n(g),w=Object(f["a"])(p,l,d,!1,null,"6649ed21",null),I=w.exports;O()(w,"components",{QCard:b["a"],QList:h["a"],QItem:m["a"],QItemSection:v["a"],QIcon:C["a"]}),O()(w,"directives",{Ripple:x["a"]});var M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"roundedNewsFeed"},[s("div",{staticClass:"row items-center no-wrap",staticStyle:{"margin-bottom":"30px"}},[s("div",{staticClass:"col"},[s("q-card-section",{staticClass:"row items-center q-pb-none"},[s("div",{staticClass:"text-h6"},[t._v("Delete Chat")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1),s("q-card-section",{staticClass:"row items-center q-pb-none"},[s("p",{staticClass:"col-12"},[t._v("\n          Are you sure you want to delete this chat? It can't be undone.\n        ")])]),s("div",{staticClass:"col-12 text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 text-center"},[s("q-btn",{staticClass:"button default-button",staticStyle:{color:"#000000",width:"90%"},attrs:{label:"Cancel","no-caps":"",outline:"",color:"primary"},on:{click:function(e){return t.confirmChoice("cancel")}}})],1),s("div",{staticClass:"col-6 text-center"},[s("q-btn",{staticClass:"button default-button",staticStyle:{width:"90%"},attrs:{color:"primary",label:"Confirm","no-caps":""},on:{click:function(e){return t.confirmChoice("confirm")}}})],1)])])],1)])])},y=[],q={name:"InboxWarning",methods:{confirmChoice:function(t){this.$emit("delete-selected-option",t)}}},S=q,_=(s("fafd"),s("a370")),D=s("2c91"),k=s("9c40"),j=s("7f67"),Q=Object(f["a"])(S,M,y,!1,null,"fe00b0e6",null),F=Q.exports;function W(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function $(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?W(Object(s),!0).forEach((function(e){o()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):W(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}O()(Q,"components",{QCard:b["a"],QCardSection:_["a"],QSpace:D["a"],QBtn:k["a"]}),O()(Q,"directives",{ClosePopup:j["a"]});var P={name:"inbox",data:function(){return{loading:!1,form:{NewsFeedText:""},inboxOptionModal:!1,inboxWarningModal:!1,selectedInbox:null,dummyData:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]}},components:{ChatInboxOption:I,InboxWarning:F},computed:$($({},Object(c["c"])("userprofile",["userDetails"])),Object(c["c"])("chat",["inboxes"])),created:function(){this.$root.$on("closeInboxChatOption",this.existInboxChatOption)},mounted:function(){this.setHeaderData(!0,!1,"Inbox","","","",!0,!0),this.fetchInboxes(this.userDetails.id)},methods:$($($({},Object(c["b"])("header",["setHeader"])),Object(c["b"])("chat",["fetchInboxes","deleteInbox"])),{},{setHeaderData:function(t,e,s,a,i,n,o,r){this.setHeader({hamburgerIcon:t,backIcon:e,title:s,rightIcon1:a,rightIcon2:i,rightLinkText:n,notificationIcon:o,searchIcon:r})},openChatInboxOptionModel:function(t){this.selectedInbox=t,this.inboxOptionModal=!0},clickedSelectedOptionModal:function(t){this.inboxOptionModal=!1,"delete"===t&&(this.inboxWarningModal=!0)},existInboxChatOption:function(){this.selectedInbox=null,this.inboxOptionModal=!1},goToChat:function(t){this.$router.push("/chat/"+t.id)},formatDate:function(t){return r["a"].formatDate(t,"DD MMM")},deleteSelectedOption:function(t){"cancel"===t?(this.selectedInbox=null,this.inboxWarningModal=!1):(this.deleteInbox(parseInt(this.selectedInbox)),this.selectedInbox=null,this.inboxWarningModal=!1)}})},N=P,T=(s("3e82"),s("cb32")),A=s("068f"),E=s("eb85"),H=s("24e8"),z=Object(f["a"])(N,a,i,!1,null,"0b5ba7d2",null);e["default"]=z.exports;O()(z,"components",{QCard:b["a"],QItemSection:v["a"],QAvatar:T["a"],QImg:A["a"],QCardSection:_["a"],QBtn:k["a"],QSeparator:E["a"],QDialog:H["a"]})},9775:function(t,e,s){},"994f":function(t,e,s){},f2977:function(t,e,s){"use strict";var a=s("9775"),i=s.n(a);i.a},fafd:function(t,e,s){"use strict";var a=s("994f"),i=s.n(a);i.a}}]);