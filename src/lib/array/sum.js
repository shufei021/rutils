/**
 * @description: 求和
 * @param  {Array} a ：传入的数组
 * @return {Number} 和
 */
const sum = function (a, k) {
    let isFun = typeof k === 'function'
    return a.reduce((p, c) =>{
        return p + (isFun?k(c):  (k ? c[k] || 0 : c))
    }, 0)
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
 
const sum = function (a, k) {
    let isFun = typeof k === 'function'
    return a.reduce((p, c) =>{
        return p + (isFun?k(c):  (k ? c[k] || 0 : c))
    }, 0)
}
let a1 = [
    { id: 1, name: '张三', age: 20,num:11,n:1 },
    { id: 2, name: '李四', age: 21,num:22,n:2 },
    { id: 3, name: '小二', age: 23,num:33,n:3}
]
console.log(sum(a1, 'num'))
console.log(sum(a1, (item)=>item.age+item.num-item.n))
 */
