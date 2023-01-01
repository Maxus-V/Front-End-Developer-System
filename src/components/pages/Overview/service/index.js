import API from '../config'
//TODO: axios封装库,promise原理

export const getOverviewCardsData =  (params) => {
    // console.log(API.GET_OVERVIEW_CARDSDATA)
    const {timeRange="7d"} = params
    return timeRange === "7d" ?{
        data: {
            incidentSummary: {
                myCount: 100,
                allCount: 200,
                todayMyTotal: 300,
                todayAllTotal: 400
            },
            pendingIncidentSummary: {
                myCount: 400,
                allCount: 300,
                todayMyTotal: 200,
                todayAllTotal: 100
            },
            compressRateSummary: {
                compressRate: 10,
            },
            mttaSummary: {
                averageTime: '114514', 
                statistics: [
                    {
                        value: '33333',
                        time: 114514,
                    },
                    {
                        value: '22222',
                        time: 1919810
                    }
                ]
            },
            mttrSummary: {
                averageTime: '1919810', 
                statistics: [
                    {
                        value: '22222',
                        time: 114514,
                    },
                    {
                        value: '33333',
                        time: 1919810
                    }
                ]
            }
        }
    } : {
        data: {
            incidentSummary: {
                myCount: 0,
                allCount: 0,
                todayMyTotal: 0,
                todayAllTotal: 0
            },
            pendingIncidentSummary: {
                myCount: 400,
                allCount: 300,
                todayMyTotal: 200,
                todayAllTotal: 100
            },
            compressRateSummary: {
                compressRate: 0,
            },
            mttaSummary: {
                averageTime: '114514', 
                statistics: [
                    {
                        value: '22222',
                        time: 114514,
                    },
                    {
                        value: '33333',
                        time: 1919810
                    }
                ]
            },
            mttrSummary: {
                averageTime: '1919810', 
                statistics: [
                    {
                        value: '33333',
                        time: 114514,
                    },
                    {
                        value: '22222',
                        time: 1919810
                    }
                ]
            }
        }
    }
}

export const getOverviewChartsData = (params) => {
    return {
        data: {
            incidentTrend: [],
            alertTrend: [],
            eventTrend: [],
        }
    }
}

export const getOverviewTableData = (params) => {
    return {
        data: {
            
        }
    }
}