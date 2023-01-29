<script setup>
import { ref } from 'vue'
import { ElButton, ElDialog, ElInput, ElIcon } from 'element-plus';
import { Search } from '@element-plus/icons-vue';

import BasicTree from '@/components/basic/BasicTree/index.vue'
import DraggableList from '@/components/basic/DraggableList/index.vue'

import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const props = defineProps({
    state: Object,
    changeModalVisible: Function,
    treeState: Object,
    changeTreeState: Function,
    removeSelectNodes: Function,
})
const { changeModalVisible } = props

const searchValue = ref(undefined)

const setSearchValue = () => {
    console.log('value', searchValue.value)
}

const onSave = () => {
    console.log('保存')
    changeModalVisible(false)
}

</script>

<template>
<ElDialog
    title="表格字段显示"
    v-model="state.modalVisible"
>
    <div class="wrapper"> 
        <div class="treeWrapper">
            <div class="searchInput">
                <ElInput v-model="searchValue" placeholder="请输入关键字">
                    <template #suffix>
                        <ElIcon @click="setSearchValue" style="cursor: pointer">
                            <Search />
                        </ElIcon>
                    </template>
                </ElInput>
            </div>
            <BasicTree
                :treeState="treeState"
                :changeTreeState="changeTreeState"
            />
        </div>
        
        <div class="listWrapper">
            <div class="countTitle">
                已选择 n 条
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
        <el-button @click="changeModalVisible(false)">取消</el-button>
        <el-button type="primary" @click="onSave()">确定</el-button>
    </template>
</ElDialog>
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