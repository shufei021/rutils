/*
 * @Author: your name
 * @Date: 2021-06-03 23:09:17
 * @LastEditTime: 2021-06-03 23:12:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \rutils\src\lib\dom\getStyle.js
 */
/**
 * 返回指定元素的生效样式
 * @param {Element} el
 * @param {String} attr
 */
const getStyle = function (el, attr) {
    el = typeof el === 'string' ? document.querySelector(el) : el
    if (!el) return null
    return {
        left: el.offsetLeft,
        top: el.offsetTop,
        width: el.offsetWidth,
        height: el.offsetHeight,
        [attr]: el.currentStyle ? el.currentStyle[attr] : getComputedStyle(el)[attr]
    }[attr]
}
export default getStyle
