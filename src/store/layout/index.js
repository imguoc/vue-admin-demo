const state = {
    isOpenSide: JSON.parse(localStorage.getItem('isOpenSide')) && true
}

const mutations = {
    sync_isOpenSide (state, payload) {
        state.isOpenSide = payload
    }
}

export default {
    state,
    mutations,
    namespaced: true
}
