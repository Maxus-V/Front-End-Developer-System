<script setup>
import { ElButton, ElDialog, ElInput, ElEmpty } from 'element-plus';
import { Search } from '@element-plus/icons-vue';

import BasicTree from '../../../basic/BasicTree/index.vue'

import {publicFields} from '../config/constant'

const props = defineProps({
    modalVisible: Boolean,
    column: Array
})

const column = []

const modalVisible = props.modalVisible

const initSelectedNodes = () => column.sort((x, y) => x.order - y.order).map(item => ({
        name: item.field,
        id: item.field
    }))

const dataSource = publicFields.concat({
            name: '自定义字段',
            id: 'custom',
            children: []
        })

const searchValue = 'searchValue'
</script>

<template>
<el-dialog
        v-model="modalVisible"
        title="表格字段显示"
    >
        <div class="wrapper">
            <div class="treeWrapper">
                <div class="searchInput">
                    <!-- Search -->
                    <el-input 
                        :suffix-icon="Search" 
                        placeholder="请输入关键字"
                    />
                </div>
                <BasicTree
                    :dataSource="dataSource"
                    :searchValue="searchValue"
                />
            </div>
            <!-- DraggableList -->
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