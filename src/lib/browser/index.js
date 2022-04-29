const u = window.navigator.userAgent
const isTencentAgent = u.match(/MicroMessenger/i) == 'MicroMessenger'
const isChrome = () => !!u.match(/Chrome/i)
const isMobile = () => !!(u.match(/(iPhone|iPad|iPod)/i) || u.match(/Android/i) || u.match(/Windows Phone/i) || u.match(/IEMobile/i))
const isIos = () => !!u.match(/(iPhone|iPad|iPod)/i)
const isAndroid = () => !!u.match(/Android/i)
const isWx = () => isTencentAgent && u.match(/wxwork/i) != 'wxwork'
const isWxMobile = () => isTencentAgent && u.match(/wxwork/i) != 'wxwork' && u.match(/Mobile/i) == 'Mobile'
const isWxPc = () => isTencentAgent && u.match(/wxwork/i) != 'wxwork' && u.match(/Mobile/i) != 'Mobile'
const isWxWork = () => isTencentAgent && u.match(/wxwork/i) == 'wxwork'
const isWxWorkMobile = () => isTencentAgent && u.match(/wxwork/i) == 'wxwork' && u.match(/Mobile/i) == 'Mobile'
const isWxWorkPc = () => isTencentAgent && u.match(/wxwork/i) == 'wxwork' && u.match(/Mobile/i) != 'Mobile'
const isFirefox = ()=> u.includes('Firefox')
const isSafari = ()=>/Safari/.test(u) && !/Chrome/.test(u)
const isWindows =()=> ['win32','wow32','win64','wow64'].some(i=>u.toLowerCase().includes(i))
const isMac =()=>/macintosh|mac os x/i.test(u)
isChrome.is = isChrome()
isMobile.is = isMobile()
isIos.is = isIos()
isAndroid.is = isAndroid()
isWx.is = isWx()
isWxMobile.is = isWxMobile()
isWxPc.is = isWxPc()
isWxWork.is = isWxWork()
isWxWorkMobile.is = isWxWorkMobile()
isWxWorkPc.is = isWxWorkPc()
isFirefox.is = isFirefox()
isSafari.is = isSafari()
isWindows.is = isWindows()
isMac.is = isMac()
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
    isWxWorkPc, // 是否企业微信PC端
    isFirefox, // 是否是火狐浏览器
    isSafari, // 是否是isSafari浏览器
    isWindows, // 是否为windows系统
    isMac // 是否为Mac系统
}
