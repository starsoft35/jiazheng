export default {
    // 保存数据
    set (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    },

    // 获取数据
    get (key) {
        return JSON.parse(window.localStorage.getItem(key))
    },

    // 删除数据
    remove (key) {
        window.localStorage.removeItem(key)
    }
}