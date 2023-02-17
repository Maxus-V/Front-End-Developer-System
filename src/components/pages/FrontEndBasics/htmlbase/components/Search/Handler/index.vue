<script setup>
import { ElButton, ElTooltip } from 'element-plus';
</script>

<template>
    <div class="handleZone">
        <ElTooltip content="勾选数据转移到“已学习”列表" effect="light" placement="top">
            <ElButton>已学习</ElButton>
        </ElTooltip>
        <ElTooltip content="勾选数据转移到“学习中”列表" effect="light" placement="top">
            <ElButton>学习中</ElButton>
        </ElTooltip>
        <ElTooltip content="向其他账户发送所勾选数据的信息通知" effect="light" placement="top">
            <ElButton>共享</ElButton>
        </ElTooltip>
        <ElTooltip content="勾选数据转移到其他账户的“待学习”列表" effect="light" placement="top">
            <ElButton>待别人学习</ElButton>
        </ElTooltip>
    </div>
</template>

<style lang="scss" scoped>

</style>