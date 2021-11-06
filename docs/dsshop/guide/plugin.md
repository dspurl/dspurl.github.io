# 插件
## 为什么使用插件?
- 去耦合

解耦后的插件虽然在安装的时候会有些繁琐，但更容易升级、个性化定制

- 通用性

插件将尽可能的往通用性设计，即插件的设计不会只针对商城

## 常见问题
- 为什么不采用自动化部署？

自动化必然存在高耦合，可维护性差的问题，不利于项目发展

- 插件是否收费？

插件是否收费由插件开发者决定，一般可直接下载的均可免费使用

- 为什么我的观察者没有被执行？

请确保正确配置了`$route`，只有存在于`$route`的路由，才会执行当前的观察者；还有一种可能就是你的监听并不是http请求，而是控制器触发（调度任务），那么你需要在判断中加入控制器的判断代码，参考下面的示例代码。

- 为什么我的观察者被执行了多次？

往往被执行多次是因为你并没有做到很好的约束，请加大限制条件，确保只在需要执行的步骤中触发。

- 插件开发哪些文件在保存时会被重新生成？

## 观察者模式
> 如果你的插件需要基于其它业务代码或其它插件，那观察者模式是必不可少的，以下会详细介绍如何在插件中使用观察者模式。
> 观察者模型并不提高代码执行效率，反而会有所降低，但它的好处是解耦，提高项目的可扩展可维护性，对于项目的迭代来说是一种很好的解决方案。
- 观察者和模型的关系是多对一，即一个模型可以有多个观察者
- 只有使用模型的save时，观察者才会生效
### 创建观察者
- 首先在`app/Observers`目录下创建观察者，一般先创建一个目录，目录名根据取模型名，如`GoodIndent`，再创建一个`Observers`，命名以实际功能命名，如`IndentFailureStockProcessingObserver`，这个观察者的作用是订单失效库存操作
- 其次就是在`Providers/AppServiceProvider.php`的`boot`方法中，将定义的观察者添加进来，如
```php
public function boot()
{
    \App\Models\v1\GoodIndent::observe(\App\Observers\GoodIndent\IndentFailureStockProcessingObserver::class);
}
```
### 什么时候下需要使用观察者模式
- 当你的代码存在耦合性的时候，就可以将耦合代码拆分成观察者模式
- 当你的插件需要修改项目源代码时，可以使用观察者模式，这样可以确保项目更新后不会引响到自己添加的代码 
### 示例代码
```php
<?php

namespace App\Observers\GoodIndent;

use App\Models\v1\Dhl;
use App\Models\v1\GoodIndent;
use App\Models\v1\User;
use App\Notifications\InvoicePaid;
use Illuminate\Http\Request;

/**
 * finish payment
 * 发货通知
 * Class ShipmentNotificationObserver
 * @package App\Observers\GoodIndent
 */
class ShipmentNotificationObserver
{
    protected $request;
    // 这里配置需要执行该观察者的路由
    protected $route = [
        'admin/indent/shipment'
    ];
    // 是否执行观察者，默认为不执行，只有路由存在于$route时才会触发,并且在非http请求时不会触发
    protected $execute = false;

    public function __construct(Request $request)
    {
        if (!app()->runningInConsole()) {
            $this->request = $request;
            $path = explode("admin", $request->path());
            
            if (count($path) == 2) {
                $name = 'admin' . $path[1];
                // $name = 'admin' . preg_replace("/\/\\d+/",'', $path[1]);
            } else {
                $path = explode("app", $request->path());
                $name = 'app' . $path[1];
                //$name = 'app' . preg_replace("/\/\\d+/",'', $path[1]);
            }
        }
        if (collect($this->route)->contains($name)) {
            $this->execute = true;
        }
    }

    public function updated(GoodIndent $goodIndent)
    {
        // 当通过http请求，并存在于$route配置的路由时才触发,或是控制器触发(Console)
        if (($this->execute || app()->runningInConsole()) && $goodIndent->state == GoodIndent::GOOD_INDENT_STATE_TAKE) {
            
        }
    }
}
```
## 插件使用说明
- Dsshop v1.1.0开始支持插件
- 插件以独立项目发布，由独立个体维护（前期为Dsshop开发者发布和维护）
## 结构
```markdown
.
├── list    //插件
│   ├── coupon
│   │   ├── admin //后台资源
│   │   │   ├── api  //后台api
│   │   │   └── views    //后台模板
│   │   ├── api //API资源
│   │   │   ├── config  //配置资源
│   │   │   ├── console //任务调度资源
│   │   │   ├── models  //模型资源
│   │   │   ├── observers  //观察者资源
│   │   │   ├── plugin  //插件资源
│   │   │   │   ├── admin //后台API
│   │   │   │   ├── client //客户端API
│   │   │   └── requests    //表单验证资源
│   │   ├── database    //数据表资源
│   │   ├── client  //客户端
│   │   │   ├── nuxt-web  //网站
│   │   │   └── uni-app   //app
│   │   ├── dsshop.json //插件配置
│   │   ├── routes.json //路由配置
│   │   ├── diff.json //冲突记录
├── template    //插件生成文件所需的模板
└── dsshop.json    //本地插件配置

```
### `dsshop.json`
- 本地安装的插件列表，用于管理本地插件的安装和更新，格式为
 ```markdown
 [
   {
     "name": "coupon", // 插件包名
     "versions": "",  //插件版本
     "is_delete": "",  //是否卸载
     "time":""  //插件安装时间
   }
   ...
 ]
 ```
### `coupon`
- 这里以优惠券插件为例，如果你创建的插件，可以自己命名

#### `coupon/dmin`
- 插件后台资源，包含 `api` `views`
```markdown
api //后台的api配置
views //后台的模板
```

#### `coupon/api`
- 插件API相关资源，也就是php相关资源，包含以下目录，目录下可为空
```markdown
config //配置文件，如果有配置相关的，推荐添加以插件名称命名的配置文件，对应的路径 `api/config`
console //定时任务相关（需要LINUX支持），对应的路径 `api/app/Console`
models  //模型相关资源，对应的路径 `api/app/Models/v1`
plugin  //插件相关控制器，对应的路径 `api/app/Http/Controllers/v1/Plugin`
requests //表单验证相关控制器,对应的路径 `api/app/Http/Requests/v1`
observers //观察者相关代码，对应的路径 `api/app/Observers`
```
#### `coupon/database`
- 数据迁移资源，和插件相关的数据表都会以迁移文件形式存在，需要在终端运行
```markdown
php artisan migrate
```
#### `coupon/uniApp`
- uni-app相关资源，该目录下分 `api` `components` `pages`三个目录，没有的目录下可为空
```markdown
api //插件和后端通信所需的API文件
components  //插件在uni-app下的组件（插件必须以组件的形式存在于uni-app，可以理解为vue下的插件）
pages //插件对应的模板

```
#### `coupon/dsshop.json`
- 这里的dsshop.json是 `coupon`插件目录下的配置文件
 ```markdown
{
    "name": "优惠券",  //插件名称
    "abbreviation": "coupon",  //插件缩写
    "img": "",  // 插件缩略图
    "describe": "支持创建满减、随机、折扣优惠券",  //插件描述
    "url": "",  //插件地址
    "versions": "0.0.1", //插件版本
    "author": "", //插件作者
    "author_url": "", //作者空间地址
    "portrait": "", //作者头像
    "category": 0, //类型，当前只有插件，故值为0
    "instructions": "", //插件说明，将在下载时自动生成README.md
    "local": 1, //是否本地环境，自己创建的插件会为1
    "publish": 1, //是否已发布，发布后的插件可以安装和卸载
    "state": 0, //状态：0未下载1已下载2已安装3已卸载
}
```
#### `coupon/routes.json`
- 路由配置文件，该文件保存了后台、API、app所有涉及到路由配置的地方，格式参考如下
```json
{
  "admin": "",  // 后台API路由，将会自动添加到 api/routes/api.php里面
  "permission": "",  //后台模板路由，将会自动添加到 admin/src/store/permission.js里面
  "app": " ", // APP路由，将会自动添加到 api/routes/api.php里面，这里是需要用户登录权限验证的
  "notValidatedApp": " ", // APP路由，将会自动添加到 api/routes/api.php里面，这里是不需要验证用户登录状态的
  "observers": "",  //观察者路由，将会自动添加到 api/app/Providers/AppServiceProvider的boot里面
  "wechatChannel": "",  //微信公众号模板消息 api/app/Channels/WechatChannel.php
  "routeLangAdmin":"",   //路由语言包，用于插件获取后台路由所用 api/resources/lang/zn/route.php
  "routeLangClient":"",   //路由语言包，用于插件获取app路由所用 api/resources/lang/zn/route.php
  "relyOn":[],   //依赖的插件
  "relevance":[],   //关联的文件
  "clientTemplate":[],   //关联的客户端模板列表
  "adminTemplate":[],   //关联的后台模板列表
  "packagingJurisdiction":[],   //权限列表
  "db": [], //生成的数据列表
}
```
## 插件开发模式
- 默认每个插件的`publish`分支为插件的开发模式下的代码，如果插件是开源的，都应该提供该分支
- 开发模式下，需要先进行编辑，然后将每个表的“是否重置”勾选，再将“重置路由”勾选，保存后项目将自动添加插件相关文件，通过发行后，自动将插件代码抽离出项目放到插件对应的目录下，再点下载，将插件部分文件打包出来
- 只有在开发模式下允许进行插件的个性化修改，修改后，请根据上面一步有选择性的对修改后的表或文件进行重置操作
- 使用别人的开发模式代码，请不要使用第二步操作，可进行一次插件安装，然后将开发模式下的`dsshop.json`替换，即会自动切换到开发模式
## 插件开发
- 首先请确保你已经了解插件的结构
- 你想开发的插件是无耦合的，且可扩展的
- 插件开发中，如果添加了其它文件，可添加到相关文件
- 插件升级不建议针对之前版本的文件有删除操作，如果涉及到数据表的修改，请用迁移文件的形式进行处理
### 第一步
- 根据自己的想法，开发功能模块，包括且不限于：模型、控制器、验证器、后台模板、uni-app模板、uni-app组件等等
### 第二步：解耦
- 解耦就是将一些和插件有关的代码分离出来，并根据插件开发的结构进行归类（如果是在原有项目添加的代码不需要分离，请先保留）
### 第三步：数据迁移
- 将数据表转为数据迁移代码，如是基于原有表的，也需要转为数据迁移代码
### 第四步：提取权限
- 将插件相关的权限按下表进行填写

|权限名称|API|分组|菜单图标|显示在菜单栏|
| ------------ | ------------ | ------------ | ------------ | ------------ |
| 优惠券       | Coupon       | 工具         | 否           | 是               |
### 第五步：编写示例代码
- 编写示例代码，为了利于维护，可直接截图标注，不要提供耦合示例代码
### 第六步：编写插件安装json
 ```markdown
{
    "name": "优惠券",  //插件名称
    "abbreviation": "coupon",  //插件缩写
    "describe": "支持创建满减、随机、折扣优惠券",  //插件描述
    "download": "",  //插件下载地址
    "url": "",  //插件地址
    "versions": "0.0.1", //插件版本
}
```
### 第七步：测试
- 下载最新版本的dsshop，根据插件安装流程，安装自己的插件，看最终是否可以正常安装、使用和卸载
