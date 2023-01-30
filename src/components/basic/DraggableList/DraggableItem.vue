<script setup>
import { inject, ref, computed, unref } from 'vue'
import { ElTooltip, ElIcon } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';

import { useDrag, useDrop } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'

import DragSvg from '@/components/icons/IconDrag.vue'

const deleteSelectNode = inject('deleteSelectNode')

const props = defineProps({
    id: String,
    name: String,
    index: Number,
    moveCard: Function,
    disabled: Boolean,
})

const {id, disabled} = props

const removeItem = () => {
    deleteSelectNode(id)
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
const cursor = computed(() => (!disabled ? 'move' : 'default'))

const setRef = (el) => {
    card.value = drag(drop(el))
}
</script>

<template>
  <div :ref="setRef" class="draggableItem" :style="{ opacity, cursor }" :data-handler-id="handlerId">
    <div>
        <ElTooltip v-if="!disabled" effect="light" content="可进行拖拽移动" placement="top">
            <ElIcon><DragSvg/></ElIcon>
        </ElTooltip>
        <span>{{ name }}</span>
    </div>
    <div class="icon">
        <ElIcon v-if="!disabled" @click="removeItem"><Delete/></ElIcon>
    </div>
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
    .icon {
        cursor: pointer;
    }
}
</style>
