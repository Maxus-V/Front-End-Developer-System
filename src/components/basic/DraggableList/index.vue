<script setup>
import {ref} from 'vue'
import { ElEmpty } from 'element-plus';
import DraggableItem from './DraggableItem.vue'

const props = defineProps({
    dataSource: Array,
    searchValue: String,
    removeSelectNodes: Function,
})

const {dataSource} = props

// const cards = ref(dataSource)

const moveCard = (dragIndex, hoverIndex) => {
    const item = dataSource[dragIndex]
    dataSource.splice(dragIndex, 1)
    dataSource.splice(hoverIndex, 0, item)
}

// const moveCard = (dragIndex, hoverIndex) => {
//     const item = cards.value[dragIndex]
//     cards.value.splice(dragIndex, 1)
//     cards.value.splice(hoverIndex, 0, item)
// }

</script>

<template>
    <div class="DraggableList">
        <template v-if="dataSource.length">
            <DraggableItem
            v-for="(card, index) in dataSource"
            :id="card.id"
            :key="card.id"
            :name="card.name"
            :index="index"
            :move-card="moveCard"
            :disabled="card.disabled"
            :removeSelectNodes="removeSelectNodes"
            />
        </template>
        <template  v-else>
            <el-empty description="暂无数据"/>
        </template>
    </div>
</template>

<style lang="scss" scoped>
.DraggableList {
    
}
</style>