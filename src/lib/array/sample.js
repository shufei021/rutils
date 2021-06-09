/**
 * 指定数组中获取随机数(1 位)
 * 不限 json 数组
 * @param {Array} arr :数组
 */
const sample = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
export default sample

/**
 *
 * 示例：
 *
 * sample([1,2,3,4,5])//
 *
 * sample([{id:1},{id:2},{id:3}])//
 *
 *
 */
