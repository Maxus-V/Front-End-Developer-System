<script setup>
import { useRouter } from 'vue-router';

import Add from '@/assets/add.svg'

const props = defineProps({
    type: String
})

const router = useRouter()
</script>

<template>
    <div class="headerItemWrapper"
      @click="router.push(`/frontendframes/formfilling/${type}/create`)"
    >
      <slot name="image"></slot>
      <div class="addBtn">
          <img :src="Add" alt="" class="addIcon" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
.headerItemWrapper {
  width: calc((100% - 84px) / 7);
  height: 60px;
  position: relative;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  background-color: white;

  &:hover {
    border: 1px solid skyblue;
  }

  .addBtn {
    position: absolute;
    width: 24px;
    height: 16px;
    bottom: 0;
    right: 0px;
    // border-radius: 100% 0 0 0;
    border-radius: 4px;
    background: #E6F7FF;
    color: #ffffff;

    .addIcon {
      position: absolute;
      width: 16px;
      height: 10px;
      top: 3px;
      right: 4px;
    }

    //display: flex;
    //justify-content: center;
    //align-items: center;
  }

  >img {
    max-height: 33px;
  }
}
.HeaderItemWrapper .selected {
  border: 1px solid white;
}
.changeColor {
  g {
    fill: black
  }

  path {
    fill: black
  }

  path:nth-child(2) {
    fill: red !important;
  }
}
</style>