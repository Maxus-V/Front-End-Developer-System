<script setup>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { ElForm, ElFormItem, ElSwitch, ElSelect, ElOption, ElTooltip, ElIcon } from 'element-plus';
import { QuestionFilled } from '@element-plus/icons-vue';

import { timeConfig } from '@/components/pages/Settings/config/index.js';
import BasicCard from '@/components/basic/BasicCard/index.vue'

const store = useStore()
const { charger, rate } = store.state.refresh

const state = reactive({
    switchValue: charger || false,
    selectValue: rate || 5,
})

const onSwitchChange = () => {
    store.commit('setRefreshCharger', state.switchValue)
}
const onSelectChange = () => {
    store.commit('setRefreshRate', state.selectValue)
}
</script>

<template>
    <BasicCard title="刷新频率">
        <ElForm class="systemSetting">
            <ElFormItem label="刷新频率">
                <ElSwitch
                    v-model="state.switchValue"
                    @change="onSwitchChange"
                />
                <ElTooltip content="开启“刷新频率”并返回概览页，等待所选“刷新时间”后，页面会自动更新数据" 
                    effect="light" 
                    placement="top"
                >
                    <ElIcon style="margin-left: 12px"><QuestionFilled /></ElIcon>
                </ElTooltip>
            </ElFormItem>
            <ElFormItem label="刷新时间">
                <ElSelect
                    v-model="state.selectValue"
                >
                    <ElOption v-for="config in timeConfig" 
                        :key="config.value" 
                        :value="config.value"
                        :label="config.name"
                        @click="onSelectChange"
                    />
                </ElSelect>
            </ElFormItem>
        </ElForm>
    </BasicCard>
</template>

<style lang="scss" scoped>
.systemSetting {
    height: 100%;
    width: 100%;
    background-color: white;
    box-sizing: border-box;
}
</style>