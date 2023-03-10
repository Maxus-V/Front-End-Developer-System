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

  //向上往整10取整数
export const formatInt = (num) => {
  let str = num + ''
  let len = str.length
  let mult = Math.pow(10, len)
  return Math.ceil(num / mult) * mult
}

//子列表展开
export const getChildrenByLoop = (children) => children.reduce((list, child) => {
    const {defaultSelected, children} = child
    const childList = children && children.length ? getChildrenByLoop(children) : []
    return defaultSelected ? list.concat(child, ...childList) : list.concat(...childList)
}, [])

//获取图片
export const getImage = (url, type) => {
  const str = `../assets/images/${url}.${type}`
  return new URL(str, import.meta.url).href
}