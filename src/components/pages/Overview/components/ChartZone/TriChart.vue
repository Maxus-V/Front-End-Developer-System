<script setup>
import { ref, reactive, computed, toRaw, onMounted, watch, onBeforeUnmount } from 'vue';

import * as echarts from 'echarts';
import moment from 'moment';
import { formatInt } from '@/utils'

const props = defineProps({
  chartData: Object
})

let myChart = null

const triLineRef = ref(null)

const triChartState = reactive({
  incidentTrendData: computed(() => (props.chartData.incidentTrendData) || []),
  alertTrendData: computed(() => (props.chartData.alertTrendData) || []),
  eventTrendData: computed(() => (props.chartData.eventTrendData) || []),
  formatAlertsXAxisData: computed(() => (toRaw(props.chartData.formatAlertsXAxisData) || []).sort((a,b) => a-b).map(item => moment(new Date(item)).format('YYYY-MM-DD'))),
  leftMaxValue: computed(() => formatInt(Math.max(...toRaw(triChartState.incidentTrendData), ...toRaw(triChartState.alertTrendData))) || 100),
  rightMaxValue: computed(() => Math.max(...toRaw(triChartState.eventTrendData)) || 100),
})

const init = () => {
  if (myChart) myChart.dispose()
  myChart = echarts.init(triLineRef.value)
  const option = {
      color: ['#5D7092', '#5B8FF9', '#FF9D4D'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          axis: 'auto',
          snap: true
        },
        backgroundColor: 'white',
        borderColor: 'black',
        textStyle: {
          color: 'black',
        },
      },
      legend: {
        data: ['HTML', 'CSS', 'JavaScript'],
        padding: [206, 0, 0, 0],
        icon: 'rect',
        itemHeight: 2,
        itemWidth: 16,
        textStyle: {
          color: 'black'
        },
        inactiveColor: 'black'
      },
      grid: {
        bottom: '22%',
        y: '18%',
        x: '7%',
        width: '83%'
      },
      xAxis: {
        type: 'category',
        data: triChartState.formatAlertsXAxisData,
        axisLine: {
          lineStyle: {
            color: 'rgba(110,112,120)',
          }
        },
        axisTick: {
          show: true,
          alignWithLabel: true
        }
      },
      yAxis: [{
        type: 'value',
        name: "HTML/CSS",
        nameTextStyle: {
          align: 'center',
          padding: [0, 0, 0, 30]
        },
        min: 0,
        max: triChartState.leftMaxValue, 
        interval: triChartState.leftMaxValue / 4,
        axisLabel: {
          color: 'rgba(110,112,120)',
          formatter: (value) => value >= 1000 ? Math.floor(value / 1000) + 'K' : value
        }
      },
      {
        type: 'value',
        name: 'Javascript',
        nameTextStyle: {
          align: 'center',
          padding: [0, 0, 0, 25]
        },
        min: 0,
        max: triChartState.rightMaxValue, 
        interval: triChartState.rightMaxValue / 4, 
        axisLabel: {
          color: 'rgba(110,112,120)',
          formatter: (value) => value >= 1000 ? Math.floor(value / 1000) + 'K' : value
        }
      }],
      series: [
        {
          name: 'HTML',
          type: 'line',
          symbolSize: 0,
          data: triChartState.incidentTrendData,
          lineStyle: {
            color: '#5D7092'
          }
        },
        {
          name: 'CSS',
          type: 'line',
          symbolSize: 0,
          data: triChartState.alertTrendData,
          lineStyle: {
            color: '#5B8FF9'
          }
        },
        {
          name: 'JavaScript',
          type: 'line',
          symbolSize: 0,
          data: triChartState.eventTrendData,
          yAxisIndex: 1,
          lineStyle: {
            color: '#FF9D4D',
          }
        },
      ]
    }
  myChart.setOption(option)
}
const chartResize = () => {
  if (myChart) myChart.resize()
}

onMounted(() => {
  init()
  window.addEventListener('resize', chartResize)
})

watch(triChartState, () => {
  init()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', chartResize)
  if (myChart) myChart.dispose()
})
</script>

<template>
  <div ref="triLineRef" style="width:100%; height:222px"></div>
</template>