<script setup>
import TreeNode from './TreeNode.vue';
const props = defineProps({
    dataSource: Array,
    searchValue: String
})
const dataSource = props.dataSource
</script>

<template>
    <div v-for="item in dataSource"> 
        <TreeNode/>
    </div>
</template>

<style lang="scss" scoped>

</style>