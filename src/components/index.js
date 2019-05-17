// import Header from './layout/header.vue'
// import SideMenu from './layout/sideMenu.vue'
import Demo from './demo'

const components = [
    // Header,
    // SideMenu,
    Demo
]

export default function (Vue) {
    components.forEach(comp => {
        Vue.component(comp.name, comp)
    })
}
