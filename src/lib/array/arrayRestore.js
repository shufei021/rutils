/*
 * @Description: 数组状态还原
 * @Author: shufei
 * @Date: 2021-08-26 19:22:41
 * @LastEditTime: 2021-09-19 23:35:41
 * @LastEditors: Please set LastEditors
 */
import deepClone from "../object/deepClone"
/**
 * @description: 数组状态还原
 * @param { Array } list: 有两值交换后的数组
 * @param { Number } oldIndex: 交换项索引
 * @param { Number } newIndex：被交换项索引
 * @param { Boolean } isDeep：是否给改变原数组
 */
const arrayRestore = function (list, oldIndex, newIndex,isDeep=false) {
    if(!isDeep)list = deepClone(list)
    list.splice(oldIndex, 0, list.splice(newIndex, 1)[0])
    return list
}
export default arrayRestore