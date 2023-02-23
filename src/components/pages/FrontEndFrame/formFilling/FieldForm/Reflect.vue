<script setup>
import { ElIcon } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';

import BasicTable from '@/components/basic/BasicTable/index.vue'

const props = defineProps({
    fieldFormState: Object,
})

const columns = [
    {
        title: '知识名称',
        prop: 'fieldDescription',
        type: 'input',
    },
    {
        title: '知识分类',
        prop: 'eventField',
        type: 'input',
    },
    {
        title: '知识来源',
        prop: 'originalField',
        type: 'input',
    },
    {
        title: '额外操作',
        prop: 'operate',
        type: 'input',
    },
]

const addContent = () => {
    props.fieldFormState.initData.push({
        fieldDescription: '告警对象',
        eventField: 'targetname',
        originalField: 'targetname',
        operate: '',
    })
}
const deleteContent = (value) => {
    props.fieldFormState.initData.splice(value, 1)
}
</script>

<template>
    <div class="reflect">
        <BasicTable 
            :tableColumns="columns"
            :tableData="fieldFormState.initData"
            :canDelete="true"
            @deleteContent="deleteContent"
        />
        <span class="addBtn2" @click="addContent">
            <ElIcon><Plus /></ElIcon>
            <span>添加字段</span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
.reflect {
    .addBtn {
        width: 100%;
        height: 32px;
        margin-top: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px dashed #008DFF;
        border-radius: 4px;
        cursor: pointer;
    }
    .addBtn2 {
        color: #008DFF;
        line-height: 48px;
        cursor: pointer;
    }
    }
</style>