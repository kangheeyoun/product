import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './Router';

// createApp(App).mount('#app')
const app = createApp(App);
app.use(Router);
app.mount('#app');
