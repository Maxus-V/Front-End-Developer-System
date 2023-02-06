<script setup>
import { ref, reactive } from 'vue';
import { ElDialog, ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

const props = defineProps({
    modalVisible: Boolean
})

const emit = defineEmits(['changeModalVisible'])

const ruleFormRef = ref()

const editPageState = reactive({
    name: '',
})
const rules = reactive({
    name: [
        { required: true, message: '请输入策略名称' },
        { max: 50, message: '策略名称长度最大为50' },
        { pattern: /^[\u4E00-\u9FA5\w(\./\\:\(\)&\-\s)]{1,200}$/, 
          message: '名称只支持输入中文、英文、数字、_、.、()、-、&、/、\\、: 最大长度不能超过50',
        },
    ],
})

const changeModalVisible = () => {
    emit("changeModalVisible", false)
}
const onSave = async (ruleFormRef) => {
    if (!ruleFormRef) return
    ruleFormRef.validate((valid, fields) => {
        if (valid) {
            console.log('submit!', editPageState)
            changeModalVisible()
        } else {
            console.log('error submit!', fields)
            return 
        }
    })
}
</script>

<template>
    <ElDialog title="新建策略"
        :model-value="modalVisible"
        @close="changeModalVisible"
    >
        <ElForm 
            ref="ruleFormRef"
            :model="editPageState"
            :rules="rules"
            class='faultSelfHealing-edit-page'
        >
            <ElFormItem prop="name" label="策略名称" class="form-item">
                <ElInput v-model="editPageState.name" placeholder="请输入策略名称" />
            </ElFormItem>
        </ElForm>
        <template #footer>
            <ElButton @click="changeModalVisible">取消</ElButton>
            <ElButton type="primary" @click="onSave(ruleFormRef)">确定</ElButton>
        </template>
    </ElDialog>
</template>

<style lang="scss" scoped>

</style>