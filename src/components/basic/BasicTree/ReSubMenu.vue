<script setup>
    import { ref, computed, reactive } from '@vue/reactivity';
    import SubMenu from './SubMenu.vue';
    import { ElIcon, ElCheckbox, ElTooltip } from 'element-plus';
    import { ArrowRightBold } from '@element-plus/icons-vue';
    import { useSelectStatus } from './utils/index.js'

    const props = defineProps({
        data: Object,
        addSelectNodes: Function,
        treeState: Object,
        changeTreeState: Function,
        dataSource: Array
    })
    const { data, treeState, changeTreeState, dataSource }= props
    const {name, isLeaf, id, disabled, isDefaultExpand, isHit} = data

    const {status, selectedNode} = useSelectStatus(data, treeState.checkedKeys, changeTreeState, 'CHANGE_SELECTED_KEYS')
    
    let flag = status()
    const innerState = reactive({
        checked: isLeaf? flag: !!flag,
        indeterminate: flag === 'half'
    })

    const changeChecked = (id = 'nothing') => {
        // props.addSelectNodes(id)
        selectedNode()
        const {status} = useSelectStatus(data, treeState.checkedKeys, changeTreeState, 'CHANGE_SELECTED_KEYS')
        flag = status()
        innerState.checked = isLeaf? flag: !!flag
        console.log('tr', treeState.checkedKeys)
    }
</script>

<template>
    <SubMenu>
        <template #title>
            <el-checkbox
                :indeterminate="innerState.indeterminate"
                :disabled="data.disabled"
                :checked="innerState.checked"
                @change="changeChecked"
            />
            <el-tooltip effect="light" :content="data.name" placement="top">
                {{data.name}}
            </el-tooltip>
        </template>
        <template v-for="child in data.children">
            <div :key="child.name" v-if="!child.children">
                <el-checkbox
                    :indeterminate="innerState.indeterminate"
                    :disabled="child.disabled"
                    :checked="innerState.checked"
                    @change="changeChecked()"
                />
                <el-tooltip effect="light" :content="child.name" placement="top">
                    {{child.name}}
                </el-tooltip>
            </div>
            <ReSubMenu v-else  
                :data="child"
                :treeState="treeState"
                :changeTreeState="changeTreeState"
                :dataSource="dataSource"
            ></ReSubMenu>
        </template>
    </SubMenu>
</template>