<template><div><h1 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy"><span>Deploy</span></a></h1>
<blockquote>
<p>Because the project involves multiple terminals, it is recommended to deploy it under four subdomains: api (place the laravel project), h5 (place the h5 project), admin (place the background project), and www (place the nuxt project); Of course, you can also deploy all of them under www, but you need to configure nginx by yourself</p>
</blockquote>
<h2 id="simple-application-server-for-docker-ce-is-used" tabindex="-1"><a class="header-anchor" href="#simple-application-server-for-docker-ce-is-used"><span>Simple Application Server for Docker CE is used</span></a></h2>
<blockquote>
<p>The installation mode has been debugged locally and needs to be set up on the server
This method is also applicable to other servers. You need to install docker ce by yourself
After purchasing the server, connect with xshell</p>
</blockquote>
<h3 id="environmental-deployment" tabindex="-1"><a class="header-anchor" href="#environmental-deployment"><span>Environmental deployment</span></a></h3>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Install git</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">git</span>
<span class="token comment"># Check whether git is installed successfully  git --version</span>
<span class="token comment"># Install Docker-Compose (please do not use docker compose2 and above)</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">"https://get.daocloud.io/docker/compose/releases/download/1.29.2/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>"</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
<span class="token function">docker-compose</span> <span class="token parameter variable">-v</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/
<span class="token comment"># Creating an application Directory</span>
<span class="token function">mkdir</span> www
<span class="token builtin class-name">cd</span> www
<span class="token comment"># Upload the local tfshop-pro project to the server</span>
<span class="token comment"># installation environment</span>
<span class="token builtin class-name">cd</span> tfshop-pro/dsdocker
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
<span class="token comment"># For security reasons, change the mysql root password and configure the password for redis</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="point-and-shoot-installation-rset-api-deployment-laravel" tabindex="-1"><a class="header-anchor" href="#point-and-shoot-installation-rset-api-deployment-laravel"><span>Point-and-shoot Installation RSET API Deployment (laravel)</span></a></h2>
<blockquote>
<p>The following uses tfshop-pro.test as an example</p>
</blockquote>
<ul>
<li>Visit http://tfshop-pro.test/install</li>
<li>Follow the steps to &quot;Next&quot; to complete the installation</li>
</ul>
<h2 id="background-construction" tabindex="-1"><a class="header-anchor" href="#background-construction"><span>Background construction</span></a></h2>
<ul>
<li>Go to the <code v-pre>admin</code> directory and execute the following code</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Packaging formal environment</span>
<span class="token function">npm</span> run build:prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Visit tfshop-pro.test/admin</li>
<li>Enter the background account password set during RSET API deployment</li>
</ul>
<h2 id="web-site-construction" tabindex="-1"><a class="header-anchor" href="#web-site-construction"><span>Web site construction</span></a></h2>
<ul>
<li>Modify the configuration file:<code v-pre>client/nuxt-web/mi/.env.prod</code></li>
<li>Go to the <code v-pre>client/nuxt-web</code> directory and execute the following code</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build
<span class="token comment">#Put .nuxt nuxt.config.js package.json package-lock.json config tfshop-pro.config.js in the api/public/web directory</span>
<span class="token builtin class-name">cd</span> api/public/web
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token comment"># After the test is performed, the IP address is recorded</span>
<span class="token function">npm</span> start
<span class="token comment"># Copy the corresponding address, for example http://172.18.0.3:3005</span>
<span class="token comment">#Modify the ip address in the following part of nginx code</span>
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
<span class="token comment">#Restart nginx</span>
<span class="token function">docker-compose</span> restart nginx
<span class="token comment">#Install pm2 on the server</span>
<span class="token function">npm</span> i pm2 <span class="token parameter variable">-g</span>
pm2 <span class="token parameter variable">--version</span>
<span class="token comment">#Change the project name of tfshop-pro.config.js to the corresponding project name</span>
pm2 start tfshop-pro.config.js
<span class="token comment">#Check whether the previous process exists in the pm2 list</span>
pm2 list
<span class="token comment"># Automatic start</span>
pm2 save
pm2 startup
<span class="token comment"># Visit tfshop-pro.test to see how the web page works</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="h5-end-build" tabindex="-1"><a class="header-anchor" href="#h5-end-build"><span>H5 end build</span></a></h2>
<blockquote>
<p>The small program end is similar to the construction of h5, the main difference is that H5 needs to be put under api/public, and the small program is uploaded using the <code v-pre>wechat developer tool</code></p>
</blockquote>
<ul>
<li>modify the configuration file: <code v-pre>client/uni - app/mall - cook - the template/SRC/utils/config in js</code> <code v-pre>NODE_ENV</code> for <code v-pre>prod</code>; In production, <code v-pre>domainName</code> and <code v-pre>socketURL</code> are their own domain names</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> client/uni-app/mall-cook-template
<span class="token function">npm</span> run build:h5
<span class="token comment"># Packaged files are automatically stored in the api/public directory</span>
<span class="token comment"># Visit tfshop-pro.test/h5 to see the h5 effect</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="visual-construction" tabindex="-1"><a class="header-anchor" href="#visual-construction"><span>Visual construction</span></a></h2>
<blockquote>
<p>Small programs and h5 home page and custom pages support visual development, so you need to build a separate visual end, you can carry out visual development through the background</p>
</blockquote>
<ul>
<li>Modify the configuration file: <code v-pre>client/uni - app/mall - cook - platform/SRC/config/global of js</code> <code v-pre>baseApi</code> and <code v-pre>viewUrl</code> for their domain name</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> client/uni-app/mall-cook-platform
<span class="token function">npm</span> run build
<span class="token comment"># Packaged files are automatically stored in the api/public directory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cash-register-construction" tabindex="-1"><a class="header-anchor" href="#cash-register-construction"><span>Cash register construction</span></a></h2>
<ul>
<li>Modify the configuration file: <code v-pre>cashier/advc/env. The production of</code> <code v-pre>VITE_API_BASE_URL</code> into their own domain name</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> cashier/advc
<span class="token function">npm</span> run build
<span class="token comment"># Packaged files are automatically stored in the api/public directory</span>
<span class="token comment"># Visit tfshop-pro.test/advc to view checkout results</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-the-supervisor-process-to-guard-the-monitoring" tabindex="-1"><a class="header-anchor" href="#use-the-supervisor-process-to-guard-the-monitoring"><span>Use the supervisor process to guard the monitoring</span></a></h3>
<ul>
<li>Use supervisor process daemon monitoring to manage your queues and scheduled tasks</li>
<li>For the environment built based on docker single application deployment, the supervisor has been installed and started by default. Please handle other environments by yourself</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># example(scheduled task), tfshop-pro-worker.conf.example(queue), and tfshop-pro-swoole.conf.example(swoole) in the /dsdocker/docker/supervisor/conf.d directory.</span>
<span class="token comment"># Generally do not need to modify, directly remove the.example of these three file names</span>
<span class="token comment"># Enter the php container</span>
<span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> php <span class="token function">bash</span>
<span class="token comment"># Update supervisor</span>
supervisorctl update
<span class="token comment"># View the status of all processes</span>
supervisorctl status
<span class="token comment"># Log path:/var/log/supervisor/supervisord.log</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enable-cache" tabindex="-1"><a class="header-anchor" href="#enable-cache"><span>Enable cache</span></a></h3>
<blockquote>
<p>If the project is officially running and you want to improve the efficiency of the RSET API, you can perform corresponding caching operations</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token comment"># Enabling route caching</span>
php artisan route:cache
<span class="token comment"># clear cache</span>
<span class="token comment">#php artisan route:clear</span>
<span class="token comment"># Enabling configuration cache</span>
php artisan config:cache
<span class="token comment"># Clear cache</span>
<span class="token comment">#php artisan config:clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


