/**
 * @description: 获取元素的滚动位置坐标
 * @param {Elemnt} el
 */
const getScrollPosition = function (el = window) {
    return {
        x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    }
}
export default getScrollPosition
