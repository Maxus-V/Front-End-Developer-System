<script setup>
import {ref} from 'vue'
// import Tabs from './Tabs.vue'
// import Filters from './Filters.vue'
// import ExtraHeader from './ExtraHeader.vue'
import ExtraPanel from './ExtraPanel.vue'
import ExtraHeader from './ExtraHeader/index.vue'
import Tabs from './Tabs/index.vue'
import Test3 from './Header/index.vue'

import { ElIcon } from 'element-plus'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'

const props = defineProps({
    tableData: Object,
    conditions: Object,
    modifyConditions: Function,
})

const panelVisible = ref(false)
 
const changePanelVisible = () => {
    panelVisible.value = !panelVisible.value
}
</script>

<template>
    <Tabs/>
    <div class="searchHeader">
        <!-- <Filters/> -->
        <Test3
            :tableData="tableData"
            :conditions = "tableData"
            :modifyConditions="modifyConditions"
        />
        <span class="panelSwitch" @click="changePanelVisible">
            高级搜索
            <el-icon v-show="!panelVisible"><ArrowDown /></el-icon>
            <el-icon v-show="panelVisible"><ArrowUp /></el-icon>
        </span>
        <div>
            <ExtraHeader/>
        </div>
    </div>
    <div v-if="panelVisible">
        <ExtraPanel/>
    </div>
</template>

<style lang="scss" scoped>
.searchHeader {
    display: flex;
    align-items: center;
    .panelSwitch {
        color: #008DFF;
        cursor: pointer;
        margin-left: 12px;
    }
}

</style>