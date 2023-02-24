<script setup>
import { onBeforeMount } from 'vue';
import { ElContainer, ElHeader, ElAside, ElMain } from 'element-plus';

import { setWaterMarker } from '@/utils/setWaterMark';

const props = defineProps({
  showHead: Boolean,
})

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
      background-color: rgba(170, 97, 88);
    }
    .el-main {
      background-color: rgba(249, 205, 144);
    }
  }
}
</style>