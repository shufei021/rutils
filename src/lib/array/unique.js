import isEquals from '../base/isEquals'
/**
 * @description: 数组去重
 * @param {Array} a：需要去重的数组
 * @param {String} k：键名
 */
const unique = function (a, k) {
    let ret = []
    if (k) {
        ret = a.reduce((p, c) => (p.map(i => i[k]).includes(c[k]) ? p : [...p, c]), [])
    } else {
        for (let i = 0, len = a.length; i < len; i++) {
            if (i == 0) {
                ret.push(a[i])
            } else {
                if (!ret.some(k => isEquals(k, a[i]))) {
                    ret.push(a[i])
                }
            }
        }
    }
    return ret
}
export default unique

/**
 * 示例：
 * 
let a = [1, 2, 3, 4, 5, 1, 2, 3]

unique(a) // [1,2,3,4,5]

let a1 = [
    { id: 1, name: '张三', age: 20 },
    { id: 2, name: '李四', age: 21 },
    { id: 3, name: '小红', age: 23 },
    { id: 2, name: '李四', age: 21 }
]

unique(a1)
//
[
{id: 1, name: "张三", age: 20},
{id: 2, name: '李四', age: 21 },
{id: 3, name: "小红", age: 23}
]
 

 * 
 * 
 */
