(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"1b91":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex-center page"},[a("div",{staticClass:"main-container"},[a("div",{staticClass:"custom-navbar"},[a("h5",{staticClass:"q-ma-none"},[e._v("Hello Admin !")]),a("h6",{staticClass:"q-ma-none cursor-pointer",on:{click:function(t){return e.logOut()}}},[a("q-icon",{attrs:{name:e.matMenu}}),e._v("\n        Logout\n      ")],1)]),a("div",{staticClass:"row justify-center q-mt-lg"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"flex justify-between q-mx-md"},[a("h4",{staticClass:"q-ma-none"},[e._v("Users")]),a("q-btn",{staticClass:"add-button",attrs:{color:"primary",type:"submit",label:"Add Users",rounded:"","no-caps":""},on:{click:function(t){e.addUserDialog=!0}}})],1),[a("div",{staticClass:"q-pa-md"},[a("q-table",{staticClass:"my-sticky-header-table custom-table table-responsive",attrs:{data:this.adminUsers,columns:e.columns,"row-key":"name",pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"body-cell-action",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-btn",{attrs:{dense:"",round:"",flat:"",color:"red",icon:"delete"},on:{click:function(a){return e.deleteAdminFunc(t)}}})],1)]}}])})],1)]],2)]),a("q-dialog",{model:{value:e.addUserDialog,callback:function(t){e.addUserDialog=t},expression:"addUserDialog"}},[a("q-card",{staticClass:"add-user-modal"},[a("q-card-section",{staticClass:"row items-center q-pb-none"},[a("div",{staticClass:"text-h6"},[e._v("Add User")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"close-btn",attrs:{icon:"close",flat:"",round:"",dense:""}})],1),a("q-card-section",[a("q-form",{on:{submit:e.addAdminUserFunc}},[a("div",{staticClass:"row q-col-gutter-md"},[a("div",{staticClass:"col-12"},[a("q-input",{attrs:{label:"First Name",name:"firstName",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.form.firstname,callback:function(t){e.$set(e.form,"firstname",t)},expression:"form.firstname"}})],1),a("div",{staticClass:"col-12"},[a("q-input",{attrs:{label:"Last Name",name:"lastName",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.form.lastname,callback:function(t){e.$set(e.form,"lastname",t)},expression:"form.lastname"}})],1),a("div",{staticClass:"col-12"},[a("q-select",{attrs:{name:"user",options:e.usersList,label:"User","option-value":function(e){return e.email},"option-label":function(e){return null===e.user?null:e.user},"map-options":"",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("div",{staticClass:"col-12"},[a("q-select",{attrs:{name:"role",options:e.adminRoles,label:"Role","option-value":function(e){return null===e?null:e.id},"option-label":function(e){return null===e?"Null value":e.name},"map-options":"",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.form.roles,callback:function(t){e.$set(e.form,"roles",t)},expression:"form.roles"}})],1),a("div",{staticClass:"col-12 text-right"},[a("q-btn",{staticClass:"add-button",attrs:{color:"primary",type:"submit",label:"Add",rounded:"",disabled:e.addUserRequestStatus,"no-caps":""}})],1)])])],1)],1)],1)],1)])},s=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("9523")),r=a.n(i),o=a("2f62"),l=a("2a19");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={data:function(){return{addUserDialog:!1,form:{firstname:"",lastname:"",email:"",roles:""},pagination:{rowsPerPage:10},columns:[{name:"firstname",required:!0,label:"Name",align:"center",field:function(e){return e.firstname},format:function(e,t){return"".concat(t.firstname+" "+t.lastname)}},{name:"email",align:"center",label:"Email",field:"email"},{name:"roles",align:"center",label:"Roles",field:"roles",format:function(e){return e[0].code}},{name:"isActive",align:"center",label:"Active User",field:"isActive",format:function(e){return"".concat(!0===e?"Active":"Not Active")}},{name:"action",align:"center",label:"Action",field:""}]}},computed:u(u({},Object(o["c"])("admin",["adminRoles","adminUsers","usersList","addUserRequestStatus"])),Object(o["c"])("userprofile",["isAuthenticated"])),methods:u(u(u({},Object(o["b"])("admin",["fetchAdminRoles","fetchAdminUsers","fetchUsersList","addAdminUser","deleteAdmin"])),Object(o["b"])("userprofile",["logout"])),{},{logOut:function(){this.logout()},returnValue:function(e){return e.userprofile.firstname},clearForm:function(){this.form={firstname:"",lastname:"",email:"",roles:""},this.addUserDialog=!1,l["a"].create({progress:!0,message:"User Added Successfully",type:"positive"})},addAdminUserFunc:function(){var e=u(u({},this.form),{},{email:this.form.email.email,roles:[this.form.roles.id]});this.addAdminUser({payload:e,callBack:this.clearForm})},deleteAdminFunc:function(e){this.deleteAdmin({ids:[e.row.id]})}}),mounted:function(){this.fetchAdminRoles(),this.fetchAdminUsers(),this.fetchUsersList(),this.isAuthenticated||this.$router.push("adminLogin")},created:function(){this.isAuthenticated||this.$router.push("adminLogin")}},m=d,f=(a("6158"),a("2877")),p=a("9989"),b=a("0016"),v=a("9c40"),g=a("eaac"),h=a("db86"),q=a("24e8"),A=a("f09f"),C=a("a370"),y=a("2c91"),O=a("0378"),U=a("27f9"),w=a("ddd8"),j=a("8572"),k=a("7f67"),F=a("eebe"),Q=a.n(F),P=Object(f["a"])(m,n,s,!1,null,null,null);t["default"]=P.exports;Q()(P,"components",{QPage:p["a"],QIcon:b["a"],QBtn:v["a"],QTable:g["a"],QTd:h["a"],QDialog:q["a"],QCard:A["a"],QCardSection:C["a"],QSpace:y["a"],QForm:O["a"],QInput:U["a"],QSelect:w["a"],QField:j["a"]}),Q()(P,"directives",{ClosePopup:k["a"]})},6158:function(e,t,a){"use strict";var n=a("e2c0"),s=a.n(n);s.a},e2c0:function(e,t,a){}}]);