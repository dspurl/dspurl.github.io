---
sidebarDepth: 2
---
# 目录结构
```markdown
.
├── admin
│   ├── build
│   ├── config
│   │   ├── dev.env.js
│   │   ├── index.js
│   │   ├── prod.env.js
│   ├── node_modules
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── directive
│   │   ├── filters
│   │   ├── icons
│   │   ├── lang
│   │   ├── router
│   │   ├── store
│   │   ├── styles
│   │   ├── utils
│   │   ├── vendor
│   │   ├── views
│   │   ├── App.vue
│   │   ├── errorLog.js
│   │   ├── errorLog.js
│   │   ├── main.js
│   │   └── permission.js
│   ├── static
│   ├── index.html
│   ├── favicon.ico
│   └── package.json
│ 
├── api
│   ├── app
│   │   ├── Broadcasting
│   │   ├── Console
│   │   ├── Events
│   │   ├── Exceptions
│   │   ├── Http
│   │   |     ├── common
│   │   |     ├── Console
│   │   |     ├── Exceptions
│   │   |     ├── Helpers
│   │   |     ├── Http
│   │   |     ├── Jobs
│   │   |     ├── Models
│   │   |     ├── Providers
│   │   |     └── Code.php
│   │   ├── Jobs
│   │   ├── Listeners
│   │   ├── Mail
│   │   ├── Notifications
│   │   ├── Policies
│   │   ├── Providers
│   │   └── Rules
│   │ 
│   ├── bootstrap
│   ├── config
│   ├── database
│   ├── public
│   ├── resources
│   ├── routes
│   ├── storage
│   ├── tests
│   ├── vendor
│   ├── .env
│   ├── .env.prod
│   ├── artisan
│   ├── composer.json
│   ├── package.json
│   ├── phpunit.xml
│   └── server.php
├── `template` (**可选的**)
├── client
├── plugin
│   ├── dswjcms.json
├── LICENSE
└── README.md

```
> 以上目录不会一一说明，只会介绍常用的目录
> 
> api目录结构请参考laravel
> 
> admin目录结构请参考vue和vue-element-admin

## admin目录
- `build` 项目构建(webpack)相关代码
- `config` 配置目录，包括端口号等。我们初学可以使用默认的。
- `node_modules` npm 加载的项目依赖模块
- `src` 要开发的目录，基本上要做的事情都在这个目录里
- `static` 静态资源目录，如图片、字体等。
- `.xxxx文件` 这些是一些配置文件，包括语法配置，git配置等。
- `index.html` 首页入口文件，你可以添加一些 meta 信息或统计代码啥的。
- `package.json` 项目配置文件。
- `README.md` 项目的说明文档，markdown 格式
### config目录
- `dev.env.js` 本地环境下的配置信息
```javascript
BASE_API: ''    //RSET API地址
```
- `prod.env.js` 正式下的配置信息
```javascript
BASE_API: ''    //RSET API地址
```
### src目录
- `api` RSET API接口地址都在这定义，可为每个模块单独配置不同的RSET API接口地址
- `components` 组件，一些共用的组件可以定义在这，方便重复使用
- `icons` svg图标
- `lang` 语言文件
- `store\module\permission.js` 后台模板开发时需要配置的权限 
- `views` 模板目录
## api目录
- `app` 目录包含应用程序的核心代码。你应用中几乎所有的类都应该放在这里。稍后我们会更深入地了解这个目录的细节。
- `Bootstrap` bootstrap 目录包含引导框架的 app.php 文件。该目录还包含了一个 cache 目录， cache 目录下存放着框架生成的用来提升性能的文件，比如路由和服务缓存文件。
- `Config` config 目录，顾名思义，包含应用程序所有的配置文件。我们鼓励你通读这些文件，以便帮助你熟悉所有可用的选项。
- `Database` database 目录包含数据填充和迁移文件以及模型工厂类。你还可以把它作为 SQLite 数据库存放目录。
- `Public` public 目录包含了入口文件 index.php ，它是进入应用程序的所有请求的入口点。此目录还包含了一些你的资源文件（如图片、JavaScript 和 CSS）。
- `Resources` resources 目录包含了视图和未编译的资源文件（如 LESS、SASS 或 JavaScript）。此目录还包含你所有的语言文件。
- `Routes` routes 目录包含了应用的所有路由定义，Laravel 默认包含了几个路由文件：web.php、api.php、 console.php 和 channels.php。
- `Storage` storage 目录包含编译后的 Blade 模板、session 会话生成的文件、缓存文件以及框架生成的其他文件。这个目录被细分成 app 、 framework 和 logs 三个子目录。app 目录可以用来存储应用生成的任何文件。 framework 目录用来存储框架生成的文件和缓存。最后， logs 目录包含应用的日志文件。
- `Vendor` vendor 目录包含你所有的 Composer 依赖包。
### app目录
- `common` 公共类
- `Console` 任务调度
- `Helpers/functions.php` 公共方法
- `Http` Http 目录包含你的控制器，中间件和表单请求。处理进入应用程序请求的所有逻辑几乎都放置在此目录。
- `Models` 模型
- `Providers` Providers 目录包含应用程序的所有 服务提供者。服务提供者通过在服务容器中绑定服务引导应用程序，注册事件或者准备为应用程序即将到来的请求执行其它任何任务。
#### Http目录
- `Controllers` 控制器
- `Middleware` 中间件
- `Requests` 表单验证
## template目录
- `api` 后台RSET API代码模板，提供表单验证、控制器、模型参考文件
- `vue` 后台模板
## client目录
- `Dsshop` APP目录，直接用HBuilder X导入该目录，就可以进行编辑，一套代码编到10个平台，现项目只对h5和微信小程序进行了测试
## plugin目录
- `plugin`目录为插件目录，DSSHOP除必要的商城功能外，其它的功能都会以插件的形式发布，除了官方发布插件外，你也可以写自己的插件，插件的好处在于：可扩展性、可移植性、规范性、易维护、易升级