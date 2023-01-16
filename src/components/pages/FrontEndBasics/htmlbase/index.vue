<script setup>
  import { reactive } from 'vue'
  import Search from './Search/index.vue'
  import EventTable from './eventTable.vue';

  import useTable from './logicExtraction/useTable.js'
  const {
    tableData,
    modifyPages,
    modifyConditions,
    isLoading,
    forceRefresh,
    customFetchData
  } = useTable()

  const state = reactive({
    currentCategory: 'PENDING'
  })

</script>

<template>
    <div class="eventWrapper">
      <Search
        :tableData="tableData"
        :conditions = "tableData"
        :modifyConditions="modifyConditions"
        :state="state"
      />
      <EventTable/>
    </div>
</template>