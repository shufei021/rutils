/**
 * @description: 底部是否可见
 * @return {Boolean}
 */
const bottomVisible = function () {
    return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight)
}
export default bottomVisible
