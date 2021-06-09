/**
 * @description: 对一维 json 数组进行归档（根据 key）
 * @param {Array} arr:一维数组
 * @param {String} key：key 字符串
 */
const archive = function (arr, key) {
    return Array.from(new Set(arr.map(i => i[key]))).reduce((p, c) => (p.push(arr.filter(i => i[key] === c)), p), [])
}
export default archive

/***
 *
 * 示例：
 *
 * let books = [ {date:'1月',name:'地理书'}, {date:'1月',name:'历史书'}, {date:'2月',name:'化学书'} ]
 *
 * archive( books, 'date') // [[{date:'1月',name:'地理书'},{date:'1月',name:'历史书'}],[ {date:'2月',name:'化学书'}]]
 *
 *
 */
