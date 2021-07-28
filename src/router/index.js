import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieRouter from './movie'
import CinemaRouter from './cinema'
import MineRouter from './mine'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MovieRouter,
    CinemaRouter,
    MineRouter,
    {
      // 重定向 当打开页面或输入无效网址时，redirect 至 /movie 的页面上
      path: '/*',
      redirect: '/movie',
    }
  ]
})

export default router
