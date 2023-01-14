<script setup>
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

</script>

<template>
    <div class="eventWrapper">
      <Search
        :tableData="tableData"
        :conditions = "tableData"
        :modifyConditions="modifyConditions"
      />
      <EventTable/>
    </div>
</template>