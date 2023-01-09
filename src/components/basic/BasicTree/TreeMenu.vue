<script setup>
import ReSubMenu from './ReSubMenu.vue'
const props = defineProps({
    dataSource: Array,
    addSelectNodes:Function,
    treeState: Object,
    changeTreeState: Function
})

</script>

<template>
         <template v-for="data in dataSource">
                 <div :key="data.name" v-if="!data.children">{{data.name}}</div>
                 <ReSubMenu v-else 
                    :data="data"
                    :addSelectNodes="addSelectNodes"
                    :treeState="treeState"
                    :changeTreeState="changeTreeState"
                    :dataSource="dataSource"
                >
                </ReSubMenu>
         </template>
</template>