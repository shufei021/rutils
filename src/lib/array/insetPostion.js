/**
 * @description: 指定数组中某个索引的值 取出来，再插入到数组的任一位置
 * @param {Array} arr:被操作数组
 * @param {Number} oldIndex：老位置索引
 * @param {Number} newIndex：新位置索引
 * @param {Boolean} isChangeOldArr: 是否改变原数组
 * @return Array 返回一个数组
 */
const insetPostion = function (arr, oldIndex, newIndex, isChangeOldArr = false) {
    let a = isChangeOldArr ? arr : JSON.parse(JSON.stringify(arr))
    a.splice(newIndex, 0, a.splice(oldIndex, 1)[0])
    return a
}
export default insetPostion

/**
 * 示例：
 *
 *
 * let a1 = [1, 2, 3, 4, 5, 6]
 *
 * insetPostion(a1, 3, 1) // [1, 4, 2, 3, 5, 6]
 *
 * a1 // [1, 2, 3, 4, 5, 6]
 *
 *
 */
