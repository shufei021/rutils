/**
 * @description: 根据条件删除数组中的值
 * @param {Array} arr：被操作的数组
 * @param {any} o：条件
 * @param {Boolean} isChangeOldArr：是否改变原数组
 * @return {Array} 返回处理后的数组
 */
const delBy = function (arr, o, isChangeOldArr = false) {
    let a = isChangeOldArr ? arr : JSON.parse(JSON.stringify(arr))
    for (let i = a.length - 1; i >= 0; i--) {
        if (typeof o === 'function') {
            o(a[i]) && a.splice(i, 1)
        } else if (Array.isArray(o)) {
            o.indexOf(a[i]) > -1 && a.splice(i, 1)
        } else if (a[i] === o) {
            a.splice(i, 1)
        } else if (Object.prototype.toString.call(o).slice(8, -1) === 'Object') {
            let item = a[i]
            for (let k in o) {
                Array.isArray(o[k]) ? o[k].indexOf(item[k]) > -1 && a.splice(i, 1) : o[k] === item[k] && a.splice(i, 1)
            }
        }
    }
    return a
}
export default delBy

/**
 * 用法1：
 * let a1 = [1, 2, 3, 4, 5, 6]
 * delBy(a1, 2)// [1, 3, 4, 5, 6]
 * a1 // [1, 2, 3, 4, 5, 6]
 * let a1 = [1, 2, 3, 4, 5, 6]
 * delBy(a1, 2, true)// [1, 3, 4, 5, 6]
 * a1 // [1, 3, 4, 5, 6]
 *
 *
 *
 */

/**
 * 用法2：
 * let a1 = [
 *   { id: 1, name: '罗老板', age: 18 },
 *   { id: 2, name: '帆老板', age: 19 },
 *   { id: 3, name: '全老板', age: 20 },
 *    { id: 2, name: '帆老板', age: 19 }
 * ]
 * // 删除 a1 数组中 id 为 2的值
 * delBy(a1, item => item.id === 2) //  等价于 handday.arr.delBy(a1, { id: 2 })
 * console.log(a1)
 * //
 * [
 *     { id: 1, name: '罗老板', age: 18 },
 *    { id: 3, name: '全老板', age: 20 },
 * ]
 *
 *
 *
 *
 *
 */

/**
 * 用法3：
 *
 *
 * let a1 = [
 *    { id: 1, name: '罗老板', age: 18 },
 *     { id: 2, name: '帆老板', age: 19 },
 *     { id: 3, name: '全老板', age: 20 },
 *     { id: 2, name: '帆老板', age: 19 }
 * ]
 * // 删除 只要 id 是 1 或 2的值
 * delBy(a1, { id: [1, 2] })
 * console.log(a1)
 * //
 * [
 *     { id: 3, name: '全老板', age: 20 },
 * ]
 *
 *
 *
 */

/**
 * 用法4：
 *
 *
 * let a1 = [
 *     { id: 1, name: '罗老板', age: 18 },
 *     { id: 2, name: '帆老板', age: 19 },
 *     { id: 3, name: '全老板', age: 20 },
 *     { id: 2, name: '帆老板', age: 19 }
 * ]
 * // 删除 a1 数组中 id值为 2，或 name值为 全老板  PS：注意是或的关系
 * delBy(a1, { id: 2, name: '全老板' })
 * console.log(a1)
 *
 *
 *
 *
 */

/**
 * 用法5：
 *
 *
 * let a1 = [
 *     { id: 1, name: '罗老板', age: 18 },
 *     { id: 2, name: '帆老板', age: 19 },
 *     { id: 3, name: '全老板', age: 20 },
 *     { id: 2, name: '帆老板', age: 19 },
 *     { id: 4, name: '卫老板', age: 22 },
 *     { id: 5, name: '卓老板', age: 21 },
 *     { id: 6, name: '黄老板', age: 23 }
 * ]
 * // 只要 id值为 2 ，name值 是 全老板 或 卫老板，age值是23 ，对应的值都从数组中删除掉
 * delBy(a1, { id: 2, name: ['全老板', '卫老板'], age: 23 })
 * console.log(a1)
 * //
 * [
 * {id: 1, name: "罗老板", age: 18}
 * {id: 5, name: "卓老板", age: 21}
 * ]
 *
 *
 *
 */

/***
 * 用法6：
 *
 * let a1 = [1, 2, 3, 4, 5, 2]
 * // 删除 给出的数组范围的值
 * delBy(a1, [2, 3, 4])
 * console.log(a1) //[1,5]
 *
 *
 *
 */
