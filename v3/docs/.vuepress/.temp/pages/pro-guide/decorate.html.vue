<template><div><h1 id="装修" tabindex="-1"><a class="header-anchor" href="#装修"><span>装修</span></a></h1>
<h2 id="版块" tabindex="-1"><a class="header-anchor" href="#版块"><span>版块</span></a></h2>
<blockquote>
<p>装修分为两大版块，一个商城版块，一个页面版块</p>
</blockquote>
<h3 id="商城" tabindex="-1"><a class="header-anchor" href="#商城"><span>商城</span></a></h3>
<blockquote>
<p>用来设置底部导航，可以配置1-4个导航（不包括首页），链接仅支持微页面和自定义页面</p>
<p>图标支持自定义，通过<code v-pre>tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\public\index.html</code>引入图标文件，<code v-pre>tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\src\components\IconSelect\index.vue</code>文件中添加新的图标，参考<a href="https://www.uviewui.com/guide/customIcon.html" target="_blank" rel="noopener noreferrer">https://www.uviewui.com/guide/customIcon.html<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="页面" tabindex="-1"><a class="header-anchor" href="#页面"><span>页面</span></a></h3>
<blockquote>
<p>可装修首页及自定义新的页面</p>
<p>拖拽布局，这里不做过多介绍</p>
</blockquote>
<h2 id="便捷方法" tabindex="-1"><a class="header-anchor" href="#便捷方法"><span>便捷方法</span></a></h2>
<h4 id="isiframe" tabindex="-1"><a class="header-anchor" href="#isiframe"><span>isIframe</span></a></h4>
<blockquote>
<p>用来区分布局模式还是运行模式，一般用于物料在布局模式下的默认数据</p>
<p>用法：在物料页面中引入<code v-pre>isIframe</code>,在需要的时候判断<code v-pre>isIframe</code>是否为<code v-pre>true</code>，为<code v-pre>true</code>则当前为布局模式</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"isIframe"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="unit" tabindex="-1"><a class="header-anchor" href="#unit"><span>$unit</span></a></h4>
<blockquote>
<p>用来将数字转成样式单位rpx</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$unit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10rpx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明"><span>配置说明</span></a></h2>
<blockquote>
<p>可通过<code v-pre>tfshop-pro\client\uni-app\mall-cook\mall-cook-platform\src\custom-schema-template\components</code>自定义其他属性，用于在<code v-pre>component.json</code>中使用</p>
<p>图标可通过商城导航的图标获取</p>
<p>以下为系统自带的属性</p>
</blockquote>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>number</td>
<td>number</td>
<td>滑块</td>
</tr>
<tr>
<td>string</td>
<td>string</td>
<td>表单输入</td>
</tr>
<tr>
<td>time</td>
<td>string</td>
<td>日期时间</td>
</tr>
<tr>
<td>select</td>
<td>string</td>
<td>单选框</td>
</tr>
<tr>
<td>color</td>
<td>string</td>
<td>颜色选择器</td>
</tr>
<tr>
<td>goods</td>
<td>Array</td>
<td>商品选择器</td>
</tr>
<tr>
<td>upload</td>
<td>string</td>
<td>图片上传</td>
</tr>
<tr>
<td>switch</td>
<td>boolean</td>
<td>开关选择器</td>
</tr>
<tr>
<td>jump</td>
<td>Object</td>
<td>路由选择器</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token string-property property">"session"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"label"</span><span class="token operator">:</span> <span class="token string">"是否显示场次"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"switch"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"value"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发物料" tabindex="-1"><a class="header-anchor" href="#开发物料"><span>开发物料</span></a></h2>
<blockquote>
<p>物料所在位置<code v-pre>tfshop-pro\client\uni-app\mall-cook\mall-cook-template\src\widgets</code>目录，每个目录即一个物料</p>
</blockquote>
<h2 id="创建一个物料" tabindex="-1"><a class="header-anchor" href="#创建一个物料"><span>创建一个物料</span></a></h2>
<blockquote>
<p>以下以制作一个秒杀物料为例</p>
</blockquote>
<ul>
<li>复制一份物料，命名为TfSeckill并重命名vue文件名字为TfSeckill，TfSeckill的name也改成TfSeckill</li>
</ul>
<p><img src="/image/20240704153153.png" alt="图片"></p>
<ul>
<li>修改<code v-pre>\component.json</code>中的mane为秒杀，用来区分其他组件</li>
</ul>
<p><img src="/image/20240704153556.png" alt="图片"></p>
<ul>
<li>修改<code v-pre>tfshop-pro\client\uni-app\mall-cook\mall-cook-template\src\components\render-widget.vue</code>，添加TfSeckill组件，以下为参考代码，实际为你复制的组件代码，参数什么可不用改，后期会一步步的修改</li>
</ul>
<p><img src="/image/20240704154045.png" alt="图片"></p>
<ul>
<li>然后到装修页面，就能看到新添加的组件秒杀了</li>
</ul>
<p><img src="/image/20240704154334.png" alt="图片"></p>
<h2 id="编写物料" tabindex="-1"><a class="header-anchor" href="#编写物料"><span>编写物料</span></a></h2>
<ul>
<li>为TfSeckill编写界面（通过vue+css生成所需界面），暂时不需要考虑交互代码，如下
<img src="/image/20240705134843.png" alt="图片"></li>
<li>修改<code v-pre>component.json</code>代码，这里参考前面的“配置说明”，主要就是实现对物料的样式、布局等动态修改。</li>
<li><code v-pre>component.json</code>的<code v-pre>fields</code>定义的参数需要在<code v-pre>render-widget.vue</code>和物料页面进行引入(因uni-app不支持v-bind，所以需要手动引入)</li>
</ul>
</div></template>


