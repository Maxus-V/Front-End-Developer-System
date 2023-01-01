<script setup>
import { ElRadioGroup, ElRadioButton } from 'element-plus';
import {useStore} from 'vuex'
import { ref } from 'vue'
const radio = ref("7")
const store = useStore()
const changeDay = (value) => {
    store.commit('changeTimeSet', value)
}
</script>

<template>
    <el-radio-group v-model="radio" :change="changeDay(radio)">
        <el-radio-button :label="7">
            最近7天
        </el-radio-button>
        <el-radio-button :label="14">  
            最近14天
        </el-radio-button>
    </el-radio-group>
</template>

<style>

</style>