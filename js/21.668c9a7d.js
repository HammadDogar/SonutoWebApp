(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"3a65":function(t,a,s){},6599:function(t,a,s){"use strict";var e=s("3a65"),i=s.n(e);i.a},d481:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("q-card",{staticClass:"flex flex-center",staticStyle:{"margin-top":"5px"}},[e("q-tabs",{attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left",breakpoint:0},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{staticStyle:{"text-transform":"capitalize"},attrs:{name:"foryou",label:"For you"}}),e("q-tab",{staticStyle:{"text-transform":"capitalize"},attrs:{name:"installedapp",label:"Installed App"}}),e("div",{staticStyle:{"margin-left":"45px",color:"#6D6D6D","margin-right":"10px"}},[t._v("Sort by ")]),e("q-icon",{staticClass:"sortBy",attrs:{name:"app:sort"}})],1)],1),e("div",{staticClass:"q-gutter-y-sm",staticStyle:{"margin-top":"5px"}},[e("q-tab-panels",{staticClass:"bg-white",attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"foryou"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticStyle:{"padding-left":"10px"}},[e("span",{staticClass:"section-header"},[t._v("\n                New App\n              ")])]),e("div",{staticClass:"text-center"},[e("q-img",{staticClass:"rounded-borders",staticStyle:{width:"100%"},attrs:{src:s("e5b7")},on:{click:t.goToBlogs}})],1)])])])],1),e("q-tab-panels",{staticClass:"bg-white",attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"foryou"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticStyle:{"padding-left":"10px"}},[e("span",{staticClass:"section-header"},[t._v("\n                Latest app\n              ")])]),e("div",{staticClass:"favorite-pic-section"},[e("q-scroll-area",{staticClass:"scroll",attrs:{horizontal:""}},[e("div",{staticClass:"row no-wrap item-section"},t._l(t.applications,(function(a){return e("div",{key:a.Id,staticClass:"item"},[e("div",{staticClass:"appBorder",style:{background:a.Background}},[e("img",{staticClass:"appSmallIcon",attrs:{size:"20px",src:a.Icon.url},on:{click:function(s){return t.goToApp(a.URL)}}})]),e("div",{staticClass:"BMiCal",on:{click:function(s){return t.goToApp(a.URL)}}},[t._v(t._s(a.Title))])])})),0)])],1)])])])],1),e("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"foryou"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticStyle:{"padding-left":"10px"}},[e("span",{staticClass:"section-header"},[t._v("\n                Top Rated\n              ")])]),e("div",{staticClass:"favorite-pic-section"},[e("q-scroll-area",{staticClass:"scroll",attrs:{horizontal:""}},[e("div",{staticClass:"row no-wrap item-section"},t._l(t.applications,(function(a){return e("div",{key:a.Id,staticClass:"item"},[e("div",{staticClass:"appBorder",style:{background:a.Background}},[e("img",{staticClass:"appSmallIcon",attrs:{size:"25px",src:a.Icon.url},on:{click:function(s){return t.goToApp(a.URL)}}})]),e("div",{staticClass:"BMiCal",on:{click:function(s){return t.goToApp(a.URL)}}},[t._v(t._s(a.Title))])])})),0)])],1)])])])],1),t._l(t.applications,(function(a){return e("q-tab-panels",{key:a.Id,attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"foryou"}},[e("div",{staticClass:"row"},[e("q-card",{staticStyle:{width:"100%"},attrs:{flat:""}},[e("div",{staticClass:"page row items-center no-wrap"},[e("q-card-section",{staticClass:"newsfeed-card-section install-app",attrs:{horizontal:""}},[e("div",{staticClass:"appBorderSmall",style:{background:a.Background}},[e("img",{staticClass:"appSmallIcon",attrs:{size:"25px",src:a.Icon.url},on:{click:function(s){return t.goToApp(a.URL)}}})])]),e("div",[e("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[e("q-card-section",{staticClass:"messagesection",attrs:{horizontal:""},on:{click:function(s){return t.goToApp(a.URL)}}},[e("q-item-section",{staticStyle:{"padding-left":"18px"}},[e("div",{staticClass:"row titleheight"},[e("div",{staticClass:"col title"},[t._v(t._s(a.Title))])]),e("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[t._v(t._s(a.Description))]),e("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[t._v(t._s(a.Rating)+"*")])],1)],1),e("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[e("q-item-section",[e("q-btn",{staticClass:"btnAppInstall"},[t._v("Install")])],1)],1)],1)],1)],1)])],1)])],1)})),t._l(t.applications,(function(a){return e("q-tab-panels",{key:a.Id,staticClass:"bg-white",attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"installedapp"}},[e("div",{staticClass:"row q-col-gutter-none"},[e("div",{staticClass:"col-4",staticStyle:{"margin-top":"0.25rem"}},[e("div",{staticClass:"row"},[e("q-card",{staticStyle:{width:"100%"},attrs:{flat:""}},[e("div",{staticClass:"page row items-center no-wrap"},[e("q-card-section",{staticClass:"newsfeed-card-section install-app",attrs:{horizontal:""}},[e("div",{staticClass:"appBorderSmall",style:{background:a.Background}},[e("img",{staticClass:"appSmallIcon",attrs:{size:"18px",src:a.Icon.url},on:{click:function(s){return t.goToApp(a.URL)}}})])]),e("div",[e("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[e("q-card-section",{staticClass:"messagesection",attrs:{horizontal:""}},[e("q-item-section",{staticStyle:{"padding-left":"18px"},on:{click:function(s){return t.goToApp(a.URL)}}},[e("div",{staticClass:"row titleheight"},[e("div",{staticClass:"col title"},[t._v(t._s(a.Title))])]),e("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[t._v(t._s(a.Description))]),e("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[t._v(t._s(a.Rating)+"*")])],1)],1),e("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[e("q-item-section",[e("q-btn",{staticClass:"btnAppRemove"},[t._v("Remove")])],1)],1)],1)],1)],1)])],1)])])])],1)}))],2),e("q-dialog",{model:{value:t.comingSoonModel,callback:function(a){t.comingSoonModel=a},expression:"comingSoonModel"}},[e("AppComingSoon",{on:{"hide-modal":function(a){t.comingSoonModel=!1}}})],1)],1)},i=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("9523")),o=s.n(n),c=s("2f62"),r=s("48a3");function l(t,a){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),s.push.apply(s,e)}return s}function p(t){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?l(Object(s),!0).forEach((function(a){o()(t,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(s,a))}))}return t}var d={data:function(){return{file:null,createAlbumModel:!1,tab:"foryou",appData:[{Id:1,Title:"Blogs",Description:"fitness and sports. Create and",Rating:"4.6",Icon:"app:blog",Background:"blog-background"},{Id:2,Title:"Vlogs",Description:"fitness and sports. Create and",Rating:"4.6",Icon:"app:vlog",Background:"vlog-background"},{Id:3,Title:"BMI Calculator",Description:"(BMI) using our calculator",Rating:"4.6",Icon:"app:bmi-calculator",Background:"bmiCal-background"},{Id:4,Title:"Service Directory",Description:"Search for health, fitness an...",Rating:"4.6",Icon:"app:service-directory",Background:"service-directory-background "},{Id:5,Title:"Fixtures & results",Description:"Score of a match will be predi...",Rating:"4.6",Icon:"app:fixture",Background:"fixture-background"},{Id:6,Title:"News",Description:"date with the latest sports news",Rating:"4.6",Icon:"app:news",Background:"news-background"},{Id:7,Title:"PT Pro",Description:"PT Pro is the smart",Rating:"4.6",Icon:"app:pt-pro",Background:"pt-pro-background"},{Id:8,Title:"World Kitchen",Description:"worlds finest recipes",Rating:"4.6",Icon:"app:world-kitchen",Background:"world-kitchen-background"},{Id:9,Title:"Xstream Banter",Description:"Exchange banter with friends",Rating:"4.6",Icon:"app:xstream-barner",Background:"xstream-barner-background"}],comingSoonModel:!1}},computed:p(p({},Object(c["c"])("config",["baseUrl"])),Object(c["c"])("applications",["applications"])),mounted:function(){this.setHeaderData(!0,!1,"Applications","","","",!0,!0),this.fetchApplications()},components:{AppComingSoon:r["a"]},methods:p(p(p({},Object(c["b"])("header",["setHeader"])),Object(c["b"])("applications",["fetchApplications"])),{},{setHeaderData:function(t,a,s,e,i,n,o,c){this.setHeader({hamburgerIcon:t,backIcon:a,title:s,rightIcon1:e,rightIcon2:i,rightLinkText:n,notificationIcon:o,searchIcon:c})},goToApp:function(t){t?this.$router.push(t):this.comingSoonModel=!0},goToBlogs:function(){this.$router.push("/blogs/Home")}})},u=d,b=(s("6599"),s("2877")),g=s("9989"),m=s("f09f"),f=s("429b"),v=s("7460"),C=s("0016"),h=s("adad"),k=s("823b"),w=s("068f"),y=s("4983"),I=s("a370"),q=s("4074"),S=s("0170"),x=s("9c40"),T=s("24e8"),_=s("8572"),B=s("eebe"),D=s.n(B),O=Object(b["a"])(u,e,i,!1,null,"ae18509a",null);a["default"]=O.exports;D()(O,"components",{QPage:g["a"],QCard:m["a"],QTabs:f["a"],QTab:v["a"],QIcon:C["a"],QTabPanels:h["a"],QTabPanel:k["a"],QImg:w["a"],QScrollArea:y["a"],QCardSection:I["a"],QItemSection:q["a"],QItemLabel:S["a"],QBtn:x["a"],QDialog:T["a"],QField:_["a"]})},e5b7:function(t,a,s){t.exports=s.p+"img/game.5364c6b0.jpg"}}]);