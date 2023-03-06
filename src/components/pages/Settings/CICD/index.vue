<script setup>
import useConfigList from './config'
import { ElForm, ElFormItem, ElInput, ElButton, ElTable, ElTableColumn, ElPopconfirm, ElPagination } from 'element-plus'

import AddConfig from './components/AddConfig'
import BasicCard from '@/components/basic/BasicCard/index'

const {
  searchParams,
  tableData,
  formData,
  dialogVisible,
  dialogTitle,
  handleSizeChange,
  handleCurrentChange,
  onSearch,
  onAdd,
  onSubmit,
  onEdit,
  onDel,
  handleToDetail,
  changeVisible,
} = useConfigList()

const tableColums = [
    {
        label: '仓库地址',
        prop: 'gitUrl',
    },
    {
        label: '构建分支',
        prop: 'gitBranch',
    },
    {
        label: 'shell 命令',
        prop: 'buildCommand',
    },
    {
        label: '上传路径',
        prop: 'uploadPath',
    },
]
</script>

<template>
    <BasicCard title="集成部署">
        <ElForm inline>
            <div>
                <ElFormItem label="项目名称">
                    <ElInput v-model="searchParams.projectName" placeholder="输入项目名搜索"></ElInput>
                </ElFormItem>
                <ElFormItem>
                    <ElButton type="primary" @click="onSearch">搜索</ElButton>
                </ElFormItem>
             </div>
            <ElButton type="primary" @click="onAdd">新增配置</ElButton>
        </ElForm>

        <ElTable :data="tableData">
            <ElTableColumn label="项目名称" prop="projectName">
                <template #default="scope">
                <ElButton type="primary" link @click="handleToDetail(scope.row)">{{ scope.row.projectName }}</ElButton>
                </template>
            </ElTableColumn>
            <ElTableColumn v-for="column in tableColums" :label="column.label" :prop="column.prop" />
            <ElTableColumn label="操作">
                <template #default="scope">
                <ElButton type="primary" link @click="onEdit(scope.row)">编辑</ElButton>
                <ElPopconfirm title="确认删除该配置?" @confirm="onDel(scope.row)">
                    <template #reference>
                    <ElButton type="danger" link>删除</ElButton>
                    </template>
                </ElPopconfirm>
                </template>
            </ElTableColumn>
        </ElTable>

        <ElPagination
            v-model:currentPage="searchParams.pageNo"
            v-model:page-size="searchParams.pageSize"
            :page-sizes="[10, 20, 30]"
            layout="sizes, prev, pager, next"
            :total="searchParams.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </BasicCard>

    <AddConfig 
        :formData="formData"
        :dialogVisible="dialogVisible"
        :dialogTitle="dialogTitle"
        @onSubmit = "onSubmit"
        @changeVisible="changeVisible"
    />
</template>

<style lang="scss" scoped>
.el-form {
    display: flex;
    justify-content: space-between;
}
</style>