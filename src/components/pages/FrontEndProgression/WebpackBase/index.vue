<script setup>
import { ref } from "vue"
import { useQRCode } from "@vueuse/integrations/useQRCode"
import { ElCard, ElInput } from "element-plus";

const text = ref("")
const count = ref(0)
const qrCode = useQRCode(text)

const load = () => {
  count.value += 1;

}
</script>

<template>
    <ElCard class="box-card">
      <template #header>
        <div class="card-header">
          <span>输入内容展示二维码</span>
        </div>
      </template>
      <div class="text item">
        <ElInput v-model="text" placeholder="输入内容即可展示二维码" />
        <img v-if="text" :src="qrCode" alt="QR Code" />
      </div>
    </ElCard>
    <ElCard> 
      <template #header>
        <div class="card-header">
          无限滚动列表
        </div>
      </template>
      <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">
          {{ `我是第${i}` }}
        </li>
      </ul>
    </ElCard>
</template>