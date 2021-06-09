/**
 * @description: 解绑事件
 * @param :
 * @return {*}
 */
const unbindEvent = function (obj, ev, fn) {
    obj.removeEventListener ? obj.removeEventListener(ev, fn, false) : obj.detachEvent('on' + ev, fn)
}
export default unbindEvent
