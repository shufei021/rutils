/*
 * @Description: 查询满足条件的所有索引 - findIndexs
 * @Author: shufei
 * @Date: 2021-09-08 18:57:03
 * @LastEditTime: 2021-09-08 18:59:33
 * @LastEditors: shufei
 */
const findIndexs = function (arr, cb) {
    const ret = []
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            ret.push(i)
        }
    }
    return ret
}

export default findIndexs
/**

const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]

findIndexs(list, i => [2, 4, 7].includes(i.id)) // [1, 3, 6]


*/