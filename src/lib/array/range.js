/**
 * @description: 生成 起止数字间（包含起止数字）的升序数组
 * @param {Number} min : 最小值
 * @param {Number} max ：最大值
 */
const range = function (min, max) {
    return Array.from({ length: max - min + 1 }, (_, i) => i + min)
}
export default range

/**
 * 示例：
 *
 * range(0,10) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * range(1,9)  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 */
