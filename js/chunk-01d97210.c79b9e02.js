(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01d97210"],{"0686":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Footer Column Span",fileName:"cell-span.md"}}),t("demo-block",[t("div",[t("p",[e._v("Set the "),t("code",[e._v("date")]),e._v(" column and "),t("code",[e._v("hoby")]),e._v(" column in the first row of footer summary to merge. At the same time, you need to specify that the "),t("code",[e._v("hoby")]),e._v(" column in the second row will not be rendered")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        border-y\n        fixed-header\n        :max-height="300"\n        :columns="columns"\n        :table-data="tableData"\n        :footer-data="footerData"\n        rowKeyFieldName="rowkey"\n        :cell-span-option="cellSpanOption"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                cellSpanOption: {\n                    footerCellSpan: this.footerCellSpan,\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        width: 200,\n                        align: "center",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 200,\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address", width: "" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            // footer cell span\n            footerCellSpan({ row, column, rowIndex }) {\n                if (rowIndex === 0) {\n                    if (column.field === "date") {\n                        return {\n                            rowspan: 1,\n                            colspan: 2,\n                        };\n                    }\n                    // does not need to be rendered\n                    else if (column.field === "hobby") {\n                        return {\n                            rowspan: 0,\n                            colspan: 0,\n                        };\n                    }\n                }\n            },\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 15; i++) {\n                    data.push({\n                        rowkey: i,\n                        name: i,\n                        date: i,\n                        hobby: i,\n                        address: i,\n                    });\n                }\n                this.tableData = data;\n            },\n\n            initFooterData() {\n                this.footerData = [\n                    {\n                        rowkey: 0,\n                        name: "Average Values",\n                        date: 213,\n                        hobby: 355,\n                        address: 189,\n                    },\n                    {\n                        rowkey: 1,\n                        name: "Summary Values",\n                        date: 1780,\n                        hobby: 890,\n                        address: 2988,\n                    },\n                ];\n            },\n        },\n        created() {\n            this.initTableData();\n            this.initFooterData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},a=[];function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{"border-y":"","fixed-header":"","max-height":300,columns:e.columns,"table-data":e.tableData,"footer-data":e.footerData,rowKeyFieldName:"rowkey","cell-span-option":e.cellSpanOption}})]],2)},n=[],t={data:function(){return{cellSpanOption:{footerCellSpan:this.footerCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{footerCellSpan:function(e){e.row;var n=e.column,t=e.rowIndex;if(0===t){if("date"===n.field)return{rowspan:1,colspan:2};if("hobby"===n.field)return{rowspan:0,colspan:0}}},initTableData:function(){for(var e=[],n=0;n<15;n++)e.push({rowkey:n,name:n,date:n,hobby:n,address:n});this.tableData=e},initFooterData:function(){this.footerData=[{rowkey:0,name:"Average Values",date:213,hobby:355,address:189},{rowkey:1,name:"Summary Values",date:1780,hobby:890,address:2988}]}},created:function(){this.initTableData(),this.initFooterData()}};return d({render:e,staticRenderFns:n},t)}()}},c=l,s=t("2877"),u=Object(s["a"])(c,o,a,!1,null,null,null);n["a"]=u.exports},e2b2:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Cell Span")]),t("Explain"),t("BodyColspan"),t("BodyRowspan"),t("FooterCellSpan"),t("CustomContent")],1)},a=[],r=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、Set the span cells through the "),t("code",[e._v("cellSpanOption")]),e._v(" method"),t("br"),e._v(" 2、Set the body cell span through the "),t("code",[e._v("bodyCellSpan({row,column,rowIndx})")]),e._v(" method"),t("br"),e._v(" 3、Set the footer cell span through the "),t("code",[e._v("footerCellSpan({row,column,rowIndx})")]),e._v(" method"),t("br"),e._v(" 4、Property "),t("code",[e._v("colSpan")]),e._v(" specifies the number of columns to span"),t("br"),e._v(" 5、This function needs to specify columns that do not need to be rendered. Set the values of "),t("code",[e._v("colSpan")]),e._v(" and "),t("code",[e._v("rowspan")]),e._v(" to 0"),t("br"),e._v(" 6、By default, the span content is the content of the rendered cell.To customize the cell content, you can combine it with "),t("code",[e._v("renderBodyCell({row,column,rowIndex},h)")]),t("br")])])])}],i=t("2877"),l={},c=Object(i["a"])(l,r,d,!1,null,null,null),s=c.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Body Column Span",fileName:"body-colspan.md"}}),t("demo-block",[t("div",[t("p",[e._v("Set the "),t("code",[e._v("date")]),e._v(" and "),t("code",[e._v("hoby")]),e._v(" columns in the second row to merge.At the same time, you need to specify that the "),t("code",[e._v("hoby")]),e._v(" column in the second row will not be rendered")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n        :cell-span-option="cellSpanOption"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                cellSpanOption: {\n                    bodyCellSpan: this.bodyCellSpan,\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        width: 200,\n                        align: "center",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 200,\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address", width: "" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            // body cell span\n            bodyCellSpan({ row, column, rowIndex }) {\n                if (rowIndex === 1) {\n                    if (column.field === "date") {\n                        return {\n                            rowspan: 1,\n                            colspan: 2,\n                        };\n                    }\n                    // does not need to be rendered\n                    else if (column.field === "hobby") {\n                        return {\n                            rowspan: 0,\n                            colspan: 0,\n                        };\n                    }\n                }\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},b=[];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){h(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":e.cellSpanOption}})]],2)},n=[],t={data:function(){return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan:function(e){e.row;var n=e.column,t=e.rowIndex;if(1===t){if("date"===n.field)return{rowspan:1,colspan:2};if("hobby"===n.field)return{rowspan:0,colspan:0}}}}};return m({render:e,staticRenderFns:n},t)}()}},f=y,g=Object(i["a"])(f,u,b,!1,null,null,null),v=g.exports,w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Body Row Span",fileName:"body-rowspan.md"}}),t("demo-block",[t("div",[t("p",[e._v("Set the "),t("code",[e._v("name")]),e._v(" column and span the second and third rows. At the same time, you need to specify that the third row of the "),t("code",[e._v("name")]),e._v(" column does not render")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n        :cell-span-option="cellSpanOption"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                cellSpanOption: {\n                    bodyCellSpan: this.bodyCellSpan,\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        width: 200,\n                        align: "center",\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        width: 200,\n                        align: "left",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 200,\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address", width: "" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            // body cell span\n            bodyCellSpan({ row, column, rowIndex }) {\n                if (column.field === "name") {\n                    if (rowIndex === 1) {\n                        return {\n                            rowspan: 2,\n                            colspan: 1,\n                        };\n                    }\n                    // does not need to be rendered\n                    else if (rowIndex === 2) {\n                        return {\n                            rowspan: 0,\n                            colspan: 0,\n                        };\n                    }\n                }\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},C=[];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var j={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":e.cellSpanOption}})]],2)},n=[],t={data:function(){return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center"},{field:"date",key:"b",title:"Date",width:200,align:"left"},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan:function(e){e.row;var n=e.column,t=e.rowIndex;if("name"===n.field){if(1===t)return{rowspan:2,colspan:1};if(2===t)return{rowspan:0,colspan:0}}}}};return S({render:e,staticRenderFns:n},t)}()}},D=j,k=Object(i["a"])(D,w,C,!1,null,null,null),N=k.exports,A=t("0686"),x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Custom Span Content",fileName:"custom-content.md"}}),t("demo-block",[t("div",[t("p",[e._v("Combined with "),t("code",[e._v("renderBodyCell({row,column,rowIndex},h)")]),e._v(", you can customize the merged content")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n        :cell-span-option="cellSpanOption"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                cellSpanOption: {\n                    bodyCellSpan: this.bodyCellSpan,\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        width: 200,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            if (column.field === "name") {\n                                if (rowIndex === 1) {\n                                    return (\n                                        <span style="color:#1890ff;">\n                                            this is custom content\n                                        </span>\n                                    );\n                                }\n                            }\n\n                            return row[column.field];\n                        },\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        width: 200,\n                        align: "left",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            if (rowIndex === 1) {\n                                if (column.field === "date") {\n                                    return (\n                                        <span style="color:#1890ff;">\n                                            this is custom content\n                                        </span>\n                                    );\n                                }\n                            }\n\n                            return row[column.field];\n                        },\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        width: 200,\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address", width: "" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            // body cell span\n            bodyCellSpan({ row, column, rowIndex }) {\n                // colspan\n                if (rowIndex === 1) {\n                    if (column.field === "date") {\n                        return {\n                            rowspan: 1,\n                            colspan: 2,\n                        };\n                    }\n                    // does not need to be rendered\n                    else if (column.field === "hobby") {\n                        return {\n                            rowspan: 0,\n                            colspan: 0,\n                        };\n                    }\n                }\n\n                // rowspan\n                if (column.field === "name") {\n                    if (rowIndex === 1) {\n                        return {\n                            rowspan: 2,\n                            colspan: 1,\n                        };\n                    }\n                    // does not need to be rendered\n                    else if (rowIndex === 2) {\n                        return {\n                            rowspan: 0,\n                            colspan: 0,\n                        };\n                    }\n                }\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},P=[];function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){B(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function B(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var J={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"cell-span-option":e.cellSpanOption}})]],2)},n=[],t={data:function(){this.$createElement;return{cellSpanOption:{bodyCellSpan:this.bodyCellSpan},columns:[{field:"name",key:"a",title:"Name",width:200,align:"center",renderBodyCell:function(e,n){var t=e.row,o=e.column,a=e.rowIndex;return"name"===o.field&&1===a?n("span",{style:"color:#1890ff;"},["this is custom content"]):t[o.field]}},{field:"date",key:"b",title:"Date",width:200,align:"left",renderBodyCell:function(e,n){var t=e.row,o=e.column,a=e.rowIndex;return 1===a&&"date"===o.field?n("span",{style:"color:#1890ff;"},["this is custom content"]):t[o.field]}},{field:"hobby",key:"c",title:"Hobby",width:200,align:"right"},{field:"address",key:"d",title:"Address",width:""}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{bodyCellSpan:function(e){e.row;var n=e.column,t=e.rowIndex;if(1===t){if("date"===n.field)return{rowspan:1,colspan:2};if("hobby"===n.field)return{rowspan:0,colspan:0}}if("name"===n.field){if(1===t)return{rowspan:2,colspan:1};if(2===t)return{rowspan:0,colspan:0}}}}};return E({render:e,staticRenderFns:n},t)}()}},F=J,$=Object(i["a"])(F,x,P,!1,null,null,null),z=$.exports,q={name:"cell-span",components:{Explain:s,BodyColspan:v,BodyRowspan:N,FooterCellSpan:A["a"],CustomContent:z}},G=q,H=Object(i["a"])(G,o,a,!1,null,null,null);n["default"]=H.exports}}]);
//# sourceMappingURL=chunk-01d97210.c79b9e02.js.map