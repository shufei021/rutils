/**
 * @description: 获取html页面dom中最大的层级数
 * @return Number
 */
export default function getMaxZIndex() {
    return Math.max(...[...document.querySelectorAll('*')].map(i => parseInt(getComputedStyle(i).zIndex) || 1))
}
