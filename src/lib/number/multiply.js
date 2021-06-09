import calc from './calc'
/**
 * 两数相乘
 * @param {*} a :乘数
 * @param {*} b ：被乘数
 * @param {*} digit ：结果保留位数
 */
const multiply = function (a, b, digit) {
    return Array.isArray(a) ? (a.length ? a.reduce((p, c) => multiply(p, c, b), 1) : 0) : calc(2, a, b, digit)
}
export default multiply

/**
 * 示例：
 *
 *
 * multiply(1.1,2.2)    // 2.42
 * multiply(1.13,0.8,0) // 1
 * multiply(1.13,0.8,1) // "0.9"
 * multiply(1.13,0.8,2) // "0.90"
 * multiply(1.13,0.8,3) // "0.904"
 * multiply(1.13,0.8,4) // "0.9040"
 *
 *
 *
 *
 *
 */
