const defaultTabs = [
    {
        name: 'Home',
        path: '/'
    }
]

const state = {
    defaultList: defaultTabs,
    tabList: []
}

const mutations = {
    sync_tabList (state, payload) {
        state.tabList = payload
    }
}

export default {
    state,
    mutations,
    namespaced: true
}
