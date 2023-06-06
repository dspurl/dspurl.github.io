(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{419:function(s,a,n){"use strict";n.r(a);var t=n(58),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),n("blockquote",[n("p",[s._v("因为项目涉及多个终端，推荐分四个子域名进行部署：api(放置laravel项目)、h5(放置h5项目)、admin（放置后台项目）、www（放置nuxt项目）；当然也可以全部部署在www下，但需要自行配置nginx")])]),s._v(" "),n("h2",{attrs:{id:"基于轻量应用服务器docker-ce版"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于轻量应用服务器docker-ce版"}},[s._v("#")]),s._v(" 基于轻量应用服务器Docker CE版")]),s._v(" "),n("blockquote",[n("p",[s._v("该安装方式为已本地调试完成，需要搭建到服务器\n该方法也适用于其它服务器搭建，需要自行安装docker ce\n购买服务器后，用xshell连接")])]),s._v(" "),n("h3",{attrs:{id:"单应用部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单应用部署"}},[s._v("#")]),s._v(" 单应用部署")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装git")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看git是否安装成功 git --version")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装docker-compose（请不要用docker compose2及以上版本）")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-'),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("-"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" -o /usr/local/bin/docker-compose\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" -v\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建应用目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" www\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" www\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传本地dsshop项目下的api目录（如果文件太大，不要把vendor上传，然后上传后再composer install），并解压重命名为dsshop")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" dsshop/public\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将后台和h5打包好的文件分别放到api/public下的admin和h5目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" web\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并将本地网站项目打包好的.nuxt nuxt.config.js package.json package-lock.json dsshop.config.js static node_modules(如果文件太大，可不上传，在服务端npm i进行安装)上传到web目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装环境")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回到dsshop根目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up -d\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将数据库上传到服务器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 资源迁移到服务器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" php "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\nphp artisan resource:migration http://dsshop.test\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# php artisan generate:sql pure")]),s._v("\nphp artisan storage:link\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给storage777权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" storage/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问IP、IP/admin、IP/h5，如果都能正常访问，API、后台、H5就搭建完成了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启路由缓存")]),s._v("\nphp artisan route:cache\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除缓存")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#php artisan route:clear")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启配置缓存")]),s._v("\nphp artisan config:cache\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 消除缓存")]),s._v("\nphp artisan config:clear\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搭建网站")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" web "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" start\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制对应地址，如http://172.18.0.3:3005")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ctrl+c退出")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开./docker/nginx/conf.d/default.conf找到如下代码，把地址换成自己的")]),s._v("\nlocation ~ ^/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("api"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("storage"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("h5"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("admin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("oauth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        try_files "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.php"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$is_args")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$args")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_redirect off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header Host               "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header X-Real-IP          "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header X-Forwarded-For    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_set_header X-Forwarded-Proto  "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_read_timeout          1m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_connect_timeout       1m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        proxy_pass                          http://172.18.0.3:3005"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启nginx容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" restart nginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问首页，看是否能显示网站信息，之后可以将web/static当网站根目录进行操作即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" web "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将pm2system.config.js的项目名改成对应的项目名，#然后上传到项目根目录")]),s._v("\npm2 start dsshop.config.js\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pm2 list // pm2列表")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自动启动")]),s._v("\npm2 save\npm2 startup\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启队列和定时任务")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改/docker/supervisor/conf.d目录下的dsshop-scheduler.conf.example(定时任务)和dsshop-worker.conf.example(队列)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一般不需要修改，直接将这两个文件名的.example去除")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入php容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" php "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新supervisor")]),s._v("\nsupervisorctl update\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有进程的状态")]),s._v("\nsupervisorctl status\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br")])]),n("h3",{attrs:{id:"多应用部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#多应用部署"}},[s._v("#")]),s._v(" 多应用部署")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目根据单应用部署处理，在安装docker-compose的时候按照多应用部署处理即可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将项目根目录下的dsdocker上传到服务器根目录下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" dsdocker\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up -d\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要注意的是，多应用部署后php和web容器对应的是www根目录，所以需要进入到项目下再去执行")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"rset-api部署-laravel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rset-api部署-laravel"}},[s._v("#")]),s._v(" RSET API部署(laravel)")]),s._v(" "),n("ul",[n("li",[s._v("参考 "),n("a",{attrs:{href:"https://learnku.com/docs/laravel/7.x/deployment/7452",title:"Laravel部署",target:"_blank",rel:"noopener noreferrer"}},[s._v("Laravel部署"),n("OutboundLink")],1)])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("php artisan storage:link\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nphp artisan view:cache\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("ul",[n("li",[s._v("以下配置不修改不引响正常使用，修改后可提高网站安全性")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("PROJECT_KEY "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置前端密钥，可通过php artisan key:generate生成机制生成密钥，也可以自定义")]),s._v("\nAPP_KEY "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重置APP_KEY密钥")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"资源路径迁移"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#资源路径迁移"}},[s._v("#")]),s._v(" 资源路径迁移")]),s._v(" "),n("ul",[n("li",[s._v("如果需要将本地的资源路径一键替换成线上路径的话，请执行以下代码")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("php artisan resource:migration\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可自定义域名")]),s._v("\nphp artisan resource:migration http://dsshop.text\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[s._v("#")]),s._v(" 队列")]),s._v(" "),n("ul",[n("li",[s._v("可不开启，开启需要修改代码")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 终端运行")]),s._v("\nphp artisan queue:work\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启邮件相关的队列功能")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 邮件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 普通邮件发送")]),s._v("\nMail::to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),s._v("-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("email"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("new VerificationCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$code")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 支持队列的邮件发送")]),s._v("\nMail::to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),s._v("-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("email"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("queue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("new VerificationCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$code")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 通知相关")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### api\\app\\Notifications\\InvoicePaid.php")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### 把注释掉的代码恢复，并屏蔽class InvoicePaid extends Notification")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"定时任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[s._v("#")]),s._v(" 定时任务")]),s._v(" "),n("ul",[n("li",[s._v("定时任务涉及linux(这里拿宝塔为例)和laravel")]),s._v(" "),n("li",[s._v("进入宝塔-计划任务-添加计划任务，按下图配置\n"),n("img",{attrs:{src:"/image/14.png",alt:""}})])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("/www/server/php/72/bin/php /www/wwwroot/项目目录/artisan schedule:run "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /dev/null "),n("span",{pre:!0,attrs:{class:"token operator"}},[n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),n("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("然后就不用去管了，以后有什么定时任务，直接在 "),n("code",[s._v("api/app/Console/Kernel.php")]),s._v("添加即可，更多参考: "),n("a",{attrs:{href:"https://learnku.com/docs/laravel/7.x/scheduling/7492",title:"任务调度",target:"_blank",rel:"noopener noreferrer"}},[s._v("任务调度"),n("OutboundLink")],1)])]),s._v(" "),n("h3",{attrs:{id:"使用supervisor进程守护监控"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用supervisor进程守护监控"}},[s._v("#")]),s._v(" 使用supervisor进程守护监控")]),s._v(" "),n("ul",[n("li",[s._v("使用supervisor进程守护监控来管理你的队列和定时任务")]),s._v(" "),n("li",[s._v("这里基于docker单应用部署搭建的环境来讲，默认已经安装好和自启动了supervisor，其它环境请自行处理")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改/docker/supervisor/conf.d目录下的dsshop-scheduler.conf.example(定时任务)和dsshop-worker.conf.example(队列)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一般不需要修改，直接将这两个文件名的.example去除")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入php容器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" php "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新supervisor")]),s._v("\nsupervisorctl update\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有进程的状态")]),s._v("\nsupervisorctl status\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志路径：/var/log/supervisor/supervisord.log")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"后台搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后台搭建"}},[s._v("#")]),s._v(" 后台搭建")]),s._v(" "),n("ul",[n("li",[s._v("进入admin目录，执行以下代码")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包正式环境")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:prod\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("如果需要打包到指定目录下，如h5")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# admin/config/index.js")]),s._v("\nassetsPublicPath: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/h5/'")]),s._v(",\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("然后将打包好生成的文件上传到服务器，也可以发给别人直接访问（需要对方有本地环境，双击访问index.html无效）")])]),s._v(" "),n("h2",{attrs:{id:"移动端搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#移动端搭建"}},[s._v("#")]),s._v(" 移动端搭建")]),s._v(" "),n("blockquote",[n("p",[s._v("移动端采用uni-app，所以直接使用Huilder X软件即可以完成打包工作")])]),s._v(" "),n("h2",{attrs:{id:"网页端搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网页端搭建"}},[s._v("#")]),s._v(" 网页端搭建")]),s._v(" "),n("blockquote",[n("p",[s._v("网页端采用vue的nuxt框架开发，部署参考以下步骤")])]),s._v(" "),n("ul",[n("li",[s._v("进入"),n("code",[s._v("web")]),s._v("目录")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run build\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将.nuxt nuxt.config.js package.json package-lock.json config上传到服务器")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在服务器端项目根目录安装包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试是否能正常运行，将记录运行后的IP地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" start\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#nginx反向代理")]),s._v("\nserver\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root /www/wwwroot/dsshop.test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            proxy_redirect off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_set_header Host               "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_set_header X-Real-IP          "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_set_header X-Forwarded-For    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_set_header X-Forwarded-Proto  "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scheme")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_read_timeout          1m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_connect_timeout       1m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_pass                          http://上一步的IP地址:3004"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过域名如果能正常访问到项目，即项目配置成功")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#服务器安装pm2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i pm2 -g\npm2 --version\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将pm2system.config.js的项目名改成对应的项目名，#然后上传到项目根目录")]),s._v("\npm2 start dsshopsystem.config.js\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看pm2列表中是否有刚才的进程")]),s._v("\npm2 list\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机自动启动")]),s._v("\npm2 save\npm2 startup\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);