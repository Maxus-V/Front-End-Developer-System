<script setup>
import { ref } from 'vue'
import Card from './Card.vue'

import {publicFields} from '../../pages/FrontEndBasics/config/constant'

// const arr = [
// {
//     id: 1,
//     name: 'Write a cool JS library',
//   },
//   {
//     id: 2,
//     name: 'Make it generic enough',
//   },
//   {
//     id: 3,
//     name: 'Write README',
//   },
// ]

const arr = publicFields[0].children

const cards = ref(arr)

const moveCard = (dragIndex, hoverIndex) => {
    const item = cards.value[dragIndex]
    cards.value.splice(dragIndex, 1)
    cards.value.splice(hoverIndex, 0, item)
}

</script>

<template>
  <div>
    <Card
      v-for="(card, index) in cards"
      :id="card.id"
      :key="card.id"
      :name="card.name"
      :index="index"
      :move-card="moveCard"
      :disabled="card.disabled"
    />
  </div>
</template>