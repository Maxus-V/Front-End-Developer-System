import { ref } from 'vue'
import { isUndefined } from 'lodash-es'

const initData = {
    data: [],
    count: 0,
    totalPage: 0,
    conditions: {
        pageSize: 10,
        currentPage: 1
    }
}

const isLoading = ref(false)
const tableData = ref(null)

const tableHandler = (action) => {
    const {type, payload} = action
    if (type === 'INIT_DATA') {
        return Object.assign({}, tableData.value, {
            ...payload,
        })
    } else if (type === 'MODIFY_PAGES') {
        const {conditions} = tableData.value
        const {pageSize = 10, currentPage = 1} = payload
        return Object.assign({}, tableData.value, {
            conditions: Object.assign({}, conditions, {
                ...payload
            }),
            pageSize,
            currentPage
        })
    } else if (type === 'MODIFY_CONDITION') {
        return {
            ...tableData.value,
            conditions: {
                ...tableData.value.conditions,
                ...payload
            }
        }
    } else if (type === 'CONCAT_DATA') {
        const {data} = tableData.value
        const {pageSize, currentPage, ...rest} = payload
        return Object.assign({}, tableData.value, {
            ...Object.assign({}, rest, {
                    data: data.concat(payload.data),
                }, 
                pageSize, 
                currentPage
            )
        })
    } else {
        return tableData.value
    }
}

const useTable = (type, fetchTableData, initConditions = {}, isLoadable = false) => {
    tableData.value = Object.assign({}, initData, {
        conditions: Object.assign({}, initData.conditions, initConditions)
    })
    const fetchData = async (conditions) => {
        isLoading.value = false
        const {pageSize, currentPage, ...rest} = conditions
        fetchTableData({
            currentPage,
            pageSize,
            ...rest
        }).then(res => {
            if (res && res.status === 'success' || (res && res.data)) {
                const {currentPage} = res
                if (currentPage !== 1 && isLoadable) {
                    tableHandler({
                        type: 'CONCAT_DATA',
                        payload: res
                    })
                } else {
                    tableHandler({
                        type: 'INIT_DATA',
                        payload: res
                    })
                }
            }
        })
        isLoading.value = true
    }
    const modifyPages = (pageSize, currentPage) => {
        tableHandler({
            type: 'MODIFY_PAGES',
            payload: {
                currentPage,
                pageSize,
            }
        })
    }
    const modifyConditions = (conditions) => {
        tableHandler({
            type: 'MODIFY_CONDITION',
            payload: conditions
        })
    }
    const forceRefresh = (currentPage, pageSize = tableData.value.conditions.pageSize) => {
        tableHandler({
            ...tableData.value.conditions,
            currentPage: !isUndefined(currentPage) ? currentPage : tableData.value.currentPage,
            pageSize: pageSize,
        }).then(res => {
            tableHandler({
                type: 'INIT_DATA',
                payload: res
            });
        });
    }

    return {
        tableData: tableData.value,
        dispatchTableData: tableHandler,
        customFetchData: fetchData,
        modifyPages,
        modifyConditions,
        forceRefresh,
        isLoading: isLoading.value,
    }
}

export default useTable