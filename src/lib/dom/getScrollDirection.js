/**
 * @description 获取滚动方向
 * @param { Element | HTMLElement | Window } scroller 滚动容器元素
 * @returns Object {x,y}
 */
export default function getScrollDirection(scroller=window) {
    const scrollLeft = scroller === window ? scrollX : scroller.scrollLeft;
    const scrollTop = scroller === window ? scrollY : scroller.scrollTop;
    if (scroller.oldScrollLeft === undefined) scroller.oldScrollLeft = 0;
    if (scroller.oldScrollTop === undefined) scroller.oldScrollTop = 0;
    const is = scroller.oldScrollTop !== scrollTop;
    scroller.oldScrollLeft = scrollLeft;
    scroller.oldScrollTop = scrollTop;
    return { x: !is, y: is };
}
