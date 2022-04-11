/**
 * @description 复制文本内容
 * @param {String} text 
 */
export default function copyText(text) {
    const input = document.createElement('input')
    input.value = text // 修改文本框的内容
    document.body.appendChild(input)
    input.select() // 选中文本
    document.execCommand('copy') // 执行浏览器复制命令
    document.body.removeChild(input)
}