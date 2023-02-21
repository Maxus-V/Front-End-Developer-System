<script setup>
import { inject } from 'vue';
import { ElTooltip, ElButton, ElIcon, ElMessageBox, ElMessage } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';

const htmlBaseState = inject('htmlBaseState')

const confirmDelete = () => {
    ElMessageBox.confirm("即将批量删除数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    })
    .then(() => {
        deleteList()
     })
    .catch(() => {})
}
const deleteList = () => {
    ElMessage({
        message: '执行删除数据操作',
        type: 'success',
    })
}
</script>

<template>
    <ElTooltip content="批量删除" effect="light" placement="top">
        <ElButton 
            type="primary" 
            class="download" 
            @click="confirmDelete" 
            :disabled="!htmlBaseState.hasRowSelection" 
            size="small"
        >
            <ElIcon><Delete/></ElIcon>
        </ElButton>
    </ElTooltip>
</template>

<style lang="scss" scoped>
</style>