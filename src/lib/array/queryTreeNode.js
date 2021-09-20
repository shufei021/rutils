
import deepClone from "../object/deepClone"
/**
 * @description: 查询树节点
 * @param { Object | Array } tree:树
 * @param { String } id：id
 * @param { String } idAlias：id别名
 * @param { String } children：children：别名
 */
const queryTreeNode = function(tree,id,{idAlias = 'id',  children = 'children'}){
    tree = deepClone(tree)
    const q = Array.isArray(tree) ? tree : [tree]
    while (q.length) {
        let top = q.shift()
        if (top[idAlias] === id) return top
        top[children] &&
            top[children].length &&
            top[children].forEach(child => {
                q.push(child)
            })
    }
}

export default queryTreeNode



