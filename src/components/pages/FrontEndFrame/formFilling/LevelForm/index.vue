<script setup>
import { reactive } from 'vue';
import { ElTooltip, ElRadioGroup, ElRadio, ElIcon, ElForm, ElFormItem, ElRow, ElCol, ElSelect, ElOption } from 'element-plus';
import { QuestionFilled } from '@element-plus/icons-vue';

import LevelConfig from './LevelConfig.vue'

const props = defineProps({
    levelFormState: Object,
})
</script>

<template>
    <div class="levelForm">
        <div class="levelFormTitle">
            <span>难度系数配置</span>
            <ElTooltip content="若配置错误,将默认’简单‘级别" effect="light" placement="top">
                <ElIcon style="margin-left: 12px"><QuestionFilled /></ElIcon>
            </ElTooltip>
        </div>
        <div style="width: 90%;">
            <LevelConfig /> 
        </div>
        <div class="levelFormTitle">
            配置详情
        </div>
        <ElForm>
            <ElFormItem label="难度判定依据">
                <ElRadioGroup v-model="levelFormState.radioValue">
                    <ElRadio label="merge">知识复合</ElRadio>
                    <ElRadio label="compress">知识基础</ElRadio>
                    <ElRadio label="direct">知识延伸</ElRadio>
                </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label="知识基础">
                <ElRow>
                    <ElCol :span="23">
                        <ElSelect>
                            <ElOption value="233" />
                        </ElSelect>
                    </ElCol>
                    <ElCol :span="1" style="text-align: center;">
                        <!-- <ElTooltip content="将选中字段的同一等级的告警压缩为同一条警报" effect="light" placement="top">
                            <ElIcon><QuestionFilled /></ElIcon>
                        </ElTooltip> -->
                    </ElCol>
                </ElRow>
            </ElFormItem>
        </ElForm>
    </div>
</template>

<style lang="scss" scoped>
.levelForm {
    padding: 0 24px;
    .levelFormTitle {
        line-height: 64px;
        font-size: 16px;
        font-weight: 800;
    }
}
</style>