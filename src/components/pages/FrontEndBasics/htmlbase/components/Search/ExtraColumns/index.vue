<script setup>
import { ElButton, ElIcon } from 'element-plus'
import { Plus } from '@element-plus/icons-vue';

</script>

<template>
    <div class="extraColumns">
        <div class="customScrollBar">
            <div class="content">

            </div>
        </div>
        <div class="footer">
            <div class="leftFooter">
                <ElButton>
                    <ElIcon><Plus /></ElIcon>
                    <span>筛选条件</span>
                </ElButton>
            </div>
            <div class="rightFooter">
                <ElButton type="primary">查询</ElButton>
                <ElButton>重置</ElButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.extraColumns {
    background: transparent;
    // border-top: 1px solid rgba(0, 0, 0, 0.1);
    // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 16px;
    padding: 16px;
    .footer {
        width: 100%;
        height: 32px;
        line-height: 32px;
        display: flex;
        justify-content: space-between;
        .leftFooter {
            .el-button {
                background: transparent;
                border: none;
            }
        }
    }
}
</style>