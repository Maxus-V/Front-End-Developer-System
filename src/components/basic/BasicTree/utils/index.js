//生成唯一id
export const guid = () => {
    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0
        var v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}


export const generateId = (id) => {
    const type = typeof id
    if (type === 'number') {
        return id.toString()
    } else if (type === 'string') {
        return id
    } else if (type === 'object' || type === 'undefined') {
        return guid()
    } else {
        return id
    }
}

export const KMPMatch = (str, pattern) => {
    var next = generateNextArr(pattern)
    var i = 0; // str 指针
    var j = 0; // pattern指针
    while (i < str.length && j < pattern.length) {
        if (str[i] === pattern[j] || j === -1) {
            i++;
            j++;
        } else {
            j = next[j] // 右移
        }
    }
    if (j === pattern.length) {
        return i - j
    } else {
        return -1
    }
}

function generateNextArr(pattern) {
    var i = 0;
    var j = -1;
    var next = []
    next[0] = -1
    while (i < pattern.length) {
        if (j === -1 || pattern[i] === pattern[j]) {
            i++;
            j++;
            next[i] = j
        } else {
            j = next[j]
        }
    }
    return next;
}


export const generateData = (dataSource, searchValue, isParentHitSearchValue = false) => dataSource.reduce((t, c) => {
    const {children, id, name} = c
    const key = generateId(id)
    const isLeaf = !((children || []).length)
    const isHit = (!searchValue || KMPMatch(name, searchValue) > -1)
    const childList = children && children.length ? generateData(children, searchValue, isHit) : []
    return (isHit || isParentHitSearchValue || childList.length) ? t.concat({
        ...c,
        id: key,
        isLeaf,
        isHit,
        children: childList,
        isDefaultExpand: !isLeaf && childList.length
    }) : t
}, [])

export const getChildrenId = (children, callBack) => children.reduce((list, child) => {
    const {children} = child
    const childList = children && children.length ? getChildrenId(children, callBack) : []
    const isLeaf = !((children || []).length)
    return isLeaf ? list.concat(child, ...childList) : list.concat(...childList)
}, [])

export const useSelectStatus = (node, selectedNodes, callback, value) => {
    const selectedIds = selectedNodes.map(node => node.id)
    const childList = getChildrenId(node.children)
    const {selectedChild, unSelectedChild} = childList.reduce((t, child) => {
        const {id} = child
        const {selectedChild, unSelectedChild} = t
        return selectedIds.includes(id) ? {
            selectedChild: selectedChild.concat(child),
            unSelectedChild
        } : {
            unSelectedChild: unSelectedChild.concat(child),
            selectedChild
        }
    }, {
        selectedChild: [],
        unSelectedChild: []
    })
    
    const status = () => {
            const {isLeaf, name} = node
            if (isLeaf) {
                return !!(selectedNodes.find((i) => i.id === node.id))
            } else {
                const count = selectedChild.length
                return count === childList.length ? true : count === 0 ? false : 'half'
            }
    }

    const newStatus = node.isLeaf ? !! (selectedNodes.find((i) => i.id === node.id)) : selectedChild.length === childList.length ? true : selectedChild.length === 0 ? false : 'half'
    const selectedNode = () => {
        const {isLeaf} = node
        if (isLeaf) {
            callback(value) && callback(value)([node])
        } else {
            callback(value) && callback(value)(status === 'half' ? unSelectedChild.filter(i => !(i.disabled)) : childList.filter(i => !(i.disabled)))
        }
    }
    return {
        status,
        newStatus,
        selectedNode
    }
}