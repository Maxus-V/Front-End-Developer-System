<script setup>
import { ref } from 'vue'
import { ElInput, ElButton, ElCard } from 'element-plus';

import EditPage from './EditPage/index.vue'

const searchValue = ref('')
const modalVisible = ref(false)
const count = ref(0)

const load = () => {
  count.value += 1;
}

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
      <ElCard> 
        <template #header>
          <div class="card-header">
            无限滚动列表
          </div>
        </template>
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
          <li v-for="i in count" :key="i" class="infinite-list-item">
            {{ `我是第${i}` }}
          </li>
        </ul>
      </ElCard>
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
    .content {
      margin-top: 20px;
    }
  }
</style>