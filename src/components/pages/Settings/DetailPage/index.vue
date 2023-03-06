<script setup>
import { useConfigDetail } from './config'
import { ElCard, ElForm, ElFormItem, ElInput, ElDivider, ElButton, ElSelect, ElOption } from 'element-plus'

const tableColumns = [
    {
        label: "项目名称",
        prop: "projectName",
        placeholder: "请输入项目名称",
    },
    {
        label: "仓库地址",
        prop: "gitUrl",
        placeholder: "请输入仓库地址",
    },
    {
        label: "构建分支",
        prop: "gitBranch",
        placeholder: "请输入构建分支",
    },
    {
        label: "shell 命令",
        prop: "buildCommand",
        placeholder: "请输入 shell 命令",
    },
    {
        label: "上传路径",
        prop: "uploadPath",
        placeholder: "请输入上传路径",
    },
]

const {
  detailData,
  stream,
  isRollBack,
  historyList,
  rollBackHash,
  handleBuild,
  handleRollBack
} = useConfigDetail()
</script>

<template>
    <ElCard>
        <template #header>
        <span>{{ detailData.projectName }} 配置详情</span>
        </template>

        <ElForm :model="detailData">
            <ElFormItem v-for="column in tableColumns" :label="column.label" :prop="column.prop" label-width="80px">
                <ElInput v-model="detailData[column.prop]" :placeholder="column.placeholder"/>
            </ElFormItem>
        </ElForm>
        <ElDivider>操作区域</ElDivider>
        <section >
            <ElButton type="primary" @click="handleBuild">{{ isRollBack ? '开始回滚' : '开始构建'}}</ElButton>
            <ElButton type="primary">构建历史</ElButton>
            <ElButton type="warning" @click="handleRollBack">{{ isRollBack ? '取消回滚' : '版本回滚' }}</ElButton>
            <ElSelect placeholder="选择回滚版本" v-model="rollBackHash" v-if="isRollBack">
                <ElOption v-for="item in historyList" :label="item.label" :value="item.value" />
            </ElSelect>
        </section>
        <ElDivider>构建日志</ElDivider>
        <ElCard>
        <pre>{{ stream }}</pre>
        </ElCard>
    </ElCard>
</template>