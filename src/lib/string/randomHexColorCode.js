/**
 * 随机十六进制颜色
 */
const randomHexColorCode = function () {
    let n = (Math.random() * 0xfffff * 1000000).toString(16)
    return '#' + n.slice(0, 6)
}
export default randomHexColorCode
