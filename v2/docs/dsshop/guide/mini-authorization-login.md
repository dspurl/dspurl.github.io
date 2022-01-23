# 小程序一键授登录
## 功能说明
- 现已集成微信小程序、支付宝小程序、字节跳动小程序
> 虽然已集成三个小程序，但只有微信小程序测试通过；支付宝需要人工审核，但并不支持软件服务商申请，故无法通过；字节跳动需要企业认证并支付认证费，自己并没有字节跳动相关业务，故不想认证
- 其它小程序可以自己对接，项目已整合统一入口，可根据其它小程序快速开发集成
## 参数说明
### 小程序配置`App\config\mini_program`

### 示例代码
``` php
'alipay' => [
    'app_id'=> env('ALIPAY_MINI_PROGRAM_APPID', ''),
    'gatewayUrl'=> env('ALIPAY_MINI_PROGRAM_GATEWAY_URL', 'https://openapi.alipay.com/gateway.do'),
    'rsaPrivateKey'=> env('ALIPAY_MINI_PROGRAM_RSA_PRIVATE_KEY', ''),
    'rsaPublicKey'=> env('ALIPAY_MINI_PROGRAM_RSA_PUBLIC_KEY', '')
],
```

### 小程序业务代码`App\Models\v1\MiniProgram`
### 请求参数
|属性|类型|默认值|必填|说明|
| ------------ | ------------ | ------------ | ------------ | ------------ |
|code|string||是|登录时获取的 code|
### 返回值
|属性|类型|默认值|必填|说明|
| ------------ | ------------ | ------------ | ------------ | ------------ |
|result|string||是|返回状态,成功:ok 失败:error|
|code|string||否|错误码，当result为error时需填写|
|msg|string||否|错误原因，当result为error时需填写|
|openid|string||否|用户唯一标识，当result为ok时需填写|
|session_key|string||否|会话密钥，当result为ok时需填写|
### 示例代码
``` php
public function miniWeixin($code){
    $config = config('wechat.mini_program.default');
    $miniProgram = Factory::miniProgram($config);
    $result=$miniProgram->auth->session((string) $code);
    if(array_key_exists('errcode', $result)){
        $return =[
            'result'=>'error',
            'code'=>$result['errcode'],
            'msg'=>$result['errmsg']
        ];
    }else{
        $return =[
            'result'=>'ok',
            'openid'=>$result['openid'],
            'session_key'=>$result['session_key']
        ];
    }
    return $return;
}
```