/**
 * @description 对象组装
 * @param {Object} o 对象
 * @param {Object | Array} filter 
 * @returns 
 */
export default function objectRebuild(o,filter){
    if(!filter)return o
    if(Array.isArray(filter)){// 数组 string[] keys[]
        return filter.reduce((p,c)=>(p[c] = o[c],p),{})
    }else{// 对象 object keys{}
        return Object.keys(o).reduce((p,c)=>{
            if(filter[c]) p[filter[c]] = o[c]
            return p
        },{})
    }
}

/**
 * 
 *  示例：
 * 
 * 
 *      const obj = {a: 1, b: 2}

        const keysObj = {
            'a':'A1',
        }

    

        function objectRebuild(o,filter){
            if(!filter)return o
            if(Array.isArray(filter)){// 数组 string[] keys[]
                return filter.reduce((p,c)=>(p[c] = o[c],p),{})
            }else{// 对象 object keys{}
                return Object.keys(o).reduce((p,c)=>{
                    if(filter[c]) p[filter[c]] = o[c]
                    return p
                },{})
            }
        }
        console.log(objFmt(obj,keysObj))
        console.log(objFmt(obj,['a','b1']))
 * 
 * 
 */