# 常见问题
## Client error: POST http://127.1.1/oauth/token resulted in a 401 Unauthorized response: {"error":"invalid_client","message":"Client authentication failed"}
- 以上错误推测因为生成oauth密钥过早造成，故新的文档最后才生成该密钥
- 解决办法就是先删除已经生成的`oauth-private.key`和`oauth-public.key`，然后再重新执行`php artisan passport:keys`
## [curl] 7: Failed to connect to xxx port 80: Connection refused
- 由于laradock没有正确配置造成的错误
- 需要修改docker-compose.yml的NGINX Server中的networks部分，如下代码，在`aliases`和`aliases`添加自己的域名，如下`dsshop.text`
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
          - dsshop.text
        backend:
         aliases:
          - dsshop.text
```