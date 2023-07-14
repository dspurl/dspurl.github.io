# 工具库
> 一些实用方法或类库
### 前后端排序转换
#### `sortFormatConversion`
- 前台一般排序会给后端传`+id`、`-id`、`id`格式
- 后台可以通过以下方法实现排序功能
``` php
if($request->has('sort')){
    $sortFormatConversion = sortFormatConversion($request->sort);
    $q->orderBy($sortFormatConversion[0],$sortFormatConversion[1]);
}
```
### 用户日志
```php
Event(new UserLogEvent($user, $request));
```
### 返回错误信息
```php
// 以异常的形式返回
throw new \Exception('没有生成所需数据库迁移文件', Code::CODE_INEXISTENCE);
// 以JSON的形式返回
return resReturn(0, '参数错误', Code::CODE_PARAMETER_WRONG);
```
### 返回json数据
#### `resReturn`
```php
# 返回正确数据
return resReturn(1, '更新成功');
# 返回错误数据
return resReturn(0, '请设置产品规格', Code::CODE_PARAMETER_WRONG);
# 返回异常错误数据
throw new \Exception('微信支付失败，请稍后再试！',Code::CODE_PARAMETER_WRONG);
```
### 获取用户ID（用户信息）
```php
// 前提是该路由引入用户登录验证中间件
$user_id = auth('web')->user()->id; // 用户ID
```

### 在没有登录验证的方法中获取登录的用户信息
```php
use Illuminate\Support\Facades\Auth;
if(Auth::check()){  // 验证是否走登录验证中间件
    $user_id = auth('web')->user()->id; // 用户ID
}
```
### 验证某个插件是否已安装
```php
(new Plugin())->has('coupon')
```
### 导入数据表
> 注意sql格式，只能存在数据，不能存在结构
> 格式:php artisan generate:sql [数据表名]
> 将sql放到storage\app下

```shell
# 默认安装demo
php artisan generate:sql
# 纯净数据
php artisan generate:sql pure
# 自定义安装
php artisan generate:sql dsshop
```
### 导出excel
> 扩展文档： https://docs.laravel-excel.com/3.1/exports/
>
> 以下为DSSHOP定制说明
```
# 为每一行设置样式

```