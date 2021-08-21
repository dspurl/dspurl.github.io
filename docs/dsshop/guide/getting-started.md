# 安装
## 常用开发工具
- window10系统
- [Laravel Homestead(免费)](https://learnku.com/docs/laravel/7.x/homestead/7450 "Laravel Homestead") 为了快速搭建window10下的linux+laravel环境（当然你也可以用phpStudy，这里使用linux虚拟机，为的是熟悉linux的命令行，你可以使用xshell像连接服务器的方式连接本地的linux服务器）
- [Laradock(免费)](https://github.com/laradock/laradock "Laradock") 基于docker容器的laravel集成环境，强烈推荐使用，可以减少因环境部署产生的诸多问题！！！
- [phpStorm编辑器](https://www.jetbrains.com/phpstorm/ "phpStorm编辑器")(收费)下载后，需要安装插件（[laravel相关插件](https://www.jianshu.com/p/7d3158fa33b7 "laravel相关插件")、[VUE相关插件](https://www.jianshu.com/p/051bb0109d70 "VUE相关插件")）
- Windows PowerShell(window10自带的shell工具，在需要使用的目录，shift+右击就可以找到)
- [Xshell+Xftp连接linux服务器工具](https://www.xshellcn.com/xiazai.html "Xshell+Xftp连接linux服务器工具")
- [HBuilder x 用来开发小程序端](https://dcloud.io/hbuilderx.html "HBuilder x 用来开发小程序端")
- [Postman api接口测试工具](https://www.postman.com/ "Postman api接口测试工具")
- [Google Chrome](https://www.google.cn/chrome/ "Google Chrome")

## 环境搭建
如果你的电脑支持安装docker的话，推荐第二种安装方法
## 基于docker安装(推荐)
> 以下安装的前提是已安装好了docker
> 如本地已有laradock环境或是其它docker环境，请自行修改docker-compose.yml的端口号
### 进入dsshop项目根目录
```shell
#安装环境
docker-compose up -d
#安装后端
docker-compose exec php bash
composer install
cp .env.docker .env
#如有修改过docker-compose.yml，如数据库密码，请自行修改.env文件
php artisan migrate
# 加载demo数据(demo和pure二选一)
php artisan generate:demo
# 加载纯净数据
# php artisan generate:pure
php artisan storage:link
# 生成APP_KEY
php artisan key:generate
# 生成oauth文件
php artisan passport:keys
# 创建密码授权客户端
php artisan passport:client --password
# 选择`admins`
#修改.env，添加OAuth认证信息
PASSPORT_CLIENT_ID="生成的Client ID"
PASSPORT_CLIENT_SECRET="生成的 Client secret"
```
## 基于宝塔安装
- [btdsshop](https://github.com/AckerPaul/btdsshop)
## 基于Laradock安装
### [安装Laradock](https://laradock.io/getting-started/)
window 安装docker.exe

下载Laradock仓库
```shell
git clone https://github.com/laradock/laradock.git
```
下载image并生成container启动, 这一步最好换成国内源，需要一些时间安装
```shell
cd laradock
# 修改.env文件
APP_CODE_PATH_HOST=../
cd nginx  //在这个目录里修改Nginx配置
docker-compose up -d nginx php-fpm mysql redis
```

https://hub-mirror.c.163.com
![](/image/18.png)
```shell
docker ps  //查看安装结果，注意Nginx端口映射
```
![](/image/15.png)

进入container(后续操作会用到)
```shell
docker-compose exec workspace bash  //Linux or Macos
docker exec -it {workspace-container-id} bash  //windows
```

### 安装DSSHOP管理端(后台代码)
在Laradock同级目录下面
```shell
git clone https://github.com/dspurl/dsshop.git
docker exec -it laradock_workspace_1 bash  //进入container
cd dsshop/api
composer install
# 修改.env.dev为.env
# 添加数据库信息
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
# 生成APP_KEY
php artisan key:generate
# 生成oauth文件
php artisan passport:keys
# 创建密码授权客户端
php artisan passport:client --password
# 选择`admins`
#修改.env，添加OAuth认证信息
PASSPORT_CLIENT_ID="生成的Client ID"
PASSPORT_CLIENT_SECRET="生成的 Client secret"
```
修改windows的hosts文件
```shell
127.0.0.1 dsshop.test
```
然后访问浏览器访问dsshop.test:端口，看是否能够访问Laravel /路径
```shell
//laradock/nginx配置了一个88端口映射指向dsshop/api/public 目录
server {
    listen 88;
    listen [::]:80;
    server_name laravel.test;
    root /var/www/dsshop/api/public;
    ····
```
![](/image/19.png)
### 安装DSSHOP管理端(前端代码)
```shell
cd ../admin/vue2/element-admin-v3
#不要在linux下执行，会报错，推荐windows
npm install 
#admin/config/dev.env.js or prod.env.js修改自己的api地址
BASE_API: '"http://172.27.16.1/api/v1/admin/"',  //172.27.16.1是window主机的局域网IP

npm run dev  

npm run build:prod  //对应 prod.env.js
# 默认后台账号、密码
admin
admin
```

### 小程序代码本地展示
```shell
cd ../client/uni-app/mix-mall
npm install 
# HBuilder X导入client/uni-app/mix-mall目录
# client/uni-app/mix-mall/utils/config.js修改服务器地址
# 修改`BaseURL`为API访问地址
# `secret`有个默认密钥，如需自定义，只需在`.env`中配置`PROJECT_KEY`
# HBuilder X可以通过浏览器、微信小程序运行项目，也可以直接发布项目，但需要配置账号，具体请参考HBuilder X
```

### 运行小程序
需要安装sass的插件，然后HBuilder会自动开启微信开发工具，代码会转为微信小程序的代码
![](/image/16.png)
![](/image/17.png)

### uni-app介绍
[https://uniapp.dcloud.io/quickstart](https://uniapp.dcloud.io/quickstart "uni-app")

### 网站代码本地展示
```shell
cd ../client/nuxt-web/mi
cp .env.prod .env   //修改配置信息
APP_ENV=local   // 修改APP_ENV为local
npm install
npm run dev
```
## 傻瓜式安装（从2.1.0开始不再支持）
>
> 5步快速搭建属于自己的DSSHOP商城，功能参考项目演示，适用线上直接部署
> 
> 如不想碰到错误，请严格按照以下步骤和要求执行，以下方法已真机验证
> 
> 安装包在环境满足的前提下，可不用写一行代码，即可搭建完整个项目
> 
> 优点：搭建方便，无需懂代码，全程引导安装；缺点：项目压缩编译，二开不友好（可通过下载install得到二开支持）

#### 前期准备
- 一台linux服务器(laradock最佳，非laradock请在安装时的`mysql`和`redis`服务器填写`127.0.0.1`)
- php >= 7.4
- mysql >=5.7
- php开启以下扩展`curl`、`pdo`、`openssl`、`redis`
- 以下目录具备读写权限(777权限)`storage/framework/`、`storage/logs/`、`bootstrap/cache/`

#### 安装步骤
1. 下载dsshop发行版，下载方式如下图，也可以下载guide分支的代码
![](/image/install_09.png)
![](/image/install_10.png)
2. 将项目解压，得到dsshop目录，将dsshop目录下的api目录下所有文件移动到网站根目录（一般为www）
3. 通过浏览器访问http://dsshop.test/install（请根据自己实际域名替换掉http://dsshop.test）
4. 根据以下5步完成项目安装
> 如果需要使用微信小程序，请在项目配置页中开启小程序配置，并将小程序配置信息填入（请确保配置信息的正确性，也可以安装后，通过`.env`文件修改），不然第7步将无法正常使用小程序
> 
> 配置信息只有在首次项目安装时，可通过表单形式填写，安装完后，请通过根目录下的`.env`文件进行修改，`.env`参数说明，请参考[配置文件](basic.html "配置文件")
![](/image/install_01.png)
![](/image/install_02.png)
![](/image/install_03.png)
![](/image/install_04.png)
![](/image/install_05.png)
5. 访问h5和后台，看是否正常访问，如果可以，恭喜你安装成功了
6. 最后将根目录下的install目录移除，记住一定要移除掉！！！
7. 小程序的使用：当安装成功后，请将根目录的mp-weixin目录下载到本地，通过“微信开放者工具”导入该目录
![](/image/install_06.png)
![](/image/install_07.png)
![](/image/install_08.png)
## 基于Homestead安装
参考：[Laravel Homestead](https://learnku.com/docs/laravel/7.x/homestead/7450 "Laravel Homestead")
### DSSHOP使用
- 下载[dsshop](https://github.com/dspurl/dsshop "dsshop")
```markdown
git clone https://github.com/dspurl/dsshop.git
```
### DSSHOP后端代码部署
- 进入api目录
- 安装[composer](https://www.runoob.com/w3cnote/composer-install-and-usage.html "composer") 建议切换到中国镜像，不然下载会比较慢
- 安装dsshop依赖包
```shell
cd ./api
composer install
# 修改.env.dev为.env
# 添加数据库信息
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
# 生成APP_KEY
php artisan key:generate
# 生成oauth文件
php artisan passport:keys
# 创建密码授权客户端
php artisan passport:client --password
# 选择`admins`
#修改.env，添加OAuth认证信息
PASSPORT_CLIENT_ID="生成的Client ID"
PASSPORT_CLIENT_SECRET="生成的 Client secret"
# 需要安装PhpRedis
# 参考：https://github.com/dspurl/dsshop/pull/84
```
- 访问项目对应的域名，如果正常显示页面，说明搭建成功了
### DSSHOP前端代码部署(后台)
```shell
cd ../admin/vue2/element-admin-v3
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
### DSSHOP前端代码部署
#### H5端、小程序端
- 先安装[nodejs](https://nodejs.org/en/ "nodejs")和[HBuilder x 用来开发小程序端](https://dcloud.io/hbuilderx.html "HBuilder x 用来开发小程序端")
```shell
cd ../client/uni-app/mix-mall
npm install 
# HBuilder X导入client/uni-app/mix-mall目录
# client/uni-app/mix-mall/utils/config.js修改服务器地址
# 修改`BaseURL`为API访问地址
# `secret`有个默认密钥，如需自定义，只需在`.env`中配置`PROJECT_KEY`
# HBuilder X可以通过浏览器、微信小程序运行项目，也可以直接发布项目，但需要配置账号，具体请参考HBuilder X
```
#### 网站
> 网站采用nuxt框架，本地测试和其它vue项目一样
```shell
cd ../client/nuxt-web/mi
cp .env.prod .env   //修改配置信息
APP_ENV=local   // 修改APP_ENV为local
npm install
npm run dev
```

