# 基本配置
## 配置文件
### 后端配置相关
- 后端配置文件在config目录下，但实际配置时，并不需要去修改该目录下的文件，而是直接修改`.env`、`.env.dev`、`.env.prod`
- 以下是常用的配置参数说明
```markdown
APP_KEY='' #应用程序密钥执行php artisan key:generate可生成
APP_DEBUG=true #测试环境开启，正常环境就关闭
HOMESTEAD_WINDOWS= true #windows下软链接无效，将导致资源无法上传，可以设置为true
DB_HOST=127.0.0.1 #mysql主机IP，一般不需要修改
DB_PORT=3306 #mysql端口号，一般不需要修改
DB_DATABASE=dsshop #mysql表名
DB_USERNAME=dsshop #mysql用户名
DB_PASSWORD=123456 #mysql密码
CACHE_DRIVER=redis #缓存模式
QUEUE_CONNECTION=redis #队列模式
REDIS_HOST=127.0.0.1 #REDIS服务器IP
REDIS_PASSWORD=dsshop #REDIS密码
REDIS_PORT=6379 #REDIS端口
REDIS_DB=0  #REDIS默认数据库
REDIS_CACHE_DB=1 #REDIS缓存数据库
WECHAT_MINI_PROGRAM_APPID=""    #微信小程序appid
WECHAT_MINI_PROGRAM_SECRET="" #微信小程序secret
WECHAT_PAYMENT_APPID="" #微信支付appid
WECHAT_PAYMENT_MCH_ID="" #微信支付mch_id
WECHAT_PAYMENT_KEY="" #微信支付key
WECHAT_SUBSCRIPTION_INFORMATION_SHIPMENTS="" #订单发货通知ID
SMS_ALIYUN_ACCESS_ID="" #阿里短信access_id
SMS_ALIYUN_SECRET="" #阿里短信secret
SMS_ALIYUN_SIGNATURE="" #阿里短信签名
SMS_ALIYUN_VERIFICATION_CODE="" #阿里短信短信模板ID
PASSPORT_CLIENT_ID="" #Passport OAuth认证的client_id
PASSPORT_CLIENT_SECRET="" #Passport OAuth认证的client_secret
```
### 后台配置相关
- 后台配置只需要修改RSET API地址即可，修改`dev.env.js`、`prod.env.js`的`BASE_API`
### uni-app配置相关
- uni-app需要配置二块地方
```markdown
#App.vue 32行
host #修改为对应的RSET API地址
#App.vue 41行
secret #修改为对应的APP_KEY
```
### 微信小程序配置相关
- `开发->开发设置`配置服务器域名、业务域名
- `功能->订阅消息`添加模板，标题为`订单发货通知`，具体参考下图，然后获取到模板ID，填写到WECHAT_SUBSCRIPTION_INFORMATION_SHIPMENTS
![](/11.png)
- 开通微信支付，参考[账号关联（AppID绑定）](https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml "账号关联（AppID绑定）")