<script setup>
import { reactive } from 'vue';
import { ElForm, ElFormItem, ElSwitch, ElSelect, ElOption } from 'element-plus';

import { timeConfig } from '@/components/pages/Settings/config/index.js'

const state = reactive({
    switchValue: false,
    selectValue: 5,
})

const onSwitchChange = () => {
    console.log('hi')
}

</script>

<template>
    <ElForm class="systemSetting">
        <ElFormItem label="刷新频率">
            <ElSwitch
                v-model="state.switchValue"
                @change="onSwitchChange"
            />
        </ElFormItem>
        <ElFormItem label="刷新时间">
            <ElSelect
                v-model="state.selectValue"
            >
                <ElOption v-for="config in timeConfig" 
                    :key="config.value" 
                    :value="config.value"
                >
                    {{ config.name }}
                </ElOption>
            </ElSelect>
        </ElFormItem>
    </ElForm>
</template>

<style lang="scss" scoped>
    .systemSetting {
    height: 100%;
    width: 100%;
    background-color: white;
    box-sizing: border-box;
  }
</style>