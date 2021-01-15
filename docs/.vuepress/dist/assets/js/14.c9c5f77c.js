(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{369:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"消息通知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息通知"}},[t._v("#")]),t._v(" 消息通知")]),t._v(" "),a("h2",{attrs:{id:"参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[t._v("#")]),t._v(" 参数说明")]),t._v(" "),a("ul",[a("li",[t._v("参考："),a("a",{attrs:{href:"https://learnku.com/docs/laravel/7.x/notifications/7489",title:"https://learnku.com/docs/laravel/7.x/notifications/7489",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://learnku.com/docs/laravel/7.x/notifications/7489"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("消息通知分为手动添加和添加观察者，这里采用手动添加的方式")]),t._v(" "),a("li",[t._v("如发送的是小程序/公众号/APP通知时，请确保参数包含"),a("code",[t._v("template")]),t._v("并配置了对应的模板ID")]),t._v(" "),a("li",[t._v("后台消息通知接收需要关联"),a("code",[t._v("user")]),t._v("用户，通过配置"),a("code",[t._v("NOTIFICATION_ACCOUNT")]),t._v("实现，以逗号分割多个用户")]),t._v(" "),a("li",[t._v("只有配置了小程序、微信公众号、邮箱后，用户开启了对应的通知才会生效（小程序除外）")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('NOTIFICATION_ACCOUNT = "1,2"\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("标题，不要太长，太长引响排版")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("通知类型：1系统消息（默认）2交易")])]),t._v(" "),a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("跳转地址，格式如："),a("code",[t._v("/pages/finance/bill_show?id=1")])])]),t._v(" "),a("tr",[a("td",[t._v("image")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("图片地址")])]),t._v(" "),a("tr",[a("td",[t._v("price")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("金额，分，如100（1元），类型为2时必填")])]),t._v(" "),a("tr",[a("td",[t._v("list")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("列表")])]),t._v(" "),a("tr",[a("td",[t._v("remark")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("备注")])]),t._v(" "),a("tr",[a("td",[t._v("admin")]),t._v(" "),a("td",[t._v("Boole")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("是否为后台通知，true：是，为空：否")])]),t._v(" "),a("tr",[a("td",[t._v("user_id")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("用户ID，如admin为true时，不用传")])]),t._v(" "),a("tr",[a("td",[t._v("parameter")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("不需要传")])]),t._v(" "),a("tr",[a("td",[t._v("template")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("通知模板标识，见下表")])]),t._v(" "),a("tr",[a("td",[t._v("prefers")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td",[t._v("['database']")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("通知途径：默认为站内信")])])])]),t._v(" "),a("h3",{attrs:{id:"list-的合法值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-的合法值"}},[t._v("#")]),t._v(" list 的合法值")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("keyword")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("键名，一般为4个字符，不然引响排版美观")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("键值，一般为20个字符以内，不然引响排版美观")])]),t._v(" "),a("tr",[a("td",[t._v("copy")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("是否支持拷贝，true：是，false：否")])])])]),t._v(" "),a("h3",{attrs:{id:"template-的合法值-参考config-notification-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-的合法值-参考config-notification-php"}},[t._v("#")]),t._v(" template 的合法值，参考"),a("code",[t._v("config/notification.php")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("微信公众号模版编号")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("finish_payment")]),t._v(" "),a("td",[t._v("订单支付成功通知")]),t._v(" "),a("td",[t._v("OPENTM416836000")])]),t._v(" "),a("tr",[a("td",[t._v("order_confirm_receipt")]),t._v(" "),a("td",[t._v("订单确认收货通知")]),t._v(" "),a("td",[t._v("OPENTM202314085")])]),t._v(" "),a("tr",[a("td",[t._v("delivery_release")]),t._v(" "),a("td",[t._v("发货通知")]),t._v(" "),a("td",[t._v("OPENTM414956350")])]),t._v(" "),a("tr",[a("td",[t._v("refund_success")]),t._v(" "),a("td",[t._v("退款成功通知")]),t._v(" "),a("td",[t._v("OPENTM414889350")])]),t._v(" "),a("tr",[a("td",[t._v("admin_order_send_good")]),t._v(" "),a("td",[t._v("待发货提醒")]),t._v(" "),a("td",[t._v("OPENTM409521500")])]),t._v(" "),a("tr",[a("td",[t._v("admin_order_completion")]),t._v(" "),a("td",[t._v("订单完成通知")]),t._v(" "),a("td",[t._v("OPENTM412598101")])])])]),t._v(" "),a("h4",{attrs:{id:"使用-在env中配置对应的模板id-模板id通过微信公众号中的模板消息中查找对应的-微信公众号模版编号-进行添加-然后将得到的-模版id-填入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-在env中配置对应的模板id-模板id通过微信公众号中的模板消息中查找对应的-微信公众号模版编号-进行添加-然后将得到的-模版id-填入"}},[t._v("#")]),t._v(' 使用：在env中配置对应的模板ID，模板ID通过微信公众号中的模板消息中查找对应的"微信公众号模版编号"进行添加，然后将得到的"模版ID"填入')]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WECHAT_SUBSCRIPTION_INFORMATION_FINISH_PAYMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WECHAT_SUBSCRIPTION_INFORMATION_ORDER_CONFIRM_RECEIPT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WECHAT_SUBSCRIPTION_INFORMATION_SHIPMENTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WECHAT_SUBSCRIPTION_INFORMATION_REFUND_SUCCESS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WECHAT_SUBSCRIPTION_INFORMATION_ADMIN_ORDER_SEND_GOOD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WECHAT_SUBSCRIPTION_INFORMATION_ADMIN_ORDER_COMPLETION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"prefers-的合法值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefers-的合法值"}},[t._v("#")]),t._v(" prefers 的合法值")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("database")]),t._v(" "),a("td",[t._v("站内信，默认")])]),t._v(" "),a("tr",[a("td",[t._v("sms")]),t._v(" "),a("td",[t._v("短信")])]),t._v(" "),a("tr",[a("td",[t._v("miniweixin")]),t._v(" "),a("td",[t._v("微信小程序订阅消息")])]),t._v(" "),a("tr",[a("td",[t._v("wechat")]),t._v(" "),a("td",[t._v("微信公众号模板消息")])])])]),t._v(" "),a("h2",{attrs:{id:"增加或删除通知途径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加或删除通知途径"}},[t._v("#")]),t._v(" 增加或删除通知途径")]),t._v(" "),a("ul",[a("li",[t._v("修改"),a("code",[t._v("Notifications/Common.php")]),t._v("，"),a("code",[t._v("prefers")]),t._v("中添加或删除通知途径即可")])]),t._v(" "),a("h2",{attrs:{id:"手动添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动添加"}},[t._v("#")]),t._v(" 手动添加")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加通知统一入口代码`Notifications/Common.php`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在每个通知途径添加对应的代码")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Common")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Common")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("finishPayment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GoodIndent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//订单ID")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'identification'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GoodIndent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("identification")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//订单号")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GoodIndent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("goodsList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GoodIndent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("goodsList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'等多件'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//商品名称")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'total'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GoodIndent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("total")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//订单金额")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'余额支付'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'template'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'finish_payment'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通知模板标识")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'time'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GoodIndent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("pay_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//下单时间(付款时间)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'user_id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'web'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("id")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用户ID")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("h2",{attrs:{id:"其它操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它操作"}},[t._v("#")]),t._v(" 其它操作")]),t._v(" "),a("ul",[a("li",[t._v("访问database通知")])]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified static-context"}},[t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("User")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("notifications")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所用该用户下的通知")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("unreadNotifications")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所用该用户下未读的通知")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("将某条通知设为已读")])]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("unreadNotifications")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("where")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'8b9e0bc4-eb3f-4d36-aad9-2dce24a495c6'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("markAsRead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对某个信息进行已读标记")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unreadNotifications")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'read_at'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//所有的通知标为已读")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);