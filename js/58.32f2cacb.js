(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{"32df":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",[r("q-card",{staticClass:"flex flex-center",attrs:{flat:"",bordered:""}},[r("div",{staticClass:"search-section",staticStyle:{width:"100%"}},[r("q-input",{staticClass:"search",staticStyle:{height:"49px"},attrs:{borderless:"","bg-color":"#474747",placeholder:"Search"},on:{input:function(e){return t.search()}},scopedSlots:t._u([{key:"prepend",fn:function(){return[r("q-icon",{staticStyle:{"margin-left":"10px"},attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.term,callback:function(e){t.term=e},expression:"term"}})],1),t.searchedUsers?r("q-list",{staticStyle:{width:"100%"}},[r("q-item-label",{staticClass:"txt-header",attrs:{header:""}},[t._v("Followers/People")]),t._l(t.searchedUsers,(function(e){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticClass:"q-mb-sm",attrs:{clickable:""},on:{click:function(r){return t.goToProfile(e.id)}}},[r("q-item-section",{attrs:{avatar:""}},[null!=e.avatar?r("q-avatar",[r("img",{attrs:{src:e.avatar.url}})]):r("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n            "+t._s(e.firstname.charAt(0))+"\n          ")])],1),r("q-item-section",[r("q-item-label",{staticClass:"title"},[t._v("\n            "+t._s(e.firstname)+" "+t._s(e.lastname)+"\n            "),t.isFriend(e.id)?r("span",{staticClass:"txt-friend"},[t._v(" -Friend")]):t._e()]),r("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.occupation)+" "),e.Employer?r("span",[t._v(" at ")]):t._e(),t._v(" "+t._s(e.employer)+"\n          ")])],1)],1)}))],2):t._e()],1),t.searchedBlogs?r("q-card",{staticClass:"flex flex-center",attrs:{flat:"",bordered:""}},[r("q-list",{staticStyle:{width:"100%"}},[r("q-item-label",{staticStyle:{"font-weight":"600","font-size":"18px",color:"#333333"},attrs:{header:""}},[t._v("Blogs")]),t._l(t.searchedBlogs,(function(e){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticClass:"q-mb-sm",attrs:{clickable:""},on:{click:function(r){return t.goToBlog(e.id)}}},[r("q-item-section",{attrs:{avatar:""}},[null!=e.CoverPhoto?r("q-avatar",[r("img",{attrs:{src:e.CoverPhoto.url}})]):r("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n            "+t._s(e.Title.charAt(0))+"\n          ")])],1),r("q-item-section",[r("q-item-label",{staticStyle:{"font-weight":"600","font-size":"14px","line-height":"19.07px"}},[t._v("\n            "+t._s(e.Title)+"\n          ")]),t._l(e.blog_categories,(function(e){return r("q-item-label",{key:e.id,attrs:{caption:"",lines:"1"}},[t._v("\n            "+t._s(e.Name)+" ")])}))],2)],1)}))],2)],1):t._e(),t.searchedApplications?r("q-card",{staticClass:"flex flex-center",attrs:{flat:"",bordered:""}},[r("q-list",{staticStyle:{width:"100%"}},[r("q-item-label",{staticStyle:{"font-weight":"600","font-size":"18px",color:"#333333"},attrs:{header:""}},[t._v("Applications")]),t._l(t.searchedApplications,(function(e){return r("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticClass:"q-mb-sm",attrs:{clickable:""}},[r("q-item-section",{attrs:{avatar:""}},[null!=e.Icon?r("q-avatar",{staticClass:"image_icon",style:{background:e.Background}},[r("img",{attrs:{src:e.Icon.url}})]):r("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n            "+t._s(e.Title.charAt(0))+"\n          ")])],1),r("q-item-section",[r("q-item-label",{staticStyle:{"font-weight":"600","font-size":"14px","line-height":"19.07px"}},[t._v("\n            "+t._s(e.Title)+"\n          ")]),r("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.Rating)+"*")])],1)],1)}))],2)],1):t._e()],1)},i=[],s=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),c=r.n(s),o=r("2f62");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={name:"SearchResult",data:function(){return{term:"",data:Object}},mounted:function(){this.setHeaderData(!1,!0,"Search","","","",!0,!0),this.clearUserProfiles(),this.clearBlogs(),this.clearApplications()},created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick)},computed:l(l(l(l({},Object(o["c"])("userprofile",["searchedUsers","userDetails"])),Object(o["c"])("followers",["acceptedFollowers"])),Object(o["c"])("blog",["searchedBlogs"])),Object(o["c"])("applications",["searchedApplications"])),methods:l(l(l(l(l(l({},Object(o["b"])("header",["setHeader"])),Object(o["b"])("userprofile",["searchUserProfiles","clearUserProfiles"])),Object(o["b"])("blog",["searchBlogs","clearBlogs"])),Object(o["b"])("followers",["fetchFollowers"])),Object(o["b"])("applications",["searchApplications","clearApplications"])),{},{setHeaderData:function(t,e,r,a,i,s,c,o){this.setHeader({hamburgerIcon:t,backIcon:e,title:r,rightIcon1:a,rightIcon2:i,rightLinkText:s,notificationIcon:c,searchIcon:o})},goToProfile:function(t){this.$router.push("/user-profile/"+t)},backButtonClick:function(){this.$router.push("/index")},search:function(){""===this.term?(this.clearUserProfiles(),this.clearBlogs(),this.clearApplications()):(this.searchUserProfiles(this.term),this.searchBlogs(this.term),this.searchApplications(this.term))},isFriend:function(t){var e=this.userDetails.userfollowings.filter((function(e){return e.following===t&&"Accepted"===e.status}));return 0!==e.length},goToBlog:function(t){this.$router.push({path:"/blog",query:{id:t}})}})},h=p,f=(r("83f5"),r("2877")),u=r("9989"),d=r("f09f"),b=r("27f9"),m=r("0016"),g=r("1c1c"),v=r("0170"),_=r("66e5"),q=r("4074"),y=r("cb32"),w=r("714f"),k=r("eebe"),O=r.n(k),x=Object(f["a"])(h,a,i,!1,null,null,null);e["default"]=x.exports;O()(x,"components",{QPage:u["a"],QCard:d["a"],QInput:b["a"],QIcon:m["a"],QList:g["a"],QItemLabel:v["a"],QItem:_["a"],QItemSection:q["a"],QAvatar:y["a"]}),O()(x,"directives",{Ripple:w["a"]})},"83f5":function(t,e,r){"use strict";var a=r("93fe"),i=r.n(a);i.a},"93fe":function(t,e,r){}}]);