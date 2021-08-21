(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{381:function(s,e,a){"use strict";a.r(e);var t=a(45),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("h3",{attrs:{id:"composer-install安装出错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composer-install安装出错"}},[s._v("#")]),s._v(" composer install安装出错")]),s._v(" "),a("ul",[a("li",[s._v("可以通过composer update修复，也可直接将composer.lock删除，然后再执行"),a("code",[s._v("composer install")])])]),s._v(" "),a("h3",{attrs:{id:"client-error-post-http-127-1-1-oauth-token-resulted-in-a-401-unauthorized-response-error-invalid-client-message-client-authentication-failed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-error-post-http-127-1-1-oauth-token-resulted-in-a-401-unauthorized-response-error-invalid-client-message-client-authentication-failed"}},[s._v("#")]),s._v(' Client error: POST http://127.1.1/oauth/token resulted in a 401 Unauthorized response: {"error":"invalid_client","message":"Client authentication failed"}')]),s._v(" "),a("ul",[a("li",[s._v("以上错误推测因为生成oauth密钥过早造成，故新的文档最后才生成该密钥")]),s._v(" "),a("li",[s._v("解决办法就是先删除已经生成的"),a("code",[s._v("oauth-private.key")]),s._v("和"),a("code",[s._v("oauth-public.key")]),s._v("，然后再重新执行"),a("code",[s._v("php artisan passport:keys")])]),s._v(" "),a("li",[s._v("如果是主从数据库的话，请检查是否有同步")])]),s._v(" "),a("h3",{attrs:{id:"server-error-post-http-dswjcms-test-oauth-token-resulted-in-a-500-internal-server-error-response-n-status-code-500-code-10-message-the-provided-authorization-grant-e-g-authorization-code-resource-owner-crede-truncated-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-error-post-http-dswjcms-test-oauth-token-resulted-in-a-500-internal-server-error-response-n-status-code-500-code-10-message-the-provided-authorization-grant-e-g-authorization-code-resource-owner-crede-truncated-n"}},[s._v("#")]),s._v(" Server error: "),a("code",[s._v("POST http://dswjcms.test/oauth/token")]),s._v(" resulted in a "),a("code",[s._v("500 Internal Server Error")]),s._v(' response:\\n{"status_code":500,"code":10,"message":"The provided authorization grant (e.g., authorization code, resource owner crede (truncated...)\\n')]),s._v(" "),a("ul",[a("li",[s._v("在"),a("code",[s._v("php artisan passport:client --password")]),s._v("步骤时，未选择"),a("code",[s._v("admins")]),s._v("超成的错误，可修改"),a("code",[s._v("oauth_clients")]),s._v("表，将"),a("code",[s._v("provider")]),s._v("改成"),a("code",[s._v("admins")])])]),s._v(" "),a("h3",{attrs:{id:"curl-7-failed-to-connect-to-xxx-port-80-connection-refused"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curl-7-failed-to-connect-to-xxx-port-80-connection-refused"}},[s._v("#")]),s._v(" [curl] 7: Failed to connect to xxx port 80: Connection refused")]),s._v(" "),a("ul",[a("li",[s._v("由于laradock没有正确配置造成的错误")]),s._v(" "),a("li",[s._v("需要修改docker-compose.yml的NGINX Server中的networks部分，如下代码，在"),a("code",[s._v("aliases")]),s._v("和"),a("code",[s._v("aliases")]),s._v("添加自己的域名，如下"),a("code",[s._v("dsshop.test")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### NGINX Server ##################################")]),s._v("\n\n    nginx:\n      build:\n        context: ./nginx\n        args:\n          - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PHP_UPSTREAM_CONTAINER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NGINX_PHP_UPSTREAM_CONTAINER}")]),s._v("\n          - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PHP_UPSTREAM_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NGINX_PHP_UPSTREAM_PORT}")]),s._v("\n      volumes_from:\n        - applications\n      volumes:\n        - "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NGINX_HOST_LOG_PATH}")]),s._v(":/var/log/nginx\n        - "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NGINX_SITES_PATH}")]),s._v(":/etc/nginx/sites-available\n      ports:\n        - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NGINX_HOST_HTTP_PORT}")]),s._v(':80"')]),s._v("\n        - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NGINX_HOST_HTTPS_PORT}")]),s._v(':443"')]),s._v("\n      depends_on:\n        - php-fpm\n      networks:\n        frontend:\n         aliases:\n          - dsshop.test\n        backend:\n         aliases:\n          - dsshop.test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"商品搜一个字为什么无法查询出来"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#商品搜一个字为什么无法查询出来"}},[s._v("#")]),s._v(" 商品搜一个字为什么无法查询出来？")]),s._v(" "),a("ul",[a("li",[s._v("商品搜索采用mysql的全文搜索功能，默认需要2个字，如果需要支持1个字，需要修改mysql.conf中的"),a("code",[s._v("ngram_token_size=1")])]),s._v(" "),a("li",[s._v("具体可以查看"),a("a",{attrs:{href:"https://github.com/dspurl/dsshop/pull/74",title:"模糊搜索改为全文搜索",target:"_blank",rel:"noopener noreferrer"}},[s._v("模糊搜索改为全文搜索"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"laradock备份报backup-failed-because-the-dump-process-failed-with-exitcode-127-command-not-found-sh-1-mysqldump-not-found"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#laradock备份报backup-failed-because-the-dump-process-failed-with-exitcode-127-command-not-found-sh-1-mysqldump-not-found"}},[s._v("#")]),s._v(" laradock备份报"),a("code",[s._v("Backup failed because The dump process failed with exitcode 127 : Command not found : sh: 1: mysqldump: not found")])]),s._v(" "),a("ul",[a("li",[s._v("打开你的"),a("code",[s._v("workspace/Dockerfile")]),s._v("最后一行添加以下代码")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--------------------------------------------------------------------------")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql-client")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#--------------------------------------------------------------------------")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" root\n\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y mysql-client\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("ul",[a("li",[s._v("然后执行以下代码")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("docker-compose down\ndocker-compose build workspace\ndocker-compose up -d redis nginx mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);