import{_ as e,a as i,b as n,c as t}from"./20240510143752-DZ4A3ttv.js";import{_ as a,o as s,c as d,a as l}from"./app-DGDGLuI8.js";const r={},o=l(`<h1 id="easystart" tabindex="-1"><a class="header-anchor" href="#easystart"><span>EasyStart</span></a></h1><blockquote><p>environmental requirement</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>php &gt;= 7.4
laravel = 7.22.6
mysql &gt;= 5.7
vue = 2.5.17
node= 14.18.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-construction" tabindex="-1"><a class="header-anchor" href="#api-construction"><span>API construction</span></a></h2><h3 id="phpstudy" tabindex="-1"><a class="header-anchor" href="#phpstudy"><span>phpstudy</span></a></h3><ol><li>Download the project to the phpstudy project directory, which is assumed to be the www directory on disk d</li><li>Unzip the project to the www directory</li><li>Open phpstudy, Website -&gt; Create Website, the domain name will be the domain name after you visit the project; Select the api/public directory under your project address; Select Synchronize hosts and select php version 7.4.3</li></ol><p><img src="`+e+`" alt="图片"> 4. Select pseudo-static and copy the following code</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>location / {
    try_files $uri $uri/ /index.php?$query_string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Go to the api root directory and modify the.env configuration information</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># If the.env file does not exist in the root directory, copy the. Env.dev file and rename it as.env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tfshop
DB_USERNAME=root
DB_PASSWORD=root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>Execute command line code</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>php artisan migrate
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
# Select &#39;admins&#39;
# Modify.env to add OAuth authentication information
PASSPORT_CLIENT_ID=&quot;The generated Client ID&quot;
PASSPORT_CLIENT_SECRET=&quot;The generated Client secret&quot;
# Creating a password authorization client
php artisan passport:client --password
# Select &#39;users&#39;
# Modify.env to add OAuth authentication information
PASSPORT_WEB_ID=&quot;The generated Client ID&quot;
PASSPORT_WEB_SECRET=&quot;The generated Client secret&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="图片"></p><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://gitee.com/dswjcms/tfshop.git
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
# Select &#39;admins&#39;
# Modify.env to add OAuth authentication information
PASSPORT_CLIENT_ID=&quot;The generated Client ID&quot;
PASSPORT_CLIENT_SECRET=&quot;The generated Client secret&quot;
# Creating a password authorization client
php artisan passport:client --password
# Select &#39;users&#39;
# Modify.env to add OAuth authentication information
PASSPORT_WEB_ID=&quot;The generated Client ID&quot;
PASSPORT_WEB_SECRET=&quot;The generated Client secret&quot;
# Give permission to storage777
chmod -R 777 storage/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="background-construction" tabindex="-1"><a class="header-anchor" href="#background-construction"><span>Background construction</span></a></h2><blockquote><p>The project directory mentioned below is the location where your downloaded tfshop is placed</p><p>The following uses element-admin-v3 as an example</p></blockquote><ol><li>Go to the project directory and go to the <code>admin\\vue2\\element-admin-v3</code> directory (it may change later, but in the admin directory anyway)</li><li>Change the API address in the <code>admin\\vue2\\element-admin-v3\\config\\dev.env.js</code> configuration file to the API domain name configured above <img src="`+n+`" alt="图片"></li><li>Open the command line and execute the following code</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="uni-app-setup" tabindex="-1"><a class="header-anchor" href="#uni-app-setup"><span>uni-app setup</span></a></h2><ol><li>Open HBuilder X</li><li>File -&gt; Import -&gt; Import from local directory</li><li>Select <code>dsshop\\client\\ unit -app\\mix-mall</code></li><li>Modify the relevant api address code in <code>utlis/config.js</code><img src="`+t+'" alt="图片"></li></ol>',21),c=[o];function u(v,p){return s(),d("div",null,c)}const b=a(r,[["render",u],["__file","getting-started.html.vue"]]),g=JSON.parse('{"path":"/en/guide/getting-started.html","title":"EasyStart","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"API construction","slug":"api-construction","link":"#api-construction","children":[{"level":3,"title":"phpstudy","slug":"phpstudy","link":"#phpstudy","children":[]},{"level":3,"title":"docker","slug":"docker","link":"#docker","children":[]}]},{"level":2,"title":"Background construction","slug":"background-construction","link":"#background-construction","children":[]},{"level":2,"title":"uni-app setup","slug":"uni-app-setup","link":"#uni-app-setup","children":[]}],"git":{"updatedTime":1715405318000,"contributors":[{"name":"dspurl","email":"49799121+dspurl@users.noreply.github.com","commits":1}]},"filePathRelative":"en/guide/getting-started.md"}');export{b as comp,g as data};
