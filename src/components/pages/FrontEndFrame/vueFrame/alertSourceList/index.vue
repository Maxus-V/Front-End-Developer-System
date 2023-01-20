<script setup>
import { ref } from 'vue'
import { ElTabs, ElTabPane, ElTable } from 'element-plus';

import SearchBar from './SearchBar.vue'

const activeName = ref('0')

</script>

<template>
    <div class="alertSourceList">
        <ElTabs v-model="activeName">
            <ElTabPane label="告警源列表" name="0">
                <div class="content">
                    <SearchBar />
                    <ElTable />
                </div>
            </ElTabPane>
            <ElTabPane label="回收列表" name="1">
                eee
            </ElTabPane>
        </ElTabs>
    </div>
</template>

<style lang="scss" scoped>

</style>