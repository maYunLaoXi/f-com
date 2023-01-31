import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { logGitInfo } from 'f-com'
console.log(logGitInfo({ main: 'main.ts' }))

createApp(App).mount('#app')
