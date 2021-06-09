/*
 * @Author: your name
 * @Date: 2021-06-06 15:43:56
 * @LastEditTime: 2021-06-06 15:44:29
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \rutils\src\lib\url\urlTmtFmt.js
 */
/**
 * url模板 参数格式化(get请求url模板)
 *
 *  @param {String}  URL: 模板路径，例：'/uap/msg/announcementRecord/{sysId}/{tenantId}/{userId}' 或 '/uap/msg/announcementRecord'
 *  @param {Object}  params: 传入的参数，包含路径参数 或 不包含
 *  @param {Boolean} flag：是否拼接路径和查询参数
 */
const urlTmtFmt = function (urlTmp, params = {}) {
    let url = /\{(\w+)\}/g.test(urlTmp)
        ? urlTmp.replace(/\{(\w+)\}/g, (_, b) => {
              let tmp = params[b]
              delete params[b]
              return tmp
          })
        : urlTmp
    return Object.keys(params).length ? Object.keys(params).reduce((pre, cur) => (pre += (pre === url ? '?' : '&') + `${cur}=${params[cur]}`), url) : url
}

export default urlTmtFmt
/**
 *
 * urlTmtFmt('/uap/msg/announcementRecord/{sysId}/{tenantId}/{userId}', { sysId: 111, tenantId: 222, userId: 333 })
 * // /uap/msg/announcementRecord/111/222/333
 * urlTmtFmt('/uap/msg/announcementRecord/{sysId}/{tenantId}/{userId}', { sysId: 111, tenantId: 222, userId: 333,age:10 })
 * // /uap/msg/announcementRecord/111/222/333?age=10
 *
 *
 *
 *
 */
