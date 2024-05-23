# 快速上手
> 环境要求
>
```
php >= 7.4
laravel = 7.22.6
mysql >= 5.7
vue = 2.5.17
node= 14.18.3
```
## API搭建
### phpstudy
1. 下载项目到phpstudy项目目录，这里假设为d盘下的www目录
2. 解压项目到www目录下 
3. 打开phpstudy，网站->创建网站，域名将是后面你访问该项目的域名；根目录选择你的项目地址下的api/public目录；勾选同步hosts，php版本选7.4.3
   
![图片](/image/20240510105559.png)
4. 选择伪静态，复制以下代码
```
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```
5. 进入api根目录，修改.env配置信息
```
# 如果根目录下没有.env文件，请复制.env.dev并重命名为.env,以下为数据库连接信息，修改成自己的数据库信息
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tfshop
DB_USERNAME=root
DB_PASSWORD=root
```
6. 执行命令行代码
```
php artisan migrate
# 加载demo数据(demo和pure二选一)
php artisan generate:sql
# 加载纯净数据
# php artisan generate:sql pure
php artisan storage:link
# 生成APP_KEY
php artisan key:generate
# 生成oauth文件
php artisan passport:keys
# 创建密码授权管理端
php artisan passport:client --password
# 选择`admins`
# 修改.env，添加OAuth认证信息
PASSPORT_CLIENT_ID="生成的Client ID"
PASSPORT_CLIENT_SECRET="生成的 Client secret"
# 创建密码授权客户端
php artisan passport:client --password
# 选择`users`
# 修改.env，添加OAuth认证信息
PASSPORT_WEB_ID="生成的Client ID"
PASSPORT_WEB_SECRET="生成的 Client secret"
```

![图片](/image/20240510105657.png)
### docker
```
git clone https://gitee.com/dswjcms/tfshop.git
cd tfshop
# 安装环境
docker-compose up -d
# 安装后端
docker-compose exec php bash
composer install
cp .env.docker .env
# 如有修改过docker-compose.yml，如数据库密码，请自行修改.env文件
php artisan migrate
# 加载demo数据(demo和pure二选一)
php artisan generate:sql
# 加载纯净数据
# php artisan generate:sql pure
php artisan storage:link
# 生成APP_KEY
php artisan key:generate
# 生成oauth文件
php artisan passport:keys
# 创建密码授权管理端
php artisan passport:client --password
# 选择`admins`
# 修改.env，添加OAuth认证信息
PASSPORT_CLIENT_ID="生成的Client ID"
PASSPORT_CLIENT_SECRET="生成的 Client secret"
# 创建密码授权客户端
php artisan passport:client --password
# 选择`users`
# 修改.env，添加OAuth认证信息
PASSPORT_WEB_ID="生成的Client ID"
PASSPORT_WEB_SECRET="生成的 Client secret"
# 给storage777权限
chmod -R 777 storage/
```
## 后台搭建
> 以下所说的项目目录即你下载的tfshop所放置的位置
>
> 以下以element-admin-v3为例
>
1. 进入项目目录，进入`admin\vue2\element-admin-v3`目录(后期可能会变更，总之在admin目录下)
2. 修改`admin\vue2\element-admin-v3\config\dev.env.js`配置文件中的API地址，改成上面配置的API域名
![图片](/image/20240510111720.png)
3. 打开命令行，执行以下代码
```
npm run dev
```
## uni-app搭建
1. 打开HBuilder X
2. 文件->导入->从本地目录导入
3. 选择`dsshop\client\uni-app\mix-mall`
4. 修改`utlis/config.js`中相关api地址代码
![图片](/image/20240510143752.png)