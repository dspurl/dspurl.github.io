(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{421:function(s,t,a){"use strict";a.r(t);var e=a(58),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[s._v("#")]),s._v(" 架构")]),s._v(" "),a("blockquote",[a("p",[s._v("以下将介绍dsshop的设计架构，让你更好的了解dsshop是如何工作的")])]),s._v(" "),a("h2",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[s._v("#")]),s._v(" 项目结构")]),s._v(" "),a("ul",[a("li",[s._v("多客户端->API服务器->REDIS队列->mysql数据库")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/image/construction1.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"消息通知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息通知"}},[s._v("#")]),s._v(" 消息通知")]),s._v(" "),a("ul",[a("li",[s._v("消息通知是项目运营必不可少的环节，比如用户购买后，后台管理人员能第一时间收到订单提醒，用户在平台发货后第一时间能收到发货通知等等")]),s._v(" "),a("li",[s._v("因小程序服务消息受限，不能主动发送，故项目已整合微信公众号的模板消息，并加入了引导，当然也集成了邮件、站内信通知")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/image/construction2.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"注册机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册机制"}},[s._v("#")]),s._v(" 注册机制")]),s._v(" "),a("ul",[a("li",[s._v("项目支持手机验证码注册和授权登录两种方案")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/image/construction3.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"支付"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支付"}},[s._v("#")]),s._v(" 支付")]),s._v(" "),a("ul",[a("li",[s._v("不同客户端同一支付入口，让支付变的更简单")])]),s._v(" "),a("p",[a("img",{attrs:{src:"/image/construction4.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"观察者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[s._v("#")]),s._v(" 观察者模式")]),s._v(" "),a("blockquote",[a("p",[s._v("观察者模式是为了更好的解耦，比如用户下单付款这个动作，正常的流程应该用户在付款后，订单状态变更为已付款，这个流程应该就结束了；但你可能需要在用户下单付款后进行其它操作，如通知、资金记录等等，传统的思路是直接将这些操作代码直接写在下单付款所在的代码块中；这种方式虽然能解决问题，但会存在高耦合的问题，也就是当你要追加一个操作的时候，就需要修改下单付款对应的方法，有可能需要修改多处（微信支付、余额支付、支付宝支付等等），时间长了，你可能只修改了某几处，而其它几处并没有修改，大大增加了试错成本。")])]),s._v(" "),a("ul",[a("li",[s._v("观察者模式，其实有多种实现方案，如事件和Observer观察者模式，本项目采用了Observer观察者模式；之所以不采用事件的原因是，事件并不能完成解耦，需要在业务代码中添加触发监听器的代码，而且还需要事先知道需要传递的参数，不然当后期监听器中需要用到没有传递的参数时，需要修改触发代码")]),s._v(" "),a("li",[s._v("以下主要介绍Observer观察者模式，该模式和vue的生命周期类似")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("retrieved,            #获取到模型实例后触发\ncreating,             #创建过程前                                * 常用\ncreated,              #创建成功后                                * 常用\nupdating,             #更新过程前                                * 常用\nupdated,              #更新成功后                                * 常用\nsaving,               #代表这两个方法的集合creating,updating       * 常用\nsaved,                #代表这两个方法的集合created,updated         * 常用\ndeleting,             #删除过程前                                * 常用\ndeleted,              #删除过程后                                * 常用\nrestoring,            #恢复软删除记录前触发\nrestored,             #恢复软删除记录后触发\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("现在只需要在你想要追加的时候定义一个Observer观察者，即可轻松的实现你想要的效果，而且不用修改原始代码，在dsshop更新时，达到无缝升级")]),s._v(" "),a("li",[s._v("观察者如何使用，将会在插件开发中进行详细介绍\n"),a("img",{attrs:{src:"/image/construction5.png",alt:""}})])])])}),[],!1,null,null,null);t.default=r.exports}}]);