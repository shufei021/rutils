/**
 * @description 获取滚动方向
 * @param { Element | HTMLElement | Window | String} scroller 滚动容器元素
 * @returns Object {x,y}
 */
export default function getScrollDirection(scroller=window) {
    // 兼容 window 和 DOM 
    scroller = scroller === window ? window : typeof scroller ==='string'? document.querySelector(scroller) : scroller
    const scrollLeft = scroller === window ? scroller.scrollX : scroller.scrollLeft;
    const scrollTop = scroller === window ? scroller.scrollY : scroller.scrollTop;
    scroller = scroller === window ? getScrollDirection:scroller
    // 兼容 页面刷新 window scroll 的 x和y轴的滚动情况
    if(scroller.oldScrollLeft === undefined&&scroller.oldScrollTop === undefined && scrollTop && scrollLeft ){
        scroller.oldScrollLeft = 0;
        scroller.oldScrollTop = 0
        scroller.oldScrollLeft = scrollLeft;
        scroller.oldScrollTop = scrollTop;
        return { x: true, y: true}
    }
    if (scroller.oldScrollLeft === undefined) scroller.oldScrollLeft = 0;
    if (scroller.oldScrollTop === undefined) scroller.oldScrollTop = 0;
    const is = scroller.oldScrollTop !== scrollTop;
    scroller.oldScrollLeft = scrollLeft;
    scroller.oldScrollTop = scrollTop;
    return { x: !is, y: is };
}
