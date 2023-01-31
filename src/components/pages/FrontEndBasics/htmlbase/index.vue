<script setup>
import { reactive, provide } from 'vue'

import Search from './components/Search/index.vue'
import EventTable from './components/EventTable/index.vue';

import { getList } from './service'
import { useTable } from './utils/useTable'
import { typeEnum, statusEnum } from './config/constants'

const type = 'ownEvent'

const htmlBaseState = reactive({
  currentCategory: 'PENDING',
  columns: [
    {title: '事件ID', prop: 'seriNum'},
    {title: '事件名称', prop: 'incidentNameText'},
    {title: '告警级别', prop: 'level'},
    {title: '创建时间', prop: 'createdTime'},
    {title: '备注', prop: 'remark'},
  ],
  data: [
      {
        seriNum: '233333',
        incidentNameText: '哈哈哈哈哈哈',
        level: 'high',
        createdTime: '2023-01-18'
      },
      {
        seriNum: '666666',
        incidentNameText: '什么动静',
        level: 'high',
        createdTime: '2023-01-19'
      },
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