/**
 * @description  字符串超大数相加
 * @param {String} a 
 * @param {String} b 
 * @returns String
 */

 const sumBigNumber = function(a, b) {
    let res = '', //结果
        temp = 0; //按位加的结果及进位
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || temp) {
        //~~按位非 1.类型转换，转换成数字 2.~~undefined==0 
        temp += ~~a.pop() + ~~b.pop()
        res = (temp % 10) + res
        temp = temp > 9
    }
    return res.replace(/^0+/, '')
}
export default sumBigNumber