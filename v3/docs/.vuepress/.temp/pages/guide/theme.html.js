import comp from "D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/theme.html.vue"
const data = JSON.parse("{\"path\":\"/guide/theme.html\",\"title\":\"自定义主题\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1715405318000,\"contributors\":[{\"name\":\"dspurl\",\"email\":\"49799121+dspurl@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"guide/theme.md\"}")
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
