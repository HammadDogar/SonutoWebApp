(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{"1ee9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"flex-center page"},[n("div",{staticClass:"main-container"},[n("div",{staticClass:"row justify-center q-mt-lg"},[n("div",{staticClass:"col-12"},[[n("q-tabs",{staticClass:"bg-blue text-white shadow-2 q-mx-md q-mt-md justify-between",attrs:{"no-caps":"","outside-arrows":"","mobile-arrows":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[n("q-tab",{attrs:{name:"pending",label:"Pending"}}),n("q-tab",{attrs:{name:"reviewed",label:"Reviewed"}})],1),"pending"===e.tab?n("div",{staticClass:"q-pa-md"},[n("q-table",{staticClass:"my-sticky-header-table custom-table table-responsive",attrs:{data:this.pendingverificationRequests,columns:e.pendingColumns,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"body-cell-action",fn:function(t){return[n("q-td",{attrs:{props:t}},[n("q-btn",{attrs:{color:"primary",label:"Review"},on:{click:function(n){return e.review(t)}}})],1)]}}],null,!1,1947436076)})],1):e._e(),"reviewed"===e.tab?n("div",{staticClass:"q-pa-md"},[n("q-table",{staticClass:"my-sticky-header-table custom-table table-responsive",attrs:{data:this.reviewedVerificationRequests,columns:e.reviewedColumns,pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"body-cell-action",fn:function(t){return[n("q-td",{attrs:{props:t}},[n("q-btn",{attrs:{color:"Rejected"===t.row.status?"red":"primary",label:t.row.status},on:{click:function(n){return e.review(t)}}})],1)]}}],null,!1,4148491539)})],1):e._e()]],2)])])])},i=[],r=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("9523")),s=n.n(r),o=n("2f62"),c=n("bd4c");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={data:function(){return{tab:"pending",addUserDialog:!1,form:{userId:"",roles:[]},pagination:{rowsPerPage:10},pendingColumns:[{name:"id",required:!0,label:"Id",align:"center",format:function(e,t){return t.id}},{name:"name",required:!0,label:"User",align:"center",format:function(e,t){var n,a,i,r;return"".concat((null===(n=t.users_permissions_user)||void 0===n||null===(a=n.userprofile)||void 0===a?void 0:a.firstname)+" "+(null===(i=t.users_permissions_user)||void 0===i||null===(r=i.userprofile)||void 0===r?void 0:r.lastname))}},{name:"documentType",align:"center",label:"Document",format:function(e,t){return t.documentType}},{name:"status",align:"center",label:"Status",format:function(e,t){return t.status}},{name:"action",align:"center",label:"Action",field:""}],reviewedColumns:[{name:"id",required:!0,label:"Id",align:"center",format:function(e,t){return t.id}},{name:"name",required:!0,label:"User",align:"center",format:function(e,t){return"".concat(t.users_permissions_user.userprofile.firstname+" "+t.users_permissions_user.userprofile.lastname)}},{name:"documentType",align:"center",label:"Document",format:function(e,t){return t.documentType}},{name:"status",align:"center",label:"Status",format:function(e,t){return t.status}},{name:"published_at",align:"center",label:"Updated",format:function(e,t){return c["a"].formatDate(t.updated_at,"DD MMM")+" at "+c["a"].formatDate(t.updated_at,"hh.mm A")}},{name:"action",align:"center",label:"Action",field:""}],isLoading:!1,isEdit:!1}},computed:l(l({},Object(o["c"])("userprofile",["isAuthenticated","userRoles"])),Object(o["c"])("verification",["pendingverificationRequests","reviewedVerificationRequests"])),methods:l(l(l({},Object(o["b"])("verification",["getVerificationRequests"])),Object(o["b"])("header",["setHeader"])),{},{setHeaderData:function(e,t,n,a,i,r,s,o,c){this.setHeader({hamburgerIcon:e,backIcon:t,title:n,rightIcon1:a,rightIcon2:i,rightLinkText:r,notificationIcon:s,searchIcon:o,fullWidthOnLarge:c})},review:function(e){this.$router.push("verification-request/"+e.row.id)}}),mounted:function(){var e;this.getVerificationRequests(),this.setHeaderData(!0,!1,"Verification Requests","","","",!1,!1,!0),(null===(e=this.userRoles)||void 0===e?void 0:e.some((function(e){return 5===e.id})))||this.$router.push("/")}},f=d,p=(n("c299"),n("2877")),b=n("9989"),m=n("429b"),g=n("7460"),v=n("eaac"),w=n("db86"),h=n("9c40"),q=n("8572"),y=n("0016"),O=n("eebe"),j=n.n(O),_=Object(p["a"])(f,a,i,!1,null,null,null);t["default"]=_.exports;j()(_,"components",{QPage:b["a"],QTabs:m["a"],QTab:g["a"],QTable:v["a"],QTd:w["a"],QBtn:h["a"],QField:q["a"],QIcon:y["a"]})},c299:function(e,t,n){"use strict";var a=n("c58c"),i=n.n(a);i.a},c58c:function(e,t,n){}}]);