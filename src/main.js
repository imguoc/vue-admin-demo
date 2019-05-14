// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'
import components from '@/components'

// 引入 animate.css
import 'animate.css'
// 引入 normalize.css
import 'normalize.css'
// 引入 element-ui css
import 'element-ui/lib/theme-chalk/index.css'
// 引入 common.scss
import '@/assets/css/common.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(components)
Vue.use(VueParticles)

/* eslint-disable no-new */
window.vm = new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
