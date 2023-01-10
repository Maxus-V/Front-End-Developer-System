<script setup>
import ReSubMenu from './ReSubMenu.vue'
const props = defineProps({
    dataSource: Array,
    treeState: Object,
    changeTreeState: Function
})

</script>

<template>
         <template v-for="data in dataSource">
                 <div :key="data.name" v-if="!data.children">{{data.name}}</div>
                 <ReSubMenu v-else 
                    :data="data"
                    :treeState="treeState"
                    :changeTreeState="changeTreeState"
                    :dataSource="dataSource"
                >
                </ReSubMenu>
         </template>
</template>