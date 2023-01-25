<script setup>
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { ElTooltip, ElIcon } from 'element-plus';
import { QuestionFilled } from '@element-plus/icons-vue'

import moment from 'moment';
import { s2hms } from '@/utils'
import * as echarts from 'echarts';

const props = defineProps({
  title: String,
  tip: String,
  cardData: Object,
})

let myChart 
const cardData = computed(() => props.cardData)

const ttt = reactive({
  chartDataY: computed(() => props.cardData.statistics.map(item => item.value) || []),
  chartDataX: computed(() => props.cardData.statistics.map(item => moment(new Date(item.time)).format('YYYY-MM-DD')) || [])
})

// const chartDataY = computed(() => props.cardData.statistics.map(item => item.value) || [])
// const chartDataX = computed(() => props.cardData.statistics.map(item => moment(new Date(item.time)).format('YYYY-MM-DD')) || [])

const option = {
      grid: {
        x: 0,
        y: 40,
        x2: 0,
        y2: 50,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: [],
      },
      yAxis: {
        type: 'value',
        show: false,
        splitLine: {
          show: false
        },
      },
      tooltip: {
        backgroundColor: 'white',
        borderColor: 'white',
        textStyle: {
          color: 'black'
        },
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          axis: 'auto',
          snap: true,
        },
        valueFormatter: (seconds) => {
          return s2hms(seconds)
        }
      },
      series: [
        {
          data: [],
          type: 'line',
          symbol: 'circle',
          smooth: true,
          symbolSize: 0,
          itemStyle: {
              color: '#1890FF',
          },
          lineStyle: {
                width: 1
          },
          areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {
                    offset: 0,
                    color: "rgba(175, 217, 255, 100)",
                  },
                  {
                    offset: 1,
                    color: "rgba(250, 250, 255, 10)",
                  }
                ],
                false
              )
          }
        }
      ]
    }

const trendRef = ref(null)
const test = () => {
  if (myChart) echarts.dispose(myChart)
  myChart = echarts.init(trendRef.value)
  option && myChart.setOption(option)
}
onMounted(() => {
  test()
  // const chartResize = () => {
  //   if (myChart) myChart.resize()
  // }
  
  // window.addEventListener('resize', chartResize)
})

watch(cardData, () => {
  test()
})
</script>

<template>
    <div class='chartCard'>
    <div class='container'>
      <div class='chartHead'>
        <div class='cardTitle'>
          {{title}}
          <ElTooltip :content="tip" effect="light" placement="top">
            <ElIcon><QuestionFilled /></ElIcon>
          </ElTooltip>
        </div>
      </div>
      <h1 class='cardParameter'>{{cardData.averageTime ? cardData.averageTime : '-'}}</h1>
      <div ref='trendRef' class='chartContent'></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chartCard{
    .container {
      height: 138px;
      // width: 230px;
      font-size: 14px;
      background-color: white;
      .chartHead {
        display: flex;
        justify-content: space-between;
        padding: 16px 16px 16px;
        .cardTitle {
          color: black;
          display: flex;
          align-items: center;
          .el-icon {
            color: gray;
            cursor: pointer;
            margin-left: 5px;
          }
        }
      }
      .cardParameter {
        font-size: 24px;
        padding-left: 16px;
      }
      .progressArea {
        padding: 0 8% 0;
        height: 30%;
        display: flex;
        align-items: center;
        .progressText {
          margin-left: 10px;
          color:white;
          font-size: 12px;
        }
        .aevt-progress-inner {
          border-radius: 0;
          .aevt-progress-bg {
            border-radius: 0;
          }
        }
      }
      .chartContent {
        width: 100%;
        height: 50px;
      }
    }
  }
</style>