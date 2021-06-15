/*
 * @Description: 
 * @Author: shufei
 * @Date: 2021-05-14 14:05:14
 * @LastEditTime: 2021-06-09 14:14:44
 * @LastEditors: shufei
 */
import date from './lib/date' //时间日期
import arr from './lib/arr' //数组
import url from './lib/url' //url
import num from './lib/num' //数字
import str from './lib/str' //字符串
import local from './lib/local' //本地缓村 localStorage
import browser from './lib/browser' //浏览器
import base from './lib/base' //基类
import dom from './lib/dom' //dom操作类
import download from './lib/download' //下载类
import obj from './lib/obj' //对象
import reg from './lib/reg' //正则
import map from './lib/map' //地图
import ListCountDown from './lib/ListCountDown' //长列表倒计时插件
import session from './lib/session' //长列表倒计时插件
import business from './lib/business' //业务
import handday from './lib/handday' //业务
export default ({ router }) => {
    if(typeof window != 'undefined'){
        window.handday = handday
        window.date = date
        window.arr = arr
        window.url = url
        window.num = num
        window.str = str
        window.local = local
        window.base = base
        window.dom = dom
        window.download = download
        window.obj = obj
        window.browser = browser
        window.reg = reg
        window.map = map
        window.ListCountDown = ListCountDown
        window.session = session
        window.business = business
        window.handday = handday
    }
    if (typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
        router.onReady(() => {
            const { app } = router

            app.$once('hook:mounted', () => {
                setTimeout(() => {
                    const { hash } = document.location
                    if (hash.length > 1) {
                        const id = decodeURIComponent(hash.substring(1))
                        const element = document.getElementById(id)
                        if (element) element.scrollIntoView()
                    }
                }, 500)
            })
        })
    }
}
