<script setup>
import { ref } from 'vue'
import { ElForm, ElFormItem, ElRadioGroup, ElRadio } from 'element-plus';
import Reflect from './Reflect.vue';
import TemplateForm from './TemplateForm.vue';

const modalVisible = ref(false)

const changeModalVisible = (value) => {
    modalVisible.value = value
}
</script>

<template>
    <div class="fieldForm">
        <ElForm>
            <ElFormItem label="字段配置模式：" >
                <ElRadioGroup>
                    <ElRadio label="customize">自定义映射关系</ElRadio>
                    <ElRadio label="template">关联字段映射规则</ElRadio>
                </ElRadioGroup>
            </ElFormItem>
            <ElFormItem>
                <div class="saveAsTemplate">
                    <span class="saveAsTemplateTitle">字段映射</span>
                    <span class="saveBtn" @click="changeModalVisible(true)">保存为模板</span>
                </div>
                <div style="width: 100%;">
                    <Reflect />
                </div>
            </ElFormItem>
        </ElForm>
        <TemplateForm 
            :modalVisible="modalVisible"
            @changeModalVisible="changeModalVisible"
        />
    </div>
</template>

<style lang="scss" scoped>
.fieldForm {
          height: 100%;
          padding: 0 24px;
          .saveAsTemplate {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .saveAsTemplateTitle {
              font-size: 16px;
              font-weight: 800;
            }

            .saveBtn {
              color: #008DFF;
              cursor: pointer;
            }
          }
        }
</style>