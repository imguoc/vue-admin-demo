import comps from './components'

let _Vue
let STORE_NAME = 'addRouter'

const addRouter = {
    init (route = null) {
        let storeRouter = _Vue.storage.get(STORE_NAME) || []
        if (route) {
            if (!storeRouter.find(comp => comp.path === route.path)) storeRouter.push(route)
        } else {
            storeRouter.map(rt => {
                let component = _Vue._.cloneDeep(comps[rt.compName])
                component.name = rt.component.name
                rt.component = component
            })
            _Vue.router.addRoutes(storeRouter)
        }
        _Vue.storage.set(STORE_NAME, storeRouter)
    },
    add (options) {
        let opts = Object.assign({}, {
            path: '',
            key: '',
            compName: '',
            query: null,
            props: undefined
        }, options)
        let component = _Vue._.cloneDeep(comps[opts.compName])
        component.name = opts.key ? (opts.compName + '-' + opts.key) : opts.compName
        let route = {
            ...opts,
            component
        }
        _Vue.router.addRoutes([
            route
        ])
        _Vue.router.push({
            path: route.path,
            query: route.query
        })
        this.init(route)
    }
}

addRouter.install = function (Vue) {
    _Vue = Vue
    this.init()
}

export default addRouter
