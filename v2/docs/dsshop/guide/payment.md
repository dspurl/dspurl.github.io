# 支付
## 功能说明
- 默认只支持微信小程序和微信公众平台，APP因需要开放者账号暂时无法开通，其它家的懒的搞，等有业务需求了再说
- 支持下单、退款（退款仅支持一次操作，且退款后需要同步才能完成在线退款，未发现微信有走退款回调接口）
## 参数说明
### 请求参数
|属性|类型|默认值|必填|说明|
| ------------ | ------------ | ------------ | ------------ | ------------ |
|id|number||否|订单ID|
|platform|string||是|支付平台 alipay:支付宝 weixin:微信支付|
|type|string||是|支付类型 goodsIndent：商品订单|
### 示例代码
``` php
public function weixinPayment($body,$fee,$openid,$trade_type='JSAPI'){
    $number= orderNumber();
    $config = config('wechat.payment.default');
    $config['notify_url'] = request()->root().'/api/v1/app/paymentNotify';
    $app = Factory::payment($config);
    $result = $app->order->unify([
        'body' => $body,
        'out_trade_no' => $number,
        'total_fee' => $fee,
        'trade_type' => $trade_type,
        'openid' => $openid,
    ]);
    $return =[
        'result'=>'error',
        'msg'=>'支付异常，请联系管理员'
    ];
    if ($result['return_code'] == 'SUCCESS' && $result['result_code'] == 'SUCCESS') {
        $prepayId = $result['prepay_id'];
        $config = $app->jssdk->sdkConfig($prepayId);
        $return =[
            'result'=>'ok',
            'msg'=>$config,
            'number'=>$number
        ];
    }
    if ($result['return_code'] == 'FAIL' && array_key_exists('return_msg', $result)) {
        $return =[
            'result'=>'error',
            'msg'=>$result['return_msg']
        ];
    }
    return $return;
}
```
### 返回参数
|属性|类型|默认值|必填|说明|
| ------------ | ------------ | ------------ | ------------ | ------------ |
|result|string||是|返回状态,成功:ok 失败:error|
|code|string||否|错误码，当result为error时需填写|
|msg|string||否|错误原因，当result为error时需填写|
|number|string||否|订单号，当result为ok时需填写|
## 新加支付说明
- 首先得先确认标识，在前端支付页，添加支付平台，并设置唯一标识
- 后台`App\Models\v1\MiniProgram`复制一份`weixinPayment`方法，将`weixin`换成上一步设置的标识
- 完成支付接口对接，按返回参数返回即可
## 新加支付类型说明
- 首先在前端添加支付类型，如`充值`，然后设置唯一标识
- 后台添加很简单，只需要添加三个观察者，然后编写对应的业务代码即可
``` php
#商品订单支付生成
#api\app\Observers\PaymentLog\GoodIndentPaymentCreateObserver.php
#商品订单支付完成
#api\app\Observers\PaymentLog\GoodIndentPaymentSucceedObserver.php
#商品订单退款
#api\app\Observers\PaymentLog\GoodIndentRefundObserver.php
```