<script setup>
import { ref } from 'vue'
import LevelSelect from './LevelSelect/index.vue'

import { ElDatePicker, ElInput } from 'element-plus';

import moment from 'moment';

const props = defineProps({
    tableData: Object,
    conditions: Object,
    modifyConditions: Function,
})

const { tableData, modifyConditions } = props
const { conditions } = tableData
const { startTime, endTime } = conditions

const type = 'archiveEvent1'

const rangeTime = ref((startTime && endTime) ? [moment(startTime), moment(endTime)] : [])
const query = ref(conditions.query)

const selectTime = (range) => {
    if (range && range.length ) {
        const [startTime, endTime] = range
        modifyConditions({
            startTime: startTime,
            endTime: endTime,
            currentPage: 1,
        })
    } else {
        modifyConditions({
            startTime: undefined,
            endTime: undefined,
            currentPage: 1,
        })
    }
}

const inputOnChange = (value) => {
    modifyConditions({
        query: value,
        currentPage: 1,
    })
}

</script>

<template>
    <div class="searchHeader">
        <LevelSelect v-if="type !== 'archiveEvent'"
            :conditions="conditions"
            :modifyConditions="modifyConditions"
        />
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
            @change="inputOnChange"
            clearable
            class="input"
            placeholder="请输入事件名称/ID"
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