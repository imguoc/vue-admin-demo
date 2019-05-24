import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Test from './test'
import Login from './login'
import Demo from './demo'
import Error404 from './404'

Vue.use(Router)

// console.log(Demo)

const router = new Router({
    routes: [
        ...Home,
        ...Test,
        ...Login,
        ...Demo,

        ...Error404 // 放在最后
    ]
})

// 全局导航守卫
let whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
    let TOKEN = localStorage.getItem('TOKEN')
    if (whiteList.includes(to.path)) {
        next()
    } else if (!TOKEN) {
        next({path: '/login'})
    } else {
        next()
    }
})

export default router
