<script setup>
import { inject, ref } from 'vue'
import { ElForm, ElFormItem, ElRadioGroup, ElRadio } from 'element-plus';

import Reflect from './Reflect.vue';
import TemplateForm from './TemplateForm.vue';

const fieldFormState = inject('formFillingState').fieldFormState

const modalVisible = ref(false)

const changeModalVisible = (value) => {
    modalVisible.value = value
}
</script>

<template>
    <div class="fieldForm">
        <ElForm>
            <ElFormItem label="难度系数：" >
                <ElRadioGroup v-model="fieldFormState.radioValue">
                    <ElRadio label="customize">简单模式</ElRadio>
                    <ElRadio label="template">复杂模式</ElRadio>
                </ElRadioGroup>
            </ElFormItem>
            <ElFormItem>
                <div class="saveAsTemplate">
                    <span class="saveAsTemplateTitle">简单模式</span>
                    <span class="saveBtn" @click="changeModalVisible(true)">保存为模板</span>
                </div>
                <div style="width: 90%;">
                    <Reflect :fieldFormState="fieldFormState" />
                </div>
            </ElFormItem>
        </ElForm>
        <TemplateForm 
            :modalVisible="modalVisible"
            @changeModalVisible="changeModalVisible"
        />
    </div>
</template>

<style lang="scss" scoped>
.fieldForm {
    height: 100%;
    padding: 0 24px;
    .saveAsTemplate {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .saveAsTemplateTitle {
        font-size: 16px;
        font-weight: 800;
    }
    .saveBtn {
        color: #008DFF;
        cursor: pointer;
    }
    }
}
</style>