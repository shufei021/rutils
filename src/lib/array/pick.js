/**
 * @description: json数组项属性筛选
 * @param {*} arr 
 * @param {*} keys
 */
const pick = function pick(arr, keys) {
    return arr.reduce((p, c) => [...p, keys.reduce((p1, c1) => ({ ...p1, [c1]: c[c1] }), {})], [])
}
export default pick

/**
 * 
 * 示例：
 * 
 * 
let arr = [
    {uuid: "32317268-a82f-384c-33a1-20b48c69fa07", name: "张三", time: "2021-06-28 15:07:18", age: 20}
    {uuid: "514c416f-379b-fc13-853c-291026504bb9", name: "李四", time: "2021-06-29 15:07:18", age: 21}
    {uuid: "e2b03c8b-654a-3c48-c853-19aeccf4d00e", name: "小红", time: "2021-06-30 15:07:18", age: 22}
    {uuid: "d1135ef4-f11e-d9ee-39b2-82119174fd5c", name: "李明", time: "2021-07-01 15:07:18", age: 23}
]

rutils.pick(arr,['uuid','name'])


[
    {uuid: "32317268-a82f-384c-33a1-20b48c69fa07", name: "张三"}
    {uuid: "514c416f-379b-fc13-853c-291026504bb9", name: "李四"}
    {uuid: "e2b03c8b-654a-3c48-c853-19aeccf4d00e", name: "小红"}
    {uuid: "d1135ef4-f11e-d9ee-39b2-82119174fd5c", name: "李明"}
]

 * 
 * 
 * 
 * 
 * 
 * 
 */