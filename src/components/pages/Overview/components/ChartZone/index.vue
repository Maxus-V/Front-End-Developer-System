<script setup>
import { ref } from 'vue'
import { ElRadioGroup, ElRadioButton } from 'element-plus';

import TriChart from './TriChart.vue'

const props = defineProps({
    chartData: Object,
    recentDays: String
})

const radio1 = ref(null)

const {incidentTrend, alertTrend, eventTrend} = props.chartData
let alertsXAxisData = []
    incidentTrend && incidentTrend.forEach(item => {
    alertsXAxisData.push(item.time)
  })
  alertTrend && alertTrend.forEach(item => {
    alertsXAxisData.push(item.time)
  })
  eventTrend && eventTrend.forEach(item => {
    alertsXAxisData.push(item.time)
  })
  let formatAlertsXAxisData = alertsXAxisData.sort((a,b) => a-b).map(item => {
    return moment(new Date(item)).format('YYYY-MM-DD')
  })

</script>

<template>
<div class='chartContent'>
        <div class='content-div'>
          <h3 class='hasBottom'>
            告警事件趋势
            <el-radio-group v-model="radio1">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button label="我的"></el-radio-button>
            </el-radio-group>
          </h3>
          <div class="chart-h-200">
            <TriChart
                :formatAlertsXAxisData="formatAlertsXAxisData"
                :chartData="chartData"
            />
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
          // -webkit-box-shadow: 0px 2px 4px 0px rgba(31, 40, 54, 0.2);
          // -moz-box-shadow: 0px 2px 4px 0px rgba(31, 40, 54, 0.2);
          // box-shadow: 0px 2px 4px 0px rgba(31, 40, 54, 0.2);

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
        }

      }

      .chart-h-200 {
        height: 200px;
      }

      .chart-h-150 {
        height: 150px;
      }

      .chart-h-pie {
        height: 180px;
        text-align: center;
        color: #000;
      }

      .chart-border {
        border: 1px solid #ccc;
        height: 180px;
        width: 180px;
        border-radius: 50%;
      }
</style>