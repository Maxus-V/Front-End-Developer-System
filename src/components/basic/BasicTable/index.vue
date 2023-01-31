<script setup>
import { reactive } from 'vue'
import { ElTable, ElTableColumn, ElEmpty, ElPagination } from 'element-plus';

const props = defineProps({
  tableColumns: Array,
  tableData: Array,
  hasSelection: Boolean,
  hasPagination: Boolean,
})

const onSelectionChange = () => {
  console.log('hi')
}

const tableState = reactive({
    currentPage: 1,
    pageSizes: [10, 30, 50, 100],
    total: 500,
})

const handleSizeChange = (val) => {
  console.log(`${val} items per page`, 'sizechange')
  tableState.currentPage = val
}

const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`, 'currentchange')
  tableState.currentPage = val
}

</script>

<template>
  <div class="basicTable">
    <div class="tableItem">
      <ElTable 
        :data="props.tableData" 
        style="width: 100%"
        @selection-change="onSelectionChange"
      >
        <ElTableColumn v-if="hasSelection" type="selection"/>
        <ElTableColumn v-for="(column, index) in props.tableColumns" 
          :key="index"
          :prop="column.prop" 
          :label="column.title" 
          :width="column.width"
        >
          <template #default="scope">
            <RouterLink v-if="column.prop === 'incidentNameText'" :to="'/overview'">
              {{ scope.row[column.prop] || '-' }}
            </RouterLink>
            <span v-else>{{ scope.row[column.prop] || '-' }}</span>
          </template>
        </ElTableColumn>
        <template #empty>
          <ElEmpty  description="暂无数据" />
        </template>
      </ElTable>
    </div>
    <div class="paginationItem">
      <ElPagination
        v-if="props.hasPagination"
        :total="tableState.total"
        layout="sizes, prev, pager, next, jumper"
        :page-sizes="[10, 30, 50, 100]"
        @size-change="handleSizeChange"
        background
        :current-page="tableState.currentPage"
        @current-change="handleCurrentChange"
        :pager-count="5"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.basicTable {
  width: 100%;
  height: 100%;
  .tableItem {
    margin-bottom: 20px;
  }
  .paginationItem {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>