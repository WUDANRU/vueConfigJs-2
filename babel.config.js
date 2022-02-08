module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ]
}


// 安装cnpm i babel-polyfill -S (ie11浏览器空白：vue-cli4.x vue.config.js 配置 babel-polyfill)

// A:IE浏览器需要的如下:和main.js还添加了2句
// const plugins = [];

// module.exports = {
//   presets: [["@vue/app", { useBuiltIns: "entry" }]],
//   plugins: plugins
// };


// B:main.js引入,(放在第1行，也就是顶部，确保所有都能被转化)
// import "babel-polyfill"


// C:vue.config.js配置
// module.exports = {
//     // ES6兼容配置：在exports中添加，这里很关键，不配置不行  
//     transpileDependencies: ['element-ui'],
//     // 链式webpack配置函数
//     chainWebpack (config) {
//       config.entry('main').add('babel-polyfill')
//     }
// }