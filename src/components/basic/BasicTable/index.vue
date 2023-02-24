<script setup>
import { ElTable, ElTableColumn, ElEmpty, ElPagination, ElSelect, ElOption, ElInput, ElIcon } from 'element-plus'
import { Delete } from '@element-plus/icons-vue';

const emit = defineEmits(['deleteContent'])

const props = defineProps({
  height: Number,
  tableColumns: Array,
  tableData: Array,
  hasSelection: Boolean,
  changeSelection: Function,
  hasPagination: Boolean,
  pagination: Object,
  changePagination: Function,
  canDelete: Boolean,
})

const onSelectionChange = (dataArr) => {
  props.changeSelection(dataArr)
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
            :label="column.title"
            :key="column.prop"
            :width="column.width"
          >
            <template #default="scope">
              <ElInput v-if="column.type === 'input'" 
                v-model="scope.row[Object.keys(scope.row)[index]]" 
                placeholder="请输入内容"
                collapse-tags
              />

              <ElSelect v-else-if="column.type === 'select'"  
                v-model="scope.row[Object.keys(scope.row)[index]]"
                placeholder="请选择难度" 
              >
                <ElOption value="ok" label="非常简单" />
                <ElOption value="minor" label="简单" />
                <ElOption value="moderate" label="正常" />
                <ElOption value="major" label="困难" />
                <ElOption value="critical" label="非常困难" />
              </ElSelect>

              <RouterLink v-else-if="column.type === 'link'" 
                :to="`/frontendbasics/detail/${scope.row[Object.keys(scope.row)[0]]}`"
              >
                {{ scope.row[column.prop] || '-' }}
              </RouterLink>

              <span v-else>{{ scope.row[Object.keys(scope.row)[index]] || '-' }}</span>
            </template>
          </ElTableColumn>

          <ElTableColumn v-if="canDelete" width="50">
            <template #default="scope">
              <ElIcon @click="emit('deleteContent', scope.$index)" style="cursor: pointer">
                <Delete />
              </ElIcon>
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