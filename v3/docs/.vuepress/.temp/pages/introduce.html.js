import comp from "D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/introduce.html.vue"
const data = JSON.parse("{\"path\":\"/introduce.html\",\"title\":\"介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"它的优缺点？\",\"slug\":\"它的优缺点\",\"link\":\"#它的优缺点\",\"children\":[{\"level\":3,\"title\":\"优点\",\"slug\":\"优点\",\"link\":\"#优点\",\"children\":[]},{\"level\":3,\"title\":\"缺点\",\"slug\":\"缺点\",\"link\":\"#缺点\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"introduce.md\"}")
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