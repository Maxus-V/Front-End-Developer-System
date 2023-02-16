<script setup>
import { ref } from "vue"
import { useQRCode } from "@vueuse/integrations/useQRCode"
import { ElCard, ElInput } from "element-plus";

const text = ref("")
const qrCode = useQRCode(text)
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
</template>