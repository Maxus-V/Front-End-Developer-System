<script setup>
    import Tabs from './Tabs.vue'
    import Filters from './Filters.vue'
    import ExtraHeader from './ExtraHeader.vue'
    import ExtraPanel from './ExtraPanel.vue'
</script>

<script>
import { 
    ElIcon,
} from 'element-plus'
    
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue';
export default {
    components: {
        ElIcon,
        ArrowDown,
        ArrowUp
    },
    data() {
        return {
            panelVisible: false,
        }
    },  
    methods: {
        changePanelVisible() {
            this.panelVisible = !this.panelVisible
        }
    },
}
</script>

<template>
    <Tabs/>
    <div class="searchHeader">
        <Filters/>
        <span class="panelSwitch" @click="changePanelVisible">
            高级搜索
            <el-icon v-show="!this.panelVisible"><ArrowDown /></el-icon>
            <el-icon v-show="this.panelVisible"><ArrowUp /></el-icon>
        </span>
        <div>
            <ExtraHeader/>
        </div>
    </div>
    <div v-if="this.panelVisible">
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