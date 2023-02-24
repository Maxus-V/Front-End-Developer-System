<script setup>
import { computed } from 'vue'
import { useRoute } from "vue-router"

import RadioGroup from './components/RadioGroup.vue'

const route = useRoute()
const title = computed(() => route.meta.title)
</script>

<template>
  <div class="top">
    <h2>{{ title }}</h2>
    <component :is="title == '概览'? RadioGroup : null"/>
  </div>
  <div class="main">
    <slot name="content"></slot>
  </div>
</template>

<style scoped>
.top {
  height: 7%;
  display: flex;
  justify-content: space-between;
}
.main {
  min-width: 1024px;
  height: 92%;
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 10px;
}
@media (min-width: 1024px) {

}
</style>
  