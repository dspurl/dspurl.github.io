(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{362:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),t("h2",{attrs:{id:"常用开发工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用开发工具"}},[s._v("#")]),s._v(" 常用开发工具")]),s._v(" "),t("ul",[t("li",[s._v("window10系统")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://learnku.com/docs/laravel/7.x/homestead/7450",title:"Laravel Homestead",target:"_blank",rel:"noopener noreferrer"}},[s._v("Laravel Homestead(免费)"),t("OutboundLink")],1),s._v(" 为了快速搭建window10下的linux+laravel环境（当然你也可以用phpStudy，这里使用linux虚拟机，为的是熟悉linux的命令行，你可以使用xshell像连接服务器的方式连接本地的linux服务器）")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.jetbrains.com/phpstorm/",title:"phpStorm编辑器",target:"_blank",rel:"noopener noreferrer"}},[s._v("phpStorm编辑器"),t("OutboundLink")],1),s._v("(收费)下载后，需要安装插件（"),t("a",{attrs:{href:"https://www.jianshu.com/p/7d3158fa33b7",title:"laravel相关插件",target:"_blank",rel:"noopener noreferrer"}},[s._v("laravel相关插件"),t("OutboundLink")],1),s._v("、"),t("a",{attrs:{href:"https://www.jianshu.com/p/051bb0109d70",title:"VUE相关插件",target:"_blank",rel:"noopener noreferrer"}},[s._v("VUE相关插件"),t("OutboundLink")],1),s._v("）")]),s._v(" "),t("li",[s._v("Windows PowerShell(window10自带的shell工具，在需要使用的目录，shift+右击就可以找到)")]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.xshellcn.com/xiazai.html",title:"Xshell+Xftp连接linux服务器工具",target:"_blank",rel:"noopener noreferrer"}},[s._v("Xshell+Xftp连接linux服务器工具"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://dcloud.io/hbuilderx.html",title:"HBuilder x 用来开发小程序端",target:"_blank",rel:"noopener noreferrer"}},[s._v("HBuilder x 用来开发小程序端"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.postman.com/",title:"Postman api接口测试工具",target:"_blank",rel:"noopener noreferrer"}},[s._v("Postman api接口测试工具"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.google.cn/chrome/",title:"Google Chrome",target:"_blank",rel:"noopener noreferrer"}},[s._v("Google Chrome"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),t("p",[s._v("如果你的电脑支持安装docker的话，推荐第二种安装方法")]),s._v(" "),t("h2",{attrs:{id:"一-基于homestead安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-基于homestead安装"}},[s._v("#")]),s._v(" 一.基于Homestead安装")]),s._v(" "),t("p",[s._v("参考："),t("a",{attrs:{href:"https://learnku.com/docs/laravel/7.x/homestead/7450",title:"Laravel Homestead",target:"_blank",rel:"noopener noreferrer"}},[s._v("Laravel Homestead"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"dsshop使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dsshop使用"}},[s._v("#")]),s._v(" DSSHOP使用")]),s._v(" "),t("ul",[t("li",[s._v("下载"),t("a",{attrs:{href:"https://github.com/dspurl/dsshop",title:"dsshop",target:"_blank",rel:"noopener noreferrer"}},[s._v("dsshop"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[s._v("git clone https://github.com/dspurl/dsshop.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"dsshop后端代码部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dsshop后端代码部署"}},[s._v("#")]),s._v(" DSSHOP后端代码部署")]),s._v(" "),t("ul",[t("li",[s._v("进入api目录")]),s._v(" "),t("li",[s._v("安装"),t("a",{attrs:{href:"https://www.runoob.com/w3cnote/composer-install-and-usage.html",title:"composer",target:"_blank",rel:"noopener noreferrer"}},[s._v("composer"),t("OutboundLink")],1),s._v(" 建议切换到中国镜像，不然下载会比较慢")]),s._v(" "),t("li",[s._v("安装dsshop依赖包")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./api\ncomposer "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改.env.dev为.env")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加数据库信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_CONNECTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_DATABASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("表名\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_USERNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("用户名\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("密码\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置redis(需要事先装redis服务端)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'端口'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_DB")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_CACHE_DB")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\nphp artisan migrate\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载demo数据(demo和pure二选一)")]),s._v("\nphp artisan generate:demo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载纯净数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# php artisan generate:pure")]),s._v("\nphp artisan storage:link\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成APP_KEY")]),s._v("\nphp artisan key:generate\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成oauth文件")]),s._v("\nphp artisan passport:keys\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建密码授权客户端")]),s._v("\nphp artisan passport:client --password\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择`admins`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改.env，添加OAuth认证信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSPORT_CLIENT_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"生成的Client ID"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSPORT_CLIENT_SECRET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"生成的 Client secret"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要安装PhpRedis")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考：https://github.com/dspurl/dsshop/pull/84")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("ul",[t("li",[s._v("访问项目对应的域名，如果正常显示页面，说明搭建成功了")])]),s._v(" "),t("h3",{attrs:{id:"dsshop前端代码部署-后台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dsshop前端代码部署-后台"}},[s._v("#")]),s._v(" DSSHOP前端代码部署(后台)")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/admin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不要在linux下执行，会报错，推荐windows")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#admin/config/dev.env.js修改自己的api地址")]),s._v("\nBASE_API: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"http://dsshop.com/api/v1/admin/\"'")]),s._v(",\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ul",[t("li",[s._v("浏览器默认会打开，然后登录进去，能正常访问各各页面，说明后台和后端已经搭建成功")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 默认后台账号、密码\nadmin\nadmin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"dsshop前端代码部署-h5端、小程序端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dsshop前端代码部署-h5端、小程序端"}},[s._v("#")]),s._v(" DSSHOP前端代码部署(H5端、小程序端)")]),s._v(" "),t("ul",[t("li",[s._v("先安装"),t("a",{attrs:{href:"https://nodejs.org/en/",title:"nodejs",target:"_blank",rel:"noopener noreferrer"}},[s._v("nodejs"),t("OutboundLink")],1),s._v("和"),t("a",{attrs:{href:"https://dcloud.io/hbuilderx.html",title:"HBuilder x 用来开发小程序端",target:"_blank",rel:"noopener noreferrer"}},[s._v("HBuilder x 用来开发小程序端"),t("OutboundLink")],1)])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/trade/Dsshop\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HBuilder X导入trade/Dsshop目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# trade/Dsshop/utils/config.js修改服务器地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改`BaseURL`为API访问地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改`secret`为API密钥'API的.env中的APP_KEY'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HBuilder X可以通过浏览器、微信小程序运行项目，也可以直接发布项目，但需要配置账号，具体请参考HBuilder X")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"二-基于laradock安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-基于laradock安装"}},[s._v("#")]),s._v(" 二. 基于Laradock安装")]),s._v(" "),t("h3",{attrs:{id:"安装laradock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装laradock"}},[s._v("#")]),s._v(" "),t("a",{attrs:{href:"https://laradock.io/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装Laradock"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("window 安装docker.exe")]),s._v(" "),t("p",[s._v("下载Laradock仓库")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/laradock/laradock.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("下载image并生成container启动, 这一步最好换成国内源，需要一些时间安装")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" laradock\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改.env文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("APP_CODE_PATH_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx  //在这个目录里修改Nginx配置\ndocker-compose up -d nginx php-fpm mysql redis\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("https://hub-mirror.c.163.com\n"),t("img",{attrs:{src:"/image/18.png",alt:""}})]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("  //查看安装结果，注意Nginx端口映射\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"/image/15.png",alt:""}})]),s._v(" "),t("p",[s._v("进入container(后续操作会用到)")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker-compose "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" workspace "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("  //Linux or Macos\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("workspace-container-id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("  //windows\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"安装dsshop管理端-后台代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装dsshop管理端-后台代码"}},[s._v("#")]),s._v(" 安装DSSHOP管理端(后台代码)")]),s._v(" "),t("p",[s._v("在Laradock同级目录下面")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/dspurl/dsshop.git\ndocker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it laradock_workspace_1 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("  //进入container\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" dsshop/api\ncomposer "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改.env.dev为.env")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加数据库信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_CONNECTION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mysql //填127.0.0.1会报找不到IP\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_DATABASE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("表名\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_USERNAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("用户名\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DB_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("密码\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置redis(需要事先装redis服务端)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_HOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("redis //填127.0.0.1会报找不到IP\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("null\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_PORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_DB")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("REDIS_CACHE_DB")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\nphp artisan migrate\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载demo数据(demo和pure二选一)")]),s._v("\nphp artisan generate:demo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载纯净数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# php artisan generate:pure")]),s._v("\nphp artisan storage:link\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成APP_KEY")]),s._v("\nphp artisan key:generate\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成oauth文件")]),s._v("\nphp artisan passport:keys\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建密码授权客户端")]),s._v("\nphp artisan passport:client --password\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择`admins`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改.env，添加OAuth认证信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSPORT_CLIENT_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"生成的Client ID"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSPORT_CLIENT_SECRET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"生成的 Client secret"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br")])]),t("p",[s._v("修改windows的hosts文件")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 dsshop.test\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后访问浏览器访问dsshop.test:端口，看是否能够访问Laravel /路径")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("//laradock/nginx配置了一个88端口映射指向dsshop/api/public 目录\nserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("88")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    listen "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":80"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name laravel.test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root /var/www/dsshop/api/public"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    ····\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("img",{attrs:{src:"/image/19.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"安装dsshop管理端-前端代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装dsshop管理端-前端代码"}},[s._v("#")]),s._v(" 安装DSSHOP管理端(前端代码)")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/admin\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不要在linux下执行，会报错，推荐windows")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#admin/config/dev.env.js or dev.prod.js修改自己的api地址")]),s._v("\nBASE_API: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"http://172.27.16.1/api/v1/admin/\"'")]),s._v(",  //172.27.16.1是window主机的局域网IP\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev  \n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build:prod  //对应 dev.prod.js\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认后台账号、密码")]),s._v("\nadmin\nadmin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"小程序代码本地展示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小程序代码本地展示"}},[s._v("#")]),s._v(" 小程序代码本地展示")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/trade/Dsshop\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HBuilder X导入trade/Dsshop目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# trade/Dsshop/utils/config.js修改服务器地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改`BaseURL`为API访问地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改`secret`为API密钥'API的.env中的APP_KEY'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HBuilder X可以通过浏览器、微信小程序运行项目，也可以直接发布项目，但需要配置账号，具体请参考HBuilder X")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"运行小程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行小程序"}},[s._v("#")]),s._v(" 运行小程序")]),s._v(" "),t("p",[s._v("需要安装sass的插件，然后HBuilder会自动开启微信开发工具，代码会转为微信小程序的代码\n"),t("img",{attrs:{src:"/image/16.png",alt:""}}),s._v(" "),t("img",{attrs:{src:"/image/17.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"uni-app介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uni-app介绍"}},[s._v("#")]),s._v(" uni-app介绍")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://uniapp.dcloud.io/quickstart",title:"uni-app",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://uniapp.dcloud.io/quickstart"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);