<script setup>
import BasicTable from '@/components/basic/BasicTable/index.vue'

const columns = [
    {
        title: '事件中心告警级别',
        prop: 'level',
    },
    {
        title: '告警源告警级别',
        prop: 'originalAlertLevel',
    },
]
const data = [
    {
        level: '提示 MINOR',
        originalAlertLevel: '233',
    },
    {
        level: '次要 MODERATE',
        originalAlertLevel: '233',
    },
    {
        level: '严重 MAJOR',
        originalAlertLevel: '233',
    },
    {
        level: '灾难 CRITICAL',
        originalAlertLevel: '233',
    },
    {
        level: '正常 OK',
        originalAlertLevel: '233',
    },
]

</script>

<template>
    <BasicTable 
        :tableColumns="columns"
        :tableData="data"
    />
</template>

<style lang="scss" scoped>

</style>