<script setup>
import { ElButton } from 'element-plus';

import BasicCard from '@/components/basic/BasicCard/index.vue'

import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

const driver = new Driver({
  className: "scoped-class",
  animate: true,
  opacity: 0.75,
  padding: 6,
  allowClose: false,
  overlayClickNext: false,
  doneBtnText: "完成",
  closeBtnText: "关闭",
  nextBtnText: "下一步",
  prevBtnText: "上一步",
})

const steps = [
    {
        element: ".el-menu",
        popover: {
        title: "快来试试吧~",
        description:
            "菜单中包含概览、前端基础、前端框架等... 详情请点击菜单查看",
        position: "right",
        },
    },
]

const toGuide = () => {
    driver.defineSteps(steps)
    driver.start()
}
</script>

<template>
    <BasicCard title="新手引导">
        <ElButton type="primary" @click="toGuide">进入新手引导</ElButton>
    </BasicCard>
</template>

<style lang="scss" scoped>

</style>