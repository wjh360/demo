(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47c85038"],{1:function(e,t){},2:function(e,t){},3:function(e,t){},"333d":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.total>0?r("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[r("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1):e._e()},n=[],o=(r("a9e3"),r("ac1f"),r("5319"),r("96cf"),r("1da1"));Math.easeInOutQuad=function(e,t,r,a){return e/=a/2,e<1?r/2*e*e+t:(e--,-r/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function u(e,t,r){var a=l(),n=e-a,o=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=o;var l=Math.easeInOutQuad(u,a,n,t);s(l),u<t?i(e):r&&"function"===typeof r&&r()};c()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},data:function(){return{layouts:""}},created:function(){this.currentPage=this.$route.query.current||this.page,this.handleCurrentChange(this.currentPage)},computed:{currentPage:{get:function(){return this.$route.query.current||this.page},set:function(e){var t=JSON.parse(JSON.stringify(this.$route.query));this.$emit("update:page",e),t.current!=e&&e!=this.page&&(t.current=e,this.$router.replace({path:this.$route.path,query:t}))}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{delete:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=Math.ceil((t.total-e)/t.pageSize),t.currentPage>a&&(t.currentPage=a),t.handleCurrentChange(t.currentPage);case 3:case"end":return r.stop()}}),r)})))()},update:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:log(e),a=Math.ceil((e||1)/t.pageSize),t.currentPage>a&&(t.currentPage=a),t.handleCurrentChange(t.currentPage);case 4:case"end":return r.stop()}}),r)})))()},handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&u(0,800)},handleCurrentChange:function(e){log(7410,e),this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&u(0,800)}}},d=c,f=(r("a8e8"),r("2877")),p=Object(f["a"])(d,a,n,!1,null,"68eacec9",null);t["a"]=p.exports},5074:function(e,t,r){},"607a":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:16}},[r("el-card",{staticClass:"box-card",staticStyle:{"margin-bottom":"20px"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("数据上传")])]),r("upload-excel-component",{attrs:{"on-success":e.handleSuccess,"before-upload":e.beforeUpload,"import-model":e.importModel}}),e.tableData.length?r("div",{staticClass:"upload-tips"},[r("p",[e._v(" "+e._s("成功读取"+e.tableData.length+"条数据，立即上传?")+" ")]),r("el-button",{attrs:{type:"success"},on:{click:e.uploadData}},[e._v("上传")])],1):e._e()],1)],1),r("el-col",{attrs:{span:8}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("价格折扣（%）")])]),r("div",[r("el-form",{ref:"form",attrs:{"label-width":"80px",model:e.profit}},[r("el-form-item",{attrs:{label:"折扣"}},[r("el-input-number",{attrs:{step:1,min:1,max:100,"step-strictly":""},model:{value:e.profit.price_discnt,callback:function(t){e.$set(e.profit,"price_discnt",t)},expression:"profit.price_discnt"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.updateProfit}},[e._v("修改")])],1)],1)],1)])],1)],1),r("el-card",[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-tabs",{attrs:{"tab-position":"top"},on:{"tab-click":e.tabList},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[e._l(e.brands,(function(e,t){return[r("el-tab-pane",{key:t,attrs:{label:e.brand_name,name:String(e.brand_id)}})]}))],2),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.list,border:"",stripe:"",fit:""}},[r("el-table-column",{attrs:{prop:"id",width:"100",align:"center",label:"ID"}}),r("el-table-column",{attrs:{prop:"brand_name",label:"品牌",align:"center",width:"120"}}),r("el-table-column",{attrs:{prop:"product_name",label:"型号",align:"center","min-width":"200"}}),r("el-table-column",{attrs:{prop:"sku",label:"存储容量",align:"center",width:"100"}}),r("el-table-column",{attrs:{label:"靚机",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.formatPrice(t.row.new_price))+" ")]}}])}),r("el-table-column",{attrs:{label:"小花",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.formatPrice(t.row.little_scratch))+" ")]}}])}),r("el-table-column",{attrs:{label:"大花",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.formatPrice(t.row.serious_scratch))+" ")]}}])}),r("el-table-column",{attrs:{label:"色差",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.formatPrice(t.row.color_diff))+" ")]}}])}),r("el-table-column",{attrs:{label:"外爆",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.formatPrice(t.row.out_break))+" ")]}}])}),r("el-table-column",{attrs:{label:"前后爆",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.formatPrice(t.row.all_break))+" ")]}}])}),r("el-table-column",{attrs:{label:"非原装屏",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.formatPrice(t.row.other_screen))+" ")]}}])}),r("el-table-column",{attrs:{label:"主板类",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.formatPrice(t.row.main_board))+" ")]}}])}),r("el-table-column",{attrs:{label:"不开机",align:"center",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.formatPrice(t.row.not_open))+" ")]}}])}),r("el-table-column",{attrs:{align:"center",label:"操作",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(r){return e.showDialog(t.row)}}},[e._v("修改")])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>20,expression:"total > 20"}],attrs:{total:e.total,layout:"total, prev, pager, next,jumper",page:e.listQuery.page},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},pagination:e.getList}})],1)],1)],1),r("el-dialog",{attrs:{title:"编辑价格",visible:e.dialogVisible,width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"review",attrs:{model:e.modifyInfo,"label-position":"left","label-width":"80px"}},[e._l(e.importModel,(function(t,a){return[r("el-form-item",{key:a,attrs:{label:t.label}},[r("el-input",{model:{value:e.rowInfo[""+t.value],callback:function(r){e.$set(e.rowInfo,""+t.value,r)},expression:"rowInfo[`${item.value}`]"}})],1)]}))],2),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"info"}},[e._v("取 消")]),r("el-button",{attrs:{type:"success"},on:{click:e.modifyPrice}},[e._v("确 定")])],1)],1)],1)},n=[],o=(r("4160"),r("b0c0"),r("b680"),r("159b"),r("96cf"),r("1da1")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{ref:"excel-upload-input",staticClass:"excel-upload-input",attrs:{type:"file",accept:".xlsx, .xls"},on:{change:e.handleClick}}),r("div",{staticClass:"drop",on:{drop:e.handleDrop,dragover:e.handleDragover,dragenter:e.handleDragover}},[r("p",[e._v("拖拽 excel 到这里")]),r("el-button",{staticStyle:{"margin-left":"16px"},attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:e.handleUpload}},[e._v(" 选择 ")])],1)])},s=[],l=(r("d3b7"),r("b85c")),u=r("1146"),c=r.n(u),d={props:{beforeUpload:Function,onSuccess:Function,importModel:Array},data:function(){return{loading:!1,excelData:{header:null,results:null}}},methods:{dateTransition:function(e,t){console.log("outdata",e),console.log("importModel",t);var r,a=[],n=Object(l["a"])(e);try{for(n.s();!(r=n.n()).done;){var o=r.value,i={};for(var s in o){var u,c=Object(l["a"])(t);try{for(c.s();!(u=c.n()).done;){var d=u.value;if(s===d.label){i[d.value]=o[s];break}}}catch(f){c.e(f)}finally{c.f()}}a.push(i)}}catch(f){n.e(f)}finally{n.f()}return a},generateData:function(e){var t=e.header,r=e.importList;console.log(r),this.excelData.header=t,this.excelData.results=r,this.onSuccess&&this.onSuccess(this.excelData)},handleDrop:function(e){if(e.stopPropagation(),e.preventDefault(),!this.loading){var t=e.dataTransfer.files;if(1===t.length){var r=t[0];if(!this.isExcel(r))return this.$message.error("Only supports upload .xlsx, .xls, .csv suffix files"),!1;this.upload(r),e.stopPropagation(),e.preventDefault()}else this.$message.error("Only support uploading one file!")}},handleDragover:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"},handleUpload:function(){this.$refs["excel-upload-input"].click()},handleClick:function(e){var t=e.target.files,r=t[0];r&&this.upload(r)},upload:function(e){if(this.$refs["excel-upload-input"].value=null,this.beforeUpload){var t=this.beforeUpload(e);t&&this.readerData(e)}else this.readerData(e)},readerData:function(e){var t=this;return this.loading=!0,new Promise((function(r,a){var n=new FileReader;n.onload=function(e){console.log(e);var a=e.target.result,n=c.a.read(a,{type:"array"}),o=n.SheetNames[0],i=n.Sheets[o],s=t.getHeaderRow(i),l=c.a.utils.sheet_to_json(i),u=t.dateTransition(l,t.importModel);t.generateData({header:s,importList:u}),t.loading=!1,r()},n.readAsArrayBuffer(e)}))},getHeaderRow:function(e){var t,r=[],a=c.a.utils.decode_range(e["!ref"]),n=a.s.r;for(t=a.s.c;t<=a.e.c;++t){var o=e[c.a.utils.encode_cell({c:t,r:n})],i="UNKNOWN "+t;o&&o.t&&(i=c.a.utils.format_cell(o)),r.push(i)}return r},isExcel:function(e){return/\.(xlsx|xls|csv)$/.test(e.name)}}},f=d,p=(r("a497"),r("2877")),m=Object(p["a"])(f,i,s,!1,null,"54f7ca79",null),h=m.exports,g=r("b775");function b(e){return Object(g["a"])({url:"/sjbz/hs/import",timeout:1e5,method:"POST",data:e})}var v=r("333d"),w=r("8593"),y={components:{UploadExcelComponent:h,Pagination:v["a"]},filters:{},data:function(){return{profit:{},listQuery:{brand_id:1,page:1},total:20,activeName:"",brands:null,listLoading:!0,list:null,tableData:[],tableHeader:[],dialogVisible:!1,rowInfo:{},modifyInfo:{},importModel:[{label:"机型ID",value:"product_id"},{label:"品牌",value:"brand_name"},{label:"机型",value:"product_name"},{label:"存储容量",value:"sku"},{label:"靓机",value:"new_price"},{label:"小花",value:"little_scratch"},{label:"大花",value:"serious_scratch"},{label:"色差",value:"color_diff"},{label:"外爆",value:"out_break"},{label:"前后爆",value:"all_break"},{label:"非原装屏",value:"other_screen"},{label:"主板类",value:"main_board"},{label:"不开机",value:"not_open"}]}},created:function(){this.fetchData()},methods:{formatPrice:function(e){return(e/100).toFixed(2)},showDialog:function(e){var t=this;this.dialogVisible=!0,e&&(this.rowInfo=Object.assign({},e),this.importModel.forEach((function(e,r){r>=4&&(t.rowInfo[e.value]=(t.rowInfo[e.value]/100).toFixed(2))})),console.log(e),console.log(this.rowInfo))},modifyPrice:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.importModel.forEach((function(t,r){r>=4&&(e.rowInfo[t.value]=100*e.rowInfo[t.value])})),t.next=3,Object(w["s"])(e.rowInfo);case 3:r=t.sent,a=r.ret_code,0===a&&(e.$message.success("修改成功！"),e.dialogVisible=!1,e.fetchData());case 6:case"end":return t.stop()}}),t)})))()},loadProfit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["k"])();case 2:r=t.sent,a=r.data,e.profit=a[0];case 5:case"end":return t.stop()}}),t)})))()},updateProfit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["r"])(e.profit);case 2:r=t.sent,a=r.ret_code,0===a&&(e.$message.success("修改成功！"),e.loadProfit());case 5:case"end":return t.stop()}}),t)})))()},fetchData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["f"])();case 2:r=t.sent,a=r.data,a.length?(e.brands=a,e.listQuery.brand_id=a[0].brand_id,e.activeName=String(a[0].brand_id),console.log(e.listQuery.brand_id),e.getList()):e.listLoading=!1,e.loadProfit();case 6:case"end":return t.stop()}}),t)})))()},tabList:function(e){this.listQuery.brand_id=e.name,this.listQuery.page=1,this.getList()},getList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(w["i"])(e.listQuery);case 3:r=t.sent,r.data.length&&(e.total=r.data[0].total),e.listLoading=!1,e.list=r.data;case 7:case"end":return t.stop()}}),t)})))()},beforeUpload:function(e){var t=e.size/1024/1024<5;return!!t||(this.$message({message:"Please do not upload files larger than 5m in size.",type:"warning"}),!1)},handleSuccess:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=e.results,n=e.header,console.log(a,n),t.tableData=a,t.tableHeader=n;case 4:case"end":return r.stop()}}),r)})))()},uploadData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:b(e.tableData).then((function(t){t.data?(e.$message({message:"有"+t.data.length+"数据异常",type:"warning"}),e.tableData=[],e.fetchData()):e.$message({message:t.message,type:"success"})}));case 1:case"end":return t.stop()}}),t)})))()}}},_=y,x=Object(p["a"])(_,a,n,!1,null,"5b37207c",null);t["default"]=x.exports},8593:function(e,t,r){"use strict";r.d(t,"g",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"f",(function(){return s})),r.d(t,"h",(function(){return l})),r.d(t,"i",(function(){return u})),r.d(t,"s",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"j",(function(){return p})),r.d(t,"k",(function(){return m})),r.d(t,"r",(function(){return h})),r.d(t,"a",(function(){return g})),r.d(t,"n",(function(){return b})),r.d(t,"p",(function(){return v})),r.d(t,"o",(function(){return w})),r.d(t,"m",(function(){return y})),r.d(t,"q",(function(){return _})),r.d(t,"l",(function(){return x}));var a=r("b775");function n(){return Object(a["a"])({url:"/sjbz/sysconfig/insc/all",method:"GET"})}function o(e){return Object(a["a"])({url:"/sjbz/sysconfig/insc/save",method:"PUT",data:e})}function i(){return Object(a["a"])({url:"/sjbz/mobile/brands",method:"GET"})}function s(){return Object(a["a"])({url:"/sjbz/hs/allbrands",method:"GET"})}function l(e){return Object(a["a"])({url:"/sjbz/mobile/productsByBrand",params:e,method:"GET"})}function u(e){return Object(a["a"])({url:"/sjbz/hs/productsByBrandId",params:e,method:"GET"})}function c(e){return Object(a["a"])({url:"/sjbz/hs/updateprice",method:"POST",data:e})}function d(e){return Object(a["a"])({url:"/sjbz/sysconfig/bzp/save",method:"PUT",data:e})}function f(e){return Object(a["a"])({url:"/sjbz/sysconfig/bzp/delete",method:"DELETE",params:{id:e}})}function p(e){return Object(a["a"])({url:"/sjbz/sysconfig/bzp/findBySource",method:"GET",params:e})}function m(){return Object(a["a"])({url:"/sjbz/hs/getHsPriceDiscnt",method:"GET"})}function h(e){return Object(a["a"])({url:"/sjbz/hs/updateHsPriceDiscnt",method:"POST",data:e})}function g(e){return Object(a["a"])({url:"/ucs/express/cancelOrder",method:"POST",data:e})}function b(e){return Object(a["a"])({url:"/excel/bhcx/listBxByPage",method:"GET",params:e})}function v(e){return Object(a["a"])({url:"/excel/bhcx/postChengBao",method:"POST",data:e})}function w(e){return Object(a["a"])({url:"/excel/excel/publicImportData",method:"POST",data:e,headers:{"Content-Type":"multipart/form-data;charset=utf-8"}})}function y(e){return Object(a["a"])({url:"/excel/excel/listBhTbByPage",method:"GET",params:e})}function _(e){return Object(a["a"])({url:"/excel/bhcx/postChengBaoByBatchNo",method:"POST",params:e})}function x(e){return Object(a["a"])({url:"/excel/excel/listBatchNo",method:"GET",params:e})}},a497:function(e,t,r){"use strict";r("5074")},a8e8:function(e,t,r){"use strict";r("e9f4")},b775:function(e,t,r){"use strict";r("caad"),r("d3b7"),r("2532");var a=r("bc3a"),n=r.n(a),o=r("5c96"),i=r("4360"),s=r("4328"),l=r.n(s),u=r("e350"),c=n.a.create({baseURL:"https://bj.xiaoyihuanbao.com",timeout:6e5});function d(e,t){Object(o["Message"])({message:e,type:t,duration:5e3})}c.interceptors.request.use((function(e){var t=window.localStorage.getItem("user_id"),r=window.localStorage.getItem("token");r&&(e.headers["token"]=r,e.headers["userId"]=t,e.headers["user_id"]=t,e.headers["companyId"]=i["a"].getters.companyId);var a=Object(u["a"])(e);return"GET"!==e.method&&e.data&&(e.data.postId=a,e.data.userId=e.data.userId||t,e.data=l.a.stringify(e.data)),e}),(function(e){return console.error("Request error:",e),Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 200!==e.status||0!==t.ret_code?(d(t.error_msg||t.message||"Error","error"),Promise.reject(new Error(t.message||"Error"))):t}),(function(e){if(console.error("Response error:",e),"ECONNABORTED"===e.code&&e.message.includes("timeout")){var t=e.config;return t.__retryCount>=t.retry?Promise.reject(e):(t.__retryCount=(t.__retryCount||0)+1,new Promise((function(e){return setTimeout(e,t.retryDelay||1)})).then((function(){return c(t)})))}if(e.response)switch(e.response.status){case 401:o["MessageBox"].confirm("您的登录状态异常，您可以留在此页面，也可以重新登录！","状态异常",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){i["a"].dispatch("user/resetToken").then((function(){location.reload()}))}));break}return d(e.response?e.response.data.message:e.message,"error"),{}})),t["a"]=c},e9f4:function(e,t,r){}}]);