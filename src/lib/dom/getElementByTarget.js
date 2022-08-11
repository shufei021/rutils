/**
 * @description 根据指定元素 查询指定最近的class的元素
 * @param {Element} el 目标元素
 * @param {String} className 查找的 class
 * @returns 
 */
export default function getElementByTarget (el, className) {
    // 目标元素不存在 返回 null
    if(!el)return null
    // 当前元素就是要查找的元素，直接返回当前元素
    if (el.classList.contains(className)) return el
    // 往外开始查找
    let p = el.parentNode
    while (true) {
      if (!p.classList) return null
      if (p.classList.contains(className)) return p
      p = p.parentNode
    }
}
