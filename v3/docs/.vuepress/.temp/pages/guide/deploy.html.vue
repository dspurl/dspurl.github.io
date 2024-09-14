<template><div><h1 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h1>
<h2 id="api部署" tabindex="-1"><a class="header-anchor" href="#api部署"><span>API部署</span></a></h2>
<ol>
<li>将API项目打包上传到服务器</li>
<li>解压后，修改<code v-pre>.env</code>信息</li>
</ol>
<h2 id="后台部署" tabindex="-1"><a class="header-anchor" href="#后台部署"><span>后台部署</span></a></h2>
<ol>
<li>进入后台目录，修改配置信息<code v-pre>prod.env.js</code></li>
<li>执行打包<code v-pre>npm run build:prod</code></li>
<li>然后将打包好生成的文件上传到服务器，也可以发给别人直接访问（需要对方有本地环境，双击访问index.html无效）</li>
</ol>
<h2 id="uniapp部署" tabindex="-1"><a class="header-anchor" href="#uniapp部署"><span>uniapp部署</span></a></h2>
<ol>
<li>打开Huilder X，选择发行，发行到想要的终端即可，发行前请修改配置信息<code v-pre>config.js</code></li>
</ol>
</div></template>


