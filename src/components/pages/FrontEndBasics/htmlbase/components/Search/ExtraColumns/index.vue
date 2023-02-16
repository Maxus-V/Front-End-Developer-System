<script setup>
import { ref } from 'vue'
import { ElButton, ElIcon, ElDialog } from 'element-plus'
import { Plus } from '@element-plus/icons-vue';

import FilterFields from "@/components/pages/FrontEndBasics/HtmlBase/components/Search/ExtraHeader/FilterFields/index.vue" 
</script>

<template>
    <div class="extraColumns">
        <div class="customScrollBar">
            <div class="content">

            </div>
        </div>
        <div class="footer">
            <div class="leftFooter">
                <FilterFields :useText="true" />
            </div>
            <div class="rightFooter">
                <ElButton>重置</ElButton>
                <ElButton type="primary">查询</ElButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.extraColumns {
    background: transparent;
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