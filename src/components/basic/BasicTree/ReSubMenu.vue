<script setup>
    import { ref, reactive, watch, computed } from 'vue'
    import SubMenu from './SubMenu.vue';
    import { ElIcon, ElCheckbox, ElTooltip } from 'element-plus';
    import { ArrowRightBold, ArrowDownBold } from '@element-plus/icons-vue';
    import { useSelectStatus, getChildrenId } from './utils/index.js'

    const props = defineProps({
        data: Object,
        treeState: Object,
        changeTreeState: Function,
        dataSource: Array
    })
    const { data, treeState, changeTreeState, dataSource }= props
    const {name, isLeaf, id, disabled, isDefaultExpand, isHit} = data

    const checkedKeys = ref(treeState.checkedKeys)

    const isChecked = ref(null)

    const isExpand = ref(false)

    const changeIsExpand = () => {
        if (data.children.length) isExpand.value = !isExpand.value
    }

    if (isLeaf) {
        isChecked.value = !!(checkedKeys.value.find((i) => i.id === id))
    } else {
        const count = checkedKeys.length
        const childList = getChildrenId(data.children)
        isChecked.value = count === childList.length ? true : count === 0 ? false : 'half'
    }

    const { selectedNode } = useSelectStatus(data, checkedKeys.value, changeTreeState, 'CHANGE_SELECTED_KEYS')

    watch(treeState, (treeState) => {
        checkedKeys.value = treeState.checkedKeys
        if (isLeaf) {
        isChecked.value = !!(checkedKeys.value.find((i) => i.id === id))
        } else {
            const count = checkedKeys.length
            const childList = getChildrenId(data.children)
            isChecked.value = count === childList.length ? true : count === 0 ? false : 'half'
        }
    })
</script>

<template>
    <SubMenu>
        <template #title>
            <div @click="changeIsExpand">
                <el-icon v-show="!isExpand && data.children.length">
                    <ArrowRightBold />
                </el-icon>
                <el-icon v-show="isExpand && data.children.length">
                    <ArrowDownBold />
                </el-icon>
                <el-checkbox
                    :indeterminate="isChecked === 'half'"
                    :disabled="data.disabled"
                    v-model="isChecked"
                    @change="selectedNode"
                />
                <!-- <el-tooltip effect="light" :content="data.name" placement="top"> -->
                    {{data.name}}
                <!-- </el-tooltip> -->
            </div>
        </template>
        <template v-for="child in data.children">
            <div v-show="isExpand">
                <div :key="child.name" v-if="!child.children">
                    <el-checkbox
                        :indeterminate="isChecked === 'half'"
                        :disabled="child.disabled"
                        v-model="isChecked"
                        @change="selectedNode"
                    />
                    <!-- <el-tooltip effect="light" :content="child.name" placement="top"> -->
                        {{child.name}}
                    <!-- </el-tooltip> -->
                </div>
                <ReSubMenu v-else  
                    :data="child"
                    :treeState="treeState"
                    :changeTreeState="changeTreeState"
                    :dataSource="dataSource"
                ></ReSubMenu>
            </div>
        </template>
    </SubMenu>
</template>