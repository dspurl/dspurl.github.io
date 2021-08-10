# 介绍
> 首先你必须掌握css、html、js，然后你得了解vue
> 该指南不做过多的技术层面介绍，只对一些项目中已经封装的方法/类进行介绍，以方便在需要时快速应用，减少自己写代码的时间
## 命名规范
### class的命名
- 用`-`拼接每个单词
- 最外层以`-box`命名
- 列表以`-item`命名
#### 示例
```css
.main-box{
    .main-item{
        .main-right{

        }
        .main-right{

        }
    }
}
```
### js方法名/变量命名
- 首字母小写驼峰命名法
- 能用`get``set`的就用`get``set`
#### 示例
```js
// 获取配货地址列表
getShippingAddressList(){

}
// 设置配货地址
setShippingAddress(){

} 
```
## vue项目结构
> 以下为常规目录结构
>
> 本人比较把js、css写到单独的目录下，这样看起来干净，写css和js更快，你也可以直接写vue文件中
> 
> `components`的vue文件首字母大写，用于区分它是组件
```markdown
.
└── product
    ├── components
    │   ├── js
    │   │   ├── detail.js
    │   ├── scss
    │   │   ├── detail.scss
    │   ├── Detail.vue
    ├── js
    │   ├── list.js
    ├── scss
    │   ├── list.scss
    └── list.vue
 ```