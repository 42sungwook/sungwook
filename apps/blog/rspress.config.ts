import { defineConfig } from 'rspress/config';
import { join } from 'path';

export default defineConfig({
  root: join(__dirname, 'docs'),
  title: "Sungwook's Blog",
  description: 'Blog of Sungwook Kim',
  base: '/',
  icon: '/favicon.ico',
  globalStyles: join(__dirname, 'src/styles/index.css'),
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-XZJFCJNVTG',
      },
    ],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-XZJFCJNVTG');
      `,
    ],
  ],
  builderConfig: {
    output: {
      distPath: {
        root: join(__dirname, 'dist'),
      },
    },
    resolve: {
      alias: {
        '@': join(__dirname, 'src'),
      },
    },
    tools: {
      rspack: {
        cache: false,
      },
    },
  },
  themeConfig: {
    socialLinks: [
      // 소셜 링크 설정
    ],
  },
});
