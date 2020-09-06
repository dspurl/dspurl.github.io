(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{362:function(a,e,s){"use strict";s.r(e);var t=s(42),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[a._v("#")]),a._v(" 部署")]),a._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),s("h3",{attrs:{id:"宝塔安装（以linux为例）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宝塔安装（以linux为例）"}},[a._v("#")]),a._v(" 宝塔安装（以LINUX为例）")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.bt.cn/bbs/thread-19376-1-1.html",title:"宝塔官网",target:"_blank",rel:"noopener noreferrer"}},[a._v("宝塔Linux面板安装教程"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("安装后，需要在软件管理中添加以下软件（未写版本的，安装最新版本）")]),a._v(" "),s("li",[a._v("Nginx、PHP-7.4、phpMyAdmin、Redis")]),a._v(" "),s("li",[a._v("添加站点，参考"),s("a",{attrs:{href:"https://www.kancloud.cn/chudong/bt2017/424221",title:"网站管理",target:"_blank",rel:"noopener noreferrer"}},[a._v("网站管理"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"rset-api部署-laravel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rset-api部署-laravel"}},[a._v("#")]),a._v(" RSET API部署(laravel)")]),a._v(" "),s("ul",[s("li",[a._v("参考 "),s("a",{attrs:{href:"https://learnku.com/docs/laravel/7.x/deployment/7452",title:"Laravel部署",target:"_blank",rel:"noopener noreferrer"}},[a._v("Laravel部署"),s("OutboundLink")],1)])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("php artisan storage:link\ncomposer "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\nphp artisan view:cache\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"定时任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[a._v("#")]),a._v(" 定时任务")]),a._v(" "),s("ul",[s("li",[a._v("定时任务涉及linux(这里拿宝塔为例)和laravel")]),a._v(" "),s("li",[a._v("进入宝塔-计划任务-添加计划任务，按下图配置\n"),s("img",{attrs:{src:"/14.png",alt:""}})])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("/www/server/php/72/bin/php /www/wwwroot/项目目录/artisan schedule:run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("然后就不用去管了，以后有什么定时任务，直接在 "),s("code",[a._v("api/app/Console/Kernel.php")]),a._v("添加即可，更多参考: "),s("a",{attrs:{href:"https://learnku.com/docs/laravel/7.x/scheduling/7492",title:"任务调度",target:"_blank",rel:"noopener noreferrer"}},[a._v("任务调度"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"后台搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台搭建"}},[a._v("#")]),a._v(" 后台搭建")]),a._v(" "),s("ul",[s("li",[a._v("进入admin目录，执行以下代码")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 打包正式环境")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run build:prod\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ul",[s("li",[a._v("如果需要打包到指定目录下，如h5")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# admin/config/index.js")]),a._v("\nassetsPublicPath: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/h5/'")]),a._v(",\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ul",[s("li",[a._v("然后将打包好生成的文件上传到服务器，也可以发给别人直接访问（需要对方有本地环境，双击访问index.html无效）")])])])}),[],!1,null,null,null);e.default=r.exports}}]);