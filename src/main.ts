import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import {ElRow, ElCol, ElCard, ElButton, ElLink, ElSpace, ElTag} from "element-plus";


createApp(App)
    .use(router)
    .use(ElCol)
    .use(ElRow)
    .use(ElCard)
    .use(ElButton)
    .use(ElLink)
    .use(ElSpace)
    .use(ElTag)
    .mount('#app')
