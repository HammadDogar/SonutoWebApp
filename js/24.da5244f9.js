(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"10f7":function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{staticClass:"flex flex-center"},[n("div",{staticClass:"q-pa-md row",staticStyle:{"max-width":"375px",width:"375px",overflow:"hidden"}},[n("q-tabs",{attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left",breakpoint:0},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab",{attrs:{name:"myphotos",label:"My Photos"},on:{click:t.navigateMyPhotos}}),n("q-tab",{attrs:{name:"albums",label:"Albums"}})],1),n("q-tab-panels",{staticStyle:{"min-width":"345px","min-height":"200px"},attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"myphotos"}}),n("q-tab-panel",{attrs:{name:"albums"}},[n("div",{staticClass:"row q-col-gutter-none"},[n("div",{staticClass:"col-4",staticStyle:{width:"90px",margin:"5px"}},[n("q-file",{attrs:{borderless:"",for:"fileUpload","display-value":""},on:{input:t.uploadPhoto},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{staticStyle:{height:"90px",width:"90px","margin-left":"-13px","margin-top":"39px"},attrs:{name:"app:add-photo"},on:{click:function(t){t.stopPropagation()}}})]},proxy:!0}]),model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),t._l(t.clientphotos.useralbumphotos,(function(e){return n("div",{key:e.id,staticClass:"col-4",staticStyle:{width:"90px",margin:"5px"}},[e.photo.url.indexOf("http")?n("q-img",{staticClass:"rounded-borders",attrs:{src:""+t.baseUrl+e.photo.url,ratio:1,basic:"","spinner-color":"white"},on:{click:function(n){return t.getfullScreen(e)}}}):n("q-img",{staticClass:"rounded-borders",attrs:{src:e.photo.url,ratio:1,basic:"","spinner-color":"white"},on:{click:function(n){return t.getfullScreen(e)}}})],1)}))],2)])],1)],1),n("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[n("FullScreen",{attrs:{details:t.fullscreendata}})],1)])},a=[],o=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("7f7f"),n("9523")),r=n.n(o),i=n("2f62"),s=n("d41a");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={data:function(){return{file:null,tab:"albums",fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:"",hideBack:!1}}},created:function(){this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("onExitFullscreen",this.closeFullScreen)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("onExitFullscreen",this.closeFullScreen)},components:{FullScreen:s["a"]},computed:u(u(u({},Object(i["c"])("config",["baseUrl"])),Object(i["c"])("userprofile",["userDetails"])),Object(i["c"])("useralbum",["clientphotos"])),mounted:function(){this.getPhoto()},methods:u(u({},Object(i["b"])("useralbum",["fetchPhotosByAlbumId","uploadPhotos"])),{},{uploadPhoto:function(t){var e=this;this.uploadPhotos({file:t,useralbums:this.clientphotos}).then((function(){e.getPhoto()}))},getPhoto:function(){this.fetchPhotosByAlbumId(this.$route.query.id)},navigateMyPhotos:function(){this.$router.push("my-photos")},backButtonClick:function(){this.$router.push("profile")},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var t=document.getElementById("image-box");t.setAttribute("style","display:none;"),this.fullscreendata.hideBack=!0}},getfullScreen:function(t){t.photo.url.indexOf("http")?this.fullscreendata.url=this.baseUrl+t.photo.url:this.fullscreendata.url=t.photo.url,this.fullscreendata.name=null,this.fullscreendata.feedtext=null,this.fullscreendata.created_at=null,this.fullscreendata.likeLength=null,this.fullscreendata.commentLength=null,this.fullscreendata.id=null,this.fullscreendata.likeIcon=null,this.fullscreendata.hideBack=!1;var e=document.getElementById("image-box");e.setAttribute("style","display:flex;");var n=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(n).then((function(){})).catch((function(t){alert(t)}))}})},f=d,h=(n("e4ec"),n("2877")),p=n("f09f"),b=n("429b"),m=n("7460"),g=n("adad"),y=n("823b"),x=n("7d53"),k=n("0016"),v=n("068f"),O=n("8572"),w=n("eebe"),P=n.n(w),j=Object(h["a"])(f,l,a,!1,null,"58ffe69d",null);e["default"]=j.exports;P()(j,"components",{QCard:p["a"],QTabs:b["a"],QTab:m["a"],QTabPanels:g["a"],QTabPanel:y["a"],QFile:x["a"],QIcon:k["a"],QImg:v["a"],QField:O["a"]})},d98d:function(t,e,n){},e4ec:function(t,e,n){"use strict";var l=n("d98d"),a=n.n(l);a.a}}]);