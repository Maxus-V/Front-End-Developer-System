import { reactive } from 'vue'

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
    const fetchData = (params) => {
        fetchTableData(params).then(res => {
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
        fetchData(useTableState.initData.conditions)
    }
    const modifyPages = (conditions) => {
        const {pageSize, currentPage} = conditions
        useTableState.initData = {
            ...useTableState.initData,
            conditions: {
                ...useTableState.initData.conditions,
                pageSize,
                currentPage,
            }
        }
        fetchData()
    }
    fetchData()
    return {
        tableData: useTableState,
        modifyConditions,
        modifyPages,
    }
}