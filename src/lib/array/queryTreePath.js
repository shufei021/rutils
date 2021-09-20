/**
 * @description: 找到树节点
 * @param { Object | Array } tree 树
 * @param { Function } func：回调函数
 * @param { Array } path：路径
 */
const queryTreePath =function (tree, func, path = []) {
    if (!tree) return []
    tree = Array.isArray(tree) ? tree : [tree]
    for (const item of tree) {
        path.push(item)
        if (func(item)) return path
        if (item.children&&item.children.length) {
            const children = queryTreePath(item.children, func, path)
            if (children.length) return children
        }
        path.pop()
    }
    return []
}
export default queryTreePath