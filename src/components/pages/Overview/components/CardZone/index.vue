<script setup>
import { reactive, computed } from 'vue';
import { ElRow, ElCol } from 'element-plus';

import TextCard from './TextCard.vue'
import ProgressCard from './ProgressCard.vue'
import ChartCard from './ChartCard.vue'

const props = defineProps({
  cardsData: {
    type: Object,
    default: {},
  }
})

const cardZoneState = reactive({
  incidentSummary: computed(() => props.cardsData.incidentSummary || {}),
  pendingIncidentSummary: computed(() => props.cardsData.pendingIncidentSummary || {}),
  compressRateSummary: computed(() => props.cardsData.compressRateSummary || {}),
  mttaSummary: computed(() => props.cardsData.mttaSummary || {}),
  mttrSummary: computed(() => props.cardsData.mttrSummary || {}),
})

const cards = [
  {
    width: 4,
    title: '事件概览',
    type: TextCard,
    data: 'incidentSummary',
  },
  {
    width: 4,
    title: '待办事件',
    type: TextCard,
    data: 'pendingIncidentSummary',
  },
  {
    width: 4,
    title: '压缩比',
    type: ProgressCard,
    data: 'compressRateSummary',
  },
  {
    width: 6,
    title: 'MTTA',
    tip: '平均响应时间',
    type: ChartCard,
    data: 'mttaSummary',
  },
  {
    width: 6,
    title: 'MTTR',
    tip: '平均修复时间',
    type: ChartCard,
    data: 'mttrSummary',
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
              :cardData="cardZoneState[card.data]"
          />
        </ElCol>
      </ElRow>
    </div>
</template>

<style lang="scss" scoped>
</style>