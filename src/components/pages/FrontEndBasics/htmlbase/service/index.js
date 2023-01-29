import axios from "axios";
import api from '../config'

export const getList = () => {
    return axios.get(api.GET_EVENT_LIST)
}