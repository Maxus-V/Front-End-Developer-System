<script setup>
import { ref } from 'vue'
import { ElTable, ElPagination, ElEmpty, ElTableColumn } from 'element-plus';

const props = defineProps({
    state: Object
})

const { state } = props
const { columns, data } = state

const currentPage4 = ref(4)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
  currentPage4.value = val
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
  currentPage4.value = val
}

</script>

<template>
    <div class="eventTable">
        <div class="basicTable">
            <div class="tableItem">
                <ElTable
                    :data="data"
                >   
                    <ElTableColumn v-for="column in columns" 
                        :prop="column.prop" 
                        :label="column.title"
                    >
                        <template #default="scope">
                            <RouterLink v-if="column.prop === 'incidentNameText'" :to="column.goto">
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
                <!-- <ElPagination
                    :current-page="currentPage4"
                    :page-sizes="[10, 30, 50, 100]"
                    :pager-count="2"
                    background
                    layout="slot,sizes, prev, pager, next, jumper"
                    :total="400"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    total="1000"
                >
                    <div>
                        共 n 条
                    </div>
                </ElPagination> -->
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
        border: 1px solid red;
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