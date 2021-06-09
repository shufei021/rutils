/**
 * 生成指定范围内指定步长的数组
 * @param {Number} start : 起始值
 * @param {Number} stop : 结束值
 * @param {Number} step : 步长
 */
const rangeStep = function (start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)
}
export default rangeStep

/**
 * 示例：
 *
 * rangeStep(0,19,2) // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
 * rangeStep(0,19,3) // [0, 3, 6, 9, 12, 15, 18]
 * rangeStep(0,19,4) // [0, 4, 8, 12, 16]
 *
 */
