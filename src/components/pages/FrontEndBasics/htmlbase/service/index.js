import axios from "axios";
import api from '../config'

export const getList = () => {
    return axios.get(api.GET_EVENT_LIST).then(res => {
        if (res && res.status === 200) {
            const {
                incidentPageCount,
                currentPage,
                pageSize,
                count,
                totalPage,
            } = res.data
            return {
                incidentPageCount,
                currentPage,
                pageSize,
                count,
                totalPage,
            }
        }
    })
}