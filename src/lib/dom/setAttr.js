/**
 * 设置元素属性
 * @param {Object}} attrs
 */
const setAttr = function (el, attrs) {
    for (const key in attrs) {
        el.setAttribute(key, attrs[key])
    }
    return el
}
export default setAttr
