import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录',
      hideLayout: false,
      requiresAuth: false,
    },
  },
  {
    path: '/auth/:provider/callback',
    name: 'SSOCallback',
    component: () => import('@/views/SSOCallback.vue'),
    meta: {
      title: 'SSO回调',
      hideLayout: true,
      requiresAuth: false,
    },
  },
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: '首页',
          icon: 'mdi-home',
          sidebar: true,
          activeName: 'Home',
          requiresAuth: true,
        },
      },
      {
        path: 'sso-demo',
        name: 'SSODemo',
        component: () => import('@/views/SSODemo.vue'),
        meta: {
          title: 'SSO演示',
          icon: 'mdi-login',
          sidebar: true,
          activeName: 'SSODemo',
          requiresAuth: false,
        },
      },
      {
        path: 'chat',
        name: 'Chat',
        component: () => import('@/views/Chat.vue'),
        meta: {
          title: 'AI 聊天',
          icon: 'mdi-chat',
          sidebar: true,
          activeName: 'Chat',
          requiresAuth: true,
        },
      },
      {
        path: 'openai-test',
        name: 'OpenAITest',
        component: () => import('@/views/OpenAITest.vue'),
        meta: {
          title: 'OpenAI 测试',
          icon: 'mdi-test-tube',
          sidebar: true,
          activeName: 'OpenAITest',
          requiresAuth: true,
        },
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: {
          title: '关于',
          icon: 'mdi-information',
          sidebar: true,
          activeName: 'About',
          requiresAuth: true,
        },
      },
      {
        path: 'docs',
        name: 'Docs',
        redirect: '/docs/guide',
        component: () => import('@/views/Guide.vue'),
        meta: {
          title: '文档',
          icon: 'mdi-file-document',
          sidebar: true,
          group: true,
          requiresAuth: true,
        },
        children: [
          {
            path: 'guide',
            name: 'Guide',
            component: () => import('@/views/Guide.vue'),
            meta: {
              title: '使用指南',
              icon: 'mdi-book-open',
              sidebar: true,
              requiresAuth: true,
            },
          },
          {
            path: 'api',
            name: 'Api',
            component: () => import('@/views/Api.vue'),
            meta: {
              title: 'API文档',
              icon: 'mdi-api',
              sidebar: true,
              requiresAuth: true,
            },
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
