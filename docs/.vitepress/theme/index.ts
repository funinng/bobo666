import DefaultTheme from 'vitepress/theme';
import HelloWorld from '../../../src/components/HelloWorld.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('HelloWorld', HelloWorld);
  },
};
