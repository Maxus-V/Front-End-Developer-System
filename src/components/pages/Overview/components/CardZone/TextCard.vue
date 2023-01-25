<script setup>
import { reactive, computed } from 'vue';
import { ElIcon } from 'element-plus';

import { thousandth } from '@/utils';
import UpgradeIcon from '@/components/icons/IconUpgrade.vue'

const props = defineProps({
  title: String,
  cardData: Object
})

const textCardState = reactive({
  myCount: computed(() => props.cardData.myCount || 0),
  allCount: computed(() => props.cardData.allCount || 0),
  todayMyTotal: computed(() => props.cardData.todayMyTotal || 0),
  todayAllTotal: computed(() => props.cardData.todayAllTotal || 0),
})

const contents = [
  {
    classNames: 'events',
    href: '/frontendbasics/htmlbase',
    count: 'myCount',
    eventName: '我的事件',
    totalCount: 'todayMyTotal',
  },
  {
    classNames: 'all events',
    href: '/frontendbasics/cssbase',
    count: 'allCount',
    eventName: '所有事件',
    totalCount: 'todayAllTotal',
  },
]
</script>

<template>
    <div class='textCard'>
    <div class='container'>
      <div class='cardTitle'>{{title}}</div>
        <div class='cardContent'>
          <div v-for="content in contents" :class="content.classNames">
            <RouterLink :to="content.href">
                <h1 class='main'>{{thousandth(textCardState[content.count])}}</h1>
                <div class='head lucency'>{{ content.eventName }}</div>
                <div class='footer lucency'>
                  <span>+{{ textCardState[content.totalCount] }}</span>
                  <ElIcon><UpgradeIcon /></ElIcon>
                </div>
            </RouterLink>
          </div>
        </div>
        <div class='dashline'></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    .textCard{
    .container {
      height: 138px;
      font-size: 14px;
      background-color: white;
      .cardTitle {
        color: black;
        padding: 16px 0 0 16px;
      }
      .cardContent {
        display: flex;
        font-size: 12px;
        padding-left: 16px;
        // border: 1px solid red;
        .events {
          display: flex;
          flex-direction: column;
          .head {
            // padding-bottom: 8px;
          }
          .main {
            font-size: 22px;
            color: #000000;
            // margin-bottom: 8px;
          }
          .lucency {
            color: black;
            margin-bottom: 10px;
          }
        }
        .all {
          padding-left: 29%;
        }
        a {
          text-decoration: none;
        }
      }
      .dashline {
        position: relative;
        bottom: 33px;
        width: 80%;
        margin-left: 16px;
        border: 0.5px dashed #000000;
        opacity: 0.2;
      }
    }
  }
</style>