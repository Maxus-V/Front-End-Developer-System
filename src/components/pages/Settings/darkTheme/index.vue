<script setup>
import { ref } from 'vue'
import { ElSwitch } from 'element-plus';
import { useDark, useToggle } from '@vueuse/core'


import BasicCard from '@/components/basic/BasicCard/index.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const switchValue = ref(false)

const onSwitchChange = (value) => {
    // __APP_ENV__.THEME = value ? 'default' : 'dark'
    // console.log('233', __APP_ENV__.THEME)
}
</script>

<template>
    <BasicCard title="黑夜模式">
        <div class="container">
            黑夜模式实验地带
            <!-- <ElSwitch
                v-model="switchValue"
                @change="onSwitchChange"
            /> -->
            <button @click="toggleDark()">
                当前状态是: {{ isDark }}
            </button>
        </div>
    </BasicCard>
</template>

<style lang="scss" scoped>
    .container {
        height: 100%;
        // color: $text-color;
        // background-color: $background-color;
    }
</style>