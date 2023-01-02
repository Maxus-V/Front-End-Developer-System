<script setup>
import { ElIcon, ElCheckbox, ElTooltip } from 'element-plus';
import { ArrowRightBold } from '@element-plus/icons-vue';
</script>

<template>
    <div class="nodeContent">
        <div class="switchWrapper">
            <el-icon><ArrowRightBold /></el-icon>
        </div>
        <div class="checkBoxWrapper">
            <el-checkbox/>
        </div>
        <el-tooltip effect="light" content="name" placement="top">
            <div class="label">name</div>
        </el-tooltip>
    </div>
</template>

<style lang="scss" scoped>
.basicTreeNode {
      width: 100%;
      display: flex;
      flex-direction: column;

      .nodeContent {
        width: 100%;
        height: 32px;
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;

        .switchWrapper {
          width: 24px;
          text-align: left;
        }

        .checkBoxWrapper {
          width: 32px;
          text-align: left;
        }

        .label {
          width: 60%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      .hasChild {
        font-weight: 800;
      }
    }
</style>