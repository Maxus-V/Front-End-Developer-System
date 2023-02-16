<script setup>
import { inject, reactive, computed } from 'vue';

import BasicTable from '@/components/basic/BasicTable/index.vue'

const htmlBaseState = inject('htmlBaseState')
const modifyMethods = inject('modifyMethods')
const changeRowSelection = inject('changeRowSelection')

const eventTableState = reactive({
    data: computed(() => modifyMethods.tableData.initData.data || []),
    pagination: computed(() => {
        const { conditions: {pageSize, currentPage}, totalPage, count } = modifyMethods.tableData.initData
        return {
            pageSize,
            currentPage,
            totalPage,
            count,
        }
    })
})
</script>

<template>
    <div class="eventTable">
        <BasicTable 
            :tableColumns="htmlBaseState.columns"
            :tableData="eventTableState.data"
            :hasSelection="true"
            :changeSelection="changeRowSelection"
            :hasPagination="false"
            :pagination="eventTableState.pagination"
            :changePagination="modifyMethods.modifyPages"
        />
    </div> 
</template>

<style lang="scss" scoped>
.eventTable {
    height: 100%;
}
</style>