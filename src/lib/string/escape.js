/*
 * @Author: your name
 * @Date: 2021-06-06 14:57:02
 * @LastEditTime: 2021-06-06 15:01:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rutils\src\lib\string\escape.js
 */

const htmlEscapes = {
    '&': '&amp',
    '<': '&lt',
    '>': '&gt',
    '"': '&quot',
    "'": '&#39'
}
const reUnescapedHtml = /[&<>"']/g
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source)
const escape = function (string) {
    return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, chr => htmlEscapes[chr]) : string
}

export default escape
