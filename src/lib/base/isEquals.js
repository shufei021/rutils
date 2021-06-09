/**
 * @param {any} a：比较的值
 * @param {any} b：其他要比较的值
 */
const isEquals = function (a, b) {
    if (a === b) return true
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime()
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b
    if (a.prototype !== b.prototype) return false
    let keys = Object.keys(a)
    if (keys.length !== Object.keys(b).length) return false
    let type = o => Object.prototype.toString.call(o).slice(8, -1)
    return ((Array.isArray(a) && Array.isArray(b)) || (type(a) == 'Object' && type(b) == 'Object')) && keys.every(k => isEquals(a[k], b[k]))
}
export default isEquals
