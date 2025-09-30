// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import type { Component } from 'vue';
import { mdVueDemo } from 'vitepress-vue-demo';
import 'vitepress-vue-demo/dist/style.css';

const modules = import.meta.glob<Component>('../../../src/components/zjlComponents/**/.vue', {
  eager: true,
  import: 'default',
});

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(mdVueDemo, { modules });
  },
} satisfies Theme;
