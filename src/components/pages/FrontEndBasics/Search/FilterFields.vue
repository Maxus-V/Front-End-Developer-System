<script setup>
import {ref, reactive, toRaw} from 'vue'
import { ElButton, ElDialog, ElInput } from 'element-plus';
import { Search } from '@element-plus/icons-vue';
 
import BasicTree from '../../../basic/BasicTree/index.vue'
import DraggableList from '../../../basic/DraggableList/index.vue'

import { unionWith, xorWith } from 'lodash';

import {publicFields} from '../config/constant'
import { getChildrenByLoop } from './utils';
import { generateData } from '../../../basic/BasicTree/utils';

import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const props = defineProps({
    modalVisible: Object,
    changeModalVisible: Function,
})

const { modalVisible, changeModalVisible } = props

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

</script>

<template>
<el-dialog
        v-model="modalVisible.modalVisible"
        title="表格字段显示"
    >
        <div class="wrapper">
            <div class="treeWrapper">
                <div class="searchInput">
                    <!-- Search -->
                    <el-input 
                        :suffix-icon="Search" 
                        placeholder="请输入关键字"
                    />
                </div>
                <BasicTree
                    :treeState="treeState"
                    :changeTreeState="changeTreeState"
                />
            </div>
            <!-- DraggableList -->
            <div class="listWrapper">
                <div class="countTitle">
                    已选择{{ treeState.checkedKeys.length }}条
                </div>
                <DndProvider :backend="HTML5Backend">
                    <DraggableList
                        :treeState="treeState"
                        :removeSelectNodes="removeSelectNodes"
                    />
                </DndProvider>
            </div>
        </div>
        <template #footer>
        <span>
            <el-button @click="changeModalVisible(false)">取消</el-button>
            <el-button type="primary" @click="changeModalVisible(false)">
                确定
            </el-button>
        </span>
        </template>
    </el-dialog>
</template>

<style lang="scss" scoped>
.wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;

        .treeWrapper {
          width: 50%;
          height: 100%;
          padding: 20px;

          .searchInput {
            width: 100%;
            height: 32px;
            box-sizing: border-box;
            //padding: 0 12px;        
          }

          .searchModalTree {
            width: 100%;
            height: 100%;
          }
        }

        .listWrapper {
          width: 50%;
          height: 100%;
          padding: 20px;
          border-left: 1px solid rgba(0, 0, 0, 0.06);

          .countTitle {
            height: 32px;
            line-height: 32px;
            width: 100%;
            box-sizing: border-box;
            padding: 0 12px;
          }

          .DraggableList {
            width: 100%;
            height: 100%;

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
              }
            }
          }
        }
      }
</style>