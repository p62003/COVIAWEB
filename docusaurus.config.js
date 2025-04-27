// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '知識共享平台',
  tagline: '即使世界沒有將我們索引，也不影響我們繼續前行',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap',
      rel: 'stylesheet',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  // ✅ 正確加入 plugin 區塊，跟 presets 平行
  plugins: [
    [
      require.resolve('./plugins/docusaurus-plugin-minisearch'),
      {
        highlightColor: '#ffeb3b',      // 搜尋高亮色
        debounceTime: 3000,             // 輸入後延遲搜尋時間（毫秒）
        searchResultPath: '/docs',       // 搜尋結果導向頁面
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'COVIA 知識共享平台',
        logo: {
          alt: 'covia Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '知識庫',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      metadata: [
        { name: 'description', content: '從AI、編程到網站建置與開源實作，讓每個挑戰成為你的實力。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'COVIA｜探索AI、編程與網站建置的知識共享平台' },
        { property: 'og:description', content: '從AI、編程到網站建置與開源實作，讓每個挑戰成為你的實力。' },
        { property: 'og:url', content: 'https://covia.com/' },
        { property: 'og:image', content: 'https://covia.com/img/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'COVIA' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'COVIA｜探索AI、編程與網站建置的知識共享平台' },
        { name: 'twitter:description', content: '從AI、編程到網站建置與開源實作，讓每個挑戰成為你的實力。' },
        { name: 'twitter:image', content: 'https://covia.com/img/og-image.png' },
        { name: 'twitter:url', content: 'https://covia.com/' },
      ],

      footer: {
        style: 'dark',
        links: [
          {
            title: '把 COVIA，分享給你在乎的人',
            items: [
              {
                html: `
                  <div class="footer-social-icons">
                    <a href="https://social-plugins.line.me/lineit/share?url=https://你的網址" target="_blank" rel="noopener noreferrer">
                      <img src="https://cdn.simpleicons.org/line/00C300" alt="Share on LINE" />
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://你的網址" target="_blank" rel="noopener noreferrer">
                      <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Share on Facebook" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Share on Instagram" />
                    </a>
                    <a href="https://www.threads.net/" target="_blank" rel="noopener noreferrer">
                      <img src="https://cdn.simpleicons.org/threads/000000" alt="Share on Threads" />
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=https://你的網址" target="_blank" rel="noopener noreferrer">
                      <img src="https://cdn.simpleicons.org/x/000000" alt="Share on X" />
                    </a>
                    <a href="https://t.me/share/url?url=https://你的網址" target="_blank" rel="noopener noreferrer">
                      <img src="https://cdn.simpleicons.org/telegram/26A5E4" alt="Share on Telegram" />
                    </a>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © 2025 COVIA — From Errors to Wisdom. Powered by Docusaurus & Cloudflare Pages.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

    }),

};

export default config;
