const storage = {
    get (name) {
        return JSON.parse(localStorage.getItem(name))
    },
    set (name, value) {
        localStorage.setItem(name, JSON.stringify(value))
        return this.get(name)
    },
    clear (name) {
        return name ? localStorage.removeItem(name) : localStorage.clear()
    }
}

export default storage
