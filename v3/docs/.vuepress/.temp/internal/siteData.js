export const siteData = JSON.parse("{\"base\":\"/tfshop/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"TFSHOP\",\"description\":\"轻量级商城系统，跨终端商城解决方案\"},\"/en/\":{\"lang\":\"en-US\",\"title\":\"TFSHOP\",\"description\":\"Lightweight mall system, cross-terminal mall solution\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
