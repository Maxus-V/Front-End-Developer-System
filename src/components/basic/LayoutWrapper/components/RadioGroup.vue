<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { ElRadioGroup, ElRadioButton } from 'element-plus';

const store = useStore()
const radioValue = ref(7)
</script>

<template>
    <ElRadioGroup v-model="radioValue" @change="store.commit('changeTimeSet', radioValue)">
        <ElRadioButton :label="7">最近7天</ElRadioButton>
        <ElRadioButton :label="14">最近14天</ElRadioButton>
    </ElRadioGroup>
</template>