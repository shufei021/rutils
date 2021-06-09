/**
 * url参数序列化
 * @param { String } baseURL ：url地址
 * @param { Object } params  ：参数对象
 * @return 参数序列化后的字符串
 */
const urlSerialize = function (baseURL, params = {}) {
    return Object.keys(params).reduce((p, c) => (p += (p === baseURL ? '?' : '&') + `${c}=${encodeURIComponent(params[c])}`), baseURL)
}
export default urlSerialize

/**
 *
 *
 * urlSerialize('https://juejin.cn/search',{query:'javascript'}) // "https://juejin.cn/search?query=javascript"
 *
 */
