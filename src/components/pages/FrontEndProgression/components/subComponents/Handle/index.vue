<script setup>

import { ElFormItem, ElInput } from 'element-plus';
const prop = defineProps({
    ruleForm: Object
})
</script>

<template>
    <div>
        <el-form-item
            label="名称：" 
            class="formItem"
            prop="handle"
            :rules="[{ 
                    required: true, 
                    message: '请输入名称'
                },{
                    max: 50, 
                    message: '不能超过50字'
                },{
                    pattern: /^[\u4E00-\u9FA5\w(\./\\:\(\)&\-\s)]{1,200}$/,
                    message: '请输入正确格式'
                }]"
        >
        <el-input 
                    v-model="ruleForm.handle"
                    placeholder="请输入名称"
                />
        </el-form-item>
    </div>
</template>

<style lang="scss" scoped>

</style>