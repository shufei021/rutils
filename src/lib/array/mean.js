/**
 * 数组平均数
 * @param {Array} a:数组
 * @param {Function | String} f:函数 或 key
 */
const mean = function (a, f) {
    return (f ? a.map(typeof f === 'function' ? f : v => v[f]) : a).reduce((acc, val) => acc + val * 1, 0) / a.length
}
export default mean

/**
 * 示例：
 *
 * mean([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n) // 5
 * mean([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n') // 5
 * mean([4, 2, 8, 6]) // 5
 * mean(['4', 2, '8', 6]) //5
 *
 *
 */
