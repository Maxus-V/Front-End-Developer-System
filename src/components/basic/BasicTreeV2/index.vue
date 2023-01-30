<script setup>
import { inject } from 'vue'
import TreeItem from './TreeItem.vue'

const treeDatas = inject('treeDatas')
</script>

<template>
    <div class="tree">
        <TreeItem v-for="treeData in treeDatas" class="treeItem" :treeData="treeData" />
    </div>
</template>

<style lang="scss" scoped>
.tree {
    height: 300px;
    overflow-y: scroll;
    .treeItem {
        cursor: pointer;
    }
}
</style>