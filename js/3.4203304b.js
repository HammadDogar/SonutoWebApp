(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"6e91":function(e,t,o){"use strict";var i=o("710e"),s=o.n(i);s.a},"710e":function(e,t,o){},"8b24":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"flex"},[e.userDetails&&e.userDetails.userprofile&&null===e.userDetails.userprofile.country?o("div",{staticClass:"row",staticStyle:{width:"100%"}},[o("div",{staticClass:"col-12"},[o("q-card",{staticStyle:{"background-color":"#90BCF0",margin:"10px 0px 10px 0px","font-size":"12px","font-weight":"400","line-height":"16px",width:"100%",color:"#FFFFFF"},on:{click:e.gotoAddCountry}},[o("q-card-section",[e._v("\n          Profile almost complete! For better experience click here!\n        ")])],1)],1)]):e._e(),o("NewsFeedCard",{on:{"on-edit-newsfeed":e.editNewsfeed}}),o("q-dialog",{model:{value:e.addNewsFeedModel,callback:function(t){e.addNewsFeedModel=t},expression:"addNewsFeedModel"}},[o("AddNewsFeed",{attrs:{isEditNewsfeed:e.isEditNewsfeed}})],1)],1)},s=[],r=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("9523")),n=o.n(r),c=o("0cb2"),d=o("9d56"),a=o("2f62");function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(Object(o),!0).forEach((function(t){n()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var h={name:"Home",created:function(){this.$root.$on("footerAddIconClick",this.showAddNewsFeedModel),this.$root.$on("headerRightIcon1Click",this.gotofollow),this.$root.$on("headerRightIcon2Click",this.gotoSearch)},beforeDestroy:function(){this.$root.$off("footerAddIconClick",this.showAddNewsFeedModel),this.$root.$off("headerRightIcon1Click",this.gotofollow),this.$root.$off("headerRightIcon2Click",this.gotoSearch)},computed:l({},Object(a["c"])("userprofile",["userDetails"])),mounted:function(){var e=this;this.$auth.isAuthenticated()||this.$auth.handleAuthentication("/index"),this.$auth.isAuthenticated()?(this.setHeaderData(!0,!1,"Home","","","",!0,!0),this.fetchProfileDetail().then((function(){e.fetchNotifications(e.userDetails.id),e.getUserDetail(e.userDetails.id).then((function(){var t,o=null===(t=e.userDetails)||void 0===t?void 0:t.userfollowings.filter((function(e){return"Accepted"===e.status})).map((function(e){return e.following}));o.push(e.userDetails.userprofile.id),o.length>1?e.fetchNewsfeeds({ids:o,start:e.start,limit:e.limit}):e.fetchPublicNewsfeeds(e.start)}))}))):(this.setHeaderData(!1,!1,"Sonuto","","","",!1,!1),this.fetchAuthorsNewsfeeds(this.start))},data:function(){return{addNewsFeedModel:!1,start:0,limit:10,isEditNewsfeed:!1}},methods:l(l(l(l(l(l({},Object(a["b"])("userprofile",["fetchUserProfiles","fetchProfileDetail","getUserDetail"])),Object(a["b"])("header",["setHeader"])),Object(a["b"])("newsfeeds",["fetchNewsfeeds","fetchPublicNewsfeeds","fetchAuthorsNewsfeeds","fetchNewsfeed"])),Object(a["b"])("followers",["fetchFollowings"])),Object(a["b"])("notifications",["fetchNotifications"])),{},{setHeaderData:function(e,t,o,i,s,r,n,c){this.setHeader({hamburgerIcon:e,backIcon:t,title:o,rightIcon1:i,rightIcon2:s,rightLinkText:r,notificationIcon:n,searchIcon:c})},gotoAddCountry:function(){this.$router.push("country-verified")},gotofollow:function(){this.$router.push("followers")},gotoSearch:function(){this.$router.push("search-result")},showAddNewsFeedModel:function(){this.$auth.isAuthenticated()?(this.addNewsFeedModel=!0,this.isEditNewsfeed=!1):this.$router.push("welcome")},editNewsfeed:function(e){var t=this;this.fetchNewsfeed(e).then((function(){t.isEditNewsfeed=!0,t.addNewsFeedModel=!0}))}}),components:{NewsFeedCard:c["a"],AddNewsFeed:d["a"]}},u=h,w=(o("6e91"),o("2877")),p=o("9989"),b=o("f09f"),g=o("a370"),N=o("24e8"),O=o("de5e"),m=o("eebe"),F=o.n(m),D=Object(w["a"])(u,i,s,!1,null,"5b5e82da",null);t["default"]=D.exports;F()(D,"components",{QPage:p["a"],QCard:b["a"],QCardSection:g["a"],QDialog:N["a"],QPageSticky:O["a"]})}}]);