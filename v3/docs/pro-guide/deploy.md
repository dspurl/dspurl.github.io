# 部署
> 因为项目涉及多个终端，推荐分四个子域名进行部署：api(放置laravel项目)、h5(放置h5项目)、admin（放置后台项目）、www（放置nuxt项目）；当然也可以全部部署在www下，但需要自行配置nginx
## 基于轻量应用服务器Docker CE版
> 该安装方式为已本地调试完成，需要搭建到服务器
> 该方法也适用于其它服务器搭建，需要自行安装docker ce
> 购买服务器后，用xshell连接
### 环境部署
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
# 上传本地tfshop-pro项目到服务器
# 安装环境
cd tfshop-pro/dsdocker
docker-compose up -d
# 为了安全起见，请自行修改mysql root密码和为redis配置密码
```
## 傻瓜式安装RSET API部署(laravel)
> 以下以tfshop-pro.test为例
- 访问http://tfshop-pro.test/install
- 根据步骤点“下一步”即可完成安装
## 后台搭建
- 进入`admin`目录，执行以下代码
```shell
# 打包正式环境
npm run build:prod
```
- 访问tfshop-pro.test/admin
- 输入RSET API部署时设置的后台账号密码
## 网页端搭建
- 修改配置文件：`client/nuxt-web/mi/.env.prod`
- 进入`client/nuxt-web`目录，执行以下代码
```shell
npm run build
#将.nuxt nuxt.config.js package.json package-lock.json config tfshop-pro.config.js放到api/public/web目录下
cd api/public/web
npm install
# 测试是否能正常运行，将记录运行后的IP地址
npm start
# 复制对应地址，如http://172.18.0.3:3005
#修改nginx以下部分代码中的ip地址
server
{
    ...
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
}
#重启nginx
docker-compose restart nginx
#服务器安装pm2
npm i pm2 -g
pm2 --version
#将tfshop-pro.config.js的项目名改成对应的项目名
pm2 start tfshop-pro.config.js
#查看pm2列表中是否有刚才的进程
pm2 list
# 开机自动启动
pm2 save
pm2 startup
# 访问tfshop-pro.test即可查看网页效果
```
## H5端搭建
> 小程序端和h5的搭建类似，主要区别是H5需要放到api/public下，小程序则使用`微信开发者工具`进行上传
- 修改配置文件：`client/uni-app/mall-cook-template/src/utils/config.js`中的`NODE_ENV`为`prod`;生产环境中的`domainName`和`socketURL`为自己的域名
```shell
cd client/uni-app/mall-cook-template
npm run build:h5
# 打包的文件自动存放在api/public目录下
# 访问tfshop-pro.test/h5即可查看h5效果
```
## 可视化搭建
> 小程序和h5首页和自定义页面支持可视化开发，所以需要单独搭建可视化端，才可以通过后台进行可视化开发
- 修改配置文件：`client/uni-app/mall-cook-platform/src/config/global.js`中的`baseApi`和`viewUrl`为自己的域名
```shell
cd client/uni-app/mall-cook-platform
npm run build
# 打包的文件自动存放在api/public目录下
```
## 收银台搭建
- 修改配置文件：`cashier/advc/.env.production`的`VITE_API_BASE_URL`改成自己的域名
```shell
cd cashier/advc
npm run build
# 打包的文件自动存放在api/public目录下
# 访问tfshop-pro.test/advc即可查看收银台效果
```
### 使用supervisor进程守护监控
- 使用supervisor进程守护监控来管理你的队列和定时任务
- 这里基于docker单应用部署搭建的环境来讲，默认已经安装好和自启动了supervisor，其它环境请自行处理
```shell
# 修改/dsdocker/docker/supervisor/conf.d目录下的tfshop-pro-scheduler.conf.example(定时任务)、tfshop-pro-worker.conf.example(队列)和tfshop-pro-swoole.conf.example(swoole)
# 一般不需要修改，直接将这三个文件名的.example去除
# 进入php容器
docker-compose exec php bash
# 更新supervisor
supervisorctl update
#查看所有进程的状态
supervisorctl status
#日志路径：/var/log/supervisor/supervisord.log
```
### 开启缓存
> 如果项目正式运行了，想提高RSET API的效率，可进行相应的缓存操作
```shell
# 开启路由缓存
php artisan route:cache
# 清除缓存
#php artisan route:clear
# 开启配置缓存
php artisan config:cache
# 消除缓存
#php artisan config:clear
```