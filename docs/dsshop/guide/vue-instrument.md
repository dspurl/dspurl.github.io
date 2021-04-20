# 工具库
> 一些实用方法或类库
## 后台
### 时间格式
#### `timestamp | parseTime('{y}-{m}-{d} {h}:{i}')`
- 时间格式，可选。默认为{y}-{m}-{d}，年为"y"，月为"m"，日为"d"，时为"h"，分为"i"，秒为"s"，格式可以自由搭配
``` vue
<template>
	<view>
		<view>
			时间为：{{time}}
		</view>
	</view>
</template>

<script>
    export { parseTime } from '@/utils'
	export default{
		data() {
			return {
				time: null,
				timestamp: '1581170184'
			}
		},
		onLoad() {
			this.time = parseTime(this.timestamp, 'yyyy-mm-dd');
		}
	}
</script>
```
### 获取不同尺寸的图片
#### img | smallImage(150)
- 默认支持的尺寸：`80, 150, 200, 250, 300, 350`， 可通过上传时的`specification` 控制生成的图片尺寸
``` vue
<template>
	<view>
		<view>
			<img :src="img | smallImage(150)">
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				img: '1581170184.jpg'
			}
		},
		onLoad() {
			this.img = smallImage(this.img, 150);
		}
	}
</script>
```
### 排序
- 排序为前端动态控制，使用方法请先了解`element`组件，以下只对如何使用说明，不进行组件基础说明
- 请先确认API已经实现排序功能 [前后端排序转换](/dsshop/guide/api-instrument "前后端排序转换")
- 首先在需要排序的`el-table-column`添加`sortable="custom" prop="id"`
``` vue
<el-table-column label="编号" sortable="custom" prop="id">
<template slot-scope="scope">
	<span>{{ scope.row.id }}</span>
</template>
</el-table-column>
```
- 方法中添加
``` js
// 重新获取API数据
handleFilter() {
	this.listQuery.page = 1
	this.getList()
},
// 排序
sortChange(data) {
	const { prop, order } = data
	if (order === 'ascending') {
	this.listQuery.sort = '+' + prop
	} else {
	this.listQuery.sort = '-' + prop
	}
	this.handleFilter()
},
```
### 上传参数说明

参数 | 类型 | 是否必填 | 说明|
---|---|---|---|
type | int | 是 | 1图片|
size | int | 是 | 上传大小限制|
specification | array |是 | 生成的图片尺寸|

``` js
imgMasterData: {
	type: 1,
	size: 1024 * 1024 * 2,
	specification: [80, 150, 200, 250, 300, 350]
},
```
## uni-app
### 登录验证
#### `loginCheck`
``` vue
<script>
	export default{
		onLoad() {
			this.loginCheck()
		},
		methods:{
			...mapMutations(['loginCheck']),
		}
	}
</script>
```
### 登录状态获取
#### `hasLogin`
``` vue
<script>
	export default{
		onLoad() {
			if (this.hasLogin){
			}
		},
		computed:{
			...mapState(['hasLogin'])
		},
	}
</script>
```
## PC端（nuxt）
### 配置文件
```
NODE_ENV=prod	//当前环境
APP_DEBUG=true	//调试模式
APP_NAME=DSSHOP商城-跨终端商城解决方案	//项目名称
APP_SHORT_NAME= DSSHOP	//项目简称
APP_DESCRIPTION=免费开源可商用，快速搭建属于自己的独立商城网店系统，一次搭建适配多终端	//项目全局描述
APP_KEYWORD=商城网店系统|商城|网店|免费商城|免费网店	// 项目全局关键字
APP_ICP=浙ICP备110120119	// 项目备案号
API_URL_BROWSER=http://dsshop.test/api/v1/app/	//项目访问地址，暂时没有使用
API_URL=http://dsshop.test/api/v1/app/	//项目api地址
PROJECT_KEY=base64:szoJ3mSx/5U7zOsJfU7s4pSahiwdh01x6badmz5FtCM=	//前端密钥
CACHE_PR=DSSHOP-PC-	//项目缓存前缀
IBS_URL=https://restapi.amap.com/v3	//地图地址
IBS_KEY=	//地图密钥
```
### $nuxt
> nuxt使用`store`或`route`推荐使用$nuxt
```
#vue中使用：
this.$store.state.hasLogin
#nuxt中使用：
$nuxt.$store.state.hasLogin
```
### 某个链接需要权限验证时
```
if(!$nuxt.$store.state.hasLogin){
	$nuxt.$store.commit('loginCheck')
	return false
}
```
### 修改项目主色调
- 修改`web\assets\css\main.scss`的`$font-color-main`
- 修改`web\nuxt.config.js`的`loading`的`color`
```js
export default {
  loading: {
    color: '#fa524c',
    height: '2px'
  },
  ....
}
```
- 根据[https://element.eleme.cn/#/zh-CN/component/custom-theme](https://element.eleme.cn/#/zh-CN/component/custom-theme "https://element.eleme.cn/#/zh-CN/component/custom-theme")设置主题，然后替换掉`web\assets\theme`目录下的所有文件

### 缓存
> 使用了store.js [https://github.com/marcuswestin/store.js/](https://github.com/marcuswestin/store.js/ "https://github.com/marcuswestin/store.js/")
``` js
// 设置缓存
this.store.set('user', { name:'Marcus' })

// 读取缓存
this.store.get('user')

// 删除缓存
this.store.remove('user')

// 清空缓存
this.store.clearAll()

// 循环遍历所有存储的值
this.store.each(function(value, key) {
	console.log(key, '==', value)
})
```