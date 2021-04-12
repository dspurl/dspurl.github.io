# 部署
> 因为项目涉及多个终端，推荐分四个子域名进行部署：api(放置laravel项目)、h5(放置h5项目)、admin（放置后台项目）、www（放置nuxt项目）；当然也可以全部部署在www下，但需要自行配置nginx
## 环境搭建
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
```
### 定时任务
- 定时任务涉及linux(这里拿宝塔为例)和laravel
- 进入宝塔-计划任务-添加计划任务，按下图配置
![](/image/14.png)
```shell
/www/server/php/72/bin/php /www/wwwroot/项目目录/artisan schedule:run >> /dev/null 2>&1
```
- 然后就不用去管了，以后有什么定时任务，直接在 `api/app/Console/Kernel.php`添加即可，更多参考: [任务调度](https://learnku.com/docs/laravel/7.x/scheduling/7492 "任务调度")

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
npm run build
#将.nuxt nuxt.config.js package.json package-lock.json上传到服务器
#在服务器端项目根目录安装包
npm install
# 测试是否能正常运行，将记录运行后的IP地址
npm start
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