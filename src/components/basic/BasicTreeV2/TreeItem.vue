<script setup>
import { inject, ref, computed } from 'vue'
import { ElIcon, ElCheckbox } from 'element-plus';
import { ArrowRightBold, ArrowDownBold } from '@element-plus/icons-vue';

const tree = inject('treeState')
const changeCheckedKeys = inject('changeCheckedKeys')

const props = defineProps({
  treeData: Object
})

const isExpand = ref(false)
const hasChildren = computed(() => props.treeData.children && props.treeData.children.length)
const isChecked = computed(() => tree.checkedKeys.some(item => item.id === props.treeData.id))

const changeIsExpand = () => {
    isExpand.value = !isExpand.value
}
const selectNode = (node) => {
    const { children = [] } = node
    let tempArr = [node].concat(children).filter(item => !item.defaultSelected)
    changeCheckedKeys(tempArr, 'addSelectNode')
}
</script>

<template>
    <div>
        <div @click="changeIsExpand">
            <ElIcon>
                <component :is="isExpand && hasChildren? ArrowDownBold : ArrowRightBold" />
            </ElIcon>
            <ElCheckbox :modelValue="isChecked" :disabled="treeData.disabled" @change="selectNode(treeData)" />
            <span>{{ treeData.name }}</span>
        </div>
        <div v-show="isExpand" class="expandArea">
            <TreeItem v-for="treeData in treeData.children" :treeData="treeData" class="treeItem"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.expandArea {
    padding-left:20px;
}
</style>