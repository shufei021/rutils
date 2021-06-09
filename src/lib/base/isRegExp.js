import getType from './getType'

// 是否正则类型
const isRegExp = function (o) {
    return getType(o) === 'regexp'
}
export default isRegExp
