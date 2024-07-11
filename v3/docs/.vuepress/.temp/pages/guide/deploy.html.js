import comp from "D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/deploy.html.vue"
const data = JSON.parse("{\"path\":\"/guide/deploy.html\",\"title\":\"部署\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"API部署\",\"slug\":\"api部署\",\"link\":\"#api部署\",\"children\":[]},{\"level\":2,\"title\":\"后台部署\",\"slug\":\"后台部署\",\"link\":\"#后台部署\",\"children\":[]},{\"level\":2,\"title\":\"uniapp部署\",\"slug\":\"uniapp部署\",\"link\":\"#uniapp部署\",\"children\":[]}],\"git\":{\"updatedTime\":1715405318000,\"contributors\":[{\"name\":\"dspurl\",\"email\":\"49799121+dspurl@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"guide/deploy.md\"}")
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
