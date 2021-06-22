/**
 * Download Image to local:
 * the main principle is to use the download attribute of a tag and todataurl () of canvas
 * @param { String | Element } selector: Selector of img tag or img element
 * @param { String } name：Download Image Name
 */
const downloadByImgSelector = function (selector, name) {
    return new Promise((resolve,reject)=>{
        let image = new Image()
        // Solving cross domain canvas pollution problem
        image.setAttribute('crossOrigin', 'anonymous')
        image.onload = function () {
            // 创建一个canvas标签
            let canvas = document.createElement('canvas')
            // 设置canvas的宽高
            canvas.width = image.width
            canvas.height = image.height
            // 获取canvas的2d界面
            let context = canvas.getContext('2d')
            // 把图片画在canvas上
            context.drawImage(image, 0, 0, canvas.width, canvas.height)
            // 把canvas的内容转化为base64格式
            let url = canvas.toDataURL('image/png')
            // 生成一个a元素
            let a = document.createElement('a')
            // 创建一个单击事件
            let event = new MouseEvent('click')
            // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
            a.download = name || 'defaultName'
            // 将生成的URL设置为a.href属性
            a.href = url
            // 触发a的单击事件
            a.dispatchEvent(event)
            resolve()
        }
        image.onerror = e=>reject(e)
        // 获取img上的src值，赋值之后，完成之后会调用onload事件
        image.src = typeof selector === 'string' ? document.querySelector(selector).src : selector.src
    })
}
export default downloadByImgSelector
