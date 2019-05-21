// https://github.com/yahoo/serialize-javascript
import Serialize from 'serialize-javascript'

const serialize = {
    set (value) {
        return Serialize(value, {space: 4})
    },
    get (fn) {
        // 一个变量指向Function，防止有些前端编译工具报错
        let Fn = Function
        return new Fn('return ' + fn)()
    }
}

export default serialize
