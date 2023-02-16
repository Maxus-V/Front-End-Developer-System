<script setup>
import { provide, ref, reactive } from 'vue'
import { ElTooltip, ElButton,ElIcon } from 'element-plus';
import { Plus, Filter } from '@element-plus/icons-vue';

import CustomFieldsModal from './CustomFieldsModal/index.vue'

import { getChildrenByLoop } from '@/utils/index.js';
import { publicFields } from '@/components/pages/FrontEndBasics/config/constant.js';

import { xorWith, unionWith } from 'lodash-es';

const props = defineProps({
    useText: Boolean
})

const modalVisible = ref(false)

const treeDatas = publicFields.concat({
    name: '自定义字段',
    id: 'custom',
    children: []
})
provide('treeDatas', treeDatas)

const filterFieldsState = reactive({
    checkedKeys: getChildrenByLoop(publicFields)
})
provide('treeState', filterFieldsState)

const changeCheckedKeys = (value, type) => {
    const { checkedKeys } = filterFieldsState
    if (type === 'addSelectNode') {
        filterFieldsState.checkedKeys = xorWith(checkedKeys, value, (a, b) => a.id === b.id)
    }
    if (type === 'deleteSelectNode') {
        filterFieldsState.checkedKeys = checkedKeys.filter(node => node.id !== value)
    }
}
provide('changeCheckedKeys', changeCheckedKeys)

const moveCard = (dragIndex, hoverIndex) => {
    const item = filterFieldsState.checkedKeys[dragIndex]
    filterFieldsState.checkedKeys.splice(dragIndex, 1)
    filterFieldsState.checkedKeys.splice(hoverIndex, 0, item)
}
provide('moveCard', moveCard)

const changeModalVisible = (value) => {
    modalVisible.value = value
}
</script>

<template>
     <ElTooltip content="表格字段显示" effect="light" placement="top">
        <div v-if="useText" class="conditions" @click="changeModalVisible(true)">
            <ElIcon><Plus /></ElIcon>
            <span>筛选条件</span>
        </div>
        <ElButton v-else size="small" @click="changeModalVisible(true)">
            <ElIcon><Filter /></ElIcon>
        </ElButton>
    </ElTooltip>
    <CustomFieldsModal
        :modalVisible="modalVisible"
        @changeModalVisible="changeModalVisible"
    />
</template>

<style lang="scss" scoped>
.conditions:hover {
    color: #409eff;
    cursor: pointer;
}
</style>