<script setup>
import { reactive, ref } from "vue"
import { ElCard } from "element-plus"

import { QuillEditor } from "@vueup/vue-quill"
import "@vueup/vue-quill/dist/vue-quill.snow.css"

const readOnly = ref(false)
const content = ref("<h1><strong>test</strong></h1>")

const toolbarOptions = reactive([
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],

  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
]);

const textChange = (text) => {
  //文本改变时触发
}
const update = (text) => {
  content.value = text ? text : ""
}
const ready = () => {
  //Quill初始化后触发
}
</script>

<template>
    <ElCard shadow="never" :body-style="{ padding: '30px' }">
      <QuillEditor 
        class="m-t8 min-h350" 
        :read-only="readOnly" 
        placeholder="请输入内容" 
        theme="snow"
        :toolbar="toolbarOptions" 
        content-type="html" 
        :content="content" 
        @text-change="textChange" 
        @ready="ready"
        @update:content="update" 
      />
      <ElCard class="synchroization">
        <template #header>
          <h1>HTML代码区</h1>
        </template>
        <div v-text="content ? content : '输入内容后自动同步'"></div>
      </ElCard>
      <ElCard class="synchroization">
        <template #header>
          <h1>TEXT文本区</h1>
        </template>
        <div v-html="content ? content : '输入内容后自动同步'"></div>
      </ElCard>
    </ElCard>
</template>

<style lang="scss" scoped>
.synchroization {
  margin-top: 10px;
}
</style>