import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Test from './test'

Vue.use(Router)

export default new Router({
    routes: [
        ...Home,
        ...Test
    ]
})
