"use strict";(self["webpackChunkSonuto"]=self["webpackChunkSonuto"]||[]).push([[4017],{98404:function(e,t,i){i.r(t),i.d(t,{default:function(){return we}});var n=i(59835),o=i(86970),r=function(e){return(0,n.dD)("data-v-1ccf5c7e"),e=e(),(0,n.Cn)(),e},l={class:"q-gutter-y-md",style:{width:"100%"}},s=["src"],c={class:"text-h5 q-mt-sm q-mb-xs blog-title"},u=["innerHTML"],a=r((function(){return(0,n._)("span",{class:"action post-interaction-text"},"Like",-1)})),d=r((function(){return(0,n._)("span",{class:"action post-interaction-text"},"Comment",-1)})),p=r((function(){return(0,n._)("span",{class:"action post-interaction-text"},"Share",-1)})),m=r((function(){return(0,n._)("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Comment",-1)})),f=["src"],h=["src"],k={class:"row justify-center"},v=["onClick"],w={class:"subtitle"},g={key:0},C={class:"row"},_={class:"col"},y=r((function(){return(0,n._)("p",{class:"comment",style:{display:"inline-block","word-break":"break-word"}},null,-1)})),b=["src"],W=r((function(){return(0,n._)("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Related Recipes",-1)})),R={class:"q-pa-md mostReadSection",style:{"padding-top":"0px !important"}},q={class:"favorite-pic-section"},D={class:"row no-wrap item-section"},I=["onClick"],x={class:"appStar"},S=r((function(){return(0,n._)("div",{class:"text-h6"},"Delete comment",-1)})),M=r((function(){return(0,n._)("span",{class:"q-ml-sm"},"Deleting the comment will remove it from the conversation",-1)})),A={id:"image-box",ref:"fullscreenElement"};function P(e,t,i,r,P,$){var Z=(0,n.up)("q-tab"),T=(0,n.up)("q-tabs"),L=(0,n.up)("q-separator"),B=(0,n.up)("q-img"),O=(0,n.up)("q-card-section"),Q=(0,n.up)("q-btn"),V=(0,n.up)("q-card-actions"),z=(0,n.up)("q-item-label"),j=(0,n.up)("q-card"),F=(0,n.up)("q-avatar"),U=(0,n.up)("q-input"),E=(0,n.up)("q-item-section"),H=(0,n.up)("q-icon"),N=(0,n.up)("q-item"),K=(0,n.up)("q-list"),Y=(0,n.up)("q-menu"),G=(0,n.up)("truncate"),J=(0,n.up)("q-intersection"),X=(0,n.up)("q-scroll-area"),ee=(0,n.up)("q-dialog"),te=(0,n.up)("FullScreen"),ie=(0,n.up)("BlogVlogOption"),ne=(0,n.up)("DeletePostWarning"),oe=(0,n.up)("ShareAction"),re=(0,n.up)("q-page"),le=(0,n.Q2)("close-popup");return e.recipe?((0,n.wg)(),(0,n.j4)(re,{key:0,class:"flex"},{default:(0,n.w5)((function(){return[(0,n._)("div",l,[(0,n.Wm)(j,{class:"my-card",flat:"",bordered:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(T,{modelValue:P.tab,"onUpdate:modelValue":t[0]||(t[0]=function(e){return P.tab=e}),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,n.w5)((function(){return[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.recipesCategory,(function(e){return(0,n.wg)(),(0,n.j4)(Z,{"no-caps":"",onClick:function(t){return $.goToRecipes(e.Name)},key:e.id,name:e.Name,label:e.Name},null,8,["onClick","name","label"])})),128))]})),_:1},8,["modelValue"]),(0,n.Wm)(L),e.recipe.CoverPhoto&&$.isImagePost(e.recipe.CoverPhoto.mime)?((0,n.wg)(),(0,n.j4)(B,{key:0,src:$.getImageurl(e.recipe.CoverPhoto.url),onClick:t[1]||(t[1]=function(t){return $.oneClick(e.recipe)})},null,8,["src"])):e.recipe.CoverPhoto&&!1===$.isImagePost(e.recipe.CoverPhoto.mime)?((0,n.wg)(),(0,n.iD)("video",{key:1,src:e.recipe.CoverPhoto.url,class:"video-player",autoplay:"",controls:"",controlsList:"nodownload"},null,8,s)):(0,n.kq)("",!0),(0,n.Wm)(O,null,{default:(0,n.w5)((function(){return[(0,n._)("div",c,(0,o.zw)(e.recipe.Title),1),(0,n._)("div",{class:"text-caption blog-description",innerHTML:e.recipe.Content},null,8,u)]})),_:1}),(0,n.Wm)(V,{class:"icons",align:"between"},{default:(0,n.w5)((function(){return[(0,n._)("div",null,[(0,n.Wm)(Q,{flat:"",icon:$.likeColour(),"no-caps":"",disabled:P.likeActionReq,onClick:t[2]||(t[2]=function(t){return $.setLikeForRecipe(parseInt(e.recipe.id))}),class:"post-actions q-mr-md like-interaction-icon"},{default:(0,n.w5)((function(){return[a]})),_:1},8,["icon","disabled"]),(0,n.Wm)(Q,{flat:"",icon:"app:comment-vector",onClick:t[3]||(t[3]=function(t){return $.recipeComment(e.recipe.id)}),"no-caps":"",class:"post-actions comment-interaction-icon"},{default:(0,n.w5)((function(){return[d]})),_:1})]),(0,n.Wm)(Q,{flat:"",icon:"app:share-vector","no-caps":"",onClick:t[4]||(t[4]=function(t){return $.shareNewsfeed(e.recipe)}),class:"post-actions share-interaction-icon"},{default:(0,n.w5)((function(){return[p]})),_:1})]})),_:1}),e.recipe.recipelikes?((0,n.wg)(),(0,n.j4)(V,{key:2,align:"between",class:"post-like-comment-info"},{default:(0,n.w5)((function(){return[(0,n.Wm)(z,{class:"q-mt-none"},{default:(0,n.w5)((function(){return[(0,n.Uk)(" Liked by "+(0,o.zw)(e.recipe.recipelikes.length),1)]})),_:1}),(0,n.Wm)(z,{class:"comment-count"},{default:(0,n.w5)((function(){return[(0,n.Uk)("Comments ("+(0,o.zw)(e.recipe.recipe_comments.length)+") ",1)]})),_:1})]})),_:1})):(0,n.kq)("",!0)]})),_:1})]),(0,n.Wm)(j,{class:"my-card",flat:"",bordered:"",style:{width:"100%"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(O,null,{default:(0,n.w5)((function(){return[m]})),_:1}),(0,n.Wm)(O,{class:"comment-input",style:{width:"100%"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(E,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(U,{rounded:"",outlined:"",modelValue:P.commentText,"onUpdate:modelValue":t[6]||(t[6]=function(e){return P.commentText=e}),placeholder:"Add a comment",dense:P.dense},{before:(0,n.w5)((function(){return[null!=e.userprofileDetail&&null!=e.userprofileDetail.avatar?((0,n.wg)(),(0,n.j4)(F,{key:0,size:"34px"},{default:(0,n.w5)((function(){return[(0,n._)("img",{src:"".concat(e.userprofileDetail.avatar.url)},null,8,f)]})),_:1})):((0,n.wg)(),(0,n.j4)(F,{key:1,size:"34px",color:"primary","text-color":"white"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(e.userDetails.userprofile.firstname.charAt(0)),1)]})),_:1}))]})),default:(0,n.w5)((function(){return[(0,n.Wm)(Q,{round:"",dense:"",flat:"",icon:"app:send-comment-vector",onClick:t[5]||(t[5]=function(e){return $.postRecipeComment()}),disable:0==P.commentText.length,style:{color:"#6B7BC7"}},null,8,["disable"])]})),_:1},8,["modelValue","dense"])]})),_:1})]})),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.recipe.recipe_comments,(function(i){return(0,n.wg)(),(0,n.j4)(J,{transition:"scale",once:"",key:i.id},{default:(0,n.w5)((function(){return[(0,n.Wm)(O,{horizontal:""},{default:(0,n.w5)((function(){return[!1!==P.edit||null!==P.selectedComment&&P.selectedComment.id!==i.id?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(O,{key:0},{default:(0,n.w5)((function(){return[(0,n.Wm)(E,{avatar:"",class:"avatar-section"},{default:(0,n.w5)((function(){return[null!=i.userprofile.avatar?((0,n.wg)(),(0,n.j4)(F,{key:0,size:"34px"},{default:(0,n.w5)((function(){return[(0,n._)("img",{src:"".concat(i.userprofile.avatar.url)},null,8,h)]})),_:2},1024)):((0,n.wg)(),(0,n.j4)(F,{key:1,size:"34px",color:"primary","text-color":"white"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(i.userprofile.firstname.charAt(0)),1)]})),_:2},1024))]})),_:2},1024)]})),_:2},1024)),!1!==P.edit||null!==P.selectedComment&&P.selectedComment.id!==i.id?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(O,{key:1,class:"comment-section"},{default:(0,n.w5)((function(){return[(0,n.Wm)(E,null,{default:(0,n.w5)((function(){return[(0,n._)("div",k,[(0,n._)("div",{class:"title col",onClick:function(e){return $.goToProfile(parseInt(i.userprofile.id))}},(0,o.zw)(i.userprofile.firstname)+" "+(0,o.zw)(i.userprofile.lastname),9,v),(0,n._)("div",w,"("+(0,o.zw)($.formatDate(i.created_at))+")",1),parseInt(i.userprofile.id)===e.userprofileDetail.id?((0,n.wg)(),(0,n.iD)("div",g,[(0,n.Wm)(Q,{color:"grey-7",round:"",flat:"",icon:"app:three-dot-action",size:"8px"},{default:(0,n.w5)((function(){return[(0,n.Wm)(Y,{cover:"","auto-close":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(K,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(N,{clickable:"",onClick:function(e){return $.editComment(i),P.edit=!0}},{default:(0,n.w5)((function(){return[(0,n.Wm)(E,{avatar:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(H,{name:"create"})]})),_:1}),(0,n.Wm)(E,null,{default:(0,n.w5)((function(){return[(0,n.Uk)("Edit Comment")]})),_:1})]})),_:2},1032,["onClick"]),(0,n.Wm)(N,{clickable:"",onClick:function(e){return $.editComment(i),P.confirm=!0}},{default:(0,n.w5)((function(){return[(0,n.Wm)(E,{avatar:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(H,{name:"delete"})]})),_:1}),(0,n.Wm)(E,null,{default:(0,n.w5)((function(){return[(0,n.Uk)("Delete Comment")]})),_:1})]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)])):(0,n.kq)("",!0)]),(0,n._)("div",C,[(0,n._)("div",_,[(0,n.Wm)(G,{class:"comment",clamp:"...See More",type:"text",length:60,less:"Show Less",text:i.comment,"action-class":"collapsedText"},null,8,["text"]),y])])]})),_:2},1024)]})),_:2},1024)),parseInt(i.userprofile.id)===e.userprofileDetail.id&&!0===P.edit&&null!=P.selectedComment&&P.selectedComment.id===i.id?((0,n.wg)(),(0,n.j4)(O,{key:2,class:"comment-input",style:{width:"100%","margin-top":"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(E,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(U,{rounded:"",outlined:"",modelValue:P.selectedComment.comment,"onUpdate:modelValue":t[8]||(t[8]=function(e){return P.selectedComment.comment=e}),placeholder:"Write a Message",dense:P.dense},{before:(0,n.w5)((function(){return[null!=e.userprofileDetail&&null!=e.userprofileDetail.avatar?((0,n.wg)(),(0,n.j4)(F,{key:0,size:"34px"},{default:(0,n.w5)((function(){return[(0,n._)("img",{src:"".concat(e.userprofileDetail.avatar.url)},null,8,b)]})),_:1})):((0,n.wg)(),(0,n.j4)(F,{key:1,size:"34px",color:"primary","text-color":"white"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(e.userDetails.userprofile.firstname.charAt(0)),1)]})),_:1}))]})),after:(0,n.w5)((function(){return[(0,n.Wm)(H,{name:"close",onClick:$.resetEdit,class:"cursor-pointer"},null,8,["onClick"]),(0,n.Wm)(Q,{round:"",dense:"",flat:"",icon:"send",onClick:t[7]||(t[7]=function(e){return $.putRecipeComment()}),style:{color:"#6B7BC7"}})]})),_:1},8,["modelValue","dense"])]})),_:1})]})),_:1})):(0,n.kq)("",!0)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1}),$.relatedRecipes().length?((0,n.wg)(),(0,n.j4)(j,{key:0,class:"my-card",flat:"",bordered:"",style:{width:"100%"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(O,null,{default:(0,n.w5)((function(){return[W]})),_:1}),(0,n._)("div",R,[(0,n._)("div",q,[(0,n.Wm)(X,{class:"scroll"},{default:(0,n.w5)((function(){return[(0,n._)("div",D,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)($.relatedRecipes(),(function(e){return(0,n.wg)(),(0,n.iD)("div",{class:"item",key:e.id},[(0,n.Wm)(B,{class:"blog-image",src:$.getImageurl(e.CoverPhoto.url),onClick:function(t){return $.goToRecipe(e.id)}},null,8,["src","onClick"]),(0,n._)("div",{class:"BMiCal",onClick:function(t){return $.goToRecipe(e.id)}},(0,o.zw)(e.Title),9,I),(0,n._)("div",x,(0,o.zw)(e.recipe_comments.length)+" Comments",1)])})),128))])]})),_:1})])])]})),_:1})):(0,n.kq)("",!0),(0,n.Wm)(ee,{modelValue:P.confirm,"onUpdate:modelValue":t[9]||(t[9]=function(e){return P.confirm=e}),persistent:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(j,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(O,{class:"row items-center"},{default:(0,n.w5)((function(){return[S]})),_:1}),(0,n.Wm)(O,{class:"row items-center"},{default:(0,n.w5)((function(){return[M]})),_:1}),(0,n.Wm)(V,{align:"right"},{default:(0,n.w5)((function(){return[(0,n.wy)((0,n.Wm)(Q,{flat:"",label:"Cancel"},null,512),[[le]]),(0,n.wy)((0,n.Wm)(Q,{flat:"",label:"Delete",onClick:$.deleteComment},null,8,["onClick"]),[[le]])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,n._)("div",A,[(0,n.Wm)(te,{details:P.fullscreendata,likeActionReq:P.likeActionReq},null,8,["details","likeActionReq"])],512),(0,n.Wm)(ee,{modelValue:P.postOptionModel,"onUpdate:modelValue":t[10]||(t[10]=function(e){return P.postOptionModel=e}),position:"bottom"},{default:(0,n.w5)((function(){return[(0,n.Wm)(ie,{isMyProfilePost:P.isMyPost,onClickedSelectedOption:$.clickedSelectedOptionModal},null,8,["isMyProfilePost","onClickedSelectedOption"])]})),_:1},8,["modelValue"]),(0,n.Wm)(ee,{modelValue:P.postWarningModal,"onUpdate:modelValue":t[11]||(t[11]=function(e){return P.postWarningModal=e}),position:"bottom"},{default:(0,n.w5)((function(){return[(0,n.Wm)(ne,{postType:P.postType,onDeleteSelectedOption:$.deleteSelectedOption},null,8,["postType","onDeleteSelectedOption"])]})),_:1},8,["modelValue"]),(0,n.Wm)(ee,{modelValue:P.shareActionModel,"onUpdate:modelValue":t[12]||(t[12]=function(e){return P.shareActionModel=e}),position:"bottom"},{default:(0,n.w5)((function(){return[(0,n.Wm)(oe,{sharePost:P.sharePostId,isBlogPost:!1,isRecipePost:!0,postOwner:P.postOwner},null,8,["sharePost","postOwner"])]})),_:1},8,["modelValue"])]})),_:1})):(0,n.kq)("",!0)}var $=i(46264),Z=i.n($),T=(i(51393),i(56072),i(65716),i(69665),i(18381),i(58665),i(62590),i(4376)),L=i(6827),B=i(33100),O=i(79736),Q=i(43038),V=i(80156),z=i(85541),j=i(31551),F={name:"Recipe",computed:Z()(Z()(Z()({},(0,B.Se)("userprofile",["userDetails","userprofileDetail"])),(0,B.Se)("recipe",["recipe","recipesCategory","recipes"])),(0,B.Se)("config",["blobBaseUrl"])),created:function(){this.$emitter.on("footerAddIconClick",this.showAddNewsFeedModel),this.$emitter.on("headerRightIcon2Click",this.gotoSearch),this.$emitter.on("headerBackButtonClick",this.backButtonClick),this.$emitter.on("onlikeClick",this.setLikeForRecipe),this.$emitter.on("onsetSelectedClick",this.recipeComment),this.$emitter.on("onformatDateClick",this.formatDate),this.$emitter.on("onExitFullscreen",this.closeFullScreen)},beforeUnmount:function(){this.$emitter.off("footerAddIconClick",this.showAddNewsFeedModel),this.$emitter.off("headerBackButtonClick",this.backButtonClick),this.$emitter.off("headerRightIcon2Click",this.gotoSearch),this.$emitter.off("onsetSelectedClick",this.recipeComment),this.$emitter.off("onformatDateClick",this.formatDate),this.$emitter.off("onExitFullscreen",this.closeFullScreen)},mounted:function(){var e,t;this.$auth.isAuthenticated(),this.setHeaderData(!1,!0,"Recipe","","","",!1,!1),this.fetchRecipe(null===(e=this.$route)||void 0===e||null===(t=e.query)||void 0===t?void 0:t.id),this.fetchRecipes(!1)},data:function(){return{tab:"",slide:1,autoplay:!0,commentText:"",ph:"",dense:!1,selectedComment:null,confirm:!1,edit:!1,fullscreendata:{url:null,hideBack:!0,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:""},delay:700,clicks:0,timer:null,postOptionModel:!1,postWarningModal:!1,isMyPost:!1,postType:"blog",shareActionModel:!1,sharePostId:null,postOwner:null,likeActionReq:!1}},components:{truncate:O.Z,FullScreen:Q.Z,DeletePostWarning:V.Z,BlogVlogOption:z.Z,ShareAction:j.Z},watch:{"$route.query.id":function(e){e&&this.fetchRecipe(e)}},methods:Z()(Z()(Z()({},(0,B.nv)("header",["setHeader"])),(0,B.nv)("recipe",["fetchRecipe","fetchRecipes","postRecipeComments","putRecipeComments","deleteRecipeComments","postRecipeLikes","deleteRecipeLikes","deleteRecipe"])),{},{setHeaderData:function(e,t,i,n,o,r,l,s){this.setHeader({hamburgerIcon:e,backIcon:t,title:i,rightIcon1:n,rightIcon2:o,rightLinkText:r,notificationIcon:l,searchIcon:s})},truncate:function(e,t,i){return null===e?"":(null===e||void 0===e?void 0:e.length)>t?e.substring(0,t)+i:e},relatedRecipes:function(){var e=this,t=this.recipe&&this.recipe.recipe_categories&&this.recipe.recipe_categories.map((function(e){return e.id})),i=this.recipes&&this.recipes.filter((function(i){var n,o=(null===i||void 0===i||null===(n=i.recipe_categories)||void 0===n?void 0:n.some((function(e){return null===t||void 0===t?void 0:t.some((function(t){return t===e.id}))})))&&i.id!==e.recipe.id&&"Published"===i.Status;return o}));return i},setLikeForRecipe:function(e){var t,i,n,o=this;if(!this.$auth.isAuthenticated())return this.$router.push("/welcome"),!1;if(this.likeActionReq=!0,null===(null===(t=this.userDetails)||void 0===t?void 0:t.verification)||"Approved"!==(null===(i=this.userDetails)||void 0===i||null===(n=i.verification)||void 0===n?void 0:n.status))return this.verifcationStatusModal=!0,this.likeActionReq=!1,!1;var r=this.recipe.recipelikes.find((function(e){return parseInt(e.userprofile.id)===o.userprofileDetail.id}));void 0===r?this.postRecipeLikes({userprofileId:this.userprofileDetail.id,recipeId:e}).then((function(){o.fetchRecipe(e).then((function(){o.fullscreendata.likeIcon=o.likeColour(),o.fullscreendata.likeLength=o.recipe.recipelikes.length,o.likeActionReq=!1}))})):this.deleteRecipeLikes({recipeLikeId:r.id}).then((function(){o.fetchRecipe(e).then((function(){o.fullscreendata.likeIcon=o.likeColour(),o.fullscreendata.likeLength=o.recipe.recipelikes.length,o.likeActionReq=!1}))}))},likeColour:function(){var e=this;if(!this.recipe.recipelikes)return"app:like-vector";var t=this.recipe.recipelikes.find((function(t){return parseInt(t.userprofile.id)===e.userprofileDetail.id}));return void 0!==t?"app:like-filled-vector":"app:like-vector"},formatDate:function(e){return T.ZP.formatDate(e,"DD MMM")+" at "+T.ZP.formatDate(e,"hh.mm A")},editComment:function(e){this.selectedComment=Object.assign({},e)},postRecipeComment:function(){var e=this;this.postRecipeComments({comment:this.commentText,recipeId:this.$route.query.id,userprofile:this.userprofileDetail.id}).then((function(){e.commentText="",e.fetchRecipe(e.$route.query.id)}))},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var e=document.getElementById("image-box");e.setAttribute("style","display:none;"),this.fullscreendata.hideBack=!0}},getfullScreen:function(e){this.fullscreendata.hideBack=!1,this.fullscreendata.url=e.CoverPhoto.url,this.fullscreendata.name=e.userprofile.firstname+" "+e.userprofile.lastname,this.fullscreendata.feedtext=e.Content,this.fullscreendata.created_at=e.created_at,this.fullscreendata.likeLength=e.recipelikes.length,this.fullscreendata.commentLength=e.recipe_comments.length,this.fullscreendata.id=parseInt(e.id),this.fullscreendata.likeIcon=this.likeColour();var t=document.getElementById("image-box");t.setAttribute("style","display:flex;");var i=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(i).then((function(){})).catch((function(e){alert(e)}))},resetEdit:function(){this.selectedComment=null,this.edit=!1},putRecipeComment:function(){var e=this;this.putRecipeComments(this.selectedComment).then((function(){e.selectedComment=null,e.edit=!1,e.fetchRecipe(e.$route.query.id)}))},deleteComment:function(){var e=this;this.deleteRecipeComments(this.selectedComment.id).then((function(){e.selectedComment=null,e.fetchRecipe(e.$route.query.id)}))},backButtonClick:function(){this.$router.push("/recipes/AllRecipes")},goToRecipe:function(e){this.$router.push({path:"/recipe",query:{id:e}})},recipeComment:function(e){var t,i,n;return this.$auth.isAuthenticated()?null===(null===(t=this.userDetails)||void 0===t?void 0:t.verification)||"Approved"!==(null===(i=this.userDetails)||void 0===i||null===(n=i.verification)||void 0===n?void 0:n.status)?(this.verifcationStatusModal=!0,!1):void this.$router.push("/recipe-comment/"+e):(this.$router.push("/welcome"),!1)},gotoSearch:function(){this.$router.push("/recipe-search")},goToProfile:function(e){e===this.userDetails.userprofile.id?this.$router.push("/profile"):this.$router.push("/user-profile/"+e)},oneClick:function(e){if(this.clicks++,1===this.clicks){var t=this;this.timer=setTimeout((function(){t.clicks=0,t.getfullScreen(e)}),this.delay)}else clearTimeout(this.timer),this.clicks=0,this.likeColour(),this.likeActionReq||this.setLikeForRecipe(parseInt(e.id))},goToRecipes:function(e){this.$router.push("/recipes/"+e)},getImageurl:function(e){var t=e.substring(e.lastIndexOf("/")+1),i=this.blobBaseUrl;return e=i+t,e},showAddNewsFeedModel:function(){var e,t,i;return this.$auth.isAuthenticated()?null===(null===(e=this.userDetails)||void 0===e?void 0:e.verification)||"Approved"!==(null===(t=this.userDetails)||void 0===t||null===(i=t.verification)||void 0===i?void 0:i.status)?(this.verifcationStatusModal=!0,!1):void 0:(this.$router.push("/welcome"),!1)},isImagePost:function(e){return"image"===e.split("/")[0]},clickedSelectedOptionModal:function(e){switch(this.postOptionModel=!1,e){case"delete":this.postType="Recipe",this.postWarningModal=!0;break}},openRecipeOptionModel:function(){parseInt(this.recipe.userprofile.id)===parseInt(this.userDetails.userprofile.id)?this.isMyPost=!0:this.isMyPost=!1,this.postOptionModel=!0},deleteSelectedOption:function(e){var t=this;"cancel"===e?(this.isMyPost=!1,this.postWarningModal=!1):(this.deleteRecipe(parseInt(this.recipe.id)).then((function(){L.Z.create({progress:!0,message:"Recipe Deleted Successfully",type:"postive"}),t.$router.push("recipes/home")})),this.isMyPost=!1,this.postWarningModal=!1)},shareNewsfeed:function(e){var t,i,n;return this.$auth.isAuthenticated()?null===(null===(t=this.userDetails)||void 0===t?void 0:t.verification)||"Approved"!==(null===(i=this.userDetails)||void 0===i||null===(n=i.verification)||void 0===n?void 0:n.status)?(this.verifcationStatusModal=!0,!1):(this.sharePostId=e.id,this.shareActionModel=!0,void(this.postOwner=e.userprofile.user.id||null)):(this.$router.push("/welcome"),!1)}})},U=i(11639),E=i(69885),H=i(44458),N=i(47817),K=i(57661),Y=i(50926),G=i(91487),J=i(63190),X=i(76749),ee=i(61357),te=i(33115),ie=i(68879),ne=i(11821),oe=i(13119),re=i(30875),le=i(56362),se=i(13246),ce=i(490),ue=i(22857),ae=i(66663),de=i(32074),pe=i(30627),me=i(18149),fe=i(62146),he=i(69984),ke=i.n(he);const ve=(0,U.Z)(F,[["render",P],["__scopeId","data-v-1ccf5c7e"]]);var we=ve;ke()(F,"components",{QPage:E.Z,QCard:H.Z,QTabs:N.Z,QTab:K.Z,QSeparator:Y.Z,QImg:G.Z,QCardSection:J.Z,QItemSection:X.Z,QAvatar:ee.Z,QItemLabel:te.Z,QBtn:ie.Z,QCardActions:ne.Z,QInput:oe.Z,QIntersection:re.Z,QMenu:le.Z,QList:se.Z,QItem:ce.Z,QIcon:ue.Z,QScrollArea:ae.Z,QDialog:de.Z,QPageSticky:pe.Z,QField:me.Z}),ke()(F,"directives",{ClosePopup:fe.Z})}}]);