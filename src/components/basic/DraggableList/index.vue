<script setup>
import {ref} from 'vue'
import { ElEmpty } from 'element-plus';
import DraggableItem from './DraggableItem.vue'

const props = defineProps({
    dataSource: Array,
    searchValue: String
})

const {dataSource} = props

const cards = ref(dataSource[0].children)

const moveCard = (dragIndex, hoverIndex) => {
    const item = cards.value[dragIndex]
    cards.value.splice(dragIndex, 1)
    cards.value.splice(hoverIndex, 0, item)
}

</script>

<template>
    <div class="DraggableList">
        <template v-if="dataSource.length">
            <DraggableItem
            v-for="(card, index) in cards"
            :id="card.id"
            :key="card.id"
            :name="card.name"
            :index="index"
            :move-card="moveCard"
            :disabled="card.disabled"
            />
        </template>
        <template  v-else>
            <el-empty description="暂无数据"/>
        </template>
    </div>
</template>

<style lang="scss" scoped>

</style>