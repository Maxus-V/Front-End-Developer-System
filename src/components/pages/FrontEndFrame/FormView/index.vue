<script setup>
import { reactive } from 'vue';
import { ElSteps, ElStep, ElButton } from 'element-plus';

import BaseForm from './BaseForm.vue';
import FieldForm from './FieldForm.vue';
import LevelForm from './LevelForm.vue';

const state = reactive({
    current: 0
})
</script>

<template>
    <div class="alertSourceForm">
        <div class="formWrapper">
            <div>
                <el-steps  :active="state.current" simple process-status="process" finish-status="success">
                    <el-step title="Step 1"></el-step>
                    <el-step title="Step 2"></el-step>
                    <el-step title="Step 3"></el-step>
                </el-steps>
            </div>
            <div>
              <BaseForm v-if="state.current === 0"/>
              <FieldForm v-if="state.current ===1"/>
              <LevelForm v-if="state.current === 2"/>
            </div>
            <div class="footer">
              <el-button type="primary">上一步</el-button>
              <el-button type="primary">下一步</el-button>
              <el-button type="primary">完成</el-button>
              <el-button>取消</el-button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// .alertSourceForm {
//     height: 100%;
//     width: 100%;
//     display: flex;

//     .formWrapper {
//       flex: 1;
//       background: white;

//       .header {
//         display: flex;
//         height: 64px;
//         align-items: center;
//         padding: 0 24px;
//       }

//       .content {
//         width: 100%;
//         height: 100%;

//         .baseForm {
//           height: 100%;
//           padding: 0 24px;

//           .alertSourceName {
//             display: flex;
//             flex-direction: row;
//           }

//         }

//         .fieldForm {
//           height: 100%;
//           padding: 0 24px;

//           .reflect {
//             .addBtn {
//               width: 100%;
//               height: 32px;
//               margin-top: 24px;
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               border: 1px dashed #008DFF;
//               border-radius: 4px;
//               cursor: pointer;
//             }

//             .addBtn2 {
//               color: #008DFF;
//               line-height: 48px;
//               cursor: pointer;
//             }
//           }

//           .saveAsTemplate {
//             display: flex;
//             justify-content: space-between;

//             .saveAsTemplateTitle {
//               font-size: 16px;
//               font-weight: 800;
//             }

//             .saveBtn {
//               color: #008DFF;
//               cursor: pointer;
//             }
//           }
//         }

//         .levelForm {
//           padding: 0 24px;

//           .levelFormTitle {
//             line-height: 64px;
//             font-size: 16px;
//             font-weight: 800;
//           }
//         }
//       }

//       .footerWrapper {
//         height: 64px;
//         position: relative;

//         .footer {
//           height: 40px;
//           //display: flex;
//           width: 100%;
//           padding: 0 24px;
//           justify-content: flex-end;
//           align-items: flex-end;
//           position: absolute;
//           bottom: 12px;
//           box-shadow: 0 -1px 2px 0 rgba(0, 0, 0, 0.03);
//           padding-top: 10px;
//         }
//       }

//     }

//     .detailWrapper {
//       margin-left: 26px;
//       position: relative;
//       height: 100%;
//       transition: all 0.2s;

//       .drawerBtn {
//         width: 26px;
//         height: 100%;
//         left: -26px;
//         position: absolute;
//         display: flex;
//         align-items: center;

//         .drawerIcon {
//           height: 112px;
//           background: white;
//           border: 1px solid black;
//           border-right: none;
//           cursor: pointer;
//           text-align: center;
//           line-height: 26px;
//           font-size: 14px;
//           border-top-left-radius: 4px;
//           border-bottom-left-radius: 4px;
//           writing-mode: vertical-lr;
//           letter-spacing: 4px;
//         }
//       }

//       .drawerContent {
//         width: 100%;
//         height: 100%;
//         background: white;
//         border: 1px solid black;
//         padding: 0 24px 24px 24px;

//         .picture {
//           width: 100%;
//           cursor: pointer;

//           img {
//             width: 100%;
//           }
//         }

//         .title {
//           font-size: 16px;
//           font-weight: 800;
//           padding: 16px 0;
//         }

//         .content {
//           width: 100%;
//           height: 100%;

//           p {
//             line-height: 20px;
//           }

//           .picture {
//             margin-bottom: 16px;
//           }

//           .alertSourceTable {
//             margin-bottom: 24px;

//             .alertSourceTableTitle {
//               line-height: 32px;
//             }
//           }

//           .zabbixConfig {
//             .picture {
//               width: 100%;
//               cursor: pointer;

//               img {
//                 width: 100%;
//               }
//             }

//             .filterP {
//               margin-top: 24px;
//             }
//           }

//           .tsbConfig,
//           .jkbConfig {
//             .picture {
//               width: 100%;
//               cursor: pointer;

//               img {
//                 width: 100%;
//               }
//             }

//             .filterP {
//               margin-top: 24px;
//             }
//           }
//         }
//       }
//     }

//   }
</style>