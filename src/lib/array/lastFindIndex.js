/*
 * @Description: lastFindIndex 反向查询索引
 * @Author: shufei
 * @Date: 2021-09-08 18:52:40
 * @LastEditTime: 2021-09-08 18:55:01
 * @LastEditors: shufei
 */
const lastFindIndex = function (arr, cb) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (cb(arr[i])) return i
    }
    return -1
}

export default lastFindIndex

/**

const list = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 3 }, { id: 7 }]

lastFindIndex(list, i => i.id == 3) // 5

lastFindIndex(list, i => i.id == 33) // -1


*/