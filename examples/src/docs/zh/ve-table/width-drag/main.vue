<template>
    <div>
        <h2>列宽拖动</h2>
        <Explain />
        <EnableDrag />
    </div>
</template>
<script>
import Explain from "./explain.md";
import EnableDrag from "./enable-drag.md";

export default {
    name: "basic-main",
    components: {
        Explain,
        EnableDrag
    }
};
</script>
