<script setup>
import TreeMenu from './TreeMenu.vue'
const props = defineProps({
    dataSource: Array,
    searchValue: String,
    addSelectNodes: Function,
})
const dataSource = props.dataSource

</script>

<template>
        <TreeMenu
            :dataSource="dataSource"
            :addSelectNodes="addSelectNodes"
        />
</template>

<style lang="scss" scoped>

</style>