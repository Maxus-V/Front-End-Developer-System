//实现千位分隔
export const thousandth = (num) => {
    let res = num.toString().replace(/\d+/, (n) => {
      return n.replace(/(\d)(?=(\d{3})+$)/g, ($1) => {
        return $1 + ","
      })
    })
    return res
  }

//由秒格式转化为天时分秒格式
export const s2hms = (time = 0) => {
    const days = parseInt(time / 86400)
    const remainTime = time % 86400
    const hours = parseInt(remainTime / 3600)
    const minutes = parseInt((remainTime / 60) % 60)
    const seconds = Math.ceil(remainTime % 60)
    return `${days > 0 ? days + '天' : ''}${hours > 0 ? hours + '小时' : ''}${minutes > 0 ? minutes + '分' : ''}${seconds}秒`
}

export const getChildrenByLoop = (children) => children.reduce((list, child) => {
    const {defaultSelected, children} = child
    const childList = children && children.length ? getChildrenByLoop(children) : []
    return defaultSelected ? list.concat(child, ...childList) : list.concat(...childList)
}, [])