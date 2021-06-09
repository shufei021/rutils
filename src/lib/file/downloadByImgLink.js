/**
 * 根据 url下载图片
 * @param {string} url - 图片url地址
 * @return {Promise<dataURL>} :Base64
 */
const downloadByImgLink = function (url, w, h) {
    return new Promise(resolve => {
        let img = new Image()
        img.src = url
        img.crossOrigin = 'anonymous'
        // img.setAttribute('crossOrigin', 'anonymous')
        img.onload = function () {
            //默认按比例压缩
            ;(w = w || this.width), (h = h || this.height)
            let quality = 0.95 // 默认图片质量为0.95
            //生成canvas
            let canvas = document.createElement('canvas')
            let ctx = canvas.getContext('2d')
            // 创建属性节点
            canvas.setAttribute('width', w)
            canvas.setAttribute('height', h)
            ctx.drawImage(this, 0, 0, w, h)
            // quality值越小，所绘制出的图像越模糊
            let base64 = canvas.toDataURL('image/png', quality)
            // 回调函数返回base64的值
            resolve(base64)
        }
    })
}
export default downloadByImgLink
