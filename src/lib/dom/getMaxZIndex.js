/**
 * @description: 获取html页面dom中最大的层级数
 * @return {Number}
 */
const getMaxZIndex = function () {
    // 获取HTML中所有的DOM
    let divs = document.querySelectorAll('*')
    return Math.max(...[...divs].map(i => parseInt(getComputedStyle(i).zIndex) || 1))
}
export default getMaxZIndex
