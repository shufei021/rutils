/*
 * @Description: 数组按标识进行分组
 * @Author: shufei
 * @Date: 2021-08-26 20:09:45
 * @LastEditTime: 2021-09-02 19:24:47
 * @LastEditors: shufei
 */

/**
 * @description: 数组按标识进行分组 （分组后顺序不变）
 * @param {Array} list：分组的数组
 * @param {String} typeStr：分组的标识
 * @return {Array}
 */
const arrayGroup = function(list,typeStr){
    const ret = [] 
    let p = 0
    let n = 0
    for(let i=1,len=list.length;i<len;i++){
      const pre = list[i-1]
      const cur = list[i]
      if(pre[typeStr]!==cur[typeStr]){
        n = i
        ret.push(list.slice(p,n))
        p = i
      }
      if(i===len-1)ret.push(list.slice(p))
    }
    return ret
}
export default arrayGroup

/**
 * 示例：
 * 
 * const list = [ 
    {name:'1',type:0}, 
    
    {name:'2',type:1}, 
    {name:'3',type:1}, 
    {name:'4',type:1}, 

    {name:'5',type:0}, 
    {name:'6',type:0}, 

    {name:'7',type:2}, 
    {name:'8',type:2}, 
    {name:'9',type:2}, 

    {name:'10',type:0},
    {name:'11',type:0}, 
  ]
 * 需求=> 转换成
 *  [ 
    
    [{name:'1',type:0}], 

    [{name:'2',type:1}, {name:'3',type:1}, {name:'4',type:1}], 

    [{name:'5',type:0}, {name:'6',type:0}], 

    [{name:'7',type:2}, {name:'8',type:2}, {name:'9',type:2}], 

    [{name:'10',type:0},{name:'11',type:0}], 
  ]
 * 
 * arrayGroup(list,'type')
 */