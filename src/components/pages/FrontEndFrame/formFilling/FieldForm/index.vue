<script setup>
import { ElFormItem, ElRadioGroup, ElRadio } from 'element-plus';

</script>

<template>
    <div class="fieldForm">
        <ElFormItem label="字段配置模式" >
            <ElRadioGroup>
                <ElRadio label="customize">自定义映射关系</ElRadio>
                <ElRadio label="template">关联字段映射规则</ElRadio>
            </ElRadioGroup>
        </ElFormItem>
        <ElFormItem>
            <div class="saveAsTemplate">
                <span class="saveAsTemplateTitle">字段映射</span>
                <span class="saveBtn">保存为模板</span>
            </div>
        </ElFormItem>
    </div>
</template>

<style lang="scss" scoped>

</style>