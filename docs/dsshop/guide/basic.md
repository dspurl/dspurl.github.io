# 基本配置
## 配置文件
### 后端配置相关
- 后端配置文件在config目录下，但实际配置时，并不需要去修改该目录下的文件，而是直接修改`.env`、`.env.dev`、`.env.prod`
- 以下是常用的配置参数说明,更多配置参数请查看`api/config`
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
WECHAT_PAYMENT_CERT_PATH="storage/pay/weixin/apiclient_cert.pem" #微信支付公钥
WECHAT_PAYMENT_KEY_PATH="storage/pay/weixin/apiclient_key.pem" #微信支付私钥
WECHAT_SUBSCRIPTION_INFORMATION_SHIPMENTS="" #订单发货通知ID
SMS_ALIYUN_ACCESS_ID="" #阿里短信access_id
SMS_ALIYUN_SECRET="" #阿里短信secret
SMS_ALIYUN_SIGNATURE="" #阿里短信签名
SMS_ALIYUN_VERIFICATION_CODE="" #阿里短信短信模板ID
PASSPORT_CLIENT_ID="" #Passport OAuth认证后台的client_id
PASSPORT_CLIENT_SECRET="" #Passport OAuth认证后台的client_secret
PASSPORT_WEB_ID="" #Passport OAuth认证客户端的client_id
PASSPORT_WEB_SECRET=""  #Passport OAuth认证客户端的client_secret
HASH_CLIENT_SECRETS=""  #客户端秘钥的 hash 加密，一旦启用，你的所有客户端秘钥将只有在创建时会显示。由于纯文本的客户秘钥值没有存储在数据库中，所以如果秘钥丢失，也不可能再恢复
BACKUP_SWITCH=true  #备份开关(请先确保已配置邮箱功能，不然备份会报错)
PASSPORT_EXPIRES_IN = 7200  #token失效时间(单位秒)，默认为2小时
REFRESH_PASSPORT_EXPIRES_IN = 604800    #oken刷新失效时间(单位秒)，默认为7天
BACKUP_TIME=02:00   #备份时间（该时间为每天执行时间，如需按周或其它指定时间，请自行配置backup.php文件）
BACKUP_FILES_TIME=02:00   #数据库备份时间（设置后仅备份数据库，该时间为每天执行时间，如需按周或其它指定时间，请自行配置backup.php文件）
BACKUP_CLEAN_TIME=02:00   #文件备份时间（设置后仅备份文件，该时间为每天执行时间，如需按周或其它指定时间，请自行配置backup.php文件）
BACKUP_CLEAN_TIME=02:20 #旧备份清除时间（该时间为每天执行时间，如需按周或其它指定时间，请自行配置backup.php文件）
BACKUP_RECEIVE_MAIL= #备份结果接收邮箱
PROJECT_KEY #前端密钥
ORDER_OVERTIME=10 #订单超时时间(分钟)
AUTOMATIC_RECEIVING_STATE=true   #是否开启自动收货
AUTOMATIC_RECEIVING=7   #多少天后自动收货
AUTOMATIC_EVALUATE_STATE=true   #是否开启自动评价功能
AUTOMATIC_EVALUATE=12   #多少天后自动好评
MAX_FILE_UPLOAD_SIZE = 2097152  #文件最大上传大小2M
```
### 后台配置相关
- 后台配置只需要修改RSET API地址即可，修改`dev.env.js`、`prod.env.js`的`BASE_API`
### uni-app配置相关
```markdown
#client/Dsshop/utils/config.js
#该文件可以配置生产环境、测试环境和本地环境，都有中文注明，修改NODE_ENV即可在打包时区分生产和测试环境
lbsQq: #腾讯地图的key，注意需要开通WebService API
domainName: #API域名
secret: #api密钥，对应api/.env的APP_KEY
```
## 微信小程序配置相关
- `开发->开发设置`配置服务器域名、业务域名
- `功能->订阅消息`添加模板，标题为`订单发货通知`，具体参考下图，然后获取到模板ID，填写到WECHAT_SUBSCRIPTION_INFORMATION_SHIPMENTS
![](/image/11.png)
- 开通微信支付，参考[账号关联（AppID绑定）](https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml "账号关联（AppID绑定）")
#### 修改后端配置文件,添加微信支付相关配置
```
WECHAT_PAYMENT_APPID="" #微信支付appid
WECHAT_PAYMENT_MCH_ID="" #微信支付mch_id
WECHAT_PAYMENT_KEY="" #微信支付key
WECHAT_PAYMENT_CERT_PATH="storage/pay/weixin/apiclient_cert.pem" #微信支付公钥
WECHAT_PAYMENT_KEY_PATH="storage/pay/weixin/apiclient_key.pem" #微信支付私钥
```
> 其它小程序配置参考微信小程序配置