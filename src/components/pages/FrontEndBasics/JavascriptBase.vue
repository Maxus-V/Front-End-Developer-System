<script>
  import { 
    ElInput,
    ElButton,
    ElResult
  } from 'element-plus';

  export default {
    components: {
      ElInput,
      ElButton,
      ElResult
    },
    data() {
      return {
        result: '这里已经满员了'
      }
    },
    methods: {
      change() {
      }
    }
  }
</script>

<script setup>
import {ref} from 'vue'
const input = ref('')
</script>

<template>
  <p>undefined、null、false、+0、-0、NaN、""</p>
  <br/>
  <ElInput
    v-model="input"
    placeholder="请依次输入上述内容查看转化结果"
    clearable
  />
  <br/>
  <br/>
  <ElButton @click="change">确定</ElButton>
  <br/>
  <p>{{ result }}</p>
</template>