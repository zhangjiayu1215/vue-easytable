import { getFixedTotalWidthByColumnKey, clsName } from "../util";
import { getValByUnit } from "../../../src/utils/index.js";
import HeaderTr from "./header-tr";
import { COMPS_NAME, EMIT_EVENTS } from "../util/constant";
export default {
    name: COMPS_NAME.VE_TABLE_THADER,
    props: {
        groupColumns: {
            type: Array,
            required: true
        },
        colgroups: {
            type: Array,
            required: true
        },
        fixedHeader: {
            type: Boolean,
            required: true
        },
        headerRows: {
            type: Array,
            default: function() {
                return [];
            }
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
        }
    },
    data() {
        return {
            /*
            sort columns
            不要使用computed代替，属性动态添加会造成响应式问题
            */
            sortColumns: {},
            // is width dragging
            widthDragging: false,
            // width dragging start x pos
            widthDraggingStartX: 0,
            // width dragging end x pos
            widthDraggingEndX: 0
        };
    },
    computed: {
        // header class
        headerClass() {
            return {
                [clsName("fixed-header")]: this.fixedHeader
            };
        }
    },
    watch: {
        // watch colgroups
        colgroups: {
            handler() {
                this.initSortColumns();
            },
            immediate: true
        }
    },
    methods: {
        // sort change
        sortChange({ currentField, sortResult }) {
            const { sortColumns, sortOption } = this;
            const { multipleSort, sortChange } = sortOption;

            this.sortColumns[currentField] = sortResult;

            if (!multipleSort) {
                for (const field in sortColumns) {
                    if (field !== currentField) {
                        sortColumns[field] = "";
                    }
                }
            }

            // invoke
            sortChange(sortColumns);
        },

        // init sort columns
        initSortColumns() {
            const { colgroups } = this;
            let sortColumns = {};
            colgroups.forEach(item => {
                if (typeof item.sortBy === "string") {
                    sortColumns[item.field] = item.sortBy;
                }
            });
            this.sortColumns = sortColumns;
        },

        // width drag state change
        widthDragStateChange(params) {
            const { type, value } = params;
            if (type === "widthDragging") {
                this.widthDragging = value;
            } else if (type === "widthDraggingStartX") {
                this.widthDraggingStartX = value;
            } else if (type === "widthDraggingEndX") {
                this.widthDraggingEndX = value;
            } else {
                console.log("widthDragStateChange error");
            }
        }
    },
    mounted() {
        // receive sort change
        this.$on(EMIT_EVENTS.SORT_CHANGE, params => {
            this.sortChange(params);
        });

        // receive sort change
        this.$on(EMIT_EVENTS.WIDTH_STATE_CHANGE, params => {
            this.widthDragStateChange(params);
        });
    },
    render() {
        const {
            headerClass,
            groupColumns,
            getTheadThClass,
            getTheadThStyle,
            colgroups,
            fixedHeader,
            headerRows,
            checkboxOptipon,
            sortOption,
            sortColumns,
            cellStyleOption,
            eventCustomOption,
            widthDragOption
        } = this;

        return (
            <thead class={headerClass}>
                {groupColumns.map((groupColumn, rowIndex) => {
                    const trProps = {
                        key: rowIndex,
                        props: {
                            groupColumn,
                            headerRows,
                            colgroups,
                            fixedHeader,
                            rowIndex,
                            checkboxOptipon,
                            sortOption,
                            sortColumns,
                            cellStyleOption,
                            eventCustomOption,
                            widthDragOption,
                            borderY: this.borderY,
                            widthDragging: this.widthDragging,
                            widthDraggingStartX: this.widthDraggingStartX,
                            widthDraggingEndX: this.widthDraggingEndX
                        }
                    };
                    return <HeaderTr {...trProps} />;
                })}
            </thead>
        );
    }
};
