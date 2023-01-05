<script setup>
import ReSubMenu from './ReSubMenu.vue'
const props = defineProps({
    dataSource: Array,
    addSelectNodes:Function
})

</script>

<template>
         <template v-for="data in dataSource">
                 <div :key="data.name" v-if="!data.children">{{data.name}}</div>
                 <ReSubMenu v-else 
                    :data="data"
                    :addSelectNodes="addSelectNodes"
                >
                </ReSubMenu>
         </template>
</template>