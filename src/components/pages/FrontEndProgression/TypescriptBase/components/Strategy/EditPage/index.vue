<script setup>
import { ref, reactive } from 'vue';
import { ElDialog, ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElDivider, ElButton } from 'element-plus';

import HandleRule from './HandleRule/index.vue'

const selfJobList = [
    {
        jobId: 0,
        jobName: '测试1'
    },
    {
        jobId: 1,
        jobName: '测试2'
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
    selfHealing_type: '',
    test2: '',
    dynamicRules:[{
        index: 0,
        dynamickeys: []
    }],
})
const rules = reactive({
    name: [
        { required: true, message: '请输入策略名称' },
        { max: 50, message: '策略名称长度最大为50' },
        { pattern: /^[\u4E00-\u9FA5\w(\./\\:\(\)&\-\s)]{1,200}$/, 
          message: '名称只支持输入中文、英文、数字、_、.、()、-、&、/、\\、: 最大长度不能超过50',
        },
    ],
    description: [
        {
            max: 200,
            message: '策略描述最多可输入200字符'
        },
    ],
    selfHealing_type: [
        { required: true, message: '必填' },
    ],
    test2: [
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
        <div style="height: 350px;overflow-y: scroll;">
            <ElForm 
                ref="ruleFormRef"
                :model="editPageState"
                :rules="rules"
                class='faultSelfHealing-edit-page'
                label-position="top"
            >
                <ElFormItem prop="name" label="策略名称" class="form-item">
                    <ElInput v-model="editPageState.name" placeholder="请输入策略名称" />
                </ElFormItem>
                <ElFormItem prop="description" label="策略描述" class="form-item">
                    <ElInput type="textarea" v-model="editPageState.description" placeholder="请输入策略描述" :autosize="{ minRows: 4, maxRows: 4 }" />
                </ElFormItem>
                <ElFormItem prop="selfHealing_type" label="自愈类型" class="form-item">
                    <ElSelect v-model="editPageState.selfHealing_type" placeholder="请选择自愈类型">
                        <ElOption v-for="item in selfJobList" 
                            :value="item.jobId" 
                            :key="item.jobId"
                            :label="item.jobName"
                        />
                    </ElSelect>
                </ElFormItem>
                <ElFormItem v-show="editPageState.selfHealing_type === 1" prop="test2" label="测试2" class="form-item">
                    <ElInput v-model="editPageState.test2" placeholder="请输入测试2内容" />
                </ElFormItem>
            </ElForm>
            <ElDivider />

            <h3>处置条件</h3>
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

<style lang="scss" scoped>

</style>