<script setup>
import { onMounted, onUnmounted, ref } from "vue"

import * as eCharts from 'echarts'

const option1 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "学习时长",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "HTML" },
          { value: 735, name: "CSS" },
          { value: 580, name: "JavaScript" },
        ],
      },
    ],
}
  const option2 = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "学习时长",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Vue" },
          { value: 735, name: "React" },
          { value: 580, name: "Angular" },
        ],
      },
    ],
}

const originChart = ref(null)
const originChart2 = ref(null)

const loadOriginChart = () => {
  originChart.value = eCharts.init(document.getElementById("originChart"))
  originChart2.value = eCharts.init(document.getElementById("originChart2"))
  originChart.value.setOption(option1)
  originChart2.value.setOption(option2)
}

onMounted(() => loadOriginChart())
onUnmounted(() => {
    if (originChart.value) {
        originChart.value.dispose()
    }
    if (originChart2.value) {
        originChart2.value.dispose()
    }
})
</script>

<template>
    <div class='chartContent'>
      <div class='content-div'>
        <div class='hasBottom'>
          <h3>学习占比参考</h3>
        </div>  
        <div class="chart-h-200">
            <div id="originChart" class="home_charts"></div>
            <div id="originChart2" class="home_charts"></div>   
        </div>
      </div>
    </div>
  </template>

<style lang="scss" scoped>
.chartContent {
margin-top: 16px;
height: 300px;
  >div.content-div {
    padding: 15px;
    background: white;
    height: 300px;
    border-radius: 2px;
    >.hasBottom {
      border-bottom: 1px solid gray;
      padding-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    >.center {
      padding: 25px;
      text-align: center;
      font-size: 12px;
      font-weight: normal;
      >span {
        margin-left: 10px;
        color: skyblue  !important;
        >img {
          width: 20px;
          height: 14px;
          margin-right: 5px;
        }
        .bg {
          width: 20px;
          height: 10px;
          display: inline-block;
          margin-right: 5px;
        }
        .bg-unHandler {
          background-image: linear-gradient(to right, #FF6160, #FF8A00);
        }
        .bg-unResolved {
          background-image: linear-gradient(to right, #FFA560, #FFDF00);
        }
        .bg-resolved {
          background-image: linear-gradient(to right, #60BFFF, #1B7FFF);
        }
      }
    }
    >.chart-h-200 {
        width: 560px;
        height: 260px;
        display: flex;
        margin-top: 10px;
        .home_charts {
            width: 50%;
            height: 90%;
        }
    }
  }
}
</style>