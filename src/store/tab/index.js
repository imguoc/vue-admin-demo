let defaultTab = {
    title: 'Home',
    name: 'Home',
    path: '/'
}

const state = {
    currentTab: 'Home',
    tabList: JSON.parse(localStorage.getItem('tabList')) || [defaultTab]
}

const mutations = {
    sync_tabList (state, payload) {
        if (!payload.find(item => item.name === defaultTab.name)) {
            state.tabList = [defaultTab].concat(payload)
        } else {
            state.tabList = payload
        }
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
