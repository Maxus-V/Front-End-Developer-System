<script setup>
import { ElForm,ElFormItem, ElInput } from 'element-plus';

</script>

<template>
    <div class="baseForm">
        <ElForm label-width="120px">
            <ElFormItem label="知识来源：">
                <ElInput placeholder="请输入知识来源" />
            </ElFormItem>
            <ElFormItem label="服务器端口：">
                <ElInput placeholder="请输入服务器和端口" />
            </ElFormItem>
            <ElFormItem label="Topic：">
                <ElInput placeholder="请输入topic" />
            </ElFormItem>
            <ElFormItem label="GroupId：">
                <ElInput placeholder="请输入groupid" />
            </ElFormItem>
            <ElFormItem label="描述：">
                <ElInput type="textarea" placeholder="请输入告警源描述内容" />
            </ElFormItem>
        </ElForm>
    </div>
</template>

<style lang="scss" scoped>

</style>