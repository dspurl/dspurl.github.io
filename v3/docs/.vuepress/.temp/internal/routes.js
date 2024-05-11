export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/en/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/index.html.js"), meta: {"title":"Home page"} }],
  ["/guide/configuration.html", { loader: () => import(/* webpackChunkName: "configuration.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/configuration.html.js"), meta: {"title":"配置"} }],
  ["/guide/deploy.html", { loader: () => import(/* webpackChunkName: "deploy.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/deploy.html.js"), meta: {"title":"部署"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "getting-started.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"快速上手"} }],
  ["/guide/introduce.html", { loader: () => import(/* webpackChunkName: "introduce.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/introduce.html.js"), meta: {"title":"介绍"} }],
  ["/guide/theme.html", { loader: () => import(/* webpackChunkName: "theme.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/guide/theme.html.js"), meta: {"title":"自定义主题"} }],
  ["/en/guide/configuration.html", { loader: () => import(/* webpackChunkName: "configuration.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/configuration.html.js"), meta: {"title":"Configuration"} }],
  ["/en/guide/deploy.html", { loader: () => import(/* webpackChunkName: "deploy.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/deploy.html.js"), meta: {"title":"Deploy"} }],
  ["/en/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "getting-started.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/getting-started.html.js"), meta: {"title":"EasyStart"} }],
  ["/en/guide/introduce.html", { loader: () => import(/* webpackChunkName: "introduce.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/introduce.html.js"), meta: {"title":"Introduce"} }],
  ["/en/guide/theme.html", { loader: () => import(/* webpackChunkName: "theme.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/en/guide/theme.html.js"), meta: {"title":"Custom theme"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/www/dspurl.github.io/v3/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
