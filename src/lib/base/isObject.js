/*
 * @Description:isObject 是否是对象类型
 *
 * isObject({}) // true
 * isObject(null) // false
 *
 */
function isObject(o) {
    return getType(o) === 'object'
}
export default isObject
