module.exports = {
  plugins: ['@vuepress/medium-zoom'],
  title: 'DSSHOP',
  description: '从零开始，让你走入DSSHOP的世界！',
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
      { text: 'Gitee', link: 'https://dswjcms_purl.gitee.io/dsshop', target:'_blank' },
    ],
    sidebar: [
      {
        title: '基础',
        collapsable: false,
        children: [
          {
            title: '安装',
            path: '/dsshop/guide/getting-started',
          },
          {
            title: '介绍',
            path: '/dsshop/guide/',
          },
          {
            title: '目录结构',
            path: '/dsshop/guide/directory-structure',
          },
          {
            title: '常见问题',
            path: '/dsshop/guide/faq',
          },
          {
            title: '多语言支持',
            path: '/dsshop/guide/i18n',
          },
          {
            title: '发行说明',
            path: '/dsshop/guide/issue',
          }
        ]
      },
      {
        title: '技术概览',
        collapsable: false,
        children: [
          {
            title: '架构',
            path: '/dsshop/guide/framework',
          },
          {
            title: '命名规范',
            path: '/dsshop/guide/naming-notations',
          }
        ]
      },
      {
        title: '生产部署',
        collapsable: false,
        children: [
          {
            title: '部署',
            path: '/dsshop/guide/deploy',
          }
        ]
      },
      {
        title: '核心功能',
        collapsable: false,
        children: [
          {
            title: '功能列表',
            path: '/dsshop/guide/function',
          },
        ]
      },
      {
        title: '后端开发指南',
        collapsable: false,
        children: [
          {
            title: '介绍',
            path: '/dsshop/guide/api-introduce',
          },
          {
            title: '项目配置',
            path: '/dsshop/guide/basic',
          },
          {
            title: '工具库',
            path: '/dsshop/guide/api-instrument',
          },
        ]
      },
      
      {
        title: '前端开发指南',
        collapsable: false,
        children: [
          {
            title: '介绍',
            path: '/dsshop/guide/vue-introduce',
          },
          {
            title: '工具库',
            path: '/dsshop/guide/vue-instrument',
          },
        ]
      },
      {
        title: '模板开发指南',
        collapsable: false,
        path: '/dsshop/guide/template'
      },
      // {
      //   title: '管理员指南',
      //   collapsable: false,
      //   children: [
      //     {
      //       title: '介绍',
      //       path: '/dsshop/guide/',
      //     }
      //   ]
      // },
      {
        title: '功能',
        collapsable: false,
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
            title: '权限与侧边栏',
            path: '/dsshop/guide/jurisdiction',
          }
        ]
      },{
        title: '插件',
        collapsable: false,
        children: [
          {
            title: '介绍',
            path: '/dsshop/guide/plugin',
          }
        ]
      },
      {
        title: '接口文档',
        collapsable: false,
        path: '/dsshop/document/third-party'
      },
    ]
  }
}