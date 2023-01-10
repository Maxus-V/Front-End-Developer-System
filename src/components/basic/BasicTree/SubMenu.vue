<script setup>
import { reactive } from 'vue'
import { ElIcon } from 'element-plus';
import { ArrowRightBold, ArrowDownBold } from '@element-plus/icons-vue';
const state = reactive({
    flag: false
})

const change = () => {
    state.flag = !state.flag
}
</script>

<style>
.sub{
  padding-left:20px;
}
</style>

<template>
    <div>
        <div class="title">
            <!-- <el-icon v-show="!state.flag">
                <ArrowRightBold />
            </el-icon>
            <el-icon v-show="state.flag">
                <ArrowDownBold />
            </el-icon> -->
            <slot name="title"></slot>
        </div>
        <div class="sub">
            <slot></slot>
        </div>
    </div>
</template>