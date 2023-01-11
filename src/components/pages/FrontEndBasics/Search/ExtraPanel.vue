<script setup>
    import {reactive} from 'vue'
    import CustomFileldsModal from './CustomFieldsModal.vue'
    import FilterFields from './FilterFields.vue';
    import { 
        ElButton,
        ElIcon
    } from 'element-plus'
    import { Plus } from '@element-plus/icons-vue';

    const state = reactive({
        modalVisible: false
    })

    const changeModalVisible = () => {
        state.modalVisible = !state.modalVisible
    }
</script>   

<template>
    <div class="extraPanel">
        <div class="footer">
            <div class="leftFooter">
                <el-button type="default" @click="changeModalVisible()">
                    <el-icon><Plus /></el-icon>
                    筛选条件
                </el-button>
            </div>
            <div class="rightFooter">
                <el-button type="primary">
                    查询
                </el-button>
                <el-button type="default">
                    重置
                </el-button>
            </div>
        </div>
        
        <!-- <CustomFileldsModal
            :dialogVisible="modalVisible"
            @changeDialogVisible="changeModalVisible"
        /> -->
        <FilterFields
            :modalVisible="state"
            :changeModalVisible="changeModalVisible"
        />
    </div>
</template>

<style lang="scss" scoped>
.extraPanel {
    background: transparent;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 16px;
    padding: 16px;
    .footer {
        width: 100%;
        height: 32px;
        line-height: 32px;
        display: flex;
        justify-content: space-between;
        .leftFooter {
            .el-button {
                background: transparent;
                border: none;
            }
        }
    }
}
</style>