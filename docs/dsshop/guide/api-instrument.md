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