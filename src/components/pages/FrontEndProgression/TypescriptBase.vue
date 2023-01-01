<script setup>
import { ElTabs, ElTabPane } from 'element-plus';
import Strategy from './components/Strategy.vue'
import Record from './components/Record.vue'
</script>

<template>
    <div class="faultSelfHealing">
      <el-tabs>
        <el-tab-pane label="自愈策略" name="0">
          <Strategy/>
        </el-tab-pane>
        <el-tab-pane label="自愈记录" name="1">
          <Record/>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<style lang="scss" scoped>
.faultSelfHealing {
    height: 100%;
    width: 100%;
    background-color: white;
    padding: 0px 12px;
    box-sizing: border-box;
  }
</style>