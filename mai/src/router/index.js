import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
// import login from '@/components/login.vue'
// import index from '@/components/index.vue'

//异步加载组件
const login = () => import('@/components/login')
const index = () => import('@/components/index')
const userlist  = () => import('@/components/userlist')
const useradd = () => import('@/components/useradd')
const home = () => import('@/components/home')
const passwordedit = () => import('@/components/passwordedit')


// 注册路由
Vue.use(Router)
// 导出路由
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/',
          name: 'home',
          component: home
        },
        {
          path: '/userlist',
          name: 'userlist',
          component: userlist
        },
        {
          path: '/useradd',
          name: 'useradd',
          component: useradd
        },
        {
          path: '/passwordedit',
          name: 'passwordedit',
          component: passwordedit
        }
      ]
    }
  ]
})
