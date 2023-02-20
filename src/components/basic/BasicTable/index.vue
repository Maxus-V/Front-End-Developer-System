<script setup>
import { ElTable, ElTableColumn, ElEmpty, ElPagination, ElSelect, ElOption } from 'element-plus'

const levelEnum = {
  "MAJOR": '困难',
}

const props = defineProps({
  height: Number,
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
        :height="height"
        id="out-table"
      >
        <ElTableColumn v-if="hasSelection" type="selection"/>
        <ElTableColumn v-for="(column, index) in tableColumns" 
          :key="index"
          :prop="column.prop" 
          :label="column.title" 
          :width="column.width"
        >
          <template #default="scope">
            <RouterLink v-if="column.prop === 'incidentNameText'" :to="`/frontendbasics/detail/${scope.row.seriNum}`">
              {{ scope.row[column.prop] || '-' }}
            </RouterLink>
            <span v-else-if="column.prop === 'originalAlertLevel'">
              <ElSelect :model-value="scope.row[column.prop]" placeholder="请输入等级后回车" collapse-tags>
                <ElOption :value="scope.row[column.prop]">
                </ElOption>
              </ElSelect>
            </span>
            <span v-else-if="column.prop === 'level'">{{ levelEnum[scope.row[column.prop]] }}</span>
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