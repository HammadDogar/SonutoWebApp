(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{3908:function(e,t,o){"use strict";var i=o("41fb"),r=o.n(i);r.a},"41fb":function(e,t,o){},"8b24":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"flex"},[e.userDetails&&e.userDetails.userprofile&&null===e.userDetails.userprofile.country?o("div",{staticClass:"row",staticStyle:{width:"100%"}},[o("div",{staticClass:"col-12"},[o("q-card",{staticStyle:{"background-color":"#90BCF0",margin:"10px 0px 10px 0px","font-size":"12px","font-weight":"400","line-height":"16px",width:"100%",color:"#FFFFFF"},on:{click:e.gotoAddCountry}},[o("q-card-section",[e._v("\n          Profile almost complete! For better experience click here!\n        ")])],1)],1)]):e._e(),o("NewsFeedCard"),o("q-dialog",{model:{value:e.addNewsFeedModel,callback:function(t){e.addNewsFeedModel=t},expression:"addNewsFeedModel"}},[o("AddNewsFeed")],1)],1)},r=[],s=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("9523")),n=o.n(s),c=o("0cb2"),a=o("9d56"),d=o("2f62");function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n()(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var f={name:"Home",created:function(){this.$root.$on("footerAddIconClick",this.showAddNewsFeedModel),this.$root.$on("headerRightIcon1Click",this.gotofollow),this.$root.$on("headerRightIcon2Click",this.gotoSearch)},beforeDestroy:function(){this.$root.$off("footerAddIconClick",this.showAddNewsFeedModel),this.$root.$off("headerRightIcon1Click",this.gotofollow),this.$root.$off("headerRightIcon2Click",this.gotoSearch)},computed:h({},Object(d["c"])("userprofile",["userDetails"])),mounted:function(){var e=this;this.$auth.isAuthenticated()||this.$auth.handleAuthentication("/index"),this.$auth.isAuthenticated()?(this.setHeaderData(!0,!1,"Home","","","",!0,!0),this.fetchProfileDetail().then((function(){e.fetchNotifications(e.userDetails.id),e.getUserDetail(e.userDetails.id).then((function(){var t,o=null===(t=e.userDetails)||void 0===t?void 0:t.userfollowings.filter((function(e){return"Accepted"===e.status})).map((function(e){return e.following}));o.push(e.userDetails.userprofile.id),o.length>1?e.fetchNewsfeeds({ids:o,start:e.start,limit:e.limit}):e.fetchPublicNewsfeeds(e.start)}))}))):(this.setHeaderData(!1,!1,"Sonuto","","","",!1,!1),this.fetchPublicNewsfeeds(this.start))},data:function(){return{addNewsFeedModel:!1,start:0,limit:10}},methods:h(h(h(h(h(h({},Object(d["b"])("userprofile",["fetchUserProfiles","fetchProfileDetail","getUserDetail"])),Object(d["b"])("header",["setHeader"])),Object(d["b"])("newsfeeds",["fetchNewsfeeds","fetchPublicNewsfeeds"])),Object(d["b"])("followers",["fetchFollowings"])),Object(d["b"])("notifications",["fetchNotifications"])),{},{setHeaderData:function(e,t,o,i,r,s,n,c){this.setHeader({hamburgerIcon:e,backIcon:t,title:o,rightIcon1:i,rightIcon2:r,rightLinkText:s,notificationIcon:n,searchIcon:c})},gotoAddCountry:function(){this.$router.push("country-verified")},gotofollow:function(){this.$router.push("followers")},gotoSearch:function(){this.$router.push("search-result")},showAddNewsFeedModel:function(){this.$auth.isAuthenticated()?this.addNewsFeedModel=!0:this.$router.push("welcome")}}),components:{NewsFeedCard:c["a"],AddNewsFeed:a["a"]}},u=f,p=(o("3908"),o("2877")),w=o("9989"),b=o("f09f"),g=o("a370"),O=o("24e8"),m=o("de5e"),D=o("eebe"),F=o.n(D),$=Object(p["a"])(u,i,r,!1,null,"12809ed5",null);t["default"]=$.exports;F()($,"components",{QPage:w["a"],QCard:b["a"],QCardSection:g["a"],QDialog:O["a"],QPageSticky:m["a"]})}}]);