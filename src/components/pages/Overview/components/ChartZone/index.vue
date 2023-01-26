<script setup>
import { ref } from 'vue'
import { ElRadioGroup, ElRadioButton } from 'element-plus';

import TriChart from './TriChart.vue'

const props = defineProps({
    chartData: Object,
})
const emit = defineEmits(['changeIsAll'])

const radio = ref('all')
</script>

<template>
  <div class='chartContent'>
    <div class='content-div'>
      <div class='hasBottom'>
        <h3>告警事件趋势</h3>
        <ElRadioGroup v-model="radio" @change="emit('changeIsAll')">
          <ElRadioButton label="all">全部</ElRadioButton>
          <ElRadioButton label="my">我的</ElRadioButton>
        </ElRadioGroup>
      </div>
      <div class="chart-h-200">
        <TriChart
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