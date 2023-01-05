export const getChildrenByLoop = (children) => children.reduce((list, child) => {
    const {defaultSelected, children} = child
    const childList = children && children.length ? getChildrenByLoop(children) : []
    return defaultSelected ? list.concat(child, ...childList) : list.concat(...childList)
}, [])