/**
 * @description: 求数组差集
 * @param  {Array} a ：传入的数组a
 * @param  {Array} b ：传入的数组b
 * @return {Array} 两数组的差集
 * 
 * 
 * 
 * 
let a = [1, 2, 3, 4, 5]
let b = [1, 2, 4, 5, 6]
​
except(a, b) // [3,6]
​
let a1 = [
    { id: 1, name: '张三', age: 20 },
    { id: 2, name: '李四', age: 21 },
    { id: 3, name: '小二', age: 23 }
]
let b1 = [
    { id: 2, name: '李四', age: 21 },
    { id: 4, name: '小明', age: 24 },
    { id: 5, name: '小红', age: 25 }
]
​
except(a1, b1, 'id')

[
  {id: 1, name: "张三", age: 20}
  {id: 3, name: "小二", age: 23}
  {id: 4, name: "小明", age: 24}
  {id: 5, name: "小红", age: 25}
]

 * 
 * 
 * 
 */
const except = function (a, b, k) {
    return [...a, ...b].filter(i => ![a, b].every(t => (k ? t.map(i => i[k]).includes(i[k]) : t.includes(i))))
}
export default except
