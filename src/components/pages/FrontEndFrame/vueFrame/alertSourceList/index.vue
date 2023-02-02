<script setup>
import { ElTabs, ElTabPane } from 'element-plus';

import SearchBar from './SearchBar.vue'
import BasicTable from '@/components/basic/BasicTable/index.vue'
</script>

<template>
    <div class="alertSourceList">
        <ElTabs>
            <ElTabPane label="告警源列表">
                <div class="content">
                    <SearchBar />
                    <BasicTable />
                </div>
            </ElTabPane>
            <ElTabPane label="回收列表">
                eee
            </ElTabPane>
        </ElTabs>
    </div>
</template>

<style lang="scss" scoped>
</style>