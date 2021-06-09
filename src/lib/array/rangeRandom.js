/**
 * 生成两数之间指定长度（所需产生的个数）的随机数组
 * @param {Number} min：起始值
 * @param {Number} max：结束值
 * @param {Number} n：指定生成的个数，默认1
 * @param {Boolean} isRepeat：是否重复,默认重复
 */
const rangeRandom = function (min = 0, max = 0, n = 1, isRepeat = true) {
    if (isRepeat) {
        return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min)
    } else {
        let arr = Array.from({ length: max - min + 1 }, (_, i) => i + min)
        let num = n > arr.length ? arr.length : n
        let ret = []
        while (ret.length != num) {
            let random = arr[Math.floor(Math.random() * arr.length)]
            !ret.includes(random) && ret.push(random)
        }
        return ret
    }
}
export default rangeRandom
/**
 * 示例：
 *
 * rangeRandom(0,10) //
 * rangeRandom(0,10,3) //
 * rangeRandom(0,10,9,false) //
 *
 */
