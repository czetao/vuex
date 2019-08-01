//引入vue
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { resolve } from 'path';
import { rejects } from 'assert';
//注册vuex
Vue.use(Vuex)

//状态 
const state = {
    userinfo : JSON.parse(localStorage.getItem('userinfo')),
    userlist : []
}
//mutations  主要用来操作state
const mutations = {
    SAVE_USERINFO(state,userinfo){
        //存入本地 需要将对象转成字符串
        localStorage.setItem('userinfo',JSON.stringify(userinfo))

        state.userinfo = userinfo;
    },
    GET_USERLIST(state,userlist){
        state.userlist = userlist
    }
}
 
//定义actions ,异步的， 主要是commit mutations,由mutations来改变状态 state
//通过resolve，控制同步数据，实现同步
const actions = {
    GET_USERLIST ({ commit }){
        return new Promise((resolve,rejects) =>{
            axios.get('/api/userlist').then(Response =>{
            //通过commit，操控mutations，将数据存在state
            commit('GET_USERLIST',Response.data)
            resolve();
        })
        })
        
        
    }

}
//创建store仓库暴露出去
export default new Vuex.Store({
    state,
    mutations,
    actions
})