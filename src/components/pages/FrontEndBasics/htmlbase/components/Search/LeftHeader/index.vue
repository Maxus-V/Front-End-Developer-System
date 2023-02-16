<script setup>
import { ref, inject } from 'vue'
import { ElDatePicker, ElInput } from 'element-plus';

import LevelSelect from './LevelSelect.vue';

const modifyMethods = inject('modifyMethods')

const rangeValue = ref([])
const inputValue = ref('')

const onSelectTimeChange = (rangeArr=[]) => {
    if(rangeArr && rangeArr.length) {
        const [startTime, endTime] = rangeArr
        modifyMethods.modifyConditions({
            startTime: startTime.valueOf(),
            endTime: endTime.valueOf(),
            currentPage: 1,
        })
    }
}
const onInputValueChange = (value) => {
    modifyMethods.modifyConditions({
        query: value,
        currentPage: 1,
    })
}
</script>

<template>
    <div class="searchHeader">
        <LevelSelect />
        <ElDatePicker
            style="width: 250px"
            type="daterange"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            v-model="rangeValue"
            @change="onSelectTimeChange"
            placeholder="请选择时间"
            value-format="YYYY-MM-DD HH:mm"
        />
        <ElInput
            v-model="inputValue"
            @change="onInputValueChange"
            clearable
            class="input"
            placeholder="请输入知识名称/ID"
            :maxlength="50"
        />
    </div>
</template>

<style lang="scss" scoped>
.searchHeader {
      display: flex;
      flex-direction: row;
      .select {
        width: 150px;
        margin-right: 10px;
      }
      .input {
        width: 150px;
        margin-left: 10px;
      }
    }
</style>