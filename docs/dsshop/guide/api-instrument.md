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
```
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