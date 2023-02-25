<script setup>
import { watch } from 'vue'
import { useStore } from 'vuex'
import { ElForm, ElFormItem, ElSwitch } from 'element-plus'

import BasicCard from '@/components/basic/BasicCard/index'
import { setWaterMarker, removeWaterMarker } from '@/utils/setWaterMark'

const store = useStore()

watch(() => store.state.hasWaterMarker, (newV, oldV) => {
  if (newV) {
    localStorage.setItem('hasWaterMarker', true)
    setWaterMarker("FrontEndDeveloperSystem")
  } else {
    localStorage.removeItem('hasWaterMarker')
    removeWaterMarker()
  }
})
</script>

<template>
    <BasicCard title="添加水印">
      <ElForm>
        <ElFormItem label="开启水印">
          <ElSwitch 
              v-model="store.state.hasWaterMarker" 
          />
        </ElFormItem>
      </ElForm>
    </BasicCard>
</template>