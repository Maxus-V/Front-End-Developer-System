<script setup>
  import { ref, reactive, computed, watch, nextTick } from 'vue';
  import { useStore } from 'vuex';
  import CardZone from './components/CardZone.vue';
  import ChartZone from './components/ChartZone.vue'
  import TableZone from './components/TableZone.vue'
  import { 
    ElRow,
    ElCol
  } from 'element-plus';

  import {
    getOverviewCardsData,
    getOverviewChartsData,
    getOverviewTableData
  } from './service'

  let cardsData = reactive({})
  let chartsData = ref('00000')
  let tableData = ref('666666')

  const store = useStore()

  const isRecent7days = computed(() => store.getters.isRecent7days)

  const getCardsData = (is7days='7d') => {
    const params = {
      timeRange: !is7days ? '7d' : '14d'
    }
    // console.log('params1', params)
    cardsData = getOverviewCardsData(params).data
  }

  const getChartsData = (is7days='7d') => {
    const params = {
      timeRange: is7days ? '7d' : '14d'
    }
    // console.log('params2', params)
    chartsData = getOverviewChartsData(params).data
  }

  const getTableData = (is7days='7d') => {
    const params = {
      timeRange: is7days ? '7d' : '14d'
    }
    // console.log('params3', params)
    tableData = getOverviewTableData(params).data
  }

  getCardsData()
  getChartsData()
  getTableData()

  watch(isRecent7days, () => {   
      nextTick(() => {
        getCardsData(isRecent7days.value)
        getChartsData(isRecent7days.value)
        getTableData(isRecent7days.value)
      })
    })
</script>

<template>
    <div class="overview">
      <!-- TODO:BasicScrollBar -->
      <CardZone
        :cardData="cardsData"
      />
      <el-row :gutter="12">
        <el-col :span="12">
          <ChartZone
            recentDays="7d"
            :chartData = 'chartsData'
          />
        </el-col>
        <el-col :span="12">
          <ChartZone
            recentDays="14d"
            :chartData = 'chartsData'
          />
        </el-col>
      </el-row>
      <TableZone
        :tableData='tableData'
      />
    </div>
</template>