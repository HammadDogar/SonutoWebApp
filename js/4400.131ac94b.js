"use strict";(self["webpackChunkSonuto"]=self["webpackChunkSonuto"]||[]).push([[4400],{92176:function(e,t,o){o.r(t),o.d(t,{default:function(){return me}});var l=o(59835),n=o(86970),i=function(e){return(0,l.dD)("data-v-1d364599"),e=e(),(0,l.Cn)(),e},r={class:"q-gutter-y-md",style:{width:"100%"}},s={key:0},c={class:"flex flex-center"},a=i((function(){return(0,l._)("p",{class:"emptymsg"},"Your Published is empty. tap the button below to start writing ",-1)})),u={key:1},d=["src","id","poster","onClick"],g={class:"flex flex-center justify-between"},m=["onClick"],f={key:0,class:"text-caption text-grey blog-description"},p={key:0},h={class:"flex flex-center"},b=i((function(){return(0,l._)("p",{class:"emptymsg"},"Your Submitted is empty. tap the button below to start writing ",-1)})),v={key:1},w=["src","id","poster","onClick"],k={class:"flex flex-center justify-between"},y=["onClick"],C={key:0,class:"text-caption text-grey blog-description"},B={key:0},D={class:"flex flex-center"},_=i((function(){return(0,l._)("p",{class:"emptymsg"},"Your draft is empty. tap the button below to start writing ",-1)})),P={key:1},x=["src","id","poster","onClick"],A={class:"flex flex-center justify-between"},q=["onClick"],I={key:0,class:"text-caption text-grey blog-description"},S={id:"image-box",ref:"fullscreenElement"},W={class:"row items-center no-wrap",style:{"margin-bottom":"30px"}},$={class:"col"},V=i((function(){return(0,l._)("div",{class:"text-h6"},"Delete Blog",-1)})),Z=i((function(){return(0,l._)("p",{class:"col-12"}," Are you sure you want to delete this blog? ",-1)})),O={class:"col-12 text-center"},T={class:"row"},F={class:"col-6 text-center"},M={class:"col-6 text-center"};function Q(e,t,o,i,Q,j){var U=(0,l.up)("q-tab"),E=(0,l.up)("q-tabs"),L=(0,l.up)("q-separator"),H=(0,l.up)("q-img"),z=(0,l.up)("q-btn"),Y=(0,l.up)("q-card-section"),K=(0,l.up)("q-card"),R=(0,l.up)("q-intersection"),N=(0,l.up)("q-tab-panel"),G=(0,l.up)("q-tab-panels"),J=(0,l.up)("FullScreen"),X=(0,l.up)("BlogArticleOption"),ee=(0,l.up)("q-dialog"),te=(0,l.up)("q-space"),oe=(0,l.up)("q-page"),le=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(oe,{class:"flex page"},{default:(0,l.w5)((function(){return[(0,l._)("div",r,[(0,l.Wm)(K,{class:"maincard"},{default:(0,l.w5)((function(){return[(0,l.Wm)(E,{modelValue:Q.tab,"onUpdate:modelValue":t[0]||(t[0]=function(e){return Q.tab=e}),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","inline-label":"","narrow-indicator":""},{default:(0,l.w5)((function(){return[(0,l.Wm)(U,{name:"Published",label:"Published","no-caps":""}),(0,l.Wm)(U,{name:"Submitted",label:"Submitted","no-caps":""}),(0,l.Wm)(U,{name:"Drafts",label:"Drafts","no-caps":""})]})),_:1},8,["modelValue"]),(0,l.Wm)(L),(0,l.Wm)(G,{modelValue:Q.tab,"onUpdate:modelValue":t[1]||(t[1]=function(e){return Q.tab=e}),animated:""},{default:(0,l.w5)((function(){return[(0,l.Wm)(N,{name:"Published",style:{padding:"0px !important"}},{default:(0,l.w5)((function(){return[0===e.publishedBlogs.length?((0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("div",c,[(0,l.Wm)(H,{class:"emptyDraft",src:"/avatars/empty-draft-avatar.svg"},null,8,["src"]),a])])):((0,l.wg)(),(0,l.iD)("div",u,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.publishedBlogs,(function(e){return(0,l.wg)(),(0,l.j4)(R,{transition:"scale",once:"",key:e.id},{default:(0,l.w5)((function(){return[(0,l.Wm)(K,{class:"my-card",flat:"",style:{width:"100%"}},{default:(0,l.w5)((function(){return[e.CoverPhoto&&j.isImagePost(e.CoverPhoto.mime)?((0,l.wg)(),(0,l.j4)(H,{key:0,class:"blog-cover",src:j.getImageurl(e.CoverPhoto.url),onClick:function(t){return j.goToBlogArticle(e.id)}},null,8,["src","onClick"])):(0,l.kq)("",!0),null!==e.CoverPhoto&&!1===j.isImagePost(e.CoverPhoto.mime)?((0,l.wg)(),(0,l.iD)("video",{key:1,src:e.CoverPhoto.url,class:"video-player",id:e.id,controls:"",poster:!!e.PosterImage&&e.PosterImage.url,preload:"none",controlsList:"nodownload",onClick:function(t){return j.goToBlogArticle(e.id)}},null,8,d)):(0,l.kq)("",!0),(0,l.Wm)(Y,null,{default:(0,l.w5)((function(){return[(0,l._)("div",g,[(0,l._)("div",{class:"text-h6 q-mt-sm q-mb-xs blog-title",onClick:function(t){return j.goToBlogArticle(e.id)}},(0,n.zw)(e.Title),9,m),(0,l.Wm)(z,{color:"grey-7",round:"",flat:"",icon:"app:three-dots",onClick:function(t){return j.openBlogArticleOptionModel(e)}},null,8,["onClick"])]),e.Description?((0,l.wg)(),(0,l.iD)("div",f,(0,n.zw)(j.truncateFunc(e.Description,50,"...")),1)):(0,l.kq)("",!0)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))]))]})),_:1}),(0,l.Wm)(N,{name:"Submitted",style:{padding:"0px !important"}},{default:(0,l.w5)((function(){return[0===e.submittedBlogs.length?((0,l.wg)(),(0,l.iD)("div",p,[(0,l._)("div",h,[(0,l.Wm)(H,{class:"emptyDraft",src:"/avatars/empty-draft-avatar.svg"},null,8,["src"]),b])])):((0,l.wg)(),(0,l.iD)("div",v,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.submittedBlogs,(function(e){return(0,l.wg)(),(0,l.j4)(R,{transition:"scale",once:"",key:e.id},{default:(0,l.w5)((function(){return[(0,l.Wm)(K,{class:"my-card",flat:"",style:{width:"100%"}},{default:(0,l.w5)((function(){return[e.CoverPhoto&&j.isImagePost(e.CoverPhoto.mime)?((0,l.wg)(),(0,l.j4)(H,{key:0,class:"blog-cover",src:j.getImageurl(e.CoverPhoto.url),onClick:function(t){return j.goToBlogArticle(e.id)}},null,8,["src","onClick"])):(0,l.kq)("",!0),null!==e.CoverPhoto&&!1===j.isImagePost(e.CoverPhoto.mime)?((0,l.wg)(),(0,l.iD)("video",{key:1,src:e.CoverPhoto.url,class:"video-player",id:e.id,controls:"",poster:!!e.PosterImage&&e.PosterImage.url,preload:"none",controlsList:"nodownload",onClick:function(t){return j.goToBlogArticle(e.id)}},null,8,w)):(0,l.kq)("",!0),(0,l.Wm)(Y,null,{default:(0,l.w5)((function(){return[(0,l._)("div",k,[(0,l._)("div",{class:"text-h6 q-mt-sm q-mb-xs blog-title",onClick:function(t){return j.goToBlogArticle(e.id)}},(0,n.zw)(e.Title),9,y),(0,l.Wm)(z,{color:"grey-7",round:"",flat:"",icon:"app:three-dots",onClick:function(t){return j.openBlogArticleOptionModel(e)}},null,8,["onClick"])]),e.Description?((0,l.wg)(),(0,l.iD)("div",C,(0,n.zw)(j.truncateFunc(e.Description,50,"...")),1)):(0,l.kq)("",!0)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))]))]})),_:1}),(0,l.Wm)(N,{name:"Drafts",style:{padding:"0px !important"}},{default:(0,l.w5)((function(){return[0===e.draftBlogs.length?((0,l.wg)(),(0,l.iD)("div",B,[(0,l._)("div",D,[(0,l.Wm)(H,{class:"emptyDraft",src:"/avatars/empty-draft-avatar.svg"},null,8,["src"]),_])])):((0,l.wg)(),(0,l.iD)("div",P,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.draftBlogs,(function(e){return(0,l.wg)(),(0,l.j4)(R,{transition:"scale",once:"",key:e.id},{default:(0,l.w5)((function(){return[(0,l.Wm)(K,{class:"my-card",flat:"",style:{width:"100%"}},{default:(0,l.w5)((function(){return[e.CoverPhoto&&j.isImagePost(e.CoverPhoto.mime)?((0,l.wg)(),(0,l.j4)(H,{key:0,class:"blog-cover",src:j.getImageurl(e.CoverPhoto.url),onClick:function(t){return j.goToBlogArticle(e.id)}},null,8,["src","onClick"])):(0,l.kq)("",!0),null!==e.CoverPhoto&&!1===j.isImagePost(e.CoverPhoto.mime)?((0,l.wg)(),(0,l.iD)("video",{key:1,src:e.CoverPhoto.url,class:"video-player",id:e.id,controls:"",poster:!!e.PosterImage&&e.PosterImage.url,preload:"none",controlsList:"nodownload",onClick:function(t){return j.goToBlogArticle(e.id)}},null,8,x)):(0,l.kq)("",!0),(0,l.Wm)(Y,null,{default:(0,l.w5)((function(){return[(0,l._)("div",A,[(0,l._)("div",{class:"text-h6 q-mt-sm q-mb-xs blog-title",onClick:function(t){return j.goToBlogArticle(e.id)}},(0,n.zw)(e.Title),9,q),(0,l.Wm)(z,{color:"grey-7",round:"",flat:"",icon:"app:three-dots",onClick:function(t){return j.openBlogArticleOptionModel(e)}},null,8,["onClick"])]),e.Description?((0,l.wg)(),(0,l.iD)("div",I,(0,n.zw)(j.truncateFunc(e.Description,50,"...")),1)):(0,l.kq)("",!0)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))]))]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]),(0,l._)("div",S,[(0,l.Wm)(J,{details:Q.fullscreendata},null,8,["details"])],512),(0,l.Wm)(ee,{modelValue:Q.blogArticleOptionModel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return Q.blogArticleOptionModel=e}),position:"bottom"},{default:(0,l.w5)((function(){return[(0,l.Wm)(X,{selectedBlog:Q.selectedBlog,onClickedSelectedOption:j.selectedBlogArticleOption},null,8,["selectedBlog","onClickedSelectedOption"])]})),_:1},8,["modelValue"]),(0,l.Wm)(ee,{modelValue:Q.blogArticleDeleteModel,"onUpdate:modelValue":t[5]||(t[5]=function(e){return Q.blogArticleDeleteModel=e}),position:"bottom"},{default:(0,l.w5)((function(){return[(0,l.Wm)(K,{class:"roundedNewsFeed"},{default:(0,l.w5)((function(){return[(0,l._)("div",W,[(0,l._)("div",$,[(0,l.Wm)(Y,{class:"row items-center q-pb-none"},{default:(0,l.w5)((function(){return[V,(0,l.Wm)(te),(0,l.wy)((0,l.Wm)(z,{icon:"close",flat:"",round:"",dense:""},null,512),[[le]])]})),_:1}),(0,l.Wm)(Y,{class:"row items-center q-pb-none"},{default:(0,l.w5)((function(){return[Z]})),_:1}),(0,l._)("div",O,[(0,l._)("div",T,[(0,l._)("div",F,[(0,l.Wm)(z,{label:"Cancel",class:"button default-button","no-caps":"",outline:"",color:"primary",style:{color:"#000000",width:"90%"},onClick:t[3]||(t[3]=function(e){return j.confirmationChoice("cancel")})})]),(0,l._)("div",M,[(0,l.Wm)(z,{color:"primary",style:{width:"90%"},label:"Confirm",class:"button default-button","no-caps":"",onClick:t[4]||(t[4]=function(e){return j.confirmationChoice("confirm")})})])])])])])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})}var j=o(46264),U=o.n(j),E=(o(69665),o(65716),o(61732),o(33100)),L=o(43038),H=o(7167),z=o(4376),Y=o(6827),K={name:"BlogArticle",created:function(){this.$emitter.on("footerAddIconClick",this.showAddBlogPage),this.$emitter.on("headerRightIcon2Click",this.gotoSearch),this.$emitter.on("headerBackButtonClick",this.backButtonClick),this.$emitter.on("onformatDateClick",this.formatDate),this.$emitter.on("onExitFullscreen",this.closeFullScreen),window.addEventListener("scroll",this.playVideoOnScroll),this.$route.params.tab&&(this.tab=this.$route.params.tab)},beforeUnmount:function(){this.$emitter.off("footerAddIconClick",this.showAddBlogPage),this.$emitter.off("headerBackButtonClick",this.backButtonClick),this.$emitter.off("headerRightIcon2Click",this.gotoSearch),this.$emitter.off("onformatDateClick",this.formatDate),this.$emitter.off("onExitFullscreen",this.closeFullScreen),window.removeEventListener("scroll",this.playVideoOnScroll)},computed:U()(U()(U()({},(0,E.Se)("blog",["blogs","publishedBlogs","submittedBlogs","draftBlogs"])),(0,E.Se)("config",["blobBaseUrl"])),(0,E.Se)("userprofile",["userDetails"])),components:{FullScreen:L.Z,BlogArticleOption:H.Z},mounted:function(){var e,t;this.setHeaderData(!0,!1,"Konoku","","","",!0,!0);var o="true"===(null===(e=this.$route)||void 0===e||null===(t=e.query)||void 0===t?void 0:t.isForVlog)||!1;this.fetchUserBlogs({id:this.userDetails.userprofile.id,isVlog:o})},data:function(){return{tab:"Published",fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:""},selectedBlog:null,blogArticleOptionModel:!1,blogArticleDeleteModel:!1}},methods:U()(U()(U()({},(0,E.nv)("header",["setHeader"])),(0,E.nv)("blog",["fetchBlogs","storeContent","fetchUserBlogs","updateBlogStatus","deleteBlog","editBlog"])),{},{setHeaderData:function(e,t,o,l,n,i,r,s){this.setHeader({hamburgerIcon:e,backIcon:t,title:o,rightIcon1:l,rightIcon2:n,rightLinkText:i,notificationIcon:r,searchIcon:s})},truncateFunc:function(e,t,o){return null===e?"":(null===e||void 0===e?void 0:e.length)>t?e.substring(0,t)+o:e},formatDate:function(e){return z.ZP.formatDate(e,"DD MMM")+" at "+z.ZP.formatDate(e,"hh.mm A")},gotoSearch:function(){this.$router.push("/blog-search")},backButtonClick:function(){this.$router.push("dashboard")},goToCreateBlog:function(){this.$router.push("/create-blog")},goToReview:function(e){},goToBlogArticle:function(e){this.$router.push("/blog-article/"+e)},showAddBlogPage:function(){var e=this;this.storeContent({form:null}).then((function(){var t,o,l="true"===(null===(t=e.$route)||void 0===t||null===(o=t.query)||void 0===o?void 0:o.isForVlog)||!1;l?e.$router.push({path:"/create-post",query:{isForVlog:!0}}):e.$router.push("/create-post")}))},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen(),this.selectedBlog={};var e=document.getElementById("image-box");e.setAttribute("style","display:none;")}},getImageurl:function(e){var t=e.substring(e.lastIndexOf("/")+1),o=this.blobBaseUrl;return e=o+t,e},openBlogArticleOptionModel:function(e){this.selectedBlog=e,this.blogArticleOptionModel=!0},selectedBlogArticleOption:function(e){var t=this;switch(e){case"Edit":this.editBlog(this.selectedBlog.id).then((function(e){e.isForVlog?t.$router.push({path:"/create-post",query:{isForVlog:!0}}):t.$router.push("create-post")}));break;case"Submit":this.updateBlogStatus({id:this.selectedBlog.id,status:"Submitted"}).then((function(){Y.Z.create({progress:!0,message:"Blog Submitted Successfully",type:"positive"}),t.selectedBlog=null,t.blogArticleOptionModel=!1}));break;case"Delete":this.blogArticleOptionModel=!1,this.blogArticleDeleteModel=!0;break}},confirmationChoice:function(e){var t=this;"confirm"===e?this.deleteBlog(parseInt(this.selectedBlog.id)).then((function(){t.blogArticleDeleteModel=!1,t.selectedBlog=null,Y.Z.create({progress:!0,message:"Blog Deleted Successfully",type:"positive"})})):(this.blogArticleDeleteModel=!1,this.selectedBlog=null)},isImagePost:function(e){return"image"===e.split("/")[0]},playVideoOnScroll:function(){var e=!1,t=document.querySelectorAll(".video-player");t.forEach((function(t){var o=400,l=t.getBoundingClientRect().top;l>0&&l<o&&!e?(t.muted=!0,t.play(),e=!0):t.pause()}))}})},R=o(11639),N=o(69885),G=o(44458),J=o(47817),X=o(57661),ee=o(50926),te=o(89800),oe=o(84106),le=o(91487),ne=o(30875),ie=o(63190),re=o(68879),se=o(32074),ce=o(90136),ae=o(62146),ue=o(69984),de=o.n(ue);const ge=(0,R.Z)(K,[["render",Q],["__scopeId","data-v-1d364599"]]);var me=ge;de()(K,"components",{QPage:N.Z,QCard:G.Z,QTabs:J.Z,QTab:X.Z,QSeparator:ee.Z,QTabPanels:te.Z,QTabPanel:oe.Z,QImg:le.Z,QIntersection:ne.Z,QCardSection:ie.Z,QBtn:re.Z,QDialog:se.Z,QSpace:ce.Z}),de()(K,"directives",{ClosePopup:ae.Z})}}]);