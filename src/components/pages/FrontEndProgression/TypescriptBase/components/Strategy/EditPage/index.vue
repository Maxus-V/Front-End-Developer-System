<script setup>
import { ref, reactive } from 'vue';
import { ElDialog, ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElDivider, ElButton, ElMessage } from 'element-plus';

import HandleRule from './HandleRule/index.vue'

const selfJobList = [
    {
        jobId: 0,
        jobName: '自学'
    },
    {
        jobId: 1,
        jobName: '课程'
    },
]

const props = defineProps({
    modalVisible: Boolean
})

const emit = defineEmits(['changeModalVisible'])

const ruleFormRef = ref()

const editPageState = reactive({
    name: '',
    description: '',
    type: '自学',
    subType: '',
    dynamicRules:[{
        index: 0,
        dynamickeys: [],
        studyCategory: 'studyTheme',
    }],
})
const rules = reactive({
    name: [
        { required: true, message: '请输入学习策略名称' },
        { max: 50, message: '策略名称长度最大为50' },
        { pattern: /^[\u4E00-\u9FA5\w(\./\\:\(\)&\-\s)]{1,200}$/, 
          message: '名称只支持输入中文、英文、数字、_、.、()、-、&、/、\\、: 最大长度不能超过50',
        },
    ],
    description: [
        {
            max: 200,
            message: '策略描述最多可输入200字符',
        },
    ],
    type: [
        { required: true, message: '必填' },
    ],
})

const changeModalVisible = () => {
    emit("changeModalVisible", false)
}
const changeDynamicRules = (value) => {
    editPageState.dynamicRules = value
}
const onSave = async (ruleFormRef) => {
    if (!ruleFormRef) return
    ruleFormRef.validate((valid, fields) => {
        if (valid) {
            ElMessage({
                message: '表单已提交！',
                type: 'success',
            })
            console.log('提交的参数为：', editPageState)
            changeModalVisible()
        } else {
            ElMessage({
                message: '请检查表单内容是否填写正确！',
                type: 'error',
            })
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
        <div style="height: 350px; overflow-y: scroll;">
            <ElForm 
                ref="ruleFormRef"
                :model="editPageState"
                :rules="rules"
                class='faultSelfHealing-edit-page'
                label-position="top"
            >
                <ElFormItem prop="name" label="策略名称" class="form-item">
                    <ElInput v-model="editPageState.name" placeholder="请输入学习策略名称" />
                </ElFormItem>
                <ElFormItem prop="description" label="策略描述" class="form-item">
                    <ElInput type="textarea" v-model="editPageState.description" placeholder="请输入学习策略描述" :autosize="{ minRows: 4, maxRows: 4 }" />
                </ElFormItem>
                <ElFormItem prop="type" label="知识类型" class="form-item">
                    <ElSelect v-model="editPageState.type" placeholder="请选择知识类型">
                        <ElOption v-for="item in selfJobList" 
                            :value="item.jobId" 
                            :key="item.jobId"
                            :label="item.jobName"
                        />
                    </ElSelect>
                </ElFormItem>
                <ElFormItem v-show="editPageState.type === 1" prop="subType" label="课程主题" class="form-item">
                    <ElInput v-model="editPageState.subType" placeholder="请输入课程主题" />
                </ElFormItem>
            </ElForm>
            <ElDivider />

            <h3>学习流程</h3>
            <br />
            <HandleRule 
                :editPageState="editPageState"
                @changeDynamicRules="changeDynamicRules"
            />
        </div>
        <template #footer>
            <ElButton @click="changeModalVisible">取消</ElButton>
            <ElButton type="primary" @click="onSave(ruleFormRef)">确定</ElButton>
        </template>
    </ElDialog>
</template>