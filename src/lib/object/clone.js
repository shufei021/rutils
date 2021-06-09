/**
 * 浅拷贝
 * @param {*} p
 */
const clone = function (p) {
    var o = {}
    for (var i in p) {
        o[i] = p[i]
    }
    return o
}
export default clone
