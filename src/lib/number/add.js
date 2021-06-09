import calc from './calc'
/**
 * 两数相加
 * @param {Number} a :加数
 * @param {Number} b ：被加数
 * @param {Number} digit ：结果保留位数
 */
const add = function (a, b, digit) {
    return Array.isArray(a) ? (a.length ? a.reduce((p, c) => add(p, c, b), 0) : 0) : calc(0, a, b, digit)
}
export default add

/**
 *
 * 示例：
 *
 * add(0.1,0.2,3) //"0.300"
 *
 */
/**
 *
 * 示例：
 *
 * add([0.1,0.2]) // 0.3
 * add([0.1,0.2],3)     // '0.300'
 * add([0.1,0.2,1,2],3) // '3.300'
 *
 *
 */
