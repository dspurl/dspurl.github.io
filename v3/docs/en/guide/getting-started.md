# EasyStart
> environmental requirement
>
```
php >= 7.4
laravel = 7.22.6
mysql >= 5.7
vue = 2.5.17
node= 14.18.3
```
## API construction
### phpstudy
1. Download the project to the phpstudy project directory, which is assumed to be the www directory on disk d
2. Unzip the project to the www directory
3. Open phpstudy, Website -> Create Website, the domain name will be the domain name after you visit the project; Select the api/public directory under your project address; Select Synchronize hosts and select php version 7.4.3
> Note: TFSHOP requires redis to be enabled, phpStudy installs the redis server and requires the redis extension to be enabled in php.ini
> 
![图片](/image/20240510105559.png)
![图片](/image/20240510105657.png)
4. Select pseudo-static and copy the following code
```
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```
5. Go to the api root directory and modify the.env configuration information
```shell
# If the.env file does not exist in the root directory, copy the. Env.dev file and rename it as.env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tfshop
DB_USERNAME=root
DB_PASSWORD=root
```
6. Execute command line code
```shell
composer install
php artisan migrate
# Execute command line code to load demo data (either demo or pure)
php artisan generate:sql
# Load clean data
# php artisan generate:sql pure
php artisan storage:link
# Generate an APP KEY
php artisan key:generate
# Generate the oauth file
php artisan passport:keys
# Create a password authorization management terminal
php artisan passport:client --password
# Select 'admins'
# Modify.env to add OAuth authentication information
PASSPORT_CLIENT_ID="The generated Client ID"
PASSPORT_CLIENT_SECRET="The generated Client secret"
# Creating a password authorization client
php artisan passport:client --password
# Select 'users'
# Modify.env to add OAuth authentication information
PASSPORT_WEB_ID="The generated Client ID"
PASSPORT_WEB_SECRET="The generated Client secret"
# Resources are migrated to the server
php artisan resource:migration http://tfshop.test
```

### docker
```shell
git clone https://gitee.com/dswjcms/tfshop.git
cd tfshop
# installation environment
docker-compose up -d
# Install the back end
docker-compose exec php bash
composer install
cp .env.docker .env
# If docker-compose.yml has been modified, such as database password, please modify the.env file
php artisan migrate
# Load demo data (choose between demo and pure)
php artisan generate:sql
# Load clean data
# php artisan generate:sql pure
php artisan storage:link
# Generate an APP KEY
php artisan key:generate
# Generate the oauth file
php artisan passport:keys
# Create a password authorization management terminal
php artisan passport:client --password
# Select 'admins'
# Modify.env to add OAuth authentication information
PASSPORT_CLIENT_ID="The generated Client ID"
PASSPORT_CLIENT_SECRET="The generated Client secret"
# Creating a password authorization client
php artisan passport:client --password
# Select 'users'
# Modify.env to add OAuth authentication information
PASSPORT_WEB_ID="The generated Client ID"
PASSPORT_WEB_SECRET="The generated Client secret"
# Give permission to storage777
chmod -R 777 storage/
# Resources are migrated to the server
php artisan resource:migration http://tfshop.test
```
## Background construction
> The project directory mentioned below is the location where your downloaded tfshop is placed
>
> The following uses element-admin-v3 as an example
>
1. Go to the project directory and go to the `admin\vue2\element-admin-v3` directory (it may change later, but in the admin directory anyway)
2. Change the API address in the `admin\vue2\element-admin-v3\config\dev.env.js` configuration file to the API domain name configured above
![图片](/image/20240510111720.png)
3. Open the command line and execute the following code
```shell
npm run dev
```
4. The default password is: admin
## uni-app setup
1. Open HBuilder X
2. File -> Import -> Import from local directory
3. Select `tfshop\client\ unit -app\mix-mall`
4. Modify the relevant api address code in `utlis/config.js`
![图片](/image/20240510143752.png)