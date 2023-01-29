<script setup>
import { ref, reactive, provide } from 'vue'
import { ElIcon } from 'element-plus'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'

import Tabs from './Tabs/index.vue'
import LeftHeader from './LeftHeader/index.vue'
import Handler from './Handler/index.vue'
import ExtraHeader from './ExtraHeader/index.vue'
import ExtraColumns from './ExtraColumns/index.vue'

import { getList } from '../../service'
import { useTable } from '../../utils'
import { typeEnum, statusEnum } from '../../config/constants'

const type = 'ownEvent'
const hasExtraColumns = ref(false)

const searchState = reactive({
    currentCategory: "PENDING",
})
provide('searchState', searchState)

const modifyMethods = useTable(getList, Object.assign({}, {
    type: typeEnum[type],
    processStatusList: [statusEnum[type]],
}))
provide('modifyMethods', modifyMethods)

const changeCurrentCategory = (type) => {
    searchState.currentCategory = type
}
const changeHasExtraColumns = () => {
    hasExtraColumns.value = !hasExtraColumns.value
}
</script>

<template>
    <div class="search">
        <Tabs 
            :changeCurrentCategory="changeCurrentCategory"
        />
        <div class="header">
            <div class="leftHeader">
                <LeftHeader />
                <div class="highSearch" @click="changeHasExtraColumns">
                    <span class="label">高级搜索</span>
                    <ElIcon><component :is="hasExtraColumns? ArrowUp : ArrowDown" /></ElIcon>
                </div>
                <Handler />
            </div>
            <div class="rightHeader">
                <ExtraHeader />
            </div>
        </div>
        <div v-show="hasExtraColumns">
            <ExtraColumns />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.search {
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 12px;
    .event-action {
      margin-top: 5px;
      .action {
        line-height: normal;
        border-bottom: 1px solid black;
        .default {
          display: inline-block;
          margin: 0 32px 0 0px;
          //border: 1px solid #D7D8DC;
          height: 35px;
          line-height: 35px;
          cursor: pointer;
          font-size: 14px;

        }
        .active {
          color: skyblue;
          border-bottom: 2px solid skyblue;
        }
      }
    }
    .header {
      width: 100%;
      height: 64px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      //padding: 0 20px;
      .highSearch {
        color: #008DFF;
        cursor: pointer;
        margin-right: 10px;
        .label {
          margin-right: 2px;
        }
        margin-left: 12px;
      }
      .leftHeader {
        display: flex;
        align-items: center;
        .handleZone .basicBtn {
          margin: 0 2px;
          display: inline-block;
        }
        .handleZone .smallScreen {
          vertical-align: bottom;
        }
        .selectCount {
          margin-left: 10px;
        }
      }
    }
    .extraColumns {
      background: white;
      padding: 16px;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
      margin-top: 16px;
      .content {
        display: flex;
        flex-wrap: wrap;
        .searchItem {
          min-width: 300px;
          display: flex;
          margin: 0 12px 12px 12px;
          .itemTitle {
            width: 30%;
            text-align: right;
            line-height: 32px;
            margin-right: 12px;
          }
          .formItem {
          }
        }
        .ciSelect {
          //width: 500px;
          display: flex;
          flex-direction: row;
          height: 32px;
          margin-bottom: 10px;
          .itemTitle {
            width: 100px;
            line-height: 32px;
            text-align: right;
            margin-right: 12px;
          }
          .treeSelect {
            width: 150px;
            margin-right: 12px;
          }
          .select {
            width: 120px;
          }
          .input {
            width: 123px;
          }
        }
        .labelColumn {
          height: 32px;
          width: 100%;
          display: flex;
          margin-bottom: 12px;
          .itemTitle {
            width: 100px;
            line-height: 32px;
            text-align: right;
            margin-right: 12px;
          }
          .itemLabel {
            display: flex;
            width: calc(100% - 100px);
            .labelItem {
              display: flex;
              flex-direction: row;
              margin-right: 32px;
              .select {
                width: 120px;
              }
              .input {
                width: 123px;
              }
            }
          }
        }
      }
      .footer {
        width: 100%;
        height: 32px;
        line-height: 32px;
        display: flex;
        justify-content: space-between;
        .leftFooter {
          .addBtn {
            color: #008DFF;
            border: 1px solid #008DFF;
          }
        }
        .searchBtn {
          margin-right: 12px;
        }
      }
    }
  }
</style>