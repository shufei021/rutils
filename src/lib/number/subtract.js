import calc from './calc'
/**
 * 两数相减
 * @param {Number} a :减数
 * @param {Number} b ：被减数
 * @param {Number} digit ：结果保留位数
 */
const subtract = function (a = 0, b = 0, digit) {
    return Array.isArray(a) ? (a.length ? a.reduce((p, c) => subtract(p, c, b)) : 0) : calc(1, a, b, digit)
}
export default subtract

/**
 * 示例：
 *
 * subtract(0.1,0.12)   // -0.02
 * subtract(0.1,0.12,0) // 0
 * subtract(0.1,0.12,1) // "0.0"
 * subtract(0.1,0.12,2) // "0.02"
 * subtract(0.1,0.12,3) // "-0.020"
 *
 *
 *
 */
/**
 * 示例：
 *
 *
 * subtract([1.1,3]) // -1.9
 * subtract([1.1,3],1) // "-1.9"
 * subtract([1.1,3],2) // "-1.90"
 *
 *
 */
