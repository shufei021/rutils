/*
 * @Description: 数组截取 - arraySubstr
 * @Author: shufei
 * @Date: 2021-09-08 19:04:50
 * @LastEditTime: 2021-09-08 19:04:50
 * @LastEditors: shufei
 */
/**
 * @description: 让数组拥有和字符串的substr 一样的功能
 * @param { Array } arr：数组
 * @param { Number } startIndex：开始截取的索引值
 * @param { Number} len：截取的长度
 */
const arraySubstr = function (arr, startIndex, len) {
    return arr.slice(startIndex, startIndex + len)
}
export default arraySubstr

/**

let arr = [1, 2, 3, 4, 5]

arraySubstr(arr, 0, 1) // [1]
arraySubstr(arr, 0, 2) // [1,2]
arraySubstr(arr, 0, 3) // [1,2,3]
arraySubstr(arr, 1, 3) // [2,3,4]

'12345'.substr(0,1) // '1'
'12345'.substr(0,2) // '12'
'12345'.substr(0,3) // '123'
'12345'.substr(1,3) // '234'


*/