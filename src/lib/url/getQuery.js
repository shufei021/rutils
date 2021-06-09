/**
 * 获取url查询参数
 * @param {String} url ：url地址
 */
const getQuery = function (url = window.location.href) {
    try {
        return url.includes('?')
            ? url
                  .split('?')[1]
                  .match(/([^&=]*)=([^&]*)/g)
                  .reduce((p, c) => ((p[c.split('=')[0]] = decodeURIComponent(c.split('=')[1])), p), {})
            : {}
    } catch (e) {
        return {}
    }
}
export default getQuery

/***
 *
 * getQuery() //
 * getQuery('https://juejin.cn/search?query=%E8%B6%85%E8%84%B1%E8%87%AA%E7%84%B6') // {query: "超脱自然"}
 *
 *
 *
 */
