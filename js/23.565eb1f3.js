(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{"04c9":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"page bg-white"},[s("div",{staticClass:"row"},[e.newsfeeds.selectedNewsfeedComment?s("q-card",{staticClass:"newsfeed-card",attrs:{flat:"",bordered:""}},[s("div",{staticClass:"row items-center no-wrap"},[s("div",{staticClass:"col"},[s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[e.newsfeeds.selectedNewsfeedComment.userprofile&&null!==e.newsfeeds.selectedNewsfeedComment.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+e.newsfeeds.selectedNewsfeedComment.userprofile.avatar.url}})]):e.newsfeeds.selectedNewsfeedComment.userprofile&&e.newsfeeds.selectedNewsfeedComment.userprofile.firstname?s("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[e._v("\n                "+e._s(e.newsfeeds.selectedNewsfeedComment.userprofile.firstname.charAt(0))+"\n              ")]):e._e()],1),s("q-item-section",[null!=e.newsfeeds.selectedNewsfeedComment.userprofile&&null!=e.newsfeeds.selectedNewsfeedComment.userprofile.firstname?s("q-item-label",{staticClass:"title",on:{click:function(t){e.goToProfile(parseInt(e.newsfeeds.selectedNewsfeedComment.userprofile.id))}}},[e._v("\n                "+e._s(e.newsfeeds.selectedNewsfeedComment.userprofile.firstname)+"\n                "+e._s(e.newsfeeds.selectedNewsfeedComment.userprofile.lastname))]):e._e(),s("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[e._v(e._s(e.formatDate(e.newsfeeds.selectedNewsfeedComment.created_at))+"\n              ")])],1)],1)],1),s("div",{staticClass:"col-auto"},[s("q-btn",{attrs:{flat:"",icon:"app:three-dots"}})],1)]),s("q-card-section",{staticClass:"newsfeed-card-section",attrs:{horizontal:""}},[s("q-item-section",{staticClass:"description"},[e._v(e._s(e.newsfeeds.selectedNewsfeedComment.comment))])],1),e.newsfeeds.selectedNewsfeedComment.feedimage?s("q-img",{attrs:{src:e.newsfeeds.selectedNewsfeedComment.feedimage,basic:""}}):e._e(),s("q-separator"),s("q-card-actions",{staticClass:"icons",attrs:{align:"between"}},[s("q-btn",{attrs:{flat:"",icon:e.likeReplyColour(),size:"10px","no-caps":""},on:{click:function(t){return e.setLikeForNewfeedsComment()}}},[s("span",{staticClass:"action"},[e._v("Like")])]),s("q-btn",{attrs:{flat:"",icon:"app:comment-vector",size:"10px","no-caps":""},on:{click:function(t){return e.setSelectedReplyData()}}},[s("span",{staticClass:"action"},[e._v("Replies")])])],1),s("q-card-actions",{staticClass:"post-like-comment-info",attrs:{align:"between"}},[e.newsfeeds.selectedNewsfeedComment.newsfeedcommentslikes?s("q-item-label",{staticClass:"q-mt-none",attrs:{flat:""}},[e._v("\n          Liked by\n          "+e._s(e.newsfeeds.selectedNewsfeedComment.newsfeedcommentslikes.length)+" ")]):e._e(),e.newsfeeds.selectedNewsfeedComment.newsfeedreplycomments?s("q-item-label",{staticClass:"comment-count",attrs:{flat:""}},[e._v("\n          Comments ("+e._s(e.newsfeeds.selectedNewsfeedComment.newsfeedreplycomments.length)+") ")]):e._e()],1),e._l(e.newsfeeds.selectedNewsfeedComment.newsfeedreplycomments,(function(t){return s("q-card",e._b({key:t.id,staticClass:"comment-card",attrs:{flat:"",bordered:""}},"q-card",t,!1),[s("q-card-section",{attrs:{horizontal:""}},[s("q-card-section",{staticClass:"flex justify-between items-center"},[s("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[null!==t.userprofile.avatar?s("q-avatar",{attrs:{size:"34px"}},[s("img",{attrs:{src:""+t.userprofile.avatar.url}})]):e._e()],1)],1),s("q-card-section",{staticClass:"comment-section"},[e.editingCommentDetail&&e.editingCommentDetail.id===t.id?s("q-item-section",[s("div",{staticClass:"row justify-between items-center"},[s("div",{staticClass:"col-10"},[s("q-input",{staticClass:"edit-input",attrs:{rounded:"",outlined:"",placeholder:"Write a Message",dense:!1},model:{value:e.editingComment,callback:function(t){e.editingComment=t},expression:"editingComment"}})],1),s("div",{staticClass:"col-2 flex justify-between items-center"},[s("q-icon",{staticClass:"cursor-pointer close-comment",attrs:{size:"33px",name:"close"},on:{click:function(t){e.editingCommentDetail=null}}}),s("q-btn",{staticStyle:{color:"#6B7BC7"},attrs:{round:"",dense:"",flat:"",icon:"send"},on:{click:e.updateCommentAction}})],1)])]):s("q-item-section",[s("div",{staticClass:"row justify-between items-center"},[s("div",{staticClass:"title",on:{click:function(s){e.goToProfile(parseInt(t.userprofile.id))}}},[e._v("\n                  "+e._s(t.userprofile.firstname)+" "+e._s(t.userprofile.lastname))]),s("div",{staticClass:"subtitle flex justify-between items-center"},[e._v("("+e._s(e.formatDate(t.created_at))+")\n                  "),parseInt(t.userprofile.id)===e.userprofileDetail.id?s("div",[s("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dot-action",size:"8px"}},[s("q-menu",{attrs:{cover:"","auto-close":""}},[s("q-list",[s("q-item",{attrs:{clickable:""},on:{click:function(s){return e.editComment(t)}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"create"}})],1),s("q-item-section",[e._v("Edit Comment")])],1),s("q-item",{attrs:{clickable:""},on:{click:function(s){return e.deleteComment(t)}}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"delete"}})],1),s("q-item-section",[e._v("Delete Comment")])],1)],1)],1)],1)],1):e._e()])]),s("p",{staticClass:"comment"},[e._v(e._s(t.comment))])])],1)],1),s("q-card-section",{staticClass:"card-buttons",attrs:{horizontal:""}},[s("q-btn",{attrs:{flat:"",icon:e.likeColour(parseInt(t.id)),size:"10px","no-caps":""},on:{click:function(s){e.setLikeForNewfeedsReplyComment(parseInt(t.id))}}},[s("span",{staticClass:"action"},[e._v("\n              "+e._s(t.newsfeedreplycommentslikes.length)+"\n              Like\n            ")])]),s("q-separator",{staticClass:"separator",attrs:{vertical:""}}),s("q-btn",{attrs:{flat:"",icon:"app:comment",size:"10px","no-caps":""},on:{click:function(s){e.setReplyComment(parseInt(t.id))}}},[s("span",{staticClass:"action"},[e._v("Replies")])])],1)],1)}))],2):e._e()],1),s("q-dialog",{attrs:{persistent:""},model:{value:e.deleteConfirm,callback:function(t){e.deleteConfirm=t},expression:"deleteConfirm"}},[s("q-card",[s("q-card-section",{staticClass:"row items-center"},[s("div",{staticClass:"text-h6"},[e._v("Delete comment")])]),s("q-card-section",{staticClass:"row items-center"},[s("span",{staticClass:"q-ml-sm"},[e._v("Deleting the comment will remove it from the conversation")])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Delete"},on:{click:e.deleteCommentAction}})],1)],1)],1)],1)},i=[],o=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("f751"),s("7514"),s("9523")),a=s.n(o),c=s("bd4c"),r=s("2f62");function m(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?m(Object(s),!0).forEach((function(t){a()(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var d={name:"ReplyComments",data:function(){return{selectedComment:null,deleteConfirm:!1,editCommentState:!1,editingCommentDetail:null,editingComment:""}},computed:l(l(l(l({},Object(r["c"])("config",["baseUrl"])),Object(r["c"])("userprofile",["userDetails","userprofileDetail"])),Object(r["c"])("newsfeeds",["newsfeeds"])),Object(r["c"])("footer",["footerData"])),mounted:function(){this.$root.$on("saveCommentButtonClick",this.postNewsFeedComment),this.$root.$on("savePostReplyButtonClick",this.postReplyComment),this.$root.$on("headerBackButtonClick",this.backButtonClick),this.setFooterData(!0),this.setHeaderData(!1,!0,"","","","",!0,!0),this.fetchNewsfeedComment(this.$route.params.id)},beforeRouteLeave:function(e,t,s){this.setFooterData(!1),this.$root.$off("savePostReplyButtonClick",this.postReplyComment),this.$root.$off("saveCommentButtonClick",this.postNewsFeedComment),this.$root.$off("headerBackButtonClick",this.backButtonClick),s()},methods:l(l(l(l({},Object(r["b"])("header",["setHeader"])),Object(r["b"])("newsfeeds",["postNewsFeedComments","deleteNewsfeedReplyCommentsLikes","deleteLikeNewfeedsComments","postReplyComments","postNewsFeedCommentsLikes","postNewsFeedReplyCommentsLikes","fetchNewsfeedComment","postNewsFeedReplyComments","setSelectedReplyComment","deleteNewsFeedReplyComment","updatePostCommentReply"])),Object(r["b"])("footer",["setFooter","addComment"])),{},{setHeaderData:function(e,t,s,n,i,o,a,c){this.setHeader({hamburgerIcon:e,backIcon:t,title:s,rightIcon1:n,rightIcon2:i,rightLinkText:o,notificationIcon:a,searchIcon:c})},setFooterData:function(e){this.setFooter({commentSection:e})},formatDate:function(e){return c["a"].formatDate(e,"DD MMM")+" at "+c["a"].formatDate(e,"hh.mm A")},backButtonClick:function(){this.$router.push("/comments/"+this.newsfeeds.selectedNewsfeedComment.newsfeed.id)},postNewsFeedComment:function(){var e=this;this.postNewsFeedReplyComments({comment:this.footerData.comment,user:this.userDetails,newsfeedcomment:this.newsfeeds.selectedNewsfeedComment}).then((function(){e.addComment(""),e.fetchNewsfeedComment(e.newsfeeds.selectedNewsfeedComment.id)}))},postReplyComment:function(){var e=this;this.postNewsFeedReplyComments({comment:this.footerData.comment,user:this.userDetails,newsfeedcomment:this.newsfeeds.selectedNewsfeedComment}).then((function(){e.addComment(""),e.fetchNewsfeedComment(e.newsfeeds.selectedNewsfeedComment.id)}))},setSelectedReplyData:function(){this.$root.$emit("setReplyButtonClick")},setReplyComment:function(e){var t=this.newsfeeds.selectedNewsfeedComment.newsfeedreplycomments.find((function(t){return parseInt(t.id)===e}));this.setSelectedReplyComment(t),this.$root.$emit("setReplyCommentClick")},likeColour:function(e){var t=this.newsfeeds.selectedNewsfeedComment.newsfeedreplycomments.find((function(t){return parseInt(t.id)===e})),s=this.userDetails.userprofile.id,n=t.newsfeedreplycommentslikes.find((function(e){return parseInt(e.userprofile.id)===s}));return void 0!==n?"app:like-blue":"app:like"},setLikeForNewfeedsReplyComment:function(e){var t=this,s=this.newsfeeds.selectedNewsfeedComment.newsfeedreplycomments.find((function(t){return parseInt(t.id)===e})),n=this.userDetails.userprofile.id,i=s.newsfeedreplycommentslikes.find((function(e){return parseInt(e.userprofile.id)===n}));void 0!==i?this.deleteNewsfeedReplyCommentsLikes({id:i.id}).then((function(){t.fetchNewsfeedComment(t.newsfeeds.selectedNewsfeedComment.id)})):this.postNewsFeedReplyCommentsLikes({user:this.userDetails,newsfeedreplycomment:s}).then((function(){t.fetchNewsfeedComment(t.newsfeeds.selectedNewsfeedComment.id)}))},setLikeForNewfeedsComment:function(){var e=this;if(this.newsfeeds.selectedNewsfeedComment.newsfeedcommentslikes&&this.newsfeeds.selectedNewsfeedComment.newsfeedcommentslikes.length>0){var t=this.userDetails.userprofile.id,s=this.newsfeeds.selectedNewsfeedComment.newsfeedcommentslikes.find((function(e){return parseInt(e.userprofile.id)===t}));void 0!==s?this.deleteLikeNewfeedsComments({id:s.id}).then((function(){e.fetchNewsfeedComment(e.newsfeeds.selectedNewsfeedComment.id)})):this.postNewsFeedCommentsLikes({user:this.userDetails,newsfeedcomment:this.newsfeeds.selectedNewsfeedComment}).then((function(){e.fetchNewsfeedComment(e.newsfeeds.selectedNewsfeedComment.id)}))}else this.postNewsFeedCommentsLikes({user:this.userDetails,newsfeedcomment:this.newsfeeds.selectedNewsfeedComment}).then((function(){e.fetchNewsfeedComment(e.newsfeeds.selectedNewsfeedComment.id)}))},likeReplyColour:function(){if(this.newsfeeds.selectedNewsfeedComment.newsfeedcommentslikes&&this.newsfeeds.selectedNewsfeedComment.newsfeedcommentslikes.length>0){var e=this.userDetails.userprofile.id,t=this.newsfeeds.selectedNewsfeedComment.newsfeedcommentslikes.find((function(t){return parseInt(t.userprofile.id)===e}));return void 0!==t?"app:like-filled-vector":"app:like-vector"}return"app:like-vector"},goToProfile:function(e){e===this.userDetails.userprofile.id?this.$router.push("/profile"):this.$router.push("/user-profile/"+e)},deleteComment:function(e){this.deleteConfirm=!0,this.selectedComment=Object.assign({},e)},deleteCommentAction:function(){var e=this;this.deleteNewsFeedReplyComment(this.selectedComment.id).then((function(t){e.selectedComment=null,e.fetchNewsfeedComment(e.$route.params.id)}))},editComment:function(e){this.editingCommentDetail=e,this.editingComment=e.comment},updateCommentAction:function(){var e=this,t={id:this.editingCommentDetail.id,comment:this.editingComment};this.updatePostCommentReply(t).then((function(){e.fetchNewsfeedComment(e.$route.params.id),e.editingCommentDetail=null}))}})},f=d,u=(s("b691"),s("87a9"),s("2877")),p=s("9989"),C=s("f09f"),w=s("a370"),h=s("4074"),v=s("cb32"),b=s("0170"),N=s("9c40"),k=s("068f"),y=s("eb85"),q=s("4b7e"),g=s("27f9"),D=s("0016"),_=s("4e73"),R=s("1c1c"),O=s("66e5"),j=s("24e8"),I=s("8572"),F=s("7f67"),$=s("eebe"),L=s.n($),x=Object(u["a"])(f,n,i,!1,null,"650f8f2c",null);t["default"]=x.exports;L()(x,"components",{QPage:p["a"],QCard:C["a"],QCardSection:w["a"],QItemSection:h["a"],QAvatar:v["a"],QItemLabel:b["a"],QBtn:N["a"],QImg:k["a"],QSeparator:y["a"],QCardActions:q["a"],QInput:g["a"],QIcon:D["a"],QMenu:_["a"],QList:R["a"],QItem:O["a"],QDialog:j["a"],QField:I["a"]}),L()(x,"directives",{ClosePopup:F["a"]})},8555:function(e,t,s){},"87a9":function(e,t,s){"use strict";var n=s("ca9c"),i=s.n(n);i.a},b691:function(e,t,s){"use strict";var n=s("8555"),i=s.n(n);i.a},ca9c:function(e,t,s){}}]);