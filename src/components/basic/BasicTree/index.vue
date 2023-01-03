<script setup>
import TreeMenu from './TreeMenu.vue'
const props = defineProps({
    dataSource: Array,
    searchValue: String
})
const dataSource = props.dataSource

</script>

<template>
        <TreeMenu
            :dataSource="dataSource"
        />
</template>

<style lang="scss" scoped>

</style>