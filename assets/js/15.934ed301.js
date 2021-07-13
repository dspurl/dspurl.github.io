(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{375:function(s,a,n){"use strict";n.r(a);var e=n(45),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"基本配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[s._v("#")]),s._v(" 基本配置")]),s._v(" "),n("h2",{attrs:{id:"配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),n("h3",{attrs:{id:"后端配置相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后端配置相关"}},[s._v("#")]),s._v(" 后端配置相关")]),s._v(" "),n("ul",[n("li",[s._v("后端配置文件在config目录下，但实际配置时，并不需要去修改该目录下的文件，而是直接修改"),n("code",[s._v(".env")]),s._v("、"),n("code",[s._v(".env.dev")]),s._v("、"),n("code",[s._v(".env.prod")])]),s._v(" "),n("li",[s._v("以下是常用的配置参数说明,更多配置参数请查看"),n("code",[s._v("api/config")])])]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[s._v('APP_KEY=\'\' #应用程序密钥执行php artisan key:generate可生成\nAPP_DEBUG=true #测试环境开启，正常环境就关闭\nHOMESTEAD_WINDOWS= true #windows下软链接无效，将导致资源无法上传，可以设置为true\nDB_HOST=127.0.0.1 #mysql主机IP，一般不需要修改\nDB_PORT=3306 #mysql端口号，一般不需要修改\nDB_DATABASE=dsshop #mysql表名\nDB_USERNAME=dsshop #mysql用户名\nDB_PASSWORD=123456 #mysql密码\nCACHE_DRIVER=redis #缓存模式\nQUEUE_CONNECTION=redis #队列模式\nREDIS_HOST=127.0.0.1 #REDIS服务器IP\nREDIS_PASSWORD=dsshop #REDIS密码\nREDIS_PORT=6379 #REDIS端口\nREDIS_DB=0  #REDIS默认数据库\nREDIS_CACHE_DB=1 #REDIS缓存数据库\nWECHAT_MINI_PROGRAM_APPID=""    #微信小程序appid\nWECHAT_MINI_PROGRAM_SECRET="" #微信小程序secret\nWECHAT_PAYMENT_APPID="" #微信支付appid\nWECHAT_PAYMENT_MCH_ID="" #微信支付mch_id\nWECHAT_PAYMENT_KEY="" #微信支付key\nWECHAT_PAYMENT_CERT_PATH="storage/pay/weixin/apiclient_cert.pem" #微信支付公钥\nWECHAT_PAYMENT_KEY_PATH="storage/pay/weixin/apiclient_key.pem" #微信支付私钥\nWECHAT_SUBSCRIPTION_INFORMATION_SHIPMENTS="" #订单发货通知ID\nSMS_ALIYUN_ACCESS_ID="" #阿里短信access_id\nSMS_ALIYUN_SECRET="" #阿里短信secret\nSMS_ALIYUN_SIGNATURE="" #阿里短信签名\nSMS_ALIYUN_VERIFICATION_CODE="" #阿里短信短信模板ID\nPASSPORT_CLIENT_ID="" #Passport OAuth认证的client_id\nPASSPORT_CLIENT_SECRET="" #Passport OAuth认证的client_secret\nBACKUP_SWITCH=true  #备份开关(请先确保已配置邮箱功能，不然备份会报错)\nBACKUP_TIME=02:00   #备份时间（该时间为每天执行时间，如需按周或其它指定时间，请自行配置backup.php文件）\nBACKUP_FILES_TIME=02:00   #数据库备份时间（设置后仅备份数据库，该时间为每天执行时间，如需按周或其它指定时间，请自行配置backup.php文件）\nBACKUP_CLEAN_TIME=02:00   #文件备份时间（设置后仅备份文件，该时间为每天执行时间，如需按周或其它指定时间，请自行配置backup.php文件）\nBACKUP_CLEAN_TIME=02:20 #旧备份清除时间（该时间为每天执行时间，如需按周或其它指定时间，请自行配置backup.php文件）\nBACKUP_RECEIVE_MAIL= #备份结果接收邮箱\nPROJECT_KEY #前端密钥\nORDER_OVERTIME=10 #订单超时时间(分钟)\nAUTOMATIC_RECEIVING_STATE=true   #是否开启自动收货\nAUTOMATIC_RECEIVING=7   #多少天后自动收货\nAUTOMATIC_EVALUATE_STATE=true   #是否开启自动评价功能\nAUTOMATIC_EVALUATE=12   #多少天后自动好评\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("h3",{attrs:{id:"后台配置相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后台配置相关"}},[s._v("#")]),s._v(" 后台配置相关")]),s._v(" "),n("ul",[n("li",[s._v("后台配置只需要修改RSET API地址即可，修改"),n("code",[s._v("dev.env.js")]),s._v("、"),n("code",[s._v("prod.env.js")]),s._v("的"),n("code",[s._v("BASE_API")])])]),s._v(" "),n("h3",{attrs:{id:"uni-app配置相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uni-app配置相关"}},[s._v("#")]),s._v(" uni-app配置相关")]),s._v(" "),n("div",{staticClass:"language-markdown line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-markdown"}},[n("code",[n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v("client/Dsshop/utils/config.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v("该文件可以配置生产环境、测试环境和本地环境，都有中文注明，修改NODE_ENV即可在打包时区分生产和测试环境")]),s._v("\nlbsQq: #腾讯地图的key，注意需要开通WebService API\ndomainName: #API域名\nsecret: #api密钥，对应api/.env的APP_KEY\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"微信小程序配置相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序配置相关"}},[s._v("#")]),s._v(" 微信小程序配置相关")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("开发->开发设置")]),s._v("配置服务器域名、业务域名")]),s._v(" "),n("li",[n("code",[s._v("功能->订阅消息")]),s._v("添加模板，标题为"),n("code",[s._v("订单发货通知")]),s._v("，具体参考下图，然后获取到模板ID，填写到WECHAT_SUBSCRIPTION_INFORMATION_SHIPMENTS\n"),n("img",{attrs:{src:"/image/11.png",alt:""}})]),s._v(" "),n("li",[s._v("开通微信支付，参考"),n("a",{attrs:{href:"https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml",title:"账号关联（AppID绑定）",target:"_blank",rel:"noopener noreferrer"}},[s._v("账号关联（AppID绑定）"),n("OutboundLink")],1)])]),s._v(" "),n("h4",{attrs:{id:"修改后端配置文件-添加微信支付相关配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改后端配置文件-添加微信支付相关配置"}},[s._v("#")]),s._v(" 修改后端配置文件,添加微信支付相关配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('WECHAT_PAYMENT_APPID="" #微信支付appid\nWECHAT_PAYMENT_MCH_ID="" #微信支付mch_id\nWECHAT_PAYMENT_KEY="" #微信支付key\nWECHAT_PAYMENT_CERT_PATH="storage/pay/weixin/apiclient_cert.pem" #微信支付公钥\nWECHAT_PAYMENT_KEY_PATH="storage/pay/weixin/apiclient_key.pem" #微信支付私钥\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("blockquote",[n("p",[s._v("其它小程序配置参考微信小程序配置")])])])}),[],!1,null,null,null);a.default=t.exports}}]);