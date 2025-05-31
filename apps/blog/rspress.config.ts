import { defineConfig } from 'rspress/config';
import { join } from 'path';

export default defineConfig({
  root: join(__dirname, 'docs'),
  title: 'My Blog',
  description: 'My Blog Description',
  base: '/',
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
