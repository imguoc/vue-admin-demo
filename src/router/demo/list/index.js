const List = () => import('@/views/demo/list')
const Editor = () => import('@/views/demo/list/editor')

export default [
    {
        path: '/demo/list',
        name: 'list-demo',
        component: List
    },
    {
        path: '/demo/list/:id',
        name: 'list-editor',
        component: Editor
    }
]
