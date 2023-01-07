<script setup>
    import SubMenu from './SubMenu.vue';
    import { ElIcon, ElCheckbox, ElTooltip } from 'element-plus';
    import { ArrowRightBold } from '@element-plus/icons-vue';
    const props = defineProps({
        data: Object,
        addSelectNodes: Function
    })
    const data = props.data

    const {name, isLeaf, id, disabled, isDefaultExpand, isHit} = data

    const changeChecked = (id = 'nothing') => {
        props.addSelectNodes(id)
    }
</script>

<template>
    <SubMenu>
        <template #title>
            <el-checkbox
                :disabled="data.disabled"
                :checked="data.defaultSelected"
                @change="changeChecked(data.id)"
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
                    @change="changeChecked(child.id)"
                />
                <el-tooltip effect="light" :content="child.name" placement="top">
                    {{child.name}}
                </el-tooltip>
            </div>
            <ReSubMenu v-else  :data="child"></ReSubMenu>
        </template>
    </SubMenu>
</template>