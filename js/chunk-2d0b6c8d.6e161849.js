(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6c8d"],{"1f46":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("单元格选择")]),t("Explain"),t("Base")],1)},r=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、单元格选中，可以方便高亮当前单元格。通过属性 "),t("code",[e._v("cellSelectionOption")]),e._v("即可实现"),t("br"),e._v(" 2、默认可以配合键盘 上、下、左、右 按键使用"),t("br"),e._v(" 3、需要指定 "),t("code",[e._v("rowKeyFieldName")]),e._v(" 属性")])])])}],l=t("2877"),d={},c=Object(l["a"])(d,o,i,!1,null,null,null),s=c.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"基础用法",fileName:"base.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <ve-table\n    :max-height="200"\n    :columns="columns"\n    :table-data="tableData"\n    :cell-selection-option="cellSelectionOption"\n    rowKeyFieldName="rowKey"\n    :border-y="true"\n  />\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        cellSelectionOption: {\n          // default true\n          enable: true,\n        },\n        columns: [\n          { field: "name", key: "a", title: "Name", align: "left", width: "20%" },\n          { field: "date", key: "b", title: "Date", align: "left", width: "20%" },\n          { field: "hobby", key: "c", title: "Hobby", align: "center", width: "30%" },\n          { field: "address", key: "d", title: "Address", width: "30%" },\n        ],\n        tableData: [\n          {\n            name: "John",\n            date: "1900-05-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shanghai",\n            rowKey: "1",\n          },\n          {\n            name: "Dickerson",\n            date: "1910-06-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Beijing",\n            rowKey: "2",\n          },\n          {\n            name: "Larsen",\n            date: "2000-07-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Chongqing",\n            rowKey: "3",\n          },\n          {\n            name: "Geneva",\n            date: "2010-08-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Xiamen",\n            rowKey: "4",\n          },\n          {\n            name: "Jami",\n            date: "2020-09-20",\n            hobby: "coding and coding repeat",\n            address: "No.1 Century Avenue, Shenzhen",\n            rowKey: "5",\n          },\n        ],\n      };\n    },\n  };\n<\/script>\n')])])])],2)],1)},b=[];function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{"max-height":200,columns:e.columns,"table-data":e.tableData,"cell-selection-option":e.cellSelectionOption,rowKeyFieldName:"rowKey","border-y":!0}})]],2)},n=[],t={data:function(){return{cellSelectionOption:{enable:!0},columns:[{field:"name",key:"a",title:"Name",align:"left",width:"20%"},{field:"date",key:"b",title:"Date",align:"left",width:"20%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",width:"30%"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:"1"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:"2"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:"3"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:"4"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:"5"}]}}};return m({render:e,staticRenderFns:n},t)}()}},g=h,f=Object(l["a"])(g,u,b,!1,null,null,null),v=f.exports,w={name:"cell-selection",components:{Explain:s,Base:v}},O=w,_=Object(l["a"])(O,a,r,!1,null,null,null);n["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0b6c8d.6e161849.js.map