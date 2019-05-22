// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import plugins from '@/plugins'

Vue.config.productionTip = false

Vue.use(plugins, {
    router
})

/* eslint-disable no-new */
window.vm = new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
