<script setup>
import { ref, reactive, computed, onMounted, watch, onBeforeUnmount } from 'vue';

import moment from 'moment';
import * as echarts from 'echarts';
import { formatInt } from '@/utils'

const props = defineProps({
  chartData: Object
})

const triChartState = reactive({
  formatAlertsXAxisData: computed(() => (props.chartData.formatAlertsXAxisData) || []),
  incidentTrendData: computed(() => (props.chartData.incidentTrendData) || []),
  alertTrendData: computed(() => (props.chartData.alertTrendData) || []),
  eventTrendData: computed(() => (props.chartData.eventTrendData) || []),
})

const leftMaxValue = computed(() => Math.max([].concat(triChartState.incidentTrendData, triChartState.alertTrendData)) || 100)
const rightMaxValue = computed(() => Math.max([].concat(triChartState.eventTrendData)) || 100)

console.log('leftMaxValue', leftMaxValue.value,triChartState.incidentTrendData)

  let leftMax = formatInt(Math.max(...[]))
  if (!leftMax) leftMax = 100
  let rightMax = formatInt(Math.max(...[]))
  if (!rightMax) rightMax = 100
  let leftInterval = leftMax / 4
  let rightInterval = rightMax / 4

let myChart = null
const triLineRef = ref(null)

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
        data: ['事件数', '警报数', '告警数'],
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
        name: "告警事件数/警报数",
        nameTextStyle: {
          align: 'center',
          padding: [0, 0, 0, 30]
        },
        min: 0,
        max: leftMax, 
        interval: leftInterval,
        axisLabel: {
          color: 'rgba(110,112,120)',
          formatter: (value) => value >= 1000 ? Math.floor(value / 1000) + 'K' : value
        }
      },
      {
        type: 'value',
        name: '告警数',
        nameTextStyle: {
          align: 'center',
          padding: [0, 0, 0, 25]
        },
        min: 0,
        max: rightMax, 
        interval: rightInterval, 
        axisLabel: {
          color: 'rgba(110,112,120)',
          formatter: (value) => value >= 1000 ? Math.floor(value / 1000) + 'K' : value
        }
      }],
      series: [
        {
          name: '事件数',
          type: 'line',
          symbolSize: 0,
          data: triChartState.incidentTrendData,
          lineStyle: {
            color: '#5D7092'
          }
        },
        {
          name: '警报数',
          type: 'line',
          symbolSize: 0,
          data: triChartState.alertTrendData,
          lineStyle: {
            color: '#5B8FF9'
          }
        },
        {
          name: '告警数',
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

watch(()=> {}, () => {

})

onBeforeUnmount(() => {
  window.removeEventListener('resize', chartResize)
  if (myChart) myChart.dispose()
})
</script>

<template>
  <div ref="triLineRef" style="width:100%; height:222px"></div>
</template>

<style lang="scss" scoped>
</style>