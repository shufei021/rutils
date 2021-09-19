/*
 * @Description: lastFind 反向查找
 * @Author: shufei
 * @Date: 2021-09-08 18:55:37
 * @LastEditTime: 2021-09-08 18:55:38
 * @LastEditors: shufei
 */
const lastFind = function (arr, cb) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (cb(arr[i])) return arr[i]
    }
}
export default lastFind

/* 
const list = [
    { type: 1, subType: 11 },
    { type: 2, subType: 22 },
    { type: 3, subType: 33 },
    { type: 4, subType: 44 },
    { type: 5, subType: 55 },
    { type: 3, subType: 34 },
    { type: 7, subType: 77 }
]
list.find(i => i.type == 3) //{type: 3, subType: 33}
lastFind(list, i => i.type == 3) //{type: 3, subType: 34}
lastFind(list, i => i.type == 33) //undefined
*/