<script setup>
import { reactive } from 'vue'
import { ElDialog, ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';

const props = defineProps({
    modalVisible: Boolean,
})

const emit = defineEmits(['changeModalVisible'])

const templateFormState = reactive({
    name: '',
    description: '',
})

const changeModalVisible = () => {
  emit("changeModalVisible", false)
}
const onSave = () => {
    ElMessage({
        message: '已执行保存的操作！',
        type: 'success',
    })
  changeModalVisible()
  console.log('参数为：', templateFormState)
}
</script>

<template>
    <ElDialog :model-value="props.modalVisible" @close="changeModalVisible" title="保存模板">
        <ElForm label-width="80px">
            <ElFormItem label="模板名称">
                <ElInput v-model="templateFormState.name" placeholder="请输入模板名称" />
            </ElFormItem>   
            <ElFormItem label="描述">
                <ElInput v-model="templateFormState.description" type="textarea" placeholder="请输入描述" />
            </ElFormItem>
        </ElForm>
        <template #footer>
            <ElButton @click="changeModalVisible">取消</ElButton>
            <ElButton type="primary" @click="onSave">确定</ElButton>
        </template>
    </ElDialog>
</template>