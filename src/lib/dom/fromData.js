/**
 *  JSON 转 fromData
 *  @param { Object } o 需要转成formData 的对象
 */
export default function fromData (o) {
    return Object.keys(o).reduce((p, c) => !p.append(c, o[c]) && p, new FormData())
}
