/**
 * 合并两个对象
 * @param { Object } f : 需要合并的第一个对象
 * @param { Object } s ：需要合并的第二个对象
 * @return Object 合并后的对象
 */
const baseMerge = function (f, s) {
    for (var i in s) {
        f[i] = f[i] && f[i].toString() === '[object Object]' ? merge(f[i], s[i]) : (f[i] = s[i])
    }
    return f
}
const merge = function () {
    return Array.from(arguments).reduce((p, c) => baseMerge(p, c), {})
}
export default merge
