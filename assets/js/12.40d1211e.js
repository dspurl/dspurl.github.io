(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{364:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[a._v("#")]),a._v(" 部署")]),a._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),t("h3",{attrs:{id:"宝塔安装（以linux为例）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#宝塔安装（以linux为例）"}},[a._v("#")]),a._v(" 宝塔安装（以LINUX为例）")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bt.cn/bbs/thread-19376-1-1.html",title:"宝塔官网",target:"_blank",rel:"noopener noreferrer"}},[a._v("宝塔Linux面板安装教程"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("安装后，需要在软件管理中添加以下软件（未写版本的，安装最新版本）")]),a._v(" "),t("li",[a._v("Nginx、PHP-7.4、phpMyAdmin、Redis")]),a._v(" "),t("li",[a._v("添加站点，参考"),t("a",{attrs:{href:"https://www.kancloud.cn/chudong/bt2017/424221",title:"网站管理",target:"_blank",rel:"noopener noreferrer"}},[a._v("网站管理"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"rset-api部署-laravel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rset-api部署-laravel"}},[a._v("#")]),a._v(" RSET API部署(laravel)")]),a._v(" "),t("ul",[t("li",[a._v("参考 "),t("a",{attrs:{href:"https://learnku.com/docs/laravel/7.x/deployment/7452",title:"Laravel部署",target:"_blank",rel:"noopener noreferrer"}},[a._v("Laravel部署"),t("OutboundLink")],1)])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("php artisan storage:link\ncomposer "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\nphp artisan view:cache\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h2",{attrs:{id:"后台搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后台搭建"}},[a._v("#")]),a._v(" 后台搭建")]),a._v(" "),t("ul",[t("li",[a._v("进入admin目录，执行以下代码")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打包正式环境")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run build:prod\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("如果需要打包到指定目录下，如h5")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# admin/config/index.js")]),a._v("\nassetsPublicPath: "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/h5/'")]),a._v(",\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("然后将打包好生成的文件上传到服务器，也可以发给别人直接访问（需要对方有本地环境，双击访问index.html无效）")])])])}),[],!1,null,null,null);s.default=r.exports}}]);