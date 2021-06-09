/**
 * 指定深度扁平化数组
 * @param {Array} arr :扁平化的数组
 * @param {Number} depth：扁平化的层级
 */
const flatten = function (arr, depth = 1) {
    return arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])
}
export default flatten

/**
 * 示例：
 *
 * flatten([1, 2, 3, [4, [5, 6, [7]]]]) //[1, 2, 3, 4, [5,6,[7]]]
 *
 * flatten([1, 2, 3, [4, [5, 6, [7]]]], 2) //[1, 2, 3, 4, 5,6,[7]]
 *
 *
 */
