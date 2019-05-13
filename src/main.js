// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'

// 引入 animate.css
import 'animate.css'
// 引入 normalize.css
import 'normalize.css'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/common.scss'

import components from '@/components'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(components)

/* eslint-disable no-new */
window.vm = new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
