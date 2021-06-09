/*
 * @Description: 重写javascript原生方法,兼容
 * @Author: 格格梳
 * @Date: 2021-05-10 16:31:17
 * @LastEditTime: 2021-06-06 11:38:42
 */
// 兼容 padStart方法
if (!String.prototype.padStart) {
    /* eslint-disable */
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0
        padString = String(typeof padString !== 'undefined' ? padString : ' ')
        if (this.length > targetLength) {
            return String(this)
        } else {
            targetLength = targetLength - this.length
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length)
            }
            return padString.slice(0, targetLength) + String(this)
        }
    }
    /* eslint-disable */
}

if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength, padString) {
        targetLength = targetLength >> 0
        padString = String(typeof padString !== 'undefined' ? padString : '')
        if (this.length > targetLength) {
            return String(this)
        } else {
            targetLength = targetLength - this.length
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length)
            }
            return String(this) + padString.slice(0, targetLength)
        }
    }
}
