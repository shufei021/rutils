/**
 * @description: 获取数据类型
 * @param {*} value : 传入的值
 */
const getType = function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}
export default getType
