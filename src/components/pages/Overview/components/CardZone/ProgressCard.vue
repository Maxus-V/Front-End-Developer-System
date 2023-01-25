<script setup>
import { computed } from 'vue';
import { ElProgress } from 'element-plus';

const props = defineProps({
  title: String,
  cardData: Object,
})

const compressRate = computed(() => props.cardData.compressRate || 0)
</script>

<template>
<div class='chartCard'>
  <div class='container'>
    <div class='chartHead'>
      <div class='cardTitle'>{{title}}</div>
    </div>
    <h1 class='cardParameter'>{{compressRate}}%</h1>
    <div class='progressArea'>
      <ElProgress :percentage="compressRate"></ElProgress>
    </div>
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
        }
      }
      .cardParameter {
        font-size: 24px;
        padding-left: 16px;
      }
      .progressArea {
        padding: 0 8% 0;
        height: 30%;
        .progressText {
          margin-left: 10px;
          color: black;
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