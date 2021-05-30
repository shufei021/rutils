/**
 * @description: 求数组交集
 * @param  {Array} a ：传入的数组a
 * @param  {Array} b ：传入的数组b
 * @return {Array} 两数组的交集
 * 
 * 
 * 
 * 
// 场景1：
let a = [1, 2, 3, 4, 5]
let b = [1, 2, 4, 5, 6]

intersection(a, b) // [1,2,4,5]

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

intersection(a1, b1, 'id') //[ { id: 2, name: '李四', age: 21 }]
 * 
 * 
 * 
 */
const intersection = function (a, b, k) {
    return a.filter(t => (k ? b.map(i => i[k]).includes(t[k]) : b.includes(t)))
}
export default intersection
