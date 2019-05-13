// import Header from './layout/header.vue'
// import SideMenu from './layout/sideMenu.vue'

const components = [
    // Header,
    // SideMenu
]

export default function (Vue) {
    components.forEach(comp => {
        Vue.component(comp.name, comp)
    })
}
