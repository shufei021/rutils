import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {//创建数据仓库
    nav_status:0,//footer_nav 状态
};
const mutations = {//变更数据状态
    nav_status(state,inf){
        state.nav_status = inf;
    }
};
const actions = {//异步修改数据

};

const store = new Vuex.Store({
    state,
    mutations,
    actions
});
export default store;