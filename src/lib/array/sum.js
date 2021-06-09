/**
 * @description: 求和
 * @param  {Array} a ：传入的数组
 * @return {Number} 和
 */
const sum = function (a, k) {
    return a.reduce((p, c) => p + (k ? c[k] || 0 : c), 0)
}
export default sum

/***
 * 
 * 
 * 
let a = [1, 2, 3, 4, 5]

sum(a) // 15
​
let a1 = [
    { id: 1, name: '张三', age: 20 },
    { id: 2, name: '李四', age: 21 },
    { id: 3, name: '小二', age: 23 }
]

sum(a1, 'age') //64 
 * 
 * 
 * 
 * 
 * 
 * 
 */
