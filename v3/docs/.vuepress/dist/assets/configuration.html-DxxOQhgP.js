import{_ as n,o as s,c as a,a as e}from"./app-DGDGLuI8.js";const i={},t=e(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h1><h2 id="profile-api" tabindex="-1"><a class="header-anchor" href="#profile-api"><span>Profile API</span></a></h2><p>The basic configuration file for the tfshop API is<code>.env</code> A basic configuration file is like this, after the project is built, configurable parameters can also be configured in the background:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>APP_NAME=tfshop
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="background-configuration" tabindex="-1"><a class="header-anchor" href="#background-configuration"><span>Background configuration</span></a></h2><p>The basic configuration file of tfshop background configuration is<code>config\\dev.env.js</code>, and the formal environment is<code>config\\prod.env.js</code> A basic configuration file looks like this:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">&#39;&quot;development&quot;&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">ENV_CONFIG</span><span class="token operator">:</span> <span class="token string">&#39;&quot;dev&quot;&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">SITE_NAME</span><span class="token operator">:</span> <span class="token string">&#39;&quot;TFSHOP电商商城&quot;&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">BASE_API</span><span class="token operator">:</span> <span class="token string">&#39;&quot;http://tfshop.test/api/v1/admin/&quot;&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">H5_URL</span><span class="token operator">:</span> <span class="token string">&#39;&quot;http://tfshop.test/h5/#/&quot;&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">BASE_HTTP</span><span class="token operator">:</span> <span class="token string">&#39;&quot;http://tfshop.test&quot;&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uniapp-configuration" tabindex="-1"><a class="header-anchor" href="#uniapp-configuration"><span>uniapp configuration</span></a></h2><p>The basic configuration file of tfshop background configuration is<code>utils\\config.js</code> A basic configuration file looks like this:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> domainName <span class="token operator">=</span> <span class="token string">&#39;http://tfshop.test&#39;</span>
configURL <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">lbsQq</span><span class="token operator">:</span> <span class="token string">&#39;lbs_qq_key&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">DomainName</span><span class="token operator">:</span> domainName<span class="token punctuation">,</span>
    <span class="token literal-property property">BaseURL</span><span class="token operator">:</span> domainName <span class="token operator">+</span><span class="token constant">INTERFACE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">secret</span><span class="token operator">:</span> <span class="token string">&#39;base64:szoJ3mSx/5U7zOsJfU7s4pSahiwdh01x6badmz5FtCM=&#39;</span>
<span class="token punctuation">}</span>
applyDsshopNodeEnv <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function p(c,l){return s(),a("div",null,o)}const d=n(i,[["render",p],["__file","configuration.html.vue"]]),u=JSON.parse('{"path":"/en/guide/configuration.html","title":"Configuration","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Profile API","slug":"profile-api","link":"#profile-api","children":[]},{"level":2,"title":"Background configuration","slug":"background-configuration","link":"#background-configuration","children":[]},{"level":2,"title":"uniapp configuration","slug":"uniapp-configuration","link":"#uniapp-configuration","children":[]}],"git":{"updatedTime":1715405318000,"contributors":[{"name":"dspurl","email":"49799121+dspurl@users.noreply.github.com","commits":1}]},"filePathRelative":"en/guide/configuration.md"}');export{d as comp,u as data};
