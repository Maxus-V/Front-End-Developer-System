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
        <h3>学习趋势</h3>
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
</style>