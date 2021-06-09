/*
 * @Author: your name
 * @Date: 2021-06-06 15:06:36
 * @LastEditTime: 2021-06-06 15:09:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rutils\src\lib\dom\getAttr.js
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
