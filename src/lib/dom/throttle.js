/**
 * @description:节流
 * @param { Function } func : 节流的事件响应函数
 * @param { Number } wait ：事件响应函数执行需求的频率时间
 * @param { Object } options ：配置对象，包含两个值 immediate（是否立即执行）和 trailing（最后是否还执行一次）
 */
// leading ：false trailing：true 第一次不会立即调用 离开了还会执行一次
// leading ：true  trailing：true 第一次会立即调用 离开了还会执行一次
// leading ：true  trailing：false 第一次会立即调用 离开了不会执行一次
// 默认 是 options = { leading:true, trailing:true }
const throttle = function (func, wait, options) {
    let timeout, context, args
    let old = 0 //之前的时间
    if (!options) options = {}
    return function () {
        context = this
        args = arguments
        // 获取当前的时间戳
        let now = new Date().valueOf()
        if (options.leading === false && !old) {
            old = now
        }
        if (now - old > wait) {
            // 第一次会立即执行
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            func.apply(context, args)
            old = now
        } else if (!timeout && options.trailing !== false) {
            // 最后一次也会执行
            timeout = setTimeout(() => {
                old = new Date().valueOf()
                timeout = null
                func.apply(context, args)
            }, wait)
        }
    }
}
export default throttle
