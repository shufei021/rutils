/*
 * @Description: 删除数组多项值 - delByIndexs
 * @Author: shufei
 * @Date: 2021-09-08 19:01:10
 * @LastEditTime: 2021-09-08 19:03:03
 * @LastEditors: shufei
 */
const delByIndexs = function (arr, delIndexs,isDeep = true) {
    // 是否克隆，有时候你不想影响原数组，就需要克隆
    if(isDeep) arr = JSON.Parse(JSON.stringify(arr))
    // 先排序成降序,从后往前删除
    delIndexs = delIndexs.sort((a, b) => b - a)
    for (let i = 0; i < delIndexs.length; i++) {
        arr.splice(delIndexs[i], 1)
    }
    return arr
}
export default delByIndexs

/**

const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]

// findIndexs 在上面已经实现，查询满足条件的所有所有值
const delIndexs = findIndexs(list, i => [2, 4, 7].includes(i.id)) // [1, 3, 6]

delByIndexs(list, delIndexs) // [{ id: 1 }, { id: 3 },  { id: 5 }, { id: 6 }]


*/