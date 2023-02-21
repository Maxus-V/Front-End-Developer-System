<script setup>
import { inject, ref, computed, reactive } from 'vue'
import { ElMessage, ElForm, ElFormItem, ElRow, ElCol, ElInput, ElButton } from 'element-plus'

import FilterFields from "@/components/pages/FrontEndBasics/HtmlBase/components/Search/ExtraHeader/FilterFields/index.vue" 

const text = "请输入"

const htmlBaseState = inject('htmlBaseState')

const ruleFormRef = ref(null)

const tempArr = computed(() => htmlBaseState.columns.map(item => item))

const ruleForm = reactive({
})

const resetForm = (ruleFormRef) => {
    if (!ruleFormRef) return
    ruleFormRef.resetFields()
}
const onSearch = () => {
    ElMessage({
        message: '已查询，可在控制台上查看查询参数',
        type: 'success',
    })
    console.log('查询参数：', form)
}
</script>

<template>
    <div class="extraColumns">
        <div class="customScrollBar">
            <div class="content">
                <ElForm ref="ruleFormRef" :model="ruleForm">
                    <ElRow>
                        <ElCol :span="8"  v-for="item in tempArr">
                            <ElFormItem :label="item.title" label-width="120" :prop="item.prop">
                                <ElInput v-model="ruleForm[item.prop]" :placeholder="text + item.title" />
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
                <ElButton @click="resetForm(ruleFormRef)">重置</ElButton>
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