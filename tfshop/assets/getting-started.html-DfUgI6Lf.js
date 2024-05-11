import{_ as e,a as i,b as n,c as s}from"./20240510143752-DZ4A3ttv.js";import{_ as a,o as l,c as d,a as t}from"./app-BUnIihfp.js";const r={},c=t('<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span>快速上手</span></a></h1><h2 id="api搭建" tabindex="-1"><a class="header-anchor" href="#api搭建"><span>API搭建</span></a></h2><h3 id="phpstudy" tabindex="-1"><a class="header-anchor" href="#phpstudy"><span>phpstudy</span></a></h3><ol><li>下载项目到phpstudy项目目录，这里假设为d盘下的www目录</li><li>解压项目到www目录下</li><li>打开phpstudy，网站-&gt;创建网站，域名将是后面你访问该项目的域名；根目录选择你的项目地址下的api/public目录；勾选同步hosts，php版本选7.4.3</li></ol><p><img src="'+e+`" alt="图片"> 4. 选择伪静态，复制以下代码</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>location / {
    try_files $uri $uri/ /index.php?$query_string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>进入api根目录，修改.env配置信息</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 如果根目录下没有.env文件，请复制.env.dev并重命名为.env,以下为数据库连接信息，修改成自己的数据库信息
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tfshop
DB_USERNAME=root
DB_PASSWORD=root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>执行命令行代码</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>php artisan migrate
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
# 选择\`admins\`
# 修改.env，添加OAuth认证信息
PASSPORT_CLIENT_ID=&quot;生成的Client ID&quot;
PASSPORT_CLIENT_SECRET=&quot;生成的 Client secret&quot;
# 创建密码授权客户端
php artisan passport:client --password
# 选择\`users\`
# 修改.env，添加OAuth认证信息
PASSPORT_WEB_ID=&quot;生成的Client ID&quot;
PASSPORT_WEB_SECRET=&quot;生成的 Client secret&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="图片"></p><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://gitee.com/dswjcms/tfshop.git
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
# 选择\`admins\`
# 修改.env，添加OAuth认证信息
PASSPORT_CLIENT_ID=&quot;生成的Client ID&quot;
PASSPORT_CLIENT_SECRET=&quot;生成的 Client secret&quot;
# 创建密码授权客户端
php artisan passport:client --password
# 选择\`users\`
# 修改.env，添加OAuth认证信息
PASSPORT_WEB_ID=&quot;生成的Client ID&quot;
PASSPORT_WEB_SECRET=&quot;生成的 Client secret&quot;
# 给storage777权限
chmod -R 777 storage/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后台搭建" tabindex="-1"><a class="header-anchor" href="#后台搭建"><span>后台搭建</span></a></h2><blockquote><p>以下所说的项目目录即你下载的tfshop所放置的位置</p><p>以下以element-admin-v3为例</p></blockquote><ol><li>进入项目目录，进入<code>admin\\vue2\\element-admin-v3</code>目录(后期可能会变更，总之在admin目录下)</li><li>修改<code>admin\\vue2\\element-admin-v3\\config\\dev.env.js</code>配置文件中的API地址，改成上面配置的API域名 <img src="`+n+`" alt="图片"></li><li>打开命令行，执行以下代码</li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="uni-app搭建" tabindex="-1"><a class="header-anchor" href="#uni-app搭建"><span>uni-app搭建</span></a></h2><ol><li>打开HBuilder X</li><li>文件-&gt;导入-&gt;从本地目录导入</li><li>选择<code>dsshop\\client\\uni-app\\mix-mall</code></li><li>修改<code>utlis/config.js</code>中相关api地址代码 <img src="`+s+'" alt="图片"></li></ol>',19),v=[c];function u(p,o){return l(),d("div",null,v)}const b=a(r,[["render",u],["__file","getting-started.html.vue"]]),g=JSON.parse('{"path":"/guide/getting-started.html","title":"快速上手","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"API搭建","slug":"api搭建","link":"#api搭建","children":[{"level":3,"title":"phpstudy","slug":"phpstudy","link":"#phpstudy","children":[]},{"level":3,"title":"docker","slug":"docker","link":"#docker","children":[]}]},{"level":2,"title":"后台搭建","slug":"后台搭建","link":"#后台搭建","children":[]},{"level":2,"title":"uni-app搭建","slug":"uni-app搭建","link":"#uni-app搭建","children":[]}],"git":{"updatedTime":1715405318000,"contributors":[{"name":"dspurl","email":"49799121+dspurl@users.noreply.github.com","commits":1}]},"filePathRelative":"guide/getting-started.md"}');export{b as comp,g as data};
