<script setup>
import {ref, reactive, toRaw} from 'vue'
import { ElButton, ElDialog, ElInput } from 'element-plus';
import { Search } from '@element-plus/icons-vue';
 
import BasicTree from '../../../basic/BasicTree/index.vue'
import DraggableList from '../../../basic/DraggableList/index.vue'
import TestDraggableList from '../../../basic/TestDraggableList/index.vue'

import { unionWith, xorWith } from 'lodash';

import {publicFields} from '../config/constant'
import { getChildrenByLoop } from './utils';
import { generateData } from '../../../basic/BasicTree/utils';

import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const props = defineProps({
    modalVisible: Boolean,
    column: Array,
    changeModalVisible: Function,
    pstate: Object
})

const {changeModalVisible, pstate} = props

// const initSelectedNodes = publicFields[0].children.slice(2,6)

const initSelectedNodes = []

const defaultSelectedPublicKey = getChildrenByLoop(publicFields)

// const selectNodes = unionWith(defaultSelectedPublicKey, initSelectedNodes, (a, b) => a.id === b.id)
let modalVisible = props.modalVisible

// const dataSource = publicFields.concat({
//             name: '自定义字段',
//             id: 'custom',
//             children: []
//         })

const state = reactive({
    selectNodes: unionWith(defaultSelectedPublicKey, initSelectedNodes, (a, b) => a.id === b.id),
    dataSource: publicFields.concat({
            name: '自定义字段',
            id: 'custom',
            children: []
        }),
    testSource: [],
    searchValue: '',
})

const treeState = reactive({
    expendKeys: [],
    checkedKeys: state.selectNodes,
    initData: generateData(state.dataSource, state.searchValue)
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
}

state.testSource = state.selectNodes

const expandObj = (source = []) => {
    let arr = []
    source.map(item => {
        const { name, id } = item
        if (item.children.length) {
            arr.push({
                name,
                id,
                disabled: false,
                defaultSelected: false
            })
            arr = arr.concat(item.children)
        } else {
            arr.push({
                name,
                id,
                disabled: false,
                defaultSelected: false
            })
        }
    })
    return arr
}

const addSelectNodes = (id) => {
    const obj = expandObj(state.dataSource).find(item => {
        return item.id == id
    })
    state.testSource.push(obj)
    
}

const removeSelectNodes = (id) => {
    let index = state.testSource.findIndex((item) => item.id === id)
    state.testSource.splice(index, 1)
}

const changeDialogVisible = (value) => {
    pstate.modalVisible = value
}
</script>

<template>
<el-dialog
        v-model="pstate.modalVisible"
        title="表格字段显示"
    >
        <div class="wrapper">
            <div class="treeWrapper">
                <div class="searchInput">
                    <!-- Search -->
                    <el-input 
                        :suffix-icon="Search" 
                        placeholder="请输入关键字"
                        v-model="state.searchValue"
                    />
                </div>
                <BasicTree
                    :dataSource="state.dataSource"
                    :searchValue="state.searchValue"
                    :addSelectNodes="addSelectNodes"
                    :treeState="treeState"
                    :changeTreeState="changeTreeState"
                />
            </div>
            <!-- DraggableList -->
            <div class="listWrapper">
                <div class="countTitle">
                    已选择3条
                </div>
                <DndProvider :backend="HTML5Backend">
                    <DraggableList
                        :dataSource=" state.testSource"
                        :searchValue="state.searchValue"
                        :removeSelectNodes="removeSelectNodes"
                    />
                    <!-- <TestDraggableList/> -->
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

              .left {
                img {
                  //display: none;
                  //
                  //&:hover {
                  //  display: block;
                  //}
                }
              }

              &:hover {
                background-color: white;
              }
            }
          }
        }
      }
</style>