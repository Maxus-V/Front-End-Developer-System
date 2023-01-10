<script setup>
import { ElEmpty } from 'element-plus';
import DraggableItem from './DraggableItem.vue'

const props = defineProps({
    treeState: Object,
    removeSelectNodes: Function,
})

const { treeState } = props

const moveCard = (dragIndex, hoverIndex) => {
    const item = treeState.checkedKeys[dragIndex]
    treeState.checkedKeys.splice(dragIndex, 1)
    treeState.checkedKeys.splice(hoverIndex, 0, item)
}

</script>

<template>
    <div class="DraggableList">
        <template v-if="treeState.checkedKeys.length">
            <DraggableItem
            v-for="(checkedKey, index) in treeState.checkedKeys"
            :id="checkedKey.id"
            :key="checkedKey.id"
            :name="checkedKey.name"
            :disabled="checkedKey.disabled"
            :index="index"
            :moveCard="moveCard"
            :removeSelectNodes="removeSelectNodes"
            />
        </template>
        <template  v-else>
            <el-empty description="暂无数据"/>
        </template>
    </div>
</template>

<style lang="scss" scoped>

</style>