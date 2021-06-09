/**
 * 返回数组中某值的所有索引，数组形式返回
 * @param {Array} a:数组
 * @param {String} k: 键名
 * @param {String} v: 键值
 */
const indexOfAll = (a, k, v) => a.reduce((p, c, i) => ((v ? c[k] === v : c === k) ? [...p, i] : p), [])

export default indexOfAll

/**
 * 示例：
 *
 *
 * let a1 = [
 *  { id: 1, name: '张三', age: 20, count: 100 },
 *  { id: 2, name: '李四', age: 21, count: 50 },
 *  { id: 2, name: '大卫', age: 21, count: 50 },
 *  { id: 3, name: '阿呆', age: 23, count: 55 },
 *  { id: 3, name: '阿呆', age: 23, count: 55 }
 * ]
 * indexOfAll([1, 2, 3, 1, 2, 3], 1) // [0,3])
 * indexOfAll(a1, 'id', 3) // [3,4])
 *
 *
 *
 */
