/**
 * 动态添加 js文件
 * @param {Array} scriptUrlArr : 需求动态添加的脚本URL数组
 * @param {Function} callback : 回调函数
 */
const dynamicAddScript = function (scriptUrlArr) {
    return new Promise(resolve => {
        scriptUrlArr.forEach(scriptUrl => {
            let script = document.createElement('script')
            script.setAttribute('src', scriptUrl)
            document.body.appendChild(script)
        })
        window.onload = () => resolve()
    })
}
export default dynamicAddScript
