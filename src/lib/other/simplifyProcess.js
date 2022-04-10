/*
 * @Author: your name
 * @Date: 2022-04-09 17:44:36
 * @LastEditTime: 2022-04-09 17:44:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \rutils\src\lib\other\simplifyProcess.js
 */
/*
 * @Author: your name
 * @Date: 2021-10-12 14:33:50
 * @LastEditTime: 2021-10-26 18:37:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \util\src\lib\extend\simplify.js
 */
/**
 * @description: 简化流程函数 -  状态映射值
 * @param { Object } o：对象（必填） { '["key2"]': () => {}, '["key4"]': () => {} }
 * @param { Number | String } s：状态值（必填），如 数字、字符串
 * @param { Function } d：默认处理（非必填）
 */
export default function simplifyProcess(o, s, d){
    // 查询是否能找到对应的key
    const k = Object.keys(o).find(k => JSON.parse(k).includes(s))

    // 如果查找到 并且 其对应的值是字符串，那么直接返回该字符串
    if(typeof o[k] ==='string')return o[k]
    // 如果查找到 并且 其对应的值是函数，那么直接执行
    if(typeof o[k] === 'function')return o[k]()

    // 如果没有查找到并且 默认d是字符串，那么就返回默认d值
    if(!o[k] && d && typeof d ==='string')return d
    // 如果没有查找到并且 默认d是函数，那么就直接执行
    if(!o[k] && d && typeof d === 'function') return d()
}
// { '["key2"]': () => {}, '["key4"]': () => {} }