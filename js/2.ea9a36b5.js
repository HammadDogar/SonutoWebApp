(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{1980:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"page bg-white"},[s("div",{staticClass:"row"},[e.newsfeeds.selectedNewsfeed?s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"newsfeed-card",attrs:{flat:"",bordered:""}},[s("div",{staticClass:"row items-center no-wrap q-my-md"},[s("div",{staticClass:"col"},[s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[e.newsfeeds.selectedNewsfeed.user.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+e.newsfeeds.selectedNewsfeed.user.userprofile.avatar.url}})]):s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                  "+e._s(e.newsfeeds.selectedNewsfeed.user.userprofile.firstname.charAt(0))+"\n                ")])],1),s("q-item-section",[s("q-item-label",{staticClass:"title",on:{click:function(t){e.goToProfile(parseInt(e.newsfeeds.selectedNewsfeed.user.userprofile.id))}}},[e._v("\n                  "+e._s(e.newsfeeds.selectedNewsfeed.user.userprofile.firstname)+"\n                  "+e._s(e.newsfeeds.selectedNewsfeed.user.userprofile.lastname))]),s("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[e._v(e._s(e.formatDate(e.newsfeeds.selectedNewsfeed.created_at))+"\n                ")])],1)],1)],1),s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{flat:"",icon:"app:three-dots"},on:{click:function(t){return e.openNewsFeedOptionModel(e.newsfeeds.selectedNewsfeed)}}})],1)]),s("q-card-section",{staticClass:"newsfeed-card-section block",attrs:{horizontal:""}},[e.newsfeeds.selectedNewsfeed.feedtext?s("q-item-section",{staticClass:"description q-mb-md",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v(e._s(e.newsfeeds.selectedNewsfeed.feedtext)+" abc")]):e._e(),e.newsfeeds.selectedNewsfeed.feedimage?s("div",[e.isImagePost(e.newsfeeds.selectedNewsfeed.feedimage.mime)?s("q-item-section",{staticClass:"description"},[e.newsfeeds.selectedNewsfeed.feedimage?s("q-img",{attrs:{src:e.getImageurl(e.newsfeeds.selectedNewsfeed.feedimage.url),basic:""},on:{error:function(t){return e.setError()},click:function(t){return e.oneClick(e.newsfeeds.selectedNewsfeed)}}}):e._e()],1):s("q-item-section",{staticClass:"description q-mt-sm"},[s("q-video",{staticStyle:{width:"100%",height:"410px"},attrs:{src:e.newsfeeds.selectedNewsfeed.feedimage.url}})],1)],1):e._e()],1),null!==e.newsfeeds.selectedNewsfeed.parentPost?s("div",{staticClass:"share-post-section"},[e.newsfeeds.selectedNewsfeed.parentPost.user?s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("q-card-section",{attrs:{horizontal:""}},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.avatar.url}})]):null!=e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile?s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                      "+e._s(e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.firstname.charAt(0))+"\n                    ")]):e._e()],1),s("q-item-section",[s("q-item-label",{staticClass:"title",on:{click:function(t){e.goToProfile(parseInt(e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.id))}}},[e._v("\n                      "+e._s(e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.firstname)+"\n                      "+e._s(e.newsfeeds.selectedNewsfeed.parentPost.user.userprofile.lastname)+"\n                    ")]),s("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[e._v("\n                      "+e._s(e.formatDate(e.newsfeeds.selectedNewsfeed.parentPost.created_at))+"\n                    ")])],1)],1)],1)])]):e._e(),e.newsfeeds.selectedNewsfeed.parentPost.feedtext?s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[s("q-item-section",{staticClass:"description"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"q-mb-none",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v("\n                    "+e._s(e.newsfeeds.selectedNewsfeed.parentPost.feedtext)+"\n                  ")])])])])],1):e._e(),e.newsfeeds.selectedNewsfeed.parentPost.feedimage?s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[e.isImagePost(e.newsfeeds.selectedNewsfeed.parentPost.feedimage.mime)?s("q-item-section",{staticClass:"description q-mt-sm"},[e.newsfeeds.selectedNewsfeed.parentPost.feedimage?s("q-img",{attrs:{src:e.getImageurl(e.newsfeeds.selectedNewsfeed.parentPost.feedimage.url),basic:""},on:{error:function(t){return e.setError()},click:function(t){return e.oneClick(e.newsfeeds.selectedNewsfeed.parentPost)}}}):e._e()],1):s("q-item-section",{staticClass:"description q-mt-sm"},[s("q-video",{staticStyle:{width:"100%",height:"410px"},attrs:{src:e.newsfeeds.selectedNewsfeed.parentPost.feedimage.url}})],1)],1):e._e()],1):e._e(),e.newsfeeds.selectedNewsfeed.blogPost?s("div",{staticClass:"share-post-section"},[s("q-card-section",[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[e.newsfeeds.selectedNewsfeed.blogPost?s("q-card-section",{attrs:{horizontal:""}},[e.newsfeeds.selectedNewsfeed.blogPost.userprofile?s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[e.newsfeeds.selectedNewsfeed.blogPost.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+e.newsfeeds.selectedNewsfeed.blogPost.userprofile.avatar.url}})]):null!=e.newsfeeds.selectedNewsfeed.blogPost.userprofile?s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                      "+e._s(e.newsfeeds.selectedNewsfeed.blogPost.userprofile.firstname.charAt(0))+"\n                    ")]):e._e()],1):e._e(),s("q-item-section",[e.newsfeeds.selectedNewsfeed.blogPost.userprofile?s("q-item-label",{staticClass:"title",on:{click:function(t){e.goToProfile(parseInt(e.newsfeeds.selectedNewsfeed.blogPost.userprofile.id))}}},[e._v("\n                      "+e._s(e.newsfeeds.selectedNewsfeed.blogPost.userprofile.firstname)+"\n                      "+e._s(e.newsfeeds.selectedNewsfeed.blogPost.userprofile.lastname)+"\n                    ")]):e._e(),s("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[e._v("\n                      "+e._s(e.formatDate(e.newsfeeds.selectedNewsfeed.blogPost.published_at))+"\n                    ")])],1)],1):e._e()],1)])]),e.newsfeeds.selectedNewsfeed.blogPost.Title?s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[s("q-item-section",{staticClass:"description"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"q-mb-none",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v("\n                    "+e._s(e.newsfeeds.selectedNewsfeed.blogPost.Title)+"\n                  ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("p",{staticClass:"q-mb-none read-blog",staticStyle:{display:"inline-block","word-break":"break-word"},on:{click:function(t){return e.goToBlog(e.newsfeeds.selectedNewsfeed.blogPost.id)}}},[e.newsfeeds.selectedNewsfeed.blogPost.IsVlog?s("span",[e._v("View")]):s("span",[e._v("Read")]),e._v("\n                    Full "),e.newsfeeds.selectedNewsfeed.blogPost.IsVlog?s("span",[e._v("Vlog")]):s("span",[e._v("Blog")])])])])])],1):e._e(),s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto&&e.isImagePost(e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto.mime)?s("q-item-section",{staticClass:"description q-mt-sm"},[e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto?s("q-img",{attrs:{src:e.getImageurl(e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto.url),basic:""},on:{error:function(t){return e.setError()}}}):e._e()],1):e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto&&!1===e.isImagePost(e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto.mime)?s("q-item-section",{staticClass:"description q-mt-sm"},[s("video",{staticClass:"video-player",attrs:{src:e.newsfeeds.selectedNewsfeed.blogPost.CoverPhoto.url,controls:"",controlsList:"nodownload",id:"video"+e.newsfeeds.selectedNewsfeed.id}})]):e._e()],1)],1):e._e(),s("q-card-actions",{staticClass:"newsfeed-card-section",attrs:{align:"between"}},[s("q-item-label",{staticClass:"q-mt-none",attrs:{flat:""}},[e._v(e._s(e.newsfeeds.selectedNewsfeed.newsfeedlikes.length)+" Like\n          ")]),s("q-item-label",{staticClass:"comment-count",attrs:{flat:""}},[e._v(e._s(e.newsfeeds.selectedNewsfeed.newsfeedcomments.length)+" Comments\n          ")])],1),s("q-separator"),s("q-card-actions",{staticClass:"icons",attrs:{align:"between"}},[s("q-btn",{attrs:{disabled:e.likeActionReq,flat:"",icon:e.likeCommentColour(),size:"10px","no-caps":""},on:{click:function(t){return e.setLikeForNewfeed()}}},[s("span",{staticClass:"action"},[e._v("Like")])]),s("q-btn",{attrs:{flat:"",icon:"app:comment",size:"10px","no-caps":""}},[s("span",{staticClass:"action"},[e._v("Comments")])]),s("q-btn",{attrs:{flat:"",icon:"app:share",size:"10px","no-caps":""},on:{click:function(t){return e.shareNewsfeed(e.newsfeeds.selectedNewsfeed)}}},[s("span",{staticClass:"action"},[e._v("Share")])])],1),e._l(e.newsfeeds.selectedNewsfeed.newsfeedcomments,(function(t){return s("q-card",e._b({key:t.id,staticClass:"comment-card",attrs:{flat:"",bordered:""}},"q-card",t,!1),[t.comment?s("q-list",{class:[t.id==e.$route.params.notificationid?"unread":""],staticStyle:{width:"100%",border:"1px solid rgba(0, 0, 0, 0.12)"},attrs:{id:"comment.id"}},[t.userprofile?s("q-card-section",{attrs:{horizontal:""}},[s("q-card-section",{class:[e.editingCommentDetail&&e.editingCommentDetail.id===t.id&&"avatar-padding"]},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[t.userprofile&&null!=t.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+t.userprofile.avatar.url}})]):s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                    "+e._s(t.userprofile.firstname.charAt(0))+"\n                  ")])],1)],1),s("q-card-section",{staticClass:"comment-section"},[e.editingCommentDetail&&e.editingCommentDetail.id===t.id?s("q-item-section",[s("div",{staticClass:"row justify-between items-center"},[s("div",{staticClass:"col-10"},[s("q-input",{staticClass:"input-height",attrs:{rounded:"",outlined:"",placeholder:"Write a Message",dense:!1},model:{value:e.editingComment,callback:function(t){e.editingComment=t},expression:"editingComment"}})],1),s("div",{staticClass:"col-2 flex justify-between items-center"},[s("q-icon",{staticClass:"cursor-pointer close-comment",attrs:{size:"33px",name:"close"},on:{click:function(t){e.editingCommentDetail=null}}}),s("q-btn",{staticStyle:{color:"#6B7BC7"},attrs:{round:"",dense:"",flat:"",icon:"send"},on:{click:e.updateCommentAction}})],1)])]):s("q-item-section",[s("div",{staticClass:"row justify-between items-center"},[s("div",{staticClass:"title",on:{click:function(s){e.goToProfile(parseInt(t.userprofile.id))}}},[e._v("\n                      "+e._s(t.userprofile.firstname)+" "+e._s(t.userprofile.lastname))]),s("div",{staticClass:"subtitle flex justify-between items-center"},[e._v("("+e._s(e.formatDate(t.created_at))+")\n                      "),parseInt(t.userprofile.id)===e.userprofileDetail.id?s("div",[s("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dot-action",size:"8px"}},[s("q-menu",{attrs:{cover:"","auto-close":""}},[s("q-list",[s("q-item",{attrs:{clickable:""},on:{click:function(s){return e.editComment(t)}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"create"}})],1),s("q-item-section",[e._v("Edit Comment")])],1),s("q-item",{attrs:{clickable:""},on:{click:function(s){return e.deleteComment(t)}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"delete"}})],1),s("q-item-section",[e._v("Delete Comment")])],1)],1)],1)],1)],1):e._e()])]),s("p",{staticClass:"comment",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v(e._s(t.comment))])]),e._l(t.newsfeedreplycomments.slice(t.newsfeedreplycomments.length-1,t.newsfeedreplycomments.length),(function(i){return s("q-card",{key:i.id,staticClass:"comment-card",class:[t.id==e.$route.params.notificationid?"unreadrecomment":""],attrs:{flat:"",bordered:""}},[s("q-card-section",{attrs:{horizontal:""}},[s("q-card-section",{staticStyle:{padding:"16px 5px 0 0"}},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[null!=i.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+i.userprofile.avatar.url}})]):s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                          "+e._s(i.userprofile.firstname.charAt(0))+"\n                        ")])],1)],1),s("q-card-section",{staticClass:"comment-section reply-comment"},[s("q-item-section",[s("div",{staticClass:"row reply-title"},[s("div",{staticClass:"title",on:{click:function(t){e.goToProfile(parseInt(i.userprofile.id))}}},[e._v("\n                            "+e._s(i.userprofile.firstname)+" "+e._s(i.userprofile.lastname))]),s("div",{staticClass:"subtitle",staticStyle:{"white-space":"nowrap"}},[e._v("("+e._s(e.formatDate(i.created_at))+")\n                          ")])]),s("p",{staticClass:"comment",staticStyle:{display:"inline-block","word-break":"break-word"}},[e._v("\n                          "+e._s(i.comment))])])],1)],1)],1)}))],2)],1):e._e(),s("q-card-section",{staticClass:"card-buttons",attrs:{horizontal:""}},[s("q-btn",{attrs:{flat:"",icon:e.likeColour(parseInt(t.id)),size:"10px","no-caps":""},on:{click:function(s){e.setLikeForNewfeedsComment(parseInt(t.id))}}},[t.newsfeedcommentslikes?s("span",{staticClass:"action"},[e._v(e._s(t.newsfeedcommentslikes.length)+"\n                  Like")]):e._e()]),s("q-separator",{staticClass:"separator",attrs:{vertical:""}}),s("q-btn",{attrs:{flat:"",icon:"app:comment",size:"10px","no-caps":""},on:{click:function(s){e.setSelectedNewsfeedCommentData(parseInt(t.id))}}},[s("span",{staticClass:"action"},[e._v("Comments ")])])],1)],1):e._e()],1)}))],2),s("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[s("FullScreen",{attrs:{details:e.fullscreendata}})],1),s("q-dialog",{attrs:{position:"bottom"},model:{value:e.shareActionModel,callback:function(t){e.shareActionModel=t},expression:"shareActionModel"}},[s("ShareAction",{attrs:{sharePost:e.sharePostId,isBlogPost:!1,isRecipePost:!1}})],1),s("q-dialog",{model:{value:e.NewsFeedCardOptionModel,callback:function(t){e.NewsFeedCardOptionModel=t},expression:"NewsFeedCardOptionModel"}},[s("NewsFeedCardOption",{attrs:{isMyProfilePost:e.isMyPost},on:{"clicked-selected-Option":e.clickedSelectedOptionModal}})],1),s("q-dialog",{model:{value:e.CopylinkedModel,callback:function(t){e.CopylinkedModel=t},expression:"CopylinkedModel"}},[s("CopyLinked")],1),s("q-dialog",{attrs:{persistent:""},model:{value:e.deleteConfirm,callback:function(t){e.deleteConfirm=t},expression:"deleteConfirm"}},[s("q-card",[s("q-card-section",{staticClass:"row items-center"},[s("div",{staticClass:"text-h6"},[e._v("Delete comment")])]),s("q-card-section",{staticClass:"row items-center"},[s("span",{staticClass:"q-ml-sm"},[e._v("Deleting the comment will remove it from the conversation")])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Delete"},on:{click:e.deleteCommentAction}})],1)],1)],1)],1):e._e()])])},o=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("456d"),s("f751"),s("28a5"),s("6762"),s("2fdb"),s("7f7f"),s("7514"),s("6b54"),s("06db"),s("9523")),a=s.n(n),r=s("bd4c"),l=s("cdde"),d=s("0831"),c=s("2f62"),f=s("d41a"),u=s("9f2b"),m=s("e09b"),w=s("edca"),p=s("2007");function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function C(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){a()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var b=d["a"].getScrollTarget,v=d["a"].setScrollPosition,k={name:"Comments",data:function(){return{NewsFeedCardOptionModel:!1,shareActionModel:!1,fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:"",hideBack:!1,parentPost:null},delay:700,clicks:0,timer:null,imageError:!1,isMyPost:!1,currentNewsfeedId:0,CopylinkedModel:!1,sharePostId:null,likeActionReq:!1,selectedComment:null,deleteConfirm:!1,editingCommentDetail:null,editingComment:""}},components:{FullScreen:f["a"],ShareAction:u["a"],NewsFeedCardOption:m["a"],CopyLinked:w["a"]},computed:C(C(C(C({},Object(c["c"])("config",["baseUrl","blobBaseUrl"])),Object(c["c"])("userprofile",["userDetails","userprofileDetail"])),Object(c["c"])("newsfeeds",["newsfeeds"])),Object(c["c"])("footer",["footerData"])),mounted:function(){this.$root.$on("saveCommentButtonClick",this.postNewsFeedComment),this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("onlikeClick",this.setLikeForNewfeed),this.$root.$on("onformatDateClick",this.formatDate),this.$root.$on("onExitFullscreen",this.closeFullScreen),this.$root.$on("closeNewsFeedOption",this.existNewsFeedOptionModel),this.$root.$on("onshareClick",this.shareNewsfeed),this.$root.$on("onsetSelectedClick",this.setSelectedNewsfeedData),this.setHeaderData(!1,!0,"","","","",!0,!0),this.setFooterData(!0),this.fetchNewsfeed(this.$route.params.id),this.$route.params.notificationid&&this.handleScroll()},beforeRouteLeave:function(e,t,s){this.setFooterData(!1),this.$root.$off("saveCommentButtonClick",this.postNewsFeedComment),this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("onlikeClick",this.setLikeForNewfeed),this.$root.$off("onformatDateClick",this.formatDate),this.$root.$off("onExitFullscreen",this.closeFullScreen),this.$root.$off("closeNewsFeedOption",this.existNewsFeedOptionModel),this.$root.$off("onshareClick",this.shareNewsfeed),this.$root.$off("onsetSelectedClick",this.setSelectedNewsfeedData),s()},methods:C(C(C(C(C({},Object(c["b"])("header",["setHeader"])),Object(c["b"])("notifications",["postNotifications"])),Object(c["b"])("newsfeeds",["fetchNewsfeed","postNewsFeedComments","deleteLikeNewfeeds","deleteLikeNewfeedsComments","setIsNewsFeedComment","setSelectedNewsfeedComment","postReplyComments","postNewsFeedLikes","postNewsFeedCommentsLikes","deleteNewsFeedComment","updatePostComment"])),Object(c["b"])("footer",["setFooter","addComment"])),{},{setFooterData:function(e){this.setFooter({commentSection:e})},setHeaderData:function(e,t,s,i,o,n,a,r){this.setHeader({hamburgerIcon:e,backIcon:t,title:s,rightIcon1:i,rightIcon2:o,rightLinkText:n,notificationIcon:a,searchIcon:r})},formatDate:function(e){return r["a"].formatDate(e,"DD MMM")+" at "+r["a"].formatDate(e,"hh.mm A")},backButtonClick:function(){this.$router.push("/index")},postNewsFeedComment:function(){var e=this;this.postNewsFeedComments({comment:this.footerData.comment,newsfeed:this.newsfeeds.selectedNewsfeed,userprofile:this.userDetails}).then((function(t){e.addComment(""),e.userDetails.id!==parseInt(e.newsfeeds.selectedNewsfeed.user.id)&&(p["b"].emit("sendNotification",{text:"Commented on your newsfeed",to:e.newsfeeds.selectedNewsfeed.user.id}),e.postNotifications({message:"Commented on your newsfeed",userprofileId:e.userDetails.userprofile.id,userId:e.newsfeeds.selectedNewsfeed.user.id,url:"comments/"+e.newsfeeds.selectedNewsfeed.id.toString()+"/"+t.data.id})),e.fetchNewsfeed(e.$route.params.id)}))},setLikeForNewfeedsComment:function(e){var t=this,s=this.newsfeeds.selectedNewsfeed.newsfeedcomments.find((function(t){return parseInt(t.id)===e})),i=this.userDetails.userprofile.id,o=s.newsfeedcommentslikes.find((function(e){return parseInt(e.userprofile.id)===i}));void 0!==o?this.deleteLikeNewfeedsComments({id:o.id}).then((function(){t.fetchNewsfeed(t.$route.params.id)})):this.postNewsFeedCommentsLikes({user:this.userDetails,newsfeedcomment:s}).then((function(){t.userDetails.id!==parseInt(s.userprofile.user.id)&&(p["b"].emit("sendNotification",{text:"Liked your newsfeed comment",to:s.userprofile.user.id}),t.postNotifications({message:"Liked your newsfeed comment",userprofileId:t.userDetails.userprofile.id,userId:s.userprofile.user.id,url:"comments/"+t.newsfeeds.selectedNewsfeed.id.toString()})),t.fetchNewsfeed(t.$route.params.id)}))},likeColour:function(e){var t=this.newsfeeds.selectedNewsfeed.newsfeedcomments.find((function(t){return parseInt(t.id)===e})),s=this.userDetails.userprofile.id;if(t.newsfeedcommentslikes)var i=t.newsfeedcommentslikes.find((function(e){return parseInt(e.userprofile.id)===s}));return void 0!==i?"app:like-blue":"app:like"},setLikeForNewfeed:function(){var e=this;if(this.likeActionReq=!0,this.newsfeeds.selectedNewsfeed.newsfeedlikes.length>0){var t=this.userDetails.userprofile.id,s=this.newsfeeds.selectedNewsfeed.newsfeedlikes.find((function(e){return parseInt(e.userprofile.id)===t}));void 0!==s?this.deleteLikeNewfeeds({id:s.id}).then((function(){e.fetchNewsfeed(e.newsfeeds.selectedNewsfeed.id).then((function(){e.fullscreendata&&(e.fullscreendata.likeIcon=e.likeCommentColour(),e.fullscreendata.likeLength=e.newsfeeds.selectedNewsfeed.newsfeedlikes.length),e.likeActionReq=!1}))})):this.postNewsFeedLikes({user:this.userDetails,newsfeed:this.newsfeeds.selectedNewsfeed}).then((function(){e.userDetails.id!==parseInt(e.newsfeeds.selectedNewsfeed.user.id)&&(p["b"].emit("sendNotification",{text:"Liked your newsfeed",to:e.newsfeeds.selectedNewsfeed.user.userprofile}),e.postNotifications({message:"Liked your newsfeed",userprofileId:e.userDetails.userprofile.id,userId:e.newsfeeds.selectedNewsfeed.user.id,url:"comments/"+e.newsfeeds.selectedNewsfeed.id.toString()})),e.fetchNewsfeed(e.newsfeeds.selectedNewsfeed.id).then((function(){e.fullscreendata&&(e.fullscreendata.likeIcon=e.likeCommentColour(),e.fullscreendata.likeLength=e.newsfeeds.selectedNewsfeed.newsfeedlikes.length),e.likeActionReq=!1}))}))}else this.postNewsFeedLikes({user:this.userDetails,newsfeed:this.newsfeeds.selectedNewsfeed}).then((function(){e.userDetails.id!==parseInt(e.newsfeeds.selectedNewsfeed.user.id)&&(p["b"].emit("sendNotification",{text:"Liked your newsfeed",to:e.newsfeeds.selectedNewsfeed.user.userprofile}),e.postNotifications({message:"Liked your newsfeed",userprofileId:e.userDetails.userprofile.id,userId:e.newsfeeds.selectedNewsfeed.user.id,url:"comments/"+e.newsfeeds.selectedNewsfeed.id.toString()})),e.fetchNewsfeed(e.newsfeeds.selectedNewsfeed.id).then((function(){e.fullscreendata&&(e.fullscreendata.likeIcon=e.likeCommentColour(),e.fullscreendata.likeLength=e.newsfeeds.selectedNewsfeed.newsfeedlikes.length),e.likeActionReq=!1}))}))},likeCommentColour:function(){if(this.newsfeeds.selectedNewsfeed.newsfeedlikes.length>0){var e=this.userDetails.userprofile.id,t=this.newsfeeds.selectedNewsfeed.newsfeedlikes.find((function(t){return parseInt(t.userprofile.id)===e}));return void 0!==t?"app:like-blue":"app:like"}return"app:like"},setSelectedNewsfeedCommentData:function(e){this.$router.push("/reply-comments/"+e)},goToProfile:function(e){e===this.userDetails.userprofile.id?this.$router.push("/profile"):this.$router.push("/user-profile/"+e)},closeFullScreen:function(){if(document.fullscreenElement){document.exitFullscreen();var e=document.getElementById("image-box");e.setAttribute("style","display:none;"),this.fullscreendata.hideBack=!0}},getfullScreen:function(e){this.fullscreendata.hideBack=!1,this.fullscreendata.url=e.feedimage.url,this.fullscreendata.name=e.user.userprofile.firstname+" "+e.user.userprofile.lastname,this.fullscreendata.feedtext=e.feedtext,this.fullscreendata.created_at=e.date,this.fullscreendata.likeLength=e.newsfeedlikes.length,this.fullscreendata.commentLength=e.newsfeedcomments.length,this.fullscreendata.id=e.id,this.fullscreendata.likeIcon=this.likeCommentColour(),this.fullscreendata.parentPost=e.parentPost;var t=document.getElementById("image-box");t.setAttribute("style","display:flex;");var s=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(s).then((function(){})).catch((function(e){alert(e)}))},handleScroll:function(){var e=document.getElementById(this.$route.params.notificationid);if(null===e||void 0===e)return!1;var t=b(e),s=e.offsetTop-e.scrollHeight+300,i=1e3;v(t,s,i)},oneClick:function(e){if(this.clicks++,1===this.clicks){var t=this;this.timer=setTimeout((function(){t.clicks=0,t.getfullScreen(e)}),this.delay)}else clearTimeout(this.timer),this.clicks=0,this.likeCommentColour(),this.setLikeForNewfeed()},getImageurl:function(e){if(e.includes(".webp")&&!1===this.imageError){var t=e.substring(e.lastIndexOf("/")+1);t="medium_"+t;var s=this.blobBaseUrl;return e=s+t,e}return e},setError:function(){this.imageError=!0},openNewsFeedOptionModel:function(e){this.NewsFeedCardOptionModel=!0,this.currentNewsfeedId=e.id,parseInt(e.user.userprofile.id)===this.userDetails.userprofile.id&&(this.isMyPost=!0),this.NewsFeedCardOptionModel=!0},clickedSelectedOptionModal:function(e){switch(this.NewsFeedCardOptionModel=!1,e){case"Report":break;case"CopyLink":var t=document.location.origin+"/comments/"+this.currentNewsfeedId;this.copytoclipBoard(t);break;case"shareTo":this.shareActionModel=!0;break;case"PostNotification":break;case"Mute":break;case"Unfollow":var s=this.newsfeeds.selectedNewsfeed;this.$router.push("/user-profile/"+s.user.userprofile.id);break}},copytoclipBoard:function(e){var t=this;Object(l["a"])(e).then((function(){t.CopylinkedModel=!0,setTimeout((function(){t.CopylinkedModel=!1}),1500)})).catch((function(){}))},existNewsFeedOptionModel:function(){this.NewsFeedCardOptionModel=!1},shareNewsfeed:function(e){var t,s,i,o;return this.$auth.isAuthenticated()?null===(null===(t=this.userDetails)||void 0===t?void 0:t.verification)||"Approved"!==(null===(s=this.userDetails)||void 0===s||null===(i=s.verification)||void 0===i?void 0:i.status)?(this.verifcationStatusModal=!0,!1):(this.sharePostId=(null===e||void 0===e||null===(o=e.parentPost)||void 0===o?void 0:o.id)||e.id,void(this.shareActionModel=!0)):(this.$router.push("/welcome"),!1)},isImagePost:function(e){return"image"===e.split("/")[0]},goToBlog:function(e){this.$router.push({path:"/blog",query:{id:e}})},deleteComment:function(e){this.deleteConfirm=!0,this.selectedComment=Object.assign({},e)},editComment:function(e){this.editingCommentDetail=e,this.editingComment=e.comment},deleteCommentAction:function(){var e=this;this.deleteNewsFeedComment(this.selectedComment.id).then((function(t){e.selectedComment=null,e.fetchNewsfeed(e.$route.params.id)}))},updateCommentAction:function(){var e=this,t={id:this.editingCommentDetail.id,comment:this.editingComment};this.updatePostComment(t).then((function(){e.fetchNewsfeed(e.$route.params.id),e.editingCommentDetail=null}))}})},g=k,N=(s("7a9b"),s("2877")),q=s("9989"),_=s("f09f"),P=s("a370"),y=s("4074"),I=s("cb32"),D=s("0170"),x=s("9c40"),$=s("068f"),F=s("6ac0"),O=s("4b7e"),S=s("eb85"),L=s("1c1c"),M=s("27f9"),A=s("0016"),z=s("4e73"),j=s("66e5"),B=s("24e8"),E=s("7f67"),Q=s("eebe"),T=s.n(Q),R=Object(N["a"])(g,i,o,!1,null,"1140d372",null);t["default"]=R.exports;T()(R,"components",{QPage:q["a"],QCard:_["a"],QCardSection:P["a"],QItemSection:y["a"],QAvatar:I["a"],QItemLabel:D["a"],QBtn:x["a"],QImg:$["a"],QVideo:F["a"],QCardActions:O["a"],QSeparator:S["a"],QList:L["a"],QInput:M["a"],QIcon:A["a"],QMenu:z["a"],QItem:j["a"],QDialog:B["a"]}),T()(R,"directives",{ClosePopup:E["a"]})},"5ca1c":function(e,t,s){},"7a9b":function(e,t,s){"use strict";var i=s("5ca1c"),o=s.n(i);o.a}}]);