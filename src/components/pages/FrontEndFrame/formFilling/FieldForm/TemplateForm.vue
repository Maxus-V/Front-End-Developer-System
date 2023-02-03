<script setup>
import { ElDialog, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

const props = defineProps({
    modalVisible: Boolean,
})

const emit = defineEmits(['changeModalVisible'])

const changeModalVisible = () => {
  emit("changeModalVisible", false)
}
const onSave = () => {
  changeModalVisible()
}
</script>

<template>
    <ElDialog :model-value="props.modalVisible" @close="changeModalVisible" title="保存模板">
        <ElForm label-width="80px">
            <ElFormItem label="模板名称">
                <ElInput placeholder="请输入模板名称" />
            </ElFormItem>   
            <ElFormItem label="描述">
                <ElInput type="textarea" placeholder="请输入描述" />
            </ElFormItem>
        </ElForm>
        <template #footer>
            <ElButton @click="changeModalVisible">取消</ElButton>
            <ElButton type="primary" @click="onSave">确定</ElButton>
        </template>
    </ElDialog>
</template>

<style lang="scss" scoped>

</style>