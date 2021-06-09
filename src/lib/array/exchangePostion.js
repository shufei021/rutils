/**
 * @description: 交换数组中任一两个值的位置
 * @param {Array} arr:数组
 * @param {Number} oldIndex：老位置索引
 * @param {Number} newIndex：新位置索引
 * @param {Boolean} isChangeOldArr: 是否改变原数组
 * @return {Array} 返回一个数组
 */
const exchangePostion = function (arr, oldIndex, newIndex, isChangeOldArr = false) {
    let a = isChangeOldArr ? arr : JSON.parse(JSON.stringify(arr))
    a.splice(oldIndex, 1, a.splice(newIndex, 1, a[oldIndex])[0])
    return a
}
export default exchangePostion

/**
 *
 * 示例：
 *
 * let a1 = [1, 2, 3, 4, 5, 6]
 *
 * exchangePostion(a1, 4, 1)// [1, 5, 3, 4, 2, 6]
 *
 * a1 //[1, 2, 3, 4, 5, 6]
 *
 * let a1 = [1, 2, 3, 4, 5, 6]
 *
 * exchangePostion(a1, 4, 1，true)// [1, 5, 3, 4, 2, 6]
 *
 * a1 // [1, 5, 3, 4, 2, 6]
 *
 *
 *
 *
 *
 */
