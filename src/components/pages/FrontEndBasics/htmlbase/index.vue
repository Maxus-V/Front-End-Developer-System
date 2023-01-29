<script setup>
  import { reactive } from 'vue'
  import Search from './components/Search/index.vue'
  import EventTable from './components/EventTable/index.vue';

  import useColumn from './utils/useColumn';

  import { publicFields } from '../config/constant';
  import { getChildrenByLoop } from '@/utils/index.js';

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
      {
        seriNum: '666666',
        incidentNameText: '什么动静',
        level: 'high',
        createdTime: '2023-01-19'
      },
    ],
  })

  state.columns = useColumn(state.columns)

</script>

<template>
    <div class="eventWrapper">
      <Search />
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