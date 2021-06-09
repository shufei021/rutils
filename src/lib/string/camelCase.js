/**
 * @description: 转换字符串string为驼峰写法。
 * @param {String} str [string=''] (string): 要转换的字符串。
 * @return {String} (string): 返回驼峰写法的字符串。
 */
const camelCase = function (str) {
    return str.match(/[a-zA-Z]+/g).reduce((p, c) => {
        c = c.toLowerCase()
        p += c.replace(c[0], c[0].toUpperCase())
        return p
    }, '')
}
export default camelCase
