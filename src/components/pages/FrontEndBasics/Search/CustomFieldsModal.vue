<script setup>
import { ref, toRefs } from 'vue';
const props = defineProps({
    dialogVisible: Boolean,
})
const { dialogVisible } = toRefs(props);
const searchInput = ref('')

const emits = defineEmits(['changeDialogVisible']);
const changeVisible = () => {
  emits('changeDialogVisible');
};
</script>

<script>
import { 
    ElDialog,
    ElInput,
    ElEmpty
} from 'element-plus'

import { Search } from '@element-plus/icons-vue';
    
export default {
    components: {
        ElDialog,
        ElInput,
        ElEmpty
    },
}
</script>

<template>
    <el-dialog  
        :model-value="dialogVisible" 
        title="添加筛选条件"
        :before-close="changeVisible"
    >
        <el-input
            v-model="searchInput"
            placeholder="请输入关键字"
            :suffix-icon="Search"
        />
        <el-empty description="暂无数据" />
    </el-dialog>
</template>

<style>

</style>