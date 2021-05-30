/**
 * @description: 判断传入的值是否是函数类型
 * @param  {*} value ：传入的值
 * @return {Boolean} false 或 true
 */
const isFunction = function (value) {
    return typeof value === 'function'
}
export default isFunction
