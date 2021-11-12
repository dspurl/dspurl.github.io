# 部署
> 因为项目涉及多个终端，推荐分四个子域名进行部署：api(放置laravel项目)、h5(放置h5项目)、admin（放置后台项目）、www（放置nuxt项目）；当然也可以全部部署在www下，但需要自行配置nginx
## 基于轻量应用服务器Docker CE版
> 该安装方式为已本地调试完成，需要搭建到服务器
> 该方法也适用于其它服务器搭建，需要自行安装docker ce
> 购买服务器后，用xshell连接
### 单应用部署
```shell
#安装git
yum install -y git
# 查看git是否安装成功 git --version
# 安装docker-compose（请不要用docker compose2及以上版本）
sudo curl -L "https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose -v
cd ../
# 创建应用目录
mkdir www
cd www
# 上传本地dsshop项目下的api目录（如果文件太大，不要把vendor上传，然后上传后再composer install），并解压重命名为dsshop
cd dsshop/public
# 将后台和h5打包好的文件分别放到api/public下的admin和h5目录下
mkdir web
# 并将本地网站项目打包好的.nuxt nuxt.config.js package.json package-lock.json dsshop.config.js static node_modules(如果文件太大，可不上传，在服务端npm i进行安装)上传到web目录下
# 安装环境
# 回到dsshop根目录下
docker-compose up -d
# 将数据库上传到服务器
# 资源迁移到服务器
docker-compose exec php bash
php artisan resource:migration http://dsshop.test
# 给storage777权限
chmod -R 777 storage/
# 访问IP、IP/admin、IP/h5，如果都能正常访问，API、后台、H5就搭建完成了
# 搭建网站
docker-compose exec web bash
npm start
# 复制对应地址，如http://172.18.0.3:3005
# ctrl+c退出
# 打开./docker/nginx/conf.d/default.conf找到如下代码，把地址换成自己的
location ~ ^/(api|storage|h5|admin|oauth) {
        try_files $uri $uri/ /index.php$is_args$args;
}
location / {
        proxy_redirect off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                          http://172.18.0.3:3005;
}
# 退出容器
exit
# 重启nginx容器
docker-compose restart nginx
# 访问首页，看是否能显示网站信息，之后可以将web/static当网站根目录进行操作即可
docker-compose exec web bash
#将pm2system.config.js的项目名改成对应的项目名，#然后上传到项目根目录
pm2 start dsshop.config.js
# pm2 list // pm2列表
# 开机自动启动
pm2 save
pm2 startup
# 开启队列和定时任务
# 修改/docker/supervisor/conf.d目录下的dsshop-scheduler.conf.example(定时任务)和dsshop-worker.conf.example(队列)
# 一般不需要修改，直接将这两个文件名的.example去除
# 进入php容器
docker-compose exec php bash
# 更新supervisor
supervisorctl update
#查看所有进程的状态
supervisorctl status
```
### 多应用部署
```shell
# 项目根据单应用部署处理，在安装docker-compose的时候按照多应用部署处理即可
# 将项目根目录下的dsdocker上传到服务器根目录下
cd dsdocker
docker-compose up -d
# 需要注意的是，多应用部署后php和web容器对应的是www根目录，所以需要进入到项目下再去执行
```

## RSET API部署(laravel)
- 参考 [Laravel部署](https://learnku.com/docs/laravel/7.x/deployment/7452 "Laravel部署")
```shell
php artisan storage:link
composer install
php artisan view:cache
```
### 配置
- 以下配置不修改不引响正常使用，修改后可提高网站安全性
```shell
PROJECT_KEY #配置前端密钥，可通过php artisan key:generate生成机制生成密钥，也可以自定义
APP_KEY #重置APP_KEY密钥
```
### 资源路径迁移
- 如果需要将本地的资源路径一键替换成线上路径的话，请执行以下代码
``` shell
php artisan resource:migration
# 可自定义域名
php artisan resource:migration http://dsshop.text
```
### 队列
- 可不开启，开启需要修改代码
``` shell
# 终端运行
php artisan queue:work
# 开启邮件相关的队列功能
## 邮件
### 普通邮件发送
Mail::to($request->email)->send(new VerificationCode($code));
### 支持队列的邮件发送
Mail::to($request->email)->queue(new VerificationCode($code));
## 通知相关
### api\app\Notifications\InvoicePaid.php
### 把注释掉的代码恢复，并屏蔽class InvoicePaid extends Notification
```

### 定时任务
- 定时任务涉及linux(这里拿宝塔为例)和laravel
- 进入宝塔-计划任务-添加计划任务，按下图配置
![](/image/14.png)
```shell
/www/server/php/72/bin/php /www/wwwroot/项目目录/artisan schedule:run >> /dev/null 2>&1
```
- 然后就不用去管了，以后有什么定时任务，直接在 `api/app/Console/Kernel.php`添加即可，更多参考: [任务调度](https://learnku.com/docs/laravel/7.x/scheduling/7492 "任务调度")

### 使用supervisor进程守护监控
- 使用supervisor进程守护监控来管理你的队列和定时任务
- 这里基于docker单应用部署搭建的环境来讲，默认已经安装好和自启动了supervisor，其它环境请自行处理
```shell
# 修改/docker/supervisor/conf.d目录下的dsshop-scheduler.conf.example(定时任务)和dsshop-worker.conf.example(队列)
# 一般不需要修改，直接将这两个文件名的.example去除
# 进入php容器
docker-compose exec php bash
# 更新supervisor
supervisorctl update
#查看所有进程的状态
supervisorctl status
#日志路径：/var/log/supervisor/supervisord.log
```

## 后台搭建
- 进入admin目录，执行以下代码
```shell
# 打包正式环境
npm run build:prod
```
- 如果需要打包到指定目录下，如h5
```shell
# admin/config/index.js
assetsPublicPath: '/h5/',
```
- 然后将打包好生成的文件上传到服务器，也可以发给别人直接访问（需要对方有本地环境，双击访问index.html无效）

## 移动端搭建
> 移动端采用uni-app，所以直接使用Huilder X软件即可以完成打包工作

## 网页端搭建
> 网页端采用vue的nuxt框架开发，部署参考以下步骤
- 进入`web`目录

```shell
# 打包
yarn run build
#将.nuxt nuxt.config.js package.json package-lock.json上传到服务器
#在服务器端项目根目录安装包
yarn install
# 测试是否能正常运行，将记录运行后的IP地址
yarn start
#nginx反向代理
server
{
    listen 80;
    root /www/wwwroot/dsshop.test;
    location / {
            proxy_redirect off;
            proxy_set_header Host               $host;
            proxy_set_header X-Real-IP          $remote_addr;
            proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto  $scheme;
            proxy_read_timeout          1m;
            proxy_connect_timeout       1m;
            proxy_pass                          http://上一步的IP地址:3004;
    }
}
#通过域名如果能正常访问到项目，即项目配置成功
#服务器安装pm2
npm i pm2 -g
pm2 --version
#将pm2system.config.js的项目名改成对应的项目名，#然后上传到项目根目录
pm2 start dsshopsystem.config.js
#查看pm2列表中是否有刚才的进程
pm2 list
# 开机自动启动
pm2 save
pm2 startup
```