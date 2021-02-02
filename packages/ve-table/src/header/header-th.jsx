import HeaderCheckboxContent from "./header-checkbox-content";
import HeaderFilterContent from "./header-filter-content";
import HeaderFilterCustomContent from "./header-filter-custom-content";
import { getFixedTotalWidthByColumnKey, clsName } from "../util";
import { getValByUnit, isBoolean, isFunction } from "../../../src/utils/index";
import { hasClass } from "../../../src/utils/dom";
import { COMPS_NAME, COLUMN_TYPES, EMIT_EVENTS } from "../util/constant";
import emitter from "../../../src/mixins/emitter";
import VeIcon from "vue-easytable/packages/ve-icon";
import { ICON_NAMES } from "../../../src/utils/constant";

export default {
    name: COMPS_NAME.VE_TABLE_THADER_Th,
    mixins: [emitter],
    props: {
        // group columns item
        groupColumn: {
            type: Array,
            required: true
        },
        // group column item
        groupColumnItem: {
            type: Object,
            required: true
        },
        colgroups: {
            type: Array,
            required: true
        },
        headerRows: {
            type: Array,
            default: function() {
                return [];
            }
        },
        fixedHeader: {
            type: Boolean
        },
        rowIndex: {
            type: Number,
            required: true
        },
        // checkbox option
        checkboxOptipon: {
            type: Object,
            default: function() {
                return null;
            }
        },
        // sort option
        sortOption: {
            type: Object,
            default: function() {
                return null;
            }
        },
        // sort columns
        sortColumns: {
            type: Object,
            default: function() {
                return null;
            }
        },
        // cell style option
        cellStyleOption: {
            type: Object,
            default: function() {
                return null;
            }
        },
        // event custom option
        eventCustomOption: {
            type: Object,
            default: function() {
                return null;
            }
        },
        // border vertical
        borderY: {
            type: Boolean,
            default: false
        },
        // width drag option
        widthDragOption: {
            type: Object,
            default: function() {
                return null;
            }
        },
        // is width dragging
        widthDragging: {
            type: Boolean,
            default: false
        },
        widthDraggingStartX: {
            type: Number,
            default: 0
        },
        widthDraggingEndX: {
            type: Number,
            default: 0
        }
    },
    computed: {
        // is last left fixed column
        isLastLeftFixedColumn() {
            let result = false;

            const { groupColumn, groupColumnItem: column } = this;

            const { fixed, _keys } = column;

            if (fixed === "left") {
                const leftFixedColumns = groupColumn.filter(
                    x => x.fixed === "left"
                );
                const index = leftFixedColumns.findIndex(
                    x => x._keys === _keys
                );

                if (index === leftFixedColumns.length - 1) {
                    result = true;
                }
            }
            return result;
        },
        // is first right fixed column
        isfirstRightFixedColumn() {
            let result = false;

            const { groupColumn, groupColumnItem: column } = this;

            const { fixed, _keys } = column;

            if (fixed === "right") {
                const leftFixedColumns = groupColumn.filter(
                    x => x.fixed === "right"
                );

                if (leftFixedColumns[0]._keys === _keys) {
                    result = true;
                }
            }
            return result;
        },
        // is last column
        isLastCloumn() {
            const { colgroups, groupColumnItem: column } = this;
            return colgroups[colgroups.length - 1].field === column.field;
        },
        // enable width drag
        enableWidthDrag() {
            const { widthDragOption } = this;

            return (
                widthDragOption &&
                isBoolean(widthDragOption.enable) &&
                widthDragOption.enable
            );
        }
    },
    methods: {
        /*
         * @getTheadThClass
         * @desc  get thead th class
         * @param {string} fixed - 固定方式
         */
        getTheadThClass({ fixed }) {
            let result = {
                [clsName("header-th")]: true,
                [clsName("fixed-left")]: fixed === "left",
                [clsName("fixed-right")]: fixed === "right",
                [clsName("last-left-fixed-column")]: this.isLastLeftFixedColumn,
                [clsName("first-right-fixed-column")]: this
                    .isfirstRightFixedColumn,
                [clsName("last-column")]: this.isLastCloumn,
                [clsName("width-drag")]: this.enableWidthDrag
            };

            const {
                cellStyleOption,
                rowData,
                groupColumnItem,
                rowIndex,
                widthDragOption
            } = this;

            if (
                cellStyleOption &&
                isFunction(cellStyleOption.headerCellClass)
            ) {
                const customClass = cellStyleOption.headerCellClass({
                    column: groupColumnItem,
                    rowIndex
                });
                if (customClass) {
                    result[customClass] = true;
                }
            }
            return result;
        },
        /*
         * @getTheadThStyle
         * @desc  get body td style
         * @param {string} _keys - 当前列包含的key（单元格合并时有多个key值）
         * @param {string} align - 居中方式
         * @param {bool} fixed - 固定方式
         * @param {number} rowIndex - 当前行号
         */
        getTheadThStyle({ _keys, align, fixed }, rowIndex) {
            let result = {};

            const colgroups = this.colgroups;
            const headerRows = this.headerRows;

            // text align
            result["text-align"] = align || "center";

            // fixed left total width or right total width
            if (fixed) {
                let key = "";
                let totalWidth = 0;
                const keys = _keys.split("|");
                if (fixed === "left") {
                    key = keys[0];
                } else if (fixed === "right") {
                    key = keys.length === 0 ? keys[0] : keys[keys.length - 1];
                }
                // column index
                const columnIndex = colgroups.findIndex(x => x.key === key);
                if (
                    (fixed === "left" && columnIndex > 0) ||
                    (fixed === "right" && columnIndex < colgroups.length - 1)
                ) {
                    totalWidth = getFixedTotalWidthByColumnKey(
                        colgroups,
                        key,
                        fixed
                    );

                    totalWidth = getValByUnit(totalWidth);
                }

                result["left"] = fixed === "left" ? totalWidth : "";
                result["right"] = fixed === "right" ? totalWidth : "";
            }

            // header row th fixed top
            if (this.fixedHeader) {
                let rowHeight = 0;
                if (rowIndex > 0) {
                    rowHeight = headerRows.reduce(
                        (total, currentVal, index) => {
                            return index < rowIndex
                                ? currentVal.rowHeight + total
                                : total;
                        },
                        0
                    );
                }
                rowHeight = getValByUnit(rowHeight);

                result["top"] = rowHeight;
            }

            return result;
        },

        // get chcekbox content
        getCheckboxContent() {
            let result = null;

            const { checkboxOptipon } = this;

            if (this.groupColumnItem.type === COLUMN_TYPES.CHECKBOX) {
                if (!checkboxOptipon.hideSelectAll) {
                    // checkbox content props
                    const checkboxProps = {
                        props: {
                            column: this.groupColumnItem,
                            checkboxOptipon: this.checkboxOptipon
                        }
                    };

                    result = <HeaderCheckboxContent {...checkboxProps} />;
                }
            }
            return result;
        },
        // sort change
        sortChange() {
            let sortResult = "";
            const { sortColumns, groupColumnItem, sortOption } = this;
            const { sortAlways } = sortOption;

            const currentField = groupColumnItem.field;
            const sortBy = sortColumns[currentField];

            if (sortAlways) {
                sortResult = sortBy === "asc" ? "desc" : "asc";
            } else {
                sortResult =
                    sortBy === "asc" ? "desc" : sortBy === "desc" ? "" : "asc";
            }

            this.dispatch(COMPS_NAME.VE_TABLE_THADER, EMIT_EVENTS.SORT_CHANGE, {
                currentField,
                sortResult
            });
        },

        // get sort content
        getSortContent() {
            let result = null;

            const { sortColumns, groupColumnItem } = this;
            const currentField = groupColumnItem.field;

            if (Object.keys(sortColumns).includes(currentField)) {
                const sortBy = sortColumns[currentField];

                const props = {
                    class: clsName("sort"),
                    on: {
                        click: () => this.sortChange()
                    }
                };

                result = (
                    <span {...props}>
                        <VeIcon
                            class={[
                                clsName("sort-icon"),
                                clsName("sort-icon-top"),
                                sortBy === "asc" ? "active" : ""
                            ]}
                            name={ICON_NAMES.SORT_TOP_ARROW}
                        />
                        <VeIcon
                            class={[
                                clsName("sort-icon"),
                                clsName("sort-icon-bottom"),
                                sortBy === "desc" ? "active" : ""
                            ]}
                            name={ICON_NAMES.SORT_BOTTOM_ARROW}
                        />
                    </span>
                );
            }

            return result;
        },

        // get filter content
        getFilterContent() {
            let result = null;

            const { groupColumnItem } = this;

            if (groupColumnItem.filter) {
                // filter content props
                const filterProps = {
                    props: {
                        column: this.groupColumnItem
                    }
                };
                result = <HeaderFilterContent {...filterProps} />;
            }
            return result;
        },

        // get filter custom content
        getFilterCustomContent() {
            let result = null;

            const { groupColumnItem } = this;

            if (groupColumnItem.filterCustom) {
                // filter content props
                const filterProps = {
                    props: {
                        column: this.groupColumnItem
                    }
                };
                result = <HeaderFilterCustomContent {...filterProps} />;
            }
            return result;
        },

        // cell mousemove
        cellMousemove(e) {
            const { enableWidthDrag, borderY } = this;

            if (enableWidthDrag && borderY) {
                let target = e.target,
                    rect;

                while (
                    target &&
                    ((target.className &&
                        !hasClass(target, clsName("width-drag"))) ||
                        !target.className)
                ) {
                    target = target.parentNode;
                }

                rect = target.getBoundingClientRect();

                const bodyStyle = document.body.style;

                if (rect.right - event.pageX < 10) {
                    console.log("rect.right::", rect.right);
                    console.log("event.pageX ::", event.pageX);

                    if (!this.widthDragging) {
                        // 拖动中不设置
                        /* this.draggingColumn = this.internalColumns.find(
                            x => x.field === column
                        ); */
                    }

                    bodyStyle.cursor = "col-resize";
                } else {
                    if (!this.isDragging) {
                        // 拖动中不设置

                        this.draggingColumn = null;
                        bodyStyle.cursor = "";
                    }
                }
            }
        },

        // cell mousedown
        cellMousedown(e) {
            const { enableWidthDrag, borderY } = this;

            if (enableWidthDrag && borderY) {
                //
                this.dispatch(
                    COMPS_NAME.VE_TABLE_THADER,
                    EMIT_EVENTS.WIDTH_STATE_CHANGE,
                    {
                        type: "widthDragging",
                        value: true
                    }
                );

                this.dispatch(
                    COMPS_NAME.VE_TABLE_THADER,
                    EMIT_EVENTS.WIDTH_STATE_CHANGE,
                    {
                        type: "widthDraggingStartX",
                        value: e.clientX
                    }
                );

                document.onselectstart = function() {
                    return false;
                };
                document.ondragstart = function() {
                    return false;
                };

                // add mousemove event listener
                document.addEventListener(
                    "mousemove",
                    this.handleWidthDragMousemove
                );

                // add mousemove event listener
                document.addEventListener(
                    "mouseup",
                    this.handleWidthDragMouseup
                );
            }
        },

        // cell mouseout
        cellMouseout(e) {
            // remove mousemove event listener
            document.removeEventListener(
                "mousemove",
                this.handleWidthDragMousemove
            );

            // remove mousemove event listener
            document.removeEventListener(
                "mouseup",
                this.handleWidthDragMouseup
            );
        },

        // handle width drag mousemove
        handleWidthDragMousemove(e) {
            const { groupColumnItem, colgroups } = this;

            const colgroup = colgroups.find(x => x.key === groupColumnItem.key);
            if (colgroup) {
                console.log("colgroup.width::", colgroup._realTimeWidth);
            }
        },

        // handle width drag mouseup
        handleWidthDragMouseup(e) {
            const { groupColumnItem, colgroups } = this;

            const colgroup = colgroups.find(x => x.key === groupColumnItem.key);
            if (colgroup) {
                this.dispatch(
                    COMPS_NAME.VE_TABLE,
                    EMIT_EVENTS.BODY_TD_WIDTH_DRAG_CHANGE,
                    {
                        key: groupColumnItem.key,
                        width: 500
                    }
                );
                console.log("colgroup.width::", colgroup._realTimeWidth);
            }
        },

        // cell click
        cellClick(e, fn) {
            fn && fn(e);
        },
        // dblclick
        cellDblclick(e, fn) {
            fn && fn(e);
        },
        // contextmenu
        cellContextmenu(e, fn) {
            fn && fn(e);
        },
        // mouseenter
        cellMouseenter(e, fn) {
            fn && fn(e);
        },
        // mouseleave
        cellMouseleave(e, fn) {
            fn && fn(e);
        }
    },
    render(h) {
        const {
            groupColumnItem,
            getTheadThClass,
            getTheadThStyle,
            rowIndex,
            eventCustomOption
        } = this;

        let content;

        if (typeof groupColumnItem.renderHeaderCell === "function") {
            const {
                _keys,
                _level,
                _colspan,
                _rowspan,
                ...column
            } = groupColumnItem;

            const renderResult = groupColumnItem.renderHeaderCell(
                {
                    column
                },
                h
            );
            content = renderResult;
        } else {
            content = groupColumnItem.title;
        }

        // custom on cell event
        let customEvents = {};
        if (eventCustomOption) {
            const { headerCellEvents } = eventCustomOption;
            customEvents = headerCellEvents
                ? headerCellEvents({ column: groupColumnItem, rowIndex })
                : {};
        }

        const {
            click,
            dblclick,
            contextmenu,
            mouseenter,
            mouseleave
        } = customEvents;

        const events = {
            mousemove: e => {
                this.cellMousemove(e);
            },
            mousedown: e => {
                this.cellMousedown(e);
            },
            mouseout: e => {
                this.cellMouseout(e);
            },
            click: e => {
                this.cellClick(e, click);
            },
            dblclick: e => {
                this.cellDblclick(e, dblclick);
            },
            contextmenu: e => {
                this.cellContextmenu(e, contextmenu);
            },
            mouseenter: e => {
                this.cellMouseenter(e, mouseenter);
            },
            mouseleave: e => {
                this.cellMouseleave(e, mouseleave);
            }
        };

        const thProps = {
            style: getTheadThStyle(groupColumnItem, rowIndex),
            class: getTheadThClass(groupColumnItem),
            attrs: {
                rowspan: groupColumnItem._rowspan,
                colspan: groupColumnItem._colspan
            },
            on: events
        };

        return (
            <th {...thProps}>
                {/* checkbox content */}
                {this.getCheckboxContent()}
                {content}
                {/* sort content */}
                {this.getSortContent()}
                {/* filter content */}
                {this.getFilterContent()}
                {/* filter custom content */}
                {this.getFilterCustomContent()}
            </th>
        );
    }
};
