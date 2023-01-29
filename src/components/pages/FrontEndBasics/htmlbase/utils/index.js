import { reactive, computed } from 'vue'

const useTableState = reactive({
    initData: {
        data:[],
        count: 0,
        totalPage: 0,
        incidentPageCount: {},
        conditions: {
            pageSize: 10,
            currentPage: 1,
        },
    },
})

export const useTable = (fetchTableData, initConditions = {}) => {
    useTableState.initData = Object.assign({}, useTableState.initData, {
        conditions: Object.assign({}, useTableState.initData.conditions, initConditions)
    })
    const fetchData = () => {
        fetchTableData().then(res => {
            if (res && res.status === 200) {
                useTableState.initData = res.data
            }
        })
    }
    const modifyConditions = (conditions) => {
        useTableState.initData = {
            ...useTableState.initData,
            conditions: {
                ...useTableState.initData.conditions,
                ...conditions,
            }
        }
        fetchData()
    }
    fetchData()
    return {
        tableData: useTableState,
        modifyConditions,
    }
}