"use strict";(self["webpackChunkSonuto"]=self["webpackChunkSonuto"]||[]).push([[8832],{58028:function(e,t,n){n.r(t),n.d(t,{default:function(){return be}});var i=n(59835),o=n(86970),l=function(e){return(0,i.dD)("data-v-ed3468b2"),e=e(),(0,i.Cn)(),e},c={class:"q-gutter-y-md",style:{width:"100%"}},r={key:0},s={class:"flex flex-center"},u=l((function(){return(0,i._)("p",{class:"emptymsg"},"No Published found ",-1)})),a={key:1},d={class:"flex flex-center justify-between"},p=["onClick"],f={key:0,class:"text-caption text-grey blog-description"},m={key:0},g={class:"flex flex-center"},h=l((function(){return(0,i._)("p",{class:"emptymsg"},"No Requests found.",-1)})),b={key:1},w={class:"flex flex-center justify-between"},v=["onClick"],y={key:0,class:"text-caption text-grey blog-description"},k={key:0},R={class:"flex flex-center"},C=l((function(){return(0,i._)("p",{class:"emptymsg"},"No Rejected found. ",-1)})),_={key:1},x={class:"flex flex-center justify-between"},D=["onClick"],W={key:0,class:"text-caption text-grey blog-description"},q={key:0},P={class:"flex flex-center"},O=l((function(){return(0,i._)("p",{class:"emptymsg"},"No Unpublished found. ",-1)})),M={key:1},j={class:"flex flex-center justify-between"},I=["onClick"],S={key:0,class:"text-caption text-grey blog-description"},U={id:"image-box",ref:"fullscreenElement"},Z={class:"row items-center no-wrap",style:{"margin-bottom":"30px"}},T={class:"col"},F={class:"text-h6"},Q={class:"col-12"},V={class:"col-12 text-center"},$={class:"row"},z={class:"col-6 text-center"},B={class:"col-6 text-center"};function H(e,t,n,l,H,N){var A=(0,i.up)("q-tab"),E=(0,i.up)("q-tabs"),K=(0,i.up)("q-separator"),Y=(0,i.up)("q-img"),L=(0,i.up)("q-btn"),G=(0,i.up)("q-card-section"),J=(0,i.up)("q-card"),X=(0,i.up)("q-intersection"),ee=(0,i.up)("q-tab-panel"),te=(0,i.up)("q-tab-panels"),ne=(0,i.up)("FullScreen"),ie=(0,i.up)("ManageBlogOption"),oe=(0,i.up)("q-dialog"),le=(0,i.up)("q-space"),ce=(0,i.up)("q-page"),re=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.j4)(ce,{class:"flex page"},{default:(0,i.w5)((function(){return[(0,i._)("div",c,[(0,i.Wm)(J,{class:"maincard"},{default:(0,i.w5)((function(){return[(0,i.Wm)(E,{modelValue:H.tab,"onUpdate:modelValue":t[0]||(t[0]=function(e){return H.tab=e}),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","inline-label":"","narrow-indicator":""},{default:(0,i.w5)((function(){return[(0,i.Wm)(A,{name:"Published",label:"Published","no-caps":""}),(0,i.Wm)(A,{name:"Requests",label:"Requests","no-caps":""}),(0,i.Wm)(A,{name:"Rejected",label:"Rejected","no-caps":""}),(0,i.Wm)(A,{name:"Unpublished",label:"Unpublished","no-caps":""})]})),_:1},8,["modelValue"]),(0,i.Wm)(K),(0,i.Wm)(te,{modelValue:H.tab,"onUpdate:modelValue":t[1]||(t[1]=function(e){return H.tab=e}),animated:""},{default:(0,i.w5)((function(){return[(0,i.Wm)(ee,{name:"Published",style:{padding:"0px !important"}},{default:(0,i.w5)((function(){return[0===e.publishedRecipes.length?((0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",s,[(0,i.Wm)(Y,{class:"emptyDraft",src:"/avatars/empty-draft-avatar.svg"},null,8,["src"]),u])])):((0,i.wg)(),(0,i.iD)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.publishedRecipes,(function(e){return(0,i.wg)(),(0,i.j4)(X,{transition:"scale",once:"",key:e.id},{default:(0,i.w5)((function(){return[(0,i.Wm)(J,{class:"my-card",flat:"",style:{width:"100%"}},{default:(0,i.w5)((function(){return[e.CoverPhoto&&N.isImagePost(e.CoverPhoto.mime)?((0,i.wg)(),(0,i.j4)(Y,{key:0,class:"blog-cover",src:N.getImageurl(e.CoverPhoto.url),onClick:function(t){return N.goToUserRecipe(e.id)}},null,8,["src","onClick"])):(0,i.kq)("",!0),(0,i.Wm)(G,null,{default:(0,i.w5)((function(){return[(0,i._)("div",d,[(0,i._)("div",{class:"text-h6 q-mt-sm q-mb-xs blog-title",onClick:function(t){return N.goToUserRecipe(e.id)}},(0,o.zw)(e.Title),9,p),(0,i.Wm)(L,{color:"grey-7",round:"",flat:"",icon:"app:three-dots",onClick:function(t){return N.openRecipeOptionModel(e)}},null,8,["onClick"])]),e.Description?((0,i.wg)(),(0,i.iD)("div",f,(0,o.zw)(N.truncateFun(e.Description,50,"...")),1)):(0,i.kq)("",!0)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))]))]})),_:1}),(0,i.Wm)(ee,{name:"Requests",style:{padding:"0px !important"}},{default:(0,i.w5)((function(){return[0===e.submittedRecipes.length?((0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("div",g,[(0,i.Wm)(Y,{class:"emptyDraft",src:"/avatars/empty-draft-avatar.svg"},null,8,["src"]),h])])):((0,i.wg)(),(0,i.iD)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.submittedRecipes,(function(e){return(0,i.wg)(),(0,i.j4)(X,{transition:"scale",once:"",key:e.id},{default:(0,i.w5)((function(){return[(0,i.Wm)(J,{class:"my-card",flat:"",style:{width:"100%"}},{default:(0,i.w5)((function(){return[e.CoverPhoto&&N.isImagePost(e.CoverPhoto.mime)?((0,i.wg)(),(0,i.j4)(Y,{key:0,class:"blog-cover",src:N.getImageurl(e.CoverPhoto.url),onClick:function(t){return N.goToUserRecipe(e.id)}},null,8,["src","onClick"])):(0,i.kq)("",!0),(0,i.Wm)(G,null,{default:(0,i.w5)((function(){return[(0,i._)("div",w,[(0,i._)("div",{class:"text-h5 q-mt-sm q-mb-xs blog-title",onClick:function(t){return N.goToUserRecipe(e.id)}},(0,o.zw)(e.Title),9,v),(0,i.Wm)(L,{color:"grey-7",round:"",flat:"",icon:"app:three-dots",onClick:function(t){return N.openRecipeOptionModel(e)}},null,8,["onClick"])]),e.Description?((0,i.wg)(),(0,i.iD)("div",y,(0,o.zw)(N.truncateFun(e.Description,50,"...")),1)):(0,i.kq)("",!0)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))]))]})),_:1}),(0,i.Wm)(ee,{name:"Rejected",style:{padding:"0px !important"}},{default:(0,i.w5)((function(){return[0===e.rejectedRecipes.length?((0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("div",R,[(0,i.Wm)(Y,{class:"emptyDraft",src:"/avatars/empty-draft-avatar.svg"},null,8,["src"]),C])])):((0,i.wg)(),(0,i.iD)("div",_,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.rejectedRecipes,(function(e){return(0,i.wg)(),(0,i.j4)(X,{transition:"scale",once:"",key:e.id},{default:(0,i.w5)((function(){return[(0,i.Wm)(J,{class:"my-card",flat:"",style:{width:"100%"}},{default:(0,i.w5)((function(){return[e.CoverPhoto&&N.isImagePost(e.CoverPhoto.mime)?((0,i.wg)(),(0,i.j4)(Y,{key:0,class:"blog-cover",src:N.getImageurl(e.CoverPhoto.url),onClick:function(t){return N.goToUserRecipe(e.id)}},null,8,["src","onClick"])):(0,i.kq)("",!0),(0,i.Wm)(G,null,{default:(0,i.w5)((function(){return[(0,i._)("div",x,[(0,i._)("div",{class:"text-h5 q-mt-sm q-mb-xs blog-title",onClick:function(t){return N.goToUserRecipe(e.id)}},(0,o.zw)(e.Title),9,D),(0,i.Wm)(L,{color:"grey-7",round:"",flat:"",icon:"app:three-dots",onClick:function(t){return N.openRecipeOptionModel(e)}},null,8,["onClick"])]),e.Description?((0,i.wg)(),(0,i.iD)("div",W,(0,o.zw)(N.truncateFun(e.Description,50,"...")),1)):(0,i.kq)("",!0)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))]))]})),_:1}),(0,i.Wm)(ee,{name:"Unpublished",style:{padding:"0px !important"}},{default:(0,i.w5)((function(){return[0===e.unpublishedRecipes.length?((0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("div",P,[(0,i.Wm)(Y,{class:"emptyDraft",src:"/avatars/empty-draft-avatar.svg"},null,8,["src"]),O])])):((0,i.wg)(),(0,i.iD)("div",M,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.unpublishedRecipes,(function(e){return(0,i.wg)(),(0,i.j4)(X,{transition:"scale",once:"",key:e.id},{default:(0,i.w5)((function(){return[(0,i.Wm)(J,{class:"my-card",flat:"",style:{width:"100%"}},{default:(0,i.w5)((function(){return[e.CoverPhoto&&N.isImagePost(e.CoverPhoto.mime)?((0,i.wg)(),(0,i.j4)(Y,{key:0,class:"blog-cover",src:N.getImageurl(e.CoverPhoto.url),onClick:function(t){return N.goToUserRecipe(e.id)}},null,8,["src","onClick"])):(0,i.kq)("",!0),(0,i.Wm)(G,null,{default:(0,i.w5)((function(){return[(0,i._)("div",j,[(0,i._)("div",{class:"text-h6 q-mt-sm q-mb-xs blog-title",onClick:function(t){return N.goToUserRecipe(e.id)}},(0,o.zw)(e.Title),9,I),(0,i.Wm)(L,{color:"grey-7",round:"",flat:"",icon:"app:three-dots",onClick:function(t){return N.openRecipeOptionModel(e)}},null,8,["onClick"])]),e.Description?((0,i.wg)(),(0,i.iD)("div",S,(0,o.zw)(N.truncateFun(e.Description,50,"...")),1)):(0,i.kq)("",!0)]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))]))]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]),(0,i._)("div",U,[(0,i.Wm)(ne,{details:H.fullscreendata},null,8,["details"])],512),(0,i.Wm)(oe,{modelValue:H.recipeOptionModel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return H.recipeOptionModel=e}),position:"bottom"},{default:(0,i.w5)((function(){return[(0,i.Wm)(ie,{selectedBlog:H.selectedRecipe,onClickedSelectedOption:N.selectedManageOption},null,8,["selectedBlog","onClickedSelectedOption"])]})),_:1},8,["modelValue"]),(0,i.Wm)(oe,{modelValue:H.confirmModal,"onUpdate:modelValue":t[5]||(t[5]=function(e){return H.confirmModal=e}),position:"bottom"},{default:(0,i.w5)((function(){return[(0,i.Wm)(J,{class:"roundedNewsFeed"},{default:(0,i.w5)((function(){return[(0,i._)("div",Z,[(0,i._)("div",T,[(0,i.Wm)(G,{class:"row items-center q-pb-none"},{default:(0,i.w5)((function(){return[(0,i._)("div",F,(0,o.zw)(H.selectedOption)+" Recipe",1),(0,i.Wm)(le),(0,i.wy)((0,i.Wm)(L,{icon:"close",flat:"",round:"",dense:""},null,512),[[re]])]})),_:1}),(0,i.Wm)(G,{class:"row items-center q-pb-none"},{default:(0,i.w5)((function(){return[(0,i._)("p",Q," Are you sure you want to "+(0,o.zw)(H.selectedOption)+" this recipe? ",1)]})),_:1}),(0,i._)("div",V,[(0,i._)("div",$,[(0,i._)("div",z,[(0,i.Wm)(L,{label:"Cancel",class:"button default-button","no-caps":"",outline:"",color:"primary",style:{color:"#000000",width:"90%"},onClick:t[3]||(t[3]=function(e){return N.confirmChoice("cancel")})})]),(0,i._)("div",B,[(0,i.Wm)(L,{color:"primary",style:{width:"90%"},label:"Confirm",class:"button default-button","no-caps":"",onClick:t[4]||(t[4]=function(e){return N.confirmChoice("confirm")})})])])])])])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})}var N=n(46264),A=n.n(N),E=(n(65716),n(46727),n(69665),n(33100)),K=n(43038),Y=n(6827),L=n(4376),G=n(56290),J={name:"ManageRecipes",created:function(){this.$emitter.on("headerRightIcon2Click",this.gotoSearch),this.$emitter.on("onformatDateClick",this.formatDate),this.$emitter.on("onExitFullscreen",this.closeFullScreen)},beforeUnmount:function(){this.$emitter.off("headerRightIcon2Click",this.gotoSearch),this.$emitter.off("onformatDateClick",this.formatDate),this.$emitter.off("onExitFullscreen",this.closeFullScreen)},computed:A()(A()(A()({},(0,E.Se)("recipe",["recipes","publishedRecipes","submittedRecipes","draftRecipes","rejectedRecipes","unpublishedRecipes"])),(0,E.Se)("config",["blobBaseUrl"])),(0,E.Se)("userprofile",["userDetails","userRoles"])),components:{FullScreen:K.Z,ManageBlogOption:G.Z},mounted:function(){this.userRoles&&!this.userRoles.some((function(e){return[2].includes(e.id)}))&&this.$router.push("index"),this.setHeaderData(!1,!0,"Manage Recipes","","","",!0,!0),this.fetchRecipes()},data:function(){return{tab:"Published",fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:""},selectedRecipe:null,recipeOptionModel:!1,confirmModal:!1,selectedOption:""}},methods:A()(A()(A()({},(0,E.nv)("header",["setHeader"])),(0,E.nv)("recipe",["fetchRecipe","storeContent","fetchRecipes","updateRecipeStatus"])),{},{setHeaderData:function(e,t,n,i,o,l,c,r){this.setHeader({hamburgerIcon:e,backIcon:t,title:n,rightIcon1:i,rightIcon2:o,rightLinkText:l,notificationIcon:c,searchIcon:r})},truncateFun:function(e,t,n){return null===e?"":(null===e||void 0===e?void 0:e.length)>t?e.substring(0,t)+n:e},formatDate:function(e){return L.ZP.formatDate(e,"DD MMM")+" at "+L.ZP.formatDate(e,"hh.mm A")},gotoSearch:function(){this.$router.push("/recipe-search")},backButtonClick:function(){this.$router.push("dashboard")},goToCreateRecipe:function(){this.$router.push("/create-edit-recipe")},goToUserRecipe:function(e){this.$router.push("/user-recipe/"+e)},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen(),this.selectedRecipe={};var e=document.getElementById("image-box");e.setAttribute("style","display:none;")}},getImageurl:function(e){return e},openRecipeOptionModel:function(e){this.selectedRecipe=e,this.recipeOptionModel=!0},selectedManageOption:function(e){this.selectedOption=e,this.recipeOptionModel=!1,this.confirmModal=!0},confirmChoice:function(e){var t=this;if("confirm"===e){var n="Approve"===this.selectedOption||"Publish"===this.selectedOption?"Published":"Reject"===this.selectedOption?"Rejected":"Unpublish"===this.selectedOption?"Unpublished":"";this.updateRecipeStatus({id:this.selectedRecipe.id,status:n}).then((function(e){Y.Z.create({progress:!0,message:"Recipe Status Updated Successfully",type:"positive"}),t.selectedOption="",t.selectedRecipe=null,t.confirmModal=!1}))}else this.selectedRecipe=null,this.confirmModal=!1,this.selectedOption=""},isImagePost:function(e){return"image"===e.split("/")[0]}})},X=n(11639),ee=n(69885),te=n(44458),ne=n(47817),ie=n(57661),oe=n(50926),le=n(89800),ce=n(84106),re=n(91487),se=n(30875),ue=n(63190),ae=n(68879),de=n(32074),pe=n(90136),fe=n(62146),me=n(69984),ge=n.n(me);const he=(0,X.Z)(J,[["render",H],["__scopeId","data-v-ed3468b2"]]);var be=he;ge()(J,"components",{QPage:ee.Z,QCard:te.Z,QTabs:ne.Z,QTab:ie.Z,QSeparator:oe.Z,QTabPanels:le.Z,QTabPanel:ce.Z,QImg:re.Z,QIntersection:se.Z,QCardSection:ue.Z,QBtn:ae.Z,QDialog:de.Z,QSpace:pe.Z}),ge()(J,"directives",{ClosePopup:fe.Z})}}]);