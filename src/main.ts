import { createApp } from 'vue'
import './style.css'
import {createPinia, storeToRefs} from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const _initPinia = JSON.parse(JSON.stringify(pinia.state))
pinia.use(({pinia: _pinia, store}) => {
    const initState = JSON.parse(JSON.stringify(store.$state))
    const initPinia = JSON.parse(JSON.stringify(pinia.state))
    store.$reset = () => {
        store.$state = JSON.parse(JSON.stringify(initState))
    }
    store.$init = () => {
        pinia.state = storeToRefs(initPinia)
    }
    store.$log = () => {
        console.log('共有的 log 属性', _pinia.state)
    }
})

createApp(App).use(pinia).mount('#app')
