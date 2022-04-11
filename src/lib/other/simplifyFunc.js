 /** @description: 简化函数 对象key为对象字符串
 * @param { Object } o: 对象 map
 * @param { Object } c ：条件对象
 * @param { String | Function } d ：没有匹配到 给的默认值 或是 执行的默认函数
 */
export default function simplifyFunc(o, c, d) {
  // 获取o对象所有keys
  const keys = Object.keys(o)
  // 如果对象没有属性，抛错
  if (!keys.length) throw Error('不接受空对象')
  // 查询 条件c对象在 keys数组中的索引
  const index = keys.findIndex((i) => JSON.stringify(JSON.parse(i)) === JSON.stringify(c))
  // 获取 条件对应的 值
  const val = o[keys[index]]
  // 如果值是字符串，直接返回
  if (typeof val === 'string') return val
  // 如果值是函数，直接返回执行的结果
  if (typeof val === 'function') return val()
  // 如果值不存在，默认值d是字符串，直接返回默认值d
  if (!val && typeof d === 'string') return d
  // 如果值不存在，默认值d是函数，直接返回默认函数的执行结果
  if (!val && typeof d === 'function') return d()
}
/*

 const type2 = {
    '{"a":1,"b":1,"c":1}':()=>{
         console.log("a1b1c1")
     },
     [JSON.stringify({
         a:1,b:1,c:2
     })]:()=>{
         console.log("a1b1c2")
     }
 }

superSimplify(type2,{a:1 ,b:1,c:11},'8888')

*/