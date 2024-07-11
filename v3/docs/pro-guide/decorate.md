# 装修

## 版块
> 装修分为两大版块，一个商城版块，一个页面版块
>
### 商城
> 用来设置底部导航，可以配置1-4个导航（不包括首页），链接仅支持微页面和自定义页面
>
>图标支持自定义，通过`tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\public\index.html`引入图标文件，`tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\src\components\IconSelect\index.vue`文件中添加新的图标，参考<https://www.uviewui.com/guide/customIcon.html>
>
### 页面
> 可装修首页及自定义新的页面
>
> 拖拽布局，这里不做过多介绍
>
## 便捷方法
#### isIframe
> 用来区分布局模式还是运行模式，一般用于物料在布局模式下的默认数据
>
> 用法：在物料页面中引入`isIframe`,在需要的时候判断`isIframe`是否为`true`，为`true`则当前为布局模式
```js
<script>
    export default {
        inject: ["isIframe"],
        ...
    }
</script>
```
#### $unit
> 用来将数字转成样式单位rpx
```js
this.$unit(10); // 10rpx
```
## 配置说明
> 可通过`tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\src\custom-schema-template\components`自定义其他属性，用于在`component.json`中使用
>
> 图标可通过商城导航的图标获取
> 
> 以下为系统自带的属性
>

|属性|类型|说明|
| ------------ | ------------ | ------------ |
|number|number|滑块|
|string|string|表单输入|
|time|string|日期时间|
|select|string|单选框|
|color|string|颜色选择器|
|goods|Array|商品选择器|
|upload|string|图片上传|
|switch|boolean|开关选择器|
|jump|Object|路由选择器|

```js
{
    "session": {
        "label": "是否显示场次",
        "type": "switch",
        "value": true
    },
}
```
## 开发物料
> 物料所在位置`tfshop-pro\client\uni-app\mall-cook\mall-cook-template\src\widgets`目录，每个目录即一个物料
>
## 创建一个物料
> 以下以制作一个秒杀物料为例
- 复制一份物料，命名为TfSeckill并重命名vue文件名字为TfSeckill，TfSeckill的name也改成TfSeckill

![图片](/image/20240704153153.png)
- 修改`\component.json`中的mane为秒杀，用来区分其他组件

![图片](/image/20240704153556.png)
- 修改`tfshop-pro\client\uni-app\mall-cook\mall-cook-template\src\components\render-widget.vue`，添加TfSeckill组件，以下为参考代码，实际为你复制的组件代码，参数什么可不用改，后期会一步步的修改
  
![图片](/image/20240704154045.png)
-  然后到装修页面，就能看到新添加的组件秒杀了

![图片](/image/20240704154334.png)
## 编写物料
- 为TfSeckill编写界面（通过vue+css生成所需界面），暂时不需要考虑交互代码，如下
![图片](/image/20240705134843.png)
- 修改`component.json`代码，这里参考前面的“配置说明”，主要就是实现对物料的样式、布局等动态修改。
- `component.json`的`fields`定义的参数需要在`render-widget.vue`和物料页面进行引入(因uni-app不支持v-bind，所以需要手动引入)

