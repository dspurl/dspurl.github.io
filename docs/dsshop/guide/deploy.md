# 部署
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