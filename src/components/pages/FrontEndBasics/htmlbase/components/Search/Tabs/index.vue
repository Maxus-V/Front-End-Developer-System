<script setup>
import { inject, computed } from 'vue';

const htmlBaseState = inject('htmlBaseState')
const modifyMethods = inject('modifyMethods')
const changeCurrentCategory = inject('changeCurrentCategory')

const tabState = computed(() => modifyMethods.tableData.initData.incidentPageCount || {
    pendingCount: 0,
    processingCount: 0,
    closedCount: 0,
})

const categorys = [
    {
        name: '待学习',
        processStatus: 'PENDING',
        count: 'pendingCount',
    },
    {
        name: '学习中',
        processStatus: 'PROCESSING',
        count: 'processingCount',
    },
    {
        name: '已学习',
        processStatus: 'CLOSED',
        count: 'closedCount',
    },
]

const changeProcessStatus = (type) => {
    changeCurrentCategory(type)
    modifyMethods.modifyConditions({
        processStatusList: [type],
        currentPage: 1,
    })
}
</script>

<template>
    <div class="leftConditions">
        <div class="event-action">
            <div class="action">
                <div v-for="(category, index) in categorys"
                    :key="index"
                    :class="category.processStatus === htmlBaseState.currentCategory ? 'default active' : 'default'"
                    @click="changeProcessStatus(category.processStatus)"
                >
                    {{ category.name }} {{ tabState[category.count]}}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.leftConditions {
    width: 100%;
    .event-action {
        margin: 20px 0;
        .action {
            line-height: normal;
            border-bottom: 1px solid black;
            .default {
                display: inline-block;
                margin-right: 10px;
                padding: 0 40px;
                height: 35px;
                line-height: 35px;
                cursor: pointer;
            }
            .active {
                color: orange;
                border-bottom: 2px solid orange;
            }
        }
    }
}
</style>