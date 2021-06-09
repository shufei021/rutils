/**
 * 判断是否是有效数字 不包含NaN
 * 是否有效数字：排除 NaN Infinity，数字字符串 或是 数字，都为有效数字
 */
const isNum = function (n) {
    return typeof n == 'symbol' ? false : !isNaN(parseFloat(n)) && isFinite(n)
}
export default isNum

/**
 *
 * let arr = [{}, [], undefined, null, 123, '123', Symbol('111'), function () {}, new Date(), false, /\d+/gi, NaN,Infinity]
 * arr.forEach(item => {
 *        console.log(isNum(item))
 *  })
 * // 4false 2true 7false
 *
 *
 *
 *
 */
