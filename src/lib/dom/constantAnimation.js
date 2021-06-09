/**
 * @description: 均速动画
 * @param {Element} el: 作用的dom
 * @param {Number} target : 坐标目的地
 * @param {String} direction : 方向
 */
const constantAnimation = function (el, target, direction = 'left') {
    el = typeof el === 'string' ? document.querySelector(el) : el
    if (!el) return
    let offset = direction === 'left' ? 'offsetLeft' : 'offsetTop'
    //清除历史定时器
    clearInterval(el.timer)
    //匀速度值
    let speed = target > el[offset] ? 5 : -5
    //开启定时器
    el.timer = setInterval(function () {
        //到达目标位置
        if (el[offset] == target) {
            //清除定时器
            clearInterval(el.timer)
        } else {
            el.style[direction] = el[offset] + speed + 'px'
        }
    }, 30)
}
export default constantAnimation
