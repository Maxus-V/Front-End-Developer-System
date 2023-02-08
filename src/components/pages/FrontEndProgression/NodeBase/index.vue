<script setup>
import { ref, reactive } from 'vue'
import { ElTabs, ElTabPane, ElButton, ElSelect, ElOption } from 'element-plus';

import EditPage from './EditPage.vue'
import BasicTable from '@/components/basic/BasicTable/index.vue'

const modalVisible = ref(false)

const nodeBaseState = reactive({
  seletedStatus: "",
})

const changeModalVisible = (value) => {
  modalVisible.value = value
}
</script>

<template>
  <div class="fieldTemplateList">
    <ElTabs>
      <ElTabPane label="数据导入">
        <div class="fieldTemplateWrapper">
          <div class="listHeader">
            <div class="settingHeader">
              <div class="left">
                <div class="conditions">
                  <ElSelect 
                    v-model="nodeBaseState.seletedStatus"
                    placeholder="请选择状态"
                    clearable
                  >
                    <ElOption value="success" label="成功"/>
                    <ElOption value="failure" label="失败"/>
                  </ElSelect>
                </div>
              </div>
              <div class="right">
                <div class="extraButton">
                  <ElButton type="primary" @click="changeModalVisible(true)">
                    新建导入任务
                  </ElButton> 
                </div>
              </div>
            </div>
          </div>
          <div class="content">
            <BasicTable />
          </div>
        </div>
      </ElTabPane>
      <ElTabPane label="事件生成">
        <BasicTable />
      </ElTabPane>
    </ElTabs>
    <EditPage 
      :modalVisible="modalVisible"
      @changeModalVisible="changeModalVisible"
    />
  </div>
</template>

<style lang="scss" scoped>
.fieldTemplateList {
    height: 100%;
    background: white;
    position: relative;
    box-sizing: border-box;

    .settingHeader {
      padding: 0px;
      display: flex;
      justify-content: space-between;
      margin: 0 10px 0;
    }

    .el-tabs {
      height: 100%;
      margin: 0 10px 0;

        .fieldTemplateWrapper {
          height: 100%;
        }
    }

    .extraButton {
      display: flex;

      .importTemplate {
        overflow: hidden;
        margin-right: 16px;
        // width: 100px;
        width: auto;
        background-color: white;

        img {
          transform: translateY(-60px);
          filter: drop-shadow(black 0 60px);
        }
      }

      .createTemplate {
        // width: 100px;
        width: auto;
        background-color: white;
        color: #ffffff;
      }

    }

    .conditions {
      display: flex;
      flex-direction: row;
      align-items: center;

      .queryName {
        width: 200px;
        flex-shrink: 0;
        margin-right: 4px;
      }
    }

    .content {
      height: 100%;
      background-color: white;

      .templateTable {
        height: 100%;
        position: relative;
      }

      .link {
        color: white;
        cursor: pointer;
      }

      .templateName {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .icon-file {
      width: 16px;
      height: 16px;
    //   background: url("../assets/images/file.svg") no-repeat;
      display: inline-block;
      vertical-align: middle;
    }

    .tableWidgets {
      width: 60px;
    }
  }
</style>