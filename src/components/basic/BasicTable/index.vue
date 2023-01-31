<script setup>
import { ElTable, ElTableColumn, ElEmpty, ElPagination } from 'element-plus';

const props = defineProps({
  tableColumns: Array,
  tableData: Array,
  hasSelection: Boolean,
  changeSelection: Function,
  hasPagination: Boolean,
  pagination: Object,
  changePagination: Function,
})

const onSelectionChange = (dataArr) => {
  props.changeSelection(dataArr)
  console.log('onSelectionChange', dataArr.length)
}
const onSizeChange = (value) => {
  props.changePagination({
    pageSize: value
  })
}
const onCurrentChange = (value) => {
  props.changePagination({
    currentPage: value
  })
}
</script>

<template>
  <div class="basicTable">
    <div class="tableItem">
      <ElTable 
        :data="tableData" 
        style="width: 100%"
        @selection-change="onSelectionChange"
      >
        <ElTableColumn v-if="hasSelection" type="selection"/>
        <ElTableColumn v-for="(column, index) in tableColumns" 
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
        v-if="hasPagination"
        :total="pagination.count"
        layout="sizes, prev, pager, next, jumper"
        :page-sizes="[10, 30, 50, 100]"
        @size-change="onSizeChange"
        background
        :current-page="pagination.currentPage"
        @current-change="onCurrentChange"
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