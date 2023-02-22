<script setup>
import HeaderItemWrapper from './headerItemWrapper/index.vue'
import EditorTab from './EditorTab/index.vue'

const svgsEum = {
  overview: '0',
  html: '1',
  css: '2',
  javascript: '3',
  vue: '4',
  react: '5',
  angular: '6',
  typescript: '7',
  webpack: '8',
  node: '9'
}
</script>

<template>
    <div class="alertSourceHeader">
        <HeaderItemWrapper v-for="svg in Object.keys(svgsEum)" :key="svg" :type="svg">
            <template #image>{{ svg }}</template>
        </HeaderItemWrapper>
    </div>
    <EditorTab />
</template>

<style lang="scss" scoped>
.alertSourceHeader {
      line-height: 80px;
      width: 100%;
      box-sizing: border-box;
      padding: 16px 32px;
      margin-bottom: 16px;
      background: white;
      display: flex;
      flex-direction: row;
      box-shadow: 0 2px 4px rgba(31, 40, 54, 0.06);
    }
</style>