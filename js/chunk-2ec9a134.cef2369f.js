(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ec9a134"],{"329a":function(e,o,t){"use strict";t.r(o);var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("h2",[e._v("Row Style")]),t("Explain"),t("RowStripe"),t("HoverHighlight"),t("ClickHighlight"),t("API",{attrs:{title:"API",anchor:"API",desc:"rowStyleOption 行样式配置"}})],1)},a=[],r=function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、Set the style of the row through the property "),t("code",[e._v("rowStyleOption")]),t("br"),e._v(" 2、Enable the row stripes effect through the attribute "),t("code",[e._v("stripe=true")]),t("br"),e._v(" 3、Enable the row hover highlight effect through the attribute "),t("code",[e._v("hoverHighlight=true")]),e._v(". Default on"),t("br"),e._v(" 4、Enable the row click highlight effect through the attribute "),t("code",[e._v("clickHighlight=true")]),e._v(". Default on")])])])}],l=t("2877"),c={},i=Object(l["a"])(c,r,d,!1,null,null,null),s=i.exports,u=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Row Stripe",fileName:"row-stripe.md"}}),t("demo-block",[t("div",[t("p",[e._v("Enable the row stripe with attribute "),t("code",[e._v("stripe")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table :row-style-option="rowStyleOption" :columns="columns" :table-data="tableData" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        rowStyleOption: {\n          stripe: true,\n        },\n        columns: [\n          {\n            field: "",\n            key: "a",\n            title: "",\n            width: 50,\n            align: "center",\n            renderBodyCell: ({ row, column, rowIndex }, h) => {\n              return ++rowIndex;\n            },\n          },\n          { field: "name", key: "b", title: "Name", width: 200, align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [\n          {\n            rowKey: 1001,\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            rowKey: 1002,\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            rowKey: 1003,\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            rowKey: 1004,\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            rowKey: 1005,\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},p=[];function m(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?m(Object(t),!0).forEach((function(o){y(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function y(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var h={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[[t("div",[t("ve-table",{attrs:{"row-style-option":e.rowStyleOption,columns:e.columns,"table-data":e.tableData}})],1)]],2)},o=[],t={data:function(){return{rowStyleOption:{stripe:!0},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,o){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return f({render:e,staticRenderFns:o},t)}()}},b=h,w=Object(l["a"])(b,u,p,!1,null,null,null),g=w.exports,v=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Row Hover Highlight",fileName:"hover-highlight.md"}}),t("demo-block",[t("div",[t("p",[e._v("The default row hover highlight is on")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table :row-style-option="rowStyleOption" :columns="columns" :table-data="tableData" />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        rowStyleOption: {\n          hoverHighlight: true,\n        },\n        columns: [\n          {\n            field: "",\n            key: "a",\n            title: "",\n            width: 50,\n            align: "center",\n            renderBodyCell: ({ row, column, rowIndex }, h) => {\n              return ++rowIndex;\n            },\n          },\n          { field: "name", key: "b", title: "Name", width: 200, align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [\n          {\n            rowKey: 1001,\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            rowKey: 1002,\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            rowKey: 1003,\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            rowKey: 1004,\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            rowKey: 1005,\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},x=[];function C(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?C(Object(t),!0).forEach((function(o){S(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function S(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[[t("div",[t("ve-table",{attrs:{"row-style-option":e.rowStyleOption,columns:e.columns,"table-data":e.tableData}})],1)]],2)},o=[],t={data:function(){return{rowStyleOption:{hoverHighlight:!0},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,o){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return O({render:e,staticRenderFns:o},t)}()}},R=k,V=Object(l["a"])(R,v,x,!1,null,null,null),I=V.exports,j=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Row Click highlight",fileName:"click-highlight.md"}}),t("demo-block",[t("div",[t("p",[e._v("By default, line click highlight is on, Must set "),t("code",[e._v("row-key-field-name")])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div>\n    <ve-table\n      :row-style-option="rowStyleOption"\n      :columns="columns"\n      :table-data="tableData"\n      row-key-field-name="rowKey"\n    />\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        rowStyleOption: {\n          clickHighlight: true,\n        },\n        columns: [\n          {\n            field: "",\n            key: "a",\n            title: "",\n            width: 50,\n            align: "center",\n            renderBodyCell: ({ row, column, rowIndex }, h) => {\n              return ++rowIndex;\n            },\n          },\n          { field: "name", key: "b", title: "Name", width: 200, align: "left" },\n          { field: "hobby", key: "c", title: "Hobby", width: 300, align: "left" },\n          { field: "address", key: "d", title: "Address", width: "", align: "left" },\n        ],\n        tableData: [\n          {\n            rowKey: 1001,\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Shanghai",\n          },\n          {\n            rowKey: 1002,\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding",\n            address: "No.1 Century Avenue, Beijing",\n          },\n          {\n            rowKey: 1003,\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n          },\n          {\n            rowKey: 1004,\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n          },\n          {\n            rowKey: 1005,\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},K=[];function A(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?A(Object(t),!0).forEach((function(o){E(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function E(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var P={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[[t("div",[t("ve-table",{attrs:{"row-style-option":e.rowStyleOption,columns:e.columns,"table-data":e.tableData,"row-key-field-name":"rowKey"}})],1)]],2)},o=[],t={data:function(){return{rowStyleOption:{clickHighlight:!0},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,o){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"b",title:"Name",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:300,align:"left"},{field:"address",key:"d",title:"Address",width:"",align:"left"}],tableData:[{rowKey:1001,name:"John",date:"1900-05-20",hobby:"coding",address:"No.1 Century Avenue, Shanghai"},{rowKey:1002,name:"Dickerson",date:"1910-06-20",hobby:"coding",address:"No.1 Century Avenue, Beijing"},{rowKey:1003,name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{rowKey:1004,name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{rowKey:1005,name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return N({render:e,staticRenderFns:o},t)}()}},B=P,D=Object(l["a"])(B,j,K,!1,null,null,null),F=D.exports,_=t("acf0"),H={name:"basic-main",components:{Explain:s,RowStripe:g,HoverHighlight:I,ClickHighlight:F,API:_["a"]}},T=H,J=Object(l["a"])(T,n,a,!1,null,null,null);o["default"]=J.exports},"3ef3":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"api-tpl"},[t("anchor",{attrs:{"is-edit":!1,label:e.getAnchor}}),t("div",{staticClass:"api-tpl-desc"},[e._v(e._s(e.desc))]),t("ve-table",{staticClass:"tpl-table",attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!1,"row-key-field-name":"rowKey","expand-option":e.expandOption,"cell-selection-option":e.cellSelectionOption}})],1)},a=[],r={name:"api-tpl",props:{desc:{type:String,required:!0},anchor:{type:String,default:null},tableData:{type:Array,required:!0},columns:{type:Array,required:!0},expandOption:{type:Object,default:function(){return null}}},data:function(){return{cellSelectionOption:{enable:!1}}},computed:{getAnchor:function(){return this.anchor?this.anchor:this.desc}}},d=r,l=(t("6d41"),t("2877")),c=Object(l["a"])(d,n,a,!1,null,null,null);o["a"]=c.exports},"6d41":function(e,o,t){"use strict";t("74d6")},"74d6":function(e,o,t){},"7eb4":function(e,o,t){"use strict";t.d(o,"a",(function(){return a}));var n=[{key:"a",field:"param",title:"Parameters",width:"10%",align:"left",type:"expand",renderBodyCell:function(e,o){var t=e.row;e.column,e.rowIndex;return o("span",{domProps:{innerHTML:t.param}})}},{key:"b",field:"desc",title:"Description",width:"60%",align:"left",renderBodyCell:function(e,o){var t=e.row;e.column,e.rowIndex;return o("span",{domProps:{innerHTML:t.desc}})}},{key:"c",field:"type",title:"Type",width:"10%",align:"left",renderBodyCell:function(e,o){var t=e.row;e.column,e.rowIndex;return o("span",{domProps:{innerHTML:t.type}})}},{key:"d",field:"optionalVal",title:"Optional",width:"10%",align:"left",renderBodyCell:function(e,o){var t=e.row;e.column,e.rowIndex;return o("span",{domProps:{innerHTML:t.optionalVal}})}},{key:"e",field:"default",title:"Default",width:"10%",align:"left",renderBodyCell:function(e,o){var t=e.row;e.column,e.rowIndex;return o("span",{domProps:{innerHTML:t.default}})}}],a={table:{data:[{param:"tableData",desc:"table data",type:"<code>Array</code>",optionalVal:"-",default:"-"},{param:"footerData",desc:"Table footer summary data，The data structure is consistent with <code>tableData</code>",type:"<code>Array</code>",optionalVal:"-",default:"-"},{param:"columns",desc:"Column configuration. See the following table columns configuration for specific items",type:"<code>Array</code>",optionalVal:"-",default:"-"},{param:"fixedHeader",desc:"Is the header fixed,Enabled by default.It needs to be used in combination with `maxHeight`",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"fixedFooter",desc:"Is the fotter fixed,Enabled by default.It needs to be used in combination with `maxHeight`",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"scrollWidth",desc:"The width of the table's scroll area (the width of the start scroll bar).<code>Number</code>Specify pixels;<code>String</code>Specified percentage",type:"<code>Number</code>、<code>String</code>",optionalVal:"-",default:"-"},{param:"maxHeight",desc:"The maximum height of the table.<code>Number</code>Specify pixels;<code>String</code>Specified percentage.",type:"<code>Number</code>、<code>String</code>",optionalVal:"-",default:"-"},{param:"rowKeyFieldName",desc:"Specifies the field name of the row key.Used for row expand、row radio、row checkbox、row highlight、virtual scrolling",type:"<code>String</code>",optionalVal:"-",default:"-"},{param:"borderAround",desc:"Show table outer border",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"borderX",desc:"Show column horizontal border",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"borderY",desc:"Show column vertical border",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"cellSpanOption",desc:"Cell merge configuration,Refer to cellSpanOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"cellStyleOption",desc:"cell style configuration,Refer to cellStyleOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"rowStyleOption",desc:"For row style configuration,Refer to rowStyleOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"expandOption",desc:"row expand configuration,Refer to expandOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"checkboxOption",desc:"Row multiple selection configuration,Refer to checkboxOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"radioOption",desc:"Row radio configuration,Refer to radioOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"virtualScrollOption",desc:"Virtual scroll configuration, it is recommended to display more than 1000 rows at a time.Refer to virtualScrollOption configuration for details",type:"<code>Boolean</code>",optionalVal:"-",default:"-"},{param:"sortOption",desc:"Sort configuration,Refer to sortOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"cellSelectionOption",desc:"Cell selection configuration,Refer to cellSelectionOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"},{param:"eventCustomOption",desc:"Custom event configuration,Refer to eventCustomOption configuration for details",type:"<code>Object</code>",optionalVal:"-",default:"-"}],columns:n},columns:{data:[{param:"field",desc:"The field of the column",type:"<code>String</code>",optionalVal:"-",default:"-",rowKey:0},{param:"key",desc:"Unique key value for each column",type:"<code>String</code>",optionalVal:"-",default:"-",rowKey:5},{param:"type",desc:'Column type. "expand"：row expand；"checkbox"：row checkbox；"radio"：row radio',type:"<code>String</code>",optionalVal:'"expand"、"checkbox"、"radio"',default:"-",rowKey:15},{param:"title",desc:"Column header text",type:"<code>String</code>",optionalVal:"-",default:"-",rowKey:20},{param:"width",desc:"<code>Number</code>width pixel value；<code>String</code>width percentage(<a href='#/en/doc/table/column-width?anchor=chang-wen-ben-po-pi-bu-ju'>width not working?</a>)",type:"<code>String</code>、<code>Number</code>",optionalVal:"-",default:"-",rowKey:25},{param:"align",desc:"Cell alignment",type:"<code>String</code>",optionalVal:'"left"、"center"、"right"',default:'"center"',rowKey:30},{param:"sortBy",desc:'Sort rules.<br>1、<code>sortBy=""</code>：Sorting allowed without collation；<br>2、<code>sortBy="asc"</code>：Default current column ascending；<br>3、<code>sortBy="desc"</code>：Default current column descending；',type:"<code>String</code>",optionalVal:'""、"desc"、"asc"',default:'""',rowKey:31},{param:"renderBodyCell",desc:'1、Custom cell rendering function in the table body. jsx ,Writing is close to template syntax<br>\n                2、Parameter information.<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index、<code>h</code>：createElement<br>3、For more JSX knowledge, please refer to<a href="https://vuejs.org/v2/guide/render-function.html#JSX"> Vue.js Official doc</a>',type:"<code>Function({row,column,rowIndex},h):VNode</code>",optionalVal:"-",default:"-",rowKey:35},{param:"renderHeaderCell",desc:"1、Header custom cell rendering function.The usage is the same as<code>renderBodyCell</code>。<br>\n                2、Parameter information.<code>column</code>:Current column configuration、<code>h</code>：createElement",type:"<code>Function({ column },h):VNode</code>",optionalVal:"-",default:"-",rowKey:40},{param:"renderFooterCell",desc:"1、footer custom cell rendering function.<br>\n                2、Parameter information.<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index、<code>h</code>：createElement<br>",type:"<code>Function({row,column,rowIndex},h):VNode</code>",optionalVal:"-",default:"-",rowKey:45},{param:"<span class='expand'>ellipsis</span>",desc:"Cell ellipsis configuration",type:"<code>Object</code>",optionalVal:"-",default:"-",rowKey:49},{param:"<span class='expand'>filter</span>",desc:"Filter configuration.",type:"<code>Object</code>",optionalVal:"-",default:"-",rowKey:50},{param:"<span class='expand'>filterCustom</span>",desc:"Filter custom configuration.",type:"<code>Object</code>",optionalVal:"-",default:"-",rowKey:55}],columns:n,filterProps:{data:[{param:"filterList",desc:'\t1、filter conditions<br>\n                    2、It contains three attributes: label、 value and selected. like:<code>[{ value: 0, label: "1900-05-20", selected: false }]</code>',type:"<code>Array</code>",optionalVal:"-",default:"-"},{param:"isMultiple",desc:"Enable multiple selection of filter items",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"filterConfirm",desc:"1、Filter confirm function。<br>2、Receive 1 parameter，<code>filterList</code>：filter conditions",type:"<code>Function({filterList})</code>",optionalVal:"-",default:"-"},{param:"filterReset",desc:"1、Filter reset function<br>2、Receive 1 parameter，<code>filterList</code>：filter conditions",type:"<code>Function({filterList})</code>",optionalVal:"-",default:"-"},{param:"filterIcon",desc:"1、filter custom icon rendering function.<br>2、parameter information。h：createElement",type:"<code>Function(h):VNode</code>",optionalVal:"-",default:"-"},{param:"maxHeight",desc:"1、The maximum height of the filter box. Height without operation button",type:"<code>Number</code>",optionalVal:"-",default:"1000"}],columns:n},filterCustomProps:{data:[{param:"render",desc:"1、Render function<br>\n                    2、Parameters received by render functions,showFn:show filter box function、closeFn:close filter box function、<code>h</code>：createElement",type:"<code>Function({showFn,closeFn},h):VNode</code>",optionalVal:"-",default:"-"},{param:"filterIcon",desc:"1、filter custom icon rendering function.<br>2、parameter information.h：createElement",type:"<code>Function(h):VNode</code>",optionalVal:"-",default:"-"}],columns:n},ellipsisProps:{data:[{param:"lineClamp",desc:"How many lines start to omit",type:"<code>Number</code>",optionalVal:"-",default:"1"},{param:"showTitle",desc:"Is the mouse hovering to display the title",type:"<code>Boolean</code>",optionalVal:"-",default:"true"}],columns:n}},expandOption:{data:[{param:"expandable",desc:"\t1、Whether the row rendering function is allowed to expand. Returns a Boolean value<br>\n                2、Receive 3 parameter,<code>row</code>:Current row data、<code>column</code>:Column configuration、<code>rowIndex</code>:rowIndex",type:"<code>Function({row,column,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"render",desc:"1、Render functions<br>\n                2、The parameters received by the render function. row:Current row data、column:Column configuration、rowIndex:rowIndex、<code>h</code>：createElement",type:"<code>Function({row,column,rowIndex},h):VNode</code>",optionalVal:"-",default:"-"},{param:"defaultExpandAllRows",desc:"is expand all row",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"defaultExpandedRowKeys",desc:"The default expanded row key. When parameter<code>defaultExpandAllRows</code> and parameter <code>defaultExpandedRowKeys</code> exist at the same time,priority of use<code>defaultExpandAllRows</code>",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"expandedRowKeys",desc:"Controllable attributes of expand row, After setting the property, <code>defaultExpandAllRows</code> and <code>defaultExpandedRowKeys</code> will be invalid.refer to examples for details",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"beforeExpandRowChange",desc:"1、Expand functions before switching,If false is returned, execution is interrupted.<br>\n                2、Receive 3 parameter,<code>beforeExpandedRowKeys</code>:All expanded keys before the change,<code>row</code>:The current row data,<code>rowIndex</code>row index",type:"<code>Function({beforeExpandedRowKeys,row,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"afterExpandRowChange",desc:"1、Expand the function after switching.<br>\n                2、Receive 3 parameter,<code>afterExpandedRowKeys</code>:All expanded keys after change,<code>row</code>:Current row data,<code>rowIndex</code>row index",type:"<code>Function({afterExpandedRowKeys,row,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"trigger",desc:"Expand the row event trigger type.\n                <code>icon</code>：expand by click the icon;<code>cell</code>：expand by click cell;<code>row</code>:expand by click row",type:"<code>String</code>",optionalVal:'"icon"、"cell"、"row"',default:'"icon"'}],columns:n},checkboxOption:{data:[{param:"defaultSelectedAllRows",desc:"Is selected all by default",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"defaultSelectedRowKeys",desc:"Default selected row keys",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"disableSelectedRowKeys",desc:"Disable selected row keys",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"selectedRowKeys",desc:"The controllable properties. After setting the property,  <code>defaultSelectedAllRows</code> and <code>defaultSelectedRowKeys</code> will be invalid. Refer to example",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"selectedRowChange",desc:"Change event for the selected row. Receive 3 parameter,row:Current row data,<code>isSelected</code>Whether the current row is selected,<code>selectedRowKeys</code>All selected rowkey information",type:"<code>Function({row, isSelected, selectedRowKeys})</code>",optionalVal:"-",default:"-"},{param:"selectedAllChange",desc:"Select all change events. The event receives 2 parameters,<code>isSelected</code> Select all or not.<code>selectedRowKeys</code>All selected rowkey information",type:"<code>Function({isSelected, selectedRowKeys})</code>",optionalVal:"-",default:"-"},{param:"hideSelectAll",desc:"Is hide select all button",type:"<code>Boolean</code>",optionalVal:"-",default:"false"}],columns:n},radioOption:{data:[{param:"defaultSelectedRowKey",desc:"Default selected row key",type:"<code>String</code>、<code>Number</code>",optionalVal:"-",default:"-"},{param:"disableSelectedRowKeys",desc:"Disable selected row keys",type:"<code>String[]</code>、<code>Number[]</code>",optionalVal:"-",default:"-"},{param:"selectedRowKey",desc:"The controllable properties of the selected row, After setting the property, <code>defaultSelectedRowKey</code> will be invalid. Refer to example",type:"<code>String</code>、<code>Number</code>",optionalVal:"-",default:"-"},{param:"selectedRowChange",desc:"Change event for the selected row. Method receives 1 parameter, row:Current row data",type:"<code>Function({row})</code>",optionalVal:"-",default:"-"}],columns:n},virtualScrollOption:{data:[{param:"enable",desc:"Enable virtual scrolling",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"minRowHeight",desc:"The min row height (PX). The smaller the value is, the more row is displayed in the table visualization range. It can be set according to the actual minimum height",type:"<code>Number</code>",optionalVal:"-",default:"42"},{param:"scrolling",desc:"Scrolling callback events.",type:"Function({startRowIndex,visibleStartIndex,visibleEndIndex,visibleAboveCount,visibleBelowCount})",optionalVal:"-",default:"-"}],columns:n},sortOption:{data:[{param:"multipleSort",desc:"Enable multi field sorting",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"sortAlways",desc:"Whether to turn on sorting is only switched between ascending and descending",type:"<code>Boolean</code>",optionalVal:"-",default:"false"},{param:"sortChange",desc:"Sort change events. Event receives 1 Parameter object:Sort rules for columns",type:"<code>Function({row})</code>",optionalVal:"-",default:"-"}],columns:n},cellSpanOption:{data:[{param:"bodyCellSpan",desc:"1、Body cell merge function<br>2、Parameter information. <code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index",type:"<code>Function({row,column,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"footerCellSpan",desc:"1、footer ell merge function<br>2、Parameter information. <code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index",type:"<code>Function({row,column,rowIndex})</code>",optionalVal:"-",default:"-"}],columns:n},eventCustomOption:{data:[{param:"bodyRowEvents",desc:"1、body row custom events,Returns the event that needs to be customized.<br>2、Receive 2 parameters.<code>row</code>Current row data、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave",type:"<code>Function({row,rowIndx})</code>",optionalVal:"-",default:"-"},{param:"bodyCellEvents",desc:"1、body column custom events,Returns the event that needs to be customized.<br>2、Receive 3 parameters.<code>row</code>Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave",type:"<code>Function({row,column,rowIndx})</code>",optionalVal:"-",default:"-"},{param:"headerRowEvents",desc:"1、header row custom events,Returns the event that needs to be customized.<br>2、Receive 1 parameters.<code>rowIndex</code>：header row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave<br>",type:"<code>Function({rowIndex})</code>",optionalVal:"-",default:"-"},{param:"headerCellEvents",desc:"1、header column custom events,Returns the event that needs to be customized.<br>2、Receive 2 parameters.<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave",type:"<code>Function({column,rowIndx})</code>",optionalVal:"-",default:"-"},{param:"footerRowEvents",desc:"1、footer row custom events, Returns the event that needs to be customized.<br>2、Receive 2 parameters.<code>row</code>Current row data、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave",type:"<code>Function({row,rowIndx})</code>",optionalVal:"-",default:"-"},{param:"footerCellEvents",desc:"1、footer column custom events, Returns the event that needs to be customized.<br>2、Receive 3 parameters.<code>row</code>Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index<br>3、Support for custom events: click、dblclick、contextmenu、mouseenter、mouseleave",type:"<code>Function({row,column,rowIndx})</code>",optionalVal:"-",default:"-"}],columns:n},cellStyleOption:{data:[{param:"bodyCellClass",desc:"1、Table body cell style<br>\n                2、Received 3 parameters,<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index",type:"<code>Function({row,column,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"headerCellClass",desc:"1、Header cell style<br>\n                2、Received 2 parameters,<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index",type:"<code>Function({column,rowIndex})</code>",optionalVal:"-",default:"-"},{param:"footerCellClass",desc:"1、Footer cell style<br>\n                2、Received 3 parameters,<code>row</code>:Current row data、<code>column</code>:Current column configuration、<code>rowIndex</code>:Row index",type:"<code>Function({row,column,rowIndex})</code>",optionalVal:"-",default:"-"}],columns:n},rowStyleOption:{data:[{param:"hoverHighlight",desc:"row hover background highlight",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"clickHighlight",desc:"row click background highlight",type:"<code>Boolean</code>",optionalVal:"-",default:"true"},{param:"stripe",desc:"row stripe",type:"<code>Boolean</code>",optionalVal:"-",default:"false"}],columns:n},cellSelectionOption:{data:[{param:"enable",desc:"enable cell selection",type:"<code>Boolean</code>",optionalVal:"-",default:"true"}],columns:n}}},acf0:function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.rowStyleOption.data,columns:e.db.rowStyleOption.columns}})],1)},a=[],r=t("3ef3"),d=t("7eb4"),l={components:{tpl:r["a"]},props:{anchor:{type:String,default:"Row style configuration"},desc:{type:String,default:"rowStyleOption"}},data:function(){return{db:d["a"]}}},c=l,i=t("2877"),s=Object(i["a"])(c,n,a,!1,null,null,null);o["a"]=s.exports}}]);
//# sourceMappingURL=chunk-2ec9a134.cef2369f.js.map