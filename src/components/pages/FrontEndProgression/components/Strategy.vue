<script setup>
import { ElInput, ElButton } from 'element-plus';
import BasicTable from '../../../basic/BasicTable/index.vue'
import EditPage from './subComponents/EditPage/index.vue'
</script>

<template>
    <div class="selfHealingStrategy">
        <div class="tableTopLine">
            <el-input></el-input>
            <el-button>新建策略</el-button>
        </div>
        <div className="content">
            <BasicTable
              :data="[]"
            />
        </div>
        <EditPage/>
    </div>
</template>

<style lang="scss" scoped>
.selfHealingStrategy {
    .tableTopLine {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: absolute;
      top: 10px;
      right: 0;

      .addBtn {
        margin-left: 30px;
      }
    }
  }
</style>