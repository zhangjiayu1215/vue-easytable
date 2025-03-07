:::anchor Body custom cell

:::demo 1、In the`column` configuration, the rendering function can be passed in through the attribute `renderBodyCell({row,column,rowIndex},h)`<br>2、The render function takes 3 parameters,`row`:Current row data、`column`:Current column configuration、`rowIndex`:Row index

```html
<template>
    <ve-table style="width:100%" border-y :columns="columns" :table-data="tableData" />
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        field: "",
                        key: "a",
                        title: "#",
                        align: "center",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <span class="text-bold" style="color:#1890ff;">
                                    {++rowIndex}
                                </span>
                            );
                        },
                    },
                    {
                        field: "date",
                        key: "b",
                        title: "Date",
                        align: "center",
                    },
                    {
                        field: "hobby",
                        key: "c",
                        title: "Hobby",
                        align: "left",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            const text = row[column.field];
                            return (
                                <span>
                                    <a
                                        class="test-text"
                                        href="http://github.com"
                                        style="color:#1890ff;cursor:pointer;"
                                    >
                                        {text}
                                    </a>
                                    &nbsp;are my hobbies
                                </span>
                            );
                        },
                    },
                    {
                        field: "address",
                        key: "d",
                        title: "Address",
                        width: "",
                        align: "left",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            const text = row[column.field];
                            return <input style="width:100%" value={text}></input>;
                        },
                    },
                    {
                        field: "",
                        key: "e",
                        title: "Action",
                        width: "",
                        center: "left",
                        renderBodyCell: ({ row, column, rowIndex }, h) => {
                            return (
                                <span>
                                    <button
                                        class="button-demo"
                                        on-click={() => this.editRow(rowIndex)}
                                    >
                                        Edit
                                    </button>
                                    &nbsp;
                                    <button
                                        class="button-demo"
                                        on-click={() => this.deleteRow(rowIndex)}
                                    >
                                        Delete
                                    </button>
                                </span>
                            );
                        },
                    },
                ],
                tableData: [
                    {
                        name: "John",
                        date: "1900-05-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Shanghai",
                    },
                    {
                        name: "Dickerson",
                        date: "1910-06-20",
                        hobby: "coding",
                        address: "No.1 Century Avenue, Beijing",
                    },
                    {
                        name: "Larsen",
                        date: "2000-07-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Chongqing",
                    },
                    {
                        name: "Geneva",
                        date: "2010-08-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Xiamen",
                    },
                    {
                        name: "Jami",
                        date: "2020-09-20",
                        hobby: "coding and coding repeat",
                        address: "No.1 Century Avenue, Shenzhen",
                    },
                ],
            };
        },
        methods: {
            editRow(rowIndex) {
                alert(`eidt row number:${rowIndex}`);
            },
            deleteRow(rowIndex) {
                this.tableData.splice(rowIndex, 1);
            },
        },
    };
</script>

<style>
    .text-bold {
        font-weight: bold;
    }
</style>
```

:::
