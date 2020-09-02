# 快速上手
## 常用开发工具
- window10系统
- [Laravel Homestead(免费)](https://learnku.com/docs/laravel/7.x/homestead/7450 "Laravel Homestead") 为了快速搭建window10下的linux+laravel环境（当然你也可以用phpStudy，这里使用linux虚拟机，为的是熟悉linux的命令行，你可以使用xshell像连接服务器的方式连接本地的linux服务器）
- [phpStorm编辑器](https://www.jetbrains.com/phpstorm/ "phpStorm编辑器")(收费)下载后，需要安装插件（[laravel相关插件](https://www.jianshu.com/p/7d3158fa33b7 "laravel相关插件")、[VUE相关插件](https://www.jianshu.com/p/051bb0109d70 "VUE相关插件")）
- Windows PowerShell(window10自带的shell工具，在需要使用的目录，shift+右击就可以找到)
- [Xshell+Xftp连接linux服务器工具](https://www.xshellcn.com/xiazai.html "Xshell+Xftp连接linux服务器工具")
- [HBuilder x 用来开发小程序端](https://dcloud.io/hbuilderx.html "HBuilder x 用来开发小程序端")
- [Postman api接口测试工具](https://www.postman.com/ "Postman api接口测试工具")
- [Google Chrome](https://www.google.cn/chrome/ "Google Chrome")

## 环境搭建
### 1.Homestead安装
参考：[Laravel Homestead](https://learnku.com/docs/laravel/7.x/homestead/7450 "Laravel Homestead")
## DSSHOP使用
- 下载[dsshop](https://github.com/dspurl/dsshop "dsshop")
```markdown
git clone https://github.com/dspurl/dsshop.git
```
## DSSHOP后端代码部署
- 进入api目录
- 安装[composer](https://www.runoob.com/w3cnote/composer-install-and-usage.html "composer") 建议切换到中国镜像，不然下载会比较慢
- 安装dsshop依赖包
```shell
cd ./api
composer install
php artisan key:generate
php artisan passport:keys
#修改.env.dev为.env，添加数据库信息
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=表名
DB_USERNAME=用户名
DB_PASSWORD=密码

#配置redis(需要事先装redis服务端)
REDIS_HOST=127.0.0.1
REDIS_PASSWORD='密码'
REDIS_PORT='端口'
REDIS_DB=1
REDIS_CACHE_DB=1

php artisan migrate
# 加载demo数据(demo和pure二选一)
php artisan generate:demo
# 加载纯净数据
# php artisan generate:pure
php artisan storage:link
# 创建密码授权客户端
php artisan passport:client --password
#修改.env.dev为.env，添加OAuth认证信息
PASSPORT_CLIENT_ID="生成的Client ID"
PASSPORT_CLIENT_SECRET="生成的 Client secret"
```
- 访问项目对应的域名，如果正常显示页面，说明搭建成功了
## DSSHOP前端代码部署(后台)
```shell
cd ../admin
#不要在linux下执行，会报错，推荐windows
npm install 
#admin/config/dev.env.js修改自己的api地址
BASE_API: '"http://dsshop.com/api/v1/admin/"',

npm run dev
```
- 浏览器默认会打开，然后登录进去，能正常访问各各页面，说明后台和后端已经搭建成功
```
# 默认后台账号、密码
admin
admin
```
## DSSHOP前端代码部署(H5端、小程序端)
- 先安装[nodejs](https://nodejs.org/en/ "nodejs")和[HBuilder x 用来开发小程序端](https://dcloud.io/hbuilderx.html "HBuilder x 用来开发小程序端")
```shell
cd ../trade/Dsshop
npm install 
# HBuilder X导入trade/Dsshop目录
#trade/Dsshop/App.vue修改API地址
#32行  host = "http://dsshop.com/api/v1/app/"
#40行  secret: 'API的.env中的APP_KEY'
# HBuilder X可以通过浏览器、微信小程序运行项目，也可以直接发布项目，但需要配置账号，具体请参考HBuilder X
```

### 2. Laradock安装
#### [安装Laradock](https://laradock.io/getting-started/)
window 安装docker.exe

下载Laradock仓库
```shell
git clone https://github.com/laradock/laradock.git
```
下载image并生成container启动, 这一步最好换成国内源，需要一些时间安装
```shell
cd laradock
docker-compose up -d nginx php-fpm mysql redis
```

https://hub-mirror.c.163.com
![](/18.png)
```shell
docker ps  //查看安装结果
```
![](/15.png)

进入container(后续操作会用到)
```shell
docker-compose exec workspace bash  //Linux or Macos
docker exec -it {workspace-container-id} bash  //windows
```
修改windows的hosts文件
```shell
127.0.0.1 dsshop.test
```
然后访问浏览器访问dsshop.test，能够访问Nginx的页面，就可以进行下面的安装了

#### 安装DSSHOP管理端(后台代码)
在Laradock同级目录下面
```shell
git clone https://github.com/dspurl/dsshop.git
docker exec -it laradock_workspace_1 bash  //进入container
cd dsshop/api
composer install
php artisan key:generate
php artisan passport:keys
#修改.env.dev为.env，添加数据库信息
DB_CONNECTION=mysql
DB_HOST= mysql //填127.0.0.1会报找不到IP
DB_PORT=3306
DB_DATABASE=表名
DB_USERNAME=用户名
DB_PASSWORD=密码

#配置redis(需要事先装redis服务端)
REDIS_HOST=redis //填127.0.0.1会报找不到IP
REDIS_PASSWORD=null
REDIS_PORT=6379
REDIS_DB=1
REDIS_CACHE_DB=1

php artisan migrate
# 加载demo数据(demo和pure二选一)
php artisan generate:demo
# 加载纯净数据
# php artisan generate:pure
php artisan storage:link
# 创建密码授权客户端
php artisan passport:client --password
#修改.env.dev为.env，添加OAuth认证信息
PASSPORT_CLIENT_ID="生成的Client ID"
PASSPORT_CLIENT_SECRET="生成的 Client secret"
```

#### 安装DSSHOP管理端(前端代码)
```shell
cd ../admin
#不要在linux下执行，会报错，推荐windows
npm install 
#admin/config/dev.env.js or dev.prod.js修改自己的api地址
BASE_API: '"http://172.27.16.1/api/v1/admin/"',  //172.27.16.1是window主机的局域网IP

npm run dev  

npm run build:prod  //对应 dev.prod.js
# 默认后台账号、密码
admin
admin
```

#### 小程序代码本地展示
```shell
cd ../trade/Dsshop
npm install 
# HBuilder X导入trade/Dsshop目录
#trade/Dsshop/App.vue修改API地址
#32行  host = "http://dsshop.com/api/v1/app/"
#40行  secret: 'API的.env中的APP_KEY'
# HBuilder X可以通过浏览器、微信小程序运行项目，也可以直接发布项目，但需要配置账号，具体请参考HBuilder X
```

#### 运行小程序
需要安装sass的插件，然后HBuilder会自动开启微信开发工具，代码会转为微信小程序的代码
![](/16.png)
![](/17.png)

#### uni-app介绍
https://uniapp.dcloud.io/quickstart