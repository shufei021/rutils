const ua = window.navigator.userAgent
const isTencentAgent = ua.match(/MicroMessenger/i) == 'MicroMessenger'
const isChrome = () => ua.match(/Chrome/i)
const isMobile = () => !!(ua.match(/(iPhone|iPad|iPod)/i) || ua.match(/Android/i) || ua.match(/Windows Phone/i) || ua.match(/IEMobile/i))
const isIos = () => !!ua.match(/(iPhone|iPad|iPod)/i)
const isAndroid = () => !!ua.match(/Android/i)
const isWx = () => isTencentAgent && ua.match(/wxwork/i) != 'wxwork'
const isWxMobile = () => isTencentAgent && ua.match(/wxwork/i) != 'wxwork' && ua.match(/Mobile/i) == 'Mobile'
const isWxPc = () => isTencentAgent && ua.match(/wxwork/i) != 'wxwork' && ua.match(/Mobile/i) != 'Mobile'
const isWxWork = () => isTencentAgent && ua.match(/wxwork/i) == 'wxwork'
const isWxWorkMobile = () => isTencentAgent && ua.match(/wxwork/i) == 'wxwork' && ua.match(/Mobile/i) == 'Mobile'
const isWxWorkPc = () => isTencentAgent && ua.match(/wxwork/i) == 'wxwork' && ua.match(/Mobile/i) != 'Mobile'

/**
 * 浏览器环境
 */
export default {
    isChrome, // 是否Chrome浏览器
    isMobile, // 是否移动端
    isIos, // 是否IOS
    isAndroid, // 是否安卓
    isWx, // 是否微信
    isWxMobile, // 是否微信移动端
    isWxPc, // 是否微信PC端
    isWxWork, // 是否企业微信
    isWxWorkMobile, // 是否企业微信移动端
    isWxWorkPc // 是否企业微信PC端
}
