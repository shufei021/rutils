/**
 * 获取数据
 * @param {Object|Array} source 资源
 * @param {Array|String} path 路径  例：user.job.name 或 [‘user’, 'job', 'name']
 * @param {*} defaultValue 默认值
 * @param {Boolean} isDeep 是否为深度
 * @return {*}
 */
const get = (source, path, defaultValue, isDeep) => {
  try {
    if (!source) return defaultValue
    if (!path || (Array.isArray(path) && path.length === 0)) return defaultValue || source
    var paths = Array.isArray(path) ? path : path.replace(/\[(\d+)\]/g, '.$1').split('.')
    var res = isDeep ? JSON.parse(JSON.stringify(source)) : source
    var toNumber = function (d) {
      return isNaN(Number(d)) ? d : Number(d)
    }
    for (var i = 0, len = paths.length; i < len; i++) {
      var key = toNumber(paths[i])
      res = res[key] // 记录当前的
      if ([undefined].indexOf(res) > -1) {
        return defaultValue
      }
    }
    return res
  } catch (e) {
    return defaultValue
  }
}

export default get
