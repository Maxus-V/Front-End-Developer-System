<script setup>
import { computed } from 'vue';
import { ElTabs, ElTabPane } from 'element-plus';
import BasicTable from '../../../../basic/BasicTable/index.vue'

const props = defineProps({
  tableData: Object,
})

const itemList = [
    {
      key: '1',
      tab: '待处理事件',
      data: [],
    }, {
      key: '2',
      tab: '对象告警',
      data: [],
    }, {
      key: '3',
      tab: '指标告警',
      data: [],
    }
  ]
</script>

<template>
  <div class="tableZone">
    <ElTabs>
      <ElTabPane v-for="item in itemList" class="listContent" :label="item.tab">
        <BasicTable
          :data="item.data"
        />
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<style lang="scss" scoped>
.tableZone {
      margin-top: 16px;
      padding: 15px;
      background: white;
      border-radius: 2px;
      // box-shadow: 0px 2px 4px 0px rgba(31, 40, 54, 0.2);
      height: 280px;

      h3 {
        // border-bottom: 1px solid #D7DBE0;
        padding-bottom: 15px;
      }

      .levelCircle {
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 50%;
        margin-right: 6px;
      }

      .label {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .listContent {
        height: 182px;
        overflow-y: auto;
      }
    }
</style>