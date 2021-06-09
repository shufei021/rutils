/**
 * @description: 数组转树
 * @param {Array} arr：需要转树的json数组
 * @param {Number | string} id：树节点 id
 * @param {String} link：父id
 */
const arrayToTree = function (arr, id = null, link = 'pid') {
    return arr.filter(i => i[link] === id).map(i => ({ ...i, children: arrayToTree(arr, i.id, link) }))
}
export default arrayToTree
