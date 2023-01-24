<script setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';
import moment from 'moment';
import { ElTooltip, ElIcon } from 'element-plus';
import { QuestionFilled } from '@element-plus/icons-vue'

const props = defineProps({
  cardData: Object,
  title: String,
  tip: String
})
const {averageTime = '', statistics = []} = props.cardData

//由秒格式转化为天时分秒格式
const s2hms = (time = 0) => {
    const days = parseInt(time / 86400)
    const remainTime = time % 86400
    const hours = parseInt(remainTime / 3600)
    const minutes = parseInt((remainTime / 60) % 60)
    const seconds = Math.ceil(remainTime % 60)
    return `${days > 0 ? days + '天' : ''}${hours > 0 ? hours + '小时' : ''}${minutes > 0 ? minutes + '分' : ''}${seconds}秒`
}
let chartDataY = statistics.map(item => {
      return item.value
    })
    let chartDataX = statistics.map(item => {
      return moment(new Date(item.time)).format('YYYY-MM-DD')
    })
let option = {
      grid: {
        x: 0,
        y: 40,
        x2: 0,
        y2: 50,
      },
      xAxis: {
        type: 'category',
        show: false,
        data: chartDataX
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
          data: chartDataY,
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
onMounted(() => {
  let myChart = echarts.init(trendRef.value)
  const chartResize = () => {
    if (myChart) myChart.resize()
  }
  option && myChart.setOption(option)
  window.addEventListener('resize', chartResize)
})
</script>

<template>
    <div class='chartCard'>
    <div class='container'>
      <div class='chartHead'>
        <div class='cardTitle'>
          {{title}}
          <el-tooltip :content="tip" placement="top">
            <el-icon><QuestionFilled /></el-icon>
          </el-tooltip>
        </div>
      </div>
      <h1 class='cardParameter'>{{averageTime ? averageTime : '-'}}</h1>
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