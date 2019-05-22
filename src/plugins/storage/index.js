const storage = {
    get (name) {
        let result = localStorage.getItem(name)
        if (result === 'undefined') {
            return undefined
        } else {
            return JSON.parse(result)
        }
    },
    set (name, value) {
        localStorage.setItem(name, JSON.stringify(value))
    },
    clear (name) {
        name ? localStorage.removeItem(name) : localStorage.clear()
    }
}

export default storage
