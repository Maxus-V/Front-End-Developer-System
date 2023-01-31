<script setup>
import { inject } from 'vue';

import BasicTable from '@/components/basic/BasicTable/index.vue'

const htmlBaseState = inject('htmlBaseState')
</script>

<template>
    <div class="eventTable">
        <BasicTable 
            :tableColumns="htmlBaseState.columns"
            :tableData="htmlBaseState.data"
            :hasSelection="true"
            :hasPagination="true"
        />
    </div> 
</template>

<style lang="scss" scoped>
.eventTable {
    height: 100%;
}
</style>