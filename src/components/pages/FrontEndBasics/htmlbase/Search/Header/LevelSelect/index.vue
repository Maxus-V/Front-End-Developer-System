<script setup>
import { ref } from 'vue'
import { ElSelect, ElOption } from 'element-plus';

const props = defineProps({
    conditions: Object,
    modifyConditions: Function,
})

const {conditions, modifyConditions} = props

const levelList = ref(conditions.levelLis || [])

const options = [
    {
        id: 'CRITICAL',
        value: 'CRITICAL',
        name: '灾难',
    },
    {
        id: 'MAJOR',
        value: 'MAJOR',
        name: '严重',
    },
    {
        id: 'MODERATE',
        value: 'MODERATE',
        name: '次要',
    },
    {
        id: 'MODERATE',
        value: 'MODERATE',
        name: '提示',
    },
    {
        id: 'OK',
        value: 'OK',
        name: '正常',
    },
]

const onChangeLevel = (value) => {
    modifyConditions({
        levelList: value || [],
        currentPage: 1
    })
}
</script>

<template>
    <ElSelect
        placeholder="事件级别"
        class="select"
        clearable
        multiple
        :multiple-limit="1"
        v-model="levelList"
        @change="onChangeLevel"
    >
        <ElOption v-for="option in options"
            :key="option.id"
            :value="option.value"
            :label="option.name"
        />
    </ElSelect>
</template>

<style lang="scss" scoped>

</style>