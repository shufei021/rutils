/**
 * @description: 内容是否超出省略
 * @param {Element} el
 */
const isEllipsis = function (el) {
    return (
        el.scrollHeight !== el.offsetHeight || el.scrollWidth !== el.offsetWidth
    );
};

export default isEllipsis;
