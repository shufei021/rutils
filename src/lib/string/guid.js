const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
/**
 * @description: 生成GUID的方法
 * @return {string}:guid
 */
const guid = function () {
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
}
export default guid

/**
 Another realization  
const guid = () =>
            [2, 1, 1, 1, 3].reduce(
                (p, c, i, a) => (p += Array.from({ length: c }, (_, i) => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)).join('') + (i !== a.length - 1 ? '-' : '')),
                ''
            )
*/
