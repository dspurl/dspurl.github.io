<template><div><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h1>
<blockquote>
<p>环境要求</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>php >= 7.4
laravel = 7.22.6
mysql >= 5.7
vue = 2.5.17
node= 14.18.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api搭建" tabindex="-1"><a class="header-anchor" href="#api搭建"><span>API搭建</span></a></h2>
<h3 id="phpstudy" tabindex="-1"><a class="header-anchor" href="#phpstudy"><span>phpstudy</span></a></h3>
<ol>
<li>下载项目到phpstudy项目目录，这里假设为d盘下的www目录</li>
<li>解压项目到www目录下</li>
<li>打开phpstudy，网站-&gt;创建网站，域名将是后面你访问该项目的域名；根目录选择你的项目地址下的api/public目录；勾选同步hosts，php版本选7.4.3</li>
</ol>
<blockquote>
<p>注意：TFSHOP需要开启redis，phpStudy安装的是redis服务端，需要php.ini中开启redis扩展</p>
</blockquote>
<p><img src="/image/20240510105559.png" alt="图片"></p>
<p><img src="/image/20240510105657.png" alt="图片"></p>
<ol>
<li>选择伪静态，复制以下代码</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>location / {
    try_files $uri $uri/ /index.php?$query_string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>进入api根目录，修改.env配置信息</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 如果根目录下没有.env文件，请复制.env.dev并重命名为.env,以下为数据库连接信息，修改成自己的数据库信息</span>
<span class="token assign-left variable">DB_HOST</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
<span class="token assign-left variable">DB_PORT</span><span class="token operator">=</span><span class="token number">3306</span>
<span class="token assign-left variable">DB_DATABASE</span><span class="token operator">=</span>tfshop
<span class="token assign-left variable">DB_USERNAME</span><span class="token operator">=</span>root
<span class="token assign-left variable">DB_PASSWORD</span><span class="token operator">=</span>root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>进入tfshop\api目录，执行命令行代码</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">composer</span> <span class="token function">install</span>
php artisan migrate
<span class="token comment"># 加载demo数据(demo和pure二选一)</span>
php artisan generate:sql
<span class="token comment"># 加载纯净数据</span>
<span class="token comment"># php artisan generate:sql pure</span>
php artisan storage:link
<span class="token comment"># 生成APP_KEY</span>
php artisan key:generate
<span class="token comment"># 生成oauth文件</span>
php artisan passport:keys
<span class="token comment"># 创建密码授权管理端</span>
php artisan passport:client <span class="token parameter variable">--password</span>
<span class="token comment"># 选择`admins`</span>
<span class="token comment"># 修改.env，添加OAuth认证信息</span>
<span class="token assign-left variable">PASSPORT_CLIENT_ID</span><span class="token operator">=</span><span class="token string">"生成的Client ID"</span>
<span class="token assign-left variable">PASSPORT_CLIENT_SECRET</span><span class="token operator">=</span><span class="token string">"生成的 Client secret"</span>
<span class="token comment"># 创建密码授权客户端</span>
php artisan passport:client <span class="token parameter variable">--password</span>
<span class="token comment"># 选择`users`</span>
<span class="token comment"># 修改.env，添加OAuth认证信息</span>
<span class="token assign-left variable">PASSPORT_WEB_ID</span><span class="token operator">=</span><span class="token string">"生成的Client ID"</span>
<span class="token assign-left variable">PASSPORT_WEB_SECRET</span><span class="token operator">=</span><span class="token string">"生成的 Client secret"</span>
<span class="token comment"># 资源迁移到服务器</span>
php artisan resource:migration http://tfshop.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/dswjcms/tfshop.git
<span class="token builtin class-name">cd</span> tfshop
<span class="token comment"># 安装环境</span>
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
<span class="token comment"># 安装后端</span>
<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> php <span class="token function">bash</span>
<span class="token function">composer</span> <span class="token function">install</span>
<span class="token function">cp</span> .env.docker .env
<span class="token comment"># 如有修改过docker-compose.yml，如数据库密码，请自行修改.env文件</span>
php artisan migrate
<span class="token comment"># 加载demo数据(demo和pure二选一)</span>
php artisan generate:sql
<span class="token comment"># 加载纯净数据</span>
<span class="token comment"># php artisan generate:sql pure</span>
php artisan storage:link
<span class="token comment"># 生成APP_KEY</span>
php artisan key:generate
<span class="token comment"># 生成oauth文件</span>
php artisan passport:keys
<span class="token comment"># 创建密码授权管理端</span>
php artisan passport:client <span class="token parameter variable">--password</span>
<span class="token comment"># 选择`admins`</span>
<span class="token comment"># 修改.env，添加OAuth认证信息</span>
<span class="token assign-left variable">PASSPORT_CLIENT_ID</span><span class="token operator">=</span><span class="token string">"生成的Client ID"</span>
<span class="token assign-left variable">PASSPORT_CLIENT_SECRET</span><span class="token operator">=</span><span class="token string">"生成的 Client secret"</span>
<span class="token comment"># 创建密码授权客户端</span>
php artisan passport:client <span class="token parameter variable">--password</span>
<span class="token comment"># 选择`users`</span>
<span class="token comment"># 修改.env，添加OAuth认证信息</span>
<span class="token assign-left variable">PASSPORT_WEB_ID</span><span class="token operator">=</span><span class="token string">"生成的Client ID"</span>
<span class="token assign-left variable">PASSPORT_WEB_SECRET</span><span class="token operator">=</span><span class="token string">"生成的 Client secret"</span>
<span class="token comment"># 给storage777权限</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> storage/
<span class="token comment"># 资源迁移到服务器</span>
php artisan resource:migration http://tfshop.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后台搭建" tabindex="-1"><a class="header-anchor" href="#后台搭建"><span>后台搭建</span></a></h2>
<blockquote>
<p>以下所说的项目目录即你下载的tfshop所放置的位置</p>
<p>以下以element-admin-v3为例</p>
</blockquote>
<ol>
<li>进入项目目录，进入<code v-pre>admin\vue2\element-admin-v3</code>目录(后期可能会变更，总之在admin目录下)</li>
<li>修改<code v-pre>admin\vue2\element-admin-v3\config\dev.env.js</code>配置文件中的API地址，改成上面配置的API域名
<img src="/image/20240510111720.png" alt="图片"></li>
<li>打开命令行，执行以下代码</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>默认账号密码都是：admin</li>
</ol>
<h2 id="uni-app搭建" tabindex="-1"><a class="header-anchor" href="#uni-app搭建"><span>uni-app搭建</span></a></h2>
<ol>
<li>打开HBuilder X</li>
<li>文件-&gt;导入-&gt;从本地目录导入</li>
<li>选择<code v-pre>tfshop\client\uni-app\mix-mall</code></li>
<li>修改<code v-pre>utlis/config.js</code>中相关api地址代码
<img src="/image/20240510143752.png" alt="图片"></li>
</ol>
</div></template>


