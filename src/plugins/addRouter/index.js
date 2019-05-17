import _ from 'lodash'
import comps from './components'

const addRouter = {
    storage: {
        get (key) {
            return JSON.parse(localStorage.getItem(key))
        },
        set (key, value) {
            return localStorage.setItem(key, JSON.stringify(value))
        }
    },
    init (route = null) {
        let storeRouter = this.storage.get('addRouter') || []
        if (route) {
            if (!storeRouter.find(comp => comp.path === route.path)) storeRouter.push(route)
        } else {
            storeRouter.map(rt => {
                let component = _.cloneDeep(comps[rt.compName])
                component.name = rt.component.name
                rt.component = component
            })
            this.router.addRoutes(storeRouter)
        }
        this.storage.set('addRouter', storeRouter)
    },
    add (options) {
        let opts = Object.assign({}, {
            path: '',
            key: '',
            compName: '',
            query: null,
            props: undefined
        }, options)
        let component = _.cloneDeep(comps[opts.compName])
        component.name = opts.key ? (opts.compName + '-' + opts.key) : opts.compName
        let route = {
            ...opts,
            component
        }
        this.router.addRoutes([
            route
        ])
        this.router.push({
            path: route.path,
            query: route.query
        })
        this.init(route)
    }
}

addRouter.install = function (Vue, options) {
    this.router = options.router
    this.init()
}

export default addRouter
