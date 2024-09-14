## 模板开发
> tfshop支持多客户端多模板开发，以下将介绍如何快速开发个性化的客户端模板
>
> 模板开发暂时仅支持手动添加和手动切换，现阶段只作插件开发区分所用

## 目录结构
> `client`目录下存放网站和app模板，一般根据目录命名区分是网站还是app，以`*-web`命名的为网站模板，以`*-app`命名的为app，然后在对应的目录下再创建自定义命名的目录来保存对应的模板
> 现项目支持`uni-app`和`nuxt`，如果需要使用其它框架，可自定模板
```markdown
.
├── tfshop.config.json
└── 客户端其它文件
```
### tfshop.config.json
> 模板的一些配置项，用于模板对外展示
```json
{
  "name": "模板名称",	//模板展示名称
  "en": "英文名称",	//模板英文名称，需和模板目录名保持一致
  "version": "0.0.1",	 //模板版本，用于升级
  "describe": "模板描述",	 //模板模板描述
  "imgList": [],	 //模板效果图，支持多张
}
```
### 自定义前端模板ds文件
> 如我想写个`flutter`项目并能使用插件添加生成基于`flutter`的模板，只需要在`plugin\template`目录下，新建模板即可，命名格式带上`flutter`，
```
list.client.flutter-app.ds
list.client.flutter-app.js.ds
detail.client.flutter-app.ds
detail.client.flutter-app.js.ds
```