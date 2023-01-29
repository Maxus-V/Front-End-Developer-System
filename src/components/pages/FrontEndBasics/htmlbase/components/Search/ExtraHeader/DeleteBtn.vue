<script setup>
import { ElTooltip, ElButton, ElIcon } from 'element-plus';
import { Delete } from '@element-plus/icons-vue';

const ids = [1]

const confirmDelete = () => {
    deleteList()
}
const deleteList = () => {
    console.log('删除的异步操作')
}
</script>

<template>
    <ElTooltip content="批量删除" effect="light" placement="top">
        <ElButton 
            type="primary" 
            class="download" 
            @click="confirmDelete" 
            :disabled="!ids.length" 
            size="small"
        >
            <ElIcon><Delete/></ElIcon>
        </ElButton>
    </ElTooltip>
</template>

<style lang="scss" scoped>
</style>