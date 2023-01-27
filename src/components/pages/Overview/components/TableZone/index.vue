<script setup>
import { reactive, computed } from 'vue';
import { ElTabs, ElTabPane } from 'element-plus';

import BasicTable from '@/components/basic/BasicTable/index.vue'

const props = defineProps({
  tableData: Object,
})

const tableZoneState = reactive({
  alertSourceTableData: computed(() => props.tableData.alertSourceTableData || []),
  alertSourceObjectTableData: computed(() => props.tableData.alertSourceObjectTableData || []),
  alertSourceIndicatorsTableData: computed(() => props.tableData.alertSourceIndicatorsTableData || []),
})

const alertSourceTable = [
  {
    prop: 'level',
    label: '事件级别',
    // width: '15%',
  },
  {
    prop: 'incidentNameText',
    label: '事件名称',
    // width: '30%',
  },
  {
    prop: 'checks',
    label: '监控项',
    // width: '30%',
  },
  {
    prop: 'updatedTime',
    label: '最近时间',
    // width: '25%',
  },
]
const alertSourceObjectTableData = [
  {
    prop: 'sourcename',
    label: '告警源名称',
    // width: '25%',
  },
  {
    prop: 'modelname',
    label: '模型名称',
    // width: '15%',
  },
  {
    prop: 'ciid',
    label: '告警次数',
    // width: '15%',
  },
  {
    prop: 'timestamp',
    label: '最近时间',
    // width: '30%',
  },
]
const alertSourceIndicatorsTableData = [
  {
    prop: 'sourcename',
    label: '告警源名称',
    // width: '25%',
  },
  {
    prop: 'ruletype',
    label: '监控类型',
    // width: '15%',
  },
  {
    prop: 'checkname',
    label: '指标名称',
    // width: '15%',
  },
  {
    prop: 'checks',
    label: '告警次数',
    // width: '15%',
  },
  {
    prop: 'timestamp',
    label: '最近时间',
    // width: '30%',
  },
]
const itemList = [
    {
      tab: '待处理事件',
      data: 'alertSourceTableData',
      columns: alertSourceTable,
    }, 
    {
      tab: '对象告警',
      data: 'alertSourceObjectTableData',
      columns: alertSourceObjectTableData,
    }, 
    {
      tab: '指标告警',
      data: 'alertSourceIndicatorsTableData',
      columns: alertSourceIndicatorsTableData,
    },
]
</script>

<template>
  <div class="tableZone">
    <ElTabs>
      <ElTabPane v-for="(item, index) in itemList" class="listContent" :label="item.tab" :key="index">
        <BasicTable
          :tableColumns="item.columns"
          :tableData="tableZoneState[item.data]"
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