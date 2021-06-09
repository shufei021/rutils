import round from './round'
/**
 * 计算方法 calc
 * @param { number } type ：0 加  1 减 2 乘 3 除
 * @param { String | Number } a ：计算数a
 * @param { String | Number } b ：计算数b
 * @param { Number } digit  ：结果保留的位数
 * @return Number | String
 */
const calc = function (type, a, b, digit) {
    let r1, r2
    try {
        r1 = a.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = b.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    let maxLen = Math.pow(10, Math.max(r1, r2))
    let tyeps = [
        round((Math.round(maxLen * a) + Math.round(maxLen * b)) / maxLen, digit), //加
        round((Math.round(maxLen * a) - Math.round(maxLen * b)) / maxLen, digit), //减
        round((Math.round(maxLen * a) * Math.round(maxLen * b)) / (maxLen * maxLen), digit), //乘
        round(Math.round(maxLen * a) / Math.round(maxLen * b), digit) //除
    ]
    let str = String(round(tyeps[type], digit || 0))
    if (digit) {
        if (str.includes('.')) return str.split('.')[0] + '.' + str.split('.')[1].padEnd(digit, 0)
        return (str + '.').padEnd((str + '.').length + digit, 0)
    } else {
        return tyeps[type]
    }
}
export default calc

/**
 * 示例：
 *
 * // 减法 -
 * calc(0,2,2,2) //'0.00'
 * // 加法 +
 * calc(1,2,2,2) //'4.00'
 * // 乘法 ×
 * calc(2,2,3,2) //'6.00'
 * // 除法 ÷
 * calc(3,2,3,2) //'0.67'
 *
 *
 *
 */
