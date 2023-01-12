<script setup>
import { ref, reactive } from 'vue'
import { ElTabs, ElTabPane, ElButton, ElSelect, ElOption, ElInput, ElTable, ElTableColumn } from 'element-plus';
import { Search } from '@element-plus/icons-vue'
import EditPage from './EditPage.vue'

const state = reactive({
    taskType: "uploadData",
    selectType: "",
    inputValue: "",
    isView: false,
    columnState:[
      {
        title: '任务名称',
        prop: 'title'
      },
      {
        title: '状态',
        prop: 'status'
      },
      {
        title: '告警源',
        prop: 'alertSource'
      },
      {
        title: '创建时间',
        prop: 'createTime',
        sortable: true
      },
      {
        title: '数据导入',
        prop: 'operation'
      },
    ],
    testData: [
      {
        title: 'a',
        status: 'b',
        alertSource: 'c',
        createTime: 'd',
        operation: 'e'
      }
    ]
})

const onTypeChange = () => {
    console.log('发送请求')
}

const onCreate = () => {
    console.log('创建')
    state.isView = true
}

const onChange = () => {
    console.log('发送请求')
}

const changeQueryName = () => {
    console.log('changeQueryName')
}

const deleteBatch = () => {
    console.log('删除')
}

const formatter = (row, column, cellValue, index) => {
  if (column.property === 'createTime') {
    return cellValue + '1'
  }
  return cellValue
}

</script>

<template>
    <div class="fieldTemplateList">
        <el-tabs v-model="state.taskType" @tab-click="onTypeChange">
            <el-tab-pane label="数据导入" name="uploadData">
                <div class="fieldTemplateWrapper">
                    <div class="listHeader">
                        <div class="settingHeader">
                            <div class="left">
                                <div class="conditions">
                                    <el-select 
                                        v-model="state.selectType" 
                                        @change="onChange"
                                        placeholder="请选择状态"
                                        style="width: 200px; margin-right: 10px;"
                                        clearable
                                    >
                                        <el-option value="success" label="成功"></el-option>
                                        <el-option value="error" label="失败"></el-option>
                                    </el-select>
                                    <el-input
                                        v-model="state.inputValue"
                                        placeholder="请输入任务名称"
                                        class="queryName"
                                        @change="changeQueryName"
                                        clearable
                                        :suffix-icon="Search"
                                    />
                                    <div>
                                        <el-button @click="deleteBatch">
                                            删除
                                        </el-button>
                                        <span style="line-height: 32px; margin: 0 20px 0 10px;">
                                            已选择0条
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="extraButton">
                                    <el-button type="primary" @click="onCreate">
                                        {{ state.taskType === "uploadData" ? "新建导入任务" : "新建事件生成任务" }}
                                    </el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                      <el-table :data="state.testData">
                        <el-table-column v-for="column in state.columnState" 
                          :label="column.title"
                          :prop="column.prop"
                          :sortable="column.sortable"
                          :formatter="formatter"
                        />
                      </el-table>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="事件生成" name="generateIncidents">
              <div class="fieldTemplateWrapper">
                    <div class="listHeader">
                        <div class="settingHeader">
                            <div class="left">
                                <div class="conditions">
                                    <el-select 
                                        v-model="state.selectType" 
                                        @change="onChange"
                                        placeholder="请选择状态"
                                        style="width: 200px; margin-right: 10px;"
                                        clearable
                                    >
                                        <el-option value="success" label="成功"></el-option>
                                        <el-option value="error" label="失败"></el-option>
                                    </el-select>
                                    <el-input
                                        v-model="state.inputValue"
                                        placeholder="请输入任务名称"
                                        class="queryName"
                                        @change="changeQueryName"
                                        clearable
                                        :suffix-icon="Search"
                                    />
                                    <div>
                                        <el-button @click="deleteBatch">
                                            删除
                                        </el-button>
                                        <span style="line-height: 32px; margin: 0 20px 0 10px;">
                                            已选择0条
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="extraButton">
                                    <el-button type="primary" @click="onCreate">
                                        {{ state.taskType === "uploadData" ? "新建导入任务" : "新建事件生成任务" }}
                                    </el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                      <el-table/>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
        <EditPage
          :state="state"
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