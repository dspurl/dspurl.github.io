export const themeData = JSON.parse("{\"logo\":\"image/logo-w.png\",\"locales\":{\"/\":{\"navbar\":[{\"text\":\"指南\",\"collapsable\":false,\"children\":[\"/guide/introduce.md\",\"/guide/getting-started.md\",\"/guide/configuration.md\",\"/guide/theme.md\",\"/guide/deploy.md\",\"/guide/function.md\"]},{\"text\":\"PRO指南\",\"collapsable\":false,\"children\":[\"/pro-guide/decorate.md\",\"/pro-guide/deploy.md\"]},{\"text\":\"官网\",\"link\":\"https://www.dswjcms.com\"},{\"text\":\"更新日志\",\"link\":\"https://github.com/dspurl/tfshop/releases\"}],\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"selectLanguageAriaLabel\":\"选择语言\",\"editLinkText\":\"在 GitHub 上编辑此页\",\"lastUpdatedText\":\"上次更新\",\"contributorsText\":\"贡献者\",\"tip\":\"提示\",\"warning\":\"注意\",\"danger\":\"警告\",\"notFound\":[\"这里什么都没有\",\"我们怎么到这来了？\",\"这是一个 404 页面\",\"看起来我们进入了错误的链接\"],\"backToHome\":\"返回首页\",\"openInNewWindow\":\"在新窗口打开\",\"toggleColorMode\":\"切换颜色模式\",\"toggleSidebar\":\"切换侧边栏\"},\"/en/\":{\"navbar\":[{\"text\":\"Introduction\",\"children\":[\"/en/guide/introduce.md\",\"/en/guide/getting-started.md\",\"/en/guide/configuration.md\",\"/en/guide/theme.md\",\"/en/guide/deploy.md\",\"/en/guide/function.md\"]},{\"text\":\"PRO Guide\",\"collapsable\":false,\"children\":[\"/en/pro-guide/decorate.md\",\"/en/pro-guide/deploy.md\"]},{\"text\":\"Official website\",\"link\":\"https://www.dswjcms.com\"},{\"text\":\"Changelog\",\"link\":\"https://github.com/dspurl/tfshop/releases\"}],\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
