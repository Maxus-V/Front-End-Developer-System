<script setup>
import { ElSelect, ElOption, ElDatePicker } from 'element-plus';
import BasicTable from '@/components/basic/BasicTable/index.vue'
</script>

<template>
    <div class="selfHealingStrategy">
        <div class="tableTopLine">
            <div class="searchHeader">
                <el-select>
                    <el-option value="1">
                        1
                    </el-option>
                    <el-option value="2">
                        2
                    </el-option>
                </el-select>
                <el-date-picker/>
            </div>
        </div>
        <div className="content">
            <BasicTable
              :data="[]"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.selfHealingRecord {
    .tableTopLine {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: absolute;
      top: 5px;
      right: 0;

      .searchHeader {
        display: flex;
        flex-direction: row;

        .aevt-select {
          width: 150px;
          margin-right: 10px;
        }

        .input {
          width: 150px;
          margin-left: 10px;
        }
      }

      .addBtn {
        margin-left: 30px;
      }
    }
  }
</style>