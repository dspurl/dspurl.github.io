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
### 根据角色定制不同的后台首页
> 默认后台为统一首页模式，如需要根据不同角色开发不同的后台首页，请修改`admin\src\views\Dashboard\index.vue`
```vue
created() {
	if (!this.roles.includes('admin')) {
		this.currentRole = 'editorDashboard'
	}
}
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
### 获取字符中url的参数
``` vue
<script>
	import { urlToObj } from 'utils'
	export default{
		onLoad(options) {
			const q = decodeURIComponent(options.q)
			const url = urlToObj(q)
		}
	}
</script>
```

#### `hasLogin`

## PC端（nuxt）
> asyncData不能验证用户登录状态

### 时间格式
#### `timestamp | moment('YYYY-MM-DD HH:mm:ss')`
- 时间格式:YYYY.MM.DD HH:mm:ss，年为"YYYY"，月为"MM"，日为"DD"，时为"HH"，分为"mm"，秒为"ss"，格式可以自由搭配
- 参考：[vue-moment](https://github.com/brockpetrie/vue-moment#readme "vue-moment")
- 参考：[moment.js](http://momentjs.cn/ "moment.js")

``` vue
<template>
	<view>
		<view>
			时间为：{{time}}
		</view>
	</view>
</template>
<style lang='scss'>
  .avatar-uploader .el-upload{
    width: 250px;
    height: 250px;
  }
</style>
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
### 多图/文件上传控件
#### 参数说明
参数 | 类型 | 是否必填 | 默认值 | 说明|
---|---|---|---|---|
imgData | Object | 否 | `{ type: 1, size: 1024 * 1024 * 2, specification: [80, 150] }`| 后台上传参数 [上传参数说明](/dsshop/guide/vue-instrument.html#上传参数说明 "上传参数说明")|
format | Array | 否 | `[ 'image/jpeg', 'image/gif', 'image/png', 'image/bmp' ]` | 允许上传的格式，此处为前端验证格式，非后台验证格式 |
limit |Number|否|5|允许上传文件的数量|
fileList |Array|否|`[]`|已上传的图片|

#### 示例
```vue
<template>
	<insert-image :fileList="fileList" @getFile="getFile"/>
</template>
<script>
import InsertImage from '@/components/Upload/InsertImage'
export default {
  components: {
    InsertImage
  },
  data() {
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
	}
  },
  methods: {
    getFile(res){
      	console.log('res', res)
    }
  }
}
</script>
```
### 单图/文件上传控件
#### 参数说明
参数 | 类型 | 是否必填 | 默认值 | 说明|
---|---|---|---|---|
imgData | Object | 否 | `{ type: 1, size: 1024 * 1024 * 2, specification: [80, 150] }`| 后台上传参数 [上传参数说明](/dsshop/guide/vue-instrument.html#上传参数说明 "上传参数说明")|
format | Array | 否 | `[ 'image/jpeg', 'image/gif', 'image/png', 'image/bmp' ]` | 允许上传的格式，此处为前端验证格式，非后台验证格式 |
file |String|是|`''`|已上传的图片，没有传空，不然上传的图片将无法展示|

#### 示例
```vue
<template>
	<avatar-image :file="file" @getFile="getFile"/>
</template>
<script>
import AvatarImage from '@/components/Upload/AvatarImage'
export default {
  components: {
    AvatarImage
  },
  data() {
    return {
      file: '',
	}
  },
  methods: {
    getFile(res){
		this.file = res.response
      	console.log('res', res)
    }
  }
}
</script>
```
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
### 修改路由为user/id模式
> 在`uesr`目录下新建一个`_id.vue`文件，然后在`_id.vue`中用`params`接收参数

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