import Vue from 'vue'
import App from '@/App'
import Router from 'vue-router'


const subject = r => require(['@/views/subject'], r)
const home = r => require(['@/views/home/home'], r) //主页
const classif = r => require(['@/views/index/class/index'], r) //分类
const logoIn = r => require(['@/views/Login/index'], r) //登录
const register = r => require(['@/views/register/index'], r) //注册
const smsLogin = r => require(['@/views/smsLogin/index'], r)
const passwordRet = r => require(['@/views/passwordRetrieval/index'], r)
const cart = r => require(['@/views/index/cart/index'], r) //购物车
const PersonalCenter = r => require(['@/views/index/PersonalCenter/index'], r) //个人中心
const Bulletin = r => require(['@/views/home/children/children/bulletin'], r) //公告
const PanicBuying = r => require(['@/views/index/PanicBuying/index'], r) //抢购商品列表
const ForDetailed = r => require(['@/views/ForDetailed/index'], r) //抢购商品详情
const ShopSize = r => require(['@/views/ShopSize/index'], r) //商品规格参数
const Reviews = r => require(['@/views/Reviews/index'], r) //商品评价
const Consult = r => require(['@/views/Consult/index'], r) //商品咨询
const coupon = r => require(['@/views/coupon/index'], r) //优惠券
const footprint = r => require(['@/views/footprint/index'], r) //足迹
const customer = r => require(['@/views/customer/index'], r) //我的发票
const customerAdd = r => require(['@/views/customer/customer_add/index'], r) //新增资质发票
const customerNewAdd = r => require(['@/views/customer/customer_newAdd/index'], r) //新增普通发票



Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        component: App, //顶层路由，对应index.html
        children: [{ //二级路由。对应App.vue
                //地址为空时跳转home页面
                path: '',
                redirect: '/subject'
            },
            {
                path: '/subject',
                name: 'subject',
                component: subject,
                children: [{ //地址为/subject跳转home
                        path: '/subject',
                        redirect: '/home',
                    },
                    { //主页
                        path: '/home',
                        name: 'home',
                        component: home
                    },
                    {
                        path: '/class', //分类
                        name: 'class',
                        component: classif
                    },
                    {
                        path: '/cart', //购物车
                        name: 'cart',
                        component: cart
                    },
                    {
                        path: '/PersonalCenter', //个人中心
                        name: 'PersonalCenter',
                        component: PersonalCenter
                    },
                    // {
                    //     path: '/coupon', //优惠券
                    //     name: 'coupon',
                    //     component: coupon
                    // },
                ]
            },
            {
                path: '/Bulletin', //公告
                name: 'Bulletin',
                component: Bulletin
            },
            {
                path: '/PanicBuying', //抢购商品列表
                name: 'PanicBuying',
                component: PanicBuying
            },
            {
                path: '/logoIn',
                name: 'name',
                component: logoIn
            },
            {
                path: '/register',
                name: 'register',
                component: register
            },
            {
                path: '/sms',
                name: 'smsLogin',
                component: smsLogin
            },
            {
                path: '/bachWord',
                name: 'passwordRet',
                component: passwordRet
            },
            {
                path: '/ForDetailed', //抢购商品详情
                name: 'ForDetailed',
                component: ForDetailed
            },
            {
                path: '/ShopSize', //商品规格参数
                name: 'ShopSize',
                component: ShopSize
            },
            {
                path: '/Reviews', //商品评价
                name: 'Reviews',
                component: Reviews
            },
            {
                path: '/Consult', //商品咨询
                name: 'Consult',
                component: Consult
            },
            {
                path: '/coupon', //优惠券
                name: 'coupon',
                component: coupon
            },
            {
                path: '/footprint', //足迹
                name: 'footprint',
                component: footprint
            },
            {
                path: '/customer', //我的发票
                name: 'customer',
                component: customer
            },
            {
                path: '/customerAdd', //新增发票
                name: 'customerAdd',
                component: customerAdd
            },
            {
                path: '/customer_newAdd', //新增普通发票
                name: 'customer_newAdd',
                component: customerNewAdd
            },

        ]
    }]
})
export default router;

