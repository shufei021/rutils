/*
 * @Description: 字符串值访问 - arrayAt
 * @Author: shufei
 * @Date: 2021-09-08 19:44:42
 * @LastEditTime: 2021-09-08 19:45:42
 * @LastEditors: shufei
 */
/**
 * @description: 根据索引访问字符串某个索引值
 * @param { String } str
 * @param { Number } index：索引，默认 0
 */
const stringAt = function (str, index = 0) {
    return index < 0 ? str[str.length + index] : str[index]
}
export default stringAt