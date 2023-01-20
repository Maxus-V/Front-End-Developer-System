<script setup>
import { ElTooltip, ElIcon, ElFormItem, ElRow, ElCol, ElSelect, ElOption } from 'element-plus';
import { QuestionFilled } from '@element-plus/icons-vue';
</script>

<template>
    <div class="levelForm">
        <div class="levelFormTitle">
            告警等级配置
            <ElTooltip content="这里有提示" effect="light" placement="top">
                <ElIcon style="margin-left: 12px"><QuestionFilled /></ElIcon>
            </ElTooltip>
        </div>
        <ElFormItem>

        </ElFormItem>
        <div class="levelFormTitle">
            事件生成规则配置
        </div>
        <ElFormItem>

        </ElFormItem>
        <ElFormItem>
            
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
    </div>
</template>

<style lang="scss" scoped>

</style>