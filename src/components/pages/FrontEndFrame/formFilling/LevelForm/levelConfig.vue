<script setup>
import { ref } from 'vue';
import BasicTable from '@/components/basic/BasicTable/index.vue'

const columns = [
    {
        title: '理论难度级别',
        prop: 'level',
    },
    {
        title: '实际难度级别',
        prop: 'originalAlertLevel',
        type: 'select',
    },
]
const data = ref([
    {
        level: 'OK',
        originalAlertLevel: 'ok',
    },
    {
        level: 'Minor',
        originalAlertLevel: 'minor',
    },
    {
        level: 'Moderate',
        originalAlertLevel: 'moderate',
    },
    {
        level: 'Major',
        originalAlertLevel: 'major',
    },
    {
        level: 'Critical',
        originalAlertLevel: 'critical',
    },
])

</script>

<template>
    <BasicTable 
        :tableColumns="columns"
        :tableData="data"
    />
</template>

<style lang="scss" scoped>

</style>