<script setup>
import { ref, inject } from 'vue'
import { ElSelect, ElOption } from 'element-plus';

const modifyMethods = inject('modifyMethods')

const selectValue = ref([])

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

const changeLevel = (value) => {
    modifyMethods.modifyConditions({
        levelList: value || [],
        currentPage: 1,
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
        v-model="selectValue"
        @change="changeLevel"
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