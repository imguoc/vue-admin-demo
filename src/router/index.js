import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Test from './test'
import Login from './login'
import Error404 from './404'

Vue.use(Router)

const router = new Router({
    routes: [
        ...Home,
        ...Test,
        ...Login,
        ...Error404
    ]
})

// 全局导航守卫
let whiteList = ['/login', '/404']
let TOKEN = localStorage.getItem('TOKEN')
console.log(TOKEN)
router.beforeEach((to, from, next) => {
    if (whiteList.includes(to.path)) {
        next()
    } else if (!TOKEN) {
        next({path: '/login'})
    } else {
        next()
    }
})

export default router
