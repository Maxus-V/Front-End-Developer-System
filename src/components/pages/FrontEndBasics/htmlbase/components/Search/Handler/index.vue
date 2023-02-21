<script setup>
import { ElMessage, ElButton, ElTooltip } from 'element-plus'

const haveLearned = () => {
    ElMessage({
        message: '知识已学习！',
        type: 'success',
    })
}
const learning = () => {
    ElMessage({
        message: '知识学习中！',
        type: 'success',
    })
}
const share = () => {
    ElMessage({
        message: '知识已共享！',
        type: 'success',
    })
}
const trans = () => {
    ElMessage({
        message: '知识已转发！',
        type: 'success',
    })
}
</script>

<template>
    <div class="handleZone">
        <ElTooltip content="勾选数据转移到“已学习”列表" effect="light" placement="top">
            <ElButton @click="haveLearned">已学习</ElButton>
        </ElTooltip>
        <ElTooltip content="勾选数据转移到“学习中”列表" effect="light" placement="top">
            <ElButton @click="learning">学习中</ElButton>
        </ElTooltip>
        <ElTooltip content="向其他账户发送所勾选数据的信息通知" effect="light" placement="top">
            <ElButton @click="share">共享</ElButton>
        </ElTooltip>
        <ElTooltip content="勾选数据转移到其他账户的“待学习”列表" effect="light" placement="top">
            <ElButton @click="trans">待别人学习</ElButton>
        </ElTooltip>
    </div>
</template>

<style lang="scss" scoped>

</style>