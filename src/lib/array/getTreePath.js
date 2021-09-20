const getTreeNodePath = function (list, id, idAlias = 'id', children = 'children', path) {
    for (let i = 0, len = list.length; i < len; i++) {
        const item = list[i]
        path.push(item)
        if (item[idAlias] === id) return path
        if (item[children] && item[children].length) {
            const res = getTreeNodePath(item[children], id, idAlias, (children = 'children'), path)
            if (res) return path
        }
        path.pop()
    }
}
/**
 * @description: 查询树任一节点的完整路径
 * @param { Array } list：树数组
 * @param { String } id：节点id
 * @param { String } idAlias：id别名
 * @param { String } nameAlias：name别名
 * @param { String } children：children别名
 * @param { Boolean } isTextPath：是否返回文字路径，默认 true
 */
 const  getTreePath = function(list, id, { idAlias = 'id', nameAlias = 'name', children = 'children' }, isTextPath = true) {
    // 遍历数组每一项
    for (let i = 0, len = list.length; i < len; i++) {
        // 遍历的当前项
        const item = list[i]
        // 重置 path
        const path = []
        // 如果遍历的当前项的 id 等于 传入的 id，则返回当前遍历项
        if (item[idAlias] === id) {
            return isTextPath ? [item[nameAlias]] : [item]
        } else {
            if (item[children] && item[children].length) {
                getTreeNodePath(item[children], id, idAlias, children, path)
                if (path.length) {
                    path.unshift(item)
                    return isTextPath ? path.map(i => i[nameAlias]) : path
                }
            }
        }
    }
    return []
}
export default getTreePath