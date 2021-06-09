/**
 * @description: 缓冲动画：left => 从左向右作缓冲动画运动 top => 从上向下作缓冲动画运动 负值可以达到4个方向的缓冲动画
 * @param {Element} el: 作用的dom
 * @param {Number} target : 坐标目的地
 * @param {String} direction : 方向
 */
const bufferAnimation = function (el, target, direction = 'left') {
    el = typeof el === 'string' ? document.querySelector(el) : el
    if (!el) return
    let offset = direction === 'left' ? 'offsetLeft' : 'offsetTop'
    //清除历史定时器
    clearInterval(el.timer)
    //开启定时器
    el.timer = setInterval(function () {
        //获取步长 确定移动方向(正负值) 步长应该是越来越小的，缓动的算法。
        let step = Math.ceil((target - el[offset]) / 10)
        //到达目标位置
        if (el[offset] == target) {
            //清除定时器
            clearInterval(el.timer)
        } else {
            el.style[direction === 'left' ? 'left' : 'top'] = el[offset] + step + 'px'
        }
    }, 30)
}
export default bufferAnimation
