/**
 * @description: 生成一个指定长度 每个值都填充为统一的 指定值
 * @param {Number} len ：数组长度
 * @param {any} o：填充的值
 */
const arrayFill = function (len, o) {
    return Array(len).fill(o)
}
export default arrayFill

/**
 * 示例：
 *
 * generate(5,1) // [1,1,1,1,1]
 * generate(3,{name:''}) // [{name:''},{name:''},{name:''}]
 *
 */
