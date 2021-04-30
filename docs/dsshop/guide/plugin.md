# 插件
## 为什么使用插件?
- 去耦合

解耦后的插件虽然在安装的时候会有些繁琐，但更容易升级、个性化定制

- 通用性

插件将尽可能的往通用性设计，即插件的设计不会只针对商城

- 可测试

插件将自带测试用例，用于测试插件是否安装成功
## 常见问题
- 为什么不采用自动化部署？

自动化必然存在高耦合，可维护性差的问题，不利于项目发展

- 插件是否收费？

插件是否收费由插件开发者决定，一般可直接下载的均可免费使用

- 为什么我的观察者没有被执行？

请确保正确配置了`$route`，只有存在于`$route`的路由，才会执行当前的观察者；还有一种可能就是你的监听并不是http请求，而是控制器触发（调度任务），那么你需要在判断中加入控制器的判断代码，参考下面的示例代码。

- 为什么我的观察者被执行了多次？

往往被执行多次是因为你并没有做到很好的约束，请加大限制条件，确保只在需要执行的步骤中触发。

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
├── coupon
│   ├── admin //后台资源
│   │   ├── api  //后台api
│   │   └── views    //后台模板
│   ├── api //API资源
│   │   ├── config  //配置资源
│   │   ├── console //任务调度资源
│   │   ├── models  //模型资源
│   │   ├── observers  //观察者资源
│   │   ├── plugin  //插件资源
│   │   │   ├── admin //后台API
│   │   │   ├── client //客户端API
│   │   └── requests    //表单验证资源
│   ├── database    //数据表资源
│   ├── uniApp  //uni-app资源
│   │   ├── api  //app api
│   │   ├── components    //app组件
│   │   └── pages    //app模板
│   ├── dsshop.json //插件配置
│   ├── routes.json //路由配置
└── dsshop.json    //本地插件配置

```
### `dsshop.json`
- 本地安装的插件列表，用于管理本地插件的安装和更新，格式为
 ```markdown
 [
   {
     "name": "coupon", // 插件包名
     "versions": "",  //插件版本
     "is_delete": "",  //是否删除
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
    "describe": "支持创建满减、随机、折扣优惠券",  //插件描述
    "download": "",  //插件下载地址
    "url": "",  //插件地址
    "versions": "0.0.1", //插件版本
}
```
#### `coupon/routes.json`
- 路由配置文件，该文件保存了后台、API、uni-app所有涉及到路由配置的地方，格式参考如下
```json
{
  "admin": "",  // 后台API路由，将会自动添加到 api/routes/api.php里面
  "permission": "",  //后台模板路由，将会自动添加到 admin/src/store/permission.js里面
  "app": " ", // APP路由，将会自动添加到 api/routes/api.php里面，这里是需要用户登录权限验证的
  "notValidatedApp": " ", // APP路由，将会自动添加到 api/routes/api.php里面，这里是不需要验证用户登录状态的
  "uniApp": "",  // APP模板路由，将会自动添加到 client/Dsshop/pages.json里面
  "observers": "",  //观察者路由，将会自动添加到 api/app/Providers/AppServiceProvider的boot里面
  "wechatChannel": "",  //微信公众号模板消息 api/app/Channels/WechatChannel.php
}
```
## 插件开发
- 首先请确保你已经了解插件的结构
- 你想开发的插件是无耦合的，且可扩展的
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
## 实战-问答/论坛/博客系统
### 第一步，功能罗列
> DSSHOP核心功能不在这里罗列，这里只罗列需要开发的插件
- 一个帖子支持多个回复，帖子支持点赞、收藏、加精、置顶、屏蔽、访问统计，帖子支持分类，分类支持无限分类，回复支持点赞、回复
- 一个帖子可以设置某个回复或多个回复为答案，答案将置于回复列表之前展示
- 一个帖子可以设置悬赏，悬赏可以为现金，也可以为积分，悬赏的帖子被标为答案时，将会获得悬赏金额，悬赏金额可以设为一个独享，也可以设为多个分享
- 一个帖子可以设置红包，红包可以随机获取，也可以固定值，回答即可获得红包
- 支持提现，可以设置提现最低金额
- 用户发布帖子和回复帖子、设为答案都将获得积分
### 第二步，分析需要的功能模块，哪些是有现成的，哪些是需要修改的，哪些是需要开发的
- 所有功能模块：帖子、回复、点赞、收藏、分类、答案、红包、提现
- 现成模块：无
- 需要二开模块： 回复、分类、收藏
- 需要开发模块： 帖子、点赞、答案、红包、提现、积分
### 第三步，设计大概的表结构，并创建表
```
php artisan make:migration create_posts_table
php artisan make:migration create_likes_table
php artisan make:migration create_red_packets_table
php artisan make:migration create_user_withdraws_table
php artisan make:migration create_user_scores_table
php artisan make:migration create_user_score_logs_table
```
```php
    // CreatePostsTable
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->index()->default(0)->comment('创建用户 id');
            $table->unsignedInteger('category_id')->index()->default(0)->comment('分类id');
            $table->text('content')->nullable()->comment('内容');
            $table->unsignedInteger('price')->default(0)->comment('价格');
            $table->unsignedInteger('post_comment_count')->default(0)->comment('关联评论数');
            $table->unsignedInteger('like_count')->default(0)->comment('关联喜欢数');
            $table->unsignedInteger('visit_count')->default(0)->comment('访问数');
            $table->unsignedInteger('collect_count')->default(0)->comment('关联收藏数');
            $table->unsignedInteger('is_top')->default(0)->comment('是否置顶');
            $table->unsignedInteger('is_essence')->default(0)->comment('是否加精');
            $table->unsignedInteger('is_comment')->default(0)->comment('是否需要回复');
            $table->unsignedInteger('type')->default(0)->comment('类型0帖子1问答2图片3视频4语音5商品');
            $table->unsignedInteger('state')->default(1)->comment('状态1显示2屏蔽');
            $table->unsignedInteger('is_pay')->default(0)->comment('付费方式0不收费1现金2积分');
            $table->timestamp('end_comment_time')->nullable()->comment('最后评论时间');
            $table->timestamps();
            $table->softDeletes();
            $table->charset = 'utf8';
            $table->engine = 'InnoDB';
            $table->collation = 'utf8_general_ci';
            $table->unique('id');
        });
        DB::statement("ALTER TABLE `posts` COMMENT='帖子'");
    }
    // CreateLikesTable
    public function up()
    {
        Schema::create('likes', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->default(0)->index()->comment('用户ID');
            $table->unsignedInteger('model_id')->default(0)->index()->comment('关联模型ID');
            $table->string('model_type',200)->comment('关联的模型');
            $table->timestamps();
            $table->charset = 'utf8';
            $table->engine = 'InnoDB';
            $table->collation = 'utf8_general_ci';
            $table->unique('id');
        });
        DB::statement("ALTER TABLE `likes` COMMENT='喜欢'");
    }
    // CreateRedPacketsTable
    public function up()
    {
        Schema::create('red_packets', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('price')->default(0)->comment('红包价值');
            $table->unsignedInteger('amount')->default(0)->comment('红包数量');
            $table->unsignedTinyInteger('type')->default(0)->comment('红包发放方式0固定金额1随机');
            $table->unsignedInteger('model_id')->index()->default(0)->comment('关联模型ID');
            $table->string('model_type',200)->comment('关联的模型');
            $table->timestamps();
            $table->charset = 'utf8';
            $table->engine = 'InnoDB';
            $table->collation = 'utf8_general_ci';
            $table->unique('id');
        });
        DB::statement("ALTER TABLE `red_packets` COMMENT='红包'");
    }
    // CreateUserWithdrawsTable
    public function up()
    {
        Schema::create('user_withdraws', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->index()->default(0)->comment('提现用户 id');
            $table->unsignedInteger('identification')->comment('交易号');
            $table->unsignedInteger('charge')->default(0)->comment('提现手续费');
            $table->unsignedInteger('actual_amount')->default(0)->comment('实际提现金额');
            $table->unsignedInteger('apply_amount')->default(0)->comment('提现申请金额');
            $table->unsignedTinyInteger('status')->default(0)->comment('提现状态：1待审核2审核通过3审核不通过4待打款5已打款6打款失败');
            $table->string('remark', 255)->default('')->comment('备注或原因');
            $table->unsignedTinyInteger('refunds_status')->default(0)->comment('返款状态，0未返款，1已返款');
            $table->timestamps();
            $table->charset = 'utf8';
            $table->engine = 'InnoDB';
            $table->collation = 'utf8_general_ci';
            $table->unique('id');
        });
        DB::statement("ALTER TABLE `user_withdraws` COMMENT='用户提现'");
    }
    // CreateUserScoresTable
    public function up()
    {
        Schema::create('user_scores', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->index()->default(0)->comment('用户 id');
            $table->unsignedInteger('aggregate_score')->default(0)->comment('累计积分');
            $table->unsignedInteger('usable_score')->default(0)->comment('可用积分');
            $table->timestamps();
        });
        DB::statement("ALTER TABLE `user_scores` COMMENT='用户积分'");
    }
    // CreateUserScoreLogsTable
    public function up()
    {
        Schema::create('user_score_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id')->index()->default(0)->comment('用户 id');
            $table->unsignedInteger('score')->default(0)->comment('操作积分');
            $table->string('remark', 255)->default('')->comment('备注或说明');
            $table->timestamps();
        });
    }
```
### 第四步：分析界面
> 界面分前台和后台，后台这里在写API的时候再去考虑，这里主要分析前台界面
> 这里不对其它基础模块进行分析，只根据业务需求进行界面分析
- 论坛首页、论坛详情页、用户展示页、发帖页、搜索展示页
#### 论坛首页
```vue

```
### 第五步：分析API接口
> API分后台和前台，后台是给管理员操作的，前台是给用户操作的
- 后台功能：分类的添加、编辑、删除；帖子的屏蔽、加精、置顶；提现的审核；
- 前台功能：帖子列表，置顶位、分类、有新的帖子提醒、推荐帖子