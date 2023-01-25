<script setup>
import { computed, reactive, onBeforeMount, watch } from 'vue';
import { useStore } from 'vuex';
import { ElRow, ElCol } from 'element-plus';

import CardZone from './components/CardZone/index.vue';
import ChartZone from './components/ChartZone/index.vue'
import TableZone from './components/TableZone/index.vue'

import { getOverviewCardsData } from './service'

const store = useStore()
const isRecent7days = computed(() => store.getters.isRecent7days)

const overviewState = reactive({
  cardsData: {},
})

const getCardsData = (value) => {
  const params = {type: value}
    getOverviewCardsData(params).then(res => {
      if (res && res.status === 200) {
        overviewState.cardsData = res.data
      }
  })
}

onBeforeMount(() => {
  getCardsData(isRecent7days.value)
})

watch(isRecent7days, () => {   
  getCardsData(isRecent7days.value)
})
</script>

<template>
    <div class="overview">
      <CardZone
        :cardsData="overviewState.cardsData"
      />
      <!-- <ElRow :gutter="12">
        <ElCol :span="12">
          <ChartZone
            recentDays="7d"
            :chartData = 'chartsData'
          />
        </ElCol>
        <ElCol :span="12">
          <ChartZone
            recentDays="14d"
            :chartData = 'chartsData'
          />
        </ElCol>
      </ElRow>
      <TableZone
        :tableData='tableData'
      /> -->
    </div>
</template>