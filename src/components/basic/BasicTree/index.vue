<script setup>
import TreeMenu from './TreeMenu.vue'

const props = defineProps({
    treeState: Object,
    changeTreeState: Function
})

</script>

<template>
        <TreeMenu
            :dataSource="treeState.initData"
            :treeState="treeState"
            :changeTreeState="changeTreeState"
        />
</template>

<style lang="scss" scoped>

</style>