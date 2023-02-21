<script setup>
import { computed, ref } from 'vue';
import { ElForm, ElFormItem, ElSelect, ElOption, ElButton, ElRow} from 'element-plus';

import IndexBox from '@/components/basic/IndexBox/index.vue'

const props = defineProps({
    editPageState: Object,
})

const emit = defineEmits(['changeDynamicRules'])

const dynamicRules = computed(() => props.editPageState.dynamicRules || [])
const mergeRuleList = ref('')
const optionList = ref('')

const getNewLastKey = (keysArr = []) => {
  if (keysArr.length) {
    return keysArr[keysArr.length - 1].index + 1
  }
  return 0
}

const addRule = () => {
    const newArr = dynamicRules.value.concat({
        index: getNewLastKey(dynamicRules.value),
        dynamickeys: [],
    })
    emit('changeDynamicRules', newArr)
}
const delelteRule = (ruleIndex) => {
    const newArr = dynamicRules.value.filter(item => item.index !== ruleIndex)
    emit('changeDynamicRules', newArr)
}   
const addRuleCondition = (ruleIndex) => {
    const newRules = [...dynamicRules.value]
    const preDynamicKeys = newRules[ruleIndex].dynamickeys
    newRules[ruleIndex] = {
        ...newRules[ruleIndex],
        dynamickeys: newRules[ruleIndex].dynamickeys.concat({index: getNewLastKey(preDynamicKeys)})
    }
    emit('changeDynamicRules', newRules)
}
const deleteRuleCondition = (ruleIndex, conditionKey) => {
    const newRules = [...dynamicRules.value]
    newRules[ruleIndex] = {
        ...newRules[ruleIndex],
        dynamickeys: newRules[ruleIndex].dynamickeys.filter(item => item.index !== conditionKey)
    }
    emit('changeDynamicRules', newRules)
}
</script>

<template>
    <div class="handle-rule">
        <div style="padding-left: 10px;">
            <IndexBox v-for="(dynamicRule, index) in dynamicRules" :key="dynamicRule.index">
                <template #index>{{ index + 1 }}</template>
                <template #title>
                    <ElForm>
                        <ElFormItem class="form-item">
                            <ElSelect v-model="mergeRuleList" placeholder="请选择转化规则">
                                <ElOption value="test1" label="标题1" />
                                <ElOption value="test2" label="标题2" />
                            </ElSelect>
                            <ElButton 
                                v-show="dynamicRules.length > 1" 
                                @click="delelteRule(dynamicRule.index)"
                            >
                                删除
                            </ElButton>
                        </ElFormItem>
                    </ElForm>
                </template>
                <div v-for="(dynamickey, dynamickeyIndex) in dynamicRule.dynamickeys" :key="dynamickeyIndex">
                    <ElForm>
                        <ElFormItem>
                            <ElSelect v-model="optionList" placeholder="请进行选择">
                                <ElOption value="test1" label="选项1" />
                                <ElOption value="test2" label="选项2" />
                            </ElSelect> 
                            <ElButton @click="deleteRuleCondition(dynamicRule.index, dynamickey.index)">删除</ElButton>
                        </ElFormItem>
                    </ElForm>
                    <div v-show="dynamickeyIndex !== (dynamicRule.dynamickeys.length - 1)" class="and">和</div>
                </div>
                <div style="margin-top: 8px">
                    <ElButton type="primary" @click="addRuleCondition(index)">添加条件</ElButton>
                </div>
                <template #extra>
                    <div class="or">或</div>
                </template>
            </IndexBox>
        </div>
        <ElButton type="primary" @click="addRule">添加</ElButton>
    </div>
</template>

<style lang="scss" scoped>
</style>