<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { ElSteps, ElStep, ElButton, ElIcon } from 'element-plus';
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue';

import BaseForm from './BaseForm/index.vue';
import FieldForm from './FieldForm/index.vue';
import LevelForm from './LevelForm/index.vue';

import OverviewConfig from './ConfigComponents/OverviewConfig.vue'

const router = useRouter()
const expandPanel = {
  width: 'calc(40% - 26px)',
}

const stepValue = ref(0)
const isFinalStep = computed(() => stepValue.value === 2)
const isFold = ref(false)

const prevStep = (value) => {
  stepValue.value = value
}    
const nextStepOrSave = (value) => {
  stepValue.value = value
}
const goBack = () => {
  router.back()
}
</script>

<template>
    <div class="alertSourceForm">
        <div class="formWrapper">
            <div class="header">
                <ElSteps :active="stepValue" simple>
                    <ElStep title="基本信息" />
                    <ElStep title="字段配置" />
                    <ElStep title="等级与事件配置" />
                </ElSteps>
            </div>  
            <div class="content">
                <div class="scrollBar">
                    <BaseForm v-if="stepValue === 0" />
                    <FieldForm v-if="stepValue === 1" />
                    <LevelForm v-if="stepValue === 2" />
                </div>
            </div>
            <div class="footerWrapper">
                <div class="footer">
                    <ElButton @click="prevStep(stepValue - 1)">上一步</ElButton>
                    <ElButton type="primary" @click="nextStepOrSave(stepValue + 1)">
                        {{ isFinalStep ? '完成' : '下一步' }}
                    </ElButton>
                    <ElButton @click="goBack">取消</ElButton>
                </div>
            </div>
        </div>
        <div class="detailWrapper" :style="!isFold? expandPanel : null">
            <div class="drawerBtn" @click="isFold = !isFold">
                <span class="drawerIcon">
                    <span>配置说明</span>
                    <ElIcon>
                        <component :is="isFold ? ArrowLeftBold : ArrowRightBold" />
                    </ElIcon>
                </span>
            </div>
            <div class="drawerContent"  v-show="!isFold">
                <div class="title">配置说明</div>
                <div class="content">
                    <OverviewConfig />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.alertSourceForm {
    height: 100%;
    width: 100%;
    display: flex;

    .formWrapper {
      flex: 1;
      background: white;

      .header {
        // display: flex;
        height: 64px;
        // align-items: center;
        // padding: 0 24px;
      }

      .content {
        width: 100%;
        height: calc(100% - 128px);

        .baseForm {
          height: 100%;
          padding: 0 24px;

          .alertSourceName {
            display: flex;
            flex-direction: row;
          }

        }

        .fieldForm {
          height: 100%;
          padding: 0 24px;

          .reflect {
            .addBtn {
              width: 100%;
              height: 32px;
              margin-top: 24px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px dashed #008DFF;
              border-radius: 4px;
              cursor: pointer;
            }

            .addBtn2 {
              color: #008DFF;
              line-height: 48px;
              cursor: pointer;
            }
          }

          .saveAsTemplate {
            display: flex;
            justify-content: space-between;

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

        .levelForm {
          padding: 0 24px;

          .levelFormTitle {
            line-height: 64px;
            font-size: 16px;
            font-weight: 800;
          }
        }
      }

      .footerWrapper {
        height: 64px;
        position: relative;

        .footer {
          height: 40px;
          //display: flex;
          width: 100%;
          padding: 0 24px;
          justify-content: flex-end;
          align-items: flex-end;
          position: absolute;
          bottom: 12px;
          box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.03);
          padding-top: 10px;
        }
      }

    }

    .detailWrapper {
      margin-left: 26px;
      position: relative;
      height: 100%;
      transition: all 0.2s;

      .drawerBtn {
        width: 26px;
        height: 100%;
        left: -26px;
        position: absolute;
        display: flex;
        align-items: center;

        .drawerIcon {
          height: 112px;
          background: white;
          border: 1px solid white;
          border-right: none;
          cursor: pointer;
          text-align: center;
          line-height: 26px;
          font-size: 14px;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          writing-mode: vertical-lr;
          letter-spacing: 4px;
        }
      }

      .drawerContent {
        width: 100%;
        height: 100%;
        background: white;
        border: 1px solid white;
        padding: 0 0 24px 24px;

        .picture {
          width: 100%;
          cursor: pointer;

          img {
            width: 100%;
          }
        }

        .title {
          font-size: 16px;
          font-weight: 800;
          padding: 16px 0;
        }

        .content {
          width: 100%;
          height: calc(100% - 64px);

          p {
            line-height: 20px;
          }

          .picture {
            margin-bottom: 16px;
          }

          .alertSourceTable {
            margin-bottom: 24px;

            .alertSourceTableTitle {
              line-height: 32px;
            }
          }

          .zabbixConfig {
            .picture {
              width: 100%;
              cursor: pointer;

              img {
                width: 100%;
              }
            }

            .filterP {
              margin-top: 24px;
            }
          }

          .tsbConfig,
          .jkbConfig {
            .picture {
              width: 100%;
              cursor: pointer;

              img {
                width: 100%;
              }
            }

            .filterP {
              margin-top: 24px;
            }
          }
        }
      }
    }

  }
</style>