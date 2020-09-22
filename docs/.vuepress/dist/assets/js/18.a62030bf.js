(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{359:function(s,a,n){"use strict";n.r(a);var e=n(42),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[s._v("#")]),s._v(" 插件")]),s._v(" "),n("h2",{attrs:{id:"为什么使用插件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用插件"}},[s._v("#")]),s._v(" 为什么使用插件?")]),s._v(" "),n("ul",[n("li",[s._v("项目涉及前后端，需要让用户按需安装所需功能，插件是最好的方法。")]),s._v(" "),n("li",[s._v("插件的另一个好处就是让Dshop足够的简洁，不会因为自己不断迭代而产生代码冗余，让附加功能以插件的形式，独立维护。")]),s._v(" "),n("li",[s._v("通用性：插件将不仅适用于Dshop，以后我们开源的其它系统，也一样可以使用。")]),s._v(" "),n("li",[s._v("扩展性：如果现有插件不满足您的需求，你完全可以按插件开发方式自己写个插件，也可以在原有的插件基础上进行扩展")]),s._v(" "),n("li",[s._v("去商业化：插件不再收费，和Dshop一样，免费开源且商用")])]),s._v(" "),n("h2",{attrs:{id:"插件使用说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#插件使用说明"}},[s._v("#")]),s._v(" 插件使用说明")]),s._v(" "),n("ul",[n("li",[s._v("Dsshop v1.1.0开始支持插件")]),s._v(" "),n("li",[s._v("插件以独立项目发布，由独立个体维护（前期为Dshop开发者发布和维护）")]),s._v(" "),n("li",[s._v("插件地址：")]),s._v(" "),n("li",[s._v("插件使用一般需要执行命令行、修改代码、分配权限，需要有一定的动手能力，具体的使用方法，每个插件都会有使用说明。")])]),s._v(" "),n("h2",{attrs:{id:"结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[s._v("#")]),s._v(" 结构")]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[s._v(".\n├── coupon\n│   ├── admin //后台资源\n│   │   ├── api  //后台api\n│   │   └── views    //后台模板\n│   ├── api //API资源\n│   │   ├── config  //配置资源\n│   │   ├── console //任务调度资源\n│   │   ├── models  //模型资源\n│   │   ├── plugin  //插件资源\n│   │   └── requests    //表单验证资源\n│   ├── database    //数据表资源\n│   ├── uniApp  //uni-app资源\n│   │   ├── api  //app api\n│   │   ├── components    //app组件\n│   │   └── pages    //app模板\n│   ├── dswjcms.json //插件配置\n│   ├── routes.json //路由配置\n│   ├── example  //示例\n│   │   ├── api  //API模板\n│   └── └── trade    //uni-app模板\n└── dswjcms.json    //本地插件配置\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h3",{attrs:{id:"dswjcms-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dswjcms-json"}},[s._v("#")]),s._v(" "),n("code",[s._v("dswjcms.json")])]),s._v(" "),n("ul",[n("li",[s._v("本地安装的插件列表，用于管理本地插件的安装和更新，格式为")])]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[s._v('[\n  {\n    "name": "coupon", // 插件包名\n    "versions": ""  //插件版本\n    "time":""  //插件安装时间\n  }\n  ...\n]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"coupon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coupon"}},[s._v("#")]),s._v(" "),n("code",[s._v("coupon")])]),s._v(" "),n("ul",[n("li",[s._v("这里以优惠券插件为例，如果你创建的插件，可以自己命名")])]),s._v(" "),n("h4",{attrs:{id:"coupon-dmin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coupon-dmin"}},[s._v("#")]),s._v(" "),n("code",[s._v("coupon/dmin")])]),s._v(" "),n("ul",[n("li",[s._v("插件后台资源，包含 "),n("code",[s._v("api")]),s._v(" "),n("code",[s._v("views")])])]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[s._v("api //后台的api配置\nviews //后台的模板\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"coupon-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coupon-api"}},[s._v("#")]),s._v(" "),n("code",[s._v("coupon/api")])]),s._v(" "),n("ul",[n("li",[s._v("插件API相关资源，也就是php相关资源，包含以下目录，目录下可为空")])]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[s._v("config //配置文件，如果有配置相关的，推荐添加以插件名称命名的配置文件，对应的路径 "),n("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`api/config`")]),s._v("\nconsole //定时任务相关（需要LINUX支持），对应的路径 "),n("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`api/app/Console`")]),s._v("\nmodels  //模型相关资源，对应的路径 "),n("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`api/app/Models/v1`")]),s._v("\nplugin  //插件相关控制器，对应的路径 "),n("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`api/app/Http/Controllers/v1/Plugin`")]),s._v("\nrequests //表单验证相关控制器,对应的路径 "),n("span",{pre:!0,attrs:{class:"token code keyword"}},[s._v("`api/app/Http/Requests/v1`")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"coupon-database"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coupon-database"}},[s._v("#")]),s._v(" "),n("code",[s._v("coupon/database")])]),s._v(" "),n("ul",[n("li",[s._v("数据迁移资源，和插件相关的数据表都会以迁移文件形式存在，需要在终端运行")])]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[s._v("php artisan migrate\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"coupon-uniapp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coupon-uniapp"}},[s._v("#")]),s._v(" "),n("code",[s._v("coupon/uniApp")])]),s._v(" "),n("ul",[n("li",[s._v("uni-app相关资源，该目录下分 "),n("code",[s._v("api")]),s._v(" "),n("code",[s._v("components")]),s._v(" "),n("code",[s._v("pages")]),s._v("三个目录，没有的目录下可为空")])]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[s._v("api //插件和后端通信所需的API文件\ncomponents  //插件在uni-app下的组件（插件必须以组件的形式存在于uni-app，可以理解为vue下的插件）\npages //插件对应的模板\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h4",{attrs:{id:"coupon-dswjcms-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coupon-dswjcms-json"}},[s._v("#")]),s._v(" "),n("code",[s._v("coupon/dswjcms.json")])]),s._v(" "),n("ul",[n("li",[s._v("这里的dswjcms.json是 "),n("code",[s._v("coupon")]),s._v("插件目录下的配置文件")])]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[s._v('{\n   "name": "优惠券",  //插件名称\n   "abbreviation": "coupon",  //插件缩写\n   "describe": "支持创建满减、随机、折扣优惠券",  //插件描述\n   "download": "",  //插件下载地址\n   "url": "",  //插件地址\n   "versions": "0.0.1", //插件版本\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h4",{attrs:{id:"coupon-routes-json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#coupon-routes-json"}},[s._v("#")]),s._v(" "),n("code",[s._v("coupon/routes.json")])]),s._v(" "),n("ul",[n("li",[s._v("路由配置文件，该文件保存了后台、API、uni-app所有涉及到路由配置的地方，格式参考如下")])]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"admin"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 后台API路由，将会自动添加到 api/routes/api.php里面")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"permission"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//后台模板路由，将会自动添加到 admin/src/store/permission.js里面")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"app"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" "')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// APP路由，将会自动添加到 api/routes/api.php里面")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"uniApp"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// APP模板路由，将会自动添加到 trade/Dsshop/pages.json里面")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h4",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" "),n("code",[s._v("example")])]),s._v(" "),n("ul",[n("li",[s._v("演示代码，一般可直接替换到本地代码，目录结构参考dsshop目录结构")])])])}),[],!1,null,null,null);a.default=t.exports}}]);