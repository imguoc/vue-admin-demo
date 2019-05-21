const storage = {
    get (name) {
        return JSON.parse(localStorage.getItem(name))
    },
    set (name, value) {
        localStorage.setItem(name, JSON.stringify(value))
    },
    clear (name) {
        name ? localStorage.removeItem(name) : localStorage.clear()
    }
}

export default storage
