<script setup>
import { ref, reactive } from 'vue'
import { ElTable, ElPagination, ElEmpty, ElTableColumn } from 'element-plus';

const props = defineProps({
    state: Object
})

const { state } = props
const { columns, data } = state

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
const handleSelectionChange = (val) => {
    console.log('val', val)
}

</script>

<template>
    <div class="eventTable">
        <div class="basicTable">
            <div class="tableItem">
                <ElTable
                    :data="data"
                    @selection-change="handleSelectionChange"
                >   
                    <ElTableColumn type="selection"/>
                    <ElTableColumn v-for="column in columns" 
                        :prop="column.prop" 
                        :label="column.title"
                    >
                        <template #default="scope">
                            <RouterLink v-if="column.prop === 'incidentNameText'" :to="'htmlbase/' + scope.row.seriNum">
                                {{ scope.row[column.prop] || '-' }}
                            </RouterLink>
                            <div v-else>{{ scope.row[column.prop] || '-' }}</div>
                        </template>
                    </ElTableColumn>
                    <template #empty>
                        <ElEmpty  description="暂无数据" />
                    </template>
                </ElTable>
                
            </div>
            <div class="paginationItem">
                <ElPagination
                    :total="tableState.total"
                    layout="sizes, prev, pager, next, jumper"
                    :page-sizes="[10, 30, 50, 100]"
                    @size-change="handleSizeChange"
                    background
                    :current-page="tableState.currentPage"
                    @current-change="handleCurrentChange"
                    :pager-count="5"
                >
                </ElPagination>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.eventTable {
    height: 100%;
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
}
</style>