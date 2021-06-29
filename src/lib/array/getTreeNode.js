/**
 * @description: 根据 id 获取 tree 的节点
 * @param {Array} list ：树数组
 * @param {String} id： id 值
 * @param {String} link: id 别名
 */
const getTreeNode = function(list, id,link = 'id') {
    for (let i = 0, len = list.length; i < len; i++) {
      const item = list[i]
      if (item[link] === id) return item
      if (item.children && item.children.length) {
        const res = getTreeNode(item.children, id)
        if (res) return res
      }
    }
}
export default getTreeNode
