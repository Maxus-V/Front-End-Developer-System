<script setup>
import { ElTable, ElTableColumn } from 'element-plus';

const dataSource = [
    {
        level: 'targetName',
        desc: '告警的对象',
    },
    {
        level: 'check',
        desc: '告警指标描述',
    },
    {
        level: 'description',
        desc: '告警详情',
    },
    {
        level: 'level',
        desc: '分为5种级别：正常：OK，提示：Minor，次要：Moderate，严重： Major，灾难：Critical',
    },
    {
        level: '[additional_attributes]',
        desc: '自定义属性值，可以任意的添加属性字段，扩展字段名可自定义,必须符合json格式，且键与值要加双引号',
    },
]
const columns = [
    {
        title: '参数',
        dataIndex: 'level',
        width: '40%',
    },
    {
        title: '备注',
        dataIndex: 'desc',
        width: '60%',
    },
]
</script>

<template>
    <ElTable :data="dataSource">
        <ElTableColumn v-for="column in columns" 
            :key="column.dataIndex"
            :prop="column.dataIndex"
            :label="column.title"
            :min-width="column.width"
        />
    </ElTable>
</template>

<style lang="scss" scoped>
</style>