<script setup>
import BasicTable from '@/components/basic/BasicTable/index.vue'

const columns = [
    {
        title: '理论难度级别',
        prop: 'level',
    },
    {
        title: '实际难度级别',
        prop: 'originalAlertLevel',
    },
]
const data = [
    {
        level: '非常简单 MINOR',
        originalAlertLevel: '233',
    },
    {
        level: '简单 MODERATE',
        originalAlertLevel: '233',
    },
    {
        level: '正常 MAJOR',
        originalAlertLevel: '233',
    },
    {
        level: '困难 CRITICAL',
        originalAlertLevel: '233',
    },
    {
        level: '非常困难 OK',
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