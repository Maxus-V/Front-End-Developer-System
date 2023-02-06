<script setup>
import { ref } from 'vue'
import { ElInput, ElButton } from 'element-plus';

import BasicTable from '@/components/basic/BasicTable/index.vue'
import EditPage from './EditPage/index.vue'

const searchValue = ref('')
const modalVisible = ref(false)

const onSearch = (value) => {
  console.log('发送请求', value.trim())
}
const changeModalVisible = (value) => {
  modalVisible.value = value
}
</script>

<template>
  <div class="selfHealingStrategy">
    <div class="tableTopLine">
      <ElInput 
        clearable
        placeholder="请输入名称"
        class="AlertSourceListInput"
        v-model="searchValue"
        @change="onSearch"
      />
      <ElButton type="primary" class="addBtn"  @click="changeModalVisible(true)">
        新建策略
      </ElButton>
    </div>
    <div class="content">
      <BasicTable />
    </div>
    <EditPage 
      :modalVisible="modalVisible"
      @changeModalVisible="changeModalVisible"
    />
  </div>
</template>

<style lang="scss" scoped>
.selfHealingStrategy {
    .tableTopLine {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .addBtn {
        margin-left: 30px;
      }
    }
  }
</style>