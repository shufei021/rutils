/**
 * @description: 求数组并集
 * @param  {Array} a ：传入的数组a
 * @param  {Array} b ：传入的数组b
 * @return {Array} 两数组的并集
 * 
 * 
 * 
 * 
 * // 场景1：
let a = [1, 2, 3, 4, 5]
let b = [1, 2, 4, 5, 6]

union(a, b) //[1,2,3,4,5,6]

// 场景2：
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

// 通过 id 获取并集

union(a1, b1, 'id')


[
  {id: 1, name: "张三", age: 20}
  {id: 2, name: "李四", age: 21}
  {id: 3, name: "小二", age: 23}
  {id: 4, name: "小明", age: 24}
  {id: 5, name: "小红", age: 25}
]
 * 
 * 
 */

const union = function (a, b, k) {
    return a.concat(b.filter(i => (k ? !a.map(i => i[k]).includes(i[k]) : !a.includes(i))))
}

export default union
