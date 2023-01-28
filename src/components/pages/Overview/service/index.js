import axios from "axios";
import api from '../config'

export const getOverviewCardsData =  (params) => {
    const { type } = params
    return type ? axios.get(api.GET_OVERVIEW_CARDSDATA7) : axios.get(api.GET_OVERVIEW_CARDSDATA) 
}

export const getOverviewChartsData = (params) => {
    const { type, flag } = params
    if (flag) {
        return type ? axios.get(api.GET_OVERVIEW_CHARTSDATA7) : axios.get(api.GET_OVERVIEW_CHARTSDATA)
    } else {
        return axios.get(api.GET_OVERVIEW_CHARTSDATA)
    }
}

export const getOverviewTablesData = (params) => {
    const { type } = params
    return type ? axios.get(api.GET_OVERVIEW_TABLESDATA7) : axios.get(api.GET_OVERVIEW_TABLESDATA)
}