(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"0c67":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex"},[o("div",{staticClass:"q-gutter-y-md",staticStyle:{width:"100%"}},[o("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[t.blog.CoverPhoto?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(t.blog.CoverPhoto.url)},on:{click:function(e){return t.oneClick(t.blog)}}}):t._e(),t.blog.CoverPhoto&&t.isImagePost(t.blog.CoverPhoto.mime)?o("q-img",{staticClass:"blog-cover",attrs:{src:t.getImageurl(t.blog.CoverPhoto.url)},on:{click:function(e){return t.oneClick(t.blog)}}}):t.blog.CoverPhoto&&!1===t.isImagePost(t.blog.CoverPhoto.mime)?o("video",{staticClass:"video-player",attrs:{src:t.blog.CoverPhoto.url,autoplay:"",controls:""}}):t._e(),o("q-card-section",[t.blog.userprofile?o("div",{staticClass:"row items-center no-wrap"},[o("div",{staticClass:"col"},[o("q-card-section",{attrs:{horizontal:""}},[o("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[t.blog.userprofile.avatar?o("q-avatar",{attrs:{size:"34px"}},[o("img",{attrs:{src:""+t.blog.userprofile.avatar.url}})]):t.blog.userprofile.firstname?o("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[t._v("\n                    "+t._s(t.blog.userprofile.firstname.charAt(0))+"\n                  ")]):t.blog.userprofile.username?o("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[t._v("\n                    "+t._s(t.blog.userprofile.username.charAt(0))+"\n                  ")]):t._e()],1),o("q-item-section",[o("q-item-label",{staticClass:"title",on:{click:function(e){t.goToProfile(parseInt(t.blog.userprofile.id))}}},[t._v("\n                    "+t._s(t.blog.userprofile.firstname)+"\n                    "+t._s(t.blog.userprofile.lastname)+"\n                  ")]),o("q-item-label",{staticClass:"subtitle",attrs:{caption:""}},[t._v("\n                    "+t._s(t.formatDate(t.blog.created_at))+"\n                  ")])],1)],1)],1),parseInt(t.blog.userprofile.id)===parseInt(t.userDetails.userprofile.id)&&"Published"!==t.blog.Status&&"Unpublished"!==t.blog.Status?o("div",{staticClass:"col-auto"},[o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dots"},on:{click:function(e){return t.openBlogVlogOptionModel()}}})],1):t._e()]):t._e(),o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs blog-title"},[t._v(t._s(t.blog.Title))]),o("div",{staticClass:"text-caption blog-description",domProps:{innerHTML:t._s(t.blog.Content)}})]),o("q-card-actions",{staticClass:"icons",attrs:{align:"between"}},[o("q-btn",{attrs:{flat:"",icon:t.likeColour(),size:"10px","no-caps":""},on:{click:function(e){t.setLikeForBlog(parseInt(t.blog.id))}}},[o("span",{staticClass:"action"},[t._v("Like")])]),o("q-btn",{attrs:{flat:"",icon:"app:comment",size:"10px","no-caps":""},on:{click:function(e){return t.blogComment(t.blog.id)}}},[o("span",{staticClass:"action"},[t._v("Comment")])]),o("q-btn",{attrs:{flat:"",icon:"app:share",size:"10px","no-caps":""}},[o("span",{staticClass:"action",on:{click:function(e){return t.showAddNewsFeedModel()}}},[t._v("Share")])])],1)],1)],1),o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:"",bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v("Comment")])]),o("q-card-section",{staticClass:"comment-input",staticStyle:{width:"100%"}},[o("q-item-section",[o("q-input",{attrs:{rounded:"",outlined:"",placeholder:"Write a Message",dense:t.dense},scopedSlots:t._u([{key:"before",fn:function(){return[null!=t.userprofileDetail&&null!=t.userprofileDetail.avatar?o("q-avatar",{attrs:{size:"34px"}},[o("img",{attrs:{src:""+t.userprofileDetail.avatar.url}})]):o("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[t._v("\n                "+t._s(t.userDetails.userprofile.firstname.charAt(0))+"\n              ")])]},proxy:!0},{key:"after",fn:function(){return[o("q-btn",{staticStyle:{color:"#6B7BC7"},attrs:{round:"",dense:"",flat:"",icon:"send",disable:0==t.commentText.length},on:{click:function(e){return t.postBlogComment()}}})]},proxy:!0}]),model:{value:t.commentText,callback:function(e){t.commentText=e},expression:"commentText"}})],1)],1),t._l(t.blog.blog_comments,(function(e){return o("q-intersection",{key:e.id,attrs:{transition:"scale",once:""}},[o("q-card-section",{attrs:{horizontal:""}},[!1!==t.edit||null!==t.selectedComment&&t.selectedComment.id!==e.id?t._e():o("q-card-section",[o("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[null!=t.userprofileDetail&&null!=t.userprofileDetail.avatar?o("q-avatar",{attrs:{size:"34px"}},[o("img",{attrs:{src:""+t.userprofileDetail.avatar.url}})]):o("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[t._v("\n                "+t._s(t.userDetails.userprofile.firstname.charAt(0))+"\n              ")])],1)],1),!1!==t.edit||null!==t.selectedComment&&t.selectedComment.id!==e.id?t._e():o("q-card-section",{staticClass:"comment-section"},[o("q-item-section",[o("div",{staticClass:"row"},[o("div",{staticClass:"title col",on:{click:function(e){return t.goToProfile(t.userprofile)}}},[t._v("\n                  "+t._s(e.userprofile.firstname)+" "+t._s(e.userprofile.lastname)+"\n                ")]),o("div",{staticClass:"subtitle"},[t._v("("+t._s(t.formatDate(e.created_at))+")")]),e.userprofile===t.userprofileDetail.id?o("div",[o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dot-action",size:"8px"}},[o("q-menu",{attrs:{cover:"","auto-close":""}},[o("q-list",[o("q-item",{attrs:{clickable:""},on:{click:function(o){t.editComment(e),t.edit=!0}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"create"}})],1),o("q-item-section",[t._v("Edit Comment")])],1),o("q-item",{attrs:{clickable:""},on:{click:function(o){t.editComment(e),t.confirm=!0}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"delete"}})],1),o("q-item-section",[t._v("Delete Comment")])],1)],1)],1)],1)],1):t._e()]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("truncate",{staticClass:"comment",attrs:{clamp:"...See More",type:"text",length:60,less:"Show Less",text:e.comment,"action-class":"collapsedText"}}),o("p",{staticClass:"comment",staticStyle:{display:"inline-block","word-break":"break-word"}})],1)])])],1),e.userprofile===t.userprofileDetail.id&&!0===t.edit&&null!=t.selectedComment&&t.selectedComment.id===e.id?o("q-card-section",{staticClass:"comment-input",staticStyle:{width:"100%","margin-top":"10px"}},[o("q-item-section",[o("q-input",{attrs:{rounded:"",outlined:"",placeholder:"Write a Message",dense:t.dense},scopedSlots:t._u([{key:"before",fn:function(){return[null!=t.userprofileDetail&&null!=t.userprofileDetail.avatar?o("q-avatar",{attrs:{size:"34px"}},[o("img",{attrs:{src:""+t.userprofileDetail.avatar.url}})]):o("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[t._v("\n                    "+t._s(t.userDetails.userprofile.firstname.charAt(0))+"\n                  ")])]},proxy:!0},{key:"after",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:t.resetEdit}}),o("q-btn",{staticStyle:{color:"#6B7BC7"},attrs:{round:"",dense:"",flat:"",icon:"send"},on:{click:function(e){return t.putBlogComment()}}})]},proxy:!0}],null,!0),model:{value:t.selectedComment.comment,callback:function(e){t.$set(t.selectedComment,"comment",e)},expression:"selectedComment.comment"}})],1)],1):t._e()],1)],1)}))],2),t.relatedBlogs().length?o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:"",bordered:""}},[o("q-card-section",[o("div",{staticClass:"text-h5 q-mt-sm q-mb-xs"},[t._v("Related Posts")])]),o("div",{staticClass:"q-pa-md mostReadSection",staticStyle:{"padding-top":"0px !important"}},[o("div",{staticClass:"favorite-pic-section"},[o("q-scroll-area",{staticClass:"scroll",attrs:{horizontal:""}},[o("div",{staticClass:"row no-wrap item-section"},t._l(t.relatedBlogs(),(function(e){return o("q-intersection",{key:e.id,staticClass:"item",attrs:{transition:"scale"}},[o("q-img",{staticClass:"blog-image",attrs:{src:t.getImageurl(e.CoverPhoto.url)},on:{click:function(o){return t.goToBlog(e.id)}}}),o("div",{staticClass:"BMiCal",on:{click:function(o){return t.goToBlog(e.id)}}},[t._v(t._s(e.Title))]),o("div",{staticClass:"appStar"},[t._v(t._s(e.blog_comments.length)+" Comments")])],1)})),1)])],1)])],1):t._e(),o("q-dialog",{attrs:{persistent:""},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"confirm"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("div",{staticClass:"text-h6"},[t._v("Delete comment")])]),o("q-card-section",{staticClass:"row items-center"},[o("span",{staticClass:"q-ml-sm"},[t._v("Deleting the comment will remove it from the conversation")])]),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Delete"},on:{click:t.deleteComment}})],1)],1)],1),o("q-dialog",{model:{value:t.addNewsFeedModel,callback:function(e){t.addNewsFeedModel=e},expression:"addNewsFeedModel"}},[o("AddNewsFeed",{attrs:{url:t.currenturl}})],1),o("div",{ref:"fullscreenElement",attrs:{id:"image-box"}},[o("FullScreen",{attrs:{details:t.fullscreendata}})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.postOptionModel,callback:function(e){t.postOptionModel=e},expression:"postOptionModel"}},[o("BlogVlogOption",{attrs:{isMyProfilePost:t.isMyPost},on:{"clicked-selected-Option":t.clickedSelectedOptionModal}})],1),o("q-dialog",{attrs:{position:"bottom"},model:{value:t.postWarningModal,callback:function(e){t.postWarningModal=e},expression:"postWarningModal"}},[o("DeletePostWarning",{attrs:{postType:t.postType},on:{"delete-selected-option":t.deleteSelectedOption}})],1)],1)},s=[],l=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("28a5"),o("7f7f"),o("f751"),o("7514"),o("9523")),a=o.n(l),r=o("bd4c"),n=o("2a19"),c=o("2f62"),u=o("e017"),d=o("9d56"),m=o("d41a"),f=o("f2d8"),p=o("23cc");function g(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function h(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?g(Object(o),!0).forEach((function(e){a()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var b={name:"Home",computed:h(h(h({},Object(c["c"])("blog",["blog","blogs"])),Object(c["c"])("userprofile",["userDetails","userprofileDetail"])),Object(c["c"])("config",["blobBaseUrl"])),created:function(){this.$root.$on("headerRightIcon2Click",this.gotoSearch),this.$root.$on("headerBackButtonClick",this.backButtonClick),this.$root.$on("onlikeClick",this.setLikeForBlog),this.$root.$on("onsetSelectedClick",this.blogComment),this.$root.$on("onformatDateClick",this.formatDate),this.$root.$on("onExitFullscreen",this.closeFullScreen)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick),this.$root.$off("headerRightIcon2Click",this.gotoSearch),this.$root.$off("onlikeClick",this.setLikeForBlog),this.$root.$off("onsetSelectedClick",this.blogComment),this.$root.$off("onformatDateClick",this.formatDate),this.$root.$off("onExitFullscreen",this.closeFullScreen)},mounted:function(){this.setHeaderData(!1,!0,"Blog Article","","","",!1,!1),this.fetchBlog(this.$route.params.id),this.fetchBlogs(!1),this.title=this.blog&&this.blog.Title,this.content=this.blog&&this.blog.Content,this.image=this.blog&&this.blog.CoverPhoto&&this.blog.CoverPhoto.url,this.blog_keywords=this.blog&&this.blog.blog_keywords},filters:{truncate:function(t,e,o){return t.length>e?t.substring(0,e)+o:t}},data:function(){return{tab:"",slide:1,autoplay:!0,commentText:"",ph:"",dense:!1,selectedComment:null,confirm:!1,edit:!1,addNewsFeedModel:!1,currenturl:window.location.href,title:"",content:"",image:null,blog_keywords:null,framework:{plugins:["Meta"]},fullscreendata:{url:null,userprofile:"",feedtext:"",created_at:"",likeLength:"",commentLength:"",id:"",likeIcon:"",hideBack:!1},delay:700,clicks:0,timer:null,isMyPost:!1,postOptionModel:!1,postWarningModal:!1,postType:"blog"}},components:{truncate:u["a"],AddNewsFeed:d["a"],FullScreen:m["a"],BlogVlogOption:f["a"],DeletePostWarning:p["a"]},watch:{"$route.params.id":function(t){this.fetchBlog(t)}},meta:function(){return{title:this.blog.Title,meta:{description:{name:"description",content:this.content},url:{name:"url",content:this.currenturl},image:{name:"image",content:this.image}}}},methods:h(h(h({},Object(c["b"])("header",["setHeader"])),Object(c["b"])("blog",["fetchBlog","fetchBlogs","postBlogComments","putBlogComments","deleteBlogComments","postBlogLikes","deleteBlogLikes","deleteBlog"])),{},{setHeaderData:function(t,e,o,i,s,l,a,r){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:i,rightIcon2:s,rightLinkText:l,notificationIcon:a,searchIcon:r})},relatedBlogs:function(){var t=this,e=this.blog&&this.blog.blog_categories&&this.blog.blog_categories.map((function(t){return t.id})),o=this.blog&&this.blogs.filter((function(o){var i=o.blog_categories.some((function(t){return e.some((function(e){return e===t.id}))}))&&o.id!==t.blog.id;return i}));return o},setLikeForBlog:function(t){var e=this,o=this.blog.bloglikes.find((function(t){return parseInt(t.userprofile.id)===e.userprofileDetail.id}));void 0===o?this.postBlogLikes({userprofileId:this.userprofileDetail.id,blogId:t}).then((function(){e.fetchBlog(e.$route.params.id).then((function(){e.fullscreendata.likeIcon=e.likeColour(),e.fullscreendata.likeLength=e.blog.bloglikes.length}))})):this.deleteBlogLikes({blogLikeId:o.id}).then((function(){e.fetchBlog(e.$route.params.id).then((function(){e.fullscreendata.likeIcon=e.likeColour(),e.fullscreendata.likeLength=e.blog.bloglikes.length}))}))},likeColour:function(){var t=this;if(!this.blog.bloglikes)return"app:like";var e=this.blog.bloglikes.find((function(e){return parseInt(e.userprofile.id)===t.userprofileDetail.id}));return void 0!==e?"app:like-blue":"app:like"},formatDate:function(t){return r["a"].formatDate(t,"DD MMM")+" at "+r["a"].formatDate(t,"hh.mm A")},editComment:function(t){this.selectedComment=Object.assign({},t)},postBlogComment:function(){var t=this;this.postBlogComments({comment:this.commentText,blogId:this.$route.params.id,userprofile:this.userprofileDetail.id}).then((function(){t.commentText="",t.fetchBlog(t.$route.params.id)}))},resetEdit:function(){this.selectedComment=null,this.edit=!1},putBlogComment:function(){var t=this;this.putBlogComments(this.selectedComment).then((function(){t.selectedComment=null,t.edit=!1,t.fetchBlog(t.$route.params.id)}))},deleteComment:function(){var t=this;this.deleteBlogComments(this.selectedComment.id).then((function(){t.selectedComment=null,t.fetchBlog(t.$route.params.id)}))},backButtonClick:function(){this.$router.push("/blog-articles")},goToBlog:function(t){this.$router.push({path:"/blog",query:{id:t}})},blogComment:function(t){this.$router.push("/blog-comment/"+t)},gotoSearch:function(){this.$router.push("/blog-search")},showAddNewsFeedModel:function(){this.addNewsFeedModel=!0},closeFullScreen:function(){if(document.exitFullscreen){document.exitFullscreen();var t=document.getElementById("image-box");t.setAttribute("style","display:none;"),this.fullscreendata.hideBack=!0}},getfullScreen:function(t){this.fullscreendata.hideBack=!1,this.fullscreendata.url=t.CoverPhoto.url,this.fullscreendata.name=t.userprofile.firstname+" "+t.userprofile.lastname,this.fullscreendata.feedtext=t.Content,this.fullscreendata.created_at=t.created_at,this.fullscreendata.likeLength=t.bloglikes.length,this.fullscreendata.commentLength=t.blog_comments.length,this.fullscreendata.id=t.id,this.fullscreendata.likeIcon=this.likeColour();var e=document.getElementById("image-box");e.setAttribute("style","display:flex;");var o=this.$refs.fullscreenElement;this.$q.fullscreen.toggle(o).then((function(){})).catch((function(t){alert(t)}))},oneClick:function(t){if(this.clicks++,1===this.clicks){var e=this;this.timer=setTimeout((function(){e.clicks=0,e.getfullScreen(t)}),this.delay)}else clearTimeout(this.timer),this.clicks=0,this.likeColour(),this.setLikeForBlog(parseInt(t.id))},getImageurl:function(t){var e=t.substring(t.lastIndexOf("/")+1);e="medium_"+e;var o=this.blobBaseUrl;return t=o+e,t},goToProfile:function(t){t===this.userDetails.userprofile.id?this.$router.push("/profile"):this.$router.push("/user-profile/"+t)},openBlogVlogOptionModel:function(){parseInt(this.blog.userprofile.id)===parseInt(this.userDetails.userprofile.id)?this.isMyPost=!0:this.isMyPost=!1,this.postOptionModel=!0},clickedSelectedOptionModal:function(t){switch(this.postOptionModel=!1,t){case"delete":this.blog.IsVlog?this.postType="Vlog":this.postType="Blog",this.postWarningModal=!0;break}},deleteSelectedOption:function(t){var e=this;"cancel"===t?(this.isMyPost=!1,this.postWarningModal=!1):(this.deleteBlog(parseInt(this.blog.id)).then((function(){n["a"].create({progress:!0,message:(e.blog.IsVlog?"Vlog":"Blog")+"Delete Successfully",type:"postive"}),e.blog.IsVlog?e.$router.push("vlogs/Home"):e.$router.push("blogs/home")})),this.isMyPost=!1,this.postWarningModal=!1)},isImagePost:function(t){return"image"===t.split("/")[0]}})},C=b,v=(o("9f8d"),o("928a"),o("2877")),k=o("9989"),q=o("f09f"),y=o("068f"),_=o("a370"),B=o("4074"),x=o("cb32"),w=o("0170"),D=o("9c40"),I=o("4b7e"),$=o("27f9"),P=o("ad56"),M=o("4e73"),S=o("1c1c"),O=o("66e5"),T=o("0016"),F=o("4983"),L=o("24e8"),Q=o("de5e"),j=o("8572"),z=o("7f67"),A=o("eebe"),E=o.n(A),N=Object(v["a"])(C,i,s,!1,null,"0b9bcf69",null);e["default"]=N.exports;E()(N,"components",{QPage:k["a"],QCard:q["a"],QImg:y["a"],QCardSection:_["a"],QItemSection:B["a"],QAvatar:x["a"],QItemLabel:w["a"],QBtn:D["a"],QCardActions:I["a"],QInput:$["a"],QIntersection:P["a"],QMenu:M["a"],QList:S["a"],QItem:O["a"],QIcon:T["a"],QScrollArea:F["a"],QDialog:L["a"],QPageSticky:Q["a"],QField:j["a"]}),E()(N,"directives",{ClosePopup:z["a"]})},"63c9":function(t,e,o){},"928a":function(t,e,o){"use strict";var i=o("975a"),s=o.n(i);s.a},"975a":function(t,e,o){},"9f8d":function(t,e,o){"use strict";var i=o("63c9"),s=o.n(i);s.a}}]);