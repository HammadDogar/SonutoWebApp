(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"33d4":function(e,t,i){"use strict";var s=i("85cf"),r=i.n(s);r.a},4810:function(e,t,i){"use strict";var s=i("b9eb"),r=i.n(s);r.a},"85cf":function(e,t,i){},"9da2":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex"},[i("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[i("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[e.recipe.CoverPhoto&&e.isImagePost(e.recipe.CoverPhoto.mime)?i("q-img",{staticClass:"blog-cover",attrs:{src:e.getImageurl(e.recipe.CoverPhoto.url)},on:{click:function(t){return e.oneClick(e.recipe)}}}):e.recipe.CoverPhoto&&!1===e.isImagePost(e.recipe.CoverPhoto.mime)?i("video",{staticClass:"video-player",attrs:{src:e.recipe.CoverPhoto.url,autoplay:"",controls:"",controlsList:"nodownload"}}):e._e(),i("q-card-section",[e.recipe.userprofile?i("div",{staticClass:"row items-center no-wrap"},[i("div",{staticClass:"col"},[i("q-card-section",{attrs:{horizontal:""}},[i("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[e.recipe.userprofile.avatar?i("q-avatar",{attrs:{size:"34px"}},[i("img",{attrs:{src:""+e.recipe.userprofile.avatar.url}})]):e.recipe.userprofile.firstname?i("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                  "+e._s(e.recipe.userprofile.firstname.charAt(0))+"\n                ")]):e.recipe.userprofile.username?i("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                  "+e._s(e.recipe.userprofile.username.charAt(0))+"\n                ")]):e._e()],1),i("q-item-section",[i("q-item-label",{staticClass:"title",on:{click:function(t){e.goToProfile(parseInt(e.recipe.userprofile.id))}}},[e._v("\n                  "+e._s(e.recipe.userprofile.firstname)+"\n                  "+e._s(e.recipe.userprofile.lastname)+"\n                ")]),i("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[e._v("\n                  "+e._s(e.formatDate(e.recipe.created_at))+"\n                ")])],1)],1)],1),parseInt(e.recipe.userprofile.id)===parseInt(e.userDetails.userprofile.id)&&"Published"!==e.recipe.Status&&"Unpublished"!==e.recipe.Status?i("div",{staticClass:"col-auto"},[i("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(t){return e.openRecipeOptionModel()}}})],1):e._e()]):e._e(),i("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title"},[e._v(e._s(e.recipe.Title))]),i("div",{staticClass:"text-caption blog-description",domProps:{innerHTML:e._s(e.recipe.Content)}})]),"Published"===e.recipe.Status?i("q-card-actions",{staticClass:"icons",attrs:{align:"between"}},[i("q-btn",{attrs:{flat:"",icon:e.likeColour(),size:"10px","no-caps":""},on:{click:function(t){e.setLikeForRecipe(parseInt(e.recipe.id))}}},[i("span",{staticClass:"action"},[e._v("Like")])]),i("q-btn",{attrs:{flat:"",icon:"app:comment",size:"10px","no-caps":""},on:{click:function(t){return e.recipeComment(e.recipe.id)}}},[i("span",{staticClass:"action"},[e._v("Comment")])]),i("q-btn",{attrs:{flat:"",icon:"app:share",size:"10px","no-caps":""}},[i("span",{staticClass:"action",on:{click:function(t){return e.shareNewsfeed(e.recipe)}}},[e._v("Share")])])],1):e._e()],1)],1),"Published"===e.recipe.Status?i("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:"",bordered:""}},[i("q-card-section",[i("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[e._v("Comment")])]),i("q-card-section",{staticClass:"comment-input",staticStyle:{width:"100%"}},[i("q-item-section",[i("q-input",{attrs:{rounded:"",outlined:"",placeholder:"Write a Message",dense:e.dense},scopedSlots:e._u([{key:"before",fn:function(){return[null!=e.userprofileDetail&&null!=e.userprofileDetail.avatar?i("q-avatar",{attrs:{size:"34px"}},[i("img",{attrs:{src:""+e.userprofileDetail.avatar.url}})]):i("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n              "+e._s(e.userDetails.userprofile.firstname.charAt(0))+"\n            ")])]},proxy:!0},{key:"after",fn:function(){return[i("q-btn",{staticStyle:{color:"#6B7BC7"},attrs:{round:"",dense:"",flat:"",icon:"send",disable:0==e.commentText.length},on:{click:function(t){return e.postRecipeComment()}}})]},proxy:!0}],null,!1,106360612),model:{value:e.commentText,callback:function(t){e.commentText=t},expression:"commentText"}})],1)],1),e._l(e.recipe.recipe_comments,(function(t){return i("q-intersection",{key:t.id,attrs:{transition:"scale",once:""}},[i("q-card-section",{attrs:{horizontal:""}},[!1!==e.edit||null!==e.selectedComment&&e.selectedComment.id!==t.id?e._e():i("q-card-section",[i("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[null!=e.userprofileDetail&&null!=e.userprofileDetail.avatar?i("q-avatar",{attrs:{size:"34px"}},[i("img",{attrs:{src:""+e.userprofileDetail.avatar.url}})]):i("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n              "+e._s(e.userDetails.userprofile.firstname.charAt(0))+"\n            ")])],1)],1),!1!==e.edit||null!==e.selectedComment&&e.selectedComment.id!==t.id?e._e():i("q-card-section",{staticClass:"comment-section"},[i("q-item-section",[i("div",{staticClass:"row"},[i("div",{staticClass:"title col",on:{click:function(t){return e.goToProfile(e.userprofile)}}},[e._v("\n                "+e._s(t.userprofile.firstname)+" "+e._s(t.userprofile.lastname)+"\n              ")]),i("div",{staticClass:"subtitle"},[e._v("("+e._s(e.formatDate(t.created_at))+")")]),t.userprofile===e.userprofileDetail.id?i("div",[i("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dot-action",size:"8px"}},[i("q-menu",{attrs:{cover:"","auto-close":""}},[i("q-list",[i("q-item",{attrs:{clickable:""},on:{click:function(i){e.editComment(t),e.edit=!0}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"create"}})],1),i("q-item-section",[e._v("Edit Comment")])],1),i("q-item",{attrs:{clickable:""},on:{click:function(i){e.editComment(t),e.confirm=!0}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:"delete"}})],1),i("q-item-section",[e._v("Delete Comment")])],1)],1)],1)],1)],1):e._e()]),i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("truncate",{staticClass:"comment",attrs:{clamp:"...See More",type:"text",length:60,less:"Show Less",text:t.comment,"action-class":"collapsedText"}}),i("p",{staticClass:"comment",staticStyle:{display:"inline-block","word-break":"break-word"}})],1)])])],1),t.userprofile===e.userprofileDetail.id&&!0===e.edit&&null!=e.selectedComment&&e.selectedComment.id===t.id?i("q-card-section",{staticClass:"comment-input",staticStyle:{width:"100%","margin-top":"10px"}},[i("q-item-section",[i("q-input",{attrs:{rounded:"",outlined:"",placeholder:"Write a Message",dense:e.dense},scopedSlots:e._u([{key:"before",fn:function(){return[null!=e.userprofileDetail&&null!=e.userprofileDetail.avatar?i("q-avatar",{attrs:{size:"34px"}},[i("img",{attrs:{src:""+e.userprofileDetail.avatar.url}})]):i("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                  "+e._s(e.userDetails.userprofile.firstname.charAt(0))+"\n                ")])]},proxy:!0},{key:"after",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:e.resetEdit}}),i("q-btn",{staticStyle:{color:"#6B7BC7"},attrs:{round:"",dense:"",flat:"",icon:"send"},on:{click:function(t){return e.putRecipeComment()}}})]},proxy:!0}],null,!0),model:{value:e.selectedComment.comment,callback:function(t){e.$set(e.selectedComment,"comment",t)},expression:"selectedComment.comment"}})],1)],1):e._e()],1)],1)}))],2):e._e(),e.relatedRecipes().length?i("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:"",bordered:""}},[i("q-card-section",[i("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[e._v("Related Posts")])]),i("div",{staticClass:"q-pa-md mostReadSection",staticStyle:{"padding-top":"0px !important"}},[i("div",{staticClass:"favorite-pic-section"},[i("q-scroll-area",{staticClass:"scroll",attrs:{horizontal:""}},[i("div",{staticClass:"row no-wrap item-section"},e._l(e.relatedRecipes(),(function(t){return i("q-intersection",{key:t.id,staticClass:"item",attrs:{transition:"scale"}},[i("q-img",{staticClass:"blog-image",attrs:{src:e.getImageurl(t.CoverPhoto.url)},on:{click:function(i){return e.goToRecipe(t.id)}}}),i("div",{staticClass:"BMiCal",on:{click:function(i){return e.goToRecipe(t.id)}}},[e._v(e._s(t.Title))]),i("div",{staticClass:"appStar"},[e._v(e._s(t.recipe_comments.length)+" Comments")])],1)})),1)])],1)])],1):e._e(),i("q-dialog",{attrs:{persistent:""},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}},[i("q-card",[i("q-card-section",{staticClass:"row items-center"},[i("div",{staticClass:"text-h6"},[e._v("Delete comment")])]),i("q-card-section",{staticClass:"row items-center"},[i("span",{staticClass:"q-ml-sm"},[e._v("Deleting the comment will remove it from the conversation")])]),i("q-card-actions",{attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Delete"},on:{click:e.deleteComment}})],1)],1)],1),i("q-dialog",{model:{value:e.addNewsFeedModel,callback:function(t){e.addNewsFeedModel=t},expression:"addNewsFeedModel"}},[i("AddNewsFeed",{attrs:{url:e.currenturl}})],1),i("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[i("FullScreen",{attrs:{details:e.fullscreendata}})],1),i("q-dialog",{attrs:{position:"bottom"},model:{value:e.postOptionModel,callback:function(t){e.postOptionModel=t},expression:"postOptionModel"}},[i("BlogVlogOption",{attrs:{isMyProfilePost:e.isMyPost},on:{"clicked-selected-Option":e.clickedSelectedOptionModal}})],1),i("q-dialog",{attrs:{position:"bottom"},model:{value:e.postWarningModal,callback:function(t){e.postWarningModal=t},expression:"postWarningModal"}},[i("DeletePostWarning",{attrs:{postType:e.postType},on:{"delete-selected-option":e.deleteSelectedOption}})],1),i("q-dialog",{attrs:{position:"bottom"},model:{value:e.shareActionModel,callback:function(t){e.shareActionModel=t},expression:"shareActionModel"}},[i("ShareAction",{attrs:{sharePost:e.sharePostId,isBlogPost:!1,isRecipePost:!0}})],1)],1)},r=[],o=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("28a5"),i("7f7f"),i("f751"),i("7514"),i("9523")),a=i.n(o),n=i("bd4c"),c=i("2a19"),l=i("2f62"),p=i("e017"),u=i("9d56"),d=i("d41a"),m=i("f2d8"),f=i("23cc"),h=i("9f2b");function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function C(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){a()(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var g={name:"UserRecipe",computed:C(C(C({},Object(l["c"])("recipe",["recipe","recipes"])),Object(l["c"])("userprofile",["userDetails","userprofileDetail"])),Object(l["c"])("config",["blobBaseUrl"])),beforeRouteLeave:function(e,t,i){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch),this.$root.$off("onlikeClick",this.setLikeForRecipe),this.$root.$off("onsetSelectedClick",this.recipeComment),this.$root.$off("onformatDateClick",this.formatDate),this.$root.$off("onExitFullscreen",this.closeFullScreen),i()},mounted:function(){this.setHeaderData(!1,!0,"User Recipe","","","",!1,!1),this.fetchRecipe(this.$route.params.id),this.fetchRecipes(),this.title=this.recipe&&this.recipe.Title,this.content=this.recipe&&this.recipe.Content,this.image=this.recipe&&this.recipe.CoverPhoto&&this.recipe.CoverPhoto.url,this.recipe_keywords=this.recipe&&this.recipe.recipe_keywords,this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("onlikeClick",this.setLikeForRecipe),this.$root.$on("onsetSelectedClick",this.recipeComment),this.$root.$on("onformatDateClick",this.formatDate),this.$root.$on("onExitFullscreen",this.closeFullScreen)},filters:{truncate:function(e,t,i){return e.length>t?e.substring(0,t)+i:e}},data:function(){return{tab:"",slide:1,autoplay:!0,commentText:"",ph:"",dense:!1,selectedComment:null,confirm:!1,edit:!1,addNewsFeedModel:!1,currenturl:window.location.href,title:"",content:"",image:null,recipe_keywords:null,framework:{plugins:["Meta"]},fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:"",hideBack:!1},delay:700,clicks:0,timer:null,isMyPost:!1,postOptionModel:!1,postWarningModal:!1,postType:"recipe",shareActionModel:!1,sharePostId:null}},components:{truncate:p["a"],AddNewsFeed:u["a"],FullScreen:d["a"],BlogVlogOption:m["a"],DeletePostWarning:f["a"],ShareAction:h["a"]},watch:{"$route.params.id":function(e){this.fetchRecipe(e)}},meta:function(){return{title:this.recipe.Title,meta:{description:{name:"description",content:this.content},url:{name:"url",content:this.currenturl},image:{name:"image",content:this.image}}}},methods:C(C(C({},Object(l["b"])("header",["setHeader"])),Object(l["b"])("recipe",["fetchRecipe","fetchRecipes","postRecipeComments","putRecipeComments","deleteRecipeComments","postRecipeLikes","deleteRecipeLikes","deleteRecipe"])),{},{setHeaderData:function(e,t,i,s,r,o,a,n){this.setHeader({hamburgerIcon:e,backIcon:t,title:i,rightIcon1:s,rightIcon2:r,rightLinkText:o,notificationIcon:a,searchIcon:n})},relatedRecipes:function(){var e=this,t=this.recipe&&this.recipe.recipe_categories&&this.recipe.recipe_categories.map((function(e){return e.id}))||[],i=this.recipes&&this.recipes.filter((function(i){var s=i.recipe_categories&&i.recipe_categories.some((function(e){return t.some((function(t){return t===e.id}))}))&&i.id!==e.recipe.id&&"Published"===i.Status;return s}));return i},setLikeForRecipe:function(e){var t=this,i=this.recipe.recipelikes.find((function(e){return parseInt(e.userprofile.id)===t.userprofileDetail.id}));void 0===i?this.postRecipeLikes({userprofileId:this.userprofileDetail.id,recipeId:e}).then((function(){t.fetchRecipe(t.$route.params.id).then((function(){t.fullscreendata.likeIcon=t.likeColour(),t.fullscreendata.likeLength=t.recipe.recipelikes.length}))})):this.deleteRecipeLikes({recipeLikeId:i.id}).then((function(){t.fetchRecipe(t.$route.params.id).then((function(){t.fullscreendata.likeIcon=t.likeColour(),t.fullscreendata.likeLength=t.recipe.recipelikes.length}))}))},likeColour:function(){var e=this;if(!this.recipe.recipelikes)return"app:like";var t=this.recipe.recipelikes.find((function(t){return parseInt(t.userprofile.id)===e.userprofileDetail.id}));return void 0!==t?"app:like-blue":"app:like"},formatDate:function(e){return n["a"].formatDate(e,"DD MMM")+" at "+n["a"].formatDate(e,"hh.mm A")},editComment:function(e){this.selectedComment=Object.assign({},e)},postRecipeComment:function(){var e=this;this.postRecipeComments({comment:this.commentText,recipeId:this.$route.params.id,userprofile:this.userprofileDetail.id}).then((function(){e.commentText="",e.fetchRecipe(e.$route.params.id)}))},resetEdit:function(){this.selectedComment=null,this.edit=!1},putRecipeComment:function(){var e=this;this.putRecipeComments(this.selectedComment).then((function(){e.selectedComment=null,e.edit=!1,e.fetchRecipe(e.$route.params.id)}))},deleteComment:function(){var e=this;this.deleteRecipeComments(this.selectedComment.id).then((function(){e.selectedComment=null,e.fetchRecipe(e.$route.params.id)}))},backButtonClick:function(){this.$router.push("/user-recipes")},recipeComment:function(e){this.$router.push("/recipe-comment/"+e)},gotoSearch:function(){this.$router.push("/recipe-search")},showAddNewsFeedModel:function(){this.addNewsFeedModel=!0},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var e=document.getElementById("image-box");e.setAttribute("style","display:none;"),this.fullscreendata.hideBack=!0}},getfullScreen:function(e){this.fullscreendata.hideBack=!1,this.fullscreendata.url=e.CoverPhoto.url,this.fullscreendata.name=e.userprofile.firstname+" "+e.userprofile.lastname,this.fullscreendata.feedtext=e.Content,this.fullscreendata.created_at=e.created_at,this.fullscreendata.likeLength=e.recipelikes.length,this.fullscreendata.commentLength=e.recipe_comments.length,this.fullscreendata.id=e.id,this.fullscreendata.likeIcon=this.likeColour();var t=document.getElementById("image-box");t.setAttribute("style","display:flex;");var i=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(i).then((function(){})).catch((function(e){alert(e)}))},oneClick:function(e){if(this.clicks++,1===this.clicks){var t=this;this.timer=setTimeout((function(){t.clicks=0,t.getfullScreen(e)}),this.delay)}else clearTimeout(this.timer),this.clicks=0,this.likeColour(),this.setLikeForRecipe(parseInt(e.id))},getImageurl:function(e){return e},goToProfile:function(e){e===this.userDetails.userprofile.id?this.$router.push("/profile"):this.$router.push("/user-profile/"+e)},openRecipeOptionModel:function(){parseInt(this.recipe.userprofile.id)===parseInt(this.userDetails.userprofile.id)?this.isMyPost=!0:this.isMyPost=!1,this.postOptionModel=!0},clickedSelectedOptionModal:function(e){switch(this.postOptionModel=!1,e){case"delete":this.postType="Recipe",this.postWarningModal=!0;break}},deleteSelectedOption:function(e){var t=this;"cancel"===e?(this.isMyPost=!1,this.postWarningModal=!1):(this.deleteRecipe(parseInt(this.recipe.id)).then((function(){c["a"].create({progress:!0,message:"Recipe Delete Successfully",type:"postive"}),t.$router.push("recipes/home")})),this.isMyPost=!1,this.postWarningModal=!1)},isImagePost:function(e){return"image"===e.split("/")[0]},shareNewsfeed:function(e){var t,i,s;return this.$auth.isAuthenticated()?null===(null===(t=this.userDetails)||void 0===t?void 0:t.verification)||"Approved"!==(null===(i=this.userDetails)||void 0===i||null===(s=i.verification)||void 0===s?void 0:s.status)?(this.verifcationStatusModal=!0,!1):(this.sharePostId=e.id,void(this.shareActionModel=!0)):(this.$router.push("/welcome"),!1)}})},k=g,b=(i("4810"),i("33d4"),i("2877")),q=i("9989"),y=i("f09f"),_=i("068f"),x=i("a370"),w=i("4074"),D=i("cb32"),P=i("0170"),R=i("9c40"),S=i("4b7e"),M=i("27f9"),I=i("ad56"),$=i("4e73"),O=i("1c1c"),T=i("66e5"),L=i("0016"),A=i("4983"),F=i("24e8"),B=i("de5e"),Q=i("8572"),j=i("7f67"),z=i("eebe"),E=i.n(z),N=Object(b["a"])(k,s,r,!1,null,"dc41ed30",null);t["default"]=N.exports;E()(N,"components",{QPage:q["a"],QCard:y["a"],QImg:_["a"],QCardSection:x["a"],QItemSection:w["a"],QAvatar:D["a"],QItemLabel:P["a"],QBtn:R["a"],QCardActions:S["a"],QInput:M["a"],QIntersection:I["a"],QMenu:$["a"],QList:O["a"],QItem:T["a"],QIcon:L["a"],QScrollArea:A["a"],QDialog:F["a"],QPageSticky:B["a"],QField:Q["a"]}),E()(N,"directives",{ClosePopup:j["a"]})},b9eb:function(e,t,i){}}]);