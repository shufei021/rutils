import calc from './calc'
/**
 * 两数相除
 * @param {Number} a :除数
 * @param {Number} b ：被除数
 * @param {Number} digit ：结果保留位数
 */
const devide = function (a, b, digit) {
    return Array.isArray(a) ? (a.length >= 2 ? a.reduce((p, c) => devide(p, c, b)) : '') : !a || !b ? '' : calc(3, a, b, digit)
}
export default devide

/**
 * 示例：
 *
 * devide() // ""
 * devide(1) // ""
 * devide(1,3) // 0.3333333333333333
 * devide(1,3,1) // "0.3"
 * devide(1,3,2) // "0.33"
 *
 *
 *
 *
 */
/***
 * 示例：
 *
 * devide() // ""
 * devide([]) // ""
 * devide([1,3]) // 0.3333333333333333
 * devide([1,3,3]) // 0.1111111111111111
 * devide([1,9]) // 0.1111111111111111
 * devide([1,9],0) // 0
 * devide([1,9],1) // "0.1"
 * devide([1,9],2) // "0.11"
 * devide([1,9],3) // "0.111"
 *
 *
 *
 *
 *
 */
