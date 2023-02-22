<script setup>
import { ref } from 'vue'
import { ElIcon } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';

import BasicTable from '@/components/basic/BasicTable/index.vue'

const columns = [
        {
            title: '知识名称',
            prop: 'fieldDescription',
        },
        {
            title: '知识分类',
            prop: 'eventField',
        },
        {
            title: '知识来源',
            prop: 'originalField',
        },
        {
            title: '额外操作',
            prop: 'operate',
        },
    ]

const data = ref([
    {
        fieldDescription: '面向对象',
        eventField: 'targetname',
        originalField: 'targetname',
        operate: '',
    },
    {
        fieldDescription: '是否检查',
        eventField: 'check',
        originalField: 'check',
        operate: '',
    },
    {
        fieldDescription: '详情',
        eventField: 'description',
        originalField: 'description',
        operate: '',
    },
    {
        fieldDescription: '等级',
        eventField: 'level',
        originalField: 'level',
        operate: '',
    },
])

const addContent = () => {
    data.value.push({
        fieldDescription: '告警对象',
        eventField: 'targetname',
        originalField: 'targetname',
        operate: '',
    })
}
</script>

<template>
    <div class="reflect">
        <BasicTable 
            :tableColumns="columns"
            :tableData="data"
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