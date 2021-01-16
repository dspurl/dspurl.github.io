# 权限与侧边栏
## 说明
- 项目通过后台权限配置动态实现侧边栏，无需自行修改代码
- 推荐通过插件的方式添加功能
## 添加权限
- 先看下示例图
![](/image/jurisdiction_01.png)
- 第一步： “用户管理” -> "权限管理" -> 添加一个顶级类目，如`demo`
![](/image/jurisdiction_02.png)
- 第二步： 添加二级类目，上级类目选择第一步添加的权限
- 第三步： 添加三级类目，上级类目选择第二步添加的权限
- 第四步： 编辑 `permission.js`文件，添加权限和对应的模板路径（一定要添加二级类目到`index`，这样三级目录才能正常访问）
![](/image/jurisdiction_03.png)
- 第五步： 添加权限文件，可复制一份文件，然后修改list.vue（列表），如果存在详情页，请添加`components`目录
![](/image/jurisdiction_04.png)
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
- 后台`App\Http\Controllers\v1\Element\WeChatController`在`unifiedPayment`方法中添加`case`，把标识填写进去，参考如下代码
``` php
switch ($request->type){
    case 'goodsIndent':  //商品订单支付
        $reutn = (new GoodIndent())->payment($request);
        break;
}
```
- 在对应的Models中添加业务代码，例
``` php
public function payment($request){
    $openid=$request->header('openid');
    $GoodIndent=static::with(['goodsList'])->find($request->id);
    $body='对订单：'.$GoodIndent->identification.'的付款';
    $fee=$GoodIndent->total;
    $trade_type="JSAPI";
    $MiniProgram = new MiniProgram();
    $payment=$MiniProgram->payment($request->platform,$body,$fee,$openid,$trade_type);
    if($payment['result']== 'error'){
        return $payment;
    }
    $PaymentLog = new PaymentLog();
    $PaymentLog->name = $body;
    $PaymentLog->number = $payment['number'];
    $PaymentLog->money = $GoodIndent->total;
    $PaymentLog->pay_id = $request->id; //订单ID
    $PaymentLog->pay_type = 'App\Models\v1\GoodIndent';
    $PaymentLog->state = PaymentLog::PAYMENT_LOG_STATE_CREATE;
    $PaymentLog->save();
    //库存判断
    foreach ($GoodIndent->goodsList as $indentCommodity){
        $Good=Good::select('id','is_inventory','inventory')->find($indentCommodity['good_id']);
        if($Good && $Good->is_inventory == Good::GOOD_IS_INVENTORY_FILM){ //付款减库存
            if(!$indentCommodity['good_sku_id']){ //非SKU商品
                if($Good->inventory-$indentCommodity['number']<0){
                    return [
                        'result'=>'error',
                        'msg'=>'存在库存不足的商品，请重新购买'
                    ];
                }
                $Good->inventory = $Good->inventory-$indentCommodity['number'];
                $Good->save();
            }else{
                $GoodSku=GoodSku::find($indentCommodity['good_sku_id']);
                if($GoodSku->inventory-$indentCommodity['number']<0){
                    return [
                        'result'=>'error',
                        'msg'=>'存在库存不足的SKU商品，请重新购买'
                    ];
                }
                $GoodSku->inventory = $GoodSku->inventory-$indentCommodity['number'];
                $GoodSku->save();
            }
        }
    }
    return $payment;
}
```