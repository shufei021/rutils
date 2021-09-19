/*
 * @Description: 数组重复 - arrayRepeat
 * @Author: shufei
 * @Date: 2021-09-08 19:03:17
 * @LastEditTime: 2021-09-08 19:03:17
 * @LastEditors: shufei
 */
/**
 * @description: 数组复制
 * @param {Array} arr:需要复制的数组
 * @param {Number} n: 复制的次数，默认 0
 */
const arrayRepeat = function(arr, n = 0) {
    let base = 0
    let res = arr
    while (base < n) {
        res = res.concat(arr)
        base++
    }
    return res
}
export default arrayRepeat

/**

arrayRepeat([1, 2, 3]) // [1, 2, 3]    不传复制次数 默认是不复制 返回原数组
arrayRepeat([1, 2, 3], 1) //  [1, 2, 3, 1, 2, 3] 复制 1 遍
arrayRepeat([1, 2, 3], 2) // [1, 2, 3, 1, 2, 3, 1, 2, 3] 复制 2 遍
arrayRepeat([1, 2, 3], 3) // [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3] 复制 3 遍
arrayRepeat([{ name: 'lisi' }], 1) // [{name: "lisi"},{name: "lisi"}] 复制 1 遍


*/