# 常用功能
## 消息通知
- 参考：[https://learnku.com/docs/laravel/7.x/notifications/7489](https://learnku.com/docs/laravel/7.x/notifications/7489 "https://learnku.com/docs/laravel/7.x/notifications/7489")
- 消息通知分为手动添加和添加观察者

|属性|类型|默认值|必填|说明|
| ------------ | ------------ | ------------ | ------------ | ------------ |
|title|string||是|标题，不要太长，太长引响排版|
|type|number|1|是|通知类型：1系统消息（默认）2交易|
|url|string||否|跳转地址，格式如：`/pages/finance/bill_show?id=1`|
|image|string||否|图片地址|
|price|number||否|金额，分，如100（1元），类型为2时必填|
|list|array||否|列表|
|remark|string||否|备注|

#### list 的合法值

|属性|类型|默认值|必填|说明|
| ------------ | ------------ | ------------ | ------------ | ------------ |
|keyword|string||是|键名，一般为4个字符，不然引响排版美观|
|data|string||是|键值，一般为20个字符以内，不然引响排版美观|

### 手动添加
``` php
// 发送的内容
$invoice=[
    'type'=> InvoicePaid::NOTIFICATION_TYPE_DEAL,
    'title'=>'对订单：'.$GoodIndent->identification.'的付款',
    'list'=>[
        [
            'keyword'=>'支付方式',
            'data'=>'余额支付'
        ]
    ],
    'price'=>$GoodIndent->total,
    'url'=>'/pages/finance/bill_show?id='.$Money->id,
    'prefers'=>['database']
];
// 发给某一用户
$user = User::find(auth('web')->user()->id);//指定用户，也可为当前登录用户。
$user->notify(new InvoicePaid($invoice));

// 群发
$users = User::all();
foreach ($users as $user) {
    $user->notify(new InvoicePaid($invoice)); // 发送通知
}
```
### 观察者
```  php
// 第一步：创建观察者
php artisan make:observer NoticeObserver
// 第二步：根据实际情况添加通知代码，代码就是将手动添加的代码，写在具体的步骤中，步骤说明如下
class UserObserver
{

    /**
     * 监听数据即将创建的事件。
     *
     * @param  User $user
     * @return void
     */
    public function creating(User $user)
    {

    }

    /**
     * 监听数据创建后的事件。
     *
     * @param  User $user
     * @return void
     */
    public function created(User $user)
    {

    }

    /**
     * 监听数据即将更新的事件。
     *
     * @param  User $user
     * @return void
     */
    public function updating(User $user)
    {

    }

    /**
     * 监听数据更新后的事件。
     *
     * @param  User $user
     * @return void
     */
    public function updated(User $user)
    {

    }

    /**
     * 监听数据即将保存的事件。
     *
     * @param  User $user
     * @return void
     */
    public function saving(User $user)
    {

    }

    /**
     * 监听数据保存后的事件。
     *
     * @param  User $user
     * @return void
     */
    public function saved(User $user)
    {

    }

    /**
     * 监听数据即将删除的事件。
     *
     * @param  User $user
     * @return void
     */
    public function deleting(User $user)
    {

    }

    /**
     * 监听数据删除后的事件。
     *
     * @param  User $user
     * @return void
     */
    public function deleted(User $user)
    {

    }

    /**
     * 监听数据即将从软删除状态恢复的事件。
     *
     * @param  User $user
     * @return void
     */
    public function restoring(User $user)
    {

    }

    /**
     * 监听数据从软删除状态恢复后的事件。
     *
     * @param  User $user
     * @return void
     */
    public function restored(User $user)
    {

    }
}
// 第三步： 在对应的Model 类的 boot 方法添加观察者代码
// 为 User 模型注册观察者
User::observe(UserObserver::class);
```
### 其它操作
- 访问通知
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
