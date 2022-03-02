/**
 * @description 判断列表项元素是否出现在滚动可视区域
 * @param {String| Element} scrollerEl 滚动容器类或元素
 * @param {String| Element} wrapEl 滚动内容容器类 或元素
 * @param {String | Element} item 查询的列表项的类 或 类名
 * @returns Boolean 是否出现在滚动可视区域
 */
 export default function isScrollerVisible(scrollerEl, wrapEl, item) {
    const scroller =typeof scrollerEl === 'string' ?  document.querySelector(scrollerEl):scrollerEl
    const wrap =typeof wrapEl === 'string' ?  scroller.querySelector(wrapEl) : wrapEl
    const activeItem = typeof item === 'string'? wrap.querySelector(item):item
    const top = activeItem.getBoundingClientRect().top - wrap.offsetTop
    return top>=0 && top <= scroller.offsetHeight - activeItem.offsetHeight
}