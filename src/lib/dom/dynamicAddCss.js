/**
 * 动态添加css文件
 * @param {String} cssName : css 名称 不带后缀
 * @param {String} prefix  ：css 前缀
 */
const dynamicAddCss = function (cssName, prefix = '') {
    return new Promise(resolve => {
        let link = document.createElement('link')
        link.setAttribute('href', prefix + cssName + '.css')
        link.setAttribute('type', 'text/css')
        link.onload = () => resolve()
        document.getElementsByTagName('head')[0].appendChild(link)
    })
}
export default dynamicAddCss
