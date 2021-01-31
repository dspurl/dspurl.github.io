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