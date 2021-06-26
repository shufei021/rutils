import getType from "./getType";
/**
 * @description: 判断传入的值和类型 是否匹配
 * @param  {*} value ：传入的值
 * @param  {String} type ：传入的类型
 * @return {Boolean} false 或 true
 */
const isType = function (val, type) {
    return getType(val) === type
}
export default isType
