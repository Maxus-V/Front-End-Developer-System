<script setup>
import { computed } from '@vue/reactivity';
import TreeMenu from './TreeMenu.vue'

import { generateData } from './utils/index.js'
const props = defineProps({
    dataSource: Array,
    searchValue: String,
    addSelectNodes: Function,
    treeState: Object,
    changeTreeState: Function
})
const {dataSource, searchValue} = props

const treeData = generateData(dataSource, searchValue)

</script>

<template>
        <TreeMenu
            :dataSource="treeData"
            :addSelectNodes="addSelectNodes"
            :treeState="treeState"
            :changeTreeState="changeTreeState"
        />
</template>

<style lang="scss" scoped>

</style>