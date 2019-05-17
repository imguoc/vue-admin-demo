import Demo from './demo'

const components = [
    Demo
]

export default function (Vue) {
    components.forEach(comp => {
        Vue.component(comp.name, comp)
    })
}
