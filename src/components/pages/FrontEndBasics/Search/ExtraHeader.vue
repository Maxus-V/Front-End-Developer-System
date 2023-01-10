<script setup>
import { ref, reactive } from 'vue';
import { ElTooltip, ElButton, ElIcon, ElDialog, ElInput, ElEmpty, ElCheckbox } from 'element-plus';
import { Filter, Search } from '@element-plus/icons-vue';

import FilterFields from './FilterFields.vue';

const state = reactive({
    modalVisible: true
})

const changeModalVisible = (value) => {
    state.modalVisible = value
}
</script>

<template>
    <el-tooltip 
        content="表格字段显示"
        effect="light"
        placement="top"
    >
        <el-button size="small" @click="changeModalVisible(true)">
            <el-icon>
                <Filter />
            </el-icon>
        </el-button>
    </el-tooltip>
    <FilterFields
        :modalVisible="state"
        :changeModalVisible="changeModalVisible"
    />
</template>

<style lang="scss" scoped>

</style>