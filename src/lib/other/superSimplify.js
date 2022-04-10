/*
 * @Author: your name
 * @Date: 2022-04-09 17:44:44
 * @LastEditTime: 2022-04-09 17:44:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \rutils\src\lib\other\superSimplify.js
 */

 /**
  * @description: 多重条件简化函数
  * @param {Object} o：按规则传入的对象
  * @param {Object} c：条件对象
  * @param {String| Function} d：没有匹配到的备用值或是函数
  */
 const superSimplify = function(o,c,d){
     const keys = Object.keys(o)
     if(!keys.length) throw Error('不接受空对象')
     const index = keys.findIndex(i=>JSON.stringify(JSON.parse(i)) === JSON.stringify(c))
     const val = o[keys[index]]
     if(typeof val === 'string')return val
     if(typeof val === 'function')return val()
     if(!val && typeof d === 'string')return d
     if(!val && typeof d === 'function')return d()
 }
 
 export default superSimplify



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