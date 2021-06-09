/**
 * 数组中出现次数统计
 * @param {Array} a：数组
 * @param {String} k：键名 | 键值
 * @param {any} v：键值
 */
const timesTotal = (a, k, v) => a.reduce((p, c) => ((v ? c[k] === v : c === k) ? p + 1 : p), 0)

export default timesTotal

/**
 * 示例：
 *
 * let a1 = [1, 2, 3, 1, 5, 6, 1]
 *
 * timesTotal(a1, 1) // 3
 *
 * timesTotal([{a:1},{a:1}],'a',1) // 2
 *
 */
