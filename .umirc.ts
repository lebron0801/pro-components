import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'pro-components',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  description: '为组件开发场景而生的文档工具',
  exportStatic: {},
  dynamicImport: {},
  base: process.env.NODE_ENV === 'production' ? '/pro-components' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/pro-components/' : '/',
  navs: {
    'en-US': [
      null,
      {
        title: 'Github',
        path: 'https://github.com/umijs/dumi',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'Github',
        path: 'https://github.com/umijs/dumi',
      },
    ],
  },
});
