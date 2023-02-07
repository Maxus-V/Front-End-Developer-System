<script setup>
import { reactive } from 'vue';
import { ElForm, ElFormItem, ElSelect, ElOption, ElButton, ElRow, ElCol } from 'element-plus';

import IndexBox from '@/components/basic/IndexBox/index.vue'

const handleRuleState = reactive({
    dynamicRules: [
        {
            index: 0,
            dynamickeys: []
        },
    ]
})

const delelteRule = () => {

}

const deleteRuleCondition = (ruleIndex, conditionKey) => {
    const newRules = [...handleRuleState.dynamicRules]
    newRules[ruleIndex] = {
        ...newRules[ruleIndex],
        dynamickeys: newRules[ruleIndex].dynamickeys.filter(item => item.index !== conditionKey)
    }
    handleRuleState.dynamicRules = newRules
}

const addRuleCondition = (ruleIndex) => {
    const newRules = [...handleRuleState.dynamicRules]
    const preDynamicKeys = newRules[ruleIndex].dynamickeys
    newRules[ruleIndex] = {
        ...newRules[ruleIndex],
        dynamickeys: newRules[ruleIndex].dynamickeys.concat({index: getNewLastKey(preDynamicKeys)})
    }
    handleRuleState.dynamicRules = newRules
    console.log('handleRuleState.dynamicRules', handleRuleState.dynamicRules)
}

const getNewLastKey = (keysArr = []) => {
  if (keysArr.length) {
    return keysArr[keysArr.length - 1].index + 1
  }
  return 0
}

const addRule = (preRules) => {
    handleRuleState.dynamicRules = preRules.concat({
        index: getNewLastKey(preRules),
        dynamickeys: []
    })
}

</script>

<template>
    <div class="handle-rule">
        <div style="padding-left: 10px;">
            <IndexBox v-for="(item) in handleRuleState.dynamicRules" :key="item.index">
                <template #index>{{ item.index + 1 }}</template>
                <template #title>
                    <ElForm>
                        <ElFormItem class="form-item">
                            <ElSelect placeholder="请选择合并规则">
                                <ElOption />
                            </ElSelect>
                            <ElButton @click="delelteRule">删除</ElButton>
                        </ElFormItem>
                    </ElForm>
                </template>
                <template #extra>
                    <div class="or">或</div>
                </template>
                <div>
                    <div v-for="(key, keyIndex) in item" :key="key.index">
                        <ElRow>
                            <ElForm>
                                <ElFormItem style="flex: 1">
                                    <ElSelect />
                                </ElFormItem>
                                <ElButton @click="deleteRuleCondition(index, key.index)">删除</ElButton>
                            </ElForm>
                        </ElRow>
                        <div v-show="keyIndex !== (item.dynamickeys.length - 1)" class="and">和</div>
                    </div>
                    <div style="margin-top: 8px">
                        <ElButton type="primary" @click="addRuleCondition(item.index)">添加条件</ElButton>
                    </div>
                </div>
            </IndexBox>
        </div>
        <ElButton type="primary" @click="addRule(handleRuleState.dynamicRules)">添加</ElButton>
    </div>
</template>

<style lang="scss" scoped>

</style>