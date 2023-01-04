<script setup>
import { computed, ref, unref } from 'vue'
import { useDrag, useDrop } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'

import { ElIcon } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';

const props = defineProps({
    id: String,
    name: String,
    index: Number,
    moveCard: Function,
    disabled: Boolean
})

const {disabled} = props

const removeItem = () => {
    console.log('removeItem')
}

const card = ref(null)

const [dropCollect, drop] = useDrop({
    accept: 'box',
    collect: (monitor) => ({handlerId: monitor.getHandlerId()}),
    hover: (node, monitor) => {
        if (!card.value) return
        const dragIndex = node.index
        const hoverIndex = props.index
        if (dragIndex === hoverIndex) return
        const hoverBoundingRect = card.value.getBoundingClientRect()
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const clientOffset = monitor.getClientOffset()
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return
        props.moveCard(dragIndex, hoverIndex)
        node.index = hoverIndex
    }
})

const [collect, drag] = useDrag({
    type: 'box',
    canDrag: !disabled,
    item: () => ({
        id: props.id, index: props.index
    }),
    collect: (monitor) => ({isDragging: monitor.isDragging()}),
})


const { handlerId } = toRefs(dropCollect)
const { isDragging } = toRefs(collect)
const opacity = computed(() => (unref(isDragging) ? 0 : 1))

const setRef = (el) => {
    card.value = drag(drop(el))
}

</script>

<template>
  <div
    :ref="setRef"
    class="draggableItem"
    :style="{ opacity }"
    :data-handler-id="handlerId"
  >
    <div class="left">
        {{ name }}
    </div>
    <el-icon v-if="!disabled" @click="removeItem()">
        <Delete/>
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
.draggableItem {
    width: 100%;
    height: 32px;
    box-sizing: border-box;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        background-color: white;
        cursor: move;
    }
}
</style>
