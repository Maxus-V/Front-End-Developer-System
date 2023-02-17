<script setup>
import { inject, computed } from 'vue'
import { ElForm, ElFormItem, ElRow, ElCol, ElInput, ElButton } from 'element-plus'

import FilterFields from "@/components/pages/FrontEndBasics/HtmlBase/components/Search/ExtraHeader/FilterFields/index.vue" 

const htmlBaseState = inject('htmlBaseState')
const tempArr = computed(() => htmlBaseState.columns.map(item => item.title))
</script>

<template>
    <div class="extraColumns">
        <div class="customScrollBar">
            <div class="content">
                <ElForm>
                    <ElRow>
                        <ElCol :span="8"  v-for="item in tempArr">
                            <ElFormItem :label="item" label-width="120">
                                <ElInput :placeholder="item" />
                            </ElFormItem>
                        </ElCol>
                    </ElRow>
                </ElForm>
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