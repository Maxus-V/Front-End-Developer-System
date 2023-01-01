<script setup>
import { ElTable, ElTableColumn, ElPagination, ElEmpty } from 'element-plus';
const props = defineProps({
  data: Array
})

const tableData = props.data

// const tableData = [
//   {
//     date: '2016-05-03',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-02',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-04',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
//   {
//     date: '2016-05-01',
//     name: 'Tom',
//     address: 'No. 189, Grove St, Los Angeles',
//   },
// ]

</script>

<template>
    <div class="basicTable" v-if="tableData.length">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
        <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="50"
            class="mt-4"
        />
    </div>
    <div class="noData">
      <el-empty description="暂无数据" />
    </div>
</template>

<style>

</style>