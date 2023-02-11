<script setup>
import { ref } from 'vue'
import { ElSwitch } from 'element-plus';

const switchValue = ref(false)

const onSwitchChange = (value) => {
    __APP_ENV__.THEME = value ? 'default' : 'dark'
    console.log('233', __APP_ENV__.THEME)
}
</script>

<template>
    <div class="container">
        黑夜模式实验地带
        <ElSwitch
            v-model="switchValue"
            @change="onSwitchChange"
        />
    </div>
</template>

<style lang="scss" scoped>
    .container {
        height: 100%;
        color: $text-color;
        // background-color: $background-color;
    }
</style>