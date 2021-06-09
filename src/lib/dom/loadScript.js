import setAttr from './setAttr'
/**
 * 加载脚本
 * @param {String} src
 * @param {Object} attrs
 * @return {Promise<Element>}
 */
export const loadScript = function (src, attrs) {
    return new Promise(resolve => {
        const scriptEl = document.createElement('script')
        if (attrs) setAttr(scriptEl, attrs)
        // 加载成功
        scriptEl.onload = () => resolve(scriptEl)
        scriptEl.src = src
        document.body.appendChild(scriptEl)
    })
}
