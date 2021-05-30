//检查 `value` 是否可能是原型对象。
const isPrototype = function (value) {
    const objectProto = Object.prototype
    const Ctor = value && value.constructor
    const proto = (typeof Ctor === 'function' && Ctor.prototype) || objectProto
    return value === proto
}
// 是否有长度
const isLength = function (value) {
    const MAX_SAFE_INTEGER = 9007199254740991 // 2**53-1
    return typeof value === 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}
const isArrayLike = function (value) {
    return value != null && typeof value !== 'function' && isLength(value.length)
}
const getType = function (o) {
    return Object.prototype.toString.call(o).slice(8, -1).toLowerCase()
}
const isObjectLike = function (value) {
    return typeof value === 'object' && value !== null
}
const isArguments = function (value) {
    return isObjectLike(value) && getType(value) == 'arguments'
}

/**
 * @param {Array|Object|string} value：要检查的值
 */
const isEmpty = function (value) {
    if (value == null) return true
    if (isArrayLike(value)) {
        try {
            return !value.length
        } catch (e) {}
    }

    if (['map', 'set'].includes(getType(value))) return !value.size
    if (isPrototype(value)) return !Object.keys(value).length
    const hasOwnProperty = Object.prototype.hasOwnProperty
    for (const key in value) {
        if (hasOwnProperty.call(value, key)) return false
    }
    return true
}
export default isEmpty
