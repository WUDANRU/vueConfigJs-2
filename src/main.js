import { createApp } from 'vue'
import App from './App.vue'

// 添加IE兼容(A:)
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import "babel-polyfill" //(B:)

//使用 Jquery 使还需要再 main.js 引入 Jquery:
// import $ from 'jquery'

createApp(App).mount('#app')