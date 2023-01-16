<script setup>
import DeleteBtn from './DeleteBtn.vue'
import ExportBtn from './ExportBtn.vue'
import FilterFields from './FilterFields/index.vue';

const props = defineProps({
    tableData: Object,
    modifyCondition: Function
})
</script>

<template>
    <div class="extraHeader">
        <DeleteBtn/>
        <ExportBtn/>
        <FilterFields/>
    </div>
</template>

<style lang="scss" scoped>
.extraHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>