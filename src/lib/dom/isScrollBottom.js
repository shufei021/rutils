/**
 * 元素是否滚动到最底部
 * @param {Element|String} el 需要检测的元素
 * @return {Boolean} true: 是，false: 否
 */
const isScrollBottom = (el) => {
    el = typeof el === "string" ? document.querySelector(el) : el;
    return el ? el.scrollHeight - el.scrollTop === el.clientHeight : false;
};

export default isScrollBottom;
