"use strict";(self["webpackChunkKonoku"]=self["webpackChunkKonoku"]||[]).push([[6785],{30900:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}});var o=i(59835),s={key:0,class:"row",style:{width:"100%"}},n={class:"col-12"};function r(e,t,i,r,l,d){var u=(0,o.up)("q-card-section"),a=(0,o.up)("q-card"),c=(0,o.up)("NewsFeedCard"),f=(0,o.up)("AddNewsFeed"),h=(0,o.up)("q-dialog"),w=(0,o.up)("VerificationStatusModal"),g=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(g,{class:"flex"},{default:(0,o.w5)((function(){return[e.userDetails&&e.userDetails.userprofile&&null===e.userDetails.userprofile.country||e.userDetails&&e.userDetails.blog_sub_categories&&0===e.userDetails.blog_sub_categories.length?((0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",n,[(0,o.Wm)(a,{style:{"background-color":"#90BCF0",margin:"10px 0px 10px 0px","font-size":"12px","font-weight":"400","line-height":"16px",width:"100%",color:"#FFFFFF"},onClick:d.completeProfile},{default:(0,o.w5)((function(){return[(0,o.Wm)(u,null,{default:(0,o.w5)((function(){return[(0,o.Uk)(" Profile almost complete! For better experience click here! ")]})),_:1})]})),_:1},8,["onClick"])])])):(0,o.kq)("",!0),(0,o.Wm)(c,{onOnEditNewsfeed:d.editNewsfeed},null,8,["onOnEditNewsfeed"]),(0,o.Wm)(h,{modelValue:l.addNewsFeedModel,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.addNewsFeedModel=e})},{default:(0,o.w5)((function(){return[(0,o.Wm)(f,{isEditNewsfeed:l.isEditNewsfeed},null,8,["isEditNewsfeed"])]})),_:1},8,["modelValue"]),(0,o.Wm)(h,{modelValue:l.verifcationStatusModal,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.verifcationStatusModal=e})},{default:(0,o.w5)((function(){return[(0,o.Wm)(w,{onHideModal:t[1]||(t[1]=function(e){return l.verifcationStatusModal=!1})})]})),_:1},8,["modelValue"])]})),_:1})}var l=i(46264),d=i.n(l),u=(i(51393),i(56072),i(65716),i(69665),i(62166)),a=i(86234),c=i(33100),f=i(92923),h={name:"Home",created:function(){this.$emitter.on("footerAddIconClick",this.showAddNewsFeedModel),this.$emitter.on("headerRightIcon1Click",this.gotofollow),this.$emitter.on("headerRightIcon2Click",this.gotoSearch)},beforeUnmount:function(){this.$emitter.off("footerAddIconClick",this.showAddNewsFeedModel),this.$emitter.off("headerRightIcon1Click",this.gotofollow),this.$emitter.off("headerRightIcon2Click",this.gotoSearch)},computed:d()({},(0,c.Se)("userprofile",["userDetails"])),mounted:function(){var e=this,t=localStorage.getItem("loggedInOnce");null===t&&localStorage.setItem("loggedInOnce",!1),this.$auth.isAuthenticated()?(this.setHeaderData(!0,!1,"Home","","","",!0,!0),this.fetchProfileDetail().then((function(){e.fetchNotifications(e.userDetails.id),e.getUserDetail(e.userDetails.id).then((function(){var t,i=null===(t=e.userDetails)||void 0===t?void 0:t.userfollowings.filter((function(e){return"Accepted"===e.status})).map((function(e){return e.following}));i.push(e.userDetails.userprofile.id),i.length>1?e.fetchNewsfeeds({ids:i,start:e.start,limit:e.limit}):e.fetchPublicNewsfeeds(e.start)}))}))):(this.setHeaderData(!1,!1,"Konoku","","","",!1,!1),this.fetchAuthorsNewsfeeds(this.start))},data:function(){return{addNewsFeedModel:!1,start:0,limit:10,isEditNewsfeed:!1,verifcationStatusModal:!1}},methods:d()(d()(d()(d()(d()(d()({},(0,c.nv)("userprofile",["fetchUserProfiles","fetchProfileDetail","getUserDetail"])),(0,c.nv)("header",["setHeader"])),(0,c.nv)("newsfeeds",["fetchNewsfeeds","fetchPublicNewsfeeds","fetchAuthorsNewsfeeds","fetchNewsfeed"])),(0,c.nv)("followers",["fetchFollowings"])),(0,c.nv)("notifications",["fetchNotifications"])),{},{setHeaderData:function(e,t,i,o,s,n,r,l){this.setHeader({hamburgerIcon:e,backIcon:t,title:i,rightIcon1:o,rightIcon2:s,rightLinkText:n,notificationIcon:r,searchIcon:l})},completeProfile:function(){var e,t;0===this.userDetails.blog_sub_categories.length?this.$router.push("topics"):null===(null===(e=this.userDetails)||void 0===e||null===(t=e.userprofile)||void 0===t?void 0:t.country)&&this.$router.push("country-verified")},gotoAddCountry:function(){this.$router.push("country-verified")},gotofollow:function(){this.$router.push("followers")},gotoSearch:function(){this.$router.push("search-result")},showAddNewsFeedModel:function(){if(this.$auth.isAuthenticated()){var e,t,i;if(null===(null===(e=this.userDetails)||void 0===e?void 0:e.verification)||"Approved"!==(null===(t=this.userDetails)||void 0===t||null===(i=t.verification)||void 0===i?void 0:i.status))return this.verifcationStatusModal=!0,!1;this.addNewsFeedModel=!0,this.isEditNewsfeed=!1}else{var o=localStorage.getItem("loggedInOnce");"false"===o?this.$router.push("welcome"):this.$router.push("login")}},editNewsfeed:function(e){var t,i,o,s=this;if(null===(null===(t=this.userDetails)||void 0===t?void 0:t.verification)||"Approved"!==(null===(i=this.userDetails)||void 0===i||null===(o=i.verification)||void 0===o?void 0:o.status))return this.verifcationStatusModal=!0,!1;this.fetchNewsfeed(e).then((function(){s.isEditNewsfeed=!0,s.addNewsFeedModel=!0}))}}),components:{NewsFeedCard:u.Z,AddNewsFeed:a.Z,VerificationStatusModal:f.Z}},w=i(11639),g=i(69885),p=i(44458),v=i(63190),m=i(32074),N=i(30627),D=i(69984),k=i.n(D);const F=(0,w.Z)(h,[["render",r],["__scopeId","data-v-7a999084"]]);var I=F;k()(h,"components",{QPage:g.Z,QCard:p.Z,QCardSection:v.Z,QDialog:m.Z,QPageSticky:N.Z})}}]);