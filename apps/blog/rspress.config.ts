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
    tools: {
      rspack: {
        cache: false,
      },
    },
  },
  themeConfig: {
    sidebar: {
      '/posts/': [
        {
          text: '프론트엔드 인턴으로 살아남기',
          items: [
            {
              text: '메타 데이터 관리하기',
              link: '/posts/intern/1',
            },
            {
              text: '피드백 및 실수 모음',
              link: '/posts/intern/2',
            },
            {
              text: 'Rspack 마이그레이션',
              link: '/posts/intern/3',
            },
            {
              text: 'Portal',
              link: '/posts/intern/4',
            },
            {
              text: 'Portal #2',
              link: '/posts/intern/5',
            },
          ],
        },
      ],
    },
    socialLinks: [
      // 소셜 링크 설정
    ],
  },
});
