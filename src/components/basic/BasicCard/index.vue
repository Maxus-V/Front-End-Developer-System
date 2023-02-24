<script setup>
import { ElCard } from 'element-plus';

const props = defineProps({
    title: String,
})
</script>

<template>
    <ElCard shadow="never" :body-style="{ padding: '30px' }">
        <template #header>
            <div class="card-header">
                {{ title }}
            </div>
        </template>
        <slot></slot>
    </ElCard>
</template>