<script setup>
import RadioGroup from './components/RadioGroup.vue'
import { toRefs } from 'vue';
const props = defineProps({
  state: Object
})
const { state } = toRefs(props)
</script>

<template>
    <div class="top">
        <h2>{{ state.title }}</h2>
        <component :is="state.title == '概览'? RadioGroup : null"/>
    </div>
    <div class="main">
        <slot name="content"></slot>
    </div>
  </template>
  
  <style scoped>
  .top {
    height: 7%;
    /* font-size: 20px; */
    /* font-weight: bold; */
    display: flex;
    justify-content: space-between;
  }
  .main {
    height: 92%;
    background-color: rgba(255, 255, 255, 0.2);
    /* overflow-y: scroll; */
    margin-top: 10px;
  }
  
  @media (min-width: 1024px) {
 
  }
  </style>
  