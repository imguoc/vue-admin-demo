const defaultTabs = [
    {
        name: 'Home',
        path: '/'
    }
]

const state = {
    currentTab: 'Home',
    defaultList: defaultTabs,
    tabList: []
}

const mutations = {
    sync_tabList (state, payload) {
        state.tabList = payload
    },
    sync_currentTab (state, payload) {
        state.currentTab = payload
    }
}

export default {
    state,
    mutations,
    namespaced: true
}
