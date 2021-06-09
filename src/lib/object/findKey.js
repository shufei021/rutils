/*
 * @Author: your name
 * @Date: 2021-06-06 13:25:12
 * @LastEditTime: 2021-06-06 14:22:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rutils\src\lib\object\findKey.js
 */
import isEquals from '../base/isEquals'
const findKey = function (o, v) {
    for (let k in o) {
        if ((typeof v === 'function' && v(o[k])) || (Array.isArray(v) && o[k][v[0]] === v[1]) || (typeof v === 'string' && v in o[k]) || isEquals(o[k], v)) {
            return k
        }
    }
}
export default findKey
