import { defineConfig } from 'rspress/config';
import { join } from 'path';

export default defineConfig({
  root: join(__dirname, 'docs'),
  title: "Sungwook's Blog",
  description: 'Blog of Sungwook Kim',
  base: '/',
  icon: '/favicon.ico',
  globalStyles: join(__dirname, 'src/styles/index.css'),
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
  },
  themeConfig: {
    socialLinks: [
      // 소셜 링크 설정
    ],
  },
});
