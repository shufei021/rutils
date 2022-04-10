/**
 * @Description 根据元素获取获取包含包含某个类的元素
 * @param {Element} el 指定元素
 * @param {String} className 指定元素的类
 * @returns Element
 */
export default function getElementByClassName(el, className) {
    // 如果当前DOM身上存在传入的class类，直接返回该元素
    if (el.classList.contains(className)) return el
    // 查询该元素的父节点
    let p = el.parentNode
    // 自内向外循环查询每一层的父节点身上是否包含传入的class类
    while (true) {
        // 如果 查询到顶端，即document了，直接返回 null，未查询到
        if (!p.classList) return null
        // 如果查询到了，就返回该元素
        if (p.classList.contains(className)) return p
        // 父节点变量随着查询过程，不断更改为父节点
        p = p.parentNode
    }
}
