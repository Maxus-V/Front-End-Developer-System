<script setup>
import { ref, reactive } from 'vue';
import { ElTooltip, ElButton, ElIcon, ElDialog, ElInput, ElEmpty, ElCheckbox } from 'element-plus';
import { Filter, Search } from '@element-plus/icons-vue';

import FilterFields from './FilterFields.vue';

let modalVisible = ref(true)

const changeModalVisible = () => {
    console.log('en')
    modalVisible = !modalVisible
}
</script>

<template>
    <el-tooltip 
        content="表格字段显示"
        effect="light"
        placement="top"
    >
        <el-button size="small" @click="changeModalVisible()">
            <el-icon>
                <Filter />
            </el-icon>
        </el-button>
    </el-tooltip>
    <FilterFields
        :modalVisible="modalVisible"
        :changeModalVisible="changeModalVisible"
    />
</template>

<style lang="scss" scoped>

</style>