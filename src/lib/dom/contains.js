/**
 * @description: 判断点击 dom 范围是否是 指定class 或是 class dom下面的孩子dom
 * @param { String | Element}: selector
 * @param { subSelector | subSelector}: subSelector
 * @return {Boolean}
 */
const contains = function (selector, subSelector) {
    let p = typeof selector === 'string' ? document.querySelector(selector) : selector
    let c = typeof subSelector === 'string' ? document.querySelector(subSelector) : subSelector
    if (p && c) {
        return p.contains(c)
    } else {
        return false
    }
}
export default contains
