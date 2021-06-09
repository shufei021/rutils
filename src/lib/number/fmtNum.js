import isNum from './isNum'
/**
 * 数字格式化
 * @param { String | Number } val : 有效数数字
 * @param { Boolean } isThousands : 整数部分是否进行千分位,默认值 false
 * @param { Number } digit : 小数部分四舍五入保留到的位数
 */
const fmtNum = function (val, isThousands = false, len) {
    // 无效值处理，，不符合传入规则的值一律返回空字符串
    if (val === undefined || val == null) return ''
    // 无论数字还是字符串数字，最终都转换成字符串数字
    let str = val + ''
    // 进行检测str是否是有效的数字,不是有效直接返回空字符串
    if (!isNum(str)) return ''
    // 是否是整数
    let isInt = !str.includes('.')
    len = len === undefined ? (isInt ? 0 : str.split('.')[1].length) : len
    // 整数部分
    let int = len == 0 ? Math.round(str) + '' : isInt ? str.split('.')[0] : (round(str * 1 + '', len) + '').split('.')[0]
    // str 四舍五入到指定位数
    str = round(str * 1 + '', len) + ''
    // 小数部分
    let dot = len == 0 || isInt ? '' : str.split('.')[1]
    dot = (dot ? dot : '').padEnd(len, 0)
    let ret = (isThousands ? int.replace(/(?=(?!\b)(\d{3})+$)/g, ',') : int) + (dot.length ? '.' + dot : '')
    return ret
}
export default fmtNum

/**
 * 示例：
 *
 * fmtNum() // ""
 * fmtNum(11111111111.333555) // "11111111111.333555"
 * fmtNum(11111111111.333555,false,3) // "11111111111.334"
 * fmtNum(11111111111.333555,true) // "11,111,111,111.333555"
 * fmtNum(11111111111.333555,true,3) // "11,111,111,111.334"
 *
 *
 *
 */
