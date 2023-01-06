<script setup>
import { ElFormItem } from 'element-plus';

const arr = [1,2,3]
</script>

<template>
    <div class="baseForm">
        <el-form-item v-for="item in arr">
            {{ item }}
        </el-form-item>
    </div>
</template>

<style lang="scss" scoped>

</style>