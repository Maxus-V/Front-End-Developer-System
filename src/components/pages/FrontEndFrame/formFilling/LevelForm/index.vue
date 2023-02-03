<script setup>
import { reactive } from 'vue';
import { ElTooltip, ElRadioGroup, ElRadio, ElIcon, ElForm, ElFormItem, ElRow, ElCol, ElSelect, ElOption } from 'element-plus';
import { QuestionFilled } from '@element-plus/icons-vue';

import LevelConfig from './LevelConfig.vue'

const levelFormState = reactive({
    radioValue: 'compress',
})
</script>

<template>
    <div class="levelForm">
        <div class="levelFormTitle">
            <span>告警等级配置</span>
            <ElTooltip content="若配置错误,事件中心将默认’提示‘级别" effect="light" placement="top">
                <ElIcon style="margin-left: 12px"><QuestionFilled /></ElIcon>
            </ElTooltip>
        </div>
        <ElFormItem>
            <LevelConfig />
        </ElFormItem>
        <div class="levelFormTitle">
            事件生成规则配置
        </div>
        <ElForm>
            <ElFormItem label="事件生成方式">
                <ElRadioGroup v-model="levelFormState.radioValue">
                    <ElRadio label="merge">告警合并</ElRadio>
                    <ElRadio label="compress">告警压缩</ElRadio>
                    <ElRadio label="direct">告警直发</ElRadio>
                </ElRadioGroup>
            </ElFormItem>
            <ElFormItem label="压缩字段">
                <ElRow>
                    <ElCol :span="23">
                        <ElSelect>
                            <ElOption value="233" />
                        </ElSelect>
                    </ElCol>
                    <ElCol :span="1" style="text-align: center;">
                        <ElTooltip content="将选中字段的同一等级的告警压缩为同一条警报" effect="light" placement="top">
                            <ElIcon><QuestionFilled /></ElIcon>
                        </ElTooltip>
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