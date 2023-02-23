<script setup>
import { ElTabs, ElTabPane } from 'element-plus';
import Strategy from './components/Strategy/index.vue'
import Record from './components/Record/index.vue'
</script>

<template>
  <div class="faultSelfHealing">
    <ElTabs type="border-card">
      <ElTabPane label="学习策略">
        <Strategy />       
      </ElTabPane>
      <ElTabPane label="学习辅助">
        <Record />
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<style lang="scss" scoped>
.faultSelfHealing {
  height: 100%;
  width: 100%;
  background-color: white;
  padding: 10px 12px;
  box-sizing: border-box;
}
</style>