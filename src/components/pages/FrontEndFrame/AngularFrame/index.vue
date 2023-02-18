<script setup>
import { ElResult, ElButton } from 'element-plus'

import { useRouter } from "vue-router"

const router = useRouter()

// const getImage = (url, type) => {
//   return new URL(`../assets/image/${url}.${type}`, import.meta.url).href;
// }
</script>

<template>
  <ElResult :image-size="400">
    <template #icon>
      <!-- <img class="abnormal-img" :src="getImage('build','svg')" /> -->
    </template>
    <template #extra>
      <h2 class="abnormal-tip">正在建设中</h2>
      <ElButton 
        size="default" type="primary" plain @click="router.go(-1)"
       >
        返回
      </ElButton>
    </template>
  </ElResult>
</template>

<style lang="scss" scoped>

</style>