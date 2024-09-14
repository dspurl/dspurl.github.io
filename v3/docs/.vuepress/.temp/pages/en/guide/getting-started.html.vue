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
<blockquote>
<p>Note: TFSHOP requires redis to be enabled, phpStudy installs the redis server and requires the redis extension to be enabled in php.ini</p>
</blockquote>
<p><img src="/image/20240510105559.png" alt="图片">
<img src="/image/20240510105657.png" alt="图片">
4. Select pseudo-static and copy the following code</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>location / {
    try_files $uri $uri/ /index.php?$query_string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>Go to the api root directory and modify the.env configuration information</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># If the.env file does not exist in the root directory, copy the. Env.dev file and rename it as.env</span>
<span class="token assign-left variable">DB_HOST</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
<span class="token assign-left variable">DB_PORT</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">DB_DATABASE</span><span class="token operator">=</span>tfshop
<span class="token assign-left variable">DB_USERNAME</span><span class="token operator">=</span>root
<span class="token assign-left variable">DB_PASSWORD</span><span class="token operator">=</span>root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>Execute command line code</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">composer</span> <span class="token function">install</span>
php artisan migrate
<span class="token comment"># Execute command line code to load demo data (either demo or pure)</span>
php artisan generate:sql
<span class="token comment"># Load clean data</span>
<span class="token comment"># php artisan generate:sql pure</span>
php artisan storage:link
<span class="token comment"># Generate an APP KEY</span>
php artisan key:generate
<span class="token comment"># Generate the oauth file</span>
php artisan passport:keys
<span class="token comment"># Create a password authorization management terminal</span>
php artisan passport:client <span class="token parameter variable">--password</span>
<span class="token comment"># Select 'admins'</span>
<span class="token comment"># Modify.env to add OAuth authentication information</span>
<span class="token assign-left variable">PASSPORT_CLIENT_ID</span><span class="token operator">=</span><span class="token string">"The generated Client ID"</span>
<span class="token assign-left variable">PASSPORT_CLIENT_SECRET</span><span class="token operator">=</span><span class="token string">"The generated Client secret"</span>
<span class="token comment"># Creating a password authorization client</span>
php artisan passport:client <span class="token parameter variable">--password</span>
<span class="token comment"># Select 'users'</span>
<span class="token comment"># Modify.env to add OAuth authentication information</span>
<span class="token assign-left variable">PASSPORT_WEB_ID</span><span class="token operator">=</span><span class="token string">"The generated Client ID"</span>
<span class="token assign-left variable">PASSPORT_WEB_SECRET</span><span class="token operator">=</span><span class="token string">"The generated Client secret"</span>
<span class="token comment"># Resources are migrated to the server</span>
php artisan resource:migration http://tfshop.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/dswjcms/tfshop.git
<span class="token builtin class-name">cd</span> tfshop
<span class="token comment"># installation environment</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
<span class="token comment"># Install the back end</span>
<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> php <span class="token function">bash</span>
<span class="token function">composer</span> <span class="token function">install</span>
<span class="token function">cp</span> .env.docker .env
<span class="token comment"># If docker-compose.yml has been modified, such as database password, please modify the.env file</span>
php artisan migrate
<span class="token comment"># Load demo data (choose between demo and pure)</span>
php artisan generate:sql
<span class="token comment"># Load clean data</span>
<span class="token comment"># php artisan generate:sql pure</span>
php artisan storage:link
<span class="token comment"># Generate an APP KEY</span>
php artisan key:generate
<span class="token comment"># Generate the oauth file</span>
php artisan passport:keys
<span class="token comment"># Create a password authorization management terminal</span>
php artisan passport:client <span class="token parameter variable">--password</span>
<span class="token comment"># Select 'admins'</span>
<span class="token comment"># Modify.env to add OAuth authentication information</span>
<span class="token assign-left variable">PASSPORT_CLIENT_ID</span><span class="token operator">=</span><span class="token string">"The generated Client ID"</span>
<span class="token assign-left variable">PASSPORT_CLIENT_SECRET</span><span class="token operator">=</span><span class="token string">"The generated Client secret"</span>
<span class="token comment"># Creating a password authorization client</span>
php artisan passport:client <span class="token parameter variable">--password</span>
<span class="token comment"># Select 'users'</span>
<span class="token comment"># Modify.env to add OAuth authentication information</span>
<span class="token assign-left variable">PASSPORT_WEB_ID</span><span class="token operator">=</span><span class="token string">"The generated Client ID"</span>
<span class="token assign-left variable">PASSPORT_WEB_SECRET</span><span class="token operator">=</span><span class="token string">"The generated Client secret"</span>
<span class="token comment"># Give permission to storage777</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> storage/
<span class="token comment"># Resources are migrated to the server</span>
php artisan resource:migration http://tfshop.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="background-construction" tabindex="-1"><a class="header-anchor" href="#background-construction"><span>Background construction</span></a></h2>
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
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>The default password is: admin</li>
</ol>
<h2 id="uni-app-setup" tabindex="-1"><a class="header-anchor" href="#uni-app-setup"><span>uni-app setup</span></a></h2>
<ol>
<li>Open HBuilder X</li>
<li>File -&gt; Import -&gt; Import from local directory</li>
<li>Select <code v-pre>tfshop\client\ unit -app\mix-mall</code></li>
<li>Modify the relevant api address code in <code v-pre>utlis/config.js</code>
<img src="/image/20240510143752.png" alt="图片"></li>
</ol>
</div></template>


