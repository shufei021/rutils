import getType from './getType'
/**
 * @description: 判断传入的值是否是日期类型
 * @param  {*} value ：传入的值
 * @return {Boolean} false 或 true
 */
const isDate = function (value) {
    return getType(value) === 'date'
}
export default isDate
