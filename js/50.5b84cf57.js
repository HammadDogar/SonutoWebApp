(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[50],{"8bce":function(e,t,n){"use strict";var r=n("a77a"),a=n.n(r);a.a},"997d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("iframe",{directives:[{name:"show",rawName:"v-show",value:e.iframe.loaded,expression:"iframe.loaded"}],ref:"iframeRef",staticClass:"iframe-main",attrs:{title:"chat",id:"rcChat",src:e.iframe.src},on:{load:e.load}})])},a=[],o=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),c=n.n(o),i=n("2f62");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={name:"message",data:function(){return{iframe:{src:"https://sonuto.rocket.chat/channel/general",loaded:!0}}},computed:f(f({},Object(i["c"])("config",["baseUrl","rocketChatUrl"])),Object(i["c"])("userprofile",["userDetails"])),mounted:function(){this.$refs.iframeRef.contentWindow.postMessage({externalCommand:"login-with-token",token:"1IXVadyXuT6vfJ8oEWLy3LojVGn-DnDtaePAuTZyeNS"},"*")},methods:{load:function(){var e=document.getElementById("rcChat");e.contentWindow.postMessage({eternalCommand:"login-with-token",token:"1IXVadyXuT6vfJ8oEWLy3LojVGn-DnDtaePAuTZyeNS"},"*")}}},l=u,d=(n("8bce"),n("2877")),p=Object(d["a"])(l,r,a,!1,null,"3e38e77c",null);t["default"]=p.exports},a77a:function(e,t,n){}}]);