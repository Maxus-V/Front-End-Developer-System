<script setup>
import { ref, reactive, computed} from 'vue'
import { ElDrawer, ElForm, ElFormItem, ElInput,
         ElButton, ElUpload, ElIcon} from 'element-plus';
import { Upload } from '@element-plus/icons-vue';

const props = defineProps({
    modalVisible: Boolean,
})

const emit = defineEmits(['changeModalVisible'])

const modalVisible = computed(() => props.modalVisible)

const formRef = ref(null)

const formValues = reactive({
    name: 'Hello',
})
const formRules = reactive({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
})

const onCancel = () => {
    emit('changeModalVisible', false)
}

const onSubmit = async (formRef) => {
    if (!formRef) return
    await formRef.validate((valid, fields) => {
        if (valid) {
            console.log('该发送请求了', valid)
            emit('changeModalVisible', false)
        } else {
            console.log('error submit!', fields)
            return
        }
    })
}
</script>

<template>
    <ElDrawer
        title='数据导入'
        :model-value="modalVisible"
        @close="onCancel"
        :modal="false"
        size="620"
        class="drawer-offLink"
    >
    <div style="height: 100%;">
        <ElForm 
            ref="formRef"
            :model="formValues"
            :rules="formRules"
            label-width="80px" 
        >
            <ElFormItem label="任务名称" class="form-item" prop="name">
                <ElInput placeholder="请输入任务名称" v-model="formValues.name"/>
            </ElFormItem>
            <ElFormItem label="描述" class="form-item">
                <ElInput placeholder="请输入描述"/>
            </ElFormItem>
            <ElFormItem label="告警源" class="form-item">
                <ElInput placeholder="请选择告警源"/>
            </ElFormItem>
            <div>
                <ElFormItem label="数据导入" class="form-item">
                    <div style="display: flex; position: relative">
                        <ElUpload accept=".xlsx" >
                            <ElButton>
                                <ElIcon><Upload /></ElIcon>
                                <span>点击上传</span>
                            </ElButton>
                        </ElUpload>
                    </div>
                </ElFormItem>
                <ElFormItem class="form-item">
                    仅支持XLSX格式文件，
                    下载模板
                </ElFormItem>
            </div>
        </ElForm>
        <div class="drawer-footer"
            style="position: absolute; right: 0; bottom: 0; width: 100%; padding: 10px 16px; text-align: left;"
        >
            <ElButton type="primary" style="margin-right: 8px" @click="onSubmit(formRef)">
                确定
            </ElButton>
            <ElButton @click="onCancel">
                取消
            </ElButton>
        </div>
    </div>
    </ElDrawer>
</template>

<style lang="scss" scoped>

</style>