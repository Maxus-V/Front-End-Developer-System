<script setup>
import { ref, reactive, computed } from 'vue'

const props = defineProps({
    tableData: Object,
    modifyConditions: Function,
    state:Object
})

const { tableData, modifyConditions, state } = props

const type = 'archiveEvent1'
const incidentPageCount = {
    pendingCount: 0,
    processingCount: 0,
    closedCount: 0
}

const {pendingCount=0, processingCount=0, closedCount=0} = incidentPageCount



const mapArr = reactive({
    arr1: [],
    arr2: []
})
mapArr.arr1 = computed(() => {
    return [
        {
            id: 1,
            name: '待处理',
            processStatus: "PENDING",
            count: state.currentCategory === "PENDING" ? pendingCount : 0
        },
        {
            id: 2,
            name: '处理中',
            processStatus: "PROCESSING",
            count: state.currentCategory === "PROCESSING" ? processingCount : 0
        },
    ]
})
mapArr.arr2 = computed(() => {
    return [
        {
            id: 3,
            name: '已解决',
            processStatus: "CLOSED",
            count: state.currentCategory === "CLOSED" ? closedCount : 0
        }
    ]
})

const categorys = computed(() => {
    if (type === 'archiveEvent') {
        return mapArr.arr1
    } else {
        return mapArr.arr1.concat(mapArr.arr2)
    }
})

const changeProcess = (value, id) => {
    if (value && id) {
        state.currentCategory = value
    }
    modifyConditions({
        processStatusList: [value],
        currentPage: 1,
    })
}

</script>

<template>
<div class='leftConditions'>
    <div class="event-action">
      <div class="action">
        <div v-for="category in categorys"
            class="default"
            :class="category.processStatus === state.currentCategory ? 'active' : ''"
            @click="changeProcess(category.processStatus, category.id)"
        > 
            {{ category.name }}
            {{ category.count }}
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