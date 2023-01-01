<script setup>
import { ref } from 'vue';
import { ElTooltip, ElButton, ElIcon, ElDialog, ElInput, ElEmpty, ElCheckbox } from 'element-plus';
import { Filter, Search } from '@element-plus/icons-vue';

let modalVisible = ref(true)

const changeModalVisible = () => {
    modalVisible = !modalVisible
}
</script>

<template>
    <el-tooltip 
        content="表格字段显示"
        effect="light"
        placement="top"
    >
        <el-button size="small" @click="changeModalVisible()">
            <el-icon>
                <Filter />
            </el-icon>
        </el-button>
    </el-tooltip>
    <el-dialog
        v-model="modalVisible"
        title="表格字段显示"
    >
        <div class="wrapper">
            <div class="treeWrapper">
                <div class="searchInput">
                    <el-input :suffix-icon="Search" placeholder="请输入关键字"/>
                </div>
                <div class="content">
                    <span class="checkBoxWrapper">
                        <el-checkbox/>
                    </span>
                    <span class="label">
                        hello
                    </span>
                </div>
            </div>
            <div class="listWrapper">
                <div class="countTitle">
                    已添加n条
                </div>
                <el-empty description="暂无数据"/>
            </div>
        </div>
        <template #footer>
        <span>
            <el-button @click="modalVisible = false">取消</el-button>
            <el-button type="primary" @click="modalVisible = false">
                确定
            </el-button>
        </span>
        </template>
    </el-dialog>
</template>

<style lang="scss" scoped>
.wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;

        .treeWrapper {
          width: 50%;
          height: 100%;
          padding: 20px;

          .searchInput {
            width: 100%;
            height: 32px;
            box-sizing: border-box;
            //padding: 0 12px;
          }

          .searchModalTree {
            width: 100%;
            height: 100%;
          }
        }

        .listWrapper {
          width: 50%;
          height: 100%;
          padding: 20px;
          border-left: 1px solid rgba(0, 0, 0, 0.06);

          .countTitle {
            height: 32px;
            line-height: 32px;
            width: 100%;
            box-sizing: border-box;
            padding: 0 12px;
          }

          .DraggableList {
            width: 100%;
            height: 100%;

            .draggableItem {
              width: 100%;
              height: 32px;
              box-sizing: border-box;
              padding: 0 12px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .left {
                img {
                  //display: none;
                  //
                  //&:hover {
                  //  display: block;
                  //}
                }
              }

              &:hover {
                background-color: white;
              }
            }
          }
        }
      }
</style>