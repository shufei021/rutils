/**
 * @description: 数组转树
 * @param {Array} arr ：数组
 */
const arrayToObject = function (arr) {
    return Array.from(arr.entries()).reduce((p, c) => ((p[c[0]] = c[1]), p), {})
}
export default arrayToObject
/**
 * 示例：
 *
 * let arr = ["a", "b", "c"];
 * arrayToObject(arr) // {0: "a", 1: "b", 2: "c"}
 *
 *
 */
