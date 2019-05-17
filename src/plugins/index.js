// 引入 animate.css
import 'animate.css'
// 引入 normalize.css
import 'normalize.css'
// 引入 element-ui css
import 'element-ui/lib/theme-chalk/index.css'
// 引入 common.scss
import '@/assets/css/common.scss'

import ElementUI from 'element-ui'
import VueParticles from 'vue-particles'
import Components from '@/components'
import _ from 'lodash'
import addRouter from './addRouter'

export default function (Vue, options) {
    Vue.use(ElementUI)
    Vue.use(Components)
    Vue.use(VueParticles)
    Vue.use(addRouter, options)
    Vue._ = Vue.prototype._ = _
    Vue.addRouter = Vue.prototype.$addRouter = addRouter
}
