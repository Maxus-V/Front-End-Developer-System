<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'

import { getListDetail } from './service'

const route = useRoute()
const id = route.params.id

let test = undefined
onMounted(() => {
    console.log('id', id)
    getListDetail(id).then(res => {
        test = res.data
    })
})
</script>

<template>
    <div>
        this is detail {{ test }}
    </div>
</template>

<style lang="scss" scoped>

</style>