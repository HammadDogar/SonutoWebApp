(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{1980:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"page bg-white post-comment"},[s("div",{staticClass:"row"},[e.newsfeeds.selectedNewsfeed?s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"newsfeed-card",attrs:{flat:"",bordered:""}},[s("div",{staticClass:"row items-center no-wrap q-my-md"},[s("div",{staticClass:"col"},[e.newsfeeds.selectedNewsfeed.user?s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[e.newsfeeds.selectedNewsfeed.user.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+e.newsfeeds.selectedNewsfeed.user.userprofile.avatar.url}})]):s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                  "+e._s(e.newsfeeds.selectedNewsfeed.user.userprofile.firstname.charAt(0))+"\n                ")])],1),s("q-item-section",[s("q-item-label",{staticClass:"title",on:{click:function(t){e.goToProfile(parseInt(e.newsfeeds.selectedNewsfeed.user.userprofile.id))}}},[e._v("\n                  "+e._s(e.newsfeeds.selectedNewsfeed.user.userprofile.firstname)+"\n                  "+e._s(e.newsfeeds.selectedNewsfeed.user.userprofile.lastname))]),s("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[e._v(e._s(e.formatDate(e.newsfeeds.selectedNewsfeed.created_at))+"\n                ")])],1)],1):e._e()],1),s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{flat:"",icon:"app:three-dots"},on:{click:function(t){return e.openNewsFeedOptionModel(e.newsfeeds.selectedNewsfeed)}}})],1)]),s("q-card-section",{staticClass:"newsfeed-card-section block",attrs:{horizontal:""}},[e.newsfeeds.selectedNewsfeed.feedtext?s("q-item-section",{staticClass:"description q-mb-md post-description",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v(e._s(e.newsfeeds.selectedNewsfeed.feedtext))]):e._e(),e.newsfeeds.selectedNewsfeed.feedimage?s("div",[e.isImagePost(e.newsfeeds.selectedNewsfeed.feedimage.mime)?s("q-item-section",{staticClass:"description"},[e.newsfeeds.selectedNewsfeed.feedimage?s("q-img",{attrs:{src:e.getImageurl(e.newsfeeds.selectedNewsfeed.feedimage.url),basic:""},on:{error:function(t){return e.setError()},click:function(t){return e.oneClick(e.newsfeeds.selectedNewsfeed)}}}):e._e()],1):s("q-item-section",{staticClass:"description q-mt-sm"},[s("q-video",{staticStyle:{width:"100%",height:"410px"},attrs:{src:e.newsfeeds.selectedNewsfeed.feedimage.url}})],1)],1):e._e()],1),e.newsfeeds.selectedNewsfeed.parentPost?s("div",{staticClass:"share-post-section"},[e.newsfeeds.selectedNewsfeed.parentPost.user?s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("q-card-section",{attrs:{horizontal:""}},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.avatar.url}})]):null!=e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile?s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                      "+e._s(e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.firstname.charAt(0))+"\n                    ")]):e._e()],1),s("q-item-section",[s("q-item-label",{staticClass:"title",on:{click:function(t){e.goToProfile(parseInt(e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.id))}}},[e._v("\n                      "+e._s(e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.firstname)+"\n                      "+e._s(e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.lastname)+"\n                    ")]),s("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[e._v("\n                      "+e._s(e.formatDate(e.newsfeeds.selectedNewsfeed.parentPost.created_at))+"\n                    ")])],1)],1)],1)])]):e._e(),e.newsfeeds.selectedNewsfeed.parentPost.feedtext?s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[s("q-item-section",{staticClass:"description"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"q-mb-none post-description",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v("\n                    "+e._s(e.newsfeeds.selectedNewsfeed.parentPost.feedtext)+"\n                  ")])])])])],1):e._e(),e.newsfeeds.selectedNewsfeed.parentPost.feedimage?s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[e.isImagePost(e.newsfeeds.selectedNewsfeed.parentPost.feedimage.mime)?s("q-item-section",{staticClass:"description q-mt-sm"},[e.newsfeeds.selectedNewsfeed.parentPost.feedimage?s("q-img",{attrs:{src:e.getImageurl(e.newsfeeds.selectedNewsfeed.parentPost.feedimage.url),basic:""},on:{error:function(t){return e.setError()},click:function(t){0===e.clicks&&e.openFullScreen(e.newsfeeds.selectedNewsfeed.parentPost)}}}):e._e()],1):s("q-item-section",{staticClass:"description q-mt-sm"},[s("q-video",{staticStyle:{width:"100%",height:"410px"},attrs:{src:e.newsfeeds.selectedNewsfeed.parentPost.feedimage.url}})],1)],1):e._e()],1):e._e(),e.newsfeeds.selectedNewsfeed.blogPost?s("div",{staticClass:"share-post-section"},[s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[e.newsfeeds.selectedNewsfeed.blogPost?s("q-card-section",{attrs:{horizontal:""}},[e.newsfeeds.selectedNewsfeed.blogPost.userprofile?s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[e.newsfeeds.selectedNewsfeed.blogPost.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+e.newsfeeds.selectedNewsfeed.blogPost.userprofile.avatar.url}})]):null!=e.newsfeeds.selectedNewsfeed.blogPost.userprofile?s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                      "+e._s(e.newsfeeds.selectedNewsfeed.blogPost.userprofile.firstname.charAt(0))+"\n                    ")]):e._e()],1):e._e(),s("q-item-section",[e.newsfeeds.selectedNewsfeed.blogPost.userprofile?s("q-item-label",{staticClass:"title",on:{click:function(t){e.goToProfile(parseInt(e.newsfeeds.selectedNewsfeed.blogPost.userprofile.id))}}},[e._v("\n                      "+e._s(e.newsfeeds.selectedNewsfeed.blogPost.userprofile.firstname)+"\n                      "+e._s(e.newsfeeds.selectedNewsfeed.blogPost.userprofile.lastname)+"\n                    ")]):e._e(),s("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[e._v("\n                      "+e._s(e.formatDate(e.newsfeeds.selectedNewsfeed.blogPost.published_at))+"\n                    ")])],1)],1):e._e()],1)])]),e.newsfeeds.selectedNewsfeed.blogPost.Title?s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[s("q-item-section",{staticClass:"description"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"q-mb-none post-description",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v("\n                    "+e._s(e.newsfeeds.selectedNewsfeed.blogPost.Title)+"\n                  ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"q-mb-none read-blog",staticStyle:{display:"inline-block","word-break":"break-word"},on:{click:function(t){return e.goToBlog(e.newsfeeds.selectedNewsfeed.blogPost.id)}}},[e.newsfeeds.selectedNewsfeed.blogPost.IsVlog?s("span",[e._v("View")]):s("span",[e._v("Read")]),e._v("\n                    Full "),e.newsfeeds.selectedNewsfeed.blogPost.IsVlog?s("span",[e._v("Vlog")]):s("span",[e._v("Blog")])])])])])],1):e._e(),s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto&&e.isImagePost(e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto.mime)?s("q-item-section",{staticClass:"description q-mt-sm"},[e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto?s("q-img",{attrs:{src:e.getImageurl(e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto.url),basic:""},on:{error:function(t){return e.setError()}}}):e._e()],1):e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto&&!1===e.isImagePost(e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto.mime)?s("q-item-section",{staticClass:"description q-mt-sm"},[s("video",{staticClass:"video-player",attrs:{src:e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto.url,controls:"",controlsList:"nodownload",id:"video"+e.newsfeeds.selectedNewsfeed.id}})]):e._e()],1)],1):e._e(),e.newsfeeds.selectedNewsfeed.recipePost?s("div",{staticClass:"share-post-section"},[e.newsfeeds.selectedNewsfeed.recipePost.Title?s("q-card-section",{staticClass:"newsfeed-card-section q-mt-sm",attrs:{horizontal:""}},[s("q-item-section",{staticClass:"description"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"q-mb-none post-description",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v("\n                    "+e._s(e.newsfeeds.selectedNewsfeed.recipePost.Title)+"\n                  ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"q-mb-none read-blog",staticStyle:{display:"inline-block","word-break":"break-word"},on:{click:function(t){return e.goToRecipe(e.newsfeeds.selectedNewsfeed.recipePost.id)}}},[s("span",[e._v("Read Full Recipe")])])])])])],1):e._e(),s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[e.newsfeeds.selectedNewsfeed.recipePost.CoverPhoto&&e.isImagePost(e.newsfeeds.selectedNewsfeed.recipePost.CoverPhoto.mime)?s("q-item-section",{staticClass:"description q-mt-sm"},[e.newsfeeds.selectedNewsfeed.recipePost.CoverPhoto?s("q-img",{attrs:{src:e.getImageurl(e.newsfeeds.selectedNewsfeed.recipePost.CoverPhoto.url),basic:""},on:{error:function(t){return e.setError()}}}):e._e()],1):e.newsfeeds.selectedNewsfeed.recipePost.CoverPhoto&&!1===e.isImagePost(e.newsfeeds.selectedNewsfeed.recipePost.CoverPhoto.mime)?s("q-item-section",{staticClass:"description q-mt-sm"},[s("video",{staticClass:"video-player",attrs:{src:e.newsfeeds.selectedNewsfeed.recipePost.CoverPhoto.url,controls:"",controlsList:"nodownload",id:"video"+e.newsfeeds.selectedNewsfeed.id}})]):e._e()],1)],1):e._e(),s("q-card-actions",{staticClass:"icons post-action-section",attrs:{align:"between"}},[s("div",[s("q-btn",{staticClass:"post-actions q-mr-md like-interaction-icon",attrs:{disabled:e.likeActionReq,flat:"",icon:e.likeCommentColour(),"no-caps":""},on:{click:function(t){return e.setLikeForNewfeed()}}},[s("span",{staticClass:"action post-interaction-text"},[e._v("Like")])]),e.checkPrivacyForComment(e.newsfeeds.selectedNewsfeed)?s("q-btn",{staticClass:"post-actions comment-interaction-icon",attrs:{flat:"",icon:"app:comment-vector","no-caps":""}},[s("span",{staticClass:"action post-interaction-text"},[e._v("Comments")])]):e._e()],1),s("q-btn",{staticClass:"post-actions share-interaction-icon",attrs:{flat:"",icon:"app:share-vector","no-caps":""},on:{click:function(t){return e.shareNewsfeed(e.newsfeeds.selectedNewsfeed)}}},[s("span",{staticClass:"action post-interaction-text"},[e._v("Share")])])],1),e.newsfeeds.selectedNewsfeed.newsfeedlikes?s("q-card-actions",{staticClass:"newsfeed-card-section post-like-comment-info",attrs:{align:"between"}},[s("q-item-label",{staticClass:"q-mt-none",attrs:{flat:""}},[e._v(" Liked by\n            "+e._s(e.newsfeeds.selectedNewsfeed.newsfeedlikes.length)+"\n          ")]),s("q-item-label",{staticClass:"comment-count",attrs:{flat:""}},[e._v(" Comments\n            ("+e._s(e.newsfeeds.selectedNewsfeed.newsfeedcomments.length)+")\n          ")])],1):e._e(),e._l(e.newsfeeds.selectedNewsfeed.newsfeedcomments,(function(t){return s("q-card",e._b({key:t.id,staticClass:"comment-card",attrs:{flat:"",bordered:""}},"q-card",t,!1),[t.comment?s("q-list",{class:[t.id==e.$route.params.notificationid?"unread":""],staticStyle:{width:"100%",border:"1px solid rgba(0, 0, 0, 0.12)"},attrs:{id:"comment.id"}},[t.userprofile?s("q-card-section",{attrs:{horizontal:""}},[s("q-card-section",{class:[e.editingCommentDetail&&e.editingCommentDetail.id===t.id&&"avatar-padding"]},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[t.userprofile&&null!=t.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+t.userprofile.avatar.url}})]):s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                    "+e._s(t.userprofile.firstname.charAt(0))+"\n                  ")])],1)],1),s("q-card-section",{staticClass:"comment-section"},[e.editingCommentDetail&&e.editingCommentDetail.id===t.id?s("q-item-section",[s("div",{staticClass:"row justify-between items-center"},[s("div",{staticClass:"col-10"},[s("q-input",{staticClass:"input-height",attrs:{rounded:"",outlined:"",placeholder:"Write a Message",dense:!1},model:{value:e.editingComment,callback:function(t){e.editingComment=t},expression:"editingComment"}})],1),s("div",{staticClass:"col-2 flex justify-between items-center"},[s("q-icon",{staticClass:"cursor-pointer close-comment",attrs:{size:"33px",name:"close"},on:{click:function(t){e.editingCommentDetail=null}}}),s("q-btn",{staticStyle:{color:"#6B7BC7"},attrs:{round:"",dense:"",flat:"",icon:"send"},on:{click:e.updateCommentAction}})],1)])]):s("q-item-section",[s("div",{staticClass:"row justify-between items-center"},[s("div",{staticClass:"title",on:{click:function(s){e.goToProfile(parseInt(t.userprofile.id))}}},[e._v("\n                      "+e._s(t.userprofile.firstname)+" "+e._s(t.userprofile.lastname))]),s("div",{staticClass:"subtitle flex justify-between items-center"},[e._v("("+e._s(e.formatDate(t.created_at))+")\n                      "),parseInt(t.userprofile.id)===e.userprofileDetail.id?s("div",[s("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dot-action",size:"8px"}},[s("q-menu",{attrs:{cover:"","auto-close":""}},[s("q-list",[s("q-item",{attrs:{clickable:""},on:{click:function(s){return e.editComment(t)}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"create"}})],1),s("q-item-section",[e._v("Edit Comment")])],1),s("q-item",{attrs:{clickable:""},on:{click:function(s){return e.deleteComment(t)}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"delete"}})],1),s("q-item-section",[e._v("Delete Comment")])],1)],1)],1)],1)],1):e._e()])]),s("p",{staticClass:"comment",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v(e._s(t.comment))])]),e._l(t.newsfeedreplycomments.slice(t.newsfeedreplycomments.length-1,t.newsfeedreplycomments.length),(function(i){return s("q-card",{key:i.id,staticClass:"comment-card",class:[t.id==e.$route.params.notificationid?"unreadrecomment":""],attrs:{flat:"",bordered:""}},[s("q-card-section",{attrs:{horizontal:""}},[s("q-card-section",{staticStyle:{padding:"16px 5px 0 0"}},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[null!=i.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+i.userprofile.avatar.url}})]):s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                          "+e._s(i.userprofile.firstname.charAt(0))+"\n                        ")])],1)],1),s("q-card-section",{staticClass:"comment-section reply-comment"},[s("q-item-section",[s("div",{staticClass:"row reply-title"},[s("div",{staticClass:"title",on:{click:function(t){e.goToProfile(parseInt(i.userprofile.id))}}},[e._v("\n                            "+e._s(i.userprofile.firstname)+" "+e._s(i.userprofile.lastname))]),s("div",{staticClass:"subtitle",staticStyle:{"white-space":"nowrap"}},[e._v("("+e._s(e.formatDate(i.created_at))+")\n                          ")])]),s("p",{staticClass:"comment",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v("\n                          "+e._s(i.comment))])])],1)],1)],1)}))],2)],1):e._e(),s("q-card-section",{staticClass:"card-buttons",attrs:{horizontal:""}},[s("q-btn",{staticClass:"comment-like-interation",attrs:{flat:"",icon:e.likeColour(parseInt(t.id)),"no-caps":""},on:{click:function(s){e.setLikeForNewfeedsComment(parseInt(t.id))}}},[t.newsfeedcommentslikes?s("span",{staticClass:"comment-action"},[e._v(e._s(t.newsfeedcommentslikes.length)+"\n                  Like")]):e._e()]),s("q-separator",{staticClass:"separator",attrs:{vertical:""}}),s("q-btn",{attrs:{flat:"",icon:"app:comment-vector","no-caps":""},on:{click:function(s){e.setSelectedNewsfeedCommentData(parseInt(t.id))}}},[s("span",{staticClass:"comment-action"},[e._v("Comments ")])])],1)],1):e._e()],1)}))],2),s("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[s("FullScreen",{attrs:{details:e.fullscreendata,likeActionReq:e.likeActionReq}})],1),s("q-dialog",{attrs:{position:"bottom"},model:{value:e.shareActionModel,callback:function(t){e.shareActionModel=t},expression:"shareActionModel"}},[s("ShareAction",{attrs:{sharePost:e.sharePostId,isBlogPost:!1,isRecipePost:!1,postOwner:e.postOwner}})],1),s("q-dialog",{model:{value:e.NewsFeedCardOptionModel,callback:function(t){e.NewsFeedCardOptionModel=t},expression:"NewsFeedCardOptionModel"}},[s("NewsFeedCardOption",{attrs:{isMyProfilePost:e.isMyPost},on:{"clicked-selected-Option":e.clickedSelectedOptionModal}})],1),s("q-dialog",{model:{value:e.CopylinkedModel,callback:function(t){e.CopylinkedModel=t},expression:"CopylinkedModel"}},[s("CopyLinked")],1),s("q-dialog",{attrs:{persistent:""},model:{value:e.deleteConfirm,callback:function(t){e.deleteConfirm=t},expression:"deleteConfirm"}},[s("q-card",[s("q-card-section",{staticClass:"row items-center"},[s("div",{staticClass:"text-h6"},[e._v("Delete comment")])]),s("q-card-section",{staticClass:"row items-center"},[s("span",{staticClass:"q-ml-sm"},[e._v("Deleting the comment will remove it from the conversation")])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Delete"},on:{click:e.deleteCommentAction}})],1)],1)],1),s("q-dialog",{attrs:{position:"bottom"},model:{value:e.newsFeedWarningModal,callback:function(t){e.newsFeedWarningModal=t},expression:"newsFeedWarningModal"}},[s("DeletePostWarning",{attrs:{postType:"Post"},on:{"delete-selected-option":e.deleteFeedWarningOption}})],1)],1):e._e()])])},o=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("456d"),s("f751"),s("28a5"),s("a34a")),a=s.n(n),r=(s("96cf"),s("c973")),d=s.n(r),c=(s("6762"),s("2fdb"),s("7f7f"),s("7514"),s("6b54"),s("06db"),s("9523")),l=s.n(c),f=s("bd4c"),u=s("cdde"),m=s("0831"),w=s("2a19"),p=s("2f62"),h=s("d41a"),C=s("9f2b"),v=s("e09b"),g=s("edca"),N=s("2007"),k=s("23cc");function b(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function q(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?b(Object(s),!0).forEach((function(t){l()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var P=m["a"].getScrollTarget,y=m["a"].setScrollPosition,_={name:"Comments",data:function(){return{NewsFeedCardOptionModel:!1,shareActionModel:!1,fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:"",hideBack:!1,parentPost:null},delay:700,clicks:0,timer:null,imageError:!1,isMyPost:!1,currentNewsfeedId:0,CopylinkedModel:!1,sharePostId:null,likeActionReq:!1,selectedComment:null,deleteConfirm:!1,editingCommentDetail:null,editingComment:"",postOwner:null,newsFeedWarningModal:!1}},components:{FullScreen:h["a"],ShareAction:C["a"],NewsFeedCardOption:v["a"],CopyLinked:g["a"],DeletePostWarning:k["a"]},computed:q(q(q(q({},Object(p["c"])("config",["baseUrl","blobBaseUrl"])),Object(p["c"])("userprofile",["userDetails","userprofileDetail"])),Object(p["c"])("newsfeeds",["newsfeeds"])),Object(p["c"])("footer",["footerData"])),created:function(){this.$root.$on("saveCommentButtonClick",this.postNewsFeedComment),this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("onlikeClick",this.setLikeForNewfeed),this.$root.$on("onformatDateClick",this.formatDate),this.$root.$on("onExitFullscreen",this.closeFullScreen),this.$root.$on("closeNewsFeedOption",this.existNewsFeedOptionModel),this.$root.$on("onshareClick",this.shareNewsfeed),this.$root.$on("onsetSelectedClick",this.setSelectedNewsfeedData)},mounted:function(){this.setHeaderData(!1,!0,"","","","",!0,!0),this.fetchNewsfeed(this.$route.params.id),this.$route.params.notificationid&&this.handleScroll()},beforeDestroy:function(){this.setFooterData(!1),this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("onformatDateClick",this.formatDate),this.$root.$off("onExitFullscreen",this.closeFullScreen),this.$root.$off("closeNewsFeedOption",this.existNewsFeedOptionModel),this.$root.$off("onshareClick",this.shareNewsfeed),this.$root.$off("onsetSelectedClick",this.setSelectedNewsfeedData)},methods:q(q(q(q(q({},Object(p["b"])("header",["setHeader"])),Object(p["b"])("notifications",["postNotifications"])),Object(p["b"])("newsfeeds",["fetchNewsfeed","postNewsFeedComments","deleteLikeNewfeeds","deleteLikeNewfeedsComments","setIsNewsFeedComment","setSelectedNewsfeedComment","postReplyComments","postNewsFeedLikes","postNewsFeedCommentsLikes","deleteNewsFeedComment","updatePostComment","sendActivityEmailNotification","deleteNewsFeed"])),Object(p["b"])("footer",["setFooter","addComment"])),{},{setFooterData:function(e){this.setFooter({commentSection:e})},setHeaderData:function(e,t,s,i,o,n,a,r){this.setHeader({hamburgerIcon:e,backIcon:t,title:s,rightIcon1:i,rightIcon2:o,rightLinkText:n,notificationIcon:a,searchIcon:r})},formatDate:function(e){return f["a"].formatDate(e,"DD MMM")+" at "+f["a"].formatDate(e,"hh.mm A")},backButtonClick:function(){this.$router.push("/index")},postNewsFeedComment:function(){var e=this;this.postNewsFeedComments({comment:this.footerData.comment,newsfeed:this.newsfeeds.selectedNewsfeed,userprofile:this.userDetails}).then((function(t){e.addComment(""),e.userDetails.id!==parseInt(e.newsfeeds.selectedNewsfeed.user.id)&&(N["b"].emit("sendNotification",{text:"Commented on your newsfeed",to:e.newsfeeds.selectedNewsfeed.user.id}),e.postNotifications({message:"Commented on your newsfeed",userprofileId:e.userDetails.userprofile.id,userId:e.newsfeeds.selectedNewsfeed.user.id,url:"comments/"+e.newsfeeds.selectedNewsfeed.id.toString()+"/"+t.data.id}),e.sendActivityEmailNotification({title:"Post Comment",message:e.userDetails.userprofile.firstname+" "+e.userDetails.userprofile.lastname+" commented on your newsfeed",to:e.newsfeeds.selectedNewsfeed.user.id,url:"comments/"+e.newsfeeds.selectedNewsfeed.id.toString()+"/"+t.data.id,activity:"CommentsPostCreated"})),e.fetchNewsfeed(e.$route.params.id)}))},setLikeForNewfeedsComment:function(e){var t=this,s=this.newsfeeds.selectedNewsfeed.newsfeedcomments.find((function(t){return parseInt(t.id)===e})),i=this.userDetails.userprofile.id,o=s.newsfeedcommentslikes.find((function(e){return parseInt(e.userprofile.id)===i}));void 0!==o?this.deleteLikeNewfeedsComments({id:o.id}).then((function(){t.fetchNewsfeed(t.$route.params.id)})):this.postNewsFeedCommentsLikes({user:this.userDetails,newsfeedcomment:s}).then((function(){t.userDetails.id!==parseInt(s.userprofile.user.id)&&(N["b"].emit("sendNotification",{text:"Liked your newsfeed comment",to:s.userprofile.user.id}),t.postNotifications({message:"Liked your newsfeed comment",userprofileId:t.userDetails.userprofile.id,userId:s.userprofile.user.id,url:"comments/"+t.newsfeeds.selectedNewsfeed.id.toString()})),t.fetchNewsfeed(t.$route.params.id)}))},likeColour:function(e){var t=this.newsfeeds.selectedNewsfeed.newsfeedcomments.find((function(t){return parseInt(t.id)===e})),s=this.userDetails.userprofile.id;if(t.newsfeedcommentslikes)var i=t.newsfeedcommentslikes.find((function(e){return parseInt(e.userprofile.id)===s}));return void 0!==i?"app:like-filled-vector":"app:like-vector"},setLikeForNewfeed:function(){var e=this;if(this.likeActionReq=!0,this.newsfeeds.selectedNewsfeed.newsfeedlikes.length>0){var t=this.userDetails.userprofile.id,s=this.newsfeeds.selectedNewsfeed.newsfeedlikes.find((function(e){return parseInt(e.userprofile.id)===t}));void 0!==s?this.deleteLikeNewfeeds({id:s.id}).then((function(){e.fetchNewsfeed(e.newsfeeds.selectedNewsfeed.id).then((function(){e.fullscreendata&&(e.fullscreendata.likeIcon=e.likeCommentColour(),e.fullscreendata.likeLength=e.newsfeeds.selectedNewsfeed.newsfeedlikes.length),e.likeActionReq=!1}))})):this.postNewsFeedLikes({user:this.userDetails,newsfeed:this.newsfeeds.selectedNewsfeed}).then((function(){e.userDetails.id!==parseInt(e.newsfeeds.selectedNewsfeed.user.id)&&(N["b"].emit("sendNotification",{text:"Liked your newsfeed",to:e.newsfeeds.selectedNewsfeed.user.userprofile}),e.postNotifications({message:"Liked your newsfeed",userprofileId:e.userDetails.userprofile.id,userId:e.newsfeeds.selectedNewsfeed.user.id,url:"comments/"+e.newsfeeds.selectedNewsfeed.id.toString()})),e.fetchNewsfeed(e.newsfeeds.selectedNewsfeed.id).then((function(){e.fullscreendata&&(e.fullscreendata.likeIcon=e.likeCommentColour(),e.fullscreendata.likeLength=e.newsfeeds.selectedNewsfeed.newsfeedlikes.length),e.likeActionReq=!1}))}))}else this.postNewsFeedLikes({user:this.userDetails,newsfeed:this.newsfeeds.selectedNewsfeed}).then((function(){e.userDetails.id!==parseInt(e.newsfeeds.selectedNewsfeed.user.id)&&(N["b"].emit("sendNotification",{text:"Liked your newsfeed",to:e.newsfeeds.selectedNewsfeed.user.userprofile}),e.postNotifications({message:"Liked your newsfeed",userprofileId:e.userDetails.userprofile.id,userId:e.newsfeeds.selectedNewsfeed.user.id,url:"comments/"+e.newsfeeds.selectedNewsfeed.id.toString()})),e.fetchNewsfeed(e.newsfeeds.selectedNewsfeed.id).then((function(){e.fullscreendata&&(e.fullscreendata.likeIcon=e.likeCommentColour(),e.fullscreendata.likeLength=e.newsfeeds.selectedNewsfeed.newsfeedlikes.length),e.likeActionReq=!1}))}))},likeCommentColour:function(){var e,t,s;if((null===(e=this.newsfeeds)||void 0===e||null===(t=e.selectedNewsfeed)||void 0===t||null===(s=t.newsfeedlikes)||void 0===s?void 0:s.length)>0){var i=this.userDetails.userprofile.id,o=this.newsfeeds.selectedNewsfeed.newsfeedlikes.find((function(e){return parseInt(e.userprofile.id)===i}));return void 0!==o?"app:like-filled-vector":"app:like-vector"}return"app:like-vector"},setSelectedNewsfeedCommentData:function(e){this.$router.push("/reply-comments/"+e)},goToProfile:function(e){e===this.userDetails.userprofile.id?this.$router.push("/profile"):this.$router.push("/user-profile/"+e)},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var e=document.getElementById("image-box");e.setAttribute("style","display:none;"),this.fullscreendata.hideBack=!0}},getfullScreen:function(e){this.fullscreendata.hideBack=!1,this.fullscreendata.url=e.feedimage.url,this.fullscreendata.name=e.user.userprofile.firstname+" "+e.user.userprofile.lastname,this.fullscreendata.feedtext=e.feedtext,this.fullscreendata.created_at=e.created_at,this.fullscreendata.likeLength=e.newsfeedlikes.length,this.fullscreendata.commentLength=e.newsfeedcomments.length,this.fullscreendata.id=e.id,this.fullscreendata.likeIcon=this.likeCommentColour(),this.fullscreendata.parentPost=e.parentPost;var t=document.getElementById("image-box");t.setAttribute("style","display:flex;");var s=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(s).then((function(){})).catch((function(e){alert(e)}))},handleScroll:function(){var e=document.getElementById(this.$route.params.notificationid);if(null===e||void 0===e)return!1;var t=P(e),s=e.offsetTop-e.scrollHeight+300,i=1e3;y(t,s,i)},oneClick:function(e){if(this.clicks++,1===this.clicks){var t=this;this.timer=setTimeout((function(){t.clicks=0,t.getfullScreen(e)}),this.delay)}else clearTimeout(this.timer),this.clicks=0,this.likeCommentColour(),this.likeActionReq||this.setLikeForNewfeed()},openFullScreen:function(e){this.clicks++;var t=this;this.timer=setTimeout((function(){t.clicks=0,t.getfullScreen(e)}),this.delay)},getImageurl:function(e){if(e.includes(".webp")&&!1===this.imageError){var t=e.substring(e.lastIndexOf("/")+1),s=this.blobBaseUrl;return e=s+t,e}return e},setError:function(){this.imageError=!0},openNewsFeedOptionModel:function(e){this.NewsFeedCardOptionModel=!0,this.currentNewsfeedId=e.id,parseInt(e.user.userprofile.id)===this.userDetails.userprofile.id&&(this.isMyPost=!0),this.NewsFeedCardOptionModel=!0},clickedSelectedOptionModal:function(e){switch(this.NewsFeedCardOptionModel=!1,e){case"Report":break;case"CopyLink":var t="https://www.sonuto.org/#/comments/"+this.currentNewsfeedId;this.copyURL(t);break;case"shareTo":this.shareActionModel=!0;break;case"PostNotification":break;case"Mute":break;case"Unfollow":var s=this.newsfeeds.selectedNewsfeed;this.$router.push("/user-profile/"+s.user.userprofile.id);break;case"Delete":this.newsFeedWarningModal=!0;break}},copytoclipBoard:function(e){var t=this;Object(u["a"])(e).then((function(){t.CopylinkedModel=!0,setTimeout((function(){t.CopylinkedModel=!1}),1500)})).catch((function(){}))},copyURL:function(e){var t=this;return d()(a.a.mark((function s(){var i,o;return a.a.wrap((function(s){while(1)switch(s.prev=s.next){case 0:try{i=e,o=document.createElement("textarea"),o.value=i,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),t.CopylinkedModel=!0,setTimeout((function(){t.CopylinkedModel=!1}),1500)}catch(n){alert("Not Copied")}case 1:case"end":return s.stop()}}),s)})))()},existNewsFeedOptionModel:function(){this.NewsFeedCardOptionModel=!1},shareNewsfeed:function(e){var t,s,i,o;return this.$auth.isAuthenticated()?null===(null===(t=this.userDetails)||void 0===t?void 0:t.verification)||"Approved"!==(null===(s=this.userDetails)||void 0===s||null===(i=s.verification)||void 0===i?void 0:i.status)?(this.verifcationStatusModal=!0,!1):(this.sharePostId=(null===e||void 0===e||null===(o=e.parentPost)||void 0===o?void 0:o.id)||e.id,this.shareActionModel=!0,void(this.postOwner=e.user.id||null)):(this.$router.push("/welcome"),!1)},isImagePost:function(e){return"image"===e.split("/")[0]},goToBlog:function(e){this.$router.push({path:"/blog",query:{id:e}})},goToRecipe:function(e){this.$router.push({path:"/recipe",query:{id:e}})},deleteComment:function(e){this.deleteConfirm=!0,this.selectedComment=Object.assign({},e)},editComment:function(e){this.editingCommentDetail=e,this.editingComment=e.comment},deleteCommentAction:function(){var e=this;this.deleteNewsFeedComment(this.selectedComment.id).then((function(t){e.selectedComment=null,e.fetchNewsfeed(e.$route.params.id)}))},updateCommentAction:function(){var e=this,t={id:this.editingCommentDetail.id,comment:this.editingComment};this.updatePostComment(t).then((function(){e.fetchNewsfeed(e.$route.params.id),e.editingCommentDetail=null}))},checkPrivacyForComment:function(e){if("anyone"===e.user.userprofile.privacysetting.WhoCanCommentMyPosts.toLowerCase())return this.setFooterData(!0),!0;if(+e.user.id===+this.userDetails.id)return this.setFooterData(!0),!0;if("followers"===e.user.userprofile.privacysetting.WhoCanCommentMyPosts.toLowerCase()){var t=this.userDetails.userfollowings.find((function(t){return+t.following===+e.user.userprofile.id&&"Accepted"===t.status}));return t?(this.setFooterData(!0),!0):(this.setFooterData(!1),!1)}},deleteFeedWarningOption:function(e){var t=this;"cancel"===e?(this.currentNewsfeedId=0,this.newsFeedWarningModal=!1):this.deleteNewsFeed(parseInt(this.currentNewsfeedId)).then((function(e){t.currentNewsfeedId=0,t.newsFeedWarningModal=!1,w["a"].create({progress:!0,message:"Post Deleted Successfully",type:"positive"}),t.$router.push("/index")}))}})},D=_,I=(s("21b0"),s("583c"),s("2877")),F=s("9989"),x=s("f09f"),O=s("a370"),S=s("4074"),$=s("cb32"),M=s("0170"),L=s("9c40"),A=s("068f"),j=s("6ac0"),z=s("eb85"),B=s("4b7e"),T=s("1c1c"),E=s("27f9"),R=s("0016"),Q=s("4e73"),W=s("66e5"),U=s("24e8"),H=s("7f67"),V=s("eebe"),J=s.n(V),G=Object(I["a"])(D,i,o,!1,null,"110f1e63",null);t["default"]=G.exports;J()(G,"components",{QPage:F["a"],QCard:x["a"],QCardSection:O["a"],QItemSection:S["a"],QAvatar:$["a"],QItemLabel:M["a"],QBtn:L["a"],QImg:A["a"],QVideo:j["a"],QSeparator:z["a"],QCardActions:B["a"],QList:T["a"],QInput:E["a"],QIcon:R["a"],QMenu:Q["a"],QItem:W["a"],QDialog:U["a"]}),J()(G,"directives",{ClosePopup:H["a"]})},"21b0":function(e,t,s){"use strict";var i=s("9532"),o=s.n(i);o.a},5758:function(e,t,s){},"583c":function(e,t,s){"use strict";var i=s("5758"),o=s.n(i);o.a},9532:function(e,t,s){}}]);