import Demo from './demo'
// 基于Sortable.js的Vue拖放组件: https://github.com/SortableJS/Vue.Draggable
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
