<script setup>
import { computed, reactive, onBeforeMount, watch } from 'vue';
import { useStore } from 'vuex';
import { ElRow, ElCol } from 'element-plus';

import CardZone from './components/CardZone/index.vue';
import ChartZone from './components/ChartZone/index.vue'
import TableZone from './components/TableZone/index.vue'

import { getOverviewCardsData, getOverviewChartsData, getOverviewTablesData } from './service'

const store = useStore()

const overviewState = reactive({
  isRecent7days: computed(() => store.getters.isRecent7days || null),
  isAll: true,
})
const overviewData = reactive({
  cardsData: {},
  chartsData: {},
  tablesData: {},
})

const changeIsAll = () => {
  overviewState.isAll = !overviewState.isAll
}
const getCardsData = (value) => {
  const params = {type: value}
    getOverviewCardsData(params).then(res => {
      if (res && res.status === 200) {
        overviewData.cardsData = res.data
      }
  })
}
const getChartsData = (value, bool) => {
  const params = {
    type: value,
    flag: bool,
  }
  getOverviewChartsData(params).then(res => {
    if (res && res.status === 200) {
      overviewData.chartsData = res.data
    }
  })
}
const getTablesData = (value) => {
  const params = {type: value}
    getOverviewTablesData(params).then(res => {
      if (res && res.status === 200) {
        overviewData.tablesData = res.data
      }
  })
}

onBeforeMount(() => {
  getCardsData(overviewState.isRecent7days)
  getChartsData(overviewState.isRecent7days, overviewState.isAll)
  getTablesData(overviewState.isRecent7days)
})

watch(() => overviewState.isRecent7days, () => {   
  getCardsData(overviewState.isRecent7days)
  getChartsData(overviewState.isRecent7days, overviewState.isAll)
  getTablesData(overviewState.isRecent7days)
})

watch(() => overviewState.isAll, () => {
  getChartsData(overviewState.isRecent7days, overviewState.isAll)
})
</script>

<template>
    <div class="overview">
      <CardZone
        :cardsData="overviewData.cardsData"
      />
      <ElRow :gutter="12">
        <ElCol :span="12">
          <ChartZone
            :chartData='overviewData.chartsData'
            @changeIsAll="changeIsAll"
          />
        </ElCol>
        <ElCol :span="12">
          <ChartZone
            :chartData='overviewData.chartsData'
            @changeIsAll="changeIsAll"
          />
        </ElCol>
      </ElRow>
      <TableZone
        :tableData='overviewData.tablesData'
      />
    </div>
</template>