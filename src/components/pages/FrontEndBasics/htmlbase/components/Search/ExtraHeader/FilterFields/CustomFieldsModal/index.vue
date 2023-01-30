<script setup>
import { ElDialog, ElButton, ElInput, ElIcon } from 'element-plus';

// import BasicTree from '@/components/basic/BasicTree/index.vue'
import BasicTreeV2 from '@/components/basic/BasicTreeV2/index.vue'
import DraggableList from '@/components/basic/DraggableList/index.vue'

import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const props = defineProps({
    modalVisible: Boolean,
})

const emit = defineEmits(['changeModalVisible'])

const changeModalVisible = () => {
  emit("changeModalVisible", false)
}

const onSave = () => {
    console.log('保存')
    changeModalVisible()
}

</script>

<template>
  <ElDialog title="表格字段显示" :model-value="props.modalVisible" class="searchModal">
      <div class="wrapper"> 
          <div class="treeWrapper">
              <!-- <BasicTree
                  :treeState="treeState"
                  :changeTreeState="changeTreeState"
              /> -->
              <BasicTreeV2 />
          </div>
          <div class="listWrapper">
              <div class="countTitle">
                  已选择 n 条
              </div>
              <DndProvider :backend="HTML5Backend">
                  <DraggableList />
              </DndProvider>
          </div>
      </div>
      <template #footer>
          <ElButton @click="changeModalVisible">取消</ElButton>
          <ElButton type="primary" @click="onSave">确定</ElButton>
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