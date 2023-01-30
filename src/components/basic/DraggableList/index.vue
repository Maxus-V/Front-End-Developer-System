<script setup>
import { inject } from 'vue';
import { ElEmpty } from 'element-plus';

import DraggableItem from './DraggableItem.vue'

const tree = inject('tree')

const moveCard = (dragIndex, hoverIndex) => {
    const item = tree.checkedKeys[dragIndex]
    tree.checkedKeys.splice(dragIndex, 1)
    tree.checkedKeys.splice(hoverIndex, 0, item)
}
</script>

<template>
    <div class="DraggableList">
        <template v-if="tree.checkedKeys.length">
            <DraggableItem
                v-for="(treeNode, index) in tree.checkedKeys"
                :id="treeNode.id"
                :key="treeNode.id"
                :name="treeNode.name"
                :disabled="treeNode.disabled"
                :index="index"
                :moveCard="moveCard"
            />
        </template>
        <template  v-else>
            <el-empty description="暂无数据"/>
        </template>
    </div>
</template>

<style lang="scss" scoped>

</style>