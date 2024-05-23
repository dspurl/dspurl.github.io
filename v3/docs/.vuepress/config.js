import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
export default defineUserConfig({
  base: '/tfshop/',
  lang: 'zh-CN',
  theme: defaultTheme({
    logo: 'image/logo-w.png',
    locales: {
      '/': {
        navbar:  [
          {
            text: '指南',
            collapsable: false,
            children: [
              '/guide/introduce.md',
              '/guide/getting-started.md',
              '/guide/configuration.md',
              '/guide/theme.md',
              '/guide/deploy.md',
              '/guide/function.md'
            ],
          },
          {
            text: '官网',
            link: 'https://www.dswjcms.com'
          },
          {
            text: '更新日志',
            link: 'https://github.com/dspurl/tfshop/releases'
          },
        ],
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
      '/en/': {
        navbar:  [
          {
            text: 'Introduction',
            children: [
              '/en/guide/introduce.md',
              '/en/guide/getting-started.md',
              '/en/guide/configuration.md',
              '/en/guide/theme.md',
              '/en/guide/deploy.md',
              '/en/guide/function.md'
            ],
          },
          {
            text: 'Official website',
            link: 'https://www.dswjcms.com'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/dspurl/tfshop/releases'
          },
        ],
        selectLanguageName: 'English',
      },
    }
  }),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'TFSHOP',
      description: '轻量级商城系统，跨终端商城解决方案',
    },
    '/en/': {
      lang: 'en-US',
      title: 'TFSHOP',
      description: 'Lightweight mall system, cross-terminal mall solution',
    },
  },
  bundler: viteBundler(),
})
