<script setup>
import { reactive } from 'vue'
import { ElInput, ElButton } from 'element-plus';
import BasicTable from '../../../basic/BasicTable/index.vue'
import EditPage from './subComponents/EditPage/index.vue'


const state = reactive({
  showDialog: true
})

const changeShowDialog = (value) => {
  state.showDialog = value
}
</script>

<template>
    <div class="selfHealingStrategy">
        <div class="tableTopLine">
            <el-input></el-input>
            <el-button @click="changeShowDialog(true)">新建策略</el-button>
            <button>222</button>
        </div>
        <div className="content">
            <BasicTable
              :data="[]"
            />
        </div>
        <EditPage
          :state='state'
          :changeShowDialog="changeShowDialog"
        />
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