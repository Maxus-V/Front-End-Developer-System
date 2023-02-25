<script setup>
import { onBeforeMount } from 'vue';
import { ElContainer, ElHeader, ElAside, ElMain } from 'element-plus';
import { useDark } from '@vueuse/core'

import { setWaterMarker } from '@/utils/setWaterMark';

const props = defineProps({
  showHead: Boolean,
})

//用来保持页面切换时的黑夜状态
const isDark = useDark()

onBeforeMount(() => {
  if (localStorage.getItem('hasWaterMarker')){
    setWaterMarker("FrontEndDeveloperSystem")
  }
})
</script>

<template>
  <div class="basicLayout">
    <ElContainer>
      <ElHeader v-if="showHead">
        <slot name="header"></slot>
      </ElHeader>
      <ElContainer>
        <ElAside>
          <slot name="aside"></slot>
        </ElAside>
        <ElMain>
          <slot name="main"></slot>
        </ElMain>
      </ElContainer>
    </ElContainer>
  </div>
</template>

<style lang="scss">
.basicLayout {
  .el-header {
    background-color: rgba(66, 66, 66);
    display: flex;
    align-items: center;
  }
  .el-container {
    height: 100vh;
    .el-aside {
      width: 200px;
      background-color: var(--ld-aside-color);
    }
    .el-main {
      h2{
        color: var(--ld-text-color);
      }
      background-color: var(--ld-main-color);
    }
  }
}
</style>