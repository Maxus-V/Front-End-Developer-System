<script setup>
import { reactive, computed, provide } from 'vue'

import Search from './components/Search/index.vue'
import EventTable from './components/EventTable/index.vue';

import { getList } from './service'
import { useTable } from './utils/useTable'
import { typeEnum, statusEnum } from './config/constants'

const type = 'ownEvent'

const htmlBaseState = reactive({
  currentCategory: 'PENDING',
  rowSelection: [],
  hasRowSelection: computed(() => htmlBaseState.rowSelection.length ? true : false),
  columns: [
    {title: '知识ID', prop: 'seriNum', width: '100px'},
    {title: '知识名称', prop: 'incidentNameText', width: '420px'},
    {title: '难度级别', prop: 'level', width: '200px'},
    {title: '创建时间', prop: 'createdTime', width: '200px'},
    {title: '备注', prop: 'remark'},
  ],
})
provide('htmlBaseState', htmlBaseState)

const modifyMethods = useTable(getList, Object.assign({}, {
    type: typeEnum[type],
    processStatusList: [statusEnum[type]],
}))
provide('modifyMethods', modifyMethods)

const changeCurrentCategory = (type) => {
  htmlBaseState.currentCategory = type
}
provide('changeCurrentCategory', changeCurrentCategory)

const changeRowSelection = (value) => {
  htmlBaseState.rowSelection = value
}
provide('changeRowSelection', changeRowSelection)
</script>

<template>
    <div class="eventWrapper">
      <Search />
      <EventTable />
    </div>
</template>

<style lang="scss" scoped>
.eventWrapper{
  height: 69vh;
}
</style>