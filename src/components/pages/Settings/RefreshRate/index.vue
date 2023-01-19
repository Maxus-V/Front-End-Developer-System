<script setup>
import { reactive } from 'vue';
import { ElForm, ElFormItem, ElSwitch, ElSelect, ElOption } from 'element-plus';
import { useStore } from 'vuex'

import { timeConfig } from '@/components/pages/Settings/config/index.js'

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
                    @click="onSelectChange"
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