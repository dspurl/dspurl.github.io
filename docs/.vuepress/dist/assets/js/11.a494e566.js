(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{356:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[t._v("#")]),t._v(" 基本配置")]),t._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("h3",{attrs:{id:"后端配置相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端配置相关"}},[t._v("#")]),t._v(" 后端配置相关")]),t._v(" "),a("ul",[a("li",[t._v("后端配置文件在config目录下，但实际配置时，并不需要去修改该目录下的文件，而是直接修改"),a("code",[t._v(".env")]),t._v("、"),a("code",[t._v(".env.dev")]),t._v("、"),a("code",[t._v(".env.prod")])]),t._v(" "),a("li",[t._v("以下是常用的配置参数说明,更多配置参数请查看"),a("code",[t._v("api/config")])])]),t._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[t._v("APP"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("KEY='' #应用程序密钥执行php artisan key:generate可生成\nAPP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("DEBUG=true #测试环境开启，正常环境就关闭\nHOMESTEAD"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("WINDOWS= true #windows下软链接无效，将导致资源无法上传，可以设置为true\nDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("HOST=127.0.0.1 #mysql主机IP，一般不需要修改\nDB"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("PORT=3306 #mysql端口号，一般不需要修改\nDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("DATABASE=dsshop #mysql表名\nDB"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("USERNAME=dsshop #mysql用户名\nDB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("PASSWORD=123456 #mysql密码\nCACHE"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("DRIVER=redis #缓存模式\nQUEUE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("CONNECTION=redis #队列模式\nREDIS"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("HOST=127.0.0.1 #REDIS服务器IP\nREDIS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("PASSWORD=dsshop #REDIS密码\nREDIS"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("PORT=6379 #REDIS端口\nREDIS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("DB=0  #REDIS默认数据库\nREDIS"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("CACHE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("DB=1 #REDIS缓存数据库\nWECHAT"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("MINI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("PROGRAM"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v('APPID=""    #微信小程序appid\nWECHAT')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("MINI"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("PROGRAM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v('SECRET="" #微信小程序secret\nWECHAT'),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("PAYMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v('APPID="" #微信支付appid\nWECHAT'),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("PAYMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("MCH"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v('ID="" #微信支付mch')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("id\nWECHAT"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("PAYMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v('KEY="" #微信支付key\nWECHAT'),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("PAYMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("CERT"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v('PATH="storage/pay/weixin/apiclient')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v('cert.pem" #微信支付公钥\nWECHAT'),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("PAYMENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("KEY"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v('PATH="storage/pay/weixin/apiclient')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v('key.pem" #微信支付私钥\nWECHAT'),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("SUBSCRIPTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("INFORMATION"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v('SHIPMENTS="" #订单发货通知ID\nSMS')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("ALIYUN"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("ACCESS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v('ID="" #阿里短信access'),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("id\nSMS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("ALIYUN"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v('SECRET="" #阿里短信secret\nSMS')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("ALIYUN"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v('SIGNATURE="" #阿里短信签名\nSMS')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("ALIYUN"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("VERIFICATION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v('CODE="" #阿里短信短信模板ID\nPASSPORT'),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("CLIENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v('ID="" #Passport OAuth认证的client'),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("id\nPASSPORT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("CLIENT"),a("span",{pre:!0,attrs:{class:"token italic"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")]),a("span",{pre:!0,attrs:{class:"token content"}},[t._v('SECRET="" #Passport OAuth认证的client')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("_")])]),t._v("secret\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])]),a("h3",{attrs:{id:"后台配置相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后台配置相关"}},[t._v("#")]),t._v(" 后台配置相关")]),t._v(" "),a("ul",[a("li",[t._v("后台配置只需要修改RSET API地址即可，修改"),a("code",[t._v("dev.env.js")]),t._v("、"),a("code",[t._v("prod.env.js")]),t._v("的"),a("code",[t._v("BASE_API")])])]),t._v(" "),a("h3",{attrs:{id:"uni-app配置相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uni-app配置相关"}},[t._v("#")]),t._v(" uni-app配置相关")]),t._v(" "),a("ul",[a("li",[t._v("uni-app需要配置二块地方")])]),t._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v("trade/Dsshop/utils/config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v("该文件可以配置生产环境、测试环境和本地环境，都有中文注明，修改NODE_ENV即可在打包时区分生产和测试环境")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"微信小程序配置相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序配置相关"}},[t._v("#")]),t._v(" 微信小程序配置相关")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("开发->开发设置")]),t._v("配置服务器域名、业务域名")]),t._v(" "),a("li",[a("code",[t._v("功能->订阅消息")]),t._v("添加模板，标题为"),a("code",[t._v("订单发货通知")]),t._v("，具体参考下图，然后获取到模板ID，填写到WECHAT_SUBSCRIPTION_INFORMATION_SHIPMENTS\n"),a("img",{attrs:{src:"/image/11.png",alt:""}})]),t._v(" "),a("li",[t._v("开通微信支付，参考"),a("a",{attrs:{href:"https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml",title:"账号关联（AppID绑定）",target:"_blank",rel:"noopener noreferrer"}},[t._v("账号关联（AppID绑定）"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"修改后端配置文件-添加微信支付相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改后端配置文件-添加微信支付相关配置"}},[t._v("#")]),t._v(" 修改后端配置文件,添加微信支付相关配置")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('WECHAT_PAYMENT_APPID="" #微信支付appid\nWECHAT_PAYMENT_MCH_ID="" #微信支付mch_id\nWECHAT_PAYMENT_KEY="" #微信支付key\nWECHAT_PAYMENT_CERT_PATH="storage/pay/weixin/apiclient_cert.pem" #微信支付公钥\nWECHAT_PAYMENT_KEY_PATH="storage/pay/weixin/apiclient_key.pem" #微信支付私钥\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("blockquote",[a("p",[t._v("其它小程序配置参考微信小程序配置")])])])}),[],!1,null,null,null);s.default=e.exports}}]);