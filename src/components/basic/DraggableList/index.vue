<script setup>
import { inject, computed } from 'vue';
import { ElEmpty } from 'element-plus';

import DraggableItem from './DraggableItem.vue'

const treeState = inject('treeState')

const tree = computed(() => treeState.checkedKeys || [])
</script>

<template>
    <div class="DraggableList">
        <template v-if="tree.length">
            <DraggableItem
                v-for="(treeNode, index) in tree"
                :id="treeNode.id"
                :key="treeNode.id"
                :name="treeNode.name"
                :disabled="treeNode.disabled"
                :index="index"
            />
        </template>
        <template  v-else>
            <el-empty description="暂无数据"/>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.DraggableList {
    height: 300px;
    overflow-y: scroll;
}
</style>