/**
 * @description: 绑定事件
 * @param :
 * @return {*}
 */
const bindEvent = function (obj, ev, fn) {
    obj.addEventListener ? obj.addEventListener(ev, fn, false) : obj.attachEvent('on' + ev, fn)
}
export default bindEvent
