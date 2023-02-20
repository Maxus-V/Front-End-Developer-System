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
  // {
  //   prop: 'level',
  //   title: '难度级别',
  //   // width: '15%',
  // },
  {
    prop: 'modelname',
    title: '知识点名称',
    // width: '30%',
  },
  {
    prop: 'checks',
    title: '所需用时',
    // width: '30%',
  },
  {
    prop: 'updatedTime',
    title: '最近学习时间',
    // width: '25%',
  },
]
const alertSourceObjectTableData = [
  {
    prop: 'sourcename',
    title: '知识点来源',
    // width: '25%',
  },
  {
    prop: 'modelname',
    title: '知识名称',
    // width: '15%',
  },
  {
    prop: 'ciid',
    title: '难度系数',
    // width: '15%',
  },
  {
    prop: 'timestamp',
    title: '最近学习时间',
    // width: '30%',
  },
]
const alertSourceIndicatorsTableData = [
  {
    prop: 'sourcename',
    title: '知识点来源',
    // width: '25%',
  },
  {
    prop: 'ruletype',
    title: '知识类型',
    // width: '15%',
  },
  {
    prop: 'checkname',
    title: '知识类目名称',
    // width: '15%',
  },
  {
    prop: 'checks',
    title: '类目条数',
    // width: '15%',
  },
  {
    prop: 'timestamp',
    title: '最近学习时间',
    // width: '30%',
  },
]
const itemList = [
    {
      tab: '待学习知识点',
      data: 'alertSourceTableData',
      columns: alertSourceTable,
    }, 
    {
      tab: '待解决知识点',
      data: 'alertSourceObjectTableData',
      columns: alertSourceObjectTableData,
    }, 
    {
      tab: '待复习知识点',
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
          :height="200"
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
  height: 280px;
  h3 {
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
    overflow-y: scroll;
  }
}
</style>