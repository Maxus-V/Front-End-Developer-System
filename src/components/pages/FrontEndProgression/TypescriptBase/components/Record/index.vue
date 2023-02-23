<script setup>
import { ref } from "vue"
import { ElCard, ElInput } from "element-plus";
import { useQRCode } from "@vueuse/integrations/useQRCode";

const text = ref("")
const qrCode = useQRCode(text)
</script>

<template>
    <div class="selfHealingStrategy">
        <div class="tableTopLine">
            <div class="searchHeader"></div>
        </div>
        <div className="content">
          <ElCard class="box-card">
            <template #header>
              <div class="card-header">
                <span>二维码生成</span>
              </div>
            </template>
            <div class="text item">
              <ElInput v-model="text" placeholder="输入内容即可在下方展示二维码" />
              <img v-if="text" :src="qrCode" alt="QR Code" />
            </div>
          </ElCard>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.selfHealingRecord {
    .tableTopLine {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      position: absolute;
      top: 5px;
      right: 0;

      .searchHeader {
        display: flex;
        flex-direction: row;

        .aevt-select {
          width: 150px;
          margin-right: 10px;
        }

        .input {
          width: 150px;
          margin-left: 10px;
        }
      }

      .addBtn {
        margin-left: 30px;
      }
    }
  }
</style>