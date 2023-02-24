<script setup>
import { ref } from 'vue'
import { ElInput, ElButton, ElCard, ElMessage } from 'element-plus';

import EditPage from './EditPage/index.vue'

const count = ref(8)
const searchValue = ref('')
const modalVisible = ref(false)

const load = () => {
  count.value += 1
}
const onSearch = (value) => {
  console.log('发送请求', value.trim())
}
const changeModalVisible = (value) => {
  modalVisible.value = value
}
const enterPage = () => {
  ElMessage({
    message: '尚未开发完成，敬请期待！',
    type: 'error',
  })
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
      <ElCard shadow="never" :body-style="{ padding: '30px' }"> 
        <ul v-infinite-scroll="load" infinite-scroll-distance="1000" class="infinite-list" style="overflow: auto">
          <li v-for="i in count" :key="i" class="infinite-list-item" @click="enterPage" style="cursor: pointer;">
            {{ `无限滚动·学习策略${i}` }}
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
      .infinite-list {
        height: calc(100vh - 300px);
        padding: 0;
        margin: 0;
        list-style: none;
      }
      .infinite-list .infinite-list-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        background: var(--el-color-primary-light-9);
        margin: 10px;
        color: var(--el-color-primary);
      }
      .infinite-list .infinite-list-item+.list-item {
        margin-top: 10px;
      }
    }
  }
</style>