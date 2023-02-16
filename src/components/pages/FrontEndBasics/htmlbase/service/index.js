import axios from "axios";
import api from '../config'

export const getList = (params={}) => {
    const { processStatusList = ["PENDING"] } = params
    if (processStatusList[0] === "PROCESSING") {
        return axios.get(api.GET_EVENT_LIST_PROCESSING)
    } else if (processStatusList[0] === "CLOSED") {
        return axios.get(api.GET_EVENT_LIST_CLOSED)
    } else {
        return axios.get(api.GET_EVENT_LIST)
    }
}