# 消息通知
## 参数说明
- 参考：[https://learnku.com/docs/laravel/7.x/notifications/7489](https://learnku.com/docs/laravel/7.x/notifications/7489 "https://learnku.com/docs/laravel/7.x/notifications/7489")
- 消息通知分为手动添加和添加观察者，这里采用手动添加的方式
- 如发送的是小程序/公众号/APP通知时，请确保参数包含`template`并配置了对应的模板ID
- 后台消息通知接收需要关联`user`用户，通过配置`NOTIFICATION_ACCOUNT`实现，以逗号分割多个用户
- 只有配置了小程序、微信公众号、邮箱后，用户开启了对应的通知才会生效（小程序除外）
```
NOTIFICATION_ACCOUNT = "1,2"
```
### 示例代码
```php
$invoice = [
    'type' => InvoicePaid::NOTIFICATION_TYPE_DEAL,
    'title' => '恭喜您！购买的商品已支付成功，我们会尽快安排发货哦！么么哒！~~',
    'list' => [
        [
            'keyword' => '订单编号',
            'data' => $parameter['identification']
        ],
        [
            'keyword' => '商品名称',
            'data' => $parameter['name']
        ],
        [
            'keyword' => '订单总额',
            'data' => sprintf("%01.2f", $parameter['total'] / 100),
        ],
        [
            'keyword' => '支付方式',
            'data' => $parameter['type']
        ],
        [
            'keyword' => '订单状态',
            'data' => '已支付'
        ],
        [
            'keyword' => '下单时间',
            'data' => $parameter['time']
        ]
    ],
    'price' => $parameter['total'],
    'url' => '/pages/indent/detail?id=' . $parameter['id'],
    'parameter' => $parameter,
    'prefers' => ['database', 'mail', 'wechat']
];
$user = User::find($parameter['user_id']);
$user->notify(new InvoicePaid($invoice));
```
|属性|类型|默认值|必填|说明|
| ------------ | ------------ | ------------ | ------------ | ------------ |
|title|string||是|标题，不要太长，太长引响排版|
|type|number|1|是|通知类型：1系统消息（默认）2交易|
|url|string||否|跳转地址，格式如：`/pages/finance/bill_show?id=1`|
|image|string||否|图片地址|
|price|number||否|金额，分，如100（1元），类型为2时必填|
|list|array||否|列表|
|remark|string||否|备注|
|admin|Boole||否|是否为后台通知，true：是，为空：否|
|user_id|string||否|用户ID，如admin为true时，不用传|
|parameter|array||否|不需要传|
|template|string||是|通知模板标识，见下表|
|prefers|array|['database']|否|通知途径：默认为站内信|

### list 的合法值

|属性|类型|默认值|必填|说明|
| ------------ | ------------ | ------------ | ------------ | ------------ |
|keyword|string||是|键名，一般为4个字符，不然引响排版美观|
|data|string||是|键值，一般为20个字符以内，不然引响排版美观|
|copy|boolean||是|是否支持拷贝，true：是，false：否|

### template 的合法值，参考`config/notification.php`

|值|说明|微信公众号模版编号|
| ------------ | ------------ |------------ |
|finish_payment|订单支付成功通知|OPENTM416836000|
|order_confirm_receipt|订单确认收货通知|OPENTM202314085|
|delivery_release|发货通知|OPENTM414956350|
|refund_success|退款成功通知|OPENTM414889350|
|admin_order_send_good|待发货提醒|OPENTM409521500|
|admin_order_completion|订单完成通知|OPENTM412598101|

#### 使用：在env中配置对应的模板ID，模板ID通过微信公众号中的模板消息中查找对应的"微信公众号模版编号"进行添加，然后将得到的"模版ID"填入
```php
WECHAT_SUBSCRIPTION_INFORMATION_FINISH_PAYMENT=
WECHAT_SUBSCRIPTION_INFORMATION_ORDER_CONFIRM_RECEIPT=
WECHAT_SUBSCRIPTION_INFORMATION_SHIPMENTS=
WECHAT_SUBSCRIPTION_INFORMATION_REFUND_SUCCESS=
WECHAT_SUBSCRIPTION_INFORMATION_ADMIN_ORDER_SEND_GOOD=
WECHAT_SUBSCRIPTION_INFORMATION_ADMIN_ORDER_COMPLETION=
```

### prefers 的合法值

|值|说明|
| ------------ | ------------ |
|database|站内信，默认|
|sms|短信|
|miniweixin|微信小程序订阅消息|
|wechat|微信公众号模板消息|

## 增加或删除通知途径
- 修改`Notifications/InvoicePaid.php`，`prefers`中添加或删除通知途径即可

## 增加新的通知模板
> 以下以微信公众号通知为例
- 先去微信公众平台选择自己想要的通知模板
- 添加配置常量
> 命名规则:以下划线拼接，如是管理员通知，名称前面加`admin_`，如`finish_payment`、`admin_subscribe`
```php
#api\config\notification.php
'wechat'=>[ //微信公众号
    'finish_payment'=>env('WECHAT_SUBSCRIPTION_INFORMATION_FINISH_PAYMENT',''),  //订单支付成功通知
],
```
- 添加模板代码
> 命名规则：根据上一步配置的常量名去掉下划线，并采用驼峰命名法命名，如`finishPayment`、`adminSubscribe`
```php
#api\app\Channels\WechatChannel.php
protected function finishPayment($notifiable, $message)
    {
        $data = [
            'template_id' => $this->information[$message['template']],
            'touser' => $notifiable->wechat,
            'data' => [
                'first' => '恭喜您！购买的商品已支付成功，我们会尽快安排发货哦！么么哒！~~',
                'keyword1' => $message['identification'],
                'keyword2' => $message['name'],
                'keyword3' => sprintf("%01.2f", $message['total'] / 100),
                'keyword4' => '已支付',
                'keyword5' => $message['time'],
                'remark' => '欢迎您的到来！',
            ],
        ];
        if ($this->miniweixin) {
            $data['miniprogram'] = [
                'appid' => $this->miniweixin,
                'pagepath' => '/pages/indent/detail?id=' . $message['id'],
            ];
        } else {
            $data['url'] = request()->root() . '/h5/#/pages/indent/detail?id=' . $message['id'];
        }
        //发送记录
        $send = $this->app->template_message->send($data);
        $NotificationLog = new NotificationLog();
        $NotificationLog->user_id = $message['user_id'];
        $NotificationLog->type = NotificationLog::NOTIFICATION_LOG_TYPE_MINIWEIXIN;
        $NotificationLog->msg = json_encode($data);
        $NotificationLog->feedback = json_encode($send);
        $NotificationLog->state = $send['errcode'] == 0 ? NotificationLog::NOTIFICATION_LOG_STATE_OK : NotificationLog::NOTIFICATION_LOG_STATE_ERROR;
        $NotificationLog->save();
    }
```
## 其它操作
- 访问database通知
``` php
$user = App\User::find(1);
$user->notifications->toArray(); //所用该用户下的通知
$user->unreadNotifications->toArray(); //所用该用户下未读的通知
```
- 将某条通知设为已读
``` php
$user->unreadNotifications->where('id','8b9e0bc4-eb3f-4d36-aad9-2dce24a495c6')->markAsRead();   //对某个信息进行已读标记
$user->unreadNotifications()->update(['read_at' => now()]);   //所有的通知标为已读
```