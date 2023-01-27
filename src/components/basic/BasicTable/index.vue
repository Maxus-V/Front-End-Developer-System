<script setup>
import { ElTable, ElTableColumn, ElEmpty } from 'element-plus';

import BasicPagination from '@/components/basic/BasicPagination/index.vue'

const props = defineProps({
  tableColumns: Array,
  tableData: Array,
  hasPagination: Boolean,
})
</script>

<template>
  <div class="basicTable">
    <ElTable :data="props.tableData" style="width: 100%">
      <ElTableColumn v-for="(column, index) in props.tableColumns" 
        :key="index"
        :prop="column.prop" 
        :label="column.label" 
        :width="column.width"
      />
      <template #empty>
        <ElEmpty  description="暂无数据" />
      </template>
    </ElTable>
    <BasicPagination v-if="props.hasPagination" />
  </div>
</template>

<style lang="scss" scoped>
.basicTable {
  width: 100%;
}
</style>