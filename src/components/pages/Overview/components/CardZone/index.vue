<script setup>
import { reactive, computed } from 'vue';
import { ElRow, ElCol } from 'element-plus';

import TextCard from './TextCard.vue'
import ProgressCard from './ProgressCard.vue'
import ChartCard from './ChartCard.vue'

const props = defineProps({
  cardsData: Object
})

const cardZoneState = reactive([
  { value: computed(() => props.cardsData.incidentSummary) },
  { value: computed(() => props.cardsData.pendingIncidentSummary) },
  { value: computed(() => props.cardsData.compressRateSummary) },
  { value: computed(() => props.cardsData.mttaSummary) },
  { value: computed(() => props.cardsData.mttrSummary) },
])

const cards = [
  {
    width: 4,
    title: '事件概览',
    type: TextCard,
  },
  {
    width: 4,
    title: '待办事件',
    type: TextCard,
  },
  {
    width: 4,
    title: '压缩比',
    type: ProgressCard,
  },
  {
    width: 6,
    title: 'MTTA',
    tip: '平均响应时间',
    type: ChartCard,
  },
  {
    width: 6,
    title: 'MTTR',
    tip: '平均修复时间',
    type: ChartCard,
  },
]
</script>

<template>
    <div class="cardZone">
      <ElRow :gutter="10">
        <ElCol v-for="(card, index) in cards" :span="card.width" :key="index">
          <component :is="card.type"
              :title="card.title"
              :tip="card.tip || null"
              :cardData="cardZoneState[index].value"
          />
        </ElCol>
      </ElRow>
    </div>
</template>

<style lang="scss" scoped>

</style>