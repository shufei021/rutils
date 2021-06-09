/**
 * @description: (bytes)字节数自动转换
 * @param {Number} bytes: 字节数
 */
const bytesFormat = function (bytes) {
    if (bytes === 0) return '0 B'
    if (!bytes) return ''
    let k = 1024
    let sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    let i = Math.floor(Math.log(bytes) / Math.log(k))
    let num = bytes / Math.pow(k, i)
    return num.toFixed(2) + ' ' + sizes[i]
}
export default bytesFormat
