module.exports = {
  plugins: ['@vuepress/medium-zoom'],
  title: 'TFSHOP',
  description: '从零开始，让你走入TFSHOP的世界！',
  head: [
    ['link', { rel: 'icon', href: '/logo.ico' }]
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4' ]
  },
  themeConfig: {
    smoothScroll: true,
    displayAllHeaders: true,
    nav: [
      { text: 'tfshop文档', link: '/tfshop/' },
      {
        text: '选择语言',
        ariaLabel: '语言菜单',
        items: [
          { text: '中文', link: '/tfshop/' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/dspurl/tfshop', target:'_blank' },
      { text: 'Gitee', link: 'https://dswjcms_purl.gitee.io/tfshop', target:'_blank' },
    ],
    sidebar: [
      {
        title: '基础',
        collapsable: false,
        children: [
          {
            title: '安装',
            path: '/tfshop/guide/getting-started',
          },
          {
            title: '介绍',
            path: '/tfshop/guide/',
          },
          {
            title: '目录结构',
            path: '/tfshop/guide/directory-structure',
          },
          {
            title: '常见问题',
            path: '/tfshop/guide/faq',
          },
          {
            title: '多语言支持',
            path: '/tfshop/guide/i18n',
          },
          {
            title: '发行说明',
            path: '/tfshop/guide/issue',
          }
        ]
      },
      {
        title: '技术概览',
        collapsable: false,
        children: [
          {
            title: '架构',
            path: '/tfshop/guide/framework',
          },
          {
            title: '命名规范',
            path: '/tfshop/guide/naming-notations',
          }
        ]
      },
      {
        title: '生产部署',
        collapsable: false,
        children: [
          {
            title: '部署',
            path: '/tfshop/guide/deploy',
          }
        ]
      },
      {
        title: '核心功能',
        collapsable: false,
        children: [
          {
            title: '功能列表',
            path: '/tfshop/guide/function',
          },
        ]
      },
      {
        title: '后端开发指南',
        collapsable: false,
        children: [
          {
            title: '介绍',
            path: '/tfshop/guide/api-introduce',
          },
          {
            title: '项目配置',
            path: '/tfshop/guide/basic',
          },
          {
            title: '工具库',
            path: '/tfshop/guide/api-instrument',
          },
        ]
      },
      
      {
        title: '前端开发指南',
        collapsable: false,
        children: [
          {
            title: '介绍',
            path: '/tfshop/guide/vue-introduce',
          },
          {
            title: '工具库',
            path: '/tfshop/guide/vue-instrument',
          },
        ]
      },
      {
        title: '模板开发指南',
        collapsable: false,
        path: '/tfshop/guide/template'
      },
      // {
      //   title: '管理员指南',
      //   collapsable: false,
      //   children: [
      //     {
      //       title: '介绍',
      //       path: '/tfshop/guide/',
      //     }
      //   ]
      // },
      {
        title: '功能',
        collapsable: false,
        children: [
          {
            title: '消息通知',
            path: '/tfshop/guide/common',
          },
          {
            title: '小程序手机授权登录',
            path: '/tfshop/guide/mini-authorization-login',
          },
          {
            title: '在线支付',
            path: '/tfshop/guide/payment',
          },
          {
            title: '权限与侧边栏',
            path: '/tfshop/guide/jurisdiction',
          }
        ]
      },{
        title: '插件',
        collapsable: false,
        children: [
          {
            title: '介绍',
            path: '/tfshop/guide/plugin',
          }
        ]
      },
      {
        title: '接口文档',
        collapsable: false,
        path: '/tfshop/document/third-party'
      },
    ]
  }
}