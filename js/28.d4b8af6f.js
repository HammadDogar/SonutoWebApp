(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{9790:function(t,e,o){"use strict";var i=o("d2ba"),a=o.n(i);a.a},"9ac5":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex"},[o("q-card",{staticClass:"my-card",staticStyle:{width:"100%"},attrs:{flat:"",bordered:""}},t._l(t.blog.blog_comments,(function(e){return o("q-card-section",{key:e.id,attrs:{horizontal:""}},[!1!==t.edit||null!==t.selectedComment&&t.selectedComment.id!==e.id?t._e():o("q-card-section",[o("q-item-section",{staticClass:"avatar-section",attrs:{avatar:""}},[null!=e.userprofile.avatar?o("q-avatar",{attrs:{size:"34px"}},[o("img",{attrs:{src:""+e.userprofile.avatar.url}})]):o("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[t._v("\n            "+t._s(e.userprofile.firstname.charAt(0))+"\n          ")])],1)],1),!1!==t.edit||null!==t.selectedComment&&t.selectedComment.id!==e.id?t._e():o("q-card-section",{staticClass:"comment-section"},[o("q-item-section",[o("div",{staticClass:"row"},[o("div",{staticClass:"title col",on:{click:function(o){t.goToProfile(parseInt(e.userprofile.id))}}},[t._v("\n              "+t._s(e.userprofile.firstname)+" "+t._s(e.userprofile.lastname)+"\n            ")]),o("div",{staticClass:"subtitle"},[t._v("("+t._s(t.formatDate(e.created_at))+")")]),parseInt(e.userprofile.id)===t.userprofileDetail.id?o("div",[o("q-btn",{attrs:{color:"grey-7",round:"",flat:"",icon:"app:three-dot-action",size:"8px"}},[o("q-menu",{attrs:{cover:"","auto-close":""}},[o("q-list",[o("q-item",{attrs:{clickable:""},on:{click:function(o){t.editComment(e),t.edit=!0}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"create"}})],1),o("q-item-section",[t._v("Edit Comment")])],1),o("q-item",{attrs:{clickable:""},on:{click:function(o){t.editComment(e),t.confirm=!0}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"delete"}})],1),o("q-item-section",[t._v("Delete Comment")])],1)],1)],1)],1)],1):t._e()]),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("p",{staticClass:"comment",staticStyle:{display:"inline-block","word-break":"break-word"}},[t._v(t._s(e.comment))])])])])],1),parseInt(e.userprofile.id)===t.userprofileDetail.id&&!0===t.edit&&null!=t.selectedComment&&t.selectedComment.id===e.id?o("q-card-section",{staticClass:"comment-input",staticStyle:{width:"100%","margin-top":"10px"}},[o("q-item-section",[o("q-input",{attrs:{rounded:"",outlined:"",placeholder:"Write a Message",dense:t.dense},scopedSlots:t._u([{key:"before",fn:function(){return[null!=t.userprofileDetail&&null!=t.userprofileDetail.avatar?o("q-avatar",{attrs:{size:"34px"}},[o("img",{attrs:{src:""+t.userprofileDetail.avatar.url}})]):o("q-avatar",{attrs:{size:"34px",color:"primary","text-color":"white"}},[t._v("\n                "+t._s(t.userDetails.userprofile.firstname.charAt(0))+"\n              ")])]},proxy:!0},{key:"after",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:t.resetEdit}}),o("q-btn",{staticStyle:{color:"#6B7BC7"},attrs:{round:"",dense:"",flat:"",icon:"send"},on:{click:function(e){return t.putBlogComment()}}})]},proxy:!0}],null,!0),model:{value:t.selectedComment.comment,callback:function(e){t.$set(t.selectedComment,"comment",e)},expression:"selectedComment.comment"}})],1)],1):t._e()],1)})),1),o("q-dialog",{attrs:{persistent:""},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"confirm"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("div",{staticClass:"text-h6"},[t._v("Delete comment")])]),o("q-card-section",{staticClass:"row items-center"},[o("span",{staticClass:"q-ml-sm"},[t._v("Deleting the comment will remove it from the conversation")])]),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Delete"},on:{click:t.deleteComment}})],1)],1)],1)],1)},a=[],s=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("f751"),o("9523")),r=o.n(s),n=o("bd4c"),c=o("2f62");function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function m(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){r()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var u={name:"Comment",computed:m(m(m({},Object(c["c"])("userprofile",["userprofiles","userDetails","userprofileDetail"])),Object(c["c"])("blog",["blog"])),Object(c["c"])("footer",["footerData"])),created:function(){this.$root.$on("saveCommentButtonClick",this.postNewBlogComment),this.$root.$on("headerBackButtonClick",this.backButtonClick)},beforeDestroy:function(){this.$root.$off("headerBackButtonClick",this.backButtonClick)},mounted:function(){this.setFooterData(!0),this.setHeaderData(!1,!0,"Comment","","","",!0,!0),this.fetchBlog(this.$route.params.id)},beforeRouteLeave:function(t,e,o){this.setFooterData(!1),o()},components:{},watch:{"$route.params.id":function(t){this.fetchBlog(t)}},data:function(){return{tab:"",slide:1,autoplay:!0,commentText:"",ph:"",dense:!1,selectedComment:null,confirm:!1,edit:!1}},methods:m(m(m(m({},Object(c["b"])("header",["setHeader"])),Object(c["b"])("blog",["fetchBlog","postBlogComments","putBlogComments","deleteBlogComments","postBlogLikes","deleteBlogLikes"])),{},{setHeaderData:function(t,e,o,i,a,s,r,n){this.setHeader({hamburgerIcon:t,backIcon:e,title:o,rightIcon1:i,rightIcon2:a,rightLinkText:s,notificationIcon:r,searchIcon:n})}},Object(c["b"])("footer",["setFooter","addComment"])),{},{setFooterData:function(t){this.setFooter({commentSection:t})},postNewBlogComment:function(){var t=this;this.postBlogComments({comment:this.footerData.comment,blogId:this.$route.params.id,userprofile:this.userprofileDetail.id}).then((function(){t.addComment(""),t.fetchBlog(t.$route.params.id)}))},formatDate:function(t){return n["a"].formatDate(t,"DD MMM")+" at "+n["a"].formatDate(t,"hh.mm A")},editComment:function(t){this.selectedComment=Object.assign({},t)},resetEdit:function(){this.selectedComment=null,this.edit=!1},putBlogComment:function(){var t=this;this.putBlogComments(this.selectedComment).then((function(){t.selectedComment=null,t.edit=!1,t.fetchBlog(t.$route.params.id)}))},deleteComment:function(){var t=this;this.deleteBlogComments(this.selectedComment.id).then((function(){t.selectedComment=null,t.fetchBlog(t.$route.params.id)}))},backButtonClick:function(){this.$router.push({path:"/blog",query:{id:this.$route.params.id}})},goToProfile:function(t){t===this.userDetails.userprofile.id?this.$router.push("/profile"):this.$router.push("/user-profile/"+t)}})},d=u,f=(o("9790"),o("2877")),p=o("9989"),h=o("f09f"),C=o("a370"),b=o("4074"),g=o("cb32"),v=o("9c40"),q=o("4e73"),k=o("1c1c"),D=o("66e5"),y=o("0016"),B=o("27f9"),w=o("24e8"),O=o("4b7e"),_=o("de5e"),j=o("8572"),$=o("7f67"),x=o("eebe"),Q=o.n(x),I=Object(f["a"])(d,i,a,!1,null,"36dc38c9",null);e["default"]=I.exports;Q()(I,"components",{QPage:p["a"],QCard:h["a"],QCardSection:C["a"],QItemSection:b["a"],QAvatar:g["a"],QBtn:v["a"],QMenu:q["a"],QList:k["a"],QItem:D["a"],QIcon:y["a"],QInput:B["a"],QDialog:w["a"],QCardActions:O["a"],QPageSticky:_["a"],QField:j["a"]}),Q()(I,"directives",{ClosePopup:$["a"]})},d2ba:function(t,e,o){}}]);