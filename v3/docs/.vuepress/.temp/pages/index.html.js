import comp from "D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\"image/logo-w.png\",\"actions\":[{\"text\":\"开始使用\",\"link\":\"/guide/introduce.md\",\"type\":\"primary\"},{\"text\":\"访问官网\",\"link\":\"https://www.dswjcms.com\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"轻量级\",\"details\":\"项目只附带必要的商城模块，利于二次开发。\"},{\"title\":\"最佳实践\",\"details\":\"合理的框架选择，良好的工程实践助你持续产出高质量代码。\"},{\"title\":\"跨平台\",\"details\":\"商城前端采用uni-app，一套代码编到10个平台，这不是梦想。\"},{\"title\":\"前后端分离\",\"details\":\"前后端分离，前端和后端无耦合，各思其责。\"},{\"title\":\"易扩展\",\"details\":\"内置插件模块，可以方便插件的集成和开发。\"},{\"title\":\"稳定更新\",\"details\":\"定期发行，向上兼容，平滑更新，减少因更新造成的不必要开支。\"}],\"footer\":\"MIT Licensed | Copyright © 2020-present dswjcms\"},\"headers\":[],\"git\":{\"updatedTime\":1715405318000,\"contributors\":[{\"name\":\"dspurl\",\"email\":\"49799121+dspurl@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
