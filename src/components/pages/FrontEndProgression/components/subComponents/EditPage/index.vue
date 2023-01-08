<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElDialog, ElForm, ElFormItem, ElInput, ElSelect, ElDivider, ElRow, ElButton, ElOption } from 'element-plus';
import Handle from '../Handle/index.vue'

import { debounce } from 'lodash';

const props = defineProps({
    state: Object,
    changeShowDialog: Function
})

const { state } = props

const {showDialog} = state

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    name:'',
    description: '',
    selfHealing_type: '',
    intervalTime: 0,
    handle: '222',
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', fields)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const checkStrategyName = (rule, value, callback, source) => {
    //TODO debouce应用+ 重复命名提示
}
</script>

<template>
    <el-dialog
        v-model="showDialog"
        title="新建策略"
    >
        <el-form 
            ref="ruleFormRef" 
            :model="ruleForm"
        >
            <el-form-item 
                label="策略名称：" 
                class="formItem"
                prop="name"
                :rules="[{ 
                    required: true, 
                    message: '请输入名称'
                },{
                    max: 50, 
                    message: '不能超过50字'
                },{
                    pattern: /^[\u4E00-\u9FA5\w(\./\\:\(\)&\-\s)]{1,200}$/,
                    message: '请输入正确格式'
                }, {
                    validator: checkStrategyName
                }]"
            >
                <el-input 
                    v-model="ruleForm.name"
                    :validate-event="true"
                    placeholder="请输入名称"
                />
            </el-form-item>
            <el-form-item 
                label="策略描述：" 
                class="formItem"
                prop="description"
                :rules="[{
                    max: 200,
                    message: '不能超过200'
                }]"
            >
                <el-input 
                    type="textarea"
                    v-model="ruleForm.description"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    placeholder="请输入描述"
                />
            </el-form-item>
            <el-form-item
                label="自愈类型："
                class="formItem"
                prop="selfHealing_type"
                :rules="[{
                    required: false, 
                    message: '请选择自愈类型'
                }]"
            >
                <el-select 
                    placeholder="请选择自愈类型"
                >
                    <el-option value="0"></el-option>
                </el-select>
            </el-form-item>

            <el-divider/>
            动态合并规则
            <Handle
                :ruleForm="ruleForm"
            /> 
            <el-divider/>
            <div>

            </div>
            <el-form-item
                label="执行间隔："
                class="formItem"
                prop="intervalTime"
            >
                <el-input
                    type="number"
                    v-model="ruleForm.intervalTime"
                    placeholder="请输入时间"
                />
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
    </el-dialog>
</template>

<style lang="scss" scoped>

</style>