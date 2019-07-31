//引入vue
import Vue from 'vue'
import Vuex from 'vuex'

//注册vuex
Vue.use(Vuex)

//状态 
const state = {
    userinfo : JSON.parse(localStorage.getItem('userinfo'))
}
//mutations  主要用来操作state
const mutations = {
    SAVE_USERINFO(state,userinfo){
        //存入本地 需要将对象转成字符串
        localStorage.setItem('userinfo',JSON.stringify(userinfo))

        state.userinfo = userinfo;
    }
}
 
//创建store仓库暴露出去
export default new Vuex.Store({
    state,
    mutations
})