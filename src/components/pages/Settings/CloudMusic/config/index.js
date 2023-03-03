import service from "../services"

export const getMusicList = (parms) => {
    const keywords = parms
    return service({
        method: "GET",
        url: `/search?keywords= ${keywords}`
    })
}

// export const getMusicCanPlay = (parms) => {
//     const id = parms
//     return service({
//         method: "GET",
//         url: `/search?keywords= ${id}`
//     })
// }

export const getMusicUrl = (parms) => {
    const id = parms
    return service({
        method: "GET",
        url: `/song/url?id=${id}`
    })
}

