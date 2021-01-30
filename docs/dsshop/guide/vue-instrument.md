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
			时间为：{{ {{ timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }})}}
		</view>
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