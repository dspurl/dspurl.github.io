import comp from "D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/deploy.html.vue"
const data = JSON.parse("{\"path\":\"/en/guide/deploy.html\",\"title\":\"Deploy\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"API deployment\",\"slug\":\"api-deployment\",\"link\":\"#api-deployment\",\"children\":[]},{\"level\":2,\"title\":\"Background deployment\",\"slug\":\"background-deployment\",\"link\":\"#background-deployment\",\"children\":[]},{\"level\":2,\"title\":\"uniapp deployment\",\"slug\":\"uniapp-deployment\",\"link\":\"#uniapp-deployment\",\"children\":[]}],\"git\":{\"updatedTime\":1715405318000,\"contributors\":[{\"name\":\"dspurl\",\"email\":\"49799121+dspurl@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"en/guide/deploy.md\"}")
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
