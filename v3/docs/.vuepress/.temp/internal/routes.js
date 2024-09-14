export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Home page"} }],
  ["/guide/configuration.html", { loader: () => import(/* webpackChunkName: "configuration.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/configuration.html.js"), meta: {"title":"配置"} }],
  ["/guide/deploy.html", { loader: () => import(/* webpackChunkName: "deploy.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/deploy.html.js"), meta: {"title":"部署"} }],
  ["/guide/function.html", { loader: () => import(/* webpackChunkName: "function.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/function.html.js"), meta: {"title":"功能列表"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "getting-started.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"快速上手"} }],
  ["/guide/introduce.html", { loader: () => import(/* webpackChunkName: "introduce.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/introduce.html.js"), meta: {"title":"介绍"} }],
  ["/guide/theme.html", { loader: () => import(/* webpackChunkName: "theme.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/theme.html.js"), meta: {"title":"自定义主题"} }],
  ["/pro-guide/decorate.html", { loader: () => import(/* webpackChunkName: "decorate.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/pro-guide/decorate.html.js"), meta: {"title":"装修"} }],
  ["/pro-guide/deploy.html", { loader: () => import(/* webpackChunkName: "deploy.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/pro-guide/deploy.html.js"), meta: {"title":"部署"} }],
  ["/en/guide/configuration.html", { loader: () => import(/* webpackChunkName: "configuration.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/configuration.html.js"), meta: {"title":"Configuration"} }],
  ["/en/guide/deploy.html", { loader: () => import(/* webpackChunkName: "deploy.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/deploy.html.js"), meta: {"title":"Deploy"} }],
  ["/en/guide/function.html", { loader: () => import(/* webpackChunkName: "function.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/function.html.js"), meta: {"title":"List of features"} }],
  ["/en/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "getting-started.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/getting-started.html.js"), meta: {"title":"EasyStart"} }],
  ["/en/guide/introduce.html", { loader: () => import(/* webpackChunkName: "introduce.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/introduce.html.js"), meta: {"title":"Introduce"} }],
  ["/en/guide/theme.html", { loader: () => import(/* webpackChunkName: "theme.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/theme.html.js"), meta: {"title":"Custom theme"} }],
  ["/en/pro-guide/decorate.html", { loader: () => import(/* webpackChunkName: "decorate.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/pro-guide/decorate.html.js"), meta: {"title":"Fitment"} }],
  ["/en/pro-guide/deploy.html", { loader: () => import(/* webpackChunkName: "deploy.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/pro-guide/deploy.html.js"), meta: {"title":"Deploy"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
