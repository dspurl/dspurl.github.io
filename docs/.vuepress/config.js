module.exports = {
  title: 'DSWJCMS',
  description: '从零开始，让你走入DSHOP的世界！',
  head: [
    ['link', { rel: 'icon', href: '/dsshop_logo.ico' }]
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
  themeConfig: {
    smoothScroll: true,
    displayAllHeaders: true,
    nav: [
      { text: 'dsshop文档', link: '/dsshop/' },
      {
        text: '选择语言',
        ariaLabel: '语言菜单',
        items: [
          { text: '中文', link: '/dsshop/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/dspurl/dsshop', target:'_blank' },
    ],
    sidebar: [
      {
        title: '指南',
        children: [
          {
            title: '介绍',
            path: '/dsshop/guide/',
          },
          {
            title: '快速上手',
            path: '/dsshop/guide/getting-started',
          },
          {
            title: '常见问题',
            path: '/dsshop/guide/faq',
          },
          {
            title: '目录结构',
            path: '/dsshop/guide/directory-structure',
          },
          {
            title: '基本配置',
            path: '/dsshop/guide/basic',
          },
          {
            title: '多语言支持',
            path: '/dsshop/guide/i18n',
          },
          {
            title: '部署',
            path: '/dsshop/guide/deploy',
          },{
            title: '插件',
            path: '/dsshop/guide/plugin',
          },{
            title: '发行说明',
            path: '/dsshop/guide/issue',
          }
        ]
      },
      {
        title: '文档',
        children: [
          {
            title: '消息通知',
            path: '/dsshop/guide/common',
          },
          {
            title: '小程序手机授权登录',
            path: '/dsshop/guide/mini-authorization-login',
          },
          {
            title: '在线支付',
            path: '/dsshop/guide/payment',
          },
          {
            title: '使用手册',
            path: '/dsshop/document/exploit',
          },
          {
            title: '第三方文档',
            path: '/dsshop/document/third-party',
          }
        ]
      }
    ]
  }
}