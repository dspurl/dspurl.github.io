# Deploy
> Because the project involves multiple terminals, it is recommended to deploy it under four subdomains: api (place the laravel project), h5 (place the h5 project), admin (place the background project), and www (place the nuxt project); Of course, you can also deploy all of them under www, but you need to configure nginx by yourself
## Simple Application Server for Docker CE is used
> The installation mode has been debugged locally and needs to be set up on the server
> This method is also applicable to other servers. You need to install docker ce by yourself
> After purchasing the server, connect with xshell
### Environmental deployment
```shell
# Install git
yum install -y git
# Check whether git is installed successfully  git --version
# Install Docker-Compose (please do not use docker compose2 and above)
sudo curl -L "https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose -v
cd ../
# Creating an application Directory
mkdir www
cd www
# Upload the local tfshop-pro project to the server
# installation environment
cd tfshop-pro/dsdocker
docker-compose up -d
# For security reasons, change the mysql root password and configure the password for redis
```
## Point-and-shoot Installation RSET API Deployment (laravel)
> The following uses tfshop-pro.test as an example
- Visit http://tfshop-pro.test/install
- Follow the steps to "Next" to complete the installation
## Background construction
- Go to the `admin` directory and execute the following code
```shell
# Packaging formal environment
npm run build:prod
```
- Visit tfshop-pro.test/admin
- Enter the background account password set during RSET API deployment
## Web site construction
- Modify the configuration file:`client/nuxt-web/mi/.env.prod`
- Go to the `client/nuxt-web` directory and execute the following code
```shell
npm run build
#Put .nuxt nuxt.config.js package.json package-lock.json config tfshop-pro.config.js in the api/public/web directory
cd api/public/web
npm install
# After the test is performed, the IP address is recorded
npm start
# Copy the corresponding address, for example http://172.18.0.3:3005
#Modify the ip address in the following part of nginx code
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
#Restart nginx
docker-compose restart nginx
#Install pm2 on the server
npm i pm2 -g
pm2 --version
#Change the project name of tfshop-pro.config.js to the corresponding project name
pm2 start tfshop-pro.config.js
#Check whether the previous process exists in the pm2 list
pm2 list
# Automatic start
pm2 save
pm2 startup
# Visit tfshop-pro.test to see how the web page works
```
## H5 end build
> The small program end is similar to the construction of h5, the main difference is that H5 needs to be put under api/public, and the small program is uploaded using the `wechat developer tool`
- modify the configuration file: ` client/uni - app/mall - cook - the template/SRC/utils/config in js ` ` NODE_ENV ` for ` prod `; In production, `domainName` and `socketURL` are their own domain names
```shell
cd client/uni-app/mall-cook-template
npm run build:h5
# Packaged files are automatically stored in the api/public directory
# Visit tfshop-pro.test/h5 to see the h5 effect
```
## Visual construction
> Small programs and h5 home page and custom pages support visual development, so you need to build a separate visual end, you can carry out visual development through the background
- Modify the configuration file: ` client/uni - app/mall - cook - platform/SRC/config/global of js ` ` baseApi ` and ` viewUrl ` for their domain name
```shell
cd client/uni-app/mall-cook-platform
npm run build
# Packaged files are automatically stored in the api/public directory
```
## Cash register construction
- Modify the configuration file: ` cashier/advc/env. The production of ` ` VITE_API_BASE_URL ` into their own domain name
```shell
cd cashier/advc
npm run build
# Packaged files are automatically stored in the api/public directory
# Visit tfshop-pro.test/advc to view checkout results
```
### Use the supervisor process to guard the monitoring
- Use supervisor process daemon monitoring to manage your queues and scheduled tasks
- For the environment built based on docker single application deployment, the supervisor has been installed and started by default. Please handle other environments by yourself
```shell
# example(scheduled task), tfshop-pro-worker.conf.example(queue), and tfshop-pro-swoole.conf.example(swoole) in the /dsdocker/docker/supervisor/conf.d directory.
# Generally do not need to modify, directly remove the.example of these three file names
# Enter the php container
docker-compose exec php bash
# Update supervisor
supervisorctl update
# View the status of all processes
supervisorctl status
# Log path:/var/log/supervisor/supervisord.log
```
### Enable cache
> If the project is officially running and you want to improve the efficiency of the RSET API, you can perform corresponding caching operations
```shell
# Enabling route caching
php artisan route:cache
# clear cache
#php artisan route:clear
# Enabling configuration cache
php artisan config:cache
# Clear cache
#php artisan config:clear
```