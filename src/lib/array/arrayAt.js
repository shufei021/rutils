/*
 * @Description: 数组值访问 - arrayAt
 * @Author: shufei
 * @Date: 2021-09-08 19:42:26
 * @LastEditTime: 2021-09-08 19:44:21
 * @LastEditors: shufei
 */
/**
 * @description: 根据索引访问数组项
 * @param { Array } arr：数组
 * @param { Number } index：索引，默认 0
 */
const arrayAt = function (arr, index = 0) {
    return index < 0 ? arr[arr.length + index] : arr[index]
}
export default arrayAt

/*

[1,2,3,4].at() // 1
[1,2,3,4].at(1) // 2
[1,2,3,4].at(2) // 3
[1,2,3,4].at(3) // 4
[1,2,3,4].at(4) // undefined

[1,2,3,4].at(-1) // 4
[1,2,3,4].at(-2) // 3
[1,2,3,4].at(-3) // 2
[1,2,3,4].at(-4) // 1
[1,2,3,4].at(-5) // undefined

arrayAt([1,2,3,4]) // 1
arrayAt([1,2,3,4],1) // 2
arrayAt([1,2,3,4],2) // 3
arrayAt([1,2,3,4],3) // 4
arrayAt([1,2,3,4],4) // undefined

arrayAt([1,2,3,4],-1) // 4
arrayAt([1,2,3,4],-2) // 3
arrayAt([1,2,3,4],-3) // 2
arrayAt([1,2,3,4],-4) // 1
arrayAt([1,2,3,4],-5) // undefined


*/
