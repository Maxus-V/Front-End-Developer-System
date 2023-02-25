<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { ElForm, ElFormItem, ElSwitch } from 'element-plus'
import { useDark, useToggle } from '@vueuse/core'

import BasicCard from '@/components/basic/BasicCard/index'

const store = useStore()

const isDark = useDark()
const toggleDark = useToggle(isDark)

watch(() => store.state.openDarkMode, (newV, oldV) => {
  if (newV) {
    localStorage.setItem('openDarkMode', true)
  } else {
    localStorage.removeItem('openDarkMode')
  }
  toggleDark()
})
</script>

<template>
    <BasicCard title="黑夜模式">
        <ElForm>
            <ElFormItem label="黑夜模式">
                <ElSwitch
                    v-model="store.state.openDarkMode"
                />
            </ElFormItem>
        </ElForm>
    </BasicCard>
</template>