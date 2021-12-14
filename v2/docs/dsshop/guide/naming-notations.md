# 命名规范
> 项目采用驼峰命名法规范命名
> 以英文主谓宾方式命名
### 后台模板命名规范
- 权限以首字母大写命名，如`AdminList`
- 目录以首字母大写命名，如`Admin`
- 文件以首字母小写命名，如`list`
- 通过路由可以很方便查找到对应的文件，以提高开发效率
### uni-app模板命名规范
### 后端命名规范
> 以下列路由结构来讲
``` php
# 资源路由
Route::get('brand', 'BrandController@list')->middleware(['permissions:BrandList']);    //品牌列表
Route::get('brand/{id}', 'BrandController@detail')->middleware(['permissions:BrandEdit']);    //品牌详情
Route::post('brand', 'BrandController@create')->middleware(['permissions:BrandCreate']);    //品牌添加保存
Route::post('brand/{id}', 'BrandController@edit')->middleware(['permissions:BrandEdit']);    //品牌编辑保存
Route::post('brand/destroy/{id}', 'BrandController@destroy')->middleware(['permissions:BrandDestroy']);    //品牌删除
# 当资源路由中有其它路由，采用以下命名方式（因为存在详情路由，单一路由将失效，故采用以下方法命名）
Route::get('goodCategory', 'GoodController@category');    //商品分类展示
# 详情也可以按以下命名
Route::get('brand/detail/{id}', 'BrandController@detail')->middleware(['permissions:BrandEdit']);    //品牌详情
Route::get('brand/outh', 'BrandController@detail')->middleware(['permissions:BrandEdit']);    //这样其它的动作就可以直接添加，而不需要采用驼峰命名法了
# 单一路由
Route::post('user/notification', 'UserController@notification');    //更新通知状态

```
- 通过以上路由，应该可以看出一定规律了，一般访问路由和控制器名称一样，权限的动作对应控制器的方法名
- 资源路由

动作 | URI | 行为 | 路由名称|
---|---|---|---|
GET | /photos | 列表(list) | photos.list|
GET | /photos/{photo} | 详情(details) | photos.details|
POST | /photos |添加保存（create） | photos.create|
POST | /photos/{photo} |编辑保存（edit） | photos.edit|
POST | /photos/destroy/{photo} |删除(destroy) | photos.destroy|
- 单一路由
- 路由以控制器名+方法名命名