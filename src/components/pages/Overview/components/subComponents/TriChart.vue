<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
    formatAlertsXAxisData: Array,
    chartData: Object
})



const {formatAlertsXAxisData=[], chartData={}, dataName = [], title="告警事件数/警报数"} = props
let newArr = formatAlertsXAxisData.map(item => {
    return item
  })
  let res = Array.from(new Set(newArr))
  const {
    incidentTrend = [],
    alertTrend = [],
    eventTrend = [],
  } = chartData

  //向上往整10取整数
  const formatInt = (num) => {
    let str = num + ''
    let len = str.length
    let mult = Math.pow(10, len)
    return Math.ceil(num / mult) * mult
  }

  let leftArr = [], rightArr = []
  incidentTrend && incidentTrend.forEach(item => {
    leftArr.push(item.value)
  })
  alertTrend && alertTrend.forEach(item => {
    leftArr.push(item.value)
  })
  eventTrend && eventTrend.forEach(item => {
    rightArr.push(item.value)
  })

  let leftMax = formatInt(Math.max(...leftArr))
  if (!leftMax) leftMax = 100
  let rightMax = formatInt(Math.max(...rightArr))
  if (!rightMax) rightMax = 100
  let leftInterval = leftMax / 4
  let rightInterval = rightMax / 4
let option = {
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
        // data: dataName,
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
        // data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-04', '2019-04'],
        // data: formatAlertsXAxisData,
        data: res,
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
        name: title,
        nameTextStyle: {
          align: 'center',
          padding: [0, 0, 0, 30]
        },
        min: 0,
        max: leftMax, //这里有个注意的
        interval: leftInterval, //这里也有个注意的
        // splitNumber: 4,
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
        max: rightMax, //这里有个注意的
        interval: rightInterval, //这里有个注意的
        // splitNumber: 4,
        axisLabel: {
          color: 'rgba(110,112,120)',
          formatter: (value) => value >= 1000 ? Math.floor(value / 1000) + 'K' : value
        }
      },
      ],
      series: [
        {
          name: '事件数',
          type: 'line',
          symbolSize: 0,
          data: [800, 520, 750, 920, 880, 520],
          // data: incidentTrendData,
        //   data: incidentTrend,
              lineStyle: {
                color: '#5D7092'
              }
        },
        {
          name: '警报数',
          type: 'line',
          symbolSize: 0,
          data: [1050, 460, 1100, 480, 1800, 1180],
        //   data: alertTrend,
              lineStyle: {
                color: '#5B8FF9'
              }
            },
        {
          name: '告警数',
          type: 'line',
          symbolSize: 0,
          data: [280, 220, 310, 220, 290, 260],
        //   data: eventTrend,
          yAxisIndex: 1,
              lineStyle: {
                color: '#FF9D4D',
              }
        },
      ]
    }

    const triLineRef = ref(null)
    onMounted(() => {
        let myChart = echarts.init(triLineRef.value)
        const chartResize = () => {
        if (myChart) myChart.resize()
        }

        option && myChart.setOption(option)
        window.addEventListener('resize', chartResize)
        })

    onBeforeUnmount(() => {
        //组件注销
    })
</script>

<template>
<div ref="triLineRef" style="width:100%; height:222px">
    
</div>
</template>

<style scoped>

</style>