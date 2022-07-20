(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{427:function(a,t,v){"use strict";v.r(t);var _=v(58),s=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"功能列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#功能列表"}},[a._v("#")]),a._v(" 功能列表")]),a._v(" "),v("h2",{attrs:{id:"rbac权限控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rbac权限控制"}},[a._v("#")]),a._v(" RBAC权限控制")]),a._v(" "),v("blockquote",[v("p",[a._v("RBAC（基于角色的权限控制）模型的核心是在用户和权限之间引入了角色的概念。取消了用户和权限的直接关联，改为通过用户关联角色、角色关联权限的方法来间接地赋予用户权限（如下图），从而达到用户和权限解耦的目的。\n"),v("img",{attrs:{src:"/image/RBAC.png",alt:""}})])]),a._v(" "),v("ul",[v("li",[a._v("用户和角色是多对多关系，即：一个用户可同时充当好几种角色，一种角色可以有多个用户担当")]),a._v(" "),v("li",[a._v("灵活度高，可精确到每个动作，可为不同角色使用不同的后台首页，一键分配，时时生效")])]),a._v(" "),v("h2",{attrs:{id:"商品sku"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#商品sku"}},[a._v("#")]),a._v(" 商品SKU")]),a._v(" "),v("blockquote",[v("p",[a._v("SKU=stock keeping unit(库存量单位) SKU即库存进出计量的单位（买家购买、商家进货、供应商备货、工厂生产都是依据SKU进行的）。")]),a._v(" "),v("p",[a._v("SKU是物理上不可分割的最小存货单元。也就是说一款商品，可以根据SKU来确定具体的货物存量。")]),a._v(" "),v("p",[a._v("如一件M码（四个尺码：S码、M码、L码、X码）的粉色（三种颜色：粉色、黄色、黑色）Zara女士风衣，其中M码、粉色就是一组SKU的组合。")]),a._v(" "),v("p",[a._v("SKU在生成时, 会根据属性生成相应的笛卡尔积，根据一组SKU可以确定商品的库存情况，那么上面的Zara女士风衣一共有4 * 3 = 12个SKU组合。")]),a._v(" "),v("p",[a._v("M码+粉色这两个属性组合被称为一组SKU、因为SKU是物理上不可分割的最小存货单元，单凭尺寸或者颜色是没有办法确认这款商品的库存情况。")]),a._v(" "),v("p",[a._v("同理商家进货补货也是通过SKU来完成的，试问淘宝店家跟供货商说我要100件红色女士风衣？供应商知道该怎么给他备货吗？")]),a._v(" "),v("p",[a._v("显然是不知道的。因为还欠缺了另外的一个销售属性【尺码】。")])]),a._v(" "),v("ul",[v("li",[a._v("商品全部采用SKU模式，如需要单属性模式，请为商品绑定一个单属性的SKU即可。")]),a._v(" "),v("li",[a._v("商品支持添加图片和视频")]),a._v(" "),v("li",[a._v("商品可以为每个SKU组合设置不同的主图")])]),a._v(" "),v("h2",{attrs:{id:"运费模板"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运费模板"}},[a._v("#")]),a._v(" 运费模板")]),a._v(" "),v("blockquote",[v("p",[a._v("是针对交易成交后卖家需要频繁修改运费而推出的一种运费工具。通过运费模板，卖家可以解决不同地区的买家购买商品时运费差异化的问题，还可以解决同一买家在店内购买多件商品时的运费合并问题。")])]),a._v(" "),v("ul",[v("li",[a._v("运费模板支持配置多套，并可以复制模板，快速生成新的运费模板。")])]),a._v(" "),v("h2",{attrs:{id:"购物车"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#购物车"}},[a._v("#")]),a._v(" 购物车")]),a._v(" "),v("ul",[v("li",[a._v("用户可以将商品添加到购物车")]),a._v(" "),v("li",[a._v("在购物车界面可以修改商品的规格")]),a._v(" "),v("li",[a._v("允许清空购物车")]),a._v(" "),v("li",[a._v("允许删除购物车商品")]),a._v(" "),v("li",[a._v("允许选择部分商品去结算")]),a._v(" "),v("li",[a._v("商品失效，购物车以失效状态标注")])]),a._v(" "),v("h2",{attrs:{id:"配送模板"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配送模板"}},[a._v("#")]),a._v(" 配送模板")]),a._v(" "),v("blockquote",[v("p",[a._v("针对交易成交后，用户需要频繁修改收货地址推出的一种工具。通过配送模板，用户可以设置多个收货信息，在购买商品时，根据需求选择不同的收货地址。")])]),a._v(" "),v("ul",[v("li",[a._v("支持获取微信中的收货地址")]),a._v(" "),v("li",[a._v("支持通过定位获取收货地址")])]),a._v(" "),v("h2",{attrs:{id:"订单"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#订单"}},[a._v("#")]),a._v(" 订单")]),a._v(" "),v("ul",[v("li",[a._v("项目支持用户下单、取消订单、平台发货、平台退款（支持退还一部分货款）")])]),a._v(" "),v("h2",{attrs:{id:"支付"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#支付"}},[a._v("#")]),a._v(" 支付")]),a._v(" "),v("ul",[v("li",[a._v("支持余额支付（默认无充值入口，该余额为退款金额或平台奖励金额）")]),a._v(" "),v("li",[a._v("统一支付入口：项目对支付进行了封装，默认接入微信支付（H5支付、小程序支付、Native支付、JSAPI支付）")])]),a._v(" "),v("h2",{attrs:{id:"授权登录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#授权登录"}},[a._v("#")]),a._v(" 授权登录")]),a._v(" "),v("ul",[v("li",[a._v("统一授权登录入口：项目对授权登录进行了封装，默认为微信小程序授权登录（已集成支付宝、字节跳动）")])]),a._v(" "),v("h2",{attrs:{id:"轮播"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#轮播"}},[a._v("#")]),a._v(" 轮播")]),a._v(" "),v("ul",[v("li",[a._v("可以为项目添加轮播和广告位资源")])]),a._v(" "),v("h2",{attrs:{id:"模板通知"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模板通知"}},[a._v("#")]),a._v(" 模板通知")]),a._v(" "),v("ul",[v("li",[a._v("项目对通知进行了封装，支持站内信、微信小程序订阅消息、微信公众号模板消息")]),a._v(" "),v("li",[a._v("用户端开放通知开关，允许用户开启和关闭某些通知功能")]),a._v(" "),v("li",[a._v("客户端集成关联引导功能，即当用户未绑定邮箱时，引导用户绑定邮箱；当用户未关注微信公众号时，引导用户关注微信公众号（具体可通过演示小程序进行体验）")]),a._v(" "),v("li",[a._v("支持绑定后台管理人员账号，当用户下单、收货时，将通过通知模板下发给管理人员")])]),a._v(" "),v("h2",{attrs:{id:"短信验证码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#短信验证码"}},[a._v("#")]),a._v(" 短信验证码")]),a._v(" "),v("ul",[v("li",[a._v("集成阿里云短信，用户注册、找回密码时需要用户获取短信完成验证(未配置短信时，用户点击获取验证码后，将自动填写验证码)")])]),a._v(" "),v("h2",{attrs:{id:"统计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#统计"}},[a._v("#")]),a._v(" 统计")]),a._v(" "),v("ul",[v("li",[a._v("接入微信小程序部分统计，结合项目本身数据统计，让你全方位了解项目的真实数据")])]),a._v(" "),v("h2",{attrs:{id:"事务支持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事务支持"}},[a._v("#")]),a._v(" 事务支持")]),a._v(" "),v("blockquote",[v("p",[a._v("进行多步操作时，如果有一步出现错误的话，将进行事务回滚操作，避免产生错误数据")])]),a._v(" "),v("h2",{attrs:{id:"redis支持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#redis支持"}},[a._v("#")]),a._v(" Redis支持")]),a._v(" "),v("ul",[v("li",[a._v("采用Redis缓存、Redis队列技术")])]),a._v(" "),v("h2",{attrs:{id:"注册协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注册协议"}},[a._v("#")]),a._v(" 注册协议")]),a._v(" "),v("ul",[v("li",[a._v("自带隐私协议、注册协议（需添加栏目文章模块）")])]),a._v(" "),v("h2",{attrs:{id:"邮件系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#邮件系统"}},[a._v("#")]),a._v(" 邮件系统")]),a._v(" "),v("ul",[v("li",[a._v("当配置了邮件时，该功能自动开启，默认未配置处于关闭状态")]),a._v(" "),v("li",[a._v("邮箱认证、绑定、消息通知发送、备份结果通知")])]),a._v(" "),v("h2",{attrs:{id:"备份系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#备份系统"}},[a._v("#")]),a._v(" 备份系统")]),a._v(" "),v("ul",[v("li",[a._v("可对项目和数据库自动进行备份，并支持保留指定天数，超出后自动清除旧备份")])])])}),[],!1,null,null,null);t.default=s.exports}}]);