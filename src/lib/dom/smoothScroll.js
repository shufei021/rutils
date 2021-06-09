/**
 * @description: 顺滑的滚动到当前元素
 * @param {Element} element
 */
const smoothScroll = function (element) {
    return document.querySelector(element).scrollIntoView({ behavior: 'smooth' })
}
export default smoothScroll
