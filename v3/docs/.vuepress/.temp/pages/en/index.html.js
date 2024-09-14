import comp from "G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"Home page\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home page\",\"heroImage\":\"image/logo-w.png\",\"actions\":[{\"text\":\"Get started\",\"link\":\"/en/guide/introduce.md\",\"type\":\"primary\"},{\"text\":\"Visit the official website\",\"link\":\"https://www.dswjcms.com\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Lightweight\",\"details\":\"The project only comes with the necessary mall module, which is conducive to secondary development.\"},{\"title\":\"Best practices\",\"details\":\"The right choice of frameworks and good engineering practices will help you continue to produce high-quality code.\"},{\"title\":\"Cross-platform\",\"details\":\"The front-end of the mall adopts uni-app, and a set of code is coded to 10 platforms, which is not a dream.\"},{\"title\":\"Front-end and back-end separation\",\"details\":\"The front and back ends are separated, and the front and back ends are not coupled.\"},{\"title\":\"Easy to scale\",\"details\":\"The built-in plug-in module can facilitate the integration and development of plug-ins.\"},{\"title\":\"Stable updates\",\"details\":\"Regular release, upward compatibility, smooth updates, reduce unnecessary expenses caused by updates.\"}],\"footer\":\"MIT Licensed | Copyright © 2020-present dswjcms\"},\"headers\":[],\"git\":{\"updatedTime\":1715405318000,\"contributors\":[{\"name\":\"dspurl\",\"email\":\"49799121+dspurl@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"en/README.md\"}")
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
