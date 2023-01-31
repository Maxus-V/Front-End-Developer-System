<script setup>
import { inject } from 'vue'
import { ElTooltip, ElButton, ElIcon } from 'element-plus';
import { Download } from '@element-plus/icons-vue';

const msg = '请稍等，正在下载中，请勿离开页面'

const htmlBaseState = inject('htmlBaseState')

const download = () => {
    console.log('执行下载逻辑')
}
</script>

<template>
        <!-- <span class="helpMsg">{{ msg }}</span> -->
        <ElTooltip content="下载" effect="light" placement="top">
            <ElButton 
                class="download" 
                @click="download"
                :disabled="!htmlBaseState.hasRowSelection"
                size="small"
            >
                <ElIcon><Download/></ElIcon>
            </ElButton>
        </ElTooltip>
</template>

<style lang="scss" scoped>
</style>