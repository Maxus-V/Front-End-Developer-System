<script setup>
// import { toRefs } from 'vue';
import { 
  ElRow,
  ElCol
} from 'element-plus';

import TextCard from './subComponents/TextCard.vue'
import ProgressCard from './subComponents/ProgressCard.vue'
import ChartCard from './subComponents/ChartCard.vue'

const props = defineProps({
  cardData: {
    type: Object,
    default: {}
  }
})

// const { cardData } = toRefs(props);

let cardData = props.cardData
const {incidentSummary = {}, pendingIncidentSummary = {}, compressRateSummary={}, mttaSummary = {}, mttrSummary = {}} = cardData;

</script>

<template>
    <div class="cardZone">
        <el-row :gutter="10">
          <el-col :span="4">
            <TextCard
              title="事件概览"
              :cardData="incidentSummary"
            />
          </el-col>
          <el-col :span="4">
            <TextCard
              title="待办事件"
              :cardData="pendingIncidentSummary"
            />
          </el-col>
          <el-col :span="4">
            <ProgressCard
              title="压缩比"
              :cardData="compressRateSummary"
            />
          </el-col>
          <el-col :span="6">
            <ChartCard
              title="MTTA"
              :cardData="mttaSummary"
              tip="这里是MTTA"
            />
          </el-col>
          <el-col :span="6">
            <ChartCard
              title="MTTR"
              :cardData="mttrSummary"
              tip="这里是MTTR"
            />
          </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>

</style>