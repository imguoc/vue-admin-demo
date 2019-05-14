import Vue from 'vue'
import Vuex from 'vuex'
// module
import layout from './layout'

Vue.use(Vuex)

const state = {

}
const getters = {

}
const mutations = {

}
const actions = {

}
const modules = {
    layout
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules,
    strict: process.env.NODE_ENV !== 'production' // 严格模式，禁止在生产环境时使用
})

export default store
