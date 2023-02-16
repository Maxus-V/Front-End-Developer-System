<script setup>
import { ref } from "vue";
import { ElCard } from "element-plus";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";

const text = ref("## test");
</script>

<template>
    <ElCard shadow="never" :body-style="{ padding: '30px' }" >
        <template #header>
        <div class="card-header">
            Markdown编辑器，基于vue3，使用jsx和typescript语法开发，支持切换主题、prettier美化文本等。
        </div>
        </template>
        <md-editor v-model="text" class="m-t8" />
    </ElCard>
</template>

<style lang="scss" scoped>

</style>