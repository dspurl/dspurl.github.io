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