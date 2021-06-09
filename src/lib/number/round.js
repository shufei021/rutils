/**
 * 四舍五入到指定位数
 * @param {Number} n:小数
 * @param {Number} decimals ：四舍五入到指定位数
 */
const round = function (n, decimals) {
    if (decimals === undefined) return n
    return Number(Math.round(n + 'e' + (decimals || 0)) + 'e-' + (decimals || 0))
}
export default round

/**
 *
 * 示例：
 *
 * round(1.23456,1)// 1.2
 * round(1.23456,2)// 1.23
 * round(1.23456,3)// 1.235
 * round(1.23456,4)// 1.2346
 * round(1.23456,5)// 1.23456
 *
 */
