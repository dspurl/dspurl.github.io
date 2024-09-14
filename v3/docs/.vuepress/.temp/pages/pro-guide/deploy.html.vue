<template><div><h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h1>
<blockquote>
<p>因为项目涉及多个终端，推荐分四个子域名进行部署：api(放置laravel项目)、h5(放置h5项目)、admin（放置后台项目）、www（放置nuxt项目）；当然也可以全部部署在www下，但需要自行配置nginx</p>
</blockquote>
<h2 id="基于轻量应用服务器docker-ce版" tabindex="-1"><a class="header-anchor" href="#基于轻量应用服务器docker-ce版"><span>基于轻量应用服务器Docker CE版</span></a></h2>
<blockquote>
<p>该安装方式为已本地调试完成，需要搭建到服务器
该方法也适用于其它服务器搭建，需要自行安装docker ce
购买服务器后，用xshell连接</p>
</blockquote>
<h3 id="环境部署" tabindex="-1"><a class="header-anchor" href="#环境部署"><span>环境部署</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment">#安装git</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">git</span>
<span class="token comment"># 查看git是否安装成功 git --version</span>
<span class="token comment"># 安装docker-compose（请不要用docker compose2及以上版本）</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">"https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>"</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
<span class="token function">docker-compose</span> <span class="token parameter variable">-v</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/
<span class="token comment"># 创建应用目录</span>
<span class="token function">mkdir</span> www
<span class="token builtin class-name">cd</span> www
<span class="token comment"># 上传本地tfshop-pro项目到服务器</span>
<span class="token comment"># 安装环境</span>
<span class="token builtin class-name">cd</span> tfshop-pro/dsdocker
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
<span class="token comment"># 为了安全起见，请自行修改mysql root密码和为redis配置密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="傻瓜式安装rset-api部署-laravel" tabindex="-1"><a class="header-anchor" href="#傻瓜式安装rset-api部署-laravel"><span>傻瓜式安装RSET API部署(laravel)</span></a></h2>
<blockquote>
<p>以下以tfshop-pro.test为例</p>
</blockquote>
<ul>
<li>访问http://tfshop-pro.test/install</li>
<li>根据步骤点“下一步”即可完成安装</li>
</ul>
<h2 id="后台搭建" tabindex="-1"><a class="header-anchor" href="#后台搭建"><span>后台搭建</span></a></h2>
<ul>
<li>进入<code v-pre>admin</code>目录，执行以下代码</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 打包正式环境</span>
<span class="token function">npm</span> run build:prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>访问tfshop-pro.test/admin</li>
<li>输入RSET API部署时设置的后台账号密码</li>
</ul>
<h2 id="网页端搭建" tabindex="-1"><a class="header-anchor" href="#网页端搭建"><span>网页端搭建</span></a></h2>
<ul>
<li>修改配置文件：<code v-pre>client/nuxt-web/mi/.env.prod</code></li>
<li>进入<code v-pre>client/nuxt-web</code>目录，执行以下代码</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build
<span class="token comment">#将.nuxt nuxt.config.js package.json package-lock.json config tfshop-pro.config.js放到api/public/web目录下</span>
<span class="token builtin class-name">cd</span> api/public/web
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token comment"># 测试是否能正常运行，将记录运行后的IP地址</span>
<span class="token function">npm</span> start
<span class="token comment"># 复制对应地址，如http://172.18.0.3:3005</span>
<span class="token comment">#修改nginx以下部分代码中的ip地址</span>
server
<span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    location / <span class="token punctuation">{</span>
            proxy_redirect off<span class="token punctuation">;</span>
            proxy_set_header Host               <span class="token variable">$host</span><span class="token punctuation">;</span>
            proxy_set_header X-Real-IP          <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_set_header X-Forwarded-For    <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
            proxy_set_header X-Forwarded-Proto  <span class="token variable">$scheme</span><span class="token punctuation">;</span>
            proxy_read_timeout          1m<span class="token punctuation">;</span>
            proxy_connect_timeout       1m<span class="token punctuation">;</span>
            proxy_pass                          http://172.18.0.3:3005<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">#重启nginx</span>
<span class="token function">docker-compose</span> restart nginx
<span class="token comment">#服务器安装pm2</span>
<span class="token function">npm</span> i pm2 <span class="token parameter variable">-g</span>
pm2 <span class="token parameter variable">--version</span>
<span class="token comment">#将tfshop-pro.config.js的项目名改成对应的项目名</span>
pm2 start tfshop-pro.config.js
<span class="token comment">#查看pm2列表中是否有刚才的进程</span>
pm2 list
<span class="token comment"># 开机自动启动</span>
pm2 save
pm2 startup
<span class="token comment"># 访问tfshop-pro.test即可查看网页效果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="h5端搭建" tabindex="-1"><a class="header-anchor" href="#h5端搭建"><span>H5端搭建</span></a></h2>
<blockquote>
<p>小程序端和h5的搭建类似，主要区别是H5需要放到api/public下，小程序则使用<code v-pre>微信开发者工具</code>进行上传</p>
</blockquote>
<ul>
<li>修改配置文件：<code v-pre>client/uni-app/mall-cook-template/src/utils/config.js</code>中的<code v-pre>NODE_ENV</code>为<code v-pre>prod</code>;生产环境中的<code v-pre>domainName</code>和<code v-pre>socketURL</code>为自己的域名</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> client/uni-app/mall-cook-template
<span class="token function">npm</span> run build:h5
<span class="token comment"># 打包的文件自动存放在api/public目录下</span>
<span class="token comment"># 访问tfshop-pro.test/h5即可查看h5效果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可视化搭建" tabindex="-1"><a class="header-anchor" href="#可视化搭建"><span>可视化搭建</span></a></h2>
<blockquote>
<p>小程序和h5首页和自定义页面支持可视化开发，所以需要单独搭建可视化端，才可以通过后台进行可视化开发</p>
</blockquote>
<ul>
<li>修改配置文件：<code v-pre>client/uni-app/mall-cook-platform/src/config/global.js</code>中的<code v-pre>baseApi</code>和<code v-pre>viewUrl</code>为自己的域名</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> client/uni-app/mall-cook-platform
<span class="token function">npm</span> run build
<span class="token comment"># 打包的文件自动存放在api/public目录下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="收银台搭建" tabindex="-1"><a class="header-anchor" href="#收银台搭建"><span>收银台搭建</span></a></h2>
<ul>
<li>修改配置文件：<code v-pre>cashier/advc/.env.production</code>的<code v-pre>VITE_API_BASE_URL</code>改成自己的域名</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> cashier/advc
<span class="token function">npm</span> run build
<span class="token comment"># 打包的文件自动存放在api/public目录下</span>
<span class="token comment"># 访问tfshop-pro.test/advc即可查看收银台效果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用supervisor进程守护监控" tabindex="-1"><a class="header-anchor" href="#使用supervisor进程守护监控"><span>使用supervisor进程守护监控</span></a></h3>
<ul>
<li>使用supervisor进程守护监控来管理你的队列和定时任务</li>
<li>这里基于docker单应用部署搭建的环境来讲，默认已经安装好和自启动了supervisor，其它环境请自行处理</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 修改/dsdocker/docker/supervisor/conf.d目录下的tfshop-pro-scheduler.conf.example(定时任务)、tfshop-pro-worker.conf.example(队列)和tfshop-pro-swoole.conf.example(swoole)</span>
<span class="token comment"># 一般不需要修改，直接将这三个文件名的.example去除</span>
<span class="token comment"># 进入php容器</span>
<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> php <span class="token function">bash</span>
<span class="token comment"># 更新supervisor</span>
supervisorctl update
<span class="token comment">#查看所有进程的状态</span>
supervisorctl status
<span class="token comment">#日志路径：/var/log/supervisor/supervisord.log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启缓存" tabindex="-1"><a class="header-anchor" href="#开启缓存"><span>开启缓存</span></a></h3>
<blockquote>
<p>如果项目正式运行了，想提高RSET API的效率，可进行相应的缓存操作</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 开启路由缓存</span>
php artisan route:cache
<span class="token comment"># 清除缓存</span>
<span class="token comment">#php artisan route:clear</span>
<span class="token comment"># 开启配置缓存</span>
php artisan config:cache
<span class="token comment"># 消除缓存</span>
<span class="token comment">#php artisan config:clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


