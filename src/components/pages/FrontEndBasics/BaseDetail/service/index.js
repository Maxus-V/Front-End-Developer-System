import axios from "axios";
import api from '../config'

export const getListDetail = (id) => {
    const key = "GET_EVENT_LIST_DETAIL" + id
    return axios.get(api[key])
}