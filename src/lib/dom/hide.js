/**
 * 隐藏所有的指定标签
 * @param  {...any} el
 */
const hide = function (el) {
    Array.from(document.querySelectorAll(el)).forEach(e => (e.style.display = 'none'))
}
export default hide
