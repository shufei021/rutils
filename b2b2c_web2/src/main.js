// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/js/rem'
import './assets/css/base.css'
import 'mint-ui/lib/style.css'
// import './assets/css/color.less'
import MintUI from 'mint-ui'
Vue.config.productionTip = false
Vue.use(MintUI);

//title 更换
Vue.directive('title', {
    inserted: function(el, binding) {
        document.title = el.innerText
        el.remove()
    }
});
//导航高亮
router.beforeEach((to, from, next) => {
    switch (to.path) {
        case '/home':
            store.commit('nav_status', 0)
            break;
        case '/class':
            store.commit('nav_status', 1)
            break;
        case '/cart':
            store.commit('nav_status', 2)
            break;
        case '/PersonalCenter':
            store.commit('nav_status', 3)
            break;
    };
    next();
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});