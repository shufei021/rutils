/**
 * 手动触发Node已有和自定义事件类型函数
 * @param {Element} Node :：触发对象
 * @param {String} EventType : 触发事件类型
 */
const trigger = function (Node, EventType) {
    if(!Node)return
    // 创建事件类型
    let evt = document.createEvent('Events')
    // 初始化对应类型的事件
    evt.initEvent(EventType, true, true)
    // 如果该节点身上已有该事件类型，则直接触发即可，blur, scroll, select三个不会触发监听的回调函数特殊处理
    if (EventType in Node) {
        Node[EventType]()
        if (['blur', 'scroll', 'select'].includes(EventType)) {
            // 保证监听的回调函数能够触发
            Node.dispatchEvent(evt)
        }
    } else {
        // 手动触发 自定义事件
        Node.dispatchEvent(evt)
    }
}
export default trigger
