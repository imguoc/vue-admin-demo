import Demo from './demo'
import draggable from 'vuedraggable'

const components = [
    Demo,
    draggable
]

export default function (Vue) {
    components.forEach(comp => {
        Vue.component(comp.name, comp)
    })
}
