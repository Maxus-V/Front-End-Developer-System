<script setup>
import { reactive } from 'vue'
import CustomFieldsModal from './CustomFieldsModal/index.vue'

import { ElTooltip, ElButton,ElIcon } from 'element-plus';
import { Filter } from '@element-plus/icons-vue';

import { getChildrenByLoop } from '@/utils/index.js';
import { generateData } from '@/components/basic/BasicTree/utils';
import { publicFields } from '@/components/pages/FrontEndBasics/config/constant.js';

import { unionWith, xorWith } from 'lodash-es';

const state = reactive({
    modalVisible: false
})

const initSelectedNodes = []
const defaultSelectedPublicKey = getChildrenByLoop(publicFields)
const treeState = reactive({
    expendKeys: [],
    checkedKeys: unionWith(defaultSelectedPublicKey, initSelectedNodes, (a, b) => a.id === b.id),
    initData: generateData(publicFields.concat({
            name: '自定义字段',
            id: 'custom',
            children: []
        }),[])
})

const changeTreeState = (type, payload) => {
    if (type === 'CHANGE_EXPAND_KEYS') {
        const {expendKeys} = treeState
        const keys = expendKeys.map(i => i.id)
        treeState.expendKeys = keys.includes(payload.id) ? expendKeys.filter(i => i.id !== payload.id) : expendKeys.concat(payload)
    }
    if (type === 'CHANGE_SELECTED_KEYS') {
        return (payload) => {
            const {checkedKeys} = treeState
            treeState.checkedKeys = xorWith(checkedKeys, payload, (a, b) => a.id === b.id)
        }
    }
    if (type === 'DELETE_SELECTED_NODE_BY_ID') {
        return (payload) => {
            treeState.checkedKeys = treeState.checkedKeys.filter(node => node.id !== payload)
        }
    }
}

const removeSelectNodes = (id) => {
    changeTreeState('DELETE_SELECTED_NODE_BY_ID')(id)
    console.log('tr', treeState.checkedKeys)
}

const changeModalVisible = (value) => {
    state.modalVisible = value
}

</script>

<template>
     <el-tooltip 
        content="表格字段显示"
        effect="light"
        placement="top"
    >
        <el-button size="small" @click="changeModalVisible(true)">
            <el-icon>
                <Filter />
            </el-icon>
        </el-button>
    </el-tooltip>
    <CustomFieldsModal
        v-if="state.modalVisible"
        :state="state"
        :changeModalVisible="changeModalVisible"
        :treeState="treeState"
        :changeTreeState="changeTreeState"
        :removeSelectNodes="removeSelectNodes"
    />
</template>

<style lang="scss" scoped>

</style>