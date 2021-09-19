/*
 * @Description: 生成 起止数字间（包含起止数字）的升序数组
 * @Author: shufei
 * @Date: 2021-09-08 19:53:20
 * @LastEditTime: 2021-09-08 19:53:20
 * @LastEditors: shufei
 */
/**
 * @description: 生成 起止数字间（包含起止数字）的升序数组
 * @param {Number} min : 最小值
 * @param {Number} max ：最大值
 */
const rangeGenerater = function (min, max) {
    return Array.from({ length: max - min + 1 }, (_, i) => i + min)
}
export default rangeGenerater

/*


rangeGenerater(5,10) // [5, 6, 7, 8, 9, 10]
rangeGenerater(0,10)//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

*/