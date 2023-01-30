<script setup>
import { ref, reactive, provide } from 'vue'
import { ElTooltip, ElButton,ElIcon } from 'element-plus';
import { Filter } from '@element-plus/icons-vue';

import CustomFieldsModal from './CustomFieldsModal/index.vue'

import { unionWith, xorWith } from 'lodash-es';
import { getChildrenByLoop } from '@/utils/index.js';
import { generateData } from '@/components/basic/BasicTree/utils';
import { publicFields } from '@/components/pages/FrontEndBasics/config/constant.js';

const treeDatas = publicFields.concat({
    name: '自定义字段',
    id: 'custom',
    children: []
})
provide('treeDatas', treeDatas)

const modalVisible = ref(true)

const filterFieldsState = reactive({
    checkedKeys: getChildrenByLoop(publicFields)
})
provide('tree', filterFieldsState)

const changeModalVisible = (value) => {
    modalVisible.value = value
}
const changeCheckedKeys = (valueArr) => {
    const { checkedKeys } = filterFieldsState
    filterFieldsState.checkedKeys = xorWith(checkedKeys, valueArr, (a, b) => a.id === b.id)
}
provide('changeCheckedKeys', changeCheckedKeys)
const deleteSelectNode = (id) => {
    filterFieldsState.checkedKeys = filterFieldsState.checkedKeys.filter(node => node.id !== id)
}
provide('deleteSelectNode', deleteSelectNode)

</script>

<template>
     <ElTooltip content="表格字段显示" effect="light" placement="top">
        <ElButton size="small" @click="changeModalVisible(true)">
            <ElIcon><Filter /></ElIcon>
        </ElButton>
    </ElTooltip>
    <CustomFieldsModal
        :modalVisible="modalVisible"
        @changeModalVisible="changeModalVisible"
    />
</template>

<style lang="scss" scoped>

</style>