<script>
import { 
    ElTable,
    ElTableColumn,
    ElPagination
} from 'element-plus'
import { get } from 'lodash';

import { getList } from '../../service';
    
export default {
    components: {
        ElTable,
        ElTableColumn,
        ElPagination
    },
    data() {
        return {
          tableData:[],
          currentPage: 1
        }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    mounted() {
      const res = getList()
      this.tableData = res.data
    }
}
</script>

<template>
    <div class="contentTable">
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
    </div>
</template>

<style lang="scss" scoped>
    .contentTable {
        padding: 10px;
        .el-pagination {
            margin-top: 10px;
            position: absolute;
            right: 0;
        }
    }
</style>