// 引入 animate.css
import 'animate.css'
// 引入 normalize.css
import 'normalize.css'
// 引入 element-ui css
import 'element-ui/lib/theme-chalk/index.css'
// 引入 common.scss
import '@/assets/css/common.scss'

import '../../node_modules/clusterize.js/clusterize.css'

// 粒子背景：https://vue-particles.netlify.com/
import VueParticles from 'vue-particles'
// 框架：https://element.eleme.cn/#/zh-CN
import ElementUI from 'element-ui'
// 工具库：https://www.lodashjs.com/
import _ from 'lodash'
// 深度序列化
import serialize from './serialize'
// localStorage
import storage from './storage'
// cookie：https://github.com/jshttp/cookie
import cookie from 'js-cookie'
// 精度计算：https://github.com/MikeMcl/big.js/
import big from 'big.js'
// 日期处理：http://momentjs.cn/
import moment from 'moment'
// 模拟数据
import mock from 'mockjs'

import clusterize from 'clusterize.js'

import swiper from 'vue-awesome-swiper'

// 全局公用组件
import components from '@/components'
// 动态添加路由
import addRouter from './addRouter'

export default function (Vue, options) {
    Vue.router = options.router
    Vue._ = Vue.prototype._ = _
    Vue.serialize = Vue.prototype.$serialize = serialize
    Vue.storage = Vue.prototype.$storage = storage
    Vue.cookie = Vue.prototype.$cookie = cookie
    Vue.big = Vue.prototype.$big = big
    Vue.moment = Vue.prototype.$moment = moment
    Vue.mock = Vue.prototype.$mock = mock
    Vue.clusterize = Vue.prototype.$clusterize = clusterize
    Vue.addRouter = Vue.prototype.$addRouter = addRouter
    Vue.use(VueParticles)
    Vue.use(ElementUI)
    Vue.use(swiper)
    Vue.use(components)
    Vue.use(addRouter, options)
}
