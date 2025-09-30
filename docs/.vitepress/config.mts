import { defineConfig } from 'vitepress';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { mdVueDemoPlugin } from 'vitepress-vue-demo';
export default defineConfig({
  title: '组件库文档',
  description: '基于 VitePress 的组件库文档',
  head: [
    // ["link", { rel: "icon", href: "https://codemirror.net/favicon.ico" }],
    ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],
  themeConfig: {
    // ...existing config...
    search: {
      provider: 'local',
    },
    // ...existing config...},
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '介绍', link: '/guide/getting-started' },
      {
        text: 'Markdown 扩展',
        link:
          process.env.NODE_ENV === 'development'
            ? '/other/markdown'
            : 'https://vitepress.dev/zh/guide/markdown',
      },
      { text: '更新日志', link: '/other/empty' },
    ],
    sidebar: [
      {
        text: '组件',
        items: [
          { text: 'Button 按钮', link: '/guide/components/button' },
          { text: 'Input 输入框', link: '/guide/components/input' },
        ],
      },
      {
        text: '介绍',
        items: [
          { text: '入门指南', link: '/guide/getting-started' },
          { text: '事件', link: '/guide/events' },
        ],
      },
      {
        text: '指令',
        items: [{ text: '指令方法', link: '/other/empty' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
  markdown: {
    config: (md) => {
      md.use(mdVueDemoPlugin);
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../src'),
      },
    },
  },
});
