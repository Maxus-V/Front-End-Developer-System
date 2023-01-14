<script setup>
import { ElTooltip, ElButton, ElIcon } from 'element-plus';
import { Download } from '@element-plus/icons-vue';

const msg = '请稍等，正在下载中，请勿离开页面'
const data = [1]

const download = () => {
    console.log('执行下载逻辑')
}
</script>

<template>
    <div style="margin: 0 8px;">
        <!-- <span class="helpMsg">{{ msg }}</span> -->
        <ElTooltip content="下载" effect="light" placement="top">
            <ElButton 
                class="download" 
                @click="download"
                :disabled="data.length === 0"
                size="small"
            >
                <ElIcon>
                    <Download/>
                </ElIcon>
            </ElButton>
        </ElTooltip>
    </div>
</template>

<style lang="scss" scoped>

</style>