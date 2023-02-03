<script setup>
import BasicTable from '@/components/basic/BasicTable/index.vue'
import { ElIcon } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';

const columns = [
    {
        title: '事件中心字段名称',
        prop: 'fieldDescription',
    },
    {
        title: '事件中心参数',
        prop: 'eventField',
    },
    {
        title: '告警源消息字段',
        prop: 'originalField',
    },
    {
        title: '操作',
        prop: 'operate',
    },
]
const data = [
    {
        fieldDescription: '告警对象',
        eventField: 'targetname',
        originalField: 'targetname',
        operate: '',
    },
    {
        fieldDescription: '检查项',
        eventField: 'check',
        originalField: 'check',
        operate: '',
    },
    {
        fieldDescription: '告警详情',
        eventField: 'description',
        originalField: 'description',
        operate: '',
    },
    {
        fieldDescription: '告警等级',
        eventField: 'level',
        originalField: 'level',
        operate: '',
    },
]
</script>

<template>
    <div class="reflect">
        <BasicTable 
            :tableColumns="columns"
            :tableData="data"
        />
        <span class="addBtn2">
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