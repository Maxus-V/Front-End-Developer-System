<script setup>
import {reactive} from 'vue'
import FilterFields from '../FilterFields.vue';
import { ElButton, ElIcon } from 'element-plus'
import { Plus } from '@element-plus/icons-vue';

const props = defineProps({
    searchValue: Array
})
const { searchValue } = props

const state = reactive({
    modalVisible: false
})

const changeModalVisible = () => {
    state.modalVisible = !state.modalVisible
}
</script>   

<template>
    <div class="extraColumns">
        <div class="customScrollBar">
            <div class="content">

            </div>
        </div>
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
        <FilterFields
            :modalVisible="state"
            :changeModalVisible="changeModalVisible"
        />
    </div>
</template>

<style lang="scss" scoped>
.extraColumns {
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