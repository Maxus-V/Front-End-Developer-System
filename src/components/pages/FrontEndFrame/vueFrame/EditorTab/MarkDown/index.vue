<script setup>
import { ref } from "vue"
import { ElCard } from "element-plus"

import MdEditor from "md-editor-v3"
import "md-editor-v3/lib/style.css"

const text = ref("## test")
</script>

<template>
    <ElCard shadow="never" :body-style="{ padding: '30px' }" >
        <MdEditor v-model="text" class="m-t8" />
    </ElCard>
</template>

<style lang="scss" scoped>
</style>