<script setup>
import { ref } from 'vue'
import LevelSelect from './LevelSelect/index.vue'

import { ElDatePicker, ElInput } from 'element-plus';

const props = defineProps({
    tableData: Object,
    conditions: Object,
    modifyConditions: Function,
})

const type = 'archiveEvent1'

const query = ref(null)
const rangeTime = ref(null)

const selectTime = () => {
    console.log('选择时间了')
}

const setQuery = () => {
    console.log('改变参数')
}

</script>

<template>
    <div class="searchHeader">
        <LevelSelect v-if="type !== 'archiveEvent'"/>
        <ElDatePicker
            style="width: 250px"
            type="daterange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            v-model="rangeTime"
            @change="selectTime"
            placeholder="请选择时间"
            value-format="YYYY-MM-DD HH:mm"
        />
        <ElInput
            v-model="query"
            @change="setQuery"
            clearable
            class="input"
            placeholder="请输入事件名称/ID"
            :maxlength="50"
        />
    </div>
</template>

<style lang="scss" scoped>

</style>