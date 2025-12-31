import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Icon } from '@iconify/vue';
import { createPinia } from 'pinia';
import router from './router';
import { setupRouterGuards } from './middleware/auth';

const app = createApp(App);
const pinia = createPinia();

// 注册组件和插件
app.component('Icon', Icon);
app.use(pinia);
app.use(router);

// 在Pinia和Router都初始化后，设置路由守卫
setupRouterGuards(router);

app.mount('#app');
