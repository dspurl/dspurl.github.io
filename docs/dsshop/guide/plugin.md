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
│   │   ├── plugin  //插件资源
│   │   └── requests    //表单验证资源
│   ├── database    //数据表资源
│   ├── uniApp  //uni-app资源
│   │   ├── api  //app api
│   │   ├── components    //app组件
│   │   └── pages    //app模板
│   ├── dswjcms.json //插件配置
│   ├── routes.json //路由配置
└── dswjcms.json    //本地插件配置

```
### `dswjcms.json`
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
#### `coupon/dswjcms.json`
- 这里的dswjcms.json是 `coupon`插件目录下的配置文件
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
  "uniApp": ""  // APP模板路由，将会自动添加到 trade/Dsshop/pages.json里面
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