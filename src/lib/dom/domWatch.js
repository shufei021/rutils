/**
 * @ DOM 监听
 * @param {Element | string} tagNode 
 * @param {Function} cb 
 * @param {*} config 
 * @returns 
 */
export default function domWatch(tagNode, cb, config = {}) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    config = { attributes: true, childList: true, subtree: true,once:true ,...config}
    const observer = new MutationObserver(function(){
        cb(...arguments)
        config.once && observer.disconnect()
    })
    tagNode = typeof tagNode === 'string'? document.querySelector(tagNode):tagNode
    observer.observe(tagNode,config )
    return observer
}
