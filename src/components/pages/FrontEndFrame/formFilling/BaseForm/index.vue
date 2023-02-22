<script setup>
import { ElForm,ElFormItem, ElInput } from 'element-plus';

const props = defineProps({
    baseFormState: Object
})
</script>

<template>
    <div class="baseForm">
        <ElForm :model="baseFormState" label-width="120px">
            <ElFormItem label="知识名称：">
                <ElInput v-model="baseFormState.name" placeholder="请输入知识名称" />
            </ElFormItem>
            <ElFormItem label="知识来源：">
                <ElInput v-model="baseFormState.source" placeholder="请输入知识来源" />
            </ElFormItem>
            <ElFormItem label="知识类别：">
                <ElInput v-model="baseFormState.category" placeholder="请输入知识类别" />
            </ElFormItem>
            <ElFormItem label="知识分类：">
                <ElInput v-model="baseFormState.classify" placeholder="请输入知识分类" />
            </ElFormItem>
            <ElFormItem label="描述：">
                <ElInput v-model="baseFormState.description" type="textarea" placeholder="请输入描述内容" />
            </ElFormItem>
        </ElForm>
    </div>
</template>