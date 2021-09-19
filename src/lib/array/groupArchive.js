/*
 * @Description: 条件分组 - groupArchive
 * @Author: shufei
 * @Date: 2021-09-08 19:49:27
 * @LastEditTime: 2021-09-08 19:49:28
 * @LastEditors: shufei
 */
/**
 * @description:归档， 对一维 json 数组进行归档（根据 key）
 * @param {Array} arr:一维数组
 * @param {String} key：key 字符串
 */
const groupArchive = function (arr, key) {
    return [...new Set(arr.map(i => i[key]))].reduce((p, c) => [...p, arr.filter(i => i[key] === c)], [])
}
export default groupArchive
 /*  
  let books = [
      { date: '2月', name: '化学书' },
      { date: '1月', name: '历史书' },
      { date: '2月', name: '数学书' },
      { date: '3月', name: '语文书' },
      { date: '1月', name: '地理书' }
  ]
  groupArchive(books, 'date')
 
  [
      [
          {date: "2月", name: "化学书"}
          {date: "2月", name: "数学书"}
      ],
       [
          {date: "1月", name: "历史书"}
          {date: "1月", name: "地理书"}
      ],
       [
          {date: "3月", name: "语文书"}
      ],
  ]        
  */
