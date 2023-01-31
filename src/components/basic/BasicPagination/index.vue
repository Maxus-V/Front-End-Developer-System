<script setup>
import { ElSelect, ElOption, ElIcon } from 'element-plus';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';

const pageSizeRange = [10, 20, 30]
</script>

<template>
    <div class="basicPagination" style="position: absolute;">
        <span class="left">
            每页
            <ElSelect>
                <ElOption v-for="(item, index) in pageSizeRange" :key="index" :value="item">
                    {{ `${item}条` }}
                </ElOption>
            </ElSelect>
            共{{ 2 }}条
        </span>
        <div class="right">
            <ElIcon><ArrowLeft /></ElIcon>
            <span>
                2
            </span>
            <ElIcon><ArrowRight /></ElIcon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.basicPagination {
    display: flex;
    width: 100%;
    height: 42px;
    padding: 5px 4px;
    line-height: 32px;
    position: absolute;
    bottom: 0;
    font-size: 12px;

    .left {
      position: absolute;
      left: 4px;
      height: 32px;
      line-height: 32px;

      .aevt-select-focused,
      .aevt-select-open,
      .aevt-select-enabled {
        border: none;
        background: none;
        box-shadow: none;

        .aevt-select-selection {
          border: none;
          background: none;
          box-shadow: none;
        }
      }

      .aevt-select-selection__rendered {
        //margin: 0 5px;
      }

      .aevt-select-selection-selected-value {
        font-size: 16px  !important;
        margin-right: 8px;
      }
    }

    .right {
      right: 4px;
      position: absolute;
      height: 32px;
      line-height: 32px;

      .arrow {
        cursor: pointer;
        width: 30px;
        line-height: 32px;

        &:hover {
          color: #2F84FB;
        }
      }

      .currentPage {
        //color: #2F84FB;
        background-color: skyblue;
        color: #ffffff;
        border-radius: 0.5 * 4px;
        ;

        &:hover {
          color: #ffffff !important;
        }
      }

      .pageItem {
        display: inline-block;
        min-width: 30px;
        box-sizing: border-box;
        padding: 0 6px;
        text-align: center;
        height: 32px;
        cursor: pointer;
        //user-select: none;

        &:hover {
          color: skyblue;
        }
      }
    }
  }
</style>