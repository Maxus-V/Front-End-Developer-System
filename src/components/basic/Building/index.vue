<script setup>
import { ElResult, ElButton } from 'element-plus'

import { useRouter } from "vue-router"

import { getImage } from '@/utils'

const router = useRouter()

const props = defineProps({
  title: String,
})
</script>

<template>
  <ElResult :image-size="400">
    <template #icon>
      <img class="abnormal-img" :src="getImage('build','svg')" />
    </template>
    <template #extra>
      <div class="abnormal-tip">{{ title }}页面施工中......</div>
      <ElButton 
        size="default" type="primary" plain @click="router.go(-1)"
       >
        返回
      </ElButton>
    </template>
  </ElResult>
</template>

<style lang="scss" scoped>
.el-result {
  background-color: white;
  .abnormal-img {
    max-width: 600px;
    width: 100%;
    padding-top: calc(100vh - 85vh);
  }
  .abnormal-tip {
    color: #909399;
    font-size: 17px;
    padding: 0 0 24px 0;
  }
}
</style>