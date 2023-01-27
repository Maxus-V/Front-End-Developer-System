<script setup>
import { ElSelect, ElOption, ElIcon } from 'element-plus';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';

const pageSizeRange = [10, 20, 30]
</script>

<template>
    <div class="basicPagination">
        <span class="left">
            每页
            <ElSelect>
                <ElOption v-for="(item, index) in pageSizeRange" :key="index" :value="item">
                    {{ `${item}条` }}
                </ElOption>
            </ElSelect>
            共{{ 2 }}条
        </span>
        <div class="right">
            <ElIcon><ArrowLeft /></ElIcon>
            <span>
                2
            </span>
            <ElIcon><ArrowRight /></ElIcon>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>