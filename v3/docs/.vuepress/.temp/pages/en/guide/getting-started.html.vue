<template><div><h1 id="easystart" tabindex="-1"><a class="header-anchor" href="#easystart"><span>EasyStart</span></a></h1>
<blockquote>
<p>environmental requirement</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>php >= 7.4
laravel = 7.22.6
mysql >= 5.7
vue = 2.5.17
node= 14.18.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-construction" tabindex="-1"><a class="header-anchor" href="#api-construction"><span>API construction</span></a></h2>
<h3 id="phpstudy" tabindex="-1"><a class="header-anchor" href="#phpstudy"><span>phpstudy</span></a></h3>
<ol>
<li>Download the project to the phpstudy project directory, which is assumed to be the www directory on disk d</li>
<li>Unzip the project to the www directory</li>
<li>Open phpstudy, Website -&gt; Create Website, the domain name will be the domain name after you visit the project; Select the api/public directory under your project address; Select Synchronize hosts and select php version 7.4.3</li>
</ol>
<p><img src="/image/20240510105559.png" alt="图片">
4. Select pseudo-static and copy the following code</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>location / {
    try_files $uri $uri/ /index.php?$query_string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>Go to the api root directory and modify the.env configuration information</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code># If the.env file does not exist in the root directory, copy the. Env.dev file and rename it as.env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tfshop
DB_USERNAME=root
DB_PASSWORD=root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>Execute command line code</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>php artisan migrate
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/image/20240510105657.png" alt="图片"></p>
<h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>git clone https://gitee.com/dswjcms/tfshop.git
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="background-construction" tabindex="-1"><a class="header-anchor" href="#background-construction"><span>Background construction</span></a></h2>
<blockquote>
<p>The project directory mentioned below is the location where your downloaded tfshop is placed</p>
<p>The following uses element-admin-v3 as an example</p>
</blockquote>
<ol>
<li>Go to the project directory and go to the <code v-pre>admin\vue2\element-admin-v3</code> directory (it may change later, but in the admin directory anyway)</li>
<li>Change the API address in the <code v-pre>admin\vue2\element-admin-v3\config\dev.env.js</code> configuration file to the API domain name configured above
<img src="/image/20240510111720.png" alt="图片"></li>
<li>Open the command line and execute the following code</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="uni-app-setup" tabindex="-1"><a class="header-anchor" href="#uni-app-setup"><span>uni-app setup</span></a></h2>
<ol>
<li>Open HBuilder X</li>
<li>File -&gt; Import -&gt; Import from local directory</li>
<li>Select <code v-pre>dsshop\client\ unit -app\mix-mall</code></li>
<li>Modify the relevant api address code in <code v-pre>utlis/config.js</code>
<img src="/image/20240510143752.png" alt="图片"></li>
</ol>
</div></template>


