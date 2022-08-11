
/**
 * @description  字符串超小数相加
 * @param {String} a 
 * @param {String} b 
 * @returns String
 */
export default function sumDecimalNumber(a,b){
    a = a+''
    b= b+''
    const a_int = a.split('.')[0]
    const b_int = b.split('.')[0]
    const a_dot =a.split('.')[1]||'0'
    const b_dot =b.split('.')[1]||'0'
    const len = a_dot.length>b_dot.length?a_dot.length : b_dot.length
    const a_f = a_dot.padEnd(len,0)
    const b_f = b_dot.padEnd(len,0)
    let result = Array(len).fill([]).map((it,i)=>[+a_f[i] + +b_f[i]]).reverse()
    for(let i = 0; i < result.length; i++){
        if(result.length - 1 === i)break
        result[i] = result[i]%10
        if(result[i]>9)result[i+1] = +result[i+1]+1
    }
    const int_f = result[result.length -1]>9?1:0
    const int = +a_int + +b_int+ +int_f
    result[result.length -1] = result[result.length -1]%10
    result = result.reverse()
    const index = result.findLastIndex(i=>i)
    if(~index)result = result.slice(0, index+1)
    return result.filter(Boolean).length?   int +'.'+result.join(''): int
}
