/**
 * @description: 获取 元素的 属性
 * @param {*} el
 * @param {*} attrName
 */
const getAttr = function (el, attrName) {
    try {
        el = typeof el === 'string' ? document.querySelector(el) : el
        return el.getAttribute(attrName)
    } catch (error) {
        return {}
    }
}
export default getAttr
