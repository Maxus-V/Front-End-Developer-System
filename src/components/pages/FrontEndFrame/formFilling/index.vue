<script setup>
import { reactive } from 'vue';
import { ElSteps, ElStep, ElForm, ElButton, ElIcon } from 'element-plus';

import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue';

import BaseForm from './BaseForm/index.vue';
import FieldForm from './FieldForm/index.vue';
import LevelForm from './LevelForm/index.vue';

import DetailContent from './DetailContent/index.vue'
import KafkaConfig from './ConfigComponents/KafkaConfig.vue'

const formFillingState = reactive({
    stepsValue: 0,
    fold: false,
})

const steps = [
    {
        title: '基本信息',
    },
    {
        title: '字段配置',
    },
    {
        title: '等级与事件配置',
    },
]

const prevStep = (value) => {
    formFillingState.stepsValue = value
}       

const changeActive = (value) => {
    formFillingState.stepsValue = value
}

const onSave = () => {
    console.log('onSave')
}

const onSpecialSave = () => {
    console.log('onSpecialSave')
}

const goBack = () => {
    console.log('goback')
}

</script>

<template>
    <div class="alertSourceForm">
        <div class="formWrapper">
            <div class="header">
                <ElSteps :active="formFillingState.stepsValue">
                    <ElStep v-for="step in steps" :key="step.title" :title="step.title" />
                </ElSteps>
            </div>  
            <div class="content">
                <div class="scrollBar">
                    <BaseForm v-if="formFillingState.stepsValue === 0" />
                    <FieldForm v-if="formFillingState.stepsValue === 1" />
                    <LevelForm v-if="formFillingState.stepsValue === 2" />
                </div>
            </div>
            <div class="footerWrapper">
                <div class="footer">
                    <ElButton @click="prevStep(formFillingState.stepsValue-1)">上一步</ElButton>
                    <ElButton @click="changeActive(formFillingState.stepsValue+1)">下一步</ElButton>
                    <ElButton @click="onSave">完成</ElButton>
                    <ElButton @click="onSpecialSave">保存</ElButton>
                    <ElButton style="margin-left: 12px" @click="goBack">取消</ElButton>
                </div>
            </div>
        </div>
        <div class="detailWrapper" style="width: calc(40% - 26px)">
            <div class="drawerBtn" @click="formFillingState.fold = !formFillingState.fold">
                <span class="drawerIcon">
                    配置说明
                    <ElIcon style="font-size: 12px;">
                        <component :is="formFillingState.fold ? ArrowLeftBold : ArrowRightBold" />
                    </ElIcon>
                </span>
            </div>
            <DetailContent>
                <template #children>
                    <KafkaConfig v-if="!formFillingState.fold" />
                </template>
            </DetailContent>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>