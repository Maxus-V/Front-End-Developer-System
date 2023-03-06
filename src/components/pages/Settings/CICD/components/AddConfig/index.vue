<script setup>
import { ElForm, ElFormItem, ElInput, ElButton, ElDialog } from 'element-plus'

const formConfig = [
    {
        label: '项目名称',
        prop: 'projectName',
        placeholder: '请输入项目名称',
    },
    {
        label: '仓库地址',
        prop: 'gitUrl',
        placeholder: '请输入仓库地址',
    },
    {
        label: '构建分支',
        prop: 'gitBranch',
        placeholder: '请输入构建分支',
    },
    {
        label: 'shell 命令',
        prop: 'buildCommand',
        placeholder: '请输入shell 命令',
    },
    {
        label: '上传路径',
        prop: 'uploadPath',
        placeholder: '请输入上传路径',
    },
]

const props = defineProps({
    dialogVisible: Boolean,
    dialogTitle: String,
    formData: Object,
})

const emit = defineEmits(['onSubmit', 'changeVisible'])

const changeModel = (value) => {
    emit('changeVisible', value)
}
</script>

<template>
    <ElDialog
      :model-value="dialogVisible"
      @close="changeModel(false)"
      :title="dialogTitle"
      align-center
      width="50%"
  >
    <ElForm :model="formData">
        <ElFormItem v-for="item in formConfig" :label="item.label" :prop="item.prop" label-width="80px">
            <ElInput v-model="formData[item.prop]" :placeholder="item.placeholder" />
        </ElFormItem>
    </ElForm>
    <template #footer>
      <span>
        <ElButton @click="dialogVisible = false">取消</ElButton>
        <ElButton type="primary" @click="emit('onSubmit')">确认</ElButton>
      </span>
    </template>
  </ElDialog>
</template>