/**
 *  JSON 转 fromData
 *  @param { Object } o 需要转成formData 的对象
 */
const fromData = function (o) {
    let ret = Object.keys(o).reduce((p, c) => !p.append(c, o[c]) && p, new FormData())
    ret.check = () => o
    return ret
}
export default fromData
