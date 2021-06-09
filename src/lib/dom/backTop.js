/**
 * 回到顶部
 * 回到顶部元素的Id
 * @param {String} btnId
 */
const backTop = function (btnId, offset = 100) {
    let btn = document.getElementById(btnId)
    let d = document.documentElement
    let b = document.body
    window.onscroll = set
    btn.style.display = 'none'
    btn.onclick = function () {
        btn.style.display = 'none'
        window.onscroll = null
        this.timer = setInterval(function () {
            d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1)
            b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1)
            if (d.scrollTop + b.scrollTop == 0) clearInterval(btn.timer, (window.onscroll = set))
        }, 10)
    }
    function set() {
        btn.style.display = d.scrollTop + b.scrollTop > offset ? 'block' : 'none'
    }
}
export default backTop
