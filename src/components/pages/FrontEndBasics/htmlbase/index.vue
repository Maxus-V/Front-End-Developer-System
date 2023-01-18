<script setup>
  import { reactive } from 'vue'
  import Search from './Search/index.vue'
  import EventTable from './EventTable.vue';

  import useColumn from './logicExtraction/useColumn';
  import useTable from './logicExtraction/useTable.js'

  import { publicFields } from '../config/constant';
  import { getChildrenByLoop } from '@/utils/index.js';

  const {
    tableData,
    modifyPages,
    modifyConditions,
    isLoading,
    forceRefresh,
    customFetchData
  } = useTable()

  const state = reactive({
    currentCategory: 'PENDING',
    columns: getChildrenByLoop(publicFields).map(i => i.defaultSelected ? i.id : undefined).filter(Boolean),
    data: [
      {
        seriNum: '233333',
        incidentNameText: '哈哈哈哈哈哈',
        level: 'high',
        createdTime: '2023-01-18'
      },
    ],
  })

  state.columns = useColumn(state.columns)

</script>

<template>
    <div class="eventWrapper">
      <Search
        :tableData="tableData"
        :conditions = "tableData"
        :modifyConditions="modifyConditions"
        :state="state"
      />
      <EventTable
        :state="state"
      />
    </div>
</template>

<style lang="scss" scoped>
.eventWrapper{
  height: 69vh;
}
</style>