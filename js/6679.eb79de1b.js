"use strict";(self["webpackChunkSonuto"]=self["webpackChunkSonuto"]||[]).push([[6679],{49217:function(e,t,i){i.r(t),i.d(t,{default:function(){return fe}});var n=i(59835),o=i(86970),r=function(e){return(0,n.dD)("data-v-3c84d9c5"),e=e(),(0,n.Cn)(),e},l={class:"q-gutter-y-md",style:{width:"100%"}},s=["src"],c={class:"text-h5 q-mt-sm q-mb-xs blog-title"},u=["innerHTML"],a=r((function(){return(0,n._)("span",{class:"action"},"Like",-1)})),d=r((function(){return(0,n._)("span",{class:"action"},"Comment",-1)})),p=r((function(){return(0,n._)("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Comment",-1)})),m=["src"],f=["src"],h={class:"row"},k={class:"subtitle"},w={key:0},g={class:"row"},C={class:"col"},_=r((function(){return(0,n._)("p",{class:"comment",style:{display:"inline-block","word-break":"break-word"}},null,-1)})),v=["src"],y=r((function(){return(0,n._)("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Related Posts",-1)})),W={class:"q-pa-md mostReadSection",style:{"padding-top":"0px !important"}},b={class:"favorite-pic-section"},R={class:"row no-wrap item-section"},D=["onClick"],x={class:"appStar"},q=r((function(){return(0,n._)("div",{class:"text-h6"},"Delete comment",-1)})),I=r((function(){return(0,n._)("span",{class:"q-ml-sm"},"Deleting the comment will remove it from the conversation",-1)})),M={id:"image-box",ref:"fullscreenElement"};function P(e,t,i,r,P,S){var Z=(0,n.up)("q-img"),$=(0,n.up)("q-card-section"),A=(0,n.up)("q-btn"),L=(0,n.up)("q-card-actions"),T=(0,n.up)("q-card"),B=(0,n.up)("q-avatar"),O=(0,n.up)("q-input"),V=(0,n.up)("q-item-section"),F=(0,n.up)("q-icon"),z=(0,n.up)("q-item"),Q=(0,n.up)("q-list"),j=(0,n.up)("q-menu"),U=(0,n.up)("truncate"),E=(0,n.up)("q-intersection"),N=(0,n.up)("q-scroll-area"),H=(0,n.up)("q-dialog"),K=(0,n.up)("AddNewsFeed"),Y=(0,n.up)("FullScreen"),G=(0,n.up)("BlogVlogOption"),J=(0,n.up)("DeletePostWarning"),X=(0,n.up)("ShareAction"),ee=(0,n.up)("q-page"),te=(0,n.Q2)("close-popup");return e.recipe?((0,n.wg)(),(0,n.j4)(ee,{key:0,class:"flex"},{default:(0,n.w5)((function(){return[(0,n._)("div",l,[(0,n.Wm)(T,{class:"my-card",flat:"",bordered:""},{default:(0,n.w5)((function(){return[e.recipe.CoverPhoto&&S.isImagePost(e.recipe.CoverPhoto.mime)?((0,n.wg)(),(0,n.j4)(Z,{key:0,src:S.getImageurl(e.recipe.CoverPhoto.url),class:"blog-cover",onClick:t[0]||(t[0]=function(t){return S.oneClick(e.recipe)})},null,8,["src"])):e.recipe.CoverPhoto&&!1===S.isImagePost(e.recipe.CoverPhoto.mime)?((0,n.wg)(),(0,n.iD)("video",{key:1,src:e.recipe.CoverPhoto.url,class:"video-player",autoplay:"",controls:"",controlsList:"nodownload"},null,8,s)):(0,n.kq)("",!0),(0,n.Wm)($,null,{default:(0,n.w5)((function(){return[(0,n._)("div",c,(0,o.zw)(e.recipe.Title),1),(0,n._)("div",{class:"text-caption blog-description",innerHTML:e.recipe.Content},null,8,u)]})),_:1}),"Published"===e.recipe.Status?((0,n.wg)(),(0,n.j4)(L,{key:2,class:"icons",align:"between"},{default:(0,n.w5)((function(){return[(0,n.Wm)(A,{flat:"",icon:S.likeColour(),size:"10px","no-caps":"",disabled:e.likeActionReq,onClick:t[1]||(t[1]=function(t){return S.setLikeForRecipe(parseInt(e.recipe.id))})},{default:(0,n.w5)((function(){return[a]})),_:1},8,["icon","disabled"]),(0,n.Wm)(A,{flat:"",icon:"app:comment",onClick:t[2]||(t[2]=function(t){return S.recipeComment(e.recipe.id)}),size:"10px","no-caps":""},{default:(0,n.w5)((function(){return[d]})),_:1}),(0,n.Wm)(A,{flat:"",icon:"app:share",size:"10px","no-caps":""},{default:(0,n.w5)((function(){return[(0,n._)("span",{class:"action",onClick:t[3]||(t[3]=function(t){return S.shareNewsfeed(e.recipe)})},"Share")]})),_:1})]})),_:1})):(0,n.kq)("",!0)]})),_:1})]),e.recipe&&"Published"===e.recipe.Status?((0,n.wg)(),(0,n.j4)(T,{key:0,class:"my-card",flat:"",bordered:"",style:{width:"100%"}},{default:(0,n.w5)((function(){return[(0,n.Wm)($,null,{default:(0,n.w5)((function(){return[p]})),_:1}),(0,n.Wm)($,{class:"comment-input",style:{width:"100%"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(V,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(O,{rounded:"",outlined:"",modelValue:P.commentText,"onUpdate:modelValue":t[5]||(t[5]=function(e){return P.commentText=e}),placeholder:"Write a Message",dense:P.dense},{before:(0,n.w5)((function(){return[null!=e.userprofileDetail&&null!=e.userprofileDetail.avatar?((0,n.wg)(),(0,n.j4)(B,{key:0,size:"34px"},{default:(0,n.w5)((function(){return[(0,n._)("img",{src:"".concat(e.userprofileDetail.avatar.url)},null,8,m)]})),_:1})):((0,n.wg)(),(0,n.j4)(B,{key:1,size:"34px",color:"primary","text-color":"white"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(e.userDetails.userprofile.firstname.charAt(0)),1)]})),_:1}))]})),after:(0,n.w5)((function(){return[(0,n.Wm)(A,{round:"",dense:"",flat:"",icon:"send",onClick:t[4]||(t[4]=function(e){return S.postRecipeComment()}),disable:0==P.commentText.length,style:{color:"#6B7BC7"}},null,8,["disable"])]})),_:1},8,["modelValue","dense"])]})),_:1})]})),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.recipe.recipe_comments,(function(i){return(0,n.wg)(),(0,n.j4)(E,{transition:"scale",once:"",key:i.id},{default:(0,n.w5)((function(){return[(0,n.Wm)($,{horizontal:""},{default:(0,n.w5)((function(){return[!1!==P.edit||null!==P.selectedComment&&P.selectedComment.id!==i.id?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)($,{key:0},{default:(0,n.w5)((function(){return[(0,n.Wm)(V,{avatar:"",class:"avatar-section"},{default:(0,n.w5)((function(){return[null!=e.userprofileDetail&&null!=e.userprofileDetail.avatar?((0,n.wg)(),(0,n.j4)(B,{key:0,size:"34px"},{default:(0,n.w5)((function(){return[(0,n._)("img",{src:"".concat(e.userprofileDetail.avatar.url)},null,8,f)]})),_:1})):((0,n.wg)(),(0,n.j4)(B,{key:1,size:"34px",color:"primary","text-color":"white"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(e.userDetails.userprofile.firstname.charAt(0)),1)]})),_:1}))]})),_:1})]})),_:1})),!1!==P.edit||null!==P.selectedComment&&P.selectedComment.id!==i.id?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)($,{key:1,class:"comment-section"},{default:(0,n.w5)((function(){return[(0,n.Wm)(V,null,{default:(0,n.w5)((function(){return[(0,n._)("div",h,[(0,n._)("div",{class:"title col",onClick:t[6]||(t[6]=function(t){return S.goToProfile(e.userprofile)})},(0,o.zw)(i.userprofile.firstname)+" "+(0,o.zw)(i.userprofile.lastname),1),(0,n._)("div",k,"("+(0,o.zw)(S.formatDate(i.created_at))+")",1),i.userprofile===e.userprofileDetail.id?((0,n.wg)(),(0,n.iD)("div",w,[(0,n.Wm)(A,{color:"grey-7",round:"",flat:"",icon:"app:three-dot-action",size:"8px"},{default:(0,n.w5)((function(){return[(0,n.Wm)(j,{cover:"","auto-close":""},{default:(0,n.w5)((function(){return[(0,n.Wm)(Q,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(z,{clickable:"",onClick:function(e){return S.editComment(i),P.edit=!0}},{default:(0,n.w5)((function(){return[(0,n.Wm)(V,{avatar:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(F,{name:"create"})]})),_:1}),(0,n.Wm)(V,null,{default:(0,n.w5)((function(){return[(0,n.Uk)("Edit Comment")]})),_:1})]})),_:2},1032,["onClick"]),(0,n.Wm)(z,{clickable:"",onClick:function(e){return S.editComment(i),P.confirm=!0}},{default:(0,n.w5)((function(){return[(0,n.Wm)(V,{avatar:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(F,{name:"delete"})]})),_:1}),(0,n.Wm)(V,null,{default:(0,n.w5)((function(){return[(0,n.Uk)("Delete Comment")]})),_:1})]})),_:2},1032,["onClick"])]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)])):(0,n.kq)("",!0)]),(0,n._)("div",g,[(0,n._)("div",C,[(0,n.Wm)(U,{class:"comment",clamp:"...See More",type:"text",length:60,less:"Show Less",text:i.comment,"action-class":"collapsedText"},null,8,["text"]),_])])]})),_:2},1024)]})),_:2},1024)),i.userprofile===e.userprofileDetail.id&&!0===P.edit&&null!=P.selectedComment&&P.selectedComment.id===i.id?((0,n.wg)(),(0,n.j4)($,{key:2,class:"comment-input",style:{width:"100%","margin-top":"10px"}},{default:(0,n.w5)((function(){return[(0,n.Wm)(V,null,{default:(0,n.w5)((function(){return[(0,n.Wm)(O,{rounded:"",outlined:"",modelValue:P.selectedComment.comment,"onUpdate:modelValue":t[8]||(t[8]=function(e){return P.selectedComment.comment=e}),placeholder:"Write a Message",dense:P.dense},{before:(0,n.w5)((function(){return[null!=e.userprofileDetail&&null!=e.userprofileDetail.avatar?((0,n.wg)(),(0,n.j4)(B,{key:0,size:"34px"},{default:(0,n.w5)((function(){return[(0,n._)("img",{src:"".concat(e.userprofileDetail.avatar.url)},null,8,v)]})),_:1})):((0,n.wg)(),(0,n.j4)(B,{key:1,size:"34px",color:"primary","text-color":"white"},{default:(0,n.w5)((function(){return[(0,n.Uk)((0,o.zw)(e.userDetails.userprofile.firstname.charAt(0)),1)]})),_:1}))]})),after:(0,n.w5)((function(){return[(0,n.Wm)(F,{name:"close",onClick:S.resetEdit,class:"cursor-pointer"},null,8,["onClick"]),(0,n.Wm)(A,{round:"",dense:"",flat:"",icon:"send",onClick:t[7]||(t[7]=function(e){return S.putRecipeComment()}),style:{color:"#6B7BC7"}})]})),_:1},8,["modelValue","dense"])]})),_:1})]})),_:1})):(0,n.kq)("",!0)]})),_:2},1024)]})),_:2},1024)})),128))]})),_:1})):(0,n.kq)("",!0),S.relatedRecipes().length?((0,n.wg)(),(0,n.j4)(T,{key:1,class:"my-card",flat:"",bordered:"",style:{width:"100%"}},{default:(0,n.w5)((function(){return[(0,n.Wm)($,null,{default:(0,n.w5)((function(){return[y]})),_:1}),(0,n._)("div",W,[(0,n._)("div",b,[(0,n.Wm)(N,{class:"scroll"},{default:(0,n.w5)((function(){return[(0,n._)("div",R,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(S.relatedRecipes(),(function(t){return(0,n.wg)(),(0,n.j4)(E,{transition:"scale",class:"item",key:t.id},{default:(0,n.w5)((function(){return[(0,n.Wm)(Z,{class:"blog-image",src:S.getImageurl(t.CoverPhoto.url),onClick:function(i){return e.goToRecipe(t.id)}},null,8,["src","onClick"]),(0,n._)("div",{class:"BMiCal",onClick:function(i){return e.goToRecipe(t.id)}},(0,o.zw)(t.Title),9,D),(0,n._)("div",x,(0,o.zw)(t.recipe_comments.length)+" Comments",1)]})),_:2},1024)})),128))])]})),_:1})])])]})),_:1})):(0,n.kq)("",!0),(0,n.Wm)(H,{modelValue:P.confirm,"onUpdate:modelValue":t[9]||(t[9]=function(e){return P.confirm=e}),persistent:""},{default:(0,n.w5)((function(){return[(0,n.Wm)(T,null,{default:(0,n.w5)((function(){return[(0,n.Wm)($,{class:"row items-center"},{default:(0,n.w5)((function(){return[q]})),_:1}),(0,n.Wm)($,{class:"row items-center"},{default:(0,n.w5)((function(){return[I]})),_:1}),(0,n.Wm)(L,{align:"right"},{default:(0,n.w5)((function(){return[(0,n.wy)((0,n.Wm)(A,{flat:"",label:"Cancel"},null,512),[[te]]),(0,n.wy)((0,n.Wm)(A,{flat:"",label:"Delete",onClick:S.deleteComment},null,8,["onClick"]),[[te]])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,n.Wm)(H,{modelValue:P.addNewsFeedModel,"onUpdate:modelValue":t[10]||(t[10]=function(e){return P.addNewsFeedModel=e})},{default:(0,n.w5)((function(){return[(0,n.Wm)(K,{url:P.currenturl},null,8,["url"])]})),_:1},8,["modelValue"]),(0,n._)("div",M,[(0,n.Wm)(Y,{details:P.fullscreendata,likeActionReq:e.likeActionReq},null,8,["details","likeActionReq"])],512),(0,n.Wm)(H,{modelValue:P.postOptionModel,"onUpdate:modelValue":t[11]||(t[11]=function(e){return P.postOptionModel=e}),position:"bottom"},{default:(0,n.w5)((function(){return[(0,n.Wm)(G,{isMyProfilePost:P.isMyPost,onClickedSelectedOption:S.clickedSelectedOptionModal},null,8,["isMyProfilePost","onClickedSelectedOption"])]})),_:1},8,["modelValue"]),(0,n.Wm)(H,{modelValue:P.postWarningModal,"onUpdate:modelValue":t[12]||(t[12]=function(e){return P.postWarningModal=e}),position:"bottom"},{default:(0,n.w5)((function(){return[(0,n.Wm)(J,{postType:P.postType,onDeleteSelectedOption:S.deleteSelectedOption},null,8,["postType","onDeleteSelectedOption"])]})),_:1},8,["modelValue"]),(0,n.Wm)(H,{modelValue:P.shareActionModel,"onUpdate:modelValue":t[13]||(t[13]=function(e){return P.shareActionModel=e}),position:"bottom"},{default:(0,n.w5)((function(){return[(0,n.Wm)(X,{sharePost:P.sharePostId,isBlogPost:!1,isRecipePost:!0,postOwner:P.postOwner},null,8,["sharePost","postOwner"])]})),_:1},8,["modelValue"])]})),_:1})):(0,n.kq)("",!0)}var S=i(46264),Z=i.n(S),$=(i(51393),i(56072),i(65716),i(18381),i(58665),i(69665),i(62590),i(4376)),A=i(6827),L=i(33100),T=i(79736),B=i(48217),O=i(43038),V=i(85541),F=i(80156),z=i(31551),Q={name:"UserRecipe",computed:Z()(Z()(Z()({},(0,L.Se)("recipe",["recipe","recipes"])),(0,L.Se)("userprofile",["userDetails","userprofileDetail"])),(0,L.Se)("config",["blobBaseUrl"])),beforeRouteLeave:function(e,t,i){this.$emitter.off("headerBackButtonClick",this.backButtonClick),this.$emitter.off("headerRightIcon2Click",this.gotoSearch),this.$emitter.off("onlikeClick",this.setLikeForRecipe),this.$emitter.off("onsetSelectedClick",this.recipeComment),this.$emitter.off("onformatDateClick",this.formatDate),this.$emitter.off("onExitFullscreen",this.closeFullScreen),i()},mounted:function(){this.setHeaderData(!1,!0,"User Recipe","","","",!1,!1),this.fetchRecipe(this.$route.params.id),this.fetchRecipes(),this.title=this.recipe&&this.recipe.Title,this.content=this.recipe&&this.recipe.Content,this.image=this.recipe&&this.recipe.CoverPhoto&&this.recipe.CoverPhoto.url,this.recipe_keywords=this.recipe&&this.recipe.recipe_keywords,this.$emitter.on("headerRightIcon2Click",this.gotoSearch),this.$emitter.on("headerBackButtonClick",this.backButtonClick),this.$emitter.on("onlikeClick",this.setLikeForRecipe),this.$emitter.on("onsetSelectedClick",this.recipeComment),this.$emitter.on("onformatDateClick",this.formatDate),this.$emitter.on("onExitFullscreen",this.closeFullScreen)},data:function(){return{tab:"",slide:1,autoplay:!0,commentText:"",ph:"",dense:!1,selectedComment:null,confirm:!1,edit:!1,addNewsFeedModel:!1,currenturl:window.location.href,title:"",content:"",image:null,recipe_keywords:null,framework:{plugins:["Meta"]},fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:"",hideBack:!1},delay:700,clicks:0,timer:null,isMyPost:!1,postOptionModel:!1,postWarningModal:!1,postType:"recipe",shareActionModel:!1,sharePostId:null,postOwner:null}},components:{truncate:T.Z,AddNewsFeed:B.Z,FullScreen:O.Z,BlogVlogOption:V.Z,DeletePostWarning:F.Z,ShareAction:z.Z},watch:{"$route.params.id":function(e){e&&this.fetchRecipe(e)}},meta:function(){return{title:this.recipe.Title,meta:{description:{name:"description",content:this.content},url:{name:"url",content:this.currenturl},image:{name:"image",content:this.image}}}},methods:Z()(Z()(Z()({},(0,L.nv)("header",["setHeader"])),(0,L.nv)("recipe",["fetchRecipe","fetchRecipes","postRecipeComments","putRecipeComments","deleteRecipeComments","postRecipeLikes","deleteRecipeLikes","deleteRecipe"])),{},{setHeaderData:function(e,t,i,n,o,r,l,s){this.setHeader({hamburgerIcon:e,backIcon:t,title:i,rightIcon1:n,rightIcon2:o,rightLinkText:r,notificationIcon:l,searchIcon:s})},truncate:function(e,t,i){return null===e?"":(null===e||void 0===e?void 0:e.length)>t?e.substring(0,t)+i:e},relatedRecipes:function(){var e=this,t=this.recipe&&this.recipe.recipe_categories&&this.recipe.recipe_categories.map((function(e){return e.id}))||[],i=this.recipes&&this.recipes.filter((function(i){var n=i.recipe_categories&&i.recipe_categories.some((function(e){return t.some((function(t){return t===e.id}))}))&&i.id!==e.recipe.id&&"Published"===i.Status;return n}));return i},setLikeForRecipe:function(e){var t=this,i=this.recipe.recipelikes.find((function(e){return parseInt(e.userprofile.id)===t.userprofileDetail.id}));this.likeActionReq=!0,void 0===i?this.postRecipeLikes({userprofileId:this.userprofileDetail.id,recipeId:e}).then((function(){t.fetchRecipe(t.$route.params.id).then((function(){t.fullscreendata.likeIcon=t.likeColour(),t.fullscreendata.likeLength=t.recipe.recipelikes.length,t.likeActionReq=!1}))})):this.deleteRecipeLikes({recipeLikeId:i.id}).then((function(){t.fetchRecipe(t.$route.params.id).then((function(){t.fullscreendata.likeIcon=t.likeColour(),t.fullscreendata.likeLength=t.recipe.recipelikes.length,t.likeActionReq=!1}))}))},likeColour:function(){var e=this;if(!this.recipe.recipelikes)return"app:like";var t=this.recipe.recipelikes.find((function(t){return parseInt(t.userprofile.id)===e.userprofileDetail.id}));return void 0!==t?"app:like-blue":"app:like"},formatDate:function(e){return $.ZP.formatDate(e,"DD MMM")+" at "+$.ZP.formatDate(e,"hh.mm A")},editComment:function(e){this.selectedComment=Object.assign({},e)},postRecipeComment:function(){var e=this;this.postRecipeComments({comment:this.commentText,recipeId:this.$route.params.id,userprofile:this.userprofileDetail.id}).then((function(){e.commentText="",e.fetchRecipe(e.$route.params.id)}))},resetEdit:function(){this.selectedComment=null,this.edit=!1},putRecipeComment:function(){var e=this;this.putRecipeComments(this.selectedComment).then((function(){e.selectedComment=null,e.edit=!1,e.fetchRecipe(e.$route.params.id)}))},deleteComment:function(){var e=this;this.deleteRecipeComments(this.selectedComment.id).then((function(){e.selectedComment=null,e.fetchRecipe(e.$route.params.id)}))},backButtonClick:function(){this.$router.push("/user-recipes")},recipeComment:function(e){this.$router.push("/recipe-comment/"+e)},gotoSearch:function(){this.$router.push("/recipe-search")},showAddNewsFeedModel:function(){this.addNewsFeedModel=!0},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var e=document.getElementById("image-box");e.setAttribute("style","display:none;"),this.fullscreendata.hideBack=!0}},getfullScreen:function(e){this.fullscreendata.hideBack=!1,this.fullscreendata.url=e.CoverPhoto.url,this.fullscreendata.name=e.userprofile.firstname+" "+e.userprofile.lastname,this.fullscreendata.feedtext=e.Content,this.fullscreendata.created_at=e.created_at,this.fullscreendata.likeLength=e.recipelikes.length,this.fullscreendata.commentLength=e.recipe_comments.length,this.fullscreendata.id=e.id,this.fullscreendata.likeIcon=this.likeColour();var t=document.getElementById("image-box");t.setAttribute("style","display:flex;");var i=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(i).then((function(){})).catch((function(e){alert(e)}))},oneClick:function(e){if(this.clicks++,1===this.clicks){var t=this;this.timer=setTimeout((function(){t.clicks=0,t.getfullScreen(e)}),this.delay)}else clearTimeout(this.timer),this.clicks=0,this.likeColour(),this.likeActionReq||this.setLikeForRecipe(parseInt(e.id))},getImageurl:function(e){var t=e.substring(e.lastIndexOf("/")+1),i=this.blobBaseUrl;return e=i+t,e},goToProfile:function(e){e===this.userDetails.userprofile.id?this.$router.push("/profile"):this.$router.push("/user-profile/"+e)},openRecipeOptionModel:function(){parseInt(this.recipe.userprofile.id)===parseInt(this.userDetails.userprofile.id)?this.isMyPost=!0:this.isMyPost=!1,this.postOptionModel=!0},clickedSelectedOptionModal:function(e){switch(this.postOptionModel=!1,e){case"delete":this.postType="Recipe",this.postWarningModal=!0;break}},deleteSelectedOption:function(e){var t=this;"cancel"===e?(this.isMyPost=!1,this.postWarningModal=!1):(this.deleteRecipe(parseInt(this.recipe.id)).then((function(){A.Z.create({progress:!0,message:"Recipe Delete Successfully",type:"postive"}),t.$router.push("recipes/home")})),this.isMyPost=!1,this.postWarningModal=!1)},isImagePost:function(e){return"image"===e.split("/")[0]},shareNewsfeed:function(e){var t,i,n;return this.$auth.isAuthenticated()?null===(null===(t=this.userDetails)||void 0===t?void 0:t.verification)||"Approved"!==(null===(i=this.userDetails)||void 0===i||null===(n=i.verification)||void 0===n?void 0:n.status)?(this.verifcationStatusModal=!0,!1):(this.sharePostId=e.id,this.shareActionModel=!0,void(this.postOwner=e.userprofile.user.id||null)):(this.$router.push("/welcome"),!1)}})},j=i(11639),U=i(69885),E=i(44458),N=i(91487),H=i(63190),K=i(76749),Y=i(61357),G=i(33115),J=i(68879),X=i(11821),ee=i(13119),te=i(30875),ie=i(56362),ne=i(13246),oe=i(490),re=i(22857),le=i(66663),se=i(32074),ce=i(30627),ue=i(18149),ae=i(62146),de=i(69984),pe=i.n(de);const me=(0,j.Z)(Q,[["render",P],["__scopeId","data-v-3c84d9c5"]]);var fe=me;pe()(Q,"components",{QPage:U.Z,QCard:E.Z,QImg:N.Z,QCardSection:H.Z,QItemSection:K.Z,QAvatar:Y.Z,QItemLabel:G.Z,QBtn:J.Z,QCardActions:X.Z,QInput:ee.Z,QIntersection:te.Z,QMenu:ie.Z,QList:ne.Z,QItem:oe.Z,QIcon:re.Z,QScrollArea:le.Z,QDialog:se.Z,QPageSticky:ce.Z,QField:ue.Z}),pe()(Q,"directives",{ClosePopup:ae.Z})}}]);