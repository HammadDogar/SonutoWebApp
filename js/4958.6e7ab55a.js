"use strict";(self["webpackChunkKonoku"]=self["webpackChunkKonoku"]||[]).push([[4958],{17150:function(e,t,l){l.r(t),l.d(t,{default:function(){return W}});var n=l(59835),o=l(86970),r=function(e){return(0,n.dD)("data-v-e41e75ba"),e=e(),(0,n.Cn)(),e},i=r((function(){return(0,n._)("div",{class:"headingDiv"},[(0,n._)("span",{class:"heading"},"Welcome to Knonoku!"),(0,n._)("p",{class:"subHeading"},"Choose 5 or more topics")],-1)})),s={class:"title"},u={class:"galleryDiv row"},a={class:"col-4 galleryInnerDiv"},c={class:"row"},d={class:"more-info-item row",style:{width:"100%",margin:"10px 0px 10px 0px"}},f={class:"col-md-12",style:{width:"100%",margin:"0px 20px 0px 20px"}},g={id:"image-box",ref:"fullscreenElement"};function m(e,t,l,r,m,p){var h=(0,n.up)("q-checkbox"),b=(0,n.up)("q-page-sticky"),v=(0,n.up)("q-img"),y=(0,n.up)("q-btn"),x=(0,n.up)("FullScreen"),k=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(k,{class:"page"},{default:(0,n.w5)((function(){return[i,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(p.getCategories(),(function(l){return(0,n.wg)(),(0,n.iD)("div",{key:l.id},[(0,n._)("p",s,(0,o.zw)(l.Name),1),(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.blogSubCategory,(function(e){return(0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["col-4",[e.blog_category.id===l.id?"":"hide"]]),key:e.id},[(0,n._)("div",a,[(0,n.Wm)(v,{src:e.Image.url,class:"gallerImg",onClick:function(t){return p.getfullScreen(e)}},{default:(0,n.w5)((function(){return[(0,n.Wm)(b,{position:"bottom",class:"check",offset:[18,18]},{default:(0,n.w5)((function(){return[(0,n._)("div",c,[(0,n.Wm)(h,{modelValue:m.selectedTopics,"onUpdate:modelValue":t[0]||(t[0]=function(e){return m.selectedTopics=e}),val:e.id,class:"col-md-12",size:"28px",color:"primary"},null,8,["modelValue","val"])])]})),_:2},1024),(0,n.Wm)(b,{position:"bottom",class:"caption",offset:[18,18]},{default:(0,n.w5)((function(){return[(0,n._)("div",null,[(0,n._)("small",null,(0,o.zw)(e.Name),1)])]})),_:2},1024)]})),_:2},1032,["src","onClick"])])],2)})),128))])])})),128)),(0,n._)("div",d,[(0,n._)("div",f,[(0,n.Wm)(y,{label:e.userDetails&&e.userDetails.userprofile&&null===e.userDetails.userprofile.country?"Next":"Complete Profile",onClick:t[1]||(t[1]=function(e){return p.GoToIndex()}),class:"signIn-button",rounded:"","no-caps":""},null,8,["label"])])]),(0,n._)("div",g,[(0,n.Wm)(x,{details:m.fullscreendata},null,8,["details"])],512)]})),_:1})}var p=l(50001),h=l.n(p),b=l(46264),v=l.n(b),y=(l(69665),l(98998),l(65716),l(40702),l(38194),l(77280),l(51393),l(62590),l(33100)),x=l(45038),k=l(6827),_={name:"Gallery",data:function(){return{chkImg:!1,blogCategory:[],selectedTopics:[],fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:""}}},computed:v()(v()({},(0,y.Se)("userprofile",["userDetails"])),(0,y.Se)("blog",["blogSubCategory"])),created:function(){this.$emitter.on("onExitFullscreen",this.closeFullScreen)},beforeUnmount:function(){this.$emitter.off("onExitFullscreen",this.closeFullScreen)},mounted:function(){this.setHeaderData(!1,!0,"","","","",!1,!1),this.fetchBlogSuCategory()},components:{FullScreen:x.Z},methods:v()(v()(v()(v()({},(0,y.nv)("header",["setHeader"])),(0,y.nv)("blog",["fetchBlogSuCategory"])),(0,y.nv)("userprofile",["updateUserSubcategory"])),{},{setHeaderData:function(e,t,l,n,o,r,i,s){this.setHeader({hamburgerIcon:e,backIcon:t,title:l,rightIcon1:n,rightIcon2:o,rightLinkText:r,notificationIcon:i,searchIcon:s})},GoToIndex:function(){var e=this;if(this.selectedTopics.length<5)return k.Z.create({progress:!0,message:"Please select at least 5 topics!",type:"negative"}),!1;this.updateUserSubcategory({userId:this.userDetails.id,subcategories:this.selectedTopics}).then((function(){var t,l;null===(null===(t=e.userDetails)||void 0===t||null===(l=t.userprofile)||void 0===l?void 0:l.country)?e.$router.push("country-verified"):e.$router.push("index")}))},getCategories:function(){return h()(new Map(this.blogSubCategory.map((function(e){return[e.blog_category.id,e.blog_category]}))).values())},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var e=document.getElementById("image-box");e.setAttribute("style","display:none;")}},getfullScreen:function(e){this.fullscreendata.url=e.Image.url,this.fullscreendata.name=null,this.fullscreendata.feedtext=null,this.fullscreendata.created_at=null,this.fullscreendata.likeLength=null,this.fullscreendata.commentLength=null,this.fullscreendata.id=null,this.fullscreendata.likeIcon=null;var t=document.getElementById("image-box");t.setAttribute("style","display:flex;");var l=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(l).then((function(){})).catch((function(e){alert(e)}))}})},I=l(11639),w=l(69885),C=l(91487),S=l(30627),D=l(11221),F=l(68879),T=l(69984),Z=l.n(T);const H=(0,I.Z)(_,[["render",m],["__scopeId","data-v-e41e75ba"]]);var W=H;Z()(_,"components",{QPage:w.Z,QImg:C.Z,QPageSticky:S.Z,QCheckbox:D.Z,QBtn:F.Z})}}]);