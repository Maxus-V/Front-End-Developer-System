<script setup>
import { ref, reactive} from 'vue'
import { ElDrawer, ElForm, ElFormItem, ElInput,
         ElButton, ElUpload, ElIcon, ElSelect, 
         ElOption, ElDatePicker } from 'element-plus';
import { Upload } from '@element-plus/icons-vue';

const props = defineProps({
    state: Object
})

const { isView } = props.state

const formRef = ref(null)
const formValues = reactive({
    name: 'Hello',
})
const formRules = reactive({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ]
})

const onCancel = () => {
    props.state.isView = !isView
    console.log('closed')
}

const onSubmit = async (formRef) => {
    if (isView) return
    console.log('onSubmit', formRef)
    if (!formRef) return
    await formRef.validate((valid, fields) => {
        if (valid) {
            console.log('该发送请求了')
        } else {
            console.log('error submit!', fields)
        }
    })
}

</script>

<template>
    <el-drawer
        :title="state.taskType === 'uploadData' ? '数据导入' : '事件生成'"
        size="620"
        v-model="state.isView"
        @handleClose="onCancel"
        :modal="false"
        class="drawer-offLink"
    >
    <div style="height: 100%;">
        <el-form 
            label-width="80px" 
            ref="formRef"
            :model="formValues"
            :rules="formRules"
        >
            <el-form-item label="任务名称" class="form-item" prop="name">
                <el-input placeholder="请输入任务名称" v-model="formValues.name"/>
            </el-form-item>
            <el-form-item label="描述" class="form-item">
                <el-input placeholder="请输入描述"/>
            </el-form-item>
            <el-form-item label="告警源" class="form-item">
                <el-input placeholder="请选择告警源"/>
            </el-form-item>
            <div v-if="state.taskType === 'uploadData'">
                <el-form-item label="数据导入" class="form-item">
                    <div style="display: flex; position: relative">
                        <el-upload accept=".xlsx" >
                            <el-button>
                                <el-icon><Upload /></el-icon>
                                点击上传
                            </el-button>
                        </el-upload>
                    </div>
                </el-form-item>
                <el-form-item class="form-item">
                    仅支持XLSX格式文件，
                    下载模板
                </el-form-item>
            </div>
            <div v-else>
                <el-form-item label="合并策略" class="form-item">
                    <el-select>
                        <el-option></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="时间窗口" class="form-item">
                    <el-date-picker></el-date-picker>
                </el-form-item>
                <el-form-item>
                    告警数检测
                </el-form-item>
                <el-form-item>
                    <el-input/>
                </el-form-item>
            </div>
            <el-form-item class="form-item">
                <el-input/>
            </el-form-item>
        </el-form>
        <div class="drawer-footer"
            style="position: absolute; right: 0; bottom: 0; width: 100%; padding: 10px 16px; text-align: left;"
        >
            <el-button type="primary" style="margin-right: 8px" @click="onSubmit(formRef)">
                确定
            </el-button>
            <el-button @click="onCancel">
                取消
            </el-button>
        </div>
    </div>
    </el-drawer>
</template>

<style lang="scss" scoped>

</style>