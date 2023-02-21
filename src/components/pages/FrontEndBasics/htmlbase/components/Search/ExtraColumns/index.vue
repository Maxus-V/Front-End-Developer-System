<script setup>
import { inject, ref, computed, reactive } from 'vue'
import { ElForm, ElFormItem, ElRow, ElCol, ElInput, ElButton } from 'element-plus'

import FilterFields from "@/components/pages/FrontEndBasics/HtmlBase/components/Search/ExtraHeader/FilterFields/index.vue" 

const text = "请输入"

const htmlBaseState = inject('htmlBaseState')

const formRef = ref(null)

const tempArr = computed(() => htmlBaseState.columns.map(item => item))

const form = reactive({
})

const resetForm = (ruleFormRef) => {
    if (!ruleFormRef) return
    ruleFormRef.resetFields()
}
const onSearch = () => {
    console.log('参数为', form, '查询中......')
}
</script>

<template>
    <div class="extraColumns">
        <div class="customScrollBar">
            <div class="content">
                <ElForm ref="formRef" :model="form">
                    <ElRow>
                        <ElCol :span="8"  v-for="item in tempArr">
                            <ElFormItem :label="item.title" label-width="120">
                                <ElInput v-model="form[item.prop]" :placeholder="text + item.title" />
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
                <!-- <ElButton @click="resetForm(formRef)">重置</ElButton> -->
                <ElButton type="primary" @click="onSearch">查询</ElButton>
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