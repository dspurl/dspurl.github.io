<template><div><h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h1>
<h2 id="profile-api" tabindex="-1"><a class="header-anchor" href="#profile-api"><span>Profile API</span></a></h2>
<p>The basic configuration file for the tfshop API is<code v-pre>.env</code>
A basic configuration file is like this, after the project is built, configurable parameters can also be configured in the background:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>APP_NAME=tfshop
APP_ENV=local
APP_KEY=base64:1dBGpFr/ulFhwh1RxwFcLAEVNxAtcObcVoVrLliTY5c=
APP_DEBUG=true
TIMEZONE=Asia/Shanghai
APP_URL=http://tfshop.test
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tfshop
DB_USERNAME=root
DB_PASSWORD=root
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_DB=1
REDIS_PASSWORD=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="background-configuration" tabindex="-1"><a class="header-anchor" href="#background-configuration"><span>Background configuration</span></a></h2>
<p>The basic configuration file of tfshop background configuration is<code v-pre>config\dev.env.js</code>, and the formal environment is<code v-pre>config\prod.env.js</code>
A basic configuration file looks like this:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">'"development"'</span><span class="token punctuation">,</span>
  <span class="token constant">ENV_CONFIG</span><span class="token operator">:</span> <span class="token string">'"dev"'</span><span class="token punctuation">,</span>
  <span class="token constant">SITE_NAME</span><span class="token operator">:</span> <span class="token string">'"TFSHOP电商商城"'</span><span class="token punctuation">,</span>
  <span class="token constant">BASE_API</span><span class="token operator">:</span> <span class="token string">'"http://tfshop.test/api/v1/admin/"'</span><span class="token punctuation">,</span>
  <span class="token constant">H5_URL</span><span class="token operator">:</span> <span class="token string">'"http://tfshop.test/h5/#/"'</span><span class="token punctuation">,</span>
  <span class="token constant">BASE_HTTP</span><span class="token operator">:</span> <span class="token string">'"http://tfshop.test"'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uniapp-configuration" tabindex="-1"><a class="header-anchor" href="#uniapp-configuration"><span>uniapp configuration</span></a></h2>
<p>The basic configuration file of tfshop background configuration is<code v-pre>utils\config.js</code>
A basic configuration file looks like this:</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> domainName <span class="token operator">=</span> <span class="token string">'http://tfshop.test'</span>
configURL <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lbsQq</span><span class="token operator">:</span> <span class="token string">'lbs_qq_key'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">DomainName</span><span class="token operator">:</span> domainName<span class="token punctuation">,</span>
    <span class="token literal-property property">BaseURL</span><span class="token operator">:</span> domainName <span class="token operator">+</span><span class="token constant">INTERFACE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">'base64:szoJ3mSx/5U7zOsJfU7s4pSahiwdh01x6badmz5FtCM='</span>
<span class="token punctuation">}</span>
applyDsshopNodeEnv <span class="token operator">=</span> <span class="token string">'test'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


