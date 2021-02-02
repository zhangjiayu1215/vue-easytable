:::anchor 开启列宽拖动

:::demo

```html
<template>
  <ve-table
    :columns="columns"
    :table-data="tableData"
    :width-drag-option="widthDragOption"
    border-y
  />
</template>

<script>
  export default {
    data() {
      return {
        widthDragOption: {
          enable: true,
        },
        columns: [
          { field: "name", key: "a", title: "Name", align: "left" },
          { field: "age", key: "b", title: "Age", align: "center", sortBy: "" },
          { field: "weight", key: "c", title: "Weight(kg)", align: "center", sortBy: "asc" },
          { field: "hobby", key: "d", title: "Hobby", align: "center" },
          { field: "address", key: "e", title: "Address", align: "left" },
        ],
        tableData: [
          {
            name: "John",
            age: 25,
            weight: 66,
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Shanghai",
          },
          {
            name: "Dickerson",
            age: 20,
            weight: 70,
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Beijing",
          },
          {
            name: "Larsen",
            age: 18,
            weight: 65,
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Chongqing",
          },
          {
            name: "Geneva",
            age: 17,
            weight: 80,
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Xiamen",
          },
          {
            name: "Jami",
            age: 26,
            weight: 72,
            hobby: "coding and coding repeat",
            address: "No.1 Century Avenue, Shenzhen",
          },
        ],
      };
    },
    methods: {},
  };
</script>
```

:::
