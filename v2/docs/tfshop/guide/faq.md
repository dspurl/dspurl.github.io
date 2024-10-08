# 常见问题
### composer install安装出错
- 可以通过composer update修复，也可直接将composer.lock删除，然后再执行`composer install`
### Client error: POST http://127.1.1/oauth/token resulted in a 401 Unauthorized response: {"error":"invalid_client","message":"Client authentication failed"}
- 以上错误推测因为生成oauth密钥过早造成，故新的文档最后才生成该密钥
- 解决办法就是先删除已经生成的`oauth-private.key`和`oauth-public.key`，然后再重新执行`php artisan passport:keys`
- 如果是主从数据库的话，请检查是否有同步
### Server error: `POST http://dswjcms.test/oauth/token` resulted in a `500 Internal Server Error` response:\n{\"status_code\":500,\"code\":10,\"message\":\"The provided authorization grant (e.g., authorization code, resource owner crede (truncated...)\n
- 在`php artisan passport:client --password`步骤时，未选择`admins`超成的错误，可修改`oauth_clients`表，将`provider`改成`admins`
### [curl] 7: Failed to connect to xxx port 80: Connection refused
- 由于laradock没有正确配置造成的错误
- 需要修改docker-compose.yml的NGINX Server中的networks部分，如下代码，在`aliases`和`aliases`添加自己的域名，如下`tfshop.test`
``` shell
### NGINX Server ##################################

    nginx:
      build:
        context: ./nginx
        args:
          - PHP_UPSTREAM_CONTAINER=${NGINX_PHP_UPSTREAM_CONTAINER}
          - PHP_UPSTREAM_PORT=${NGINX_PHP_UPSTREAM_PORT}
      volumes_from:
        - applications
      volumes:
        - ${NGINX_HOST_LOG_PATH}:/var/log/nginx
        - ${NGINX_SITES_PATH}:/etc/nginx/sites-available
      ports:
        - "${NGINX_HOST_HTTP_PORT}:80"
        - "${NGINX_HOST_HTTPS_PORT}:443"
      depends_on:
        - php-fpm
      networks:
        frontend:
         aliases:
          - tfshop.test
        backend:
         aliases:
          - tfshop.test
```
### 商品搜一个字为什么无法查询出来？
- 商品搜索采用mysql的全文搜索功能，默认需要2个字，如果需要支持1个字，需要修改mysql.conf中的`ngram_token_size=1`
- 具体可以查看[模糊搜索改为全文搜索](https://github.com/dspurl/tfshop/pull/74 "模糊搜索改为全文搜索") 

### laradock备份报`Backup failed because The dump process failed with exitcode 127 : Command not found : sh: 1: mysqldump: not found`
- 打开你的`workspace/Dockerfile`最后一行添加以下代码
```shell
#
#--------------------------------------------------------------------------
# mysql-client
#--------------------------------------------------------------------------
#

USER root

RUN apt update && \
    apt install -y mysql-client
```
- 然后执行以下代码
```shell
docker-compose down
docker-compose build workspace
docker-compose up -d redis nginx mysql
```
### 网站、后台记住密码一般是保存几天，如何设置
- 默认为7天，可通过env配置`REFRESH_PASSPORT_EXPIRES_IN`

### 网站、后台记住密码，关闭浏览器后并没有生效
- 请查看浏览器是否关闭浏览器清除cookie功能，设置->隐私设置和安全设置->Cookie及其它网络安全设置