# 命名规范
> 项目采用驼峰命名法规范命名
> 以英文主谓宾方式命名
### 后台模板命名规范
- 权限以首字母大写命名，如`AdminList`
- 目录以首字母大写命名，如`Admin`
- 文件以首字母小写命名，如`list`
- 通过路由可以很方便查找到对应的文件，以提高开发效率
### 后端命名规范
> 以下列路由结构来讲
``` php
Route::get('brand', 'BrandController@list')->middleware(['permissions:BrandList']);    //品牌列表
Route::get('brand/{id}', 'BrandController@details')->middleware(['permissions:BrandEdit']);    //品牌详情
Route::post('brand', 'BrandController@create')->middleware(['permissions:BrandCreate']);    //品牌添加保存
Route::post('brand/{id}', 'BrandController@edit')->middleware(['permissions:BrandEdit']);    //品牌编辑保存
Route::post('brand/destroy/{id}', 'BrandController@destroy')->middleware(['permissions:BrandDestroy']);    //品牌删除
```
- 通过以上路由，应该可以看出一定规律了，一般访问路由和控制器名称一样，权限的动作对应控制器的方法名

动作 | URI | 行为 | 路由名称|
---|---|---|---|
GET | /photos | 列表(list) | photos.list|
GET | /photos/{photo} | 详情(details) | photos.details|
POST | /photos |添加保存（create） | photos.create|
POST | /photos/{photo} |编辑保存（edit） | photos.edit|
POST | /photos/destroy/{photo} |删除(destroy) | photos.destroy|