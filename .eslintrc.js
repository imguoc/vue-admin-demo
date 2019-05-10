// https://eslint.org/docs/user-guide/configuring
// 中文文档 http://eslint.cn/

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // 必须检测 *.vue 文件
    plugins: [
        'vue'
    ],
    // 自定义规则
    rules: {
        // 缩进为4个空格
        'indent': ['error', 4],
        // 允许async-await
        'generator-star-spacing': 'off',
        // 在开发过程中允许调试
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
