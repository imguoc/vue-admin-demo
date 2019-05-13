const Error404 = () => import('@/views/404')

export default [
    {
        path: '/404',
        name: 'Error404',
        component: Error404
    },
    {
        // 此处需特别注意置于最底部
        path: '*',
        redirect: '/404'
    }
]
