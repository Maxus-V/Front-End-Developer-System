<script setup>
    import SubMenu from './SubMenu.vue';
    import { ElIcon, ElCheckbox, ElTooltip } from 'element-plus';
    import { ArrowRightBold } from '@element-plus/icons-vue';
    const props = defineProps({
        data: Object
    })
    const data = props.data
</script>

<template>
    <SubMenu>
        <template #title>
            <el-checkbox
                :disabled="data.disabled"
                :checked="data.defaultSelected"
            />
            <el-tooltip effect="light" :content="data.name" placement="top">
                {{data.name}}
            </el-tooltip>
        </template>
        <template v-for="child in data.children">
            <div :key="child.name" v-if="!child.children">
                <el-checkbox
                    :disabled="child.disabled"
                    :checked="child.defaultSelected"
                />
                <el-tooltip effect="light" :content="child.name" placement="top">
                    {{child.name}}
                </el-tooltip>
            </div>
            <ReSubMenu v-else  :data="child"></ReSubMenu>
        </template>
    </SubMenu>
</template>